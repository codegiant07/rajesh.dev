# EmailJS Troubleshooting Guide

## ✅ Changes Made

I've updated your contact form with the following improvements:

1. **Added EmailJS Initialization** - Now properly initializes EmailJS with your public key
2. **Added Form Validation** - Required fields (name, email, message) are now validated
3. **Better Error Handling** - Shows specific error messages from EmailJS
4. **Improved Template Parameters** - Updated to match common EmailJS template structures

## 🔍 Verify Your EmailJS Template

Your template in EmailJS dashboard should have these **exact variable names**:

### Template Variables to Check:
```
{{from_name}}    - Sender's name
{{from_email}}   - Sender's email
{{subject}}      - Email subject
{{message}}      - The message content
{{to_name}}      - Your name (optional)
{{reply_to}}     - Reply-to email (optional)
```

### Recommended Template Structure:

**Subject Line:**
```
New Contact from Portfolio: {{subject}}
```

**Email Body:**
```
Hello Rajesh,

You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
You can reply directly to: {{reply_to}}
```

## 🧪 Testing Steps

1. **Open your browser console** (F12 or Right-click → Inspect → Console tab)
2. **Go to** http://127.0.0.1:5000
3. **Navigate to the Contact section**
4. **Fill in the form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Email
   - Message: This is a test message
5. **Click "Send Message"**
6. **Check the console** for any errors

## 🐛 Common Issues & Solutions

### Issue 1: "Failed to send message"
**Possible causes:**
- Service ID, Template ID, or Public Key is incorrect
- Gmail service not connected in EmailJS dashboard
- Template variables don't match

**Solutions:**
- Double-check your credentials in EmailJS dashboard
- Make sure Gmail service is **connected and verified**
- Verify template variable names match exactly

### Issue 2: Template Error
**Error message:** `Template parameters are invalid`

**Solution:**
1. Go to EmailJS Dashboard → Email Templates
2. Click on your template (`template_b4xndyk`)
3. Click "Test it"
4. Use these test values:
   - from_name: John Doe
   - from_email: john@example.com
   - subject: Test Subject
   - message: Test message
   - to_name: Rajesh
   - reply_to: john@example.com
5. If test fails, update your template variables

### Issue 3: CORS or Network Error
**Solution:**
- Make sure you're accessing via http://127.0.0.1:5000 (not localhost)
- Check if EmailJS service is down: https://status.emailjs.com/
- Clear browser cache and reload

### Issue 4: Email Arrives but Template is Wrong
**Solution:**
1. Go to EmailJS Dashboard → Email Templates
2. Edit your template to match the structure above
3. Make sure the "To Email" is set to: `rajeshchouhancs25@gmail.com`
4. Save and test again

## 📧 Verify EmailJS Dashboard Settings

### 1. Service Configuration
- Go to: **Email Services** in sidebar
- Check: Gmail service should show "Connected" status
- Email: Should be `rajeshchouhancs25@gmail.com`

### 2. Template Configuration
- Go to: **Email Templates** in sidebar
- Template ID: `template_b4xndyk`
- Status: Should be "Active"
- To Email: Set to `{{to_email}}` or directly to `rajeshchouhancs25@gmail.com`

### 3. Account Settings
- Go to: **Account** → **General**
- Public Key: `byIcQVkT06fiXhljF`
- Make sure account is verified

## 🔐 Security Notes

Your credentials in the code:
```javascript
Service ID: service_d63v7rf
Template ID: template_b4xndyk
Public Key: byIcQVkT06fiXhljF
```

These are **safe to expose** in client-side code. EmailJS has built-in security features.

## 📊 Check Email Delivery

After submitting the form:
1. Check EmailJS Dashboard → **Logs** to see if email was sent
2. Check your inbox: `rajeshchouhancs25@gmail.com`
3. Check **Spam/Junk** folder
4. Wait 1-2 minutes for delivery

## 🆘 Still Not Working?

If you're still having issues, check the **browser console** and share the error message. Common error messages:

- `The public key is required` → Public key not initialized
- `Template parameters are invalid` → Template variable mismatch
- `Service is not configured` → Service ID is wrong or service not connected
- `403 Forbidden` → Account verification needed

## 📞 Next Steps

1. Open the app in your browser
2. Open Developer Console (F12)
3. Try sending a test email
4. Share the console error message if it fails

The form now has better error handling and will show you specific error messages!

