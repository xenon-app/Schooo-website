# Nodemailer Setup Instructions

## 1. Gmail App Password
```
1. Go to https://myaccount.google.com/apppasswords
2. Login to divyanshucmd@gmail.com (enable 2FA first if not)
3. Generate App Password for "Mail"
4. Copy 16-char code to backend/.env:
   EMAIL_USER=divyanshucmd@gmail.com
   EMAIL_PASS=abcd wxyz 1234 efgh
```

## 2. Test Backend
```
cd backend
npm i
cp .env.example .env  # paste your creds
npm run dev
```
Visit http://localhost:5000/api/health

## 3. Full Dev
```
npm run dev:full  # Frontend + Backend
```

## 4. Test Forms
- Fill Contact/Admissions forms
- Check divyanshucmd@gmail.com for emails with ALL data

## 5. Production
- Deploy backend to Render/Vercel
- Update frontend fetch URL to prod backend
