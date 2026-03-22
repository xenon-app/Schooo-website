import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Setup directories for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static frontend in production
app.use(express.static(path.join(__dirname, '../dist')));

// Email transporter (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Root path to test easily
app.get('/', (req, res) => {
  res.send('Backend is running and Nodemailer is ready! Send POST requests to /api/email to submit forms.');
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email backend ready' });
});

// Send email endpoint
app.get('/api/email', (req, res) => {
  res.send('This endpoint only accepts POST requests. Please use the forms on the frontend to send an email.');
});

app.post('/api/email', async (req, res) => {
  try {
    const { formType, timestamp, fileAttachment, fileName, mimeType, ...formData }: {
      formType: string;
      timestamp: string;
      fileAttachment?: string;
      fileName?: string;
      mimeType?: string;
      [key: string]: any;
    } = req.body;

    // All data to admin email
    const adminEmail = 'divyanshucmd@gmail.com';
    const subject = `New ${formType} Submission from Adarsh School Website`;
    
    const htmlContent = `
      <h2>New Form Submission</h2>
      <p><strong>Form Type:</strong> ${formType}</p>
      <p><strong>Timestamp:</strong> ${timestamp}</p>
      <p><strong>IP:</strong> ${req.ip || 'unknown'}</p>
      <hr>
      ${Object.entries(formData).map(([key, value]: [string, any]) => 
        `<p><strong>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> ${value || 'N/A'}</p>`
      ).join('')}
      <hr>
      <p><em>Site: Adarsh Public School | ${new Date().toLocaleString()}</em></p>
    `;

    const mailOptions: any = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject,
      html: htmlContent,
    };

    if (fileAttachment && fileName) {
      mailOptions.attachments = [
        {
          filename: fileName,
          content: fileAttachment,
          encoding: 'base64',
          contentType: mimeType || 'application/octet-stream',
        }
      ];
    }

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Catch-all for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

