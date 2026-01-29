import nodemailer from 'nodemailer';
import type { InsertContactMessage } from '@shared/schema';

// Email configuration
const EMAIL_CONFIG = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password'
  }
};

const RECIPIENT_EMAIL = 'rajeshchouhancs25@gmail.com';

// Create transporter
const createTransporter = () => {
  try {
    return nodemailer.createTransport(EMAIL_CONFIG);
  } catch (error) {
    console.error('Failed to create email transporter:', error);
    return null;
  }
};

// Send contact form email
export async function sendContactEmail(data: InsertContactMessage): Promise<boolean> {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.log('Email not configured. Message stored locally.');
    return false;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #667eea; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #667eea; }
        .footer { text-align: center; padding: 15px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🎉 New Contact Form Submission</h2>
          <p>You have received a new message from your portfolio website!</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="field">
            <div class="label">📝 Subject:</div>
            <div class="value">${data.subject}</div>
          </div>
          <div class="field">
            <div class="label">💬 Message:</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from your portfolio contact form</p>
          <p>Received at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission
===========================

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Received at: ${new Date().toLocaleString()}
  `;

  const mailOptions = {
    from: `"Portfolio Contact Form" <${EMAIL_CONFIG.auth.user}>`,
    to: RECIPIENT_EMAIL,
    subject: `📬 New Contact: ${data.subject}`,
    text: textContent,
    html: htmlContent,
    replyTo: data.email
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${RECIPIENT_EMAIL}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    return false;
  }
}


