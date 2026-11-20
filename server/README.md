# CodeWithSiam Community API

Express API for authenticated Community media operations and social interactions. Sign-in is shared with the website's existing Firebase Authentication session; new accounts use the existing Google sign-in. There is no separate Community registration or OTP/email-verification service.

## Configure

Requires Node.js 20 or newer. Copy `server/.env.example` to `server/.env` for local development. Never commit `.env` files or service-account credentials.

The backend requires:

- `FIREBASE_SERVICE_ACCOUNT`: service-account JSON or a path to a private JSON file.
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`: server-side media credentials.
- Firebase App Check tokens are required by default in production; the frontend must send them. Set `REQUIRE_APP_CHECK=true` in other environments that enforce App Check.
- `ALLOWED_ORIGINS`: exact browser origins allowed to call the API.
- `PORT`: optional; defaults to `3001` locally and is assigned by the hosting platform.

Firebase Admin verifies Firebase ID tokens for protected Community endpoints. Browser code must never receive the service-account or Cloudinary API secret.
Post/comment creation and media uploads use per-account limits; reaction and follow changes are also rate-limited server-side.

Install dependencies and run locally:

```sh
cd server
npm install
npm run dev
```

The API listens on `http://localhost:3001` by default. Start the frontend separately. Verify it is running with:

```sh
curl -i http://localhost:3001/health
```

## Production environment checklist

### Vercel frontend/API functions

- Set the existing Firebase web configuration in the frontend as required by the Firebase setup.
- Configure `FIREBASE_SERVICE_ACCOUNT` as a server-only secret for Firebase Admin functions.
- Configure `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` as server-only secrets.
- Keep Firebase App Check enabled and configure the production provider/domain; production requires App Check unless explicitly disabled.
- Do not configure OTP hashing secrets or SMTP credentials; the project does not send OTP email.

### Separate Express backend (if used)

- Set `FIREBASE_SERVICE_ACCOUNT` through the host's secret store or a protected secret file.
- Set the three `CLOUDINARY_*` variables and `ALLOWED_ORIGINS` for production.
- If `ALLOWED_ORIGINS` is unset, production allows only `https://codewithsiam.vercel.app`; loopback origins are rejected in production even if configured.
- Do not configure OTP, SMTP, or Gmail app-password variables.

The frontend's Vercel API functions are the production route for Community operations. If hosting the Express API separately, update the frontend API base URL to that service and verify its `/health` endpoint. Do not deploy this project as part of this configuration change.
