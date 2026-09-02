/* =========================================================
   PERSONAL CHAT / MESSENGER - ENHANCED VERSION
   Complete implementation of messaging system for CodeWithSiam
   ========================================================= */

import { auth, db } from './firebase-init.js';
import { observeAuthState, signInWithGoogle } from './auth.js?v=20260829-auth-fix-1';

// ==================== DOM ELEMENTS ====================
const pageBody = document.body;
const chatLayout = document.querySelector('.personal-chat-layout');
const contacts = document.getElementById('chatContactsList');
const empty = document.getElementById('chatEmpty');
const active = document.getElementById('chatActive');
const chatHeader = active?.querySelector('.chat-window-head');
const chatName = document.getElementById('chatTargetName');
const chatAvatar = document.getElementById('chatTargetAvatar');
const chatPresence = document.getElementById('chatTargetPresence');
const messages = document.getElementById('chatMessages');
const form = document.getElementById('chatForm');
const input = document.getElementById('chatText');
const status = document.getElementById('chatStatus');
const nicknameButton = document.getElementById('editChatNickname');
const sendButton = form?.querySelector('button[type="submit"]');
const userStateDisplay = document.getElementById('chatUserState');

// ==================== STATE ====================
let currentUser = null;
let targetUser = null;
let stopChatListener = null;
let stopPresenceListener = null;
let activeConversationId = '';
let allConversations = [];
let replyTo = null;

// ==================== UTILITIES ====================
function escapeHtml(value) {
  const div = document.createElement('div');
  div.textContent = String(value ?? '');
  return div.innerHTML;
}

function initials(name) {
  return String(name || 'Member')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(p => p[0])
    .join('')
    .toUpperCase();
}

function renderAvatar(element, image, label) {
  if (!element) return;
  element.innerHTML = image ? `<img src="${escapeHtml(image)}" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">` : initials(label);
  const img = element.querySelector('img');
  if (img) {
    img.addEventListener('error', () => {
      element.innerHTML = initials(label);
    });
  }
}

function relativeTime(date) {
  if (!date) return 'unknown';
  const d = date.toDate?.() || new Date(date);
  const ms = Date.now() - d.getTime();
  const secs = Math.floor(ms / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  
  if (secs < 60) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ==================== UI STATES ====================
function showSignIn() {
  if (!contacts) return;
  contacts.innerHTML = `
    <p class="comments-empty">Sign in with Google to use Personal Chat.</p>
    <button id="chatSignInBtn" class="primary" type="button">
      <i class="fa-brands fa-google"></i> Sign in
    </button>
  `;
  
  const btn = document.getElementById('chatSignInBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      signInWithGoogle().catch(err => {
        console.error('Sign-in failed:', err);
        if (userStateDisplay) userStateDisplay.textContent = 'Sign-in failed. Try again.';
      });
    });
  }
  
  if (userStateDisplay) userStateDisplay.textContent = 'Sign in';
}

function showLoading() {
  if (!contacts) return;
  contacts.innerHTML = `<div class="chat-loading"><i class="fa-solid fa-spinner fa-spin"></i><p>Loading chats...</p></div>`;
}

function showEmpty() {
  if (!contacts) return;
  contacts.innerHTML = '<p class="comments-empty">No conversations yet. Start from a community profile.</p>';
}

function showError(msg) {
  if (!contacts) return;
  contacts.innerHTML = `<p class="comments-empty"><i class="fa-solid fa-exclamation-triangle"></i> ${escapeHtml(msg)}</p>`;
}

function showChatEmpty() {
  if (!empty) return;
  empty.classList.remove('hidden');
  if (active) active.classList.add('hidden');
}

function showChatActive() {
  if (!empty) empty.classList.add('hidden');
  if (active) active.classList.remove('hidden');
  setTimeout(() => input?.focus(), 100);
}

function showMessageLoading() {
  if (!messages) return;
  messages.innerHTML = '<p class="comments-empty"><i class="fa-solid fa-spinner fa-spin"></i> Loading messages...</p>';
}

function showMessageError(msg) {
  if (!messages) return;
  messages.innerHTML = `<p class="comments-empty"><i class="fa-solid fa-exclamation-triangle"></i> ${escapeHtml(msg)}</p>`;
}

function showMessageEmpty() {
  if (!messages) return;
  messages.innerHTML = '<p class="comments-empty">Say hello! 👋</p>';
}

