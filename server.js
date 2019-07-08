const express = require('express');
const formidable = require('express-formidable');
// const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
const port = 4001;

// app.use(express.static('/client/public'));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(formidable());



const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'ddufeegblbtwonz6@ethereal.email',
      pass: '2FspGyGn6tjU4f21Ab'
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
          from: ' "Ya Bish" <ddufeegblbtwonz6@ethereal.email>', // e-commerce email
          to: req.fields.email, // client/customers email
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






app.listen(port, () => console.log(`Listening on port ${port}`));
