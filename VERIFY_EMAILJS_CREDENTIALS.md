# ⚠️ EmailJS CORS Error - Credential Verification

## The Problem

You're getting a CORS error because EmailJS is rejecting your request with a non-200 status code (likely 401, 403, or 404).

**Error:** `Response to preflight request doesn't pass access control check: It does not have HTTP ok status.`

This means one or more of your credentials are **incorrect**.

## ✅ Step-by-Step Fix

### Step 1: Verify Your Public Key

1. Go to: https://dashboard.emailjs.com/
2. Log in to your account
3. Click **"Account"** in the left sidebar
4. Click **"General"** tab
5. Find the **"Public Key"** section
6. Copy the EXACT public key

**Current key in code:** `byIcQVkT06fiXhljF`

❓ **Does it match EXACTLY?** (case-sensitive, no spaces)

---

### Step 2: Verify Your Service ID

1. Stay in EmailJS Dashboard
2. Click **"Email Services"** in the left sidebar
3. Find your Gmail service
4. Look at the **Service ID** (shown in the service card)
5. Copy the EXACT Service ID

**Current Service ID in code:** `service_d63v7rf`

❓ **Does it match EXACTLY?**

**Important:** Make sure the service shows **"Connected"** status with a green checkmark!

---

### Step 3: Verify Your Template ID

1. In EmailJS Dashboard
2. Click **"Email Templates"** in the left sidebar
3. Find your template
4. Look at the **Template ID** (shown in the template card)
5. Copy the EXACT Template ID

**Current Template ID in code:** `template_b4xndyk`

❓ **Does it match EXACTLY?**

**Important:** Make sure the template is **Active** (not disabled)!

---

### Step 4: Verify Account Status

1. In EmailJS Dashboard
2. Check the top banner for any warnings
3. Make sure your email is **verified** (check your inbox for verification email)
4. Make sure you're on the **Free tier** or have an active subscription

---

## 🔧 How to Update Credentials

Once you have the CORRECT credentials from your dashboard:

### Option 1: Tell me the correct values
Share the correct values with me and I'll update the code:
- Public Key: `_____________`
- Service ID: `_____________`
- Template ID: `_____________`

### Option 2: Update manually
Edit this file: `client/src/components/sections/contact.tsx`

Find lines 15-17 and update:
```javascript
const serviceId = 'YOUR_CORRECT_SERVICE_ID';
const templateId = 'YOUR_CORRECT_TEMPLATE_ID';
const publicKey = 'YOUR_CORRECT_PUBLIC_KEY';
```

---

## 🆘 Don't Have EmailJS Account Yet?

If you haven't created the EmailJS account or completed the setup:

### Quick Setup (5 minutes):

1. **Create Account:** https://www.emailjs.com/
2. **Verify Email:** Check your inbox and click verification link
3. **Add Gmail Service:**
   - Click "Add New Service"
   - Choose "Gmail"
   - Connect your Gmail: `rajeshchouhancs25@gmail.com`
   - Copy the **Service ID**
4. **Create Template:**
   - Click "Email Templates"
   - Click "Create New Template"
   - Use this simple template:
     - Subject: `New message from {{from_name}}`
     - Body: `From: {{from_name}} ({{from_email}})\n\nSubject: {{subject}}\n\nMessage: {{message}}`
   - Save and copy the **Template ID**
5. **Get Public Key:**
   - Go to Account → General
   - Copy your **Public Key**

---

## 🧪 Test Your Credentials

EmailJS provides a way to test if credentials are correct:

1. Go to your template in EmailJS Dashboard
2. Click the **"Test it"** button
3. Fill in test values:
   - `from_name`: Test User
   - `from_email`: test@example.com
   - `subject`: Test
   - `message`: This is a test
4. Click "Send Test"
5. If test works, your template and service are correct!
6. If test fails, there's an issue with your service connection

---

## 💡 Common Mistakes

❌ **Copying with extra spaces:** `" service_xyz"` instead of `"service_xyz"`
❌ **Wrong case:** `Service_XYZ` instead of `service_xyz`
❌ **Using Account ID instead of Public Key**
❌ **Service not connected:** Gmail service shows "Not Connected"
❌ **Email not verified:** Check your email inbox for verification link
❌ **Template is disabled:** Template needs to be "Active"

---

## 📝 What to Do Now

1. **Go to EmailJS Dashboard:** https://dashboard.emailjs.com/
2. **Write down your credentials:**
   - Public Key: ________________
   - Service ID: ________________
   - Template ID: ________________
3. **Share them with me** or update the code yourself
4. **Test again!**

---

**Once you verify your credentials, share them with me and I'll update the code immediately!** 🚀

