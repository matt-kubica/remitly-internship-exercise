FROM node:15-alpine as build-step

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
 

FROM nginx:1.19-alpine

COPY --from=build-step /app/build /usr/share/nginx/html