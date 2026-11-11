import { getActiveStories, addStoryView, renderStoryViewer } from './story-manager.js?v=20260901-index-fix-1';

const content = document.getElementById('storyContent');
const progress = document.getElementById('storyProgress');
const authorAvatar = document.getElementById('storyAuthorAvatar');
const authorName = document.getElementById('storyAuthorName');
const timestamp = document.getElementById('storyTimestamp');
const authorHeader = document.querySelector('.story-header-left');
const storyNavigation = document.querySelector('.story-nav');
const storyProgressContainer = document.querySelector('.story-progress-container');
const storyReactionBar = document.getElementById('storyReactionBar');
const storyReactionSummary = document.getElementById('storyReactionSummary');
const storyReactionStatus = document.getElementById('storyReactionStatus');
const storyReactionButtons = [...document.querySelectorAll('[data-story-reaction]')];
const closeButton = document.getElementById('closeStoryBtn');
const previousButton = document.getElementById('prevStoryBtn');
const nextButton = document.getElementById('nextStoryBtn');
const viewerSidebar = document.getElementById('storyViewersSidebar');
const closeSidebarButton = document.getElementById('closeSidebarBtn');
const createStoryModal = document.getElementById('createStoryModal');
const createStoryForm = document.getElementById('createStoryForm');
const createStoryStatus = document.getElementById('createStoryStatus');

function openStoryCreator() {
  if (!createStoryModal) return;
  createStoryModal.classList.remove('hidden');
  createStoryModal.setAttribute('aria-hidden', 'false');
  const firstInput = createStoryModal.querySelector('textarea, input, select, button');
  if (firstInput) firstInput.focus();
}

function closeStoryCreator() {
  if (!createStoryModal) return;
  createStoryModal.classList.add('hidden');
  createStoryModal.setAttribute('aria-hidden', 'true');
}

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
let stopWatchingReactions = null;
let reactionRequestPending = false;

const reactionDetails = {
  like: { emoji: '👍', label: 'Like' },
  love: { emoji: '❤️', label: 'Love' },
  care: { emoji: '🥰', label: 'Care' },
  haha: { emoji: '😂', label: 'Haha' },
  wow: { emoji: '😮', label: 'Wow' },
  sad: { emoji: '😢', label: 'Sad' },
  angry: { emoji: '😡', label: 'Angry' }
};

function showReactionStatus(message, isError = false, signIn = false) {
  storyReactionStatus.replaceChildren();
  storyReactionStatus.classList.toggle('error', isError);
  storyReactionStatus.hidden = !message;
  if (!message) return;

  storyReactionStatus.append(document.createTextNode(message));
  if (signIn) {
    const link = document.createElement('a');
    const returnTo = `${location.pathname}${location.search}`;
    link.href = `/community/login?returnTo=${encodeURIComponent(returnTo)}`;
    link.textContent = 'Sign in';
    storyReactionStatus.append(document.createTextNode(' '), link);
  }
}

function renderStoryReactions(story) {
  const reactions = story.reactions && typeof story.reactions === 'object' ? story.reactions : {};
  const currentUserReaction = auth?.currentUser ? reactions[auth.currentUser.uid] : null;
  const counts = Object.values(reactions).reduce((result, type) => {
    if (reactionDetails[type]) result[type] = (result[type] || 0) + 1;
    return result;
  }, {});
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);

  storyReactionSummary.replaceChildren();
  if (total) {
    const icons = document.createElement('span');
    icons.className = 'story-reaction-summary-icons';
    Object.entries(counts)
      .sort((left, right) => right[1] - left[1])
      .slice(0, 3)
      .forEach(([type]) => {
        const icon = document.createElement('span');
        icon.textContent = reactionDetails[type].emoji;
        icon.setAttribute('aria-hidden', 'true');
        icons.append(icon);
      });
    const count = document.createElement('span');
    count.textContent = `${total} ${total === 1 ? 'reaction' : 'reactions'}`;
    storyReactionSummary.append(icons, count);
  } else {
    storyReactionSummary.textContent = 'Be the first to react';
  }

  storyReactionButtons.forEach(button => {
    const selected = button.dataset.storyReaction === currentUserReaction;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
    button.disabled = reactionRequestPending;
  });
}

