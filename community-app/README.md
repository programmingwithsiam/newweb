# CodeWithSiam Community

The screenshot-matching Community page is built from `index.html`; the Vite
build writes it to `../community`. `src/community-production.js` connects its
feed, profiles, posts, post reactions, comments, follows, and saved posts to
the site's shared Firebase account and Firestore-backed Community APIs. The
original React app described below is legacy source and is not included in
this route.

The profile page includes editable profile and cover images, a bio, location,
website, learning focus, and skills/interests. Images are validated and
resized client-side, uploaded through the existing Cloudinary image preset,
and their URLs plus About details are saved to the signed-in user's Firestore
profile documents.

## Production setup

1. Enable Google sign-in in Firebase Authentication and add the production
   domain and any local development domain to Authorized domains. Community
   uses the same Firebase Auth session and login prompt as course enrollment.
2. Deploy the root Firestore rules and indexes before enabling Community:
   `firebase deploy --only firestore:rules,firestore:indexes`.
3. Configure the Vercel server environment with `FIREBASE_SERVICE_ACCOUNT`,
   `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
   Keep the service-account JSON and Cloudinary secret server-side.
4. If `REQUIRE_APP_CHECK=true`, register the site's reCAPTCHA v3 key with
   Firebase App Check and verify that both production and local origins are
   accepted. The client sends an App Check token to the Community APIs.
5. The media APIs currently allow `https://codewithsiam.vercel.app`. Update
   `PRODUCTION_ORIGIN` in `server/community-media.cjs` if production uses a
   different domain.
6. Community's inline scripts are pinned by SHA-256 hashes in `vercel.json`;
   refresh those hashes whenever an inline script in `index.html` changes.

Build the route with `npm --prefix community-app run build`.

For local development, run the API and frontend in separate terminals:

```bash
npm --prefix server run dev
npm --prefix community-app run dev
```

On localhost, Community API requests go to the local Express server on port
3001. On deployed sites, they use the same-origin Vercel functions. Set
`FIREBASE_SERVICE_ACCOUNT` and the three `CLOUDINARY_*` variables in
`server/.env` for media uploads. The service-account setting may be a path to a
JSON file or the JSON itself. Firestore rules still need to be deployed for
post/profile writes; local API startup does not deploy Firebase rules.

Post creation/deletion, text editing, likes/unlikes, top-level comments,
comment replies/reactions, comment deletion, profile editing, follows/unfollows,
saved posts, and Messenger conversations use the shared Firebase account and
backend/rules protections. Stories and reels are not connected to production
storage.

## Legacy React source (not deployed)

A social media web app built with **React + Vite** and Firebase
Authentication and Realtime Database. Community posts and Messenger
conversations use Realtime Database. Community and
Messenger images are hosted on Cloudinary rather than Firebase Storage. The
app does not require Cloud Functions or a paid service.

Covers: profiles, a home feed (text/photo/multi-photo/video-link posts),
reactions, comments + replies, friend requests, follow/unfollow, a
Messenger-style personal + group chat system, real-time notifications,
search, hashtags, blocking/reporting, dark/light mode, and a fully
responsive desktop/tablet/mobile layout. Voice/video call buttons are
present in chat but intentionally disabled ("Coming soon") as requested —
no real calling is implemented.

---

## 1. Project structure

```
my-community/
  src/
    firebase/config.js        Firebase app initialization (Auth/RTDB)
    context/                  AuthContext, ThemeContext, ToastContext
    components/                Navbar, Sidebar, BottomNav, PostCard, CreatePost,
                               ReactionBar, CommentSection, FriendButton,
                               ConversationList, ChatWindow, GroupInfoPanel,
                               NewGroupModal, UserSearchPicker, ConfirmDialog, ...
    pages/                     Home, Profile, Messenger, Notifications,
                               Search, Hashtag,
                               Settings, PostPage, CreatePostPage
    config/cloudinary.js       Public Cloudinary cloud name + unsigned preset
    utils/                     helpers.js (formatting, hashtags, video-embed
                               parsing), notify.js (notification writer)
    styles/global.css         Theme tokens (light/dark) + full responsive CSS
  database.rules.json         Realtime Database security rules
  firebase.json / .firebaserc  Deploy config
  .env.example                 Firebase web config template
```

---

## 2. Database structure (explained before the "why")

