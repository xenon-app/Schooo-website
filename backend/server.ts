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

// Email transporter (Gmail) - Hardened config for Railway/Cloud environments
console.log('--- Initializing SMTP Transporter ---');
console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  service: 'gmail', // Let nodemailer handle smtp.gmail.com settings
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true,
  maxConnections: 3,
  maxMessages: 50,
  connectionTimeout: 20000, // 20 seconds
  greetingTimeout: 15000,
  socketTimeout: 30000,
  tls: {
    rejectUnauthorized: false // Bypass some cloud certificate issues
  }
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
    const adminEmail = process.env.ADMIN_EMAIL || 'divyanshucmd@gmail.com';
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
      replyTo: formData.email || undefined,
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

    // Validate SMTP credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('SMTP Error: EMAIL_USER or EMAIL_PASS not set in environment variables');
      return res.status(500).json({ 
        success: false, 
        message: 'Email server configuration missing. Please set EMAIL_USER and EMAIL_PASS.' 
      });
    }

    // Dispatch email in the background to provide instant UI feedback
    transporter.sendMail(mailOptions)
      .then(() => console.log(`Inquiry email successfully sent: ${subject}`))
      .catch((smtpError: any) => console.error('Background SMTP Error:', smtpError));

    // Return success immediately to avoid "Processing..." delays
    res.json({ 
      success: true, 
      message: 'Inquiry received and being processed' 
    });
  } catch (error: any) {
    console.error('Submission processing error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Catch-all for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  
  // Verify Transporter on boot
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ SMTP Connection Error (Check variables/Gmail security):', error);
    } else if (success) {
      console.log('✅ SMTP Server reached successfully - Ready to send emails');
    }
  });
});

