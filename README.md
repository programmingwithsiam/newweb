# CodeWithSiam

CodeWithSiam is a static portfolio and learning platform with course
enrollment, lesson playback, live sessions, learner profiles, and a community
application. The public website is hosted on Vercel and uses Firebase for
authentication, Firestore data, and protected file storage.

## Technology

- Public pages: HTML, CSS, and browser JavaScript modules.
- Community: deployable static site in `community/`.
- Hosting and route rewrites: Vercel (`vercel.json`).
- Identity and application data: Firebase Authentication and Firestore.
- Media: Firebase Storage and YouTube, depending on the feature.
- Registration email codes: a separate Express service in `server/`.

## Project map

| Path | Purpose |
| --- | --- |
| `index.html` | Portfolio homepage, course catalog, and sign-in UI |
| `course.html` | Course details, enrollment, and lesson player |
| `live.html` | Live sessions, replays, and chat |
| `admin.html` | Admin dashboard for courses, enrollment, payments, and live settings |
| `community/` | Built community site served at `/community` |
| `community.html` | Legacy URL redirected to `/community/` |
| `user-profile.html`, `stories.html` | Standalone profile and story experiences |
| `blog/` | Static blog landing page and content |
| `assets/css/`, `assets/js/`, `assets/images/` | Shared styles, browser modules, and media |
| `server/` | Express email-code registration API |
| `PROJECT_NOTES.md` | Current folder map, maintenance rules, and known limitations |
| `firestore.rules`, `storage.rules`, `database.rules.json` | Firebase access-control rules |
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

Email-code registration uses the separate Express service in `server/`. Run it
with `npm --prefix server run dev` after configuring its environment from
`server/.env.example` and providing Firebase Admin credentials outside Git.

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

The deployed community files are in `community/`. Their original build source
is not retained in this production-only repository; restore it from Git
history before changing the community application.

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
community routes in `community/`. If the feature reads or writes
Firebase data, update and test the matching security rules together with the
client behavior. Run `npm run check` and verify affected public routes.

## Checks

`npm run check` runs Node syntax checks for the six listed first-party browser
modules. It is a syntax check, not a full browser, Firebase-rules, or community
build test. Community and server packages have separate dependencies and
scripts; see their package manifests and READMEs before changing them.

For the current folder map and maintenance constraints, see
[`PROJECT_NOTES.md`](./PROJECT_NOTES.md).
