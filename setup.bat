@echo off
REM Setup Script para Video Explicativo Generator (Windows)
REM Este script configura o ambiente completo do projeto

echo.
echo 4 Video Explicativo Generator - Setup
echo ======================================
echo.

REM Verificar se .env existe
if not exist ".env" (
    echo Criando arquivo .env...
    copy .env.example .env
    echo ✓ Arquivo .env criado com sucesso!
    echo ⚠  IMPORTANTE: Edite o arquivo .env e adicione sua chave OpenAI
    echo.
) else (
    echo ✓ Arquivo .env já existe
    echo.
)

REM Verificar Docker
where docker >nul 2>nul
if %errorlevel% equ 0 (
    echo ✓ Docker está instalado
    
    REM Verificar Docker Compose
    where docker-compose >nul 2>nul
    if %errorlevel% equ 0 (
        echo ✓ Docker Compose está instalado
        echo.
        echo Iniciando aplicação com Docker...
        docker-compose up -d
        echo.
        echo ✓ Aplicação iniciada!
        echo   - Frontend: http://localhost:3000
        echo   - Backend API: http://localhost:8000
        echo   - Documentação Swagger: http://localhost:8000/docs
    ) else (
        echo ✗ Docker Compose não encontrado. Instale em: https://docs.docker.com/compose/install/
        exit /b 1
    )
) else (
    echo ✗ Docker não encontrado. Instale em: https://docs.docker.com/get-docker/
    echo.
    echo Alternativa: Instalação local
    echo.
    
    REM Verificar Python
    where python >nul 2>nul
    if %errorlevel% equ 0 (
        echo ✓ Python encontrado
        echo Configurando Backend...
        cd backend
        python -m venv venv
        call venv\Scripts\activate.bat
        pip install -r requirements.txt
        echo ✓ Backend configurado!
        cd ..
        echo.
    ) else (
        echo ✗ Python não encontrado. Instale Python 3.11+
        exit /b 1
    )
    
    REM Verificar Node.js
    where npm >nul 2>nul
    if %errorlevel% equ 0 (
        echo ✓ Node.js encontrado
        echo Configurando Frontend...
        cd frontend
        call npm install
        echo ✓ Frontend configurado!
        cd ..
        echo.
    ) else (
        echo ✗ Node.js não encontrado. Instale Node.js 18+
        exit /b 1
    )
    
    echo ✓ Instalação local concluída!
    echo.
    echo Para iniciar:
    echo   1. Backend: cd backend && venv\Scripts\activate.bat && python main.py
    echo   2. Frontend: cd frontend && npm start
)

echo.
echo ✨ Setup concluído com sucesso!
echo.
echo Próximos passos:
echo   1. Acesse http://localhost:3000
echo   2. Faça uma pergunta e gere seu primeiro vídeo!
echo.
echo Dúvidas? Abra uma issue em: https://github.com/tiagojorgee/video-explicativo/issues
echo.
pause