// ==================== CONVERSATION MANAGEMENT ====================
async function loadConversations(user) {
  if (!user || !db) {
    showEmpty();
    return;
  }

  try {
    showLoading();
    
    const { collection, query, where, orderBy, onSnapshot } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    const q = query(
      collection(db, 'directConversations'),
      where('participants', 'array-contains', user.uid),
      orderBy('updatedAt', 'desc')
    );

    onSnapshot(q, snapshot => {
      allConversations = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      if (allConversations.length === 0) {
        showEmpty();
        showChatEmpty();
        return;
      }

      renderConversations(user);

      // Auto-open first conversation if none selected
      if (!targetUser && allConversations.length > 0) {
        const first = allConversations[0];
        const otherUid = first.participants.find(uid => uid !== user.uid);
        if (otherUid) {
          openConversation(otherUid, first.participantNames[otherUid] || 'Member', first.participantAvatars[otherUid] || '', first);
        }
      }
    }, error => {
      console.error('[Chat] Load conversations error:', error);
      const msg = error.code === 'permission-denied' 
        ? 'Firestore rules not configured properly. Please check the rules and try again.'
        : error.message || 'Failed to load conversations. Try again.';
      showError(msg);
    });

  } catch (error) {
    console.error('[Chat] Init error:', error);
    showError('Failed to initialize chat. Try refreshing.');
  }
}

function renderConversations(user) {
  if (!contacts) return;

  if (allConversations.length === 0) {
    showEmpty();
    return;
  }

  contacts.innerHTML = allConversations.map(conv => {
    const otherUid = conv.participants.find(uid => uid !== user.uid);
    const name = conv.nicknames?.[otherUid] || conv.participantNames?.[otherUid] || 'Member';
    const lastMsg = conv.lastMessage ? conv.lastMessage.slice(0, 50) + (conv.lastMessage.length > 50 ? '...' : '') : 'Chat started';
    const avatar = conv.participantAvatars?.[otherUid] || '';
    const isActive = targetUser?.uid === otherUid;

    return `
      <button class="chat-contact ${isActive ? 'active' : ''}" type="button" data-uid="${escapeHtml(otherUid)}" data-conv-id="${escapeHtml(conv.id)}">
        <span class="chat-contact-avatar">
          ${avatar ? `<img src="${escapeHtml(avatar)}" alt="" onerror="this.parentElement.textContent = '${initials(name)}'">` : initials(name)}
        </span>
        <span class="chat-contact-copy">
          <strong>${escapeHtml(name)}</strong>
          <span>${escapeHtml(lastMsg)}</span>
        </span>
      </button>
    `;
  }).join('');

  // Event delegation for contact clicks
  contacts.querySelectorAll('.chat-contact').forEach(btn => {
    btn.addEventListener('click', e => {
      const uid = e.currentTarget.dataset.uid;
      const convId = e.currentTarget.dataset.convId;
      const conv = allConversations.find(c => c.id === convId);
      if (conv && uid) {
        const name = conv.nicknames?.[uid] || conv.participantNames?.[uid] || 'Member';
        const avatar = conv.participantAvatars?.[uid] || '';
        openConversation(uid, name, avatar, conv);
      }
    });
  });
}

