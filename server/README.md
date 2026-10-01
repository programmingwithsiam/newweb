# CodeWithSiam Auth API

Small Express API for email-code registration. Firebase Auth accounts are created disabled and unverified at registration start, then enabled only after a valid email code. The user's password is sent directly to Firebase Admin over HTTPS and is never written to the pending-registration database record or logs.

Pending codes and rate-limit metadata are stored in Firebase Realtime Database under `authRegistrationPending/{sha256(normalizedEmail)}`. The code is HMAC-SHA256 hashed, expires after five minutes, and accepts at most five incorrect attempts. Firebase Admin bypasses Realtime Database rules; client SDK access is explicitly denied by `community-app/database.rules.json`.

## Configure

Requires Node.js 20 or newer.

Use the existing local `server/.env` and service account file. Do not commit either file. Required variable names are listed in `.env.example`. If `FIREBASE_DATABASE_URL` is unset, the API uses this project's existing Realtime Database endpoint. `OTP_HASH_SECRET` is optional; when unset, the service-account private key is used as the HMAC secret. Set `ALLOWED_ORIGINS` to the exact frontend origin(s), comma-separated, when deploying.

Install the dependencies once:

```sh
cd server
npm install
```

Run the API from the repository root:

```sh
npm --prefix server run dev
```

The API listens on `http://localhost:3001` by default. Start the static frontend separately with the repository's `npm run dev` command on port 5173.

## Deploy to Render

1. In Render, create a **Web Service** connected to this repository. Set **Root Directory** to `server`, **Build Command** to `npm install`, **Start Command** to `npm start`, and choose Node 20 or newer.
2. Set `ALLOWED_ORIGINS` to the exact browser origins, for example `https://codewithsiam.vercel.app,http://localhost:5173` (no trailing slash).
3. Add `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `FIREBASE_DATABASE_URL` as Render environment variables. Add `OTP_HASH_SECRET` as a long random secret if you do not want the service-account private key to be the OTP HMAC key.
4. In the service's **Environment → Secret Files**, add a file named `serviceAccountKey.json` and paste the service-account JSON there. Do not put the JSON in Git, a normal environment variable, or `render.yaml`. Render mounts secret files at `/etc/secrets/<filename>`.
5. Set `FIREBASE_SERVICE_ACCOUNT` to `/etc/secrets/serviceAccountKey.json`. The server accepts absolute paths and reads this path at startup.
6. After deploy, test `https://YOUR-SERVICE.onrender.com/health`; it should return `{"status":"ok"}`. Render Free services can sleep when idle and take time to wake. **Render Free blocks outbound SMTP ports 25, 465, and 587**, so Gmail SMTP email delivery will not work on a Free Web Service. Use a paid Render service or change the mail transport to an email API over HTTPS before expecting OTP mail delivery.
7. Replace `https://YOUR-SERVICE.onrender.com` in the single `API_BASE_URL` constant at the top of `assets/js/auth-api.js` with your real service URL, then deploy the static site to Vercel. Localhost continues to use `http://localhost:3001`.

## Test with curl

Health check:

```sh
curl -i http://localhost:3001/health
```

Start registration (use a real inbox you control):

```sh
curl -i http://localhost:3001/auth/register/start \
  -H 'Origin: http://localhost:5173' \
  -H 'Content-Type: application/json' \
  --data '{"name":"Test Learner","email":"you@example.com","password":"ChangeMe123!"}'
```

Read the code from that inbox, then verify it (the API never returns the code):

```sh
curl -i http://localhost:3001/auth/register/verify \
  -H 'Origin: http://localhost:5173' \
  -H 'Content-Type: application/json' \
  --data '{"email":"you@example.com","otp":"123456"}'
```

Resend after the 60-second cooldown:

```sh
curl -i http://localhost:3001/auth/register/resend \
  -H 'Origin: http://localhost:5173' \
  -H 'Content-Type: application/json' \
  --data '{"email":"you@example.com"}'
```

Replace the sample email/code/password with test values. Never use a real account password in shell history. Logs include request IDs, stage names, counts, and provider error codes only; they never include codes, passwords, tokens, emails, or environment values.