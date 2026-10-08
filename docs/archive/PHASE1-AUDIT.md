# PHASE 1: COMPLETE COMMUNITY AUDIT
## 2026-09-01

---

## DATABASE STRUCTURE (Firestore Collections)

### ✓ CONFIRMED WORKING
- **communityPosts** - Collection of posts
  - Fields: text, imageUrl, authorId, authorName, avatarUrl, createdAt, likes[], commentCount
  - Public read | Google users can create
  - Subcollection: `communityPosts/{postId}/comments`
  
- **directConversations** - Conversation metadata
  - Fields: participants[], participantNames{}, participantAvatars{}, lastMessage, updatedAt
  - Participants-only read/write
  
- **directMessages/{conversationId}/messages** - Individual messages
  - Fields: senderId, receiverId, text, createdAt, readAt, reactions{}
  - Participants-only read/write
  
- **users/{uid}** - User profiles
  - Fields: name, email, photoURL, bio, username, followers[], following[]
  - Public read | Owner write

---

## COMPONENTS AUDIT

### COMPOSER (Post Creation)
| Element | Status | Works | Notes |
|---------|--------|-------|-------|
| Textarea | ✓ WORKS | YES | Connected to #postText, saves text |
| Image upload | ✓ WORKS | YES | Preview shows, FileReader converts to base64 |
| Post button | ✓ WORKS | YES | Creates doc in communityPosts with serverTimestamp |
| Sign in button | ✓ WORKS | YES | Calls signInWithGoogle() |
| Status message | ✓ WORKS | YES | Shows "Posting..." and success message |

**Identified Issue:** imageUrl saves as base64 in database - should upload to Cloud Storage for performance.

---

### POST FEED (Display)

#### Loading
| Element | Status | Function | Works |
|---------|--------|----------|-------|
| Loading spinner | ✓ WORKS | showLoading() | YES - displays while fetching |
| Post list | ✓ WORKS | loadPosts() → getDocs() → render() | YES - 5 test posts visible |
| Real-time updates | ✓ WORKS | onSnapshot() | YES - updates when new posts added |
| Retry button | ✓ WORKS | showError() + addEventListener | YES - reloads on error |

#### Each Post Card

| Button | Event | Function | Implemented | Works |
|--------|-------|----------|-------------|-------|
| **SUPPORT** | click | handleReaction() | PARTIAL | **NO** - function is stub |
| **COMMENT** | click | handleReaction() | PARTIAL | **NO** - only logs, no UI |
| **MESSAGE** | click | openMessages() | STUB | **NO** - no functionality |
| User name | click | navigate to profile | STUB | **NO** - profileModal empty |
| User avatar | click | navigate to profile | STUB | **NO** - profileModal empty |

---

### SUPPORT BUTTON (Reactions)
**Status: BROKEN** ❌

**Current Code:**
```javascript
const handleReaction = (btn, postId) => {
  console.log('[Community] Reaction clicked:', postId);
  const reaction = btn.dataset.reaction;
  if (reaction === 'comment') {
    const post = postItems.find(p => p.id === postId);
    if (!post) return;
    showComments(post);
  }
};
```

**Problems:**
1. Doesn't handle 'support' reaction - falls through
2. Doesn't update Firestore
3. Doesn't prevent duplicate reactions
4. No visual feedback
5. No persistence after refresh

**Required Implementation:**
- [ ] Load reactions from `post.likes[]` array
- [ ] Save reaction to `communityPosts/{postId}` → `likes: [userId, userId, ...]`
- [ ] Check if current user already reacted
- [ ] Toggle on/off (add/remove from array)
- [ ] Update reaction count display
- [ ] Require auth (show sign-in message if not logged in)
- [ ] Test data persistence after page refresh

---

### COMMENT BUTTON
**Status: BROKEN** ❌

**Current Code:**
```javascript
const showComments = (post) => {
  console.log('[Community] Showing comments for post:', post.id);
  // TODO: Implement comments view
};
```

**Problems:**
1. Function is empty (TODO)
2. No modal or UI for comments
3. Comments not loaded from database
4. No comment creation form
5. No comment deletion
6. Comment count not tracked

**Database Structure Ready:**
```
communityPosts/{postId}/comments/{commentId}
  - text: string
  - authorName: string
  - avatarUrl: string
  - authorUid: string
  - createdAt: timestamp
```

