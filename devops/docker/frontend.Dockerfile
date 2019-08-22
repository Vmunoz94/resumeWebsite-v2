# build stage
FROM node:lts-alpine as build-stage

WORKDIR /main
COPY ./frontend/public /main/public
COPY ./frontend/src /main/src
COPY ./frontend/package.json /main
COPY ./frontend/package-lock.json /main

RUN npm install
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /main/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./devops/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]