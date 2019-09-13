# Dockerfile
FROM node:12.10.0-alpine as builder

RUN mkdir -p /app
WORKDIR /app

# ENV NODE_ENV=develop

# ENV API_URL=http://localhost:3000/api

# ENV PORT=3001

COPY package.json .
RUN npm install
RUN npm install react-scripts -g
RUN npm build

# EXPOSE 3000

# CMD ["npm", "start"]

FROM nginx:1.17.3-alpine

COPY --from=0 /usr/src/app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

#EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]