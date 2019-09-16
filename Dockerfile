# Dockerfile
FROM node:12.10.0-alpine as builder

RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install react-scripts -g
RUN npm build

FROM nginx:1.17.3-alpine

COPY --from=0 /usr/src/app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]