# EmailJS Debugging Guide

## 🔍 Check Browser Console Now

The form now has detailed logging. Please:

1. **Open Developer Console** (Press F12)
2. **Go to the Console tab**
3. **Reload the page** (refresh the browser)
4. **Try submitting the form again**
5. **Look for these messages:**

### On Page Load:
```
✅ EmailJS initialized successfully
Service ID: service_d63v7rf
Template ID: template_b4xndyk
```

### When Submitting:
```
📧 Attempting to send email...
Form data: { name: '...', email: '...', subject: '...' }
Template params: { ... }
Using Service ID: service_d63v7rf
Using Template ID: template_b4xndyk
```

### If Success:
```
✅ Email sent successfully! { status: 200, text: 'OK' }
```

### If Error:
```
❌ EmailJS Error Details:
Error object: { ... }
Error text: ...
Error status: ...
Error message: ...
```

## 🔧 Common Error Codes

### Error 400 - Bad Request
**Problem:** Template parameters don't match your EmailJS template

**Solution:**
1. Go to EmailJS Dashboard: https://dashboard.emailjs.com/
2. Click "Email Templates" in sidebar
3. Find template: `template_b4xndyk`
4. Click "Edit"
5. Make sure your template uses these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_name}}` (optional)
   - `{{reply_to}}` (optional)

### Error 403 - Forbidden
**Problem:** Public key is invalid or account not verified

**Solution:**
1. Go to EmailJS Dashboard: https://dashboard.emailjs.com/
2. Go to "Account" → "General"
3. Copy the Public Key
4. Verify it matches: `byIcQVkT06fiXhljF`
5. Make sure email is verified

### Error 404 - Not Found
**Problem:** Service ID or Template ID is wrong

**Solution:**
1. Verify Service ID:
   - Go to "Email Services"
   - Check ID matches: `service_d63v7rf`
2. Verify Template ID:
   - Go to "Email Templates"
   - Check ID matches: `template_b4xndyk`

### Error 412 - Precondition Failed
**Problem:** EmailJS account issues or rate limit

**Solution:**
1. Check your EmailJS dashboard for warnings
2. Verify account is in good standing
3. Check if you hit the free tier limit (200 emails/month)

## 🧪 Manual Test with Correct Template

Here's a template that will work with the current code:

### EmailJS Template Setup:

**Subject Line:**
```
New message from {{from_name}}: {{subject}}
```

**Body (HTML or Plain Text):**
```
Hello {{to_name}},

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

**Settings:**
- To Email: `rajeshchouhancs25@gmail.com` (or use `{{to_email}}` variable)
- From Name: Your Portfolio
- From Email: (your connected Gmail)

## 📋 Checklist

Go through this checklist:

- [ ] EmailJS account is created and verified
- [ ] Gmail service is connected in EmailJS
- [ ] Service ID `service_d63v7rf` exists and is active
- [ ] Template ID `template_b4xndyk` exists and is active
- [ ] Public Key `byIcQVkT06fiXhljF` is correct
- [ ] Template uses the correct variable names
- [ ] Browser console shows "EmailJS initialized successfully"
- [ ] No browser extensions blocking requests (try incognito mode)

## 🎯 Next Steps

1. **Check the console output** - Share the exact error message
2. **Verify your EmailJS dashboard** - Make sure service and template are active
3. **Test the template** in EmailJS dashboard using the "Test it" button

## 💡 Quick Fix Option

If nothing works, you can:
1. Delete the current template in EmailJS
2. Create a NEW template
3. Use this simple template body: `Hello, {{from_name}} ({{from_email}}) sent: {{message}}`
4. Get the new Template ID
5. Update line 16 in contact.tsx with the new Template ID

---

**Share the console error output and I can provide specific guidance!**

