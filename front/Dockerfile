# Frontend Dockerfile

# Usar una imagen base de Node.js
FROM node:20-alpine

# Configurar el directorio de trabajo
WORKDIR /app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar las dependencias de Node.js
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto en el que servirá la aplicación
EXPOSE 5173

# Ejecutar la aplicación
CMD ["npx", "serve", "-s", "build"]
