# EmailJS Setup Instructions

Your contact form now uses EmailJS - a free service to send emails directly from the browser!

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Create account with your email or Google sign-in
4. Verify your email

### Step 2: Add Email Service

1. After login, click **"Add New Service"**
2. Choose **"Gmail"** 
3. Click **"Connect Account"**
4. Sign in with `rajeshchouhancs25@gmail.com`
5. Allow EmailJS to send emails
6. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **"Email Templates"** in sidebar
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** `portfolio_contact`

**Subject:** `New Contact from Portfolio: {{subject}}`

**Content:**
```
New message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy the Public Key** (looks like: `xxxxxxxxxxx`)

### Step 5: Add to Your Code

Open: `client/src/components/sections/contact.tsx`

Find these lines (around line 30):
```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

Replace with your actual values:
```javascript
const serviceId = 'service_xxxxxxx';  // from Step 2
const templateId = 'template_xxxxxxx'; // from Step 3
const publicKey = 'xxxxxxxxxxx';       // from Step 4
```

### Step 6: Test It!

1. Save the file
2. The dev server should reload automatically
3. Go to http://127.0.0.1:5000
4. Fill out the contact form
5. Check your email: `rajeshchouhancs25@gmail.com`

## ✨ Benefits of EmailJS

- ✅ **No backend configuration needed**
- ✅ **Free tier: 200 emails/month**
- ✅ **Works on any hosting (Vercel, Netlify, GitHub Pages)**
- ✅ **No email credentials in your code**
- ✅ **Built-in spam protection**

## 🔒 Security Note

The Public Key is safe to expose in client-side code. EmailJS has built-in rate limiting and security features.

## 📊 Monitor Emails

Check your EmailJS dashboard to see:
- How many emails were sent
- Email delivery status
- Monthly usage

## 🆓 Free Tier Limits

- **200 emails/month** (plenty for a portfolio)
- If you need more, upgrade plans start at $7/month

## ❓ Troubleshooting

**"Failed to send message"**
- Check your Service ID, Template ID, and Public Key are correct
- Make sure Gmail service is connected in EmailJS dashboard
- Check browser console for detailed errors

**Emails not arriving**
- Check spam/junk folder
- Verify template settings in EmailJS dashboard
- Make sure {{to_email}} is set to your email in template

---

**That's it!** Your contact form will now send emails directly to `rajeshchouhancs25@gmail.com` 📧


