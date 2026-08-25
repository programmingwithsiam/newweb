# Security notes

## Secrets

- Never commit `.env`, service-account JSON, private keys, or API tokens.
- Put other server-side secrets in Vercel Project Settings > Environment Variables.
- `.env.example` contains placeholders only and is safe to commit.
- Firebase web configuration is intentionally public. Firestore and Storage rules are the real access control.

## Before pushing

Run:

```sh
git diff --cached
git grep -nE 'AIza|GEMINI_API_KEY=|BEGIN (RSA|OPENSSH|PRIVATE) KEY|private_key|client_secret' -- ':!SECURITY.md' ':!.env.example'
```

Do not push if the second command finds a real credential. Rotate any credential that was previously committed, even if it was later deleted.

## Vercel variables

Set `GEMINI_API_KEY` to the Gemini server key and `ALLOWED_ORIGIN` to the production site origin, for example `https://codewithsiam.vercel.app`. Do not expose either variable in frontend JavaScript.
