# 🐳 Docker Commands Cheat Sheet

## Iniciar Aplicação

```bash
# Iniciar em background
docker-compose up -d

# Iniciar com logs visíveis
docker-compose up

# Parar aplicação
docker-compose down

# Reconstruir containers
docker-compose build

# Reconstruir e iniciar
docker-compose up -d --build
```

## Logs e Debugging

```bash
# Ver logs de todos os serviços
docker-compose logs

# Ver logs apenas do backend
docker-compose logs backend

# Ver logs apenas do frontend
docker-compose logs frontend

# Seguir logs em tempo real
docker-compose logs -f

# Últimas 50 linhas
docker-compose logs --tail=50
```

## Executar Comandos

```bash
# Acessar shell do backend
docker-compose exec backend bash

# Acessar shell do frontend
docker-compose exec frontend sh

# Executar comando específico
docker-compose exec backend python -c "print('Hello')"
```

## Limpeza

```bash
# Parar todos os containers
docker-compose down

# Remover volumes
docker-compose down -v

# Remover imagens
docker-compose down --rmi all

# Limpar tudo (containers, volumes, imagens)
docker-compose down -v --rmi all
```

## Status

```bash
# Ver status dos containers
docker-compose ps

# Ver recursos usados
docker stats

# Ver informações detalhadas
docker-compose config
```

## Volumes

```bash
# Listar volumes
docker volume ls

# Inspecionar volume
docker volume inspect <volume_name>

# Remover volume não usado
docker volume prune
```

---

Para mais informações: https://docs.docker.com/compose/reference/