**Required Implementation:**
- [ ] Create comment modal/panel HTML
- [ ] Load comments from `communityPosts/{postId}/comments`
- [ ] Order by createdAt ascending
- [ ] Render with author, avatar, timestamp
- [ ] Add comment form with textarea
- [ ] Validate comment length (max 500 chars)
- [ ] Create comment document with all required fields
- [ ] Show "No comments" when empty
- [ ] Allow delete for comment author only
- [ ] Show loading state while fetching

---

### MESSAGE BUTTON (Direct Messaging)
**Status: BROKEN** ❌

**Current Code:**
```javascript
const openMessages = (target) => {
  if (!currentUser) {
    alert('Sign in to message');
    return;
  }
  console.log('[Community] Opening message with:', target);
  messageTarget = target;
  messageModal.classList.remove('hidden');
  // TODO: Load messages
};
```

**Problems:**
1. Doesn't load message history
2. Message form has no handler
3. Doesn't create conversation if it doesn't exist
4. Can't send messages
5. Can't see previous conversations
6. No online/offline status
7. messageText input has no submit handler

**Database Structure Ready:**
```
directConversations/{conversationId}
  - participants: [uid1, uid2]
  - participantNames: {uid1: name, uid2: name}
  - participantAvatars: {uid1: url, uid2: url}
  - lastMessage: string
  - updatedAt: timestamp

directMessages/{conversationId}/messages/{messageId}
  - senderId: string
  - receiverId: string
  - text: string
  - createdAt: timestamp
  - readAt: timestamp (optional)
  - reactions: {}
```

**Required Implementation:**
- [ ] Generate conversationId: `[uid1, uid2].sort().join('_')`
- [ ] Check if conversation exists
- [ ] Create conversation if first message
- [ ] Load last 50 messages ordered by createdAt
- [ ] Render messages with sender info
- [ ] Add message form submit handler
- [ ] Create message document with senderId, receiverId, text
- [ ] Auto-scroll to latest message
- [ ] Show "User is typing..." indicator
- [ ] Mark messages as read
- [ ] Show online status from `presence/{uid}`
- [ ] Handle delete/edit if sender

---

### PROFILE MODAL
**Status: BROKEN** ❌

**HTML:**
```html
<div id="profileModal" class="community-modal hidden">
  <div class="community-modal-card">
    <button class="modal-close" data-close-modal></button>
    <div id="profileModalBody"></div>
  </div>
</div>
```

**Current Code:**
- Modal opens when clicking user name, but profileBody is never populated
- No profile data loaded
- No profile.html page exists

**Required Implementation:**
- [ ] Create `user-profile.html` page
- [ ] OR load profile data into modal with:
  - Profile picture
  - Display name
  - Username
  - Bio
  - Join date
  - Posts count
  - Followers count
  - Following count
  - Follow/Message buttons (if not own profile)
  - Edit buttons (if own profile)

---

### MESSAGE MODAL
**Status: BROKEN** ❌

**HTML:**
```html
<div id="messageModal" class="community-modal hidden">
  <div class="message-header">
    <span id="messageAvatar"></span>
    <h2 id="messageModalTitle">Personal Chat</h2>
    <small id="messagePresence">Offline</small>
  </div>
  <div id="messageList"></div>
  <form id="messageForm">
    <input id="messageText" placeholder="Type a message" required>
    <button type="submit">Send</button>
  </form>
</div>
```

**Current Code:**
- Modal HTML exists
- `messageForm` has no submit handler
- `messageList` never populated
- `messageText` never sent
- `messagePresence` never updated
- No message history loaded

**Required Implementation:**
- [ ] Handle messageForm submit
- [ ] Send message to Firestore
- [ ] Load message history
- [ ] Display messages in messageList
- [ ] Auto-scroll to latest
- [ ] Update conversation's lastMessage
- [ ] Mark as read when viewed
- [ ] Show online status

---

### INBOX MODAL
**Status: BROKEN** ❌

**HTML:**
```html
<div id="inboxModal" class="community-modal hidden">
  <h2 id="inboxTitle">Personal Chat</h2>
  <div id="inboxList"></div>
</div>
```

**Current Code:**
- HTML exists
- `#openInbox` button doesn't exist in community.html
- No event listener for opening inbox
- `inboxList` never populated

