require('dotenv').config();
const express = require('express');
const formidable = require('express-formidable');
// const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');


const app = express();
const port = process.env.PORT || 4001;

// app.use(express.static('/client/public'));

app.use(formidable());

const transporter = nodemailer.createTransport({
    service: "hotmail",
    // port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
});

app.post('/contactUs', (req, res) => {

  const emailOutput = `
  <h1>Bish here is the new email hoe</h1>
  <h2>About: ${req.fields.subject}</h2>
  <h2>Sent from: ${req.fields.name}</h2>
  <p>Message: ${req.fields.message}</p>
  `

  // console.log('see body', req.fields);

  let mailOptions = {
          from: ` "Ya Bish" <${process.env.EMAIL}>`, // e-commerce email
          to: process.env.RECEVING_EMAIL, // client/customers email
          subject: req.fields.subject,
          text: 'Hello world?',
          html: emailOutput,
      };

  transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

  res.end();

});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}




app.listen(port, () => console.log(`Listening on port ${port}`));
