# Establece la imagen base de docker hub
FROM node:latest

# Información de Metadata
LABEL "cl.apgca.appNode"="Prueba de concepto Docker - Back"
LABEL maintainer="eagreda@lucasian.com"
LABEL version="1.0"

# Instala nodemon de forma global
# Al realizarse cambios reiniciar el servidor
# RUN npm install -g nodemon --quiet

# Se estable el directorio de trabajo
WORKDIR /app

# Instala los paquetes existentes en el package.json
COPY package*.json ./
RUN npm install --quiet

# Copia la Aplicación
COPY . .

EXPOSE 3000

# Inicia la aplicación al iniciar al contenedor
CMD ["npm", "start"]