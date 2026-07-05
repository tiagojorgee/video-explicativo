# 📱 Guia Mobile - Vídeo Explicativo

## ✨ Funcionalidades

✅ PWA (Progressive Web App) instalável
✅ Funciona offline (interface)
✅ Otimizado para touch
✅ Responsive 100%
✅ Performance ultra-rápida

## 🚀 Instalação

### iPhone
1. Abra Safari
2. Acesse: `http://seu-dominio.com`
3. Compartilhar ↗️ → "Adicionar à Tela de Início"
4. Confirmar

### Android
1. Abra Chrome
2. Acesse: `http://seu-dominio.com`
3. Menu ⋮ → "Instalar aplicativo"
4. Confirmar

## 💻 Rodar Localmente

### No mesmo WiFi

```bash
# Computador
cd video-explicativo
bash setup.sh
# ou
cd frontend && npm run dev
```

### No Celular

Descubra seu IP:
```bash
ifconfig | grep "inet "  # macOS/Linux
ipconfig                 # Windows
```

Acesse no navegador:
```
http://192.168.x.x:3000
```

## 🔧 Configurar Backend

### Apontar para Backend Local

**Arquivo `frontend/.env.local`:**
```env
REACT_APP_API_URL=http://192.168.x.x:8000/api/v1
```

Ou com Docker:
```bash
docker-compose up -d
# Backend em: http://192.168.x.x:8000
```

## 📊 Requisitos

- iOS 12+ ou Android 8+
- WiFi para gerar vídeos
- 100MB livre
- Chave OpenAI configurada

## 🎥 Como Usar

1. Abra o app no celular
2. Digite sua pergunta
3. Escolha idioma/estilo
4. Toque "Gerar Vídeo"
5. Aguarde 2-5 min
6. Baixe o MP4

## 💡 Dicas

- ⚠️ Não feche a aba durante geração
- ⚠️ Mantenha conexão WiFi ativa
- ✅ Primeira vez leva mais tempo
- ✅ Cache automático acelera UI

## 🐛 Troubleshooting

**Erro de conexão?**
- Teste: `http://ip:8000/health`
- Verifique firewall
- Mesmo WiFi?

**Geração lenta?**
- Normal: 2-5 min
- Primeira vez é mais lenta

**Vídeo não baixa?**
- Verifique espaço
- Tente novamente
- Limpe cache

---

🎬 **Pronto para usar em qualquer celular!**