// ==================== CONVERSATION DISPLAY ====================
async function openConversation(uid, name, avatar, conversation) {
  if (!currentUser || !uid) return;

  targetUser = { uid, name, avatar };
  activeConversationId = [currentUser.uid, uid].sort().join('_');

  // Update UI
  showChatActive();
  if (chatName) chatName.textContent = targetUser.name;
  if (chatAvatar) renderAvatar(chatAvatar, targetUser.avatar, targetUser.name);
  if (chatPresence) chatPresence.textContent = 'Offline';

  // Update active state
  if (contacts) {
    contacts.querySelectorAll('.chat-contact').forEach(c => c.classList.remove('active'));
    contacts.querySelector(`[data-uid="${uid}"]`)?.classList.add('active');
  }

  // Load and listen to messages
  loadMessages(uid);

  // Listen to presence
  updatePresence(uid);

  // Ensure conversation exists in Firestore
  try {
    const { doc, setDoc, serverTimestamp } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    await setDoc(doc(db, 'directConversations', activeConversationId), {
      participants: [currentUser.uid, uid],
      participantNames: {
        [currentUser.uid]: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member',
        [uid]: targetUser.name
      },
      participantAvatars: {
        [currentUser.uid]: currentUser.photoURL || '',
        [uid]: targetUser.avatar
      },
      lastMessage: conversation?.lastMessage || 'Conversation started',
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error('[Chat] Could not create conversation:', error);
  }
}

async function loadMessages(otherUid) {
  if (!messages) return;

  showMessageLoading();

  try {
    const { collection, query, orderBy, limit, onSnapshot, getDocs } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    const q = query(
      collection(db, 'directMessages', activeConversationId, 'messages'),
      orderBy('createdAt', 'asc'),
      limit(100)
    );

    // Set up real-time listener
    if (stopChatListener) stopChatListener();
    
    stopChatListener = onSnapshot(q, snapshot => {
      const messageList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      renderMessages(messageList);
    }, error => {
      console.error('[Chat] Message listener error:', error);
      showMessageError(error.code === 'permission-denied' ? 'No permission to view messages' : 'Failed to load messages');
    });

  } catch (error) {
    console.error('[Chat] Load messages error:', error);
    showMessageError('Failed to load messages');
  }
}

function renderMessages(messageList) {
  if (!messages) return;

  if (messageList.length === 0) {
    showMessageEmpty();
    return;
  }

  messages.innerHTML = messageList.map(msg => {
    const isOwn = msg.senderId === currentUser.uid;
    const time = msg.createdAt?.toDate?.() || new Date(msg.createdAt);
    const timeStr = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    
    const replyLabel = msg.parentText ? `<small class="message-reply-label">Replying to: ${escapeHtml(msg.parentText.slice(0, 60))}</small>` : '';

    return `
      <article class="private-message ${isOwn ? 'mine' : ''}" data-message-id="${escapeHtml(msg.id)}">
        ${replyLabel}
        <p>${escapeHtml(msg.text || '')}</p>
        ${msg.editedAt ? '<small class="message-edited">(edited)</small>' : ''}
        <time style="font-size: 0.65rem; opacity: 0.7; display: block; margin-top: 4px;">${timeStr}</time>
        <div class="private-message-actions">
          <button type="button" data-action="reaction" aria-label="React"><i class="fa-regular fa-heart"></i></button>
          <button type="button" data-action="reply">Reply</button>
          ${isOwn ? `
            <button type="button" data-action="edit">Edit</button>
            <button type="button" data-action="delete">Delete</button>
          ` : ''}
        </div>
      </article>
    `;
  }).join('');

  // Auto-scroll
  messages.scrollTop = messages.scrollHeight;

  // Attach message action handlers
  messages.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', e => handleMessageAction(e));
  });
}

async function handleMessageAction(event) {
  const btn = event.target.closest('[data-action]');
  const messageEl = btn?.closest('[data-message-id]');
  if (!btn || !messageEl) return;

  const action = btn.dataset.action;
  const messageId = messageEl.dataset.messageId;

  try {
    const { doc, getDoc, updateDoc, deleteDoc, serverTimestamp } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    const msgRef = doc(db, 'directMessages', activeConversationId, 'messages', messageId);
    const msgSnap = await getDoc(msgRef);
    const message = msgSnap.data();

    if (!message) return;

    if (action === 'reaction') {
      const reactions = { ...(message.reactions || {}) };
      if (reactions[currentUser.uid]) {
        delete reactions[currentUser.uid];
      } else {
        reactions[currentUser.uid] = 'heart';
      }
      await updateDoc(msgRef, { reactions });
    } else if (action === 'reply') {
      replyTo = { id: messageId, text: message.text };
      input.placeholder = `Reply to: ${(message.text || '').slice(0, 40)}...`;
      if (status) status.textContent = 'Replying. Press Escape to cancel.';
      input.focus();
    } else if (action === 'edit' && message.senderId === currentUser.uid) {
      const newText = prompt('Edit message:', message.text || '');
      if (newText?.trim()) {
        await updateDoc(msgRef, { text: newText.trim().slice(0, 1000), editedAt: serverTimestamp() });
      }
    } else if (action === 'delete' && message.senderId === currentUser.uid) {
      if (confirm('Delete this message?')) {
        await deleteDoc(msgRef);
      }
    }
  } catch (error) {
    console.error('[Chat] Message action error:', error);
    if (status) status.textContent = 'Action failed. Try again.';
  }
}

