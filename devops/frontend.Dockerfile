# FROM node:lts-alpine

# # install simple http server for serving static content
# RUN npm install -g http-server

# WORKDIR /main
# COPY ./frontend/package*.json ./

# RUN npm install

# COPY ./frontend/public ./public
# COPY ./frontend/src ./src

# # build app for production with minification
# RUN npm run build

# EXPOSE 8080
# CMD [ "http-server", "dist" ]


# FROM node:10-alpine

# WORKDIR /main
# COPY ./frontend/public /main/public
# COPY ./frontend/src /main/src
# COPY ./frontend/package.json /main
# COPY ./frontend/package-lock.json /main
# COPY ./backend/frontend.js /main/backend/frontend.js

# RUN npm install
# RUN npm run build

# COPY ./frontend/public/index.html /main/build 

# EXPOSE 8080

# CMD ["node", "backend/frontend.js"]


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