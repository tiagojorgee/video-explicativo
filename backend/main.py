import os
import uuid
from datetime import datetime
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import asyncio
from pathlib import Path

from models import VideoRequest, VideoResponse
from services.ai_service import AIService
from services.tts_service import TTSService
from services.image_service import ImageService
from services.video_service import VideoService

from dotenv import load_dotenv
load_dotenv()

app = FastAPI(
    title="Video Explicativo Generator API",
    description="API para geração automática de vídeos explicativos",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serviços
ai_service = AIService()
tts_service = TTSService()
image_service = ImageService()
video_service = VideoService()

# Store para rastrear jobs
jobs_store = {}

@app.get("/health")
async def health_check():
    """Verifica a saúde da API"""
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

@app.post("/api/v1/videos/generate", response_model=VideoResponse)
async def generate_video(request: VideoRequest):
    """Inicia a geração de um vídeo"""
    
    if len(request.question) < 10:
        raise HTTPException(status_code=400, detail="Pergunta deve ter pelo menos 10 caracteres")
    
    job_id = str(uuid.uuid4())
    
    jobs_store[job_id] = {
        "id": job_id,
        "status": "processing",
        "question": request.question,
        "language": request.language,
        "style": request.style,
        "created_at": datetime.now().isoformat(),
        "video_url": None,
        "error": None
    }
    
    asyncio.create_task(process_video_job(job_id, request))
    
    return VideoResponse(
        id=job_id,
        status="processing",
        question=request.question,
        created_at=jobs_store[job_id]["created_at"],
        estimated_duration=request.duration_target
    )

async def process_video_job(job_id: str, request: VideoRequest):
    """Processa o vídeo em background"""
    
    try:
        print(f"[{job_id}] Iniciando processamento...")
        
        script = await ai_service.generate_script(request.question, request.language)
        print(f"[{job_id}] Roteiro gerado: {script.title}")
        
        lang_code = request.language.split('-')[0]
        audio_paths = []
        
        intro_audio = await tts_service.text_to_speech(
            script.introduction,
            lang_code,
            f"{job_id}_intro.mp3"
        )
        audio_paths.append(intro_audio)
        print(f"[{job_id}] Introdução gerada")
        
        for i, step in enumerate(script.steps):
            step_audio = await tts_service.text_to_speech(
                f"{step.title}. {step.description}",
                lang_code,
                f"{job_id}_step_{i}.mp3"
            )
            audio_paths.append(step_audio)
            print(f"[{job_id}] Passo {i+1} gerado")
        
        conclusion_audio = await tts_service.text_to_speech(
            script.conclusion,
            lang_code,
            f"{job_id}_conclusion.mp3"
        )
        audio_paths.append(conclusion_audio)
        print(f"[{job_id}] Conclusão gerada")
        
        print(f"[{job_id}] Gerando slides...")
        image_paths = []
        
        title_slide = await image_service.create_title_slide(
            script.title,
            "Explicativo",
            f"{job_id}_title.png"
        )
        image_paths.append(title_slide)
        
        for i, step in enumerate(script.steps):
            slide = await image_service.create_slide(
                f"Passo {i+1}: {step.title}",
                step.description,
                f"{job_id}_step_{i}.png"
            )
            image_paths.append(slide)
        
        conclusion_slide = await image_service.create_slide(
            "Conclusão",
            script.conclusion,
            f"{job_id}_conclusion.png"
        )
        image_paths.append(conclusion_slide)
        print(f"[{job_id}] Slides gerados")
        
        print(f"[{job_id}] Compilando vídeo...")
        video_path = await video_service.create_video_from_script(
            script,
            image_paths,
            audio_paths
        )
        print(f"[{job_id}] Vídeo gerado: {video_path}")
        
        jobs_store[job_id]["status"] = "completed"
        jobs_store[job_id]["video_url"] = f"/api/v1/videos/download/{job_id}"
        print(f"[{job_id}] Processamento concluído!")
        
        video_service.cleanup_temp_files(image_paths + audio_paths)
        
    except Exception as e:
        print(f"[{job_id}] ERRO: {str(e)}")
        jobs_store[job_id]["status"] = "error"
        jobs_store[job_id]["error"] = str(e)

@app.get("/api/v1/videos/status/{job_id}")
async def get_video_status(job_id: str):
    """Obtém o status de um vídeo"""
    
    if job_id not in jobs_store:
        raise HTTPException(status_code=404, detail="Vídeo não encontrado")
    
    return jobs_store[job_id]

@app.get("/api/v1/videos/download/{job_id}")
async def download_video(job_id: str):
    """Faz download do vídeo gerado"""
    
    if job_id not in jobs_store:
        raise HTTPException(status_code=404, detail="Vídeo não encontrado")
    
    job = jobs_store[job_id]
    
    if job["status"] != "completed":
        raise HTTPException(status_code=400, detail="Vídeo ainda não está pronto")
    
    videos_dir = os.getenv("VIDEO_OUTPUT_DIR", "./videos")
    video_files = list(Path(videos_dir).glob(f"video_*{job_id}*.mp4"))
    
    if not video_files:
        raise HTTPException(status_code=404, detail="Arquivo não encontrado")
    
    video_path = str(video_files[0])
    return FileResponse(
        path=video_path,
        media_type="video/mp4",
        filename=f"video_{job_id}.mp4"
    )

@app.get("/api/v1/videos/list")
async def list_videos():
    """Lista todos os vídeos"""
    return {
        "total": len(jobs_store),
        "videos": list(jobs_store.values())
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000,
        log_level="info"
    )
