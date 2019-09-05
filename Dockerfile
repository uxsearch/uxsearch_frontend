# Dockerfile
FROM node:12.9.1-alpine as build-test

WORKDIR /app

ENV API_URL=http://localhost:3000/api

ENV PORT=http://localhost:3001

COPY package.json /app
RUN npm install
RUN npm install react-scripts -g

EXPOSE 3000

CMD ["npm", "start"]

#RUN npm install

#COPY . /app

#RUN npm build

#FROM nginx:1.17.3-alpine

#COPY --from=build-test /usr/src/app/build /usr/share/nginx/html

#EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]