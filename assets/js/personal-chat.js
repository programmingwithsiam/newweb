import { auth, db } from './firebase-init.js';
import { observeAuthState, signInWithGoogle } from './auth.js?v=20260829-auth-fix-1';

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
const nicknameButton = document.getElementById('editChatNickname');
const sendButton = form.querySelector('button[type="submit"]');
let user = null;
let target = null;
let stopChat = null;
let stopPresence = null;
let activeConversationId = '';
let replyTo = null;

function escapeHtml(value) { const node = document.createElement('div'); node.textContent = String(value ?? ''); return node.innerHTML; }
function initials(value) { return String(value || 'Member').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase(); }
function renderAvatar(element, image, label) { element.innerHTML = image ? `<img src="${escapeHtml(image)}" alt="">` : initials(label); const imageElement = element.querySelector('img'); imageElement?.addEventListener('error', () => { element.textContent = initials(label); }); }
function showSignIn() { contacts.innerHTML = '<p class="comments-empty">Sign in with Google to use Personal Chat.</p><button id="chatSignIn" class="primary" type="button"><i class="fa-brands fa-google"></i> Sign in</button>'; document.getElementById('chatSignIn').addEventListener('click', () => signInWithGoogle().catch(() => { document.getElementById('chatUserState').textContent = 'Sign-in failed'; })); document.getElementById('chatUserState').textContent = 'Sign in'; }
async function showConversation(nextTarget, firestore) {
  if (!user || !nextTarget?.uid) return;
  target = nextTarget;
  empty.classList.add('hidden');
  active.classList.remove('hidden');
  name.textContent = target.name;
  renderAvatar(avatar, target.avatar, target.name);
  const conversationId = [user.uid, target.uid].sort().join('_');
  activeConversationId = conversationId;
  await firestore.setDoc(firestore.doc(db, 'directConversations', conversationId), { participants: [user.uid, target.uid], participantNames: { [user.uid]: user.displayName || 'Member', [target.uid]: target.name }, participantAvatars: { [user.uid]: user.photoURL || '', [target.uid]: target.avatar || '' }, nicknames: {}, lastMessage: 'Conversation started', updatedAt: firestore.serverTimestamp() }, { merge: true }).catch(error => { status.textContent = error?.code === 'permission-denied' ? 'You are not allowed to open this chat.' : 'Chat could not be opened.'; });
  const conversation = await firestore.getDoc(firestore.doc(db, 'directConversations', conversationId)).catch(() => null);
  target.nickname = conversation?.data()?.nicknames?.[target.uid] || target.nickname || '';
  name.textContent = target.nickname || target.name;
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
    messages.innerHTML = snapshot.docs.length ? snapshot.docs.map(item => { const message = item.data(); const mine = message.senderId === user.uid; const reactions = message.reactions || {}; const reactionCount = Object.keys(reactions).length; const replyLabel = message.parentText ? `<small class="message-reply-label">Replying to: ${escapeHtml(message.parentText.slice(0, 70))}</small>` : ''; return `<article class="private-message ${mine ? 'mine' : ''}" data-message-id="${escapeHtml(item.id)}">${replyLabel}<p>${escapeHtml(message.text || '')}${message.editedAt ? ' <small class="message-edited">edited</small>' : ''}</p><div class="private-message-actions"><button type="button" data-message-action="reaction" aria-label="React to message"><i class="fa-regular fa-heart"></i>${reactionCount ? ` ${reactionCount}` : ''}</button><button type="button" data-message-action="reply">Reply</button>${mine ? `<button type="button" data-message-action="edit">Edit</button><button type="button" data-message-action="delete">Delete</button>` : ''}${mine ? `<small class="message-ticks ${message.readAt ? 'seen' : ''}">${message.readAt ? '&#10003;&#10003;' : '&#10003;'}</small>` : ''}</div></article>`; }).join('') : '<p class="comments-empty">No messages yet.</p>';
    messages.scrollTop = messages.scrollHeight;
  }, error => { status.textContent = error?.code === 'permission-denied' ? 'Publish the latest Firestore rules.' : 'Messages could not be loaded.'; });
  messages.onclick = async event => {
    const button = event.target.closest('[data-message-action]');
    const row = button?.closest('[data-message-id]');
    if (!button || !row) return;
    const messageRef = firestore.doc(db, 'directMessages', conversationId, 'messages', row.dataset.messageId);
    const messageSnapshot = await firestore.getDoc(messageRef);
    const message = messageSnapshot.data();
    if (!message) return;
    try {
      if (button.dataset.messageAction === 'reaction') {
        const reactions = { ...(message.reactions || {}) };
        if (reactions[user.uid]) delete reactions[user.uid]; else reactions[user.uid] = 'heart';
        await firestore.updateDoc(messageRef, { reactions });
      } else if (button.dataset.messageAction === 'reply') {
        replyTo = { id: row.dataset.messageId, text: message.text || '' };
        input.placeholder = `Reply to: ${(message.text || '').slice(0, 45)}`;
        input.focus();
        status.textContent = 'Replying to this message. Press Escape to cancel.';
      } else if (button.dataset.messageAction === 'edit' && message.senderId === user.uid) {
        const value = prompt('Edit message:', message.text || '');
        if (value?.trim()) await firestore.updateDoc(messageRef, { text: value.trim().slice(0, 1000), editedAt: firestore.serverTimestamp() });
      } else if (button.dataset.messageAction === 'delete' && message.senderId === user.uid && confirm('Delete this message?')) {
        await firestore.deleteDoc(messageRef);
      }
    } catch { status.textContent = 'Message action failed. Try again.'; }
  };
  input.addEventListener('keydown', event => { if (event.key === 'Escape' && replyTo) { replyTo = null; input.placeholder = 'Type a message'; status.textContent = ''; } });
}