function renderSelectedStory() {
  stopWatchingReactions?.();
  stopWatchingReactions = null;
  const story = stories[selectedIndex];
  if (!story) {
    authorHeader.hidden = true;
    storyNavigation.hidden = true;
    storyProgressContainer.hidden = true;
    storyReactionBar.hidden = true;
    const requestedId = new URLSearchParams(location.search).get('id') || new URLSearchParams(location.search).get('story');
    content.innerHTML = requestedId
      ? '<p class="story-empty">This story has expired or is no longer available.</p>'
      : '<p class="story-empty">No active stories are available yet. Create the first one from the community feed.</p>';
    progress.style.width = '0%';
    previousButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  content.innerHTML = renderStoryViewer(story);
  authorHeader.hidden = false;
  storyNavigation.hidden = false;
  storyProgressContainer.hidden = false;
  storyReactionBar.hidden = false;
  showReactionStatus('');
  renderStoryReactions(story);
  authorName.textContent = story.authorName || 'Member';
  timestamp.textContent = timeLabel(story.createdAt);
  authorAvatar.src = story.avatarUrl || '';
  authorAvatar.alt = `${story.authorName || 'Member'} avatar`;
  authorAvatar.onerror = () => { authorAvatar.removeAttribute('src'); authorAvatar.alt = initials(story.authorName); };
  progress.style.width = `${((selectedIndex + 1) / stories.length) * 100}%`;
  previousButton.disabled = selectedIndex === 0;
  nextButton.disabled = selectedIndex === stories.length - 1;
  watchStoryReactions(story.id, reactions => {
    if (stories[selectedIndex]?.id !== story.id) return;
    const currentStory = stories.find(item => item.id === story.id);
    if (!currentStory) return;
    currentStory.reactions = reactions;
    renderStoryReactions(currentStory);
  }, error => {
    console.error('[Stories] Reaction updates could not be watched:', error);
    showReactionStatus('Reaction totals could not be updated live.', true);
  }).then(unsubscribe => {
    if (stories[selectedIndex]?.id === story.id) {
      stopWatchingReactions = unsubscribe;
    } else {
      unsubscribe();
    }
  }).catch(error => {
    console.error('[Stories] Reaction listener could not start:', error);
    showReactionStatus('Reaction totals could not be loaded.', true);
  });
  addStoryView(story.id).catch(error => console.warn('[Stories] View tracking failed:', error));
}

async function reactToCurrentStory(reactionType) {
  const story = stories[selectedIndex];
  if (!story || reactionRequestPending) return;

  if (!auth?.currentUser) {
    showReactionStatus('Sign in to react to this story.', true, true);
    return;
  }

  const uid = auth.currentUser.uid;
  const currentReaction = story.reactions?.[uid] || null;
  const nextReaction = currentReaction === reactionType ? null : reactionType;
  reactionRequestPending = true;
  renderStoryReactions(story);
  showReactionStatus('Saving your reaction…');

  try {
    await setStoryReaction(story.id, nextReaction);
    const reactions = { ...(story.reactions || {}) };
    if (nextReaction) reactions[uid] = nextReaction;
    else delete reactions[uid];
    story.reactions = reactions;
    showReactionStatus(nextReaction ? `You reacted ${reactionDetails[nextReaction].label.toLowerCase()}.` : 'Your reaction was removed.');
  } catch (error) {
    console.error('[Stories] Reaction could not be saved:', error);
    showReactionStatus(error.message || 'Your reaction could not be saved. Please try again.', true);
  } finally {
    reactionRequestPending = false;
    renderStoryReactions(story);
  }
}

function setupStoryCreator() {
  if (!createStoryForm || !createStoryStatus) return;

  const typeButtons = [...document.querySelectorAll('.story-type-btn')];
  const textSection = document.getElementById('textStoryForm');
  const imageSection = document.getElementById('imageStoryForm');
  const textInput = document.getElementById('storyText');
  const imageInput = document.getElementById('storyImage');
  const imageCaption = document.getElementById('imageCaption');
  const imageUploadButton = document.getElementById('imageUploadBtn');
  const imageFileName = document.getElementById('imageFileName');
  const imagePreview = document.getElementById('imagePreview');
  const imagePreviewImg = document.getElementById('imagePreviewImg');
  const textCount = document.getElementById('textCharCount');
  const textPreview = document.getElementById('textPreview');
  const submitButton = createStoryForm.querySelector('button[type="submit"]');
  const categoryKeys = {
    '🚀 Learning Update': 'learning',
    '💻 Project Update': 'project',
    '🎯 Achievement': 'achievement',
    '📚 Study Update': 'study',
    '💡 Quick Idea': 'idea',
    '🔥 Challenge': 'challenge'
  };
  let selectedType = 'text';
  let previewUrl = '';

  const setStatus = message => {
    createStoryStatus.textContent = message;
    createStoryStatus.classList.toggle('error', Boolean(message));
  };

  function selectType(type) {
    selectedType = type === 'image' ? 'image' : 'text';
    typeButtons.forEach(button => button.classList.toggle('active', button.dataset.type === type));
    textSection?.classList.toggle('hidden', selectedType !== 'text');
    imageSection?.classList.toggle('hidden', selectedType !== 'image');
    if (textInput) textInput.disabled = selectedType !== 'text';
    if (imageInput) imageInput.disabled = selectedType !== 'image';
    setStatus('');
  }

  typeButtons.forEach(button => {
    button.addEventListener('click', () => selectType(button.dataset.type));
  });

  imageUploadButton?.addEventListener('click', () => imageInput?.click());
  textInput?.addEventListener('input', () => {
    if (textCount) textCount.textContent = `${textInput.value.length}/280`;
    if (textPreview) textPreview.textContent = textInput.value.trim();
  });
  imageCaption?.addEventListener('input', () => {
    if (textPreview) textPreview.textContent = imageCaption.value.trim();
  });
  imageInput?.addEventListener('change', () => {
    const file = imageInput.files?.[0];
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = '';
    imagePreview?.classList.add('hidden');
    if (!file) {
      if (imageFileName) imageFileName.textContent = 'No file selected';
      return;
    }
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
      imageInput.value = '';
      setStatus('Choose a JPG, PNG, or WebP image smaller than 5 MB.');
      if (imageFileName) imageFileName.textContent = 'No file selected';
      return;
    }
    previewUrl = URL.createObjectURL(file);
    if (imageFileName) imageFileName.textContent = file.name;
    if (imagePreviewImg) imagePreviewImg.src = previewUrl;
    imagePreview?.classList.remove('hidden');
    setStatus('');
  });
  createStoryForm.addEventListener('submit', async event => {
    event.preventDefault();
    setStatus('');

    if (!auth?.currentUser) {
      const signInLink = document.createElement('a');
      signInLink.href = `/community/login?returnTo=${encodeURIComponent('/stories.html?mode=create')}`;
      signInLink.textContent = 'Sign in';
      createStoryStatus.replaceChildren(document.createTextNode('Sign in to post a story. '), signInLink);
      return;
    }

    const text = textInput?.value.trim() || '';
    const image = imageInput?.files?.[0];
    if (selectedType === 'text' && !text) {
      setStatus('Write a short update before posting.');
      textInput?.focus();
      return;
    }
    if (selectedType === 'image' && !image) {
      setStatus('Choose a photo before posting.');
      imageUploadButton?.focus();
      return;
    }

    const selectedCategory = (selectedType === 'image'
      ? document.getElementById('imageCategory')?.value
      : document.getElementById('textStoryCategory')?.value) || '🚀 Learning Update';
    const content = selectedType === 'image'
      ? imageCaption?.value.trim() || 'Shared a photo'
      : text;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Posting…';
    }
    setStatus('Posting your story…');

    try {
      const mediaUrl = selectedType === 'image' ? await uploadStoryImage(image) : '';
      const story = await createStory({
        type: selectedType,
        content,
        mediaUrl,
        category: categoryKeys[selectedCategory] || 'learning'
      });
      stories = [{ ...story, createdAt: new Date() }, ...stories.filter(item => item.authorUid !== story.authorUid)];
      selectedIndex = 0;
      renderSelectedStory();
      closeStoryCreator();
      createStoryForm.reset();
      selectType('text');
      if (textCount) textCount.textContent = '0/280';
      if (textPreview) textPreview.textContent = '';
      if (imageFileName) imageFileName.textContent = 'No file selected';
      imagePreview?.classList.add('hidden');
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = '';
    } catch (error) {
      console.error('[Stories] Post failed:', error);
      setStatus(error.message || 'The story could not be posted. Please try again.');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Post Story';
      }
    }
  });
}

async function init() {
  try {
    stories = await getActiveStories();
    const requestedId = new URLSearchParams(location.search).get('id') || new URLSearchParams(location.search).get('story');
    const requestedIndex = stories.findIndex(story => story.id === requestedId);
    selectedIndex = requestedId ? requestedIndex : 0;
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
document.querySelectorAll('[data-close-modal]').forEach((button) => {
  button.addEventListener('click', () => closeStoryCreator());
});
createStoryModal?.addEventListener('click', (event) => {
  if (event.target === createStoryModal) closeStoryCreator();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (!createStoryModal?.classList.contains('hidden')) {
      closeStoryCreator();
      return;
    }
    closeButton?.click();
  }
  if (event.key === 'ArrowLeft') previousButton?.click();
  if (event.key === 'ArrowRight') nextButton?.click();
});

const shouldOpenCreateMode = new URLSearchParams(window.location.search).get('mode') === 'create';
if (shouldOpenCreateMode) {
  openStoryCreator();
}

setupStoryCreator();
init();
