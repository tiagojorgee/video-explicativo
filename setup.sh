#!/bin/bash

# Setup Script para Video Explicativo Generator
# Este script configura o ambiente completo do projeto

echo "🎬 Video Explicativo Generator - Setup"
echo "======================================"
echo ""

# Verificar se .env existe
if [ ! -f ".env" ]; then
    echo "📝 Criando arquivo .env..."
    cp .env.example .env
    echo "✓ Arquivo .env criado com sucesso!"
    echo "⚠️  IMPORTANTE: Edite o arquivo .env e adicione sua chave OpenAI"
    echo ""
else
    echo "✓ Arquivo .env já existe"
    echo ""
fi

# Verificar Docker
if command -v docker &> /dev/null; then
    echo "✓ Docker está instalado"
    
    # Verificar Docker Compose
    if command -v docker-compose &> /dev/null; then
        echo "✓ Docker Compose está instalado"
        echo ""
        echo "🚀 Iniciando aplicação com Docker..."
        docker-compose up -d
        echo ""
        echo "✓ Aplicação iniciada!"
        echo "  - Frontend: http://localhost:3000"
        echo "  - Backend API: http://localhost:8000"
        echo "  - Documentação Swagger: http://localhost:8000/docs"
    else
        echo "✗ Docker Compose não encontrado. Instale em: https://docs.docker.com/compose/install/"
        exit 1
    fi
else
    echo "✗ Docker não encontrado. Instale em: https://docs.docker.com/get-docker/"
    echo ""
    echo "Alternativa: Instalação local"
    echo ""
    
    # Setup Backend
    echo "📦 Configurando Backend..."
    cd backend
    
    if ! command -v python3 &> /dev/null; then
        echo "✗ Python 3 não encontrado. Instale Python 3.11+"
        exit 1
    fi
    
    echo "✓ Python encontrado"
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    echo "✓ Backend configurado!"
    echo ""
    
    cd ..
    
    # Setup Frontend
    echo "📦 Configurando Frontend..."
    cd frontend
    
    if ! command -v npm &> /dev/null; then
        echo "✗ Node.js/npm não encontrado. Instale Node.js 18+"
        exit 1
    fi
    
    echo "✓ Node.js encontrado"
    npm install
    echo "✓ Frontend configurado!"
    echo ""
    
    cd ..
    
    echo "✓ Instalação local concluída!"
    echo ""
    echo "Para iniciar:"
    echo "  1. Backend: cd backend && source venv/bin/activate && python main.py"
    echo "  2. Frontend: cd frontend && npm start"
fi

echo ""
echo "✨ Setup concluído com sucesso!"
echo ""
echo "📖 Próximos passos:"
echo "  1. Acesse http://localhost:3000"
echo "  2. Faça uma pergunta e gere seu primeiro vídeo!"
echo ""
echo "💬 Dúvidas? Abra uma issue em: https://github.com/tiagojorgee/video-explicativo/issues"