async function init(current) {
  user = current;
  if (!user) { showSignIn(); return; }
  document.getElementById('chatUserState').textContent = user.displayName || 'Signed in';
  const firestore = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  const query = firestore.query(firestore.collection(db, 'directConversations'), firestore.where('participants', 'array-contains', user.uid));
  firestore.onSnapshot(query, snapshot => {
    const items = snapshot.docs.map(item => item.data()).sort((a, b) => (b.updatedAt?.toMillis?.() || 0) - (a.updatedAt?.toMillis?.() || 0));
    contacts.innerHTML = items.length ? items.map(item => { const uid = item.participants.find(value => value !== user.uid); const contactName = item.nicknames?.[uid] || item.participantNames?.[uid] || 'Member'; return `<button class="chat-contact ${target?.uid === uid ? 'active' : ''}" type="button" data-uid="${escapeHtml(uid)}" data-name="${escapeHtml(item.participantNames?.[uid] || 'Member')}" data-nickname="${escapeHtml(item.nicknames?.[uid] || '')}" data-avatar="${escapeHtml(item.participantAvatars?.[uid] || '')}"><span class="chat-contact-avatar">${item.participantAvatars?.[uid] ? `<img src="${escapeHtml(item.participantAvatars[uid])}" alt="">` : initials(contactName)}</span><span class="chat-contact-copy"><strong>${escapeHtml(contactName)}</strong><span>${escapeHtml(item.lastMessage || 'Open chat')}</span></span></button>`; }).join('') : '<p class="comments-empty">No conversations yet. Start from a community profile.</p>'; contacts.querySelectorAll('img').forEach(image => image.addEventListener('error', () => { const contact = image.closest('.chat-contact'); image.parentElement.textContent = initials(contact?.dataset.name || 'Member'); })); if (!target && items.length) { const first = items[0]; const uid = first.participants.find(value => value !== user.uid); showConversation({ uid, name: first.participantNames?.[uid] || 'Member', nickname: first.nicknames?.[uid] || '', avatar: first.participantAvatars?.[uid] || '' }, firestore); }
  }, error => { contacts.innerHTML = `<p class="comments-empty">${error?.code === 'permission-denied' ? 'Publish the latest Firestore rules to load chats.' : 'Chats could not be loaded. Refresh and try again.'}</p>`; });
  contacts.onclick = event => { const item = event.target.closest('[data-uid]'); if (!item) return; contacts.querySelectorAll('.chat-contact').forEach(contact => contact.classList.remove('active')); item.classList.add('active'); showConversation({ uid: item.dataset.uid, name: item.dataset.name, nickname: item.dataset.nickname, avatar: item.dataset.avatar }, firestore).catch(() => { status.textContent = 'This conversation could not be opened.'; }); };
  nicknameButton.onclick = async () => { if (!target || !activeConversationId) return; const value = prompt('Set a nickname for this person:', target.nickname || target.name); if (value === null) return; const nickname = value.trim().slice(0, 40); try { await firestore.updateDoc(firestore.doc(db, 'directConversations', activeConversationId), { nicknames: { [target.uid]: nickname } }); target.nickname = nickname; name.textContent = nickname || target.name; status.textContent = nickname ? 'Nickname updated.' : 'Nickname removed.'; } catch { status.textContent = 'Nickname could not be updated.'; } };
  form.onsubmit = async event => { event.preventDefault(); const value = input.value.trim(); if (!value || !target) return; const conversationId = [user.uid, target.uid].sort().join('_'); status.textContent = 'Sending...'; sendButton.disabled = true; try { const write = async () => { await firestore.setDoc(firestore.doc(db, 'directConversations', conversationId), { participants: [user.uid, target.uid], participantNames: { [user.uid]: user.displayName || 'Member', [target.uid]: target.name }, participantAvatars: { [user.uid]: user.photoURL || '', [target.uid]: target.avatar || '' }, nicknames: {}, lastMessage: value.slice(0, 1000), updatedAt: firestore.serverTimestamp() }, { merge: true }); await firestore.addDoc(firestore.collection(db, 'directMessages', conversationId, 'messages'), { senderId: user.uid, receiverId: target.uid, text: value.slice(0, 1000), parentId: replyTo?.id || '', parentText: replyTo?.text || '', reactions: {}, createdAt: firestore.serverTimestamp() }); }; await Promise.race([write(), new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 8000))]); input.value = ''; replyTo = null; input.placeholder = 'Type a message'; status.textContent = ''; } catch (error) { status.textContent = error?.code === 'permission-denied' ? 'Publish the latest Firestore rules before sending.' : error?.message === 'timeout' ? 'Message is taking too long. Check your internet and Firestore rules.' : 'Message failed. Try again.'; } finally { sendButton.disabled = false; } };
}

document.querySelector('[data-close-modal]')?.addEventListener('click', () => { if (stopChat) stopChat(); if (stopPresence) stopPresence(); });
observeAuthState(current => init(current).catch(() => { status.textContent = 'Personal Chat is unavailable.'; }));
