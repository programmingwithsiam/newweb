import { auth, db } from './firebase-init.js';
import { observeAuthState } from './auth.js?v=20260829-auth-fix-1';

const page = location.pathname.split('/').pop();
const isCommunity = page === 'community.html' || page === 'community' || page === '';
const isChat = page === 'personal-chat.html' || page === 'personal-chat';
let currentUser = null;
let firestore = null;
const visitorId = `visitor_${localStorage.getItem('community-visitor-id') || crypto.randomUUID?.() || `${Date.now()}_${Math.random().toString(36).slice(2)}`}`;

function escapeHtml(value) {
  const node = document.createElement('div');
  node.textContent = String(value ?? '');
  return node.innerHTML;
}

function initials(value) {
  return String(value || 'Member').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase();
}

function timeLabel(value) {
  const date = value?.toDate?.() || new Date(value || 0);
  return Number.isNaN(date.getTime()) ? 'Just now' : date.toLocaleTimeString('en-BD', { hour: 'numeric', minute: '2-digit' });
}

async function loadFirestore() {
  if (!firestore) firestore = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  return firestore;
}

async function createNotification(uid, type, message, targetId) {
  if (!currentUser || !uid || uid === currentUser.uid) return;
  const { addDoc, collection, serverTimestamp } = await loadFirestore();
  await addDoc(collection(db, 'notifications', uid, 'items'), {
    actorUid: currentUser.uid,
    actorName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member',
    actorAvatar: currentUser.photoURL || '',
    type,
    message,
    targetId,
    createdAt: serverTimestamp(),
  }).catch(() => {});
}

function addNotificationButton() {
  const heading = document.querySelector('.community-heading');
  if (!heading || document.getElementById('notificationButton')) return;
  const button = document.createElement('button');
  button.id = 'notificationButton';
  button.className = 'notification-button';
  button.type = 'button';
  button.setAttribute('aria-label', 'Open notifications');
  button.innerHTML = '<i class="fa-regular fa-bell"></i><span class="notification-count hidden">0</span>';
  heading.appendChild(button);
  const panel = document.createElement('div');
  panel.id = 'notificationPanel';
  panel.className = 'notification-panel hidden';
  panel.innerHTML = '<strong>Notifications</strong><div class="notification-list"><p class="comments-empty">Sign in to view notifications.</p></div>';
  heading.appendChild(panel);
  button.addEventListener('click', () => panel.classList.toggle('hidden'));
}

function watchNotifications() {
  addNotificationButton();
  if (!currentUser) return;
  const panel = document.getElementById('notificationPanel');
  const list = panel?.querySelector('.notification-list');
  const badge = document.querySelector('.notification-count');
  if (!panel || !list || !badge) return;
  loadFirestore().then(({ collection, limit, onSnapshot, orderBy, query }) => {
    const notifications = query(collection(db, 'notifications', currentUser.uid, 'items'), orderBy('createdAt', 'desc'), limit(25));
    onSnapshot(notifications, snapshot => {
      const unread = snapshot.docs.filter(item => !item.data().readAt).length;
      badge.textContent = String(unread);
      badge.classList.toggle('hidden', unread === 0);
      list.innerHTML = snapshot.docs.length ? snapshot.docs.map(item => {
        const notification = item.data();
        return `<button class="notification-item ${notification.readAt ? '' : 'unread'}" type="button" data-notification-id="${escapeHtml(item.id)}"><span class="notification-avatar">${notification.actorAvatar ? `<img src="${escapeHtml(notification.actorAvatar)}" alt="">` : initials(notification.actorName)}</span><span><strong>${escapeHtml(notification.actorName || 'Member')}</strong> ${escapeHtml(notification.message || '')}<small>${timeLabel(notification.createdAt)}</small></span></button>`;
      }).join('') : '<p class="comments-empty">No notifications yet.</p>';
      list.querySelectorAll('[data-notification-id]').forEach(item => item.addEventListener('click', async () => {
        const { doc, serverTimestamp, updateDoc } = await loadFirestore();
        await updateDoc(doc(db, 'notifications', currentUser.uid, 'items', item.dataset.notificationId), { readAt: serverTimestamp() }).catch(() => {});
      }));
    });
  });
}

