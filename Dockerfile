# Dockerfile
FROM node:12.6.0-alpine

WORKDIR /app

ENV NODE_ENV=develop

ENV API_URL=http://18.139.82.118:3000/api

ENV PORT=3001

COPY . /app
RUN npm install
RUN npm install react-scripts -g

EXPOSE 3001

CMD ["npm", "start"]

# RUN npm install

# COPY . /app

# RUN npm build

# FROM nginx:1.17.3-alpine

# COPY --from=build-test /usr/src/app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]