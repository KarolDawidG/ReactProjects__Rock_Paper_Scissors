const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const {PORT, pass, user, service} = require('./configENV');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/form', async(req, res) => {
  res.status(200).send('Server działa poprawnie');
  console.log('Nawiazano połączenie GET');
});

app.post('/form', async (req, res) => {
  const { email, name, subject, message } = req.body;
  if (!email || !name || !subject || !message) {
    return res.status(400).send('Some fields are missing');
  }
  const transporter = nodemailer.createTransport({
    service: service,
    auth: {
      user: user,
      pass: pass,
    },
  });
  const mailOptions = {
    from: email,
    to: user,
    subject: `Message from ${email}: ${subject}`,
    text: `Email sender: ${email}
            Name of sender: ${name}
            Subject: ${subject}\n
            Message:\n ${message}.`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log(`An email from user ${name} (email: ${email}) has been sent to ${mailOptions.to}`);
    res.status(200).send('success');
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred while sending the email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
