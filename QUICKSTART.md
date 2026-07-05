# 🚀 Quick Start Guide

## 5 Minutos para Começar

### Pré-requisitos
- Docker & Docker Compose (Recomendado)
- OU Python 3.11+ e Node.js 18+
- Chave da API OpenAI

### Opção 1: Docker (Mais Fácil) ⭐

```bash
# 1. Clone o repositório
git clone https://github.com/tiagojorgee/video-explicativo.git
cd video-explicativo

# 2. Configure a chave OpenAI
cp .env.example .env
# Edite .env e adicione sua chave

# 3. Execute o setup
# Linux/macOS:
bash setup.sh

# Windows:
setup.bat

# 4. Acesse http://localhost:3000
```

### Opção 2: Instalação Local

#### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edite .env com sua chave OpenAI
python main.py
```

#### Frontend (novo terminal)
```bash
cd frontend
npm install
npm start
```

## ✨ Primeiro Vídeo

1. Acesse http://localhost:3000
2. Digite uma pergunta (ex: "Como fazer um café?")
3. Escolha idioma e estilo
4. Clique em "🚀 Gerar Vídeo"
5. Aguarde 2-5 minutos
6. Baixe o vídeo MP4 gerado!

## 🔗 URLs Importantes

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **API Redoc**: http://localhost:8000/redoc

## 🐛 Problemas Comuns

### "Chave OpenAI não encontrada"
→ Edite o arquivo `.env` e adicione sua chave

### "FFmpeg not found"
→ Instale FFmpeg:
- Ubuntu: `sudo apt-get install ffmpeg`
- macOS: `brew install ffmpeg`
- Windows: https://ffmpeg.org/download.html

### "Port 3000/8000 já em uso"
→ Se usando Docker, mude as portas em `docker-compose.yml`

## 📚 Documentação Completa

- [README Principal](./README.md)
- [Backend](./backend/README.md)
- [Frontend](./frontend/README.md)

## 🆘 Precisa de Ajuda?

Abra uma [issue no GitHub](https://github.com/tiagojorgee/video-explicativo/issues)!

---

**Desenvolvido com ❤️ por [tiagojorgee](https://github.com/tiagojorgee)**
