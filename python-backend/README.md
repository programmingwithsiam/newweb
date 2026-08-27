# CodeWithSiam Django API

A small Django API for server-side course catalog reads and future analytics work. It does not replace Firebase Auth, Firestore, or payment verification.

Setup:

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
export FIREBASE_PROJECT_ID=mylatestweb-fd3d7
python manage.py runserver 127.0.0.1:8001
```

Endpoints:

- `GET /api/health`
- `GET /api/courses`

Only public course metadata is returned. Never expose Firebase service-account credentials to the browser or commit them to this repository.
