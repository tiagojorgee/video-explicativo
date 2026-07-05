# 📋 Checklist de Instalação

## ✅ Pré-requisitos

- [ ] Git instalado
- [ ] Chave OpenAI obtida em https://platform.openai.com/api-keys
- [ ] Docker e Docker Compose (opção recomendada)
  - OU Python 3.11+ instalado
  - OU Node.js 18+ instalado

## ✅ Configuração Inicial

- [ ] Clonar repositório: `git clone https://github.com/tiagojorgee/video-explicativo.git`
- [ ] Entrar no diretório: `cd video-explicativo`
- [ ] Copiar .env: `cp .env.example .env`
- [ ] Editar .env com chave OpenAI

## ✅ Instalação (escolha uma opção)

### Opção A: Docker (Recomendado)
- [ ] Verificar Docker: `docker --version`
- [ ] Verificar Docker Compose: `docker-compose --version`
- [ ] Executar: `docker-compose up -d`
- [ ] Aguardar build dos containers

### Opção B: Local - Backend
- [ ] Criar venv: `python -m venv backend/venv`
- [ ] Ativar venv: `source backend/venv/bin/activate`
- [ ] Instalar deps: `pip install -r backend/requirements.txt`
- [ ] Testar: `python backend/main.py`

### Opção C: Local - Frontend
- [ ] Instalar deps: `cd frontend && npm install`
- [ ] Iniciar: `npm start`
- [ ] Verificar em http://localhost:3000

## ✅ Validação

- [ ] Frontend carrega em http://localhost:3000
- [ ] Backend responde em http://localhost:8000/health
- [ ] Docs Swagger em http://localhost:8000/docs
- [ ] Sem erros no console

## ✅ Primeiro Vídeo

- [ ] Acessar interface
- [ ] Digitar pergunta (mín. 10 caracteres)
- [ ] Selecionar idioma
- [ ] Clicar "Gerar Vídeo"
- [ ] Aguardar processamento
- [ ] Baixar vídeo gerado

## 🆘 Troubleshooting

Se algo não funcionar:

1. [ ] Verificar logs: `docker-compose logs -f`
2. [ ] Verificar chave OpenAI está correta
3. [ ] Verificar permissões de pasta
4. [ ] Verificar portas 3000/8000 livres
5. [ ] Abrir issue: https://github.com/tiagojorgee/video-explicativo/issues

---

**Após completar o checklist, seu projeto estará pronto para uso!** ✨
