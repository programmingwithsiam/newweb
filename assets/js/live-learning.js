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

async function initComments() {
  const list = document.getElementById('liveCommentsList');
  const form = document.getElementById('liveCommentForm');
  const nameInput = document.getElementById('liveCommentName');
  const textInput = document.getElementById('liveCommentText');
  const status = document.getElementById('liveCommentStatus');
  if (!list || !form || form.dataset.bound === 'true') return;
  form.dataset.bound = 'true';
  nameInput.value = localStorage.getItem('siam_live_chat_name') || '';
  if (!db) {
    status.textContent = 'Comments require Firebase setup';
    return;
  }
  const { collection, addDoc, limit, onSnapshot, orderBy, query, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  const commentsQuery = query(collection(db, 'liveChatMessages'), orderBy('createdAt', 'desc'), limit(50));
  onSnapshot(commentsQuery, snapshot => {
    const comments = snapshot.docs.map(item => item.data()).reverse();
    list.innerHTML = comments.length ? comments.map(comment => `<article><strong>${escapeHtml(comment.name || 'Guest')}</strong><p>${escapeHtml(comment.text)}</p></article>`).join('') : '<p>No comments yet. Start the conversation.</p>';
    status.textContent = `${comments.length} recent comments`;
  }, () => { status.textContent = 'Comments unavailable'; });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const name = nameInput.value.trim().slice(0, 32) || 'Guest';
    const text = textInput.value.trim().slice(0, 240);
    if (!text) return;
    const button = form.querySelector('button');
    button.disabled = true;
    try {
      await addDoc(collection(db, 'liveChatMessages'), { name, text, parentId: '', parentName: '', authorUid: auth?.currentUser?.uid || '', createdAt: serverTimestamp() });
      localStorage.setItem('siam_live_chat_name', name);
      textInput.value = '';
    } catch (error) { status.textContent = error.code === 'permission-denied' ? 'Comments are disabled by Firestore rules' : (error.message || 'Could not post comment'); }
    finally { button.disabled = false; }
  });
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

initComments().catch(error => console.error('Live comments failed:', error));
