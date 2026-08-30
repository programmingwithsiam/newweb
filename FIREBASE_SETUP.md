# Firebase Setup Guide — CodeWithSiam

This walks you through everything needed to turn on real Google/email
sign-in, the Firestore course database, and admin access. Total cost: **$0**
on Firebase's free "Spark" plan for a portfolio-scale site.

---

## 1. Create a Firebase project

1. Go to https://console.firebase.google.com
2. Click **Add project**.
3. Name it (e.g. `codewithsiam`), disable Google Analytics if you don't need it (optional, free either way), click **Create project**.

## 2. Add a Web App and get your config

1. In the project overview page, click the **</>** (Web) icon.
2. Give it a nickname (e.g. "CodeWithSiam Web").
3. You do **not** need Firebase Hosting — you're deploying on Vercel.
4. Firebase will show you a `firebaseConfig` object. Copy it.
5. Open `assets/js/firebase-init.js` in this project and paste your values into the `firebaseConfig` object at the top (replacing the `YOUR_...` placeholders).
6. This file is safe to commit — Firebase web config is not a secret (see the comment in that file for why).

## 3. Enable Authentication providers

1. In the Firebase console, go to **Build → Authentication → Get started**.
2. Under **Sign-in method**, enable:
   - **Google** — toggle on, choose a support email, save.
   - **Email/Password** — toggle on, save.

## 4. Add authorized domains

Still in **Authentication → Settings → Authorized domains**:

1. `localhost` is there by default (for local testing).
2. Add your production domain, e.g. `your-project.vercel.app` and/or your custom domain.
3. Google sign-in will fail with `auth/unauthorized-domain` on any domain not listed here — this is the #1 thing people forget after deploying.

## 5. Create the Firestore database

1. Go to **Build → Firestore Database → Create database**.
2. Choose **Start in production mode** (we'll paste our own rules next).
3. Pick a location close to your users, click **Enable**.

## 6. Add the security rules

1. Go to **Firestore Database → Rules**.
2. Delete the default contents and paste in the entire contents of `firestore.rules` from this project.
3. Click **Publish**.

These rules already enforce:
- Anyone can read the public course catalog metadata.
- Only the verified administrator email configured in `firestore.rules` can create/edit/delete courses, modules, or lessons.
- Only the admin or a Google account with `authorized_users/{email}.access == 'granted'` can read lessons.
- Users marked `blocked: true` cannot read lessons.
- Learning progress under `progress/{uid}/...` is private — only that user can read/write it.

## 7. Add course videos through YouTube

1. Upload or publish the lesson video on YouTube.
2. In `admin.html`, paste the YouTube watch URL into the lesson's existing video field.
3. Firestore stores the canonical YouTube URL and video ID; the course player embeds YouTube.
4. Do not enable Firebase Storage or add a billing account for course videos. The Spark/no-cost setup is sufficient for this flow.

## 8. Sign in as the administrator

1. Use Google Sign-In with the verified administrator email configured in `assets/js/auth.js` and `firestore.rules`.
2. Refresh the site after sign-in. The Admin link and `admin.html` dashboard will appear only for that email.
3. Do not rely on changing a user's `role` field; server-side rules use the configured verified email.

## 9. Configure Vercel environment variables

In your Vercel project → **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `GEMINI_API_KEY` | Your key from https://aistudio.google.com/apikey |

Firebase config does **not** need to go here — it's already pasted directly into `assets/js/firebase-init.js` (see Step 2).

Redeploy after adding/changing environment variables — Vercel only picks them up on a new deployment.

## 10. Test everything

Use this checklist after deploying:

- [ ] Open the site without signing in — portfolio loads normally.
- [ ] Click **Courses** — catalog is visible.
- [ ] Click **Sign In → Continue with Google** — real Google account picker appears.
- [ ] Sign out, then create an account with email/password.
- [ ] Try opening `/admin.html` while signed in as a non-admin — see "Access Denied", redirected home.
- [ ] Promote yourself to admin (Step 7), open `/admin.html` — dashboard loads.
- [ ] Create a course, add a module, add a lesson with a YouTube URL — preview embed appears.
- [ ] Open the site in an incognito window / different browser — the course you created is visible there too (this confirms it's in Firestore, not localStorage).
- [ ] Mark a lesson complete while signed in, refresh — progress persists.
- [ ] Sign in on a second device — progress from the first device appears.
- [ ] Open browser dev tools → Network/Sources — confirm `GEMINI_API_KEY` never appears in any frontend file or response.

## Free-tier notes

| Feature | Cost |
|---|---|
| Firebase Authentication (Google + Email/Password) | Free, no cap for this scale |
| Firestore (Spark plan) | Free up to 50K reads / 20K writes / 20K deletes per day — far more than a portfolio needs |
| YouTube video hosting/bandwidth | Free (YouTube hosts and streams it, not you) |
| Vercel Hosting + serverless functions | Free on Hobby plan for personal projects |
| Gemini API | Free tier available; check current limits at https://ai.google.dev/pricing |

If your course platform ever outgrows Firestore's free daily quota (very unlikely for a personal portfolio), Firebase will start charging per read/write beyond the free quota — it does not silently stop working, but it also won't surprise-bill you without you upgrading to the Blaze (pay-as-you-go) plan first.
