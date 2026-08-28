import { fetchLiveSettings, fetchLiveSessions, extractYoutubeId } from './courses-db.js';

const loading = document.getElementById('liveLoading');
const empty = document.getElementById('liveEmpty');
const workspace = document.getElementById('liveWorkspace');
const playlist = document.getElementById('livePlaylist');
const video = document.getElementById('liveVideo');
const title = document.getElementById('liveTitle');
const description = document.getElementById('liveDescription');
const date = document.getElementById('liveDate');
const state = document.getElementById('liveState');
const youtubeLink = document.getElementById('liveYoutubeLink');
let sessions = [];
let selectedIndex = 0;

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
  video.src = videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1` : '';
  title.textContent = session.title || 'Live session';
  description.textContent = session.description || 'Watch this CodeWithSiam live session again.';
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

try {
  const [settings, archived] = await Promise.all([fetchLiveSettings(), fetchLiveSessions()]);
  const currentId = settings.enabled === true ? extractYoutubeId(settings.url || '') : null;
  const current = currentId ? [{ title: settings.title || 'CodeWithSiam is live', description: settings.description || 'Join the live session and learn by building along.', videoUrl: settings.url, youtubeVideoId: currentId, isCurrent: true }] : [];
  sessions = [...current, ...archived];
  loading.classList.add('hidden');
  if (!sessions.length) empty.classList.remove('hidden');
  else { workspace.classList.remove('hidden'); renderSession(); }
} catch (error) {
  loading.classList.add('hidden');
  empty.classList.remove('hidden');
  empty.querySelector('h1').textContent = 'Live room unavailable';
  empty.querySelector('p').textContent = 'Please refresh and try again shortly.';
  console.error('Live workspace failed:', error);
}

document.getElementById('livePlaylist').addEventListener('click', event => {
  const item = event.target.closest('[data-live-index]');
  if (item) { selectedIndex = Number(item.dataset.liveIndex); renderSession(); }
});
document.getElementById('previousLive').addEventListener('click', () => move(-1));
document.getElementById('nextLive').addEventListener('click', () => move(1));
document.getElementById('completeLive').addEventListener('click', () => move(1));
