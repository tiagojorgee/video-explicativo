# 🚀 Como Rodar do GitHub

## ⚡ Quick Start (5 Minutos)

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/tiagojorgee/video-explicativo.git
cd video-explicativo
```

### 2️⃣ Configure a Chave OpenAI

```bash
cp .env.example .env
```

**Edite `.env` e adicione sua chave:**

```env
OPENAI_API_KEY=sk-seu-chave-aqui
DEBUG=False
VIDEO_OUTPUT_DIR=./videos
TEMP_DIR=./temp
MAX_VIDEO_DURATION=600
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000
```

**Obtenha sua chave:** https://platform.openai.com/api-keys

### 3️⃣ Execute o Setup

#### Linux / macOS

```bash
chmod +x setup.sh
bash setup.sh
```

#### Windows

```bash
setup.bat
```

### 4️⃣ Acesse a Aplicação

```
Frontend: http://localhost:3000
Backend: http://localhost:8000
Docs: http://localhost:8000/docs
```

---

## 🐳 Opção 1: Docker Compose (Recomendado)

### Pré-requisitos

- Docker Desktop instalado
- Docker Compose instalado

### Passos

```bash
# 1. Clone
git clone https://github.com/tiagojorgee/video-explicativo.git
cd video-explicativo

# 2. Configure
cp .env.example .env
# Edite .env com sua chave OpenAI

# 3. Inicie
docker-compose up -d

# 4. Verifique status
docker-compose ps

# Logs
docker-compose logs -f
```

**URLs:**
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

**Parar a aplicação:**
```bash
docker-compose down
```

---

## 💻 Opção 2: Instalação Local

### Pré-requisitos

- Python 3.11+
- Node.js 18+
- FFmpeg instalado
- Chave OpenAI

### Backend

```bash
# 1. Navegue para backend
cd backend

# 2. Crie ambiente virtual
python -m venv venv

# 3. Ative ambiente
# Linux/macOS:
source venv/bin/activate

# Windows:
venv\Scripts\activate

# 4. Instale dependências
pip install -r requirements.txt

# 5. Configure variáveis
cp .env.example .env
# Edite .env com sua chave OpenAI

# 6. Inicie servidor
python main.py
```

**Backend rodará em:** http://localhost:8000

### Frontend (em outro terminal)

```bash
# 1. Navegue para frontend
cd frontend

# 2. Instale dependências
npm install

# 3. Inicie servidor
npm run dev
```

**Frontend rodará em:** http://localhost:3000

---

## 📱 Opção 3: Rodar em Celular (Mesma Rede WiFi)

### Na Mesma Rede

```bash
# Computador
cd video-explicativo
bash setup.sh

# Descobrir IP local
# macOS/Linux:
ifconfig | grep "inet "

# Windows:
ipconfig
# Procure por: 192.168.x.x
```

### No Celular

1. **Conecte ao mesmo WiFi**
2. **Abra navegador e acesse:**
   ```
   http://192.168.x.x:3000
   ```

3. **Configure o backend (se local):**
   - Crie `frontend/.env.local`
   - Adicione:
     ```env
     REACT_APP_API_URL=http://192.168.x.x:8000/api/v1
     ```

4. **Instale como PWA:**
   - **iPhone:** Safari → Compartilhar → "Adicionar à Tela de Início"
   - **Android:** Chrome → Menu ⋮ → "Instalar aplicativo"

---

## 🌐 Opção 4: Rodar com Backend Remoto

### Heroku

```bash
# Deploy Backend
cd backend
heroku create seu-app-backend
git push heroku main

# Configure variáveis
heroku config:set OPENAI_API_KEY=sk-seu-chave

# Get URL
heroku apps:info seu-app-backend
```

### Frontend `.env.local`

```env
REACT_APP_API_URL=https://seu-app-backend.herokuapp.com/api/v1
```

### AWS / Google Cloud / DigitalOcean

**Backend:**
```bash
# Deploy Docker
docker build -t seu-app:latest .
# Push para seu registry

# Execute em sua cloud
# Docker rodará backend
```

**Frontend:**
```env
REACT_APP_API_URL=https://seu-dominio.com/api/v1
```

---

## 🔧 Instalação de Dependências

### Se FFmpeg não encontrado

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install ffmpeg
```

**macOS:**
```bash
brew install ffmpeg
```

**Windows:**
- Download: https://ffmpeg.org/download.html
- Ou: `choco install ffmpeg`

### Se Python não encontrado

- Download: https://www.python.org/downloads/
- Instale 3.11 ou superior
- Adicione ao PATH

### Se Node.js não encontrado

- Download: https://nodejs.org/
- Instale LTS (18+)