async function updatePresence(otherUid) {
  try {
    const { doc, onSnapshot } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    if (stopPresenceListener) stopPresenceListener();

    stopPresenceListener = onSnapshot(doc(db, 'presence', otherUid), snapshot => {
      if (!snapshot.exists()) {
        if (chatPresence) chatPresence.textContent = 'Offline';
        return;
      }

      const data = snapshot.data();
      const lastSeen = data?.lastSeen?.toDate?.();
      const online = data?.online === true && lastSeen && Date.now() - lastSeen.getTime() < 120000;

      if (online && data?.typing) {
        if (chatPresence) chatPresence.textContent = 'Typing...';
      } else if (online) {
        if (chatPresence) chatPresence.textContent = 'Online';
      } else if (lastSeen) {
        const timeStr = lastSeen.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        if (chatPresence) chatPresence.textContent = `Last seen at ${timeStr}`;
      } else {
        if (chatPresence) chatPresence.textContent = 'Offline';
      }
    }, () => {
      if (chatPresence) chatPresence.textContent = 'Offline';
    });
  } catch (error) {
    console.error('[Chat] Presence error:', error);
  }
}

// ==================== FORM HANDLING ====================
if (form && input && status) {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!currentUser || !targetUser) return;

    const text = input.value.trim();
    if (!text) return;

    if (sendButton) sendButton.disabled = true;
    if (status) status.textContent = 'Sending...';

    try {
      const { collection, addDoc, doc, setDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
      );

      // Ensure conversation exists
      const convRef = doc(db, 'directConversations', activeConversationId);
      await setDoc(convRef, {
        participants: [currentUser.uid, targetUser.uid],
        participantNames: {
          [currentUser.uid]: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member',
          [targetUser.uid]: targetUser.name
        },
        participantAvatars: {
          [currentUser.uid]: currentUser.photoURL || '',
          [targetUser.uid]: targetUser.avatar
        },
        lastMessage: text.slice(0, 100),
        updatedAt: serverTimestamp()
      }, { merge: true });

      // Add message
      await addDoc(collection(db, 'directMessages', activeConversationId, 'messages'), {
        senderId: currentUser.uid,
        receiverId: targetUser.uid,
        text: text.slice(0, 1000),
        parentId: replyTo?.id || '',
        parentText: replyTo?.text || '',
        reactions: {},
        createdAt: serverTimestamp()
      });

      input.value = '';
      replyTo = null;
      input.placeholder = 'Type a message';
      if (status) status.textContent = '';
    } catch (error) {
      console.error('[Chat] Send message error:', error);
      if (status) {
        const msg = error.code === 'permission-denied' 
          ? 'No permission to send messages. Check Firestore rules.'
          : 'Failed to send message. Try again.';
        status.textContent = msg;
      }
    } finally {
      if (sendButton) sendButton.disabled = false;
    }
  });

  // Handle Escape key
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape' && replyTo) {
      replyTo = null;
      input.placeholder = 'Type a message';
      if (status) status.textContent = '';
    }
  });
}

// ==================== NICKNAME HANDLING ====================
if (nicknameButton) {
  nicknameButton.addEventListener('click', async () => {
    if (!currentUser || !targetUser || !activeConversationId) return;

    const newNickname = prompt('Set nickname for this person:', targetUser.name);
    if (newNickname === null) return;

    const nickname = newNickname.trim().slice(0, 40) || targetUser.name;

    try {
      const { doc, updateDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
      );

      await updateDoc(doc(db, 'directConversations', activeConversationId), {
        nicknames: {
          [targetUser.uid]: nickname
        },
        updatedAt: serverTimestamp()
      });

      targetUser.name = nickname;
      if (chatName) chatName.textContent = nickname;
      if (status) status.textContent = 'Nickname updated';
    } catch (error) {
      console.error('[Chat] Nickname error:', error);
      if (status) status.textContent = 'Failed to update nickname';
    }
  });
}

// ==================== INITIALIZATION ====================
observeAuthState(user => {
  currentUser = user;

  if (!user) {
    showSignIn();
    showChatEmpty();
    if (userStateDisplay) userStateDisplay.textContent = 'Sign in';
    return;
  }

  if (userStateDisplay) userStateDisplay.textContent = user.displayName || user.email?.split('@')[0] || 'Signed in';
  loadConversations(user);
});

// Handle modal close
document.querySelector('[data-close-modal]')?.addEventListener('click', () => {
  if (stopChatListener) stopChatListener();
  if (stopPresenceListener) stopPresenceListener();
});

console.log('[PersonalChat] Module loaded successfully');
