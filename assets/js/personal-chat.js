import { auth, db } from './firebase-init.js';
import { observeAuthState, signInWithGoogle } from './auth.js';

const contacts = document.getElementById('chatContactsList');
const empty = document.getElementById('chatEmpty');
const active = document.getElementById('chatActive');
const name = document.getElementById('chatTargetName');
const avatar = document.getElementById('chatTargetAvatar');
const presence = document.getElementById('chatTargetPresence');
const messages = document.getElementById('chatMessages');
const form = document.getElementById('chatForm');
const input = document.getElementById('chatText');
const status = document.getElementById('chatStatus');
let user = null;
let target = null;
let stopChat = null;
let stopPresence = null;

function escapeHtml(value) { const node = document.createElement('div'); node.textContent = String(value ?? ''); return node.innerHTML; }
function initials(value) { return String(value || 'Member').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase(); }
function renderAvatar(element, image, label) { element.innerHTML = image ? `<img src="${escapeHtml(image)}" alt="">` : initials(label); }
function showSignIn() { contacts.innerHTML = '<p class="comments-empty">Sign in with Google to use Personal Chat.</p><button id="chatSignIn" class="primary" type="button"><i class="fa-brands fa-google"></i> Sign in</button>'; document.getElementById('chatSignIn').addEventListener('click', () => signInWithGoogle().catch(() => { document.getElementById('chatUserState').textContent = 'Sign-in failed'; })); document.getElementById('chatUserState').textContent = 'Sign in'; }
function showConversation(nextTarget, firestore) {
  if (!user || !nextTarget?.uid) return;
  target = nextTarget;
  empty.classList.add('hidden');
  active.classList.remove('hidden');
  name.textContent = target.name;
  renderAvatar(avatar, target.avatar, target.name);
  const conversationId = [user.uid, target.uid].sort().join('_');
  if (stopPresence) stopPresence();
  stopPresence = firestore.onSnapshot(firestore.doc(db, 'presence', target.uid), snapshot => {
    const data = snapshot.data();
    const seen = data?.lastSeen?.toDate?.();
    const online = data?.online === true && seen && Date.now() - seen.getTime() < 120000;
    presence.textContent = online ? 'Online' : seen ? `Last seen ${seen.toLocaleTimeString('en-BD', { hour: 'numeric', minute: '2-digit' })}` : 'Offline';
    presence.className = online ? 'online' : 'offline';
  });
  if (stopChat) stopChat();
  stopChat = firestore.onSnapshot(firestore.query(firestore.collection(db, 'directMessages', conversationId, 'messages'), firestore.orderBy('createdAt', 'asc'), firestore.limit(100)), snapshot => {
    const unread = snapshot.docs.filter(item => item.data().receiverId === user.uid && !item.data().readAt);
    unread.forEach(item => firestore.updateDoc(item.ref, { readAt: firestore.serverTimestamp() }).catch(() => {}));
    messages.innerHTML = snapshot.docs.length ? snapshot.docs.map(item => { const message = item.data(); const mine = message.senderId === user.uid; return `<div class="private-message ${mine ? 'mine' : ''}">${escapeHtml(message.text)}${mine ? `<small class="message-ticks ${message.readAt ? 'seen' : ''}">${message.readAt ? '&#10003;&#10003;' : '&#10003;'}</small>` : ''}</div>`; }).join('') : '<p class="comments-empty">No messages yet.</p>';
    messages.scrollTop = messages.scrollHeight;
  }, error => { status.textContent = error?.code === 'permission-denied' ? 'Publish the latest Firestore rules.' : 'Messages could not be loaded.'; });
}

async function init(current) {
  user = current;
  if (!user) { showSignIn(); return; }
  document.getElementById('chatUserState').textContent = user.displayName || 'Signed in';
  const firestore = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  const query = firestore.query(firestore.collection(db, 'directConversations'), firestore.where('participants', 'array-contains', user.uid));
  firestore.onSnapshot(query, snapshot => {
    const items = snapshot.docs.map(item => item.data()).sort((a, b) => (b.updatedAt?.toMillis?.() || 0) - (a.updatedAt?.toMillis?.() || 0));
    contacts.innerHTML = items.length ? items.map(item => { const uid = item.participants.find(value => value !== user.uid); return `<button class="chat-contact" type="button" data-uid="${escapeHtml(uid)}" data-name="${escapeHtml(item.participantNames?.[uid] || 'Member')}" data-avatar="${escapeHtml(item.participantAvatars?.[uid] || '')}"><span class="chat-contact-avatar">${item.participantAvatars?.[uid] ? `<img src="${escapeHtml(item.participantAvatars[uid])}" alt="">` : initials(item.participantNames?.[uid])}</span><span class="chat-contact-copy"><strong>${escapeHtml(item.participantNames?.[uid] || 'Member')}</strong><span>${escapeHtml(item.lastMessage || 'Open chat')}</span></span></button>`; }).join('') : '<p class="comments-empty">No conversations yet. Start from a community profile.</p>';
  }, error => { contacts.innerHTML = `<p class="comments-empty">${error?.code === 'permission-denied' ? 'Publish the latest Firestore rules to load chats.' : 'Chats could not be loaded. Refresh and try again.'}</p>`; });
  contacts.onclick = event => { const item = event.target.closest('[data-uid]'); if (item) showConversation({ uid: item.dataset.uid, name: item.dataset.name, avatar: item.dataset.avatar }, firestore); };
  form.onsubmit = async event => { event.preventDefault(); const value = input.value.trim(); if (!value || !target) return; const conversationId = [user.uid, target.uid].sort().join('_'); status.textContent = 'Sending...'; try { await firestore.setDoc(firestore.doc(db, 'directConversations', conversationId), { participants: [user.uid, target.uid], participantNames: { [user.uid]: user.displayName || 'Member', [target.uid]: target.name }, participantAvatars: { [user.uid]: user.photoURL || '', [target.uid]: target.avatar || '' }, lastMessage: value.slice(0, 1000), updatedAt: firestore.serverTimestamp() }, { merge: true }); await firestore.addDoc(firestore.collection(db, 'directMessages', conversationId, 'messages'), { senderId: user.uid, receiverId: target.uid, text: value.slice(0, 1000), createdAt: firestore.serverTimestamp() }); input.value = ''; status.textContent = ''; } catch (error) { status.textContent = error?.code === 'permission-denied' ? 'Publish the latest Firestore rules before sending.' : 'Message failed. Try again.'; } };
}

document.querySelector('[data-close-modal]')?.addEventListener('click', () => { if (stopChat) stopChat(); if (stopPresence) stopPresence(); });
observeAuthState(current => init(current).catch(() => { status.textContent = 'Personal Chat is unavailable.'; }));
