# Imagem base do Node
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta do Vite
EXPOSE 5173

# Comando para rodar o projeto
CMD ["npm", "run", "dev", "--", "--host"]
