# Establece la imagen base de docker hub
FROM node:10 as fuente

# Se estable el directorio de trabajo
WORKDIR /usr/src/app

# Instala los paquetes existentes en el package.json
COPY package*.json ./
RUN npm install

# Copia la Aplicación
COPY . .
RUN npm run build

# Relacion con el archivo nginx.conf
FROM nginx:1.13.12-alpine
COPY --from=fuente /usr/src/app/dist/comic-front /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf