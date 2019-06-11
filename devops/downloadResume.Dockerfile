FROM node:10-alpine

WORKDIR /main
COPY ./backend/api/downloadResume.js /main
COPY ./backend/api/Resume.pdf /main
COPY ./backend/package.json /main
COPY ./backend/package-lock.json /main

RUN npm install

EXPOSE 5000

CMD ["node", "downloadResume.js"]