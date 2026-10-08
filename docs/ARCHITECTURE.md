# Architecture

## Request and deployment flow

Vercel serves the root HTML pages and static assets. `vercel.json` retains the
public aliases for the admin dashboard, courses, lectures, blog, and community.
The root pages are intentionally plain HTML with browser ES modules; the main
site has no bundling/build step.

The community application is the exception: `community-app/` contains its
React/Vite source and `community/` contains the deployable build. Vite's
`outDir` points from the source package into `../community`. The Vercel
`/community` rewrites serve that output, and its router uses `/community` as
its basename. `community.html` forwards to the same community entry point for
older links. Keep both source and output, plus their URL aliases.

## Authentication and registration

- `assets/js/firebase-init.js` initializes the browser Firebase app, Auth, and
  Firestore clients.
- `assets/js/auth.js` owns Google/email sign-in, password actions, auth-state
  observation, and the browser's administrator identity check.
- `assets/js/auth-app.js` connects auth state to the homepage's account UI.
- `assets/js/auth-api.js` calls the separate email-code registration API.
- `server/src/index.js` configures the Express API; `auth-routes.js` handles
  registration OTP requests and verification; `mailer.js` sends the code;
  `firebase.js` initializes Firebase Admin and Realtime Database access.
- Server environment files and service-account credentials are local/deploy
  secrets and must remain outside Git.

Browser-only visibility checks are not an access-control boundary. Firestore
and Storage operations must continue to be enforced by their Firebase rules.
`admin.html` provides the dashboard UI, while `firestore.rules` and
`storage.rules` enforce protected operations.

## Courses, enrollment, and learning

- `index.html` renders the homepage/catalog entry points.
- `assets/js/courses-db.js` loads course data and owns Firestore operations for
  courses, enrollment/payment records, live settings, and progress.
- `course.html` contains the course overview, payment/enrollment UI, and player.
- `assets/js/course-learning.js` connects that UI to catalog, access, progress,
  and video helpers.
- `firestore.rules` controls course metadata, preview/locked lesson reads,
  enrollment writes, and owner-only progress.
- `storage.rules` controls payment proof, profile/community images, and
  protected lesson files.

Course-access changes must be implemented in the data flow and security rules,
not only by hiding or showing client UI.

## Live sessions

`live.html` owns the live-room and replay page structure.
`assets/js/live-learning.js` reads the live configuration/session data through
`courses-db.js`, initializes playback, and connects the chat experience.
The admin dashboard manages live settings and sessions. Firestore rules
separately constrain live chat reads and writes.

## Community and profiles

The React app is assembled in `community-app/src/App.jsx`. It uses the shared
auth, theme, toast, route, and layout providers, then lazy-loads feed, profile,
messenger, notifications, search, settings, and post pages. Firebase config
and database operations are in `community-app/src/firebase/` and
`community-app/src/utils/`; `community-app/src/supabase/` contains the
community Supabase client integration.

The static build and assets are in `community/`. The standalone profile page
is `user-profile.html`, backed by `assets/js/user-profile.js`. Story creation
and viewing use `stories.html`, `assets/js/stories.js`, and
`assets/js/story-manager.js`. Firestore rules define the public profile,
directory, posts, comments, chat, presence, notification, and story access
boundaries.

## Admin

`admin.html` contains the dashboard markup, styles, and page-level controls.
It uses the shared auth and course data modules to manage courses, learners,
payments, and live settings. Browser-side checks improve the user experience
but do not secure the database. The verified administrator condition in
`firestore.rules` and `storage.rules` is the enforcement boundary for Firebase
data and files.

## Styling and shared browser modules

`assets/css/` contains the shared portfolio, course, community/profile, chat,
and story styles. `assets/js/` contains browser auth, data, player, profile,
story, and UI modules. The community app imports its source styles from
`community-app/src/styles/` and selected shared styles from `assets/css/`.

## Optional APIs and reference material

`python-backend/` and `php-backend/` are standalone optional API experiments;
they are not required to serve the production static pages. The email-code
Express API is documented in `server/README.md`. Firebase project setup is
documented in `FIREBASE_SETUP.md`; `docs/archive/` contains historical reports
that are not runtime dependencies.
