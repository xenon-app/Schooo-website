import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log('Attempting to send email using user:', process.env.EMAIL_USER);

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: 'Local Authentication Test',
  text: 'This is a strict Nodemailer connectivity test.'
}).then(info => {
  console.log('Email successfully shipped to inbox:', info.response);
}).catch(err => {
  console.error('Fatal SMTP Error sending email:', err.message);
});