function setupCommunityEvents() {
  const feed = document.getElementById('postFeed');
  if (!feed) return;
  if (feed.dataset.socialEnhancementsBound === 'true') return;
  feed.dataset.socialEnhancementsBound = 'true';
  feed.addEventListener('click', event => {
    const tool = event.target.closest('.comment-tools button');
    if (tool) {
      const form = tool.closest('.comment-form');
      const input = form?.querySelector('input[name="comment"]');
      if (tool.getAttribute('aria-label') === 'Add emoji' && input) {
        input.value += ' 🙂';
        input.focus();
      } else if (tool.getAttribute('aria-label') === 'Add image' || tool.textContent.trim() === 'GIF') {
        document.getElementById('postStatus').textContent = 'Comment attachments are not enabled in the free Firestore setup.';
      }
      return;
    }
    const reply = event.target.closest('[data-comment-action="reply"]');
    const row = reply?.closest('[data-comment-id]');
    const form = reply?.closest('[data-post-id]')?.querySelector('.comment-form');
    if (!row || !form) return;
    form.dataset.parentId = row.dataset.commentId || '';
    form.dataset.parentName = row.querySelector('strong')?.textContent || 'this comment';
  });
  feed.addEventListener('submit', async event => {
    const form = event.target.closest('.comment-form');
    if (!form) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const card = form.closest('[data-post-id]');
    const value = form.comment?.value.trim();
    if (!value || !card) return;
    const { addDoc, collection, serverTimestamp } = await loadFirestore();
    const author = card.querySelector('[data-profile-uid]')?.dataset.profileUid;
    await createNotification(author, 'comment', 'commented on your post.', card.dataset.postId || '');
    await addDoc(collection(db, 'communityPosts', card.dataset.postId, 'comments'), {
      text: value.slice(0, 500),
      authorName: currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Visitor',
      avatarUrl: currentUser?.photoURL || '',
      authorUid: currentUser?.uid || visitorId,
      parentId: form.dataset.parentId || '',
      parentName: form.dataset.parentName || '',
      createdAt: serverTimestamp(),
    }).then(() => {
      form.reset();
      delete form.dataset.parentId;
      delete form.dataset.parentName;
      document.getElementById('postStatus').textContent = 'Comment added.';
    }).catch(() => { document.getElementById('postStatus').textContent = 'Comment failed. Try again.'; });
  }, true);
  feed.addEventListener('click', async event => {
    const reaction = event.target.closest('[data-reaction]');
    if (reaction && currentUser) {
      const card = reaction.closest('[data-post-id]');
      const author = card?.querySelector('[data-profile-uid]')?.dataset.profileUid;
      await createNotification(author, 'reaction', 'reacted to your post.', card?.dataset.postId || '');
    }
  });
  feed.addEventListener('submit', async event => {
    if (!event.target.closest('.comment-form') || !currentUser) return;
    const card = event.target.closest('[data-post-id]');
    const author = card?.querySelector('[data-profile-uid]')?.dataset.profileUid;
    await createNotification(author, 'comment', 'commented on your post.', card?.dataset.postId || '');
  });
}

function setupChatEnhancements() {
  const input = document.getElementById('chatText');
  const emojiButton = document.querySelector('.message-emoji');
  if (!input) return;
  if (input.dataset.socialEnhancementsBound === 'true') return;
  input.dataset.socialEnhancementsBound = 'true';
  emojiButton?.addEventListener('click', () => { input.value += ' 🙂'; input.focus(); input.dispatchEvent(new Event('input', { bubbles: true })); });
  document.querySelectorAll('.chat-header-actions button, .message-attach, .message-mic').forEach(button => {
    if (button.dataset.socialEnhancementsBound === 'true') return;
    button.dataset.socialEnhancementsBound = 'true';
    button.addEventListener('click', () => {
      const label = button.getAttribute('aria-label') || 'This action';
      document.getElementById('chatStatus').textContent = label.includes('Search') ? 'Use message search to find text in this conversation.' : `${label} is not enabled in the free setup.`;
    });
  });
  const searchButton = document.querySelector('[title="Search messages"]');
  searchButton?.addEventListener('click', () => {
    const term = prompt('Search messages:')?.trim().toLowerCase();
    if (term === undefined || term === null) return;
    document.querySelectorAll('#chatMessages .private-message').forEach(message => { message.hidden = Boolean(term) && !message.textContent.toLowerCase().includes(term); });
  });
  let timer;
  input.addEventListener('input', () => {
    if (!currentUser) return;
    clearTimeout(timer);
    loadFirestore().then(({ doc, serverTimestamp, setDoc }) => setDoc(doc(db, 'presence', currentUser.uid), { online: true, lastSeen: serverTimestamp(), typing: true }, { merge: true })).catch(() => {});
    timer = setTimeout(() => loadFirestore().then(({ doc, serverTimestamp, setDoc }) => setDoc(doc(db, 'presence', currentUser.uid), { online: true, lastSeen: serverTimestamp(), typing: false }, { merge: true })).catch(() => {}), 900);
  });
}

observeAuthState(user => {
  currentUser = user;
  if (isCommunity) { watchNotifications(); }
  if (isChat) setupChatEnhancements();
});
if (isCommunity) { addNotificationButton(); setupCommunityEvents(); }
if (isChat) setupChatEnhancements();
