FROM node:10-alpine

WORKDIR /main
COPY ./backend/api/download.js /main
COPY ./backend/api/Resume.pdf /main
COPY ./backend/api/agario.zip /main
COPY ./backend/package.json /main
COPY ./backend/package-lock.json /main

RUN npm install

EXPOSE 5000

CMD ["node", "download.js"]