---

## 📊 Verificar Instalação

```bash
# Python
python --version  # 3.11+

# Node.js
node --version    # 18+
npm --version     # 9+

# FFmpeg
ffmpeg -version

# Docker (opcional)
docker --version
docker-compose --version
```

---

## 🧪 Testar a Aplicação

### Backend

```bash
# Verificar saúde
curl http://localhost:8000/health

# Ver documentação
# Abra: http://localhost:8000/docs
```

### Frontend

```bash
# Abra navegador
http://localhost:3000

# Teste com pergunta simples:
# Ex: "Como fazer um café?"
```

---

## 🐛 Troubleshooting

### Erro: "OPENAI_API_KEY not found"

✅ **Solução:**
```bash
# Verifique se .env existe
ls .env  # ou dir .env no Windows

# Edite .env e adicione chave
nano .env  # ou seu editor

# Reinicie backend
python main.py
```

### Erro: "Port already in use"

✅ **Solução:**
```bash
# Altere portas em .env ou docker-compose.yml

# Linux/macOS - Liberar porta
lsof -i :3000
kill -9 <PID>

# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

### Erro: "FFmpeg not found"

✅ **Solução:** Veja [Instalação de Dependências](#instalação-de-dependências)

### Erro: "ModuleNotFoundError"

✅ **Solução:**
```bash
# Certifique-se de estar no venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

# Reinstale dependências
pip install -r requirements.txt
```

### Erro: "npm ERR! code ERESOLVE"

✅ **Solução:**
```bash
# Use legacy peer deps
npm install --legacy-peer-deps

# Ou atualizar npm
npm install -g npm@latest
npm install
```

---

## 📋 Checklist de Setup

- [ ] Git instalado
- [ ] Python 3.11+ instalado
- [ ] Node.js 18+ instalado
- [ ] FFmpeg instalado
- [ ] Repositório clonado
- [ ] `.env` criado com chave OpenAI
- [ ] Dependências instaladas (pip + npm)
- [ ] Backend rodando (`python main.py`)
- [ ] Frontend rodando (`npm run dev`)
- [ ] Acessível em `http://localhost:3000`
- [ ] API documentação em `http://localhost:8000/docs`

---

## 🎥 Teste o Primeiro Vídeo

1. **Acesse** http://localhost:3000
2. **Digite uma pergunta:**
   - "Como fazer um café?"
   - "Como instalar uma lâmpada?"
   - "Como trocar um pneu?"

3. **Escolha idioma** (padrão: Português BR)
4. **Escolha estilo** (padrão: Formal)
5. **Clique "🚀 Gerar Vídeo"**
6. **Aguarde 2-5 minutos**
7. **Baixe o MP4** quando pronto
8. **Assista e compartilhe!** 🎉

---

## 📚 Documentação Adicional

- [README Principal](./README.md)
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
- [Quick Start](./QUICKSTART.md)
- [Guia Mobile](./MOBILE_GUIDE.md)
- [Docker Commands](./DOCKER_COMMANDS.md)
- [Contributing](./CONTRIBUTING.md)

---

## 💡 Dicas Úteis

### Desenvolvimento

```bash
# Hot reload Frontend
npm run dev

# Watch Backend (instale nodemon)
pip install nodemon
nodemon -e py -x python main.py

# Logs detalhados
# Backend: DEBUG=True no .env
# Frontend: Abra DevTools (F12)
```

### Produção

```bash
# Build Frontend
cd frontend
npm run build
# Gera pasta `dist/`

# Build Backend Docker
docker build -t video-explicativo:latest .

# Deploy
# Consulte plataforma (Heroku, AWS, etc)
```

### Limpeza

```bash
# Remove venv
rm -rf backend/venv

# Remove node_modules
rm -rf frontend/node_modules

# Remove vídeos/temp
rm -rf backend/videos backend/temp

# Limpar Docker
docker-compose down -v
```

---

## 🚀 Próximos Passos

1. ✅ Clone o repositório
2. ✅ Configure `.env`
3. ✅ Execute `setup.sh` ou `setup.bat`
4. ✅ Acesse http://localhost:3000
5. ✅ Gere seu primeiro vídeo!
6. ✅ Compartilhe conosco no GitHub! ⭐

---

## 📞 Suporte

- 🐛 [Issues](https://github.com/tiagojorgee/video-explicativo/issues)
- 💬 [Discussions](https://github.com/tiagojorgee/video-explicativo/discussions)
- 📧 Email: 91836437+tiagojorgee@users.noreply.github.com

---

**Desenvolvido com ❤️ para ser simples de rodar**

🎬 **Pronto? Vamos começar!** 🚀
