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

// Create transporter when Gmail app credentials are configured (optional; contact form can use EmailJS)
const createTransporter = () => {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASSWORD?.trim();
  if (
    !user ||
    !pass ||
    user === "your-email@gmail.com" ||
    pass === "your-app-password"
  ) {
    return null;
  }
  return nodemailer.createTransport({
    service: EMAIL_CONFIG.service,
    auth: { user, pass },
  });
};

export type ContactEmailNotifyResult =
  | "sent"
  | "skipped_no_smtp"
  | "failed";

// Send contact form email (optional; EmailJS on the client is separate)
export async function sendContactEmail(
  data: InsertContactMessage,
): Promise<ContactEmailNotifyResult> {
  const transporter = createTransporter();

  if (!transporter) {
    return "skipped_no_smtp";
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

  const fromUser = process.env.EMAIL_USER?.trim() || EMAIL_CONFIG.auth.user;

  const mailOptions = {
    from: `"Portfolio Contact Form" <${fromUser}>`,
    to: RECIPIENT_EMAIL,
    subject: `📬 New Contact: ${data.subject}`,
    text: textContent,
    html: htmlContent,
    replyTo: data.email
  };

  try {
    await transporter.sendMail(mailOptions);
    return "sent";
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
    return "failed";
  }
}





