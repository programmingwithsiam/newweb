# Architecture

## Deployment and routes

Vercel serves the root HTML pages and static assets. `vercel.json` owns
production headers, clean route rewrites, and compatibility redirects.
`serve.json` configures equivalent local aliases for `npm run dev`.

## Authentication and registration

- `assets/js/firebase-init.js` initializes the browser Firebase app, Auth, and
  Firestore clients.
- `assets/js/auth.js` owns Google/email sign-in, password actions, auth-state
  observation, and the browser's administrator identity check.
- `assets/js/auth-app.js` connects auth state to the homepage account UI.
- `assets/js/auth-api.js` calls the separate email-code registration API.
- `server/src/index.js` configures Express; `auth-routes.js` handles OTP
  requests and verification; `mailer.js` sends the code; `firebase.js`
  initializes Firebase Admin and Realtime Database access.
- `.env` values and service-account credentials are local/deploy secrets and
  must remain outside Git.

Client-side visibility checks are not an access-control boundary. Firestore
and Storage operations must be enforced by their Firebase rules. `admin.html`
owns dashboard UI; `firestore.rules` and `storage.rules` enforce Firebase
operations.

## Courses and learning

- `index.html` renders the homepage and course catalog entry points.
- `assets/js/courses-db.js` owns Firestore operations for courses,
  enrollments/payments, live settings, and progress.
- `course.html` displays the selected course's details, thumbnail, curriculum,
  and enrollment checkout.
- `assets/js/course-enrollment.js` loads the selected course, requires Google
  sign-in for enrollment, and creates a pending payment/enrollment request.
- `assets/js/courses-db.js` writes the request to Firestore. The admin payment
  queue can approve it and grant course access.
- `assets/js/script.js` owns the homepage lesson-player controls and mobile
  fullscreen behavior.
- `firestore.rules` controls course metadata, preview/locked lesson reads,
  enrollment writes, and owner-only progress.
- `storage.rules` controls payment proof and protected lesson files.

Course access changes must be enforced by the data flow and Firebase rules,
not only by hiding client UI.

## Live learning

`live.html` and `assets/js/live-learning.js` own the live room, replay player,
and chat integration. The admin dashboard manages live settings and sessions;
Firestore rules constrain chat reads and writes.

## Community preview

`community/index.html` serves the new Community preview at `/community/`.
Its isolated stylesheet and client scripts live in `community/`; the mock
adapter and messenger UI are kept separate from feed rendering and supporting
interactions. Posts, stories, reactions, follows, and messages are demo-only
in-memory data and reset on reload. The preview does not use Firebase or write
community data.

## Shared code and supporting files

`assets/css/` contains the active portfolio and course styles. `assets/js/`
contains browser auth, database, player, and UI modules. Root `package.json` provides the static
development server and syntax check. Firebase CLI configuration is in
`firebase.json` and `firestore.indexes.json`; old reports are intentionally
not retained in the production tree.
