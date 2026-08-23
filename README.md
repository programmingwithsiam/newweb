# CodeWithSiam — Portfolio + Course Platform

Portfolio of Md Siam Ahmmed (AI Engineer / Full Stack Developer) with a
built-in, free-first course/LMS platform.

## Stack

- **Frontend:** Static HTML/CSS/JS (no build step, no framework)
- **Hosting:** Vercel (static files + serverless functions)
- **Auth:** Firebase Authentication (Google OAuth + Email/Password)
- **Database:** Firebase Firestore (courses, modules, lessons, per-user progress)
- **Video:** YouTube (unlisted videos recommended) — no paid video hosting
- **AI Chat:** Google Gemini via a Vercel serverless function (`api/chat.js`)

## Project structure

```
index.html              Public portfolio + course platform
admin.html               Admin dashboard (Firebase-auth + Firestore-role gated)
firestore.rules          Firestore security rules (deploy via Firebase Console)
assets/
  css/style.css          All styling
  js/
    script.js            Portfolio effects, chatbot UI, course rendering
    firebase-init.js      Firebase app/auth/db initialization (paste your config here)
    auth.js               Firebase Authentication functions
    auth-app.js            Wires auth.js to the header sign-in UI + modal
    courses-db.js          Firestore CRUD for courses/modules/lessons/progress
api/
  chat.js                 Gemini chatbot backend (server-side API key)
FIREBASE_SETUP.md         Step-by-step Firebase project setup
.env.example              Required environment variables for Vercel
```

## Quickstart

1. Follow **FIREBASE_SETUP.md** to create a free Firebase project, enable
   Auth providers, create Firestore, and paste your config into
   `assets/js/firebase-init.js`.
2. Get a free Gemini API key at https://aistudio.google.com/apikey.
3. Deploy to Vercel; add `GEMINI_API_KEY` under Project → Settings →
   Environment Variables.
4. Add your Vercel domain to Firebase → Authentication → Settings →
   Authorized domains.
5. Sign in once on the live site using the verified administrator email
   configured in `assets/js/auth.js` and `firestore.rules`.
6. Sign in to `/admin.html` and create your first course.

## Cost

Everything above runs on free tiers at portfolio scale — see the "Free-tier
notes" table at the bottom of `FIREBASE_SETUP.md` for specifics and limits.
