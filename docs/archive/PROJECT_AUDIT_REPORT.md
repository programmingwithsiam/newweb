# Project Audit and Safe Cleanup Report

Date: 2026-09-13

## 1) Project scope summary
This project is a static portfolio + learning platform with Firebase-backed auth, course access, community features, chat, live sessions, and admin tools. The runtime application is centered around the root HTML pages and the shared assets under `assets/` plus the static `community/` built app.

### Required and kept runtime layers
- Main site: `index.html`, `course.html`, `live.html`, `admin.html`, `community.html`
- Shared frontend logic: `assets/js/*.js`
- Global styling: `assets/css/*.css`
- Firebase setup and rules: `assets/js/firebase-init.js`, `firestore.rules`, `storage.rules`
- Course system and video player: `assets/js/courses-db.js`, `assets/js/course-learning.js`
- Community app and profile/chat pages: `personal-chat.html`, `user-profile.html`, `community/index.html`
- Future/optional backend adapters: `python-backend/`, `php-backend/`
- SEO and hosting config: `manifest.json`, `robots.txt`, `sitemap.xml`, `vercel.json`

### Files intentionally not deleted
- Any file that is required for site functionality, Firebase, courses, admin access, videos, or SEO.
- Optional backend adapters and docs are kept because they are genuine project assets and not redundant runtime duplicates.
- The `community-app/` source app is preserved because it is the real source for the community frontend and is distinct from the built static site output.

## 2) Files identified as safe to remove
These files were checked against HTML references, JSImport usage, and runtime paths before removal.

### Debug / development-only JS files
- `assets/js/community-step2.js`
- `assets/js/community-step3.js`
- `assets/js/community-step4.js`
- `assets/js/community-step5.js`
- `assets/js/community-step6.js`
- `assets/js/community-minimal.js`
- `assets/js/community-clean.js`
- `assets/js/community-backup-original.js`
- `assets/js/personal-chat-v2.js`

### Test / demo files
- `test-community.sh`
- `test-reactions.html`

### Reasoning
These files do not participate in the live page load paths, are not imported by main pages, and serve only debugging or test/demo work. They are not part of the actual site runtime, admin flow, Firebase auth, course system, or video experience.

## 3) Files kept despite being non-runtime assets
The following are preserved because they are either functional support files or legitimate project documentation:
- `README.md`
- `FIREBASE_SETUP.md`
- `ADMIN_FIX_REPORT.md`
- `COMMUNITY_*` documents
- `FACEBOOK_REACTIONS_*` documents
- `python-backend/`
- `php-backend/`
- `blog/`
- `community-app/`
- `stories.html`

These support product understanding, onboarding, or future optional integrations and do not duplicate active app behavior.

## 4) Video safety rule
No real course video, YouTube embed, live stream, thumbnail, or actual lesson data was removed. The project’s video system is preserved and kept intact.

## 5) Clean-up decision
This cleanup focuses only on files confirmed to be debug-only, test-only, or abandoned implementation variants that are not wired into the app.
