# Video Explicativo Generator - Frontend

Frontend React/TypeScript para o gerador de vídeos explicativos.

## 🚀 Como Iniciar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm start
```

O app rodará em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── VideoForm.tsx        # Formulário para entrada de pergunta
│   ├── VideoPreview.tsx     # Preview e status do vídeo
│   └── LoadingSpinner.tsx   # Componente de carregamento
├── services/
│   └── api.ts               # Cliente HTTP para API
├── App.tsx                  # Componente principal
├── App.css                  # Estilos da app
├── index.tsx                # Entry point
└── index.css                # Estilos globais
```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env.local`:

```
REACT_APP_API_URL=http://localhost:8000/api/v1
```

## 🎨 Tecnologias Utilizadas

- **React 18**: Biblioteca UI
- **TypeScript**: Type safety
- **TailwindCSS**: Estilização
- **Axios**: HTTP client
- **React Query**: State management (opcional)

## 📝 Componentes

### VideoForm
Formulário para o usuário inserir a pergunta e configurações do vídeo.

### VideoPreview
Exibe o status da geração do vídeo com opção de download quando concluído.

### LoadingSpinner
Componente de carregamento reutilizável.

## 🔄 Fluxo de Dados

1. Usuário preenche o formulário com uma pergunta
2. VideoForm envia requisição POST `/videos/generate`
3. Backend retorna job ID
4. VideoPreview inicia polling em `/videos/status/{jobId}`
5. Quando concluído, exibe botão de download
6. Usuário faz download do vídeo em `/videos/download/{jobId}`

---

**Desenvolvido por:** tiagojorgee 🚀
