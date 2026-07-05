# Video Explicativo Generator - Backend

Backend FastAPI para geração de vídeos explicativos com IA.

## 🚀 Como Iniciar

### Instalação

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Configuração

Crie um arquivo `.env` na raiz do backend:

```env
OPENAI_API_KEY=sk-your-key-here
DEBUG=True
VIDEO_OUTPUT_DIR=./videos
TEMP_DIR=./temp
MAX_VIDEO_DURATION=600
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000
```

### Desenvolvimento

```bash
python main.py
```

API rodará em `http://localhost:8000`

Documentação interativa: `http://localhost:8000/docs`

## 📁 Estrutura do Projeto

```
backend/
├── main.py                 # Aplicação FastAPI
├── models.py               # Schemas Pydantic
├── requirements.txt        # Dependências Python
├── .env.example            # Exemplo de variáveis de ambiente
├── routes/
│   ├── __init__.py
│   └── videos.py           # Rotas da API de vídeos
├── services/
│   ├── __init__.py
│   ├── ai_service.py       # Serviço GPT para geração de roteiro
│   ├── tts_service.py      # Serviço Text-to-Speech
│   ├── image_service.py    # Serviço de geração de imagens
│   └── video_service.py    # Serviço de edição de vídeos
├── videos/                 # Diretório de saída dos vídeos
└── temp/                   # Diretório de arquivos temporários
```

## 🔌 Endpoints da API

### POST `/api/v1/videos/generate`
Inicia a geração de um vídeo.

**Request:**
```json
{
  "question": "Como instalar uma lâmpada?",
  "language": "pt-BR",
  "style": "formal",
  "duration_target": 300
}
```

**Response:**
```json
{
  "id": "uuid-do-job",
  "status": "processing",
  "question": "Como instalar uma lâmpada?",
  "created_at": "2024-01-01T12:00:00",
  "estimated_duration": 300
}
```

### GET `/api/v1/videos/status/{job_id}`
Obtém o status de um trabalho de geração.

**Response:**
```json
{
  "id": "uuid-do-job",
  "status": "completed",
  "question": "Como instalar uma lâmpada?",
  "video_url": "/path/to/video.mp4",
  "created_at": "2024-01-01T12:00:00"
}
```

### GET `/api/v1/videos/download/{job_id}`
Faz download do vídeo gerado (MP4).

### GET `/api/v1/videos/list`
Lista todos os vídeos gerados.

## 🔧 Serviços

### AIService
Utiliza GPT-4 para:
- Gerar roteiros estruturados
- Otimizar textos para narração

### TTSService
Converte texto em áudio usando gTTS:
- Suporta múltiplos idiomas
- Genera arquivos MP3

### ImageService
Cria slides visuais:
- Slides de título
- Slides de conteúdo com texto
- Customização de cores

### VideoService
Edita e compila vídeos:
- Combina imagens + áudio
- Gera MP4 final em HD (1280x720)
- Limpeza de arquivos temporários

## 📊 Fluxo de Geração

```
1. Usuário envia pergunta
   ↓
2. GPT gera roteiro estruturado (introdução + passos + conclusão)
   ↓
3. gTTS converte cada passo em áudio MP3
   ↓
4. ImageService cria slides visuais para cada passo
   ↓
5. VideoService combina imagens + áudio em vídeo MP4
   ↓
6. Vídeo salvo em ./videos/ e pronto para download
```

## 🎯 Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| OPENAI_API_KEY | Chave da API OpenAI | - |
| DEBUG | Modo debug | False |
| VIDEO_OUTPUT_DIR | Diretório de saída de vídeos | ./videos |
| TEMP_DIR | Diretório de arquivos temporários | ./temp |
| MAX_VIDEO_DURATION | Duração máxima do vídeo (seg) | 600 |
| ALLOWED_ORIGINS | CORS origins permitidos | http://localhost:3000 |

## 📦 Dependências Principais

- **fastapi**: Framework web
- **openai**: IA para geração de conteúdo
- **gtts**: Text-to-speech
- **moviepy**: Edição de vídeo
- **pillow**: Geração de imagens
- **pydantic**: Validação de dados

## ⚠️ Observações Importantes

1. **Chave OpenAI**: Necessária para funcionamento. Obtenha em https://platform.openai.com/api-keys
2. **FFmpeg**: MoviePy requer FFmpeg instalado no sistema
3. **Custos**: Cada geração consome tokens da API OpenAI (custos associados)
4. **Tempo**: Geração típica leva 2-5 minutos

## 🐛 Troubleshooting

### Erro: "OPENAI_API_KEY not found"
Certifique-se de criar o arquivo `.env` com sua chave OpenAI.

### Erro: "FFmpeg not found"
Instale FFmpeg:
- Ubuntu: `sudo apt-get install ffmpeg`
- macOS: `brew install ffmpeg`
- Windows: https://ffmpeg.org/download.html

### Vídeo não é gerado
- Verifique logs na console do backend
- Confirme que a chave OpenAI é válida
- Verifique permissões nas pastas `videos/` e `temp/`

---

**Desenvolvido por:** tiagojorgee 🚀