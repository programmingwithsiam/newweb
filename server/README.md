# CodeWithSiam Auth API

Small Express API for email-code registration. Firebase Auth accounts are created disabled and unverified at registration start, then enabled only after a valid email code. The user's password is sent directly to Firebase Admin over HTTPS and is never written to the pending-registration database record or logs.

Pending codes and rate-limit metadata are stored in Firebase Realtime Database under `authRegistrationPending/{sha256(normalizedEmail)}`. The code is HMAC-SHA256 hashed, expires after five minutes, and accepts at most five incorrect attempts. Firebase Admin bypasses Realtime Database rules; client SDK access is explicitly denied by `community-app/database.rules.json`.

## Configure

Requires Node.js 20 or newer.

Use the existing local `server/.env` and service account file. Do not commit either file. Required variable names are listed in `.env.example`. If `FIREBASE_DATABASE_URL` is unset, the API uses this project's existing Realtime Database endpoint. `OTP_HASH_SECRET` is optional; when unset, the service-account private key is used as the HMAC secret. Set `CORS_ORIGIN` to the exact frontend origin(s), comma-separated, when deploying.

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