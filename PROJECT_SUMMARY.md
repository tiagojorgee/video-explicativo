# 🎬 Project Summary

## Projeto: Video Explicativo Generator

**Repositório:** https://github.com/tiagojorgee/video-explicativo

---

## 📊 Visão Geral

O **Video Explicativo Generator** é uma aplicação full-stack que automatiza a criação de vídeos educacionais profissionais a partir de perguntas simples do usuário.

### Funcionalidades Principais

✨ **Interface Intuitiva**
- Usuário faz uma pergunta em português
- Sistema gera automaticamente um vídeo explicativo
- Sem necessidade de conhecimento técnico

🤖 **Powered by AI**
- GPT-4 gera roteiros estruturados
- Análise inteligente de pergunta → decomposição em passos
- Otimização automática de conteúdo

🎤 **Narração Profissional**
- Text-to-Speech em múltiplos idiomas
- Áudio sincronizado com slides
- Qualidade broadcast-ready

🎨 **Slides Visuais Automáticos**
- Geração de imagens para cada passo
- Design limpo e profissional
- Customização de temas

📹 **Vídeo em HD**
- Resolução 1280x720 @ 30fps
- Codec H.264/AAC
- Formato MP4 universal

⚡ **Processamento Assíncrono**
- Não bloqueia interface
- Polling em tempo real
- Gerenciamento de jobs com UUID

---

## 🛠️ Stack Tecnológico

### Backend
| Tecnologia | Uso |
|-----------|-----|
| **FastAPI** | Framework web assíncrono |
| **Python 3.11+** | Linguagem de programação |
| **OpenAI GPT-4** | Geração de conteúdo |
| **gTTS** | Text-to-Speech |
| **MoviePy** | Edição de vídeo |
| **Pillow** | Geração de imagens |
| **Pydantic** | Validação de dados |
| **Docker** | Containerização |

### Frontend
| Tecnologia | Uso |
|-----------|-----|
| **React 18** | Biblioteca UI |
| **TypeScript** | Type safety |
| **TailwindCSS** | Estilização |
| **Axios** | HTTP client |
| **Node.js 18+** | Runtime |

### DevOps
| Tecnologia | Uso |
|-----------|-----|
| **Docker** | Containerização |
| **Docker Compose** | Orquestração local |
| **FFmpeg** | Processamento de mídia |

---

## 📁 Estrutura do Projeto

```
video-explicativo/
├── backend/
│   ├── main.py                 # Aplicação FastAPI
│   ├── models.py               # Schemas Pydantic
│   ├── requirements.txt         # Dependências
│   ├── Dockerfile              # Container backend
│   ├── routes/
│   │   ├── __init__.py
│   │   └── videos.py           # Rotas da API
│   ├── services/
│   │   ├── __init__.py
│   │   ├── ai_service.py       # Integração GPT-4
│   │   ├── tts_service.py      # Text-to-Speech
│   │   ├── image_service.py    # Geração de imagens
│   │   └── video_service.py    # Edição de vídeo
│   ├── README.md               # Documentação backend
│   └── .env.example            # Variáveis de ambiente
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── VideoForm.tsx   # Formulário principal
│   │   │   ├── VideoPreview.tsx # Preview e status
│   │   │   └── LoadingSpinner.tsx # Componente loader
│   │   ├── services/
│   │   │   └── api.ts          # Cliente HTTP
│   │   ├── App.tsx             # Componente raiz
│   │   ├── index.tsx           # Entry point
│   │   └── App.css
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── Dockerfile              # Container frontend
│   ├── README.md               # Documentação frontend
│   └── .env.example
│
├── docker-compose.yml          # Orquestração
├── .env.example                # Variáveis globais
├── setup.sh                    # Script setup Linux/macOS
├── setup.bat                   # Script setup Windows
├── README.md                   # Documentação principal
├── QUICKSTART.md              # Guia rápido
├── CHECKLIST.md               # Checklist instalação
├── DOCKER_COMMANDS.md         # Referência Docker
├── CONTRIBUTING.md            # Guia contribuição
├── CHANGELOG.md               # Histórico de mudanças
├── LICENSE                    # MIT License
└── .gitignore
```

---

## 🔄 Fluxo de Dados

### 1️⃣ Usuário Interage
```
Frontend → VideoForm
  ↓
  Usuário digita pergunta
  Seleciona idioma e estilo
  Clica "Gerar Vídeo"
```

### 2️⃣ Submissão
```
Frontend POST → /api/v1/videos/generate
  ↓
Backend recebe request
  ↓
Gera UUID para job
  ↓
Retorna ID + status "processing"
```

