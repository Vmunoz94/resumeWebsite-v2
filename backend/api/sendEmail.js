const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 6000;
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  
  let messageTemplate = `New Message from\n\tName: ${req.body.name} \n\tEmail: ${req.body.email}\n\tMessage: ${req.body.message}`;

  const auth = {
    user: process.env.USER_HOST,
    pass: process.env.PASS_HOST
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth,
  });

  let mailOptions = {
    from: auth.user,
    to: process.env.EMAIL_HOST,
    subject: req.body.subject,
    text: messageTemplate
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('ERROR, Email Was Not Sent');
    } else {
      console.log('Email Sent')
      res.send('Email Sent Successfully');
    }
  });
})

app.listen(PORT, () => {console.log(`Send Email Microservice is listening on port ${PORT}`)});