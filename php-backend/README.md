# CodeWithSiam PHP API

A dependency-free PHP 8.3 API adapter for the existing Firestore course catalog.

Run locally from this directory:

```bash
FIREBASE_PROJECT_ID=mylatestweb-fd3d7 php -S 127.0.0.1:8081 -t public
```

Endpoints:

- `GET /api/health`
- `GET /api/courses`

This service only reads public course documents through the Firestore REST API. Authentication, payment approval, enrollment access, and all writes remain protected by Firebase Auth and Firestore rules in the main app.