### 3️⃣ Processamento Assíncrono
```
Backend Background Task
  ↓
GPT-4: Gera roteiro estruturado
  ↓
gTTS: Converte cada passo em áudio MP3
  ↓
Pillow: Cria slides visuais PNG
  ↓
MoviePy: Compila vídeo final MP4
  ↓
Status → "completed"
```

### 4️⃣ Frontend Polling
```
VideoPreview inicia polling
  ↓
A cada 2s: GET /api/v1/videos/status/{jobId}
  ↓
Atualizava barra de progresso
  ↓
Quando status = "completed"
  ↓
Exibe botão de download
```

### 5️⃣ Download
```
Usuário clica "Baixar"
  ↓
GET /api/v1/videos/download/{jobId}
  ↓
Browser faz download do MP4
  ↓
✅ Sucesso!
```

---

## 🚀 Como Começar

### Quick Setup (5 minutos)

```bash
# 1. Clone
git clone https://github.com/tiagojorgee/video-explicativo.git
cd video-explicativo

# 2. Configure
cp .env.example .env
# Edite .env com sua chave OpenAI

# 3. Execute
# Linux/macOS:
bash setup.sh

# Windows:
setup.bat

# 4. Acesse
# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# Docs: http://localhost:8000/docs
```

### Ou Instalação Manual

**Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

---

## 📊 API Endpoints

| Método | Endpoint | Descrição | Status |
|--------|----------|-----------|--------|
| POST | `/api/v1/videos/generate` | Inicia geração | ✅ |
| GET | `/api/v1/videos/status/{id}` | Obtém status | ✅ |
| GET | `/api/v1/videos/download/{id}` | Faz download | ✅ |
| GET | `/api/v1/videos/list` | Lista vídeos | ✅ |

**Documentação Interativa:** http://localhost:8000/docs

---

## 🔐 Pré-requisitos

✅ **Obrigatório:**
- Chave OpenAI (https://platform.openai.com/api-keys)
- Docker + Docker Compose (OU Python 3.11+ e Node.js 18+)
- FFmpeg (para edição de vídeo)

✅ **Recomendado:**
- 4GB+ RAM
- Conexão internet estável
- ~500MB espaço em disco (por vídeo)

---

## 📈 Melhorias Futuras

### v1.1
- [ ] Cache de vídeos
- [ ] Customização de temas
- [ ] Mais idiomas

### v1.2
- [ ] Banco de dados (PostgreSQL)
- [ ] Autenticação de usuários
- [ ] Dashboard com histórico
- [ ] Planos de uso

### v2.0
- [ ] Editor pós-geração
- [ ] Filas de processamento (Celery)
- [ ] Integração YouTube
- [ ] Kubernetes deployment
- [ ] Monitoramento e analytics

---

## 🤝 Contribuição

Contribuições são bem-vindas! Leia [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes.

### Como Contribuir
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/melhoria`)
3. Commit (`git commit -m 'Adiciona melhoria'`)
4. Push (`git push origin feature/melhoria`)
5. Abra um Pull Request

---

## 📝 Licença

MIT License - veja [LICENSE](./LICENSE) para detalhes

---

## 👨‍💻 Autor

**Tiago Jorge**
- GitHub: [@tiagojorgee](https://github.com/tiagojorgee)
- Email: 91836437+tiagojorgee@users.noreply.github.com

---

## 💬 Suporte

- **Issues:** https://github.com/tiagojorgee/video-explicativo/issues
- **Discussions:** https://github.com/tiagojorgee/video-explicativo/discussions
- **Documentação:** [README.md](./README.md)
- **Quick Start:** [QUICKSTART.md](./QUICKSTART.md)

---

## 📊 Estatísticas do Projeto

### Arquivos
- **Backend:** 6+ arquivos Python
- **Frontend:** 8+ componentes/arquivos TypeScript
- **Documentação:** 10+ arquivos Markdown
- **Configuração:** Docker, npm, pip, gitignore

### Dependências
- **Backend:** 8 pacotes principais
- **Frontend:** 5 pacotes principais
- **DevOps:** Docker, FFmpeg

### Código
- **Linguagens:** Python, TypeScript, Markdown, Shell, Batch
- **Linhas de Código:** 1000+
- **Documentação:** Extensiva

---

## 🎯 Objetivo

> Tornar a criação de conteúdo educacional acessível a todos, democratizando a produção de vídeos profissionais através de IA.

---

## ⭐ Se Você Gostou

Dê uma estrela! ⭐ Isso ajuda muito!

---

**Desenvolvido com ❤️ para tornar o aprendizado mais acessível**

🚀 [Comece agora](./QUICKSTART.md) | 📖 [Documentação](./README.md) | 🤝 [Contribua](./CONTRIBUTING.md)
