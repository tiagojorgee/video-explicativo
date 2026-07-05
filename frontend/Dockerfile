FROM node:18-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código
COPY . .

# Build para produção
RUN npm run build

# Usar serve para servir a app
RUN npm install -g serve

# Expor porta
EXPOSE 3000

# Comando para iniciar
CMD ["serve", "-s", "build", "-l", "3000"]