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

### Migrate existing course and live video URLs first

The current rules keep course-level video URLs, live stream URLs, and archived
replay URLs in private documents. Before publishing those rules to a project
with existing data, make a Firestore backup and run the migration with
Application Default Credentials for the intended project:

```sh
gcloud auth application-default login
FIREBASE_PROJECT_ID=your-project-id npm run migrate:protected-videos
```

The first command is a dry run and makes no changes. Review its counts and any
orphaned legacy grants. The apply mode stops if any grant cannot be mapped to
a Firebase Auth UID. Resolve those cases manually before retrying. Only after
separately approving the migration, run:

```sh
FIREBASE_PROJECT_ID=your-project-id npm run migrate:protected-videos -- --apply
```

The script moves course-level URLs to `courseVideos/{courseId}`, replay URLs
to `liveSessionVideos/{sessionId}`, and the active stream URL to
`liveStreamSecrets/current`. It also builds `courseAccess/{uid}` entitlement
mirrors needed by Storage Rules. It does not migrate lesson-level preview URLs;
those remain governed by the lesson preview rules. Back up first, pause
concurrent admin edits while applying, and verify public catalog/archive
metadata plus enrolled-user video access before deploying rules. This project
does not run this migration or modify production data automatically.

1. Go to **Firestore Database → Rules**.
2. Delete the default contents and paste in the entire contents of `firestore.rules` from this project.
3. Click **Publish**.
4. Go to **Storage → Rules**, replace the contents with `storage.rules`, and publish those rules too.

After migration and Emulator validation, both rule sets can also be deployed
together with `firebase deploy --only firestore:rules,storage`.

These rules already enforce:
- Anyone can read course and live archive metadata that contains no protected video URL.
- Only the verified administrator email configured in `firestore.rules` can create/edit/delete course and live data.
- Verified, unblocked students with approved enrollment or matching legacy grants can read protected course videos.
- Verified, unblocked users can read live stream and replay URLs; anonymous and unverified users cannot.
- Users marked `blocked: true` cannot read lessons or protected course/live videos.
- Learning progress under `progress/{uid}/...` is private — only that user can read/write it.

## 7. Add course videos through YouTube

1. Upload or publish the video on YouTube.
2. In `admin.html`, paste its watch URL into the existing course or lesson video field.
3. Course-level URLs are stored separately from public course metadata; lesson URLs remain in their lesson documents and are readable only for previews or authorized students.
4. The course player embeds YouTube after access has been verified.
5. Do not enable Firebase Storage or add a billing account for course videos. The Spark/no-cost setup is sufficient for this flow.

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

Run the local checks and Firebase Emulator rules tests before changing deployed
rules. The Emulator CLI requires JDK 21 or newer:

```sh
npm run check
node --test tests/*.test.js
npm run test:rules
```

Use this checklist after deploying:

- [ ] Open the site without signing in — portfolio loads normally.
- [ ] Click **Courses** — catalog is visible.
- [ ] Click **Sign In → Continue with Google** — real Google account picker appears.
- [ ] Sign out, then create an account with email/password.

- [ ] Try opening `/admin.html` while signed in as a non-admin — see "Access Denied", redirected home.
- [ ] Promote yourself to admin (Step 8), open `/admin.html` — dashboard loads.
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
