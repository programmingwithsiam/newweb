# CodeWithSiam

CodeWithSiam is a static portfolio and learning platform with course
enrollment, lesson playback, live sessions, learner profiles, and a community
application. The public website is hosted on Vercel and uses Firebase for
authentication, Firestore data, and protected file storage.

## Technology

- Public pages: HTML, CSS, and browser JavaScript modules.
- Community: React/Vite source in `community-app/`; its generated static site
  is deployed from `community/`.
- Hosting and route rewrites: Vercel (`vercel.json`).
- Identity and application data: Firebase Authentication and Firestore.
- Media: Firebase Storage and YouTube, depending on the feature.
- Registration email codes: a separate Express service in `server/`.
- Optional experiments: Django in `python-backend/` and PHP in `php-backend/`.

## Project map

| Path | Purpose |
| --- | --- |
| `index.html` | Portfolio homepage, course catalog, and sign-in UI |
| `course.html` | Course details, enrollment, and lesson player |
| `live.html` | Live sessions, replays, and chat |
| `admin.html` | Admin dashboard for courses, enrollment, payments, and live settings |
| `community/` | Built community site served at `/community` |
| `community-app/` | Editable React/Vite community source |
| `community.html` | Compatibility page that forwards to the community app |
| `user-profile.html`, `stories.html` | Standalone profile and story experiences |
| `blog/` | Static blog landing page and content |
| `assets/css/`, `assets/js/`, `assets/images/` | Shared styles, browser modules, and media |
| `server/` | Express email-code registration API |
| `python-backend/`, `php-backend/` | Optional standalone API experiments |
| `docs/` | Architecture notes and archived project reports |
| `firestore.rules`, `storage.rules` | Firebase access-control rules |
| `manifest.json`, `sitemap.xml`, `robots.txt` | PWA and search-engine metadata |
| `vercel.json` | Deployment headers and public URL rewrites |

## Run locally

Requirements: Node.js 18 or newer and npm.

```sh
npm run check
npm run dev
```

`npm run dev` serves the repository root; use the URL printed by the server.
Useful entry points include `/`, `/course.html`, `/live.html`, `/admin.html`,
`/community/`, `/blog/`, `/user-profile.html`, and `/stories.html`. Firebase
features require a configured Firebase project and authorized local domain.

For email-code registration, configure and run the separate service using
[`server/README.md`](./server/README.md). It needs its own environment values
and Firebase Admin credentials; do not commit those values or credential files.

## Firebase and deployment

Read [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md) for Firebase Authentication,
Firestore, storage, and deployment setup. The browser Firebase configuration
is public client configuration; Firestore and Storage rules must enforce data
access. Never put Admin SDK keys, SMTP credentials, or API secrets in browser
code or Git.

Vercel serves the static pages and applies the rewrites in `vercel.json`.
Keep these public routes intact: `/admin`, `/course`, `/courses/:courseId`,
`/courses/:courseId/lectures/:lessonId`, `/blog`, `/blog/:slug`, and
`/community` (as well as the direct `.html` pages).

The community build is configured by `community-app/vite.config.js` to write
to `community/`. Edit the source in `community-app/`, then use that package's
existing build script before deploying changes to the community experience.

## Common development tasks

### Add a public page

1. Add the page as an HTML file at the repository root unless it belongs to an
   existing multi-page app.
2. Reuse shared styles and browser modules from `assets/`.
3. Add the page to the appropriate navigation and, if it should be indexed,
   `sitemap.xml`.
4. Verify direct navigation and refresh behavior locally. Add a Vercel rewrite
   only if the page needs a clean URL; keep any existing URL aliases working.

### Add a course

Create and manage courses through the admin dashboard. Course reads/writes,
enrollments, lesson access, and progress are implemented in
`assets/js/courses-db.js` and `assets/js/course-learning.js`; the data model
and access conditions must remain consistent with `firestore.rules`. Do not
make a course-access change in client code alone.

### Add a feature

Identify the owning page and module first. Keep page-specific UI in that
page/module, shared browser behavior in `assets/js/` or `assets/css/`, and
community features in `community-app/src/`. If the feature reads or writes
Firebase data, update and test the matching security rules together with the
client behavior. Run `npm run check` and verify affected public routes.

## Checks

`npm run check` runs Node syntax checks for the six listed first-party browser
modules. It is a syntax check, not a full browser, Firebase-rules, or community
build test. Community and server packages have separate dependencies and
scripts; see their package manifests and READMEs before changing them.

For system ownership and data flow, see
[`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).
