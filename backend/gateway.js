const express = require("express");
const server = require("http");
const httpProxy = require("http-proxy");
const history = require('connect-history-api-fallback');

const app = express();
const PORT = 4000;
app.use(history())

const appServer = server.createServer(app);
const apiProxy = httpProxy.createProxyServer(app);

apiProxy.on("error", (err, req, res) => {
  console.log(err);
  console.log("error");
  res.status(500).send("Proxy Down");
});

// download resume proxy
app.all("/download*", (req, res) => {
  apiProxy.web(req, res, {
    target: process.env.DOWNLOAD_HOST || "http://localhost:5000/"
  });
});

// send email proxy
app.all("/send*", (req, res) => {
  apiProxy.web(req, res, {
    target: process.env.SEND_HOST || "http://localhost:6000/"
  });
});

// frontend proxy
app.all("/*", (req, res) => {
  apiProxy.web(req, res, { 
    target: process.env.FRONT_END_HOST || "http://localhost:8080/"
  });
});

// service logs
// console.log(process.env.FRONT_END_HOST)
// console.log(process.env.DOWNLOAD_HOST)
// console.log(process.env.SEND_HOST)

appServer.listen(PORT, () => {console.log(`Gateway Listening on port ${PORT}`)});