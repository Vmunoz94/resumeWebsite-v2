FROM node:10-alpine

RUN npm install -g http-server

WORKDIR /main
COPY ./frontend/public /main/public
COPY ./frontend/src /main/src
COPY ./frontend/package.json /main
COPY ./frontend/package-lock.json /main

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]