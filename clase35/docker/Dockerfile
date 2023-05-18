#Primero definimos la imagen que vamos a tomar como base
FROM node:16.17.1-alpine3.16

#Definir el directorio de trabajo
WORKDIR /app

#Copiamos el package.json
COPY package*.json ./

#Instalamos las dependencias en el contenedor
RUN npm install

#Copiamos el resto de archivos
COPY . .

#Definir el puerto que quiero exponer de mi contenedor
EXPOSE 8080

#Definimos el comando que se ejecutará al iniciar el contenedor
CMD [ "npm", "start" ]