# Contributing Guidelines

## 🤝 Como Contribuir

Agradecemos o interesse em contribuir! Aqui estão as diretrizes:

### 1. Fork e Clone

```bash
git clone https://github.com/seu-usuario/video-explicativo.git
cd video-explicativo
git remote add upstream https://github.com/tiagojorgee/video-explicativo.git
```

### 2. Crie uma Branch

```bash
git checkout -b feature/sua-feature
# ou para bugs:
git checkout -b fix/seu-bug
```

### 3. Faça suas Mudanças

- Escreva código limpo e bem documentado
- Siga o estilo existente
- Adicione testes se aplicável

### 4. Commit

```bash
git add .
git commit -m "tipo: descrição"
# Tipos: feat, fix, docs, style, refactor, test, chore
```

### 5. Push e Pull Request

```bash
git push origin feature/sua-feature
```

Abra um Pull Request com descrição clara.

## 📋 Áreas de Contribuição

### Backend
- Otimizações de performance
- Novos serviços
- Melhorias na API
- Testes unitários
- Documentação

### Frontend
- Novos componentes
- UX/UI melhorias
- Testes
- Otimizações
- Documentação

### DevOps
- Kubernetes configs
- CI/CD improvements
- Monitoramento

### Documentação
- Tradução
- Exemplos
- Guias
- Fixes

## 🐛 Relatar Bugs

1. Verifique se o bug já foi reportado
2. Abra uma [nova issue](https://github.com/tiagojorgee/video-explicativo/issues)
3. Forneça:
   - Descrição clara
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots se aplicável
   - Sistema operacional e versão

## 💡 Sugerir Features

1. Abra uma [discussion](https://github.com/tiagojorgee/video-explicativo/discussions)
2. Descreva a feature desejada
3. Explique o caso de uso
4. Aguarde feedback

## 📝 Estilo de Código

### Python
```python
# Use type hints
def process_video(video_path: str) -> str:
    """Processa um vídeo.
    
    Args:
        video_path: Caminho do vídeo
        
    Returns:
        Caminho do vídeo processado
    """
    pass
```

### TypeScript/React
```typescript
// Use componentes funcionais
interface VideoProps {
  id: string;
  title: string;
}

export const Video: React.FC<VideoProps> = ({ id, title }) => {
  return <div>{title}</div>;
};
```

## ✅ Checklist antes de fazer PR

- [ ] Código segue o estilo do projeto
- [ ] Testes passam
- [ ] Documentação atualizada
- [ ] Branch está atualizada com main
- [ ] Commit message é clara
- [ ] Sem conflitos

## 📚 Recursos Úteis

- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [React Docs](https://react.dev/)
- [Python PEP 8](https://pep8.org/)
- [Git Workflow](https://guides.github.com/introduction/flow/)

## 🎉 Obrigado!

Contribuições são o que faz a comunidade open-source incrível. Qualquer contribuição é muito apreciada!

---

**Happy Coding!** 🚀
