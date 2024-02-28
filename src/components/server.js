const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'MohammedAftabyaligar@gmail.com', // Your email address
      pass: 'Aftab@@778866' // Your email password
    }
  });

  // Email content
  const mailOptions = {
    from: 'MohammedAftabyaligar@gmail.com', // Update this to your desired email address
    to: 'aftabyaligar669@example.com', // Recipient email address
    subject: 'New Contact Form Submission',
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ code: 200, message: 'Message sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
