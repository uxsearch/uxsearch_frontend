# Dockerfile  
FROM node:12.6.0-alpine 
WORKDIR /app  
COPY package.json /app  
RUN npm install --only=production
COPY . /app  
EXPOSE 3000  
CMD npm start