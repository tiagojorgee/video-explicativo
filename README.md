# 🎬 Video Explicativo Generator

Um aplicativo full-stack que gera vídeos explicativos profissionais automaticamente a partir das perguntas do usuário!

## ✨ Características

- 📝 **Interface Intuitiva**: Faça uma pergunta em português
- 🤖 **IA Avançada**: GPT-4 gera roteiros estruturados
- 🎤 **Narração Automática**: Text-to-Speech em múltiplos idiomas
- 🎨 **Slides Visuais**: Geração automática de imagens para cada passo
- 📹 **Vídeo em HD**: Compilação final em 1280x720 @ 30fps
- ⚡ **Processamento em Background**: Não bloqueia a interface
- 💾 **Download Direto**: Baixe o MP4 quando pronto

## 🎯 Exemplos de Uso

- "Como instalar uma lâmpada?"
- "Como fazer um café?"
- "Como trocar um pneu?"
- "Como aprender a programar?"
- Qualquer pergunta sobre uma tarefa passo-a-passo!

## 🛠️ Tech Stack

### Backend
- **Python 3.11+** com **FastAPI**
- **OpenAI GPT-4** para IA
- **gTTS** para narração
- **MoviePy** para edição de vídeo
- **Pillow** para geração de imagens

### Frontend
- **React 18** com **TypeScript**
- **TailwindCSS** para estilos
- **Axios** para requisições HTTP

## 🚀 Quick Start

### Opção 1: Docker Compose (Recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/tiagojorgee/video-explicativo.git
cd video-explicativo

# 2. Crie arquivo .env
cp .env.example .env
# Edite .env e adicione sua chave OpenAI

# 3. Inicie com Docker
docker-compose up -d

# 4. Acesse http://localhost:3000
```

### Opção 2: Instalação Local

#### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Configure .env
cp .env.example .env
# Edite e adicione sua chave OpenAI

python main.py
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

## 📖 Documentação

- **[Backend README](./backend/README.md)** - Documentação da API
- **[Frontend README](./frontend/README.md)** - Documentação do React

## 🔌 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/v1/videos/generate` | Inicia geração de vídeo |
| GET | `/api/v1/videos/status/{id}` | Obtém status do vídeo |
| GET | `/api/v1/videos/download/{id}` | Faz download do vídeo |
| GET | `/api/v1/videos/list` | Lista todos os vídeos |

Documentação interativa: http://localhost:8000/docs

## 📊 Fluxo de Funcionamento

```
┌─────────────────────┐
│  Usuário faz uma    │
│     pergunta        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  GPT-4 gera         │
│  roteiro estruturado│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  gTTS converte      │
│  texto → áudio MP3  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Pillow cria        │
│  slides visuais     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  MoviePy combina    │
│  imagens + áudio    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Vídeo MP4 pronto   │
│  para download! 🎉  │
└─────────────────────┘
```

## ⚙️ Pré-requisitos

- Python 3.11+
- Node.js 18+
- FFmpeg (para edição de vídeo)
- Chave da API OpenAI (https://platform.openai.com/api-keys)

## 🔧 Variáveis de Ambiente

```env
OPENAI_API_KEY=sk-your-key-here
DEBUG=False
VIDEO_OUTPUT_DIR=./videos
TEMP_DIR=./temp
MAX_VIDEO_DURATION=600
ALLOWED_ORIGINS=http://localhost:3000
```

## 💡 Como Usar

1. **Acesse** http://localhost:3000
2. **Digite** sua pergunta (mínimo 10 caracteres)
3. **Escolha** o idioma e estilo do vídeo
4. **Clique** em "🚀 Gerar Vídeo"
5. **Aguarde** o processamento (2-5 minutos típico)
6. **Baixe** o vídeo MP4 quando pronto!

## 🎥 Especificações de Vídeo

- **Resolução**: 1280x720 (HD)
- **FPS**: 30
- **Codec Vídeo**: H.264
- **Codec Áudio**: AAC
- **Duração**: Variável (3-8 min típico)
- **Formato**: MP4

## 📈 Melhorias Futuras

- [ ] Cache de vídeos gerados
- [ ] Customização de temas visuais
- [ ] Suporte a mais idiomas
- [ ] Editor pós-geração
- [ ] Integração com YouTube
- [ ] Filas de processamento (Celery)
- [ ] Dashboard com histórico
- [ ] Autenticação de usuários
- [ ] Planos de uso
- [ ] API rate limiting

## 🐛 Troubleshooting

### "OPENAI_API_KEY not found"
Certifique-se de criar o arquivo `.env` com sua chave OpenAI

### "FFmpeg not found"
Instale FFmpeg:
- **Ubuntu**: `sudo apt-get install ffmpeg`
- **macOS**: `brew install ffmpeg`
- **Windows**: https://ffmpeg.org/download.html

### Vídeo não é gerado
- Verifique os logs do backend
- Confirme que a chave OpenAI é válida
- Verifique limite de uso da API OpenAI

## 📄 Licença

MIT License - Veja LICENSE para detalhes

## 👤 Autor

**Tiago Jorge** - [@tiagojorgee](https://github.com/tiagojorgee)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 💬 Feedback & Suporte

Se tiver dúvidas ou sugestões, abra uma [issue](https://github.com/tiagojorgee/video-explicativo/issues) no GitHub!

---

**⭐ Se este projeto foi útil, não esqueça de dar uma estrela!**

**Desenvolvido com ❤️ para tornar o aprendizado mais acessível**
