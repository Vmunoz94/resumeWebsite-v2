const express = require("express");

const app = express();
const PORT = 5000;

app.get("/downloadAgario", (req, res) => {
  let filePath = __dirname + '/agario.zip';
  let fileName = "agario.zip";
  
  // console.log(filePath);
  res.download(filePath, fileName, err => {
    if (err) {
      console.log(err);
    }
  });
})

app.get("/downloadResume", (req, res) => {
  let filePath = __dirname + '/Resume.pdf';
  let fileName = "Resume.pdf";
  
  // console.log(filePath);
  res.download(filePath, fileName, err => {
    if (err) {
      console.log(err);
    }
  });
})

app.listen(PORT, () => {console.log(`Download Microservice is listening on port ${PORT}`)});