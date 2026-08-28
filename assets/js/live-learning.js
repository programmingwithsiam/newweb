import { fetchLiveSettings, fetchLiveSessions, extractYoutubeId } from './courses-db.js';
import { observeAuthState, signInWithGoogle } from './auth.js';
import { auth, db } from './firebase-init.js';

const loading = document.getElementById('liveLoading');
const empty = document.getElementById('liveEmpty');
const access = document.getElementById('liveAccess');
const workspace = document.getElementById('liveWorkspace');
const playlist = document.getElementById('livePlaylist');
const video = document.getElementById('liveVideo');
const title = document.getElementById('liveTitle');
const description = document.getElementById('liveDescription');
const category = document.getElementById('liveCategory');
const thumbnail = document.getElementById('liveThumbnail');
const date = document.getElementById('liveDate');
const state = document.getElementById('liveState');
const youtubeLink = document.getElementById('liveYoutubeLink');
let sessions = [];
let selectedIndex = 0;
let roomLoaded = false;

function escapeHtml(value) {
  const element = document.createElement('div');
  element.textContent = String(value ?? '');
  return element.innerHTML;
}

function formatDate(value) {
  if (!value) return 'Date unavailable';
  const parsed = value.toDate ? value.toDate() : new Date(value);
  return Number.isNaN(parsed.getTime()) ? 'Date unavailable' : parsed.toLocaleDateString('en-BD', { dateStyle: 'medium' });
}

function formatCommentTime(value) {
  if (!value) return 'now';
  const parsed = value.toDate ? value.toDate() : new Date(value);
  return Number.isNaN(parsed.getTime()) ? 'now' : parsed.toLocaleTimeString('en-BD', { hour: 'numeric', minute: '2-digit' });
}

function timestampValue(value) {
  if (!value) return 0;
  if (typeof value.toMillis === 'function') return value.toMillis();
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}

function formatRelativeTime(value) {
  const elapsed = Math.max(0, Date.now() - timestampValue(value));
  const minutes = Math.floor(elapsed / 60000);
  if (!minutes) return 'now';
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

function renderPlaylist() {
  playlist.innerHTML = sessions.map((session, index) => `<button type="button" class="lesson-row ${index === selectedIndex ? 'current' : ''}" data-live-index="${index}"><span class="lesson-row-title"><span class="lesson-check">${index < selectedIndex ? '✓' : ''}</span>${index + 1}. ${session.title || 'Live session'}</span><span class="lesson-row-meta">${formatDate(session.endedAt)}</span></button>`).join('');
}

function renderSession() {
  const session = sessions[selectedIndex];
  if (!session) return;
  const videoId = session.youtubeVideoId || extractYoutubeId(session.videoUrl || '');
  video.src = videoId ? `https://www.youtube.com/embed/${videoId}?controls=1&rel=0&playsinline=1&iv_load_policy=3` : '';
  title.textContent = session.title || 'Live session';
  description.textContent = session.description || 'Watch this CodeWithSiam live session again.';
  category.textContent = session.category || 'Live learning';
  if (thumbnail) {
    thumbnail.src = session.thumbnail || '';
    thumbnail.alt = `${session.title || 'Live session'} thumbnail`;
    thumbnail.classList.toggle('hidden', !session.thumbnail);
  }
  date.textContent = formatDate(session.endedAt);
  state.textContent = selectedIndex === 0 && session.isCurrent ? 'LIVE NOW' : 'LIVE ARCHIVE';
  youtubeLink.href = session.videoUrl || '#';
  document.getElementById('liveProgressText').textContent = `${sessions.length ? Math.round(((selectedIndex + 1) / sessions.length) * 100) : 0}% COMPLETE`;
  document.getElementById('liveProgressCount').textContent = `${selectedIndex + 1} / ${sessions.length} sessions`;
  document.getElementById('liveProgressBar').style.width = `${sessions.length ? ((selectedIndex + 1) / sessions.length) * 100 : 0}%`;
  renderPlaylist();
}

function move(offset) {
  selectedIndex = Math.max(0, Math.min(sessions.length - 1, selectedIndex + offset));
  renderSession();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function initComments(user = auth?.currentUser) {
  const list = document.getElementById('liveCommentsList');
  const form = document.getElementById('liveCommentForm');
  const textInput = document.getElementById('liveCommentText');
  const status = document.getElementById('liveCommentStatus');
  const sendStatus = document.getElementById('liveCommentSendStatus');
  const authNote = document.getElementById('liveCommentAuthNote');
  const pinned = document.getElementById('livePinnedComments');
  const newIndicator = document.getElementById('newCommentsIndicator');
  const loadMore = document.getElementById('loadMoreComments');
  if (!list || !form || form.dataset.bound === 'true') return;
  form.dataset.bound = 'true';
  if (!db) {
    status.textContent = 'Comments require Firebase setup';
    return;
  }
  const { collection, addDoc, arrayRemove, arrayUnion, deleteDoc, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, setDoc, startAfter, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  const profile = user ? (await getDoc(doc(db, 'users', user.uid)).catch(() => null))?.data() || {} : {};
  const identity = { uid: user?.uid || '', name: profile.name || user?.displayName || user?.email?.split('@')[0] || 'Member', photoURL: profile.photoURL || user?.photoURL || '', admin: user?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com' && user.emailVerified === true };
  let comments = [];
  let latestSnapshot;
  let replyTo = null;
  let oldestDoc = null;
  let hasOlder = true;
  let pendingNew = 0;
  authNote.textContent = identity.uid ? `Commenting as ${identity.name}` : 'Sign in to join the conversation.';
  textInput.disabled = !identity.uid;
  form.querySelector('button[type="submit"]').disabled = !identity.uid;

  function avatar(comment) {
    if (comment.avatarUrl) return `<img src="${escapeHtml(comment.avatarUrl)}" alt="" loading="lazy">`;
    return escapeHtml((comment.name || 'M').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'M');
  }
  function render() {
    const byParent = new Map();
    comments.forEach(comment => byParent.set(comment.id, comment));
    const pinnedItems = comments.filter(comment => comment.pinned).slice(-3).reverse();
    pinned.classList.toggle('hidden', !pinnedItems.length);
    pinned.innerHTML = pinnedItems.map(comment => `<span class="chat-pinned-label"><i class="fa-solid fa-thumbtack"></i> Pinned by admin</span><p>${escapeHtml(comment.text)}</p>`).join('');
    list.innerHTML = comments.length ? comments.map(comment => {
      const own = comment.authorUid === identity.uid;
      const admin = comment.authorIsAdmin === true;
      const parent = comment.parentId ? byParent.get(comment.parentId) : null;
      const reactions = Number(comment.likeCount || comment.likes?.length || 0);
      const actions = `<div class="chat-actions"><button class="chat-action" data-chat-action="like" data-chat-id="${comment.id}"><i class="fa-${comment.likes?.includes(identity.uid) ? 'solid' : 'regular'} fa-heart"></i> ${reactions || ''}</button><button class="chat-action" data-chat-action="reply" data-chat-id="${comment.id}">Reply</button>${own ? `<button class="chat-action" data-chat-action="edit" data-chat-id="${comment.id}">Edit</button><button class="chat-action" data-chat-action="delete" data-chat-id="${comment.id}">Delete</button>` : ''}${identity.admin ? `<button class="chat-action" data-chat-action="pin" data-chat-id="${comment.id}">${comment.pinned ? 'Unpin' : 'Pin'}</button><button class="chat-action" data-chat-action="mute" data-chat-uid="${comment.authorUid}">Mute</button><button class="chat-action" data-chat-action="delete" data-chat-id="${comment.id}">Delete</button>` : ''}</div>`;
      return `<article class="chat-message ${own ? 'is-own' : ''} ${admin ? 'is-admin' : ''} ${comment.parentId ? 'is-reply' : ''}" data-chat-id="${comment.id}"><span class="chat-avatar">${avatar(comment)}</span><div class="chat-bubble-wrap">${parent ? `<div class="chat-replied">Replying to ${escapeHtml(parent.name || 'member')}</div>` : ''}<div class="chat-message-meta"><strong>${escapeHtml(comment.name || 'Member')}</strong><time>${formatRelativeTime(comment.createdAt)}</time></div><p>${escapeHtml(comment.text)}</p>${actions}</div></article>`;
    }).join('') : '<p class="chat-empty">No comments yet. Start the conversation.</p>';
  }
  function merge(items, prepend = false) {
    const map = new Map(comments.map(comment => [comment.id, comment]));
    items.forEach(item => map.set(item.id, item));
    comments = [...map.values()].sort((a, b) => timestampValue(a.createdAt) - timestampValue(b.createdAt));
    if (prepend) list.scrollTop = 12;
    render();
  }
  const latestQuery = query(collection(db, 'liveChatMessages'), orderBy('createdAt', 'desc'), limit(30));
  onSnapshot(latestQuery, snapshot => {
    const incoming = snapshot.docs.map(item => ({ id: item.id, ...item.data() })).reverse();
    const previousIds = new Set(comments.map(comment => comment.id));
    const unseen = incoming.filter(comment => !previousIds.has(comment.id));
    const nearBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 80;
    if (comments.length && unseen.length && !nearBottom) { pendingNew += unseen.length; newIndicator.textContent = `${pendingNew} new comment${pendingNew === 1 ? '' : 's'} ↓`; newIndicator.classList.remove('hidden'); }
    merge(incoming);
    latestSnapshot = snapshot;
    oldestDoc = snapshot.docs[snapshot.docs.length - 1] || oldestDoc;
    hasOlder = snapshot.docs.length === 30;
    loadMore.classList.toggle('hidden', !hasOlder);
    status.textContent = `${comments.length} comments · realtime`;
  }, () => { status.textContent = 'Comments unavailable'; });
  loadMore.addEventListener('click', async () => {
    if (!oldestDoc || !hasOlder) return;
    loadMore.disabled = true;
    try {
      const older = await getDocs(query(collection(db, 'liveChatMessages'), orderBy('createdAt', 'desc'), startAfter(oldestDoc), limit(30)));
      const items = older.docs.map(item => ({ id: item.id, ...item.data() })).reverse();
      merge(items, true);
      oldestDoc = older.docs[older.docs.length - 1] || oldestDoc;
      hasOlder = older.docs.length === 30;
      loadMore.classList.toggle('hidden', !hasOlder);
    } catch { status.textContent = 'Older comments could not load'; }
    finally { loadMore.disabled = false; }
  });
  newIndicator.addEventListener('click', () => { list.scrollTop = list.scrollHeight; pendingNew = 0; newIndicator.classList.add('hidden'); });
  list.addEventListener('click', async event => {
    const button = event.target.closest('[data-chat-action]');
    if (!button) return;
    const comment = comments.find(item => item.id === button.dataset.chatId);
    const action = button.dataset.chatAction;
    try {
      if (action === 'like' && identity.uid) await updateDoc(doc(db, 'liveChatMessages', comment.id), { likes: comment.likes?.includes(identity.uid) ? arrayRemove(identity.uid) : arrayUnion(identity.uid), updatedAt: serverTimestamp() });
      if (action === 'reply') { replyTo = comment; document.getElementById('liveReplyingText').textContent = `Replying to ${comment.name || 'member'}`; document.getElementById('liveReplying').classList.remove('hidden'); textInput.focus(); }
      if (action === 'edit' && comment.authorUid === identity.uid) { const text = prompt('Edit comment:', comment.text); if (text?.trim()) await updateDoc(doc(db, 'liveChatMessages', comment.id), { text: text.trim().slice(0, 240), editedAt: serverTimestamp() }); }
      if (action === 'delete' && (comment.authorUid === identity.uid || identity.admin)) await deleteDoc(doc(db, 'liveChatMessages', comment.id));
      if (action === 'pin' && identity.admin) await updateDoc(doc(db, 'liveChatMessages', comment.id), { pinned: !comment.pinned, updatedAt: serverTimestamp() });
      if (action === 'mute' && identity.admin && button.dataset.chatUid) await setDoc(doc(db, 'muted_users', button.dataset.chatUid), { uid: button.dataset.chatUid, mutedBy: identity.uid, mutedAt: serverTimestamp() });
    } catch (error) { sendStatus.textContent = 'Action failed. Please retry.'; sendStatus.classList.add('is-error'); }
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const text = textInput.value.trim().slice(0, 240);
    if (!identity.uid || !text) return;
    const button = form.querySelector('button');
    button.disabled = true;
    sendStatus.textContent = 'Sending...';
    sendStatus.classList.remove('is-error');
    try {
      if (await getDoc(doc(db, 'muted_users', identity.uid)).then(snapshot => snapshot.exists())) throw new Error('You are muted.');
      await addDoc(collection(db, 'liveChatMessages'), { name: identity.name, avatarUrl: identity.photoURL, authorUid: identity.uid, authorIsAdmin: identity.admin, text, parentId: replyTo?.id || '', parentName: replyTo?.name || '', likes: [], pinned: false, createdAt: serverTimestamp() });
      textInput.value = '';
      replyTo = null;
      document.getElementById('liveReplying').classList.add('hidden');
      sendStatus.textContent = 'Sent';
    } catch (error) { sendStatus.textContent = error.message || 'Could not post comment. Retry.'; sendStatus.classList.add('is-error'); }
    finally { button.disabled = false; }
  });
  document.getElementById('cancelLiveReply').addEventListener('click', () => { replyTo = null; document.getElementById('liveReplying').classList.add('hidden'); });
}

async function loadLiveRoom(user) {
  if (!user) {
    loading.classList.add('hidden');
    workspace.classList.add('hidden');
    empty.classList.add('hidden');
    access.classList.remove('hidden');
    return;
  }
  access.classList.add('hidden');
  empty.classList.add('hidden');
  workspace.classList.add('hidden');
  loading.classList.remove('hidden');
  try {
  const [settings, archived] = await Promise.all([fetchLiveSettings(), fetchLiveSessions()]);
  const currentId = settings.enabled === true ? extractYoutubeId(settings.url || '') : null;
  const current = currentId ? [{ title: settings.title || 'CodeWithSiam is live', category: settings.category || 'Live learning', thumbnail: settings.thumbnail || '', description: settings.description || 'Join the live session and learn by building along.', videoUrl: settings.url, youtubeVideoId: currentId, isCurrent: true }] : [];
  sessions = [...current, ...archived];
  loading.classList.add('hidden');
  if (!sessions.length) empty.classList.remove('hidden');
  else { workspace.classList.remove('hidden'); renderSession(); await initComments(); }
  roomLoaded = true;
  } catch (error) {
  loading.classList.add('hidden');
  workspace.classList.add('hidden');
  empty.classList.remove('hidden');
  empty.querySelector('h1').textContent = 'Live room unavailable';
  empty.querySelector('p').textContent = 'Please refresh and try again shortly.';
  console.error('Live workspace failed:', error);
  }
}

document.getElementById('liveSignIn').addEventListener('click', async event => {
  const button = event.currentTarget;
  button.disabled = true;
  document.getElementById('liveAuthStatus').textContent = 'Opening Google sign-in...';
  try { await signInWithGoogle(); }
  catch (error) { document.getElementById('liveAuthStatus').textContent = error.message || 'Sign-in failed.'; button.disabled = false; }
});

observeAuthState(user => loadLiveRoom(user));

document.getElementById('livePlaylist').addEventListener('click', event => {
  const item = event.target.closest('[data-live-index]');
  if (item) { selectedIndex = Number(item.dataset.liveIndex); renderSession(); }
});
document.getElementById('previousLive').addEventListener('click', () => move(-1));
document.getElementById('nextLive').addEventListener('click', () => move(1));
document.getElementById('completeLive').addEventListener('click', () => move(1));
document.getElementById('joinAudioRoom').addEventListener('click', () => {
  if (auth?.currentUser) window.open('https://meet.jit.si/CodeWithSiamLive', '_blank', 'noopener,noreferrer');
});

