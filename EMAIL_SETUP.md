# Email Setup Instructions

Your portfolio now sends you an email whenever someone submits the contact form!

## Quick Setup (Gmail)

### Step 1: Create a `.env` file

Create a file named `.env` in the project root with:

```
EMAIL_USER=rajeshchouhancs25@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

### Step 2: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Select app: **Mail**, device: **Other (Custom name)**
5. Name it: "Portfolio Contact Form"
6. Click **Generate**
7. Copy the **16-character password** (format: xxxx xxxx xxxx xxxx)
8. Paste it in your `.env` file as `EMAIL_PASSWORD`

### Step 3: Restart the server

```bash
npm run dev
```

## What You'll Receive

When someone fills out the contact form, you'll get an email with:
- 👤 Their name
- 📧 Their email (you can reply directly)
- 📝 Subject line
- 💬 Their message
- ⏰ Timestamp

## Testing

1. Open http://127.0.0.1:5000
2. Fill out the contact form
3. Click "Send Message"
4. Check your email: rajeshchouhancs25@gmail.com

## Alternative: Other Email Services

If you don't want to use Gmail, you can modify `server/email.ts` to use:
- **SendGrid** (recommended for production)
- **AWS SES**
- **Mailgun**
- **Outlook/Hotmail**

## Troubleshooting

**"Email not configured"**
- Make sure `.env` file exists in project root
- Check that EMAIL_USER and EMAIL_PASSWORD are set correctly
- Restart the server after creating `.env`

**"Invalid credentials"**
- Use App Password, NOT your regular Gmail password
- Make sure 2-Step Verification is enabled
- Try generating a new App Password