Realtime Database is a JSON tree with **no server-side joins or full-text
search**, and — importantly — a broad list query (e.g. "give me the last 40
posts") is authorized as a whole at the path being queried; it can't mix
"public OR mine OR my-friends-only" in one secure query the way Firestore
could. Every part of the schema below exists to work around that within
RTDB's real constraints, while still having genuine security rules (not just
UI-level hiding).

```
users/{uid}                     fullName, name, nameLower, username,
                                 usernameLower, bio, photoURL, coverURL, createdAt,
                                 followersCount, followingCount,
                                 friendsCount, isPrivate, notifPrefs
privateUsers/{uid}/email        email, readable only by the owner

usernames/{usernameLower}       -> uid   (uniqueness + username lookup index)

posts/{postId}                  uid, authorName, authorPhoto, text, images
                                 (map of index->url), videoUrl, privacy
                                 (public|friends|private), createdAt,
                                 reactionsCount, commentCount, hashtags (map)

userPosts/{uid}/{postId}        true   (index: "all posts by this user",
                                 readable by the owner or their friends only)

publicPostsIndex/{postId}       { uid, createdAt }  (index of ONLY public
                                 posts, readable by any signed-in user - this
                                 is what powers the global home feed and
                                 search, without ever needing a broad,
                                 rule-unsafe read across all posts)

reactions/{postId}/{uid}        { type, createdAt }   (one entry per user =
                                 "one reaction per post" is structurally
                                 enforced, not just app logic)

comments/{postId}/{commentId}   uid, authorName, authorPhoto, text,
                                 parentId (null for top-level, else the
                                 parent comment id = a reply), createdAt

commentReactions/{commentId}/{uid}   { type, createdAt }

friendRequests/{toUid}/{fromUid}     { status:'pending', createdAt }
friends/{uid}/{friendUid}            true   (written on BOTH sides on accept)
followers/{uid}/{followerUid}        true
following/{uid}/{followingUid}       true
blockedUsers/{uid}/{blockedUid}      { createdAt }

conversations/{convId}          type:'private'|'group', members:{uid:true},
                                 name/photoURL (groups only), lastMessage,
                                 lastMessageAt, lastMessageOrder,
                                 lastMessageId, lastMessageSenderUid,
                                 unreadByUid, readAt, ownerId (groups only)
                                 Private chat IDs are the two members' uids,
                                 sorted and joined with "_", so either side
                                 can deterministically find/create the chat.
userConversations/{uid}/{convId}     unreadCount, unreadByUid, readAt,
                                 lastMessage, lastMessageAt,
                                 lastMessageOrder, lastMessageId
messages/{convId}/{msgId}       senderId, senderName, type, text|imageUrl,
                                 createdAt (server milliseconds),
                                 createdAtOrder (numeric ordering key),
                                 seenBy:{uid:true}, replyTo, edited,
                                 deletedForEveryone
messageSendRates/{uid}          lastSentAt, messageId
messageReactions/{convId}/{msgId}/{uid} emoji
hiddenMessages/{uid}/{convId}/{msgId}   true (hide for this user only)
chatReports/{reporterUid}/{id}  conversationId, messageId, targetUid,
                                 reason, createdAt
groupMembers/{convId}/{uid}     { role:'admin'|'member', joinedAt }
                                 NOTE: this project stores group metadata
                                 directly on the conversations/{convId}
                                 record (type:'group') rather than a
                                 separate top-level groups/ node, to avoid a
                                 second read for every group chat. groupMembers
                                 still exists as its own namespace, exactly
                                 as requested, for roles/membership.
typing/{convId}/{uid}           true while typing (cleared after ~2s idle)
presence/{uid}                  { state:'online'|'offline', lastChanged }

notifications/{uid}/{notifId}   type, fromUid, postId?/commentId?/convId?,
                                 createdAt, read
reports/{reportId}              type:'post'|'comment'|'user', targetId,
                                 reporterId, reason, createdAt
hashtags/{tag}/{postId}         true   (index for hashtag pages; tag is
                                 stored lowercase without the "#")
```

### How each feature maps to it
- **Feed** = `publicPostsIndex` (public posts) + `userPosts/{myUid}` (my own,
  any privacy) + `userPosts/{friendUid}` for each friend. Each post is then
  fetched individually from `posts/{id}`, where the *actual* privacy rule
  lives (see `database.rules.json`). A friends-only post a non-friend
  somehow got the ID for will fail to load - the rule enforces it, not the UI.
- **Reactions**: one child under `reactions/{postId}` per user; changing
  reaction = overwrite; removing = delete the child.
