# CodeWithSiam — Programming Academy

CodeWithSiam is a free-first programming academy and learning platform for
practical Python, web development, AI, and project-based learning.

## Stack

- **Frontend:** Static HTML/CSS/JS (no build step, no framework)
- **Hosting:** Vercel (static files + serverless functions)
- **Auth:** Firebase Authentication (Google OAuth + Email/Password)
- **Database:** Firebase Firestore (courses, modules, lessons, per-user progress)
- **Video:** YouTube (unlisted videos recommended) — no paid video hosting
- **Optional services:** Django and PHP adapters are retained for free local experimentation; the production site remains Firebase-backed

## Project structure

```
index.html                 Public academy homepage and course catalog
course.html                Course overview, checkout, and learning player
live.html                  Authenticated Live room, replay playlist, and chat
admin.html                 Admin dashboard (Firebase-auth + role gated)
assets/css/                Shared portfolio and learning styles
assets/js/                 Auth, Firestore, course, and UI modules
assets/images/             Profile, favicon, and course imagery
manifest.json              PWA metadata and official brand icons
firestore.rules            Firestore security rules for courses, live, chat
storage.rules              Firebase Storage rules for uploaded course videos
vercel.json                Static deployment headers and course route rewrite
python-backend/             Optional Django catalog/analytics adapter
php-backend/                Optional PHP 8.3 catalog adapter
FIREBASE_SETUP.md           Firebase project setup
.env.example                Environment variable reference
```

## Quickstart

1. Follow **FIREBASE_SETUP.md** to create a free Firebase project, enable
   Auth providers, create Firestore, and paste your config into
   `assets/js/firebase-init.js`.
2. Add your Vercel domain to Firebase → Authentication → Settings →
   Authorized domains.
3. Sign in once on the live site using the verified administrator email
   configured in `assets/js/auth.js` and `firestore.rules`.
4. Sign in to `/admin.html` and create your first course.
5. Open `/live.html` for the authenticated live room. Use Admin → Live Studio
   to publish a YouTube stream and archive its replay.

## Local development

This is a static HTML/CSS/ES module project; there is no `app/` build folder.

```bash
npm run check
npm run dev
```

The development server serves the repository root, so the main entrypoints are
`/`, `/course.html`, `/live.html`, and `/admin.html`.

## Optional backend services

The main website remains static and continues to use Firebase Auth, Firestore,
and Firestore Security Rules for identity, payments, access, and progress. The
two small services below are real server-side adapters for future integrations;
they do not duplicate the production database or bypass security rules.

### Django API

```bash
cd python-backend
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
export FIREBASE_PROJECT_ID=mylatestweb-fd3d7
python manage.py runserver 127.0.0.1:8001
```

Available endpoints: `GET /api/health` and `GET /api/courses`.

### PHP API

```bash
cd php-backend
FIREBASE_PROJECT_ID=mylatestweb-fd3d7 php -S 127.0.0.1:8081 -t public
```

Available endpoints: `GET /api/health` and `GET /api/courses`. Keep both
services behind a proper host and HTTPS before using them outside local work.

## Cost

Everything above runs on free tiers at portfolio scale — see the "Free-tier
notes" table at the bottom of `FIREBASE_SETUP.md` for specifics and limits.
