# My Community

A social media web app built with **React + Vite** and **Firebase** —
**Authentication, Realtime Database, and Storage only** (no Cloud Firestore,
no Cloud Functions, no paid services required).

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
    firebase/config.js        Firebase app initialization (Auth/RTDB/Storage)
    context/                  AuthContext, ThemeContext, ToastContext
    components/                Navbar, Sidebar, BottomNav, PostCard, CreatePost,
                               ReactionBar, CommentSection, FriendButton,
                               ConversationList, ChatWindow, GroupInfoPanel,
                               NewGroupModal, UserSearchPicker, ConfirmDialog, ...
    pages/                     Login, Signup, ForgotPassword, Home, Profile,
                               Messenger, Notifications, Search, Hashtag,
                               Settings, PostPage, CreatePostPage
    utils/                     helpers.js (formatting, hashtags, video-embed
                               parsing), notify.js (notification writer)
    styles/global.css         Theme tokens (light/dark) + full responsive CSS
  database.rules.json         Realtime Database security rules
  storage.rules                Storage security rules
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
users/{uid}                     fullName, username, usernameLower, bio,
                                 photoURL, coverURL, createdAt,
                                 followersCount, followingCount,
                                 friendsCount, isPrivate, notifPrefs
users/{uid}/private/email       email, readable only by the owner

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
                                 lastMessageAt, ownerId (groups only)
                                 Private chat IDs are the two members' uids,
                                 sorted and joined with "_", so either side
                                 can deterministically find/create the chat.
userConversations/{uid}/{convId}     unreadCount, lastMessageAt   (per-user
                                 view used to render the chat list badge)
messages/{convId}/{msgId}       senderId, text|imageUrl, createdAt,
                                 seenBy:{uid:true}
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

---

## 3. Setup — Firebase console

1. Create a project at https://console.firebase.google.com (stay on the
   **free Spark plan** — nothing in this app requires Blaze/billing).
2. **Authentication** → Sign-in method → enable **Email/Password** and
   **Google**.
3. **Realtime Database** → Create database → start in **locked mode** (we
   deploy our own rules in step 6, so the default rules don't matter) →
   pick a region close to your users.
4. **Storage** → Get started → also start locked (same reason).
5. **Project settings → General → Your apps** → add a **Web app** → copy
   the config values into your local `.env` (see below).
6. Deploy the rules in this repo (see Section 5) so real access control is
   in place before anyone uses the app — do **not** ship with the Firebase
   default "everything denied" or a wide-open `.read/.write: true` rule set.

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
real access control comes entirely from `database.rules.json` and
`storage.rules`, which is why those files, not the `.env`, are what you must
get right and deploy.

---

## 5. Deploying rules + hosting

```bash
npm install -g firebase-tools   # once
firebase login
firebase use --add              # pick your project, or edit .firebaserc directly

# Deploy just the security rules (do this first, and any time you change them):
firebase deploy --only database,storage

# Build and deploy the web app to Firebase Hosting:
npm run build
firebase deploy --only hosting
```

You can also run `firebase deploy` with no `--only` flag to do all three at
once after the first successful `firebase use`.

---

## 6. Security checklist

- [x] No `.read: true` / `.write: true` anywhere — every top-level path in
      `database.rules.json` has an explicit, narrower rule.
- [x] A user can only write their own `users/{uid}` profile node.
- [x] Email is stored under `users/{uid}/private/email`, readable only by
      the owner — never exposed in the public user-directory reads that
      power search/friend suggestions.
- [x] Only the post author can edit/delete a post's own fields
      (`reactionsCount`/`commentCount` are the one exception — see below).
- [x] Only the comment author can edit/delete their own comment.
- [x] Messages are readable/writable only by members of that conversation
      (`conversations/{id}/members/{auth.uid}` must exist).
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
- [x] Storage uploads are size- and content-type-restricted, and
      avatar/cover/post-image paths are scoped to the uploading user's own
      uid segment.

### Known limitations to be aware of (by design, given the "RTDB + Storage
    only, free-tier, no Cloud Functions" constraint) — please read before
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
2. **Storage rules cannot read Realtime Database.** For `chatImages/` and
   `groupPhotos/`, Storage rules can confirm someone is *signed in* but not
   that they're actually a member of that specific conversation/group
   (Storage rules have no way to look at `conversations/{id}/members` in
   RTDB). Practically: a signed-in user who somehow knew or guessed a
   conversation ID could read/write images in that path. Private-chat IDs
   are `sortedUid1_sortedUid2`, so they're guessable if you know both
   users' UIDs (UIDs themselves are not secret, but aren't trivially
   discoverable either). This is a real gap; closing it fully needs either
   Cloud Functions (paid) or a signed-URL upload proxy. For a small/trusted
   community this is a reasonable trade-off; flag it if you're taking this
   to a large public audience.
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

---

## 7. Free-tier optimization checklist

- Feed, profile, and hashtag pages fetch **indexes first** (`userPosts`,
  `publicPostsIndex`, `hashtags/{tag}`) and only pull the *specific* post
  documents referenced by those indexes — never a broad scan of `/posts`.
- Reaction/comment/typing/presence writes are tiny JSON nodes, not whole
  document rewrites.
- `presence` uses `onDisconnect()` so you don't need a background job (which
  would need Cloud Functions) to detect users going offline.
- Chat pagination is capped (`limitToLast(100)`) instead of loading a whole
  conversation's history at once.
- Image uploads are client-resized to browser-default quality only (no
  transformation pipeline); if storage cost/egress becomes a concern later,
  add client-side compression before upload (e.g. `browser-image-compression`)
  — not included here to avoid an unnecessary dependency for an MVP.
- No Cloud Functions, no scheduled jobs, no Firestore — Spark (free) plan
  covers Authentication, Realtime Database, Storage, and Hosting at the
  usage levels a small/medium community would generate.

---

## 8. What's intentionally NOT implemented (per your requirements)

- No direct video upload — only a URL/link field, with YouTube/Vimeo
  auto-embed and a plain link fallback for anything else.
- Voice/video call buttons exist in the chat header but are disabled and
  show a "Coming soon" tooltip — no WebRTC/calling logic is wired up.
- No Cloud Firestore anywhere in the codebase or rules.