- **Friend requests**: writing to `friends/{a}/{b}` (or `{b}/{a}`) requires a
  matching pending `friendRequests` entry to exist first, and only the two
  people involved may write it — see the security section.
- **Messenger**: `conversations` holds membership + metadata,
  `userConversations` holds the *personal* view (unread count) so a badge
  can be shown without scanning every message, `messages` holds the actual
  message log, `typing` and `presence` are ephemeral and cheap to write.
  The legacy Community page uses a live Realtime Database adapter: it listens
  to the latest 30 conversation summaries and up to 100 messages per listed
  conversation. New messages use server timestamps plus a numeric ordering
  key. Read receipts are written by the signed-in reader when a conversation
  is open. Message images are uploaded to Cloudinary before their URLs are
  saved to Realtime Database.

---

## 3. Setup — Firebase console

1. Create a project at https://console.firebase.google.com (stay on the
   **free Spark plan** — nothing in this app requires Blaze/billing).
2. **Authentication** → Sign-in method → enable **Email/Password** and
   **Google**.
3. **Realtime Database** → Create database → start in **locked mode** (we
   deploy our own rules in step 6, so the default rules don't matter) →
   pick a region close to your users.
4. **Project settings → General → Your apps** → add a **Web app** → copy
   the config values into your local `.env` (see below).
5. Deploy the Realtime Database rules in this repo (see Section 5) so real access control is
   in place before anyone uses the app — do **not** ship with the Firebase
   default "everything denied" or a wide-open `.read/.write: true` rule set.

### Cloudinary images

Use the unsigned `codewithsiam_images` upload preset for the `fyelzeqn`
Cloudinary cloud. Configure the desired asset folder in that preset: uploads
send only `file` and `upload_preset`, so Community and Messenger use the same
preset folder. The frontend config is public and contains no API secret.

---

## 4. Local development

Requirements: Node.js 18+ and npm.

```bash
cp .env.example .env
# then fill in .env with the values from Firebase console step 5 above

npm install
npm run dev
```

The app runs at http://localhost:5173. The Firebase web config values in
`.env` are **not secret credentials** (they're public client identifiers) —
real access control comes from `database.rules.json`, which is why those
rules, not the `.env`, must be deployed before launch.
Cloudinary does not require a frontend secret or environment variable.

---

## 5. Deploying rules + hosting

```bash
npm install -g firebase-tools   # once
firebase login
firebase use --add              # pick your project, or edit .firebaserc directly

# Deploy Realtime Database rules:
firebase deploy --only database

# Build and deploy the web app to Firebase Hosting:
npm --prefix community-app run build
firebase deploy --only hosting
```

Run Firebase CLI commands from the repository root. You can also run
`firebase deploy` without `--only` after checking every configured target.

---

## 6. Security checklist

- [x] No `.read: true` / `.write: true` anywhere — every top-level path in
      `database.rules.json` has an explicit, narrower rule.
- [x] A user can only write their own `users/{uid}` profile node.
- [x] Email is stored under `privateUsers/{uid}/email`, readable only by
      the owner — never exposed in the public user-directory reads that
      power search/friend suggestions.
- [x] Only the post author can edit/delete a post's own fields
      (`reactionsCount`/`commentCount` are the one exception — see below).
- [x] Only the comment author can edit/delete their own comment.
- [x] Messages are readable/writable only by members of that conversation
      (`conversations/{id}/members/{auth.uid}` must exist).
- [x] Message creation requires a verified Firebase account, a matching
      per-user send reservation, and a one-message-per-second limit; message
      text and attachment metadata are bounded by RTDB rules.
- [x] Only the sender can edit or unsend a message; recipient read receipts
      and per-user hidden-message state are scoped to that recipient.
- [x] Direct and group message writes check block state; direct-chat creation
      uses a canonical two-member UID mapping, and only group admins can add
      members.
- [x] Message notifications are tied to an existing message from the sender
      in a conversation shared with the recipient.
- [x] Chat reports are append-only and private to their reporter.
- [x] Group role changes (promote/demote/remove) require the actor to
      already be an admin in `groupMembers`, except for the bootstrap case
      of a brand-new group and a member removing themselves (leaving).
- [x] `friends/{a}/{b}` cannot be created out of thin air — the rule
      requires a real pending `friendRequests` entry sent *to* the writer
      from the other party, so a user can't forge their own acceptance.
- [x] `followersCount` / `followingCount` / `friendsCount` can only move by
      exactly ±1 per write (or initialize at 0/1), so a client can't set an
      arbitrary number directly.
- [x] Notifications can only be created by the actual actor
      (`fromUid === auth.uid`) and only marked-read/deleted by the
      recipient.
- [x] Realtime Database chat reads and writes are restricted to conversation
      members; the client stores Cloudinary image URLs, never image binaries.

### Known limitations to be aware of (by design, given the "RTDB
    plus Cloudinary, free-tier, no Cloud Functions" constraint) — please read before
    launching publicly:

1. **Reaction/comment counts are client-maintained counters**, validated
   only to move by ±1 per write, not cryptographically tied to the actual
   number of `reactions`/`comments` children. A malicious client could, in
   theory, desync a count from reality (e.g. call the increment endpoint
   repeatedly). It cannot forge *whose* reaction/comment it is, and the
   worst case is a wrong-looking counter, not unauthorized data access. The
   fully-correct fix is a Cloud Function trigger that recomputes counts
   server-side — that requires the Blaze (pay-as-you-go) plan, which this
   project intentionally avoids.
2. **Cloudinary unsigned uploads are public-client uploads.** The upload
   preset is intentionally not a secret; restrict allowed formats and
   resource size in Cloudinary as well as in the client, and monitor the
   free-plan quota. The browser checks can be bypassed by a custom client.
3. **`reactions`, `comments`, and `hashtags` are readable by any signed-in
   user**, regardless of the parent post's privacy. So the *list of who
   reacted* or *comment text* on a friends-only/private post is technically
   fetchable by any authenticated user who knows the post ID, even though
   the post body itself (text/images/video) is properly locked down by the
   `posts/{id}` rule. This was a deliberate simplification given RTDB's
   lack of joins (fully fixing it means duplicating privacy checks on
   every comment/reaction node). Worth hardening before a public launch if
   private posts are a strong requirement.
4. **Text/hashtag search is client-side scanning**, not a real search
   index (RTDB has none). It only scans up to the last 200 public posts and
   does a substring match. Fine at hobby/small-community scale; a large
   deployment should add a dedicated search service (e.g. Algolia,
   Typesense) fed by the same data.
5. **Chat uploads are not verified server-side.** RTDB rules validate the
   Cloudinary host and image dimensions, but cannot inspect uploaded bytes,
   MIME type, or asset ownership. An unsigned client can bypass browser
   validation; use a trusted upload service or a tightly restricted
   Cloudinary preset before relying on attachment validation.
6. **Group blocks are synchronized by connected clients.** Direct-chat
   sends check both users' block records immediately, but group-block state
   can be stale for conversations that are not synchronized by the
   blocker's client. Group size is also not capped by RTDB rules.
7. **Chat is not end-to-end encrypted.** Firebase/Cloudinary service
   infrastructure can process stored message data and attachments; the UI
   must not imply that only conversation participants can decrypt them.
8. **Chat reports have no moderator workflow.** Reports are visible only to
   their reporter; there is no privileged review API or moderator interface.

---

## 7. Free-tier optimization checklist

- Feed, profile, and hashtag pages fetch **indexes first** (`userPosts`,
  `publicPostsIndex`, `hashtags/{tag}`) and only pull the *specific* post
  documents referenced by those indexes — never a broad scan of `/posts`.
- Reaction/comment/typing/presence writes are tiny JSON nodes, not whole
  document rewrites.
- `presence` uses `onDisconnect()` so you don't need a background job (which
  would need Cloud Functions) to detect users going offline.
- Messenger listens to the latest 30 messages and loads older messages in
  pages instead of loading a full conversation history.
- Cloudinary hosts Community and Messenger images; large non-GIF images are
  resized client-side before upload and delivered with automatic format and
  quality transformations.
- No Cloud Functions or scheduled jobs are required. Firebase Spark covers
  Authentication, Realtime Database, and Hosting within Firebase's
  free-tier limits; Cloudinary has its own free-plan quotas.

---

## 8. What's intentionally NOT implemented (per your requirements)

- No direct video upload — only a URL/link field, with YouTube/Vimeo
  auto-embed and a plain link fallback for anything else.
- Voice/video call buttons exist in the chat header but are disabled and
  show a "Coming soon" tooltip — no WebRTC/calling logic is wired up.
- Community posts and Messenger data are stored in Realtime Database. Image
  binaries are hosted on Cloudinary, not stored in Firebase.
