# Usa una imagen base de Node.js con MySQL cliente preinstalado
FROM node:18-bullseye

# Instala el cliente MySQL
RUN apt-get update && apt-get install -y default-mysql-client

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3002

# Inicia la aplicación
CMD ["npm", "run", "start"]
