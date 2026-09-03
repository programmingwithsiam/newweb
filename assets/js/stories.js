import { getActiveStories, addStoryView, renderStoryViewer } from './story-manager.js?v=20260901-index-fix-1';

const content = document.getElementById('storyContent');
const progress = document.getElementById('storyProgress');
const authorAvatar = document.getElementById('storyAuthorAvatar');
const authorName = document.getElementById('storyAuthorName');
const timestamp = document.getElementById('storyTimestamp');
const closeButton = document.getElementById('closeStoryBtn');
const previousButton = document.getElementById('prevStoryBtn');
const nextButton = document.getElementById('nextStoryBtn');
const viewerSidebar = document.getElementById('storyViewersSidebar');
const closeSidebarButton = document.getElementById('closeSidebarBtn');
const storyReactionWrap = document.getElementById('storyReactionWrap');
const storyReactionButton = document.getElementById('storyReactionBtn');

function escapeHtml(value) {
  const node = document.createElement('div');
  node.textContent = String(value ?? '');
  return node.innerHTML;
}

function timeLabel(value) {
  const date = value?.toDate?.() || new Date(value || 0);
  return Number.isNaN(date.getTime()) ? 'Just now' : date.toLocaleString('en-BD', { dateStyle: 'medium', timeStyle: 'short' });
}

function initials(value) {
  return String(value || 'Member').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase();
}

let stories = [];
let selectedIndex = 0;

const storyReactionOptions = {
  like: '👍', love: '❤️', haha: '😂', laugh: '😆', wow: '😮', sad: '😢', angry: '😡'
};

function animateStoryReaction(choice) {
  storyReactionButton?.classList.remove('clicked');
  void storyReactionButton?.offsetWidth;
  storyReactionButton?.classList.add('clicked');
  setTimeout(() => storyReactionButton?.classList.remove('clicked'), 500);

  const emoji = document.createElement('div');
  const buttonRect = choice.getBoundingClientRect();
  emoji.className = 'reaction-float-emoji';
  emoji.textContent = storyReactionOptions[choice.dataset.reaction] || '👍';
  emoji.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
  emoji.style.top = `${buttonRect.top}px`;
  emoji.style.setProperty('--tx', `${(Math.random() - 0.5) * 80}px`);
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 800);
}

function setupStoryReactions() {
  const picker = storyReactionWrap?.querySelector('.reaction-picker');
  if (!storyReactionWrap || !storyReactionButton || !picker) return;

  let hoverTimer;
  const openPicker = () => {
    clearTimeout(hoverTimer);
    picker.classList.add('is-open');
  };
  const closePicker = () => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => picker.classList.remove('is-open'), 120);
  };

  storyReactionWrap.addEventListener('mouseenter', () => {
    if (!window.matchMedia('(pointer: coarse)').matches) hoverTimer = setTimeout(openPicker, 400);
  });
  storyReactionWrap.addEventListener('mouseleave', closePicker);
  picker.addEventListener('mouseenter', openPicker);
  picker.addEventListener('mouseleave', closePicker);
  storyReactionButton.addEventListener('click', event => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      event.preventDefault();
      picker.classList.toggle('is-open');
    }
  });

  picker.querySelectorAll('.reaction-choice').forEach(choice => {
    choice.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      const icon = storyReactionOptions[choice.dataset.reaction] || '👍';
      storyReactionButton.classList.add('is-reacted', 'reacted');
      storyReactionButton.querySelector('.reaction-main-icon').textContent = icon;
      storyReactionButton.querySelector('.reaction-main-label').textContent = choice.title;
      storyReactionButton.title = `${choice.title} reaction`;
      storyReactionButton.setAttribute('aria-label', `${choice.title} reaction`);
      picker.querySelectorAll('.reaction-choice').forEach(item => item.classList.toggle('is-selected', item === choice));
      animateStoryReaction(choice);
      closePicker();
    });
  });
}

function renderSelectedStory() {
  const story = stories[selectedIndex];
  if (!story) {
    content.innerHTML = '<p class="story-empty">No active stories are available.</p>';
    progress.style.width = '0%';
    return;
  }

  content.innerHTML = renderStoryViewer(story);
  authorName.textContent = story.authorName || 'Member';
  timestamp.textContent = timeLabel(story.createdAt);
  authorAvatar.src = story.avatarUrl || '';
  authorAvatar.alt = `${story.authorName || 'Member'} avatar`;
  authorAvatar.onerror = () => { authorAvatar.removeAttribute('src'); authorAvatar.alt = initials(story.authorName); };
  progress.style.width = `${((selectedIndex + 1) / stories.length) * 100}%`;
  previousButton.disabled = selectedIndex === 0;
  nextButton.disabled = selectedIndex === stories.length - 1;
  addStoryView(story.id).catch(error => console.warn('[Stories] View tracking failed:', error));
}

async function init() {
  try {
    stories = await getActiveStories();
    const requestedId = new URLSearchParams(location.search).get('id') || new URLSearchParams(location.search).get('story');
    const requestedIndex = stories.findIndex(story => story.id === requestedId);
    selectedIndex = requestedIndex >= 0 ? requestedIndex : 0;
    renderSelectedStory();
  } catch (error) {
    console.error('[Stories] Load failed:', error);
    content.innerHTML = '<p class="story-empty">Stories could not be loaded. Please refresh and try again.</p>';
  }
}

closeButton?.addEventListener('click', () => { window.location.href = 'community.html'; });
previousButton?.addEventListener('click', () => { if (selectedIndex > 0) { selectedIndex -= 1; renderSelectedStory(); } });
nextButton?.addEventListener('click', () => { if (selectedIndex < stories.length - 1) { selectedIndex += 1; renderSelectedStory(); } });
closeSidebarButton?.addEventListener('click', () => viewerSidebar?.classList.add('hidden'));
setupStoryReactions();
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeButton?.click();
  if (event.key === 'ArrowLeft') previousButton?.click();
  if (event.key === 'ArrowRight') nextButton?.click();
});

init();
