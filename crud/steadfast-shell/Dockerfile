# Usa una imagen base de Node.js compatible con Astro
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Compila el código si usas Astro
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 4321

# Inicia la aplicación
CMD ["npm", "run", "preview"]
