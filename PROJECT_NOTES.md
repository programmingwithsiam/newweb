# Project Notes

## Folder map

- Root HTML files are the portfolio, course, live, admin, and error-page entry
  points. Legacy page URLs redirect through `vercel.json`.
- `assets/css/`, `assets/js/`, and `assets/images/` hold shared browser styles,
  modules, and media.
- `server/` contains the separate Express email-code registration API.
- `docs/ARCHITECTURE.md` documents runtime modules and data flows.
- `database.rules.json`, `firestore.rules`, and `storage.rules` define Firebase
  access; `firebase.json` connects these rules for deployment.
- `firebase.json`, `firestore.indexes.json`, `vercel.json`, and `serve.json`
  hold Firebase, Vercel, and local static-server configuration.
- Root and `server/` package manifests support the static development server
  and the live email-code API. Their `.env.example` files contain templates.
- `.gitignore` excludes dependencies and local secrets. Root `.env.example`,
  `favicon.ico`, the Google verification file, `manifest.json`, `sitemap.xml`,
  and `robots.txt` are retained project files.
- `README.md`, `PROJECT_NOTES.md`, `SECURITY.md`, `FIREBASE_SETUP.md`, and
  `CHANGELOG.md` are the retained project documentation.

## Maintenance rules

- Keep active public URLs and `vercel.json` rewrites aligned with destination
  files.
- Keep the public pages as plain HTML/CSS/JavaScript modules; do not introduce
  a framework or build step for the root site.
- Enforce Firebase access in `firestore.rules` and `storage.rules`; hiding a
  client-side control is not authorization.
- Do not commit `.env` files, Firebase Admin credentials, API keys, SMTP
  credentials, or other secrets. Keep backend secrets in the hosting provider.
- Run `npm run check` after JavaScript changes and verify affected public
  routes locally.
- Do not change authentication, admin, or Firebase security-rule behavior
  without explicit approval.

## Known limitations and items to review

- `npm run check` syntax-checks first-party browser modules, API handlers, and
  Express modules; it does not test browser behavior, Firebase rules, or
  accessibility.
- Firebase and YouTube services require working external project configuration
  and network access.
- Portfolio project accuracy figures are displayed as claims, but this
  repository does not include reproducible evaluation data for them.
- `serve.json` supplies the root `npm run dev` server's local route rewrites.