**Required Implementation:**
- [ ] Add "Inbox" or "Messages" button in main UI
- [ ] Load all conversations from `directConversations`
- [ ] Filter by current user's UID in participants
- [ ] Order by updatedAt descending
- [ ] Show avatar, name, last message, timestamp
- [ ] Show unread badge
- [ ] Click to open that conversation

---

### USER PROFILE SYSTEM
**Status: DOESN'T EXIST** ❌

**Required:**
- [ ] Create `user-profile.html`
- [ ] Load user data from `users/{uid}`
- [ ] Display profile header with:
  - Cover photo
  - Profile picture
  - Display name
  - Username
  - Bio
  - Join date
- [ ] Display stats:
  - Posts count
  - Followers count
  - Following count
- [ ] Show user's posts
- [ ] Show Follow button (if not own profile)
- [ ] Show Message button
- [ ] Show Edit buttons (if own profile)

---

### FOLLOW SYSTEM
**Status: DOESN'T EXIST** ❌

**Database Structure:**
```
users/{uid}
  - followers: [uid1, uid2, ...]
  - following: [uid1, uid2, ...]
```

**Required Implementation:**
- [ ] Add Follow button to profiles
- [ ] Load followers/following from user data
- [ ] Add to `followers[]` array when following
- [ ] Add to `following[]` array when following
- [ ] Update count immediately
- [ ] Prevent self-follow
- [ ] Prevent duplicate follows

---

## DUPLICATE/PROBLEMATIC CODE

**Found:**
1. `visitorId` initialized twice (line ~30 and ~35)
2. `handleReaction()` and `handlePostAction()` both attached to buttons but only handleReaction exists and it's incomplete
3. `messageTarget` declared but never used properly
4. `stopMessages` and `stopInbox` declared but never actually set up

---

## CSS FILES ANALYSIS

- `community.css` - Main styles (should check for broken selectors)
- `community-consolidated.css` - Duplicates?
- `community-feed-fixes.css` - Patches?
- `community-overrides.css` - More patches?
- `community-backup.css` - Old version?

**Recommendation:** Consolidate CSS, remove duplicates.

---

## AUTHENTICATION GAPS

**Working:**
- ✓ observeAuthState detects login/logout
- ✓ updateIdentity updates UI

**Missing:**
- ✗ Check if user exists in `users/{uid}` on first login
- ✗ Create user profile on first login
- ✗ Handle missing displayName gracefully
- ✗ Handle missing photoURL gracefully

---

## FIREBASE OPERATIONS MISSING

1. ❌ `updateDoc()` for reactions
2. ❌ `addDoc()` for comments
3. ❌ `addDoc()` for messages
4. ❌ `query()` for loading comments
5. ❌ `query()` for loading messages
6. ❌ `query()` for loading user profiles
7. ❌ `where()` for finding conversations

---

## SUMMARY TABLE: WHAT WORKS vs WHAT'S BROKEN

| Feature | Status | Reason |
|---------|--------|--------|
| Load posts | ✓ WORKS | getDocs implemented |
| Create posts | ✓ WORKS | addDoc implemented |
| Image preview | ✓ WORKS | FileReader implemented |
| Auth integration | ✓ WORKS | observeAuthState implemented |
| Real-time updates | ✓ WORKS | onSnapshot implemented |
| Support reactions | ❌ BROKEN | Function is stub |
| Comments | ❌ BROKEN | TODO placeholder |
| Direct messaging | ❌ BROKEN | No handlers |
| Inbox | ❌ BROKEN | No functionality |
| Profiles | ❌ BROKEN | Page doesn't exist |
| Follow system | ❌ BROKEN | Not implemented |
| Presence tracking | ❌ BROKEN | Not implemented |

---

## NEXT STEPS (Ready for Phase 2)

All Firestore collections and permissions are **already configured** in firestore.rules.
Database schema is **already defined**.

What's needed is the **JavaScript implementation** to:
1. Make support/reaction buttons save to Firestore
2. Make comment system work end-to-end
3. Make messaging work end-to-end
4. Create profile pages and follow system

All operations can use the same pattern:
```javascript
const { collection, addDoc, updateDoc, getDocs, query, where, orderBy, onSnapshot } = 
  await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
```
