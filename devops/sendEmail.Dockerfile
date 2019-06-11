FROM node:10-alpine

WORKDIR /main
COPY ./backend/api/sendEmail.js ./
COPY ./backend/package*.json ./

RUN npm install

EXPOSE 6000

CMD ["node", "sendEmail.js"]