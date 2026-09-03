import { auth, db, storage } from './firebase-init.js';
import { observeAuthState, signInWithGoogle } from './auth.js?v=20260829-auth-fix-1';

console.log('[Community] Module loading');

// ==================== DOM ELEMENTS ====================
const feed = document.getElementById('postFeed');
const text = document.getElementById('postText');
const postButton = document.getElementById('postBtn');
const signInButton = document.getElementById('signInBtn');
const status = document.getElementById('postStatus');
const identity = document.getElementById('composerIdentity');
const avatar = document.getElementById('composerAvatar');
const count = document.getElementById('postCount');
const imageInput = document.getElementById('postImage');
const imagePreview = document.getElementById('imagePreview');
const imagePreviewPhoto = document.getElementById('imagePreviewPhoto');
const removePostImage = document.getElementById('removePostImage');
const profileModal = document.getElementById('profileModal');
const profileBody = document.getElementById('profileModalBody');
const messageModal = document.getElementById('messageModal');
const messageList = document.getElementById('messageList');
const messageForm = document.getElementById('messageForm');
const messageText = document.getElementById('messageText');
const storiesStrip = document.getElementById('storiesStrip');
const storyCreatorModal = document.getElementById('storyCreatorModal');
const storyCreateForm = document.getElementById('storyCreateForm');
const storyTextInput = document.getElementById('storyTextInput');
const storyTextCount = document.getElementById('storyTextCount');
const storyCategorySelect = document.getElementById('storyCategorySelect');
const storyStatus = document.getElementById('storyStatus');
const storyImageInput = document.getElementById('storyImageInput');
const storyImagePicker = document.getElementById('storyImagePicker');
const storyImageFileName = document.getElementById('storyImageFileName');
const storyImagePreview = document.getElementById('storyImagePreview');
const storyImagePreviewPhoto = document.getElementById('storyImagePreviewPhoto');
const storyAddMusicButton = document.getElementById('storyAddMusicButton');
const storyMusicSummary = document.getElementById('storyMusicSummary');
const storyRemoveMusicButton = document.getElementById('storyRemoveMusicButton');
const storyMusicModal = document.getElementById('storyMusicModal');
const storyMusicSearchForm = document.getElementById('storyMusicSearchForm');
const storyMusicQuery = document.getElementById('storyMusicQuery');
const storyMusicUrlForm = document.getElementById('storyMusicUrlForm');
const storyMusicUrl = document.getElementById('storyMusicUrl');
const storyMusicStatus = document.getElementById('storyMusicStatus');
const storyMusicResults = document.getElementById('storyMusicResults');
const storyMusicEditorModal = document.getElementById('storyMusicEditorModal');
const storyMusicEditorSong = document.getElementById('storyMusicEditorSong');
const storyMusicStart = document.getElementById('storyMusicStart');
const storyMusicStartLabel = document.getElementById('storyMusicStartLabel');
const storyMusicPreviewButton = document.getElementById('storyMusicPreviewButton');
const storyMusicPreview = document.getElementById('storyMusicPreview');
const storyMusicConfirmButton = document.getElementById('storyMusicConfirmButton');
const storyMusicRecentButton = document.getElementById('storyMusicRecentButton');
const storyMusicTrendingButton = document.getElementById('storyMusicTrendingButton');
let storyDraftImageUrl = '';
let storyDraftImageFile = null;
let storyDraftMusic = null;
let storyMusicSelection = null;
let editingStory = null;

const extractYoutubeId = value => {
  try {
    const url = new URL(String(value).trim());
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    if (host === 'youtu.be') return url.pathname.slice(1).split('/')[0].match(/^[A-Za-z0-9_-]{11}$/)?.[0] || '';
    if (['youtube.com', 'm.youtube.com', 'music.youtube.com', 'youtube-nocookie.com'].includes(host)) {
      const id = url.searchParams.get('v') || url.pathname.match(/\/shorts\/([^/]+)/)?.[1] || url.pathname.match(/\/embed\/([^/]+)/)?.[1];
      return id?.match(/^[A-Za-z0-9_-]{11}$/)?.[0] || '';
    }
  } catch { /* Invalid URL */ }
  return '';
};

const musicTime = seconds => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
const musicApiKey = () => window.YOUTUBE_API_KEY || '';

const openMusicEditor = async song => {
  storyMusicSelection = { ...song, videoId: song.videoId || extractYoutubeId(song.url) };
  if (!storyMusicSelection.videoId) {
    storyMusicStatus.textContent = 'That is not a valid YouTube link.';
    return;
  }
  storyMusicSelection.duration = Number(song.duration) || 180;
  if (musicApiKey()) {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${storyMusicSelection.videoId}&key=${encodeURIComponent(musicApiKey())}`);
      const data = await response.json();
      const match = data.items?.[0]?.contentDetails?.duration?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
      if (match) storyMusicSelection.duration = Number(match[1] || 0) * 3600 + Number(match[2] || 0) * 60 + Number(match[3] || 0);
    } catch (error) { console.warn('[Community] Music duration unavailable:', error); }
  }
  storyMusicModal?.classList.add('hidden');
  storyMusicEditorSong.innerHTML = `<img src="${escapeHtml(song.thumbnail || `https://i.ytimg.com/vi/${storyMusicSelection.videoId}/hqdefault.jpg`)}" alt=""><div><strong>${escapeHtml(song.title || 'YouTube music')}</strong><span>${escapeHtml(song.channel || '')}</span></div>`;
  storyMusicStart.max = String(Math.max(0, Math.floor(storyMusicSelection.duration - 1)));
  storyMusicStart.value = '0';
  storyMusicStartLabel.textContent = '0:00';
  storyMusicPreview.hidden = true;
  storyMusicPreview.innerHTML = '';
  storyMusicEditorModal?.classList.remove('hidden');
};

const renderMusicResults = results => {
  storyMusicResults.innerHTML = results.length ? results.map(song => `<article class="story-music-result"><img src="${escapeHtml(song.thumbnail)}" alt=""><div><strong>${escapeHtml(song.title)}</strong><span>${escapeHtml(song.channel)}</span></div><button type="button" data-music-json="${escapeHtml(JSON.stringify(song))}">Select</button></article>`).join('') : '<p class="comments-empty">No music found.</p>';
  storyMusicResults.querySelectorAll('[data-music-json]').forEach(button => button.addEventListener('click', () => openMusicEditor(JSON.parse(button.dataset.musicJson))));
};

const searchMusic = async queryText => {
  const key = musicApiKey();
  if (!key) {
    storyMusicStatus.textContent = 'Search needs a YouTube Data API key. Paste a YouTube link below to continue.';
    renderMusicResults([]);
    return;
  }
  storyMusicStatus.textContent = 'Searching...';
  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=8&q=${encodeURIComponent(queryText)}&key=${encodeURIComponent(key)}`);
    if (!response.ok) throw new Error('Music search failed');
    const data = await response.json();
    renderMusicResults((data.items || []).map(item => ({ videoId: item.id.videoId, title: item.snippet.title, channel: item.snippet.channelTitle, thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || '' })));
    storyMusicStatus.textContent = '';
  } catch (error) {
    console.error('[Community] Music search error:', error);
    storyMusicStatus.textContent = 'Music search is unavailable right now.';
    renderMusicResults([]);
  }
};

const getRecentMusic = () => {
  try { return JSON.parse(localStorage.getItem('recentMusic') || '[]'); } catch { return []; }
};

const showMusicCollection = results => {
  storyMusicStatus.textContent = results.length ? '' : 'Nothing here yet.';
  renderMusicResults(results);
};

// ==================== STATE ====================
let currentUser = null;
let visitorId = localStorage.getItem('visitorId') || Math.random().toString(36).slice(2);
localStorage.setItem('visitorId', visitorId);
let postItems = [];
let previewUrl = '';
let messageTarget = null;
let stopMessages = null;
let stopInbox = null;

if (!localStorage.getItem('visitorId')) localStorage.setItem('visitorId', visitorId);

// ==================== UTILITY FUNCTIONS ====================
const escapeHtml = str => {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

const timestamp = date => {
  if (!date) return 0;
  if (date.toMillis) return date.toMillis();
  if (date instanceof Date) return date.getTime();
  if (typeof date === 'number') return date;
  return new Date(date).getTime();
};

const relativeTime = date => {
  if (!date) return 'unknown';
  const ms = Date.now() - timestamp(date);
  const secs = Math.floor(ms / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  if (secs < 60) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const initials = name => {
  if (!name) return '?';
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
};

const reactionOptions = [
  { type: 'like', icon: '👍', label: 'Like' },
  { type: 'love', icon: '❤️', label: 'Love' },
  { type: 'haha', icon: '😂', label: 'Haha' },
  { type: 'laugh', icon: '😆', label: 'Laugh' },
  { type: 'wow', icon: '😮', label: 'Wow' },
  { type: 'sad', icon: '😢', label: 'Sad' },
  { type: 'angry', icon: '😡', label: 'Angry' },
];

const reactionByType = type => reactionOptions.find(option => option.type === type) || reactionOptions[0];

// ==================== REACTION CLICK ANIMATION ====================
const animateReactionClick = (button) => {
  // Visual feedback - bounce animation
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 500);

  // Get the emoji to float
  const reactionText = button.dataset.reaction;
  const option = reactionByType(reactionText);
  if (!option) return;

  // Create floating emoji particle
  const rect = button.getBoundingClientRect();
  const emoji = document.createElement('div');
  emoji.className = 'reaction-float-emoji';
  emoji.textContent = option.icon;
  emoji.style.left = rect.left + rect.width / 2 + 'px';
  emoji.style.top = rect.top + 'px';
  
  // Random horizontal offset
  const offset = (Math.random() - 0.5) * 80;
  emoji.style.setProperty('--tx', offset + 'px');
  
  document.body.appendChild(emoji);
  
  // Remove after animation completes
  setTimeout(() => emoji.remove(), 800);
};

// ==================== POST MENU HANDLER ====================
const handlePostAction = async (btn, postId) => {
  const actionType = btn.dataset.postAction;
  
  // Handle direct Share action
  if (actionType === 'share') {
    const post = postItems.find(p => p.id === postId);
    if (post) {
      handleSharePost(post);
      // Increment share count
      try {
        const { doc, updateDoc, increment } = await import(
          'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
        );
        await updateDoc(doc(db, 'communityPosts', postId), {
          shares: increment(1)
        });
      } catch (error) {
        console.error('[Community] Share count error:', error);
      }
    }
    return;
  }

  if (!currentUser) {
    status.textContent = 'Sign in to edit posts';
    return;
  }

  const post = postItems.find(p => p.id === postId);
  if (!post) return;

  // Only post author can edit/delete
  const canEdit = currentUser.uid === post.authorId;

  try {
    const { doc, deleteDoc, updateDoc, serverTimestamp } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    // Show menu options in a simple dialog
    const action = prompt(
      `Post actions:\n\n${canEdit ? '[1] Edit\n[2] Delete\n[3] Cancel' : '[1] Report\n[2] Cancel'}`,
      canEdit ? '1' : '1'
    );

    if (!action || action === '3' || action === '2' && !canEdit) return;

    if (canEdit && action === '1') {
      // Edit post
      const newText = prompt('Edit your post:', post.text);
      if (newText?.trim()) {
        status.textContent = 'Updating...';
        await updateDoc(doc(db, 'communityPosts', postId), {
          text: newText.trim().slice(0, 1000),
          editedAt: serverTimestamp()
        });
        status.textContent = 'Post updated!';
        showToast('Post updated successfully', 'success');
        setTimeout(() => { status.textContent = ''; }, 2000);
      }
    } else if (canEdit && action === '2') {
      // Delete post
      if (confirm('Delete this post? This cannot be undone.')) {
        status.textContent = 'Deleting...';
        await deleteDoc(doc(db, 'communityPosts', postId));
        status.textContent = 'Post deleted';
        showToast('Post deleted', 'success');
      }
    } else if (action === '1' && !canEdit) {
      // Report post
      const reason = prompt('Report reason (e.g., spam, offensive, etc.):');
      if (reason?.trim()) {
        // In production, would send to moderation backend
        showToast('Thanks for reporting. Our team will review it.', 'success');
      }
    }

  } catch (error) {
    console.error('[Community] Post action error:', error);
    status.textContent = error.message || 'Action failed. Try again.';
    showToast('Failed to perform action', 'error');
  }
};

const handleSharePost = (post) => {
  const postUrl = `${window.location.origin}${window.location.pathname}#post-${post.id}`;
  
  // Try Web Share API first
  if (navigator.share) {
    navigator.share({
      title: 'Check out this post!',
      text: post.text?.slice(0, 100) || 'A post from CodeWithSiam community',
      url: postUrl
    }).catch(err => console.log('Share cancelled:', err));
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(postUrl)
      .then(() => {
        showToast('Post link copied to clipboard!', 'success');
      })
      .catch(() => {
        showToast('Failed to copy link', 'error');
      });
  }
};

const reactionEntries = post => Object.values(post.reactions || {}).filter(reaction => reaction?.reactionType);

const reactionSummary = post => {
  const entries = reactionEntries(post);
  const countByType = {};
  entries.forEach(reaction => {
    const type = reaction.reactionType || 'like';
    countByType[type] = (countByType[type] || 0) + 1;
  });

  const entriesWithNames = entries.map(entry => ({
    ...entry,
    userName: post.authorName || 'Member',
    isOnline: false
  }));

  return {
    entries: entriesWithNames,
    count: entries.length,
    countByType,
    types: Object.keys(countByType)
  };
};

const syncReactionPickerState = (wrapper, isVisible) => {
  const picker = wrapper?.querySelector('.reaction-picker');
  if (!picker) return;
  picker.classList.toggle('is-open', Boolean(isVisible));
};

const normalizePost = snapshot => {
  const data = snapshot.data();
  return { id: snapshot.id, ...data, authorId: data.authorId || data.authorUid, imageUrl: data.imageUrl || data.imageData };
};

const hydratePostAvatars = async posts => {
  const authorIds = [...new Set(posts.map(post => post.authorId).filter(Boolean))];
  if (!authorIds.length || !db) return posts;
  try {
    const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
    const profiles = await Promise.all(authorIds.map(async uid => [uid, (await getDoc(doc(db, 'users', uid))).data()]));
    const avatars = new Map(profiles.map(([uid, profile]) => [uid, profile?.profilePicture || profile?.photoURL || '']));
    return posts.map(post => ({ ...post, avatarUrl: avatars.get(post.authorId) || (currentUser?.uid === post.authorId ? currentUser.photoURL || '' : post.avatarUrl || '') }));
  } catch (error) {
    console.warn('[Community] Could not refresh profile photos:', error);
    return posts;
  }
};

// ==================== RENDER FUNCTIONS ====================
const showLoading = () => {
  feed.innerHTML = `<div class="feed-empty"><i class="fa-solid fa-spinner fa-spin"></i><p>Loading community...</p></div>`;
};

const showError = (msg, canRetry = true) => {
  feed.innerHTML = `<div class="feed-empty">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <p>${escapeHtml(msg || 'Failed to load posts')}</p>
    ${canRetry ? '<button class="retry-button" type="button">Retry</button>' : ''}
  </div>`;
  if (canRetry) {
    feed.querySelector('.retry-button')?.addEventListener('click', loadPosts);
  }
};

const showEmpty = () => {
  feed.innerHTML = `<div class="feed-empty">
    <i class="fa-regular fa-comments"></i>
    <p>No posts yet. Be the first to share!</p>
  </div>`;
};

const render = () => {
  if (postItems.length === 0) {
    showEmpty();
    count.textContent = '0 posts · realtime';
    return;
  }

  feed.innerHTML = postItems.map(post => {
    const canEdit = currentUser?.uid === post.authorId;
    const reactionId = currentUser?.uid;
    const currentReaction = reactionId
      ? post.reactions?.[reactionId]?.reactionType || (post.likes?.includes(reactionId) ? 'like' : '')
      : '';
    const summary = reactionSummary(post);
    const usedTypes = [...new Set(summary.entries.map(reaction => reaction.reactionType))];
    
    // Create reaction icons display - show all unique reactions
    const reactionIcons = usedTypes.map(type => `<span class="reaction-icon">${reactionByType(type)?.icon || '👍'}</span>`).join('');
    const commentCount = post.comments?.length || 0;
    const shareCount = post.shares || 0;
    
    const picker = reactionOptions.map((option, index) => `
      <button type="button" class="reaction-choice ${currentReaction === option.type ? 'is-selected' : ''}" data-reaction="${option.type}" title="${option.label}" aria-label="${option.label}" style="--delay:${index * 40}ms">${option.icon}<span>${option.label}</span></button>
    `).join('');

    return `<article class="community-post" data-post-id="${escapeHtml(post.id)}">
      <div class="post-header">
        <div class="post-author-info">
          <img src="${escapeHtml(post.avatarUrl || '')}" alt="Open ${escapeHtml(post.authorName || 'Member')} profile" data-profile-uid="${escapeHtml(post.authorId || '')}" onerror="this.src='assets/images/profile-siam-round.png'" class="post-avatar">
          <div>
            <strong class="post-author" data-profile-uid="${escapeHtml(post.authorId || '')}">${escapeHtml(post.authorName || 'Member')}</strong>
            <time class="post-time">${relativeTime(post.createdAt)}</time>
          </div>
        </div>
        ${canEdit ? `<button class="post-menu" type="button" data-post-action="menu"><i class="fa-solid fa-ellipsis-v"></i></button>` : ''}
      </div>
      <div class="post-content">
        <p>${escapeHtml(post.text)}</p>
        ${(post.imageUrl || post.imageData) ? `<img src="${escapeHtml(post.imageUrl || post.imageData)}" alt="Post image" class="post-image">` : ''}
      </div>
      <div class="post-reactions ${summary.count || commentCount || shareCount ? '' : 'hidden'}" data-reaction-count="${summary.count}" data-reaction-details="${escapeHtml(JSON.stringify(summary.countByType))}">
        <div class="reaction-counts-row">
          ${summary.count ? `<button type="button" class="reaction-count-item" data-show-reactions title="See who reacted"><span class="reaction-count-icon">👍</span>${summary.count}</button>` : ''}
          ${commentCount ? `<button type="button" class="comment-count-item" title="View comments"><i class="fa-regular fa-comment"></i> ${commentCount}</button>` : ''}
          ${shareCount ? `<button type="button" class="share-count-item" title="View shares"><i class="fa-solid fa-share"></i> ${shareCount}</button>` : ''}
        </div>
        <div class="reaction-icons-summary" ${reactionIcons ? '' : 'style="display:none;"'}>
          ${reactionIcons}
        </div>
      </div>
      <div class="post-actions">
        <div class="reaction-wrap" data-post-id="${escapeHtml(post.id)}">
          <button type="button" class="reaction-btn ${currentReaction ? 'is-reacted' : ''}" data-reaction="like" title="Like"><span class="reaction-main-icon">${currentReaction ? reactionByType(currentReaction)?.icon : '👍'}</span> <span class="reaction-main-label">${currentReaction ? reactionByType(currentReaction)?.label : 'Like'}</span></button>
          <div class="reaction-picker" role="menu" aria-label="Choose a reaction">${picker}</div>
        </div>
        <button type="button" class="reaction-btn" data-reaction="comment" title="Comment"><i class="fa-regular fa-comment"></i> Comment</button>
        <button type="button" class="reaction-btn" data-post-action="share" title="Share"><i class="fa-solid fa-share"></i> Share</button>
        ${currentUser ? `<button type="button" class="message-btn" data-post-author-id="${escapeHtml(post.authorId)}" data-post-author-name="${escapeHtml(post.authorName)}"><i class="fa-regular fa-envelope"></i> Message</button>` : ''}
      </div>
    </article>`;
  }).join('');

  count.textContent = `${postItems.length} posts · realtime`;

  // Attach event listeners with delegation to prevent duplicates
  attachEventListeners();
};

// ==================== TOAST NOTIFICATIONS ====================
const showToast = (message, type = 'info', duration = 3000) => {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 2000;
    padding: 12px 20px;
    border-radius: 8px;
    background: var(--community-panel);
    border: 1px solid var(--community-line);
    color: var(--community-text);
    font-size: 0.9rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    animation: slideUp 0.3s ease;
  `;
  
  if (type === 'success') toast.style.borderColor = '#67cdaa';
  if (type === 'error') toast.style.color = '#ff6b6b';
  
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideDown 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

// Initialize event delegation listeners (called once during init)
const initializeEventDelegation = () => {
  console.log('[Community] Event delegation initialized');
  // Event delegation is handled by attachEventListeners() in render()
};

// Setup hover and touch handlers for reaction pickers (must be called on each render)
const setupReactionPickers = () => {
  feed.querySelectorAll('.reaction-wrap').forEach(wrapper => {
    const picker = wrapper.querySelector('.reaction-picker');
    const reactionBtn = wrapper.querySelector('.reaction-btn[data-reaction="like"]');
    if (!reactionBtn || !picker) return;

    let hoverTimer = null;
    let pressTimer = null;

    const openPicker = () => {
      clearTimeout(hoverTimer);
      picker.classList.add('is-open');
    };

    const closePicker = () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        picker.classList.remove('is-open');
      }, 120);
    };

    const showOnHover = () => {
      if (window.matchMedia('(pointer: coarse)').matches) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(openPicker, 400);
    };

    const hideOnLeave = () => {
      if (window.matchMedia('(pointer: coarse)').matches) return;
      closePicker();
    };

    reactionBtn.addEventListener('mouseenter', showOnHover);
    reactionBtn.addEventListener('mouseleave', hideOnLeave);
    wrapper.addEventListener('mouseenter', showOnHover);
    wrapper.addEventListener('mouseleave', hideOnLeave);
    picker.addEventListener('mouseenter', openPicker);
    picker.addEventListener('mouseleave', closePicker);

    reactionBtn.addEventListener('click', (e) => {
      if (window.matchMedia('(pointer: coarse)').matches) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = picker.classList.contains('is-open');
        syncReactionPickerState(wrapper, !isOpen);
        if (!isOpen) {
          openPicker();
        } else {
          closePicker();
        }
        return;
      }

      const postId = wrapper.closest('[data-post-id]')?.dataset.postId;
      if (!postId) return;
      const post = postItems.find(p => p.id === postId);
      const currentReaction = currentUser?.uid && post ? (post.reactions?.[currentUser.uid]?.reactionType || (post.likes?.includes(currentUser.uid) ? 'like' : '')) : '';
      if (!currentUser) {
        status.textContent = 'Sign in to react to this post.';
        return;
      }
      if (!currentReaction || currentReaction === 'like') {
        handleReaction({ dataset: { reaction: 'like' } }, postId);
      }
    });

    reactionBtn.addEventListener('touchstart', (e) => {
      if (!window.matchMedia('(pointer: coarse)').matches) return;
      pressTimer = setTimeout(() => {
        e.preventDefault();
        syncReactionPickerState(wrapper, true);
      }, 500);
    }, { passive: false });

    reactionBtn.addEventListener('touchend', () => {
      clearTimeout(pressTimer);
    });
    reactionBtn.addEventListener('touchcancel', () => {
      clearTimeout(pressTimer);
    });

    picker.querySelectorAll('.reaction-choice').forEach(choice => {
      choice.addEventListener('click', (e) => {
        e.stopPropagation();
        syncReactionPickerState(wrapper, false);
      });
    });
  });
};

// Attach event listeners - call after each render
const attachEventListeners = () => {
  // Profile links
  feed.querySelectorAll('[data-profile-uid]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const uid = e.currentTarget.dataset.profileUid;
      if (uid) window.location.href = `user-profile.html?uid=${escapeHtml(uid)}`;
    });
  });

  // Reaction choices in picker
  feed.querySelectorAll('.reaction-choice').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const postId = btn.closest('[data-post-id]')?.dataset.postId;
      if (postId) {
        animateReactionClick(btn);
        handleReaction(btn, postId);
      }
    });
  });

  // Comment buttons
  feed.querySelectorAll('.reaction-btn[data-reaction="comment"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const postId = btn.closest('[data-post-id]')?.dataset.postId;
      if (postId) {
        const post = postItems.find(p => p.id === postId);
        if (post) showComments(post);
      }
    });
  });

  // Setup reaction picker interactions
  setupReactionPickers();

  // Post actions menu
  feed.querySelectorAll('[data-post-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const postId = btn.closest('[data-post-id]')?.dataset.postId;
      if (postId) handlePostAction(btn, postId);
    });
  });

  // Reaction details (count click)
  feed.querySelectorAll('[data-show-reactions]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const post = btn.closest('[data-post-id]');
      const reactionData = post?.querySelector('.post-reactions');
      if (!reactionData) return;
      
      const postId = post.dataset.postId;
      const post_ = postItems.find(p => p.id === postId);
      if (!post_) return;
      
      showReactionDetails(post_, reactionData);
    });
  });

  // Comment count button
  feed.querySelectorAll('.comment-count-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const postId = btn.closest('[data-post-id]')?.dataset.postId;
      if (postId) {
        const post = postItems.find(p => p.id === postId);
        if (post) showComments(post);
      }
    });
  });

  // Message buttons
  feed.querySelectorAll('.message-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const authorId = e.currentTarget.dataset.postAuthorId;
      const authorName = e.currentTarget.dataset.postAuthorName;
      if (authorId && currentUser) openMessages({ uid: authorId, name: authorName });
    });
  });
};

// ==================== POST OPERATIONS ====================
const loadPosts = async () => {
  console.log('[Community] Loading posts...');
  showLoading();

  try {
    const { collection, query, orderBy, limit, getDocs, onSnapshot } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    const postsQuery = query(
      collection(db, 'communityPosts'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );

    // Load initial posts
    const snapshot = await getDocs(postsQuery);
    postItems = await hydratePostAvatars(snapshot.docs.map(normalizePost));
    console.log(`[Community] Loaded ${postItems.length} posts`);
    render();

    // Set up real-time listener
    onSnapshot(postsQuery, (snapshot) => {
      hydratePostAvatars(snapshot.docs.map(normalizePost)).then(updatedPosts => {
        postItems = updatedPosts;
        render();
      });
      console.log(`[Community] Real-time update: ${snapshot.docs.length} posts`);
    }, (error) => {
      console.error('[Community] Real-time listener error:', error.message);
      if (postItems.length === 0) {
        showError('Failed to load posts');
      }
    });

  } catch (error) {
    console.error('[Community] Load error:', error);
    showError(error.message || 'Failed to load posts');
  }
};

// ==================== REACTION HANDLER ====================
let reactionPendingUpdates = {}; // Track pending reactions to prevent duplicates

const handleReaction = async (btn, postId) => {
  const reaction = btn.dataset.reaction;
  const updateKey = `${postId}_${currentUser?.uid}`;

  // Prevent duplicate reactions while saving
  if (reactionPendingUpdates[updateKey]) {
    console.log('[Community] Reaction update already in progress');
    return;
  }

  if (reactionOptions.some(option => option.type === reaction)) {
    if (!currentUser) {
      status.textContent = 'Sign in to react to this post.';
      return;
    }

    const post = postItems.find(p => p.id === postId);
    if (!post) return;

    const userId = currentUser.uid;
    const oldReactions = JSON.parse(JSON.stringify(post.reactions || {})); // Deep copy
    const oldReaction = oldReactions[userId] || (post.likes?.includes(userId) ? { reactionType: 'like' } : null);
    
    // Toggle: if clicking same reaction, remove it; otherwise replace
    const nextType = oldReaction?.reactionType === reaction ? '' : reaction;
    const nextReactions = { ...oldReactions };
    
    if (nextType) {
      nextReactions[userId] = { postId, userId, reactionType: nextType, createdAt: new Date() };
    } else {
      delete nextReactions[userId];
    }

    // Optimistic UI update
    post.reactions = nextReactions;
    render();
    reactionPendingUpdates[updateKey] = true;

    try {
      const { doc, runTransaction, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
      );

      const postRef = doc(db, 'communityPosts', postId);
      await runTransaction(db, async transaction => {
        const snapshot = await transaction.get(postRef);
        if (!snapshot.exists()) {
          throw new Error('Post no longer exists');
        }
        
        const remoteReactions = { ...(snapshot.data()?.reactions || {}) };
        
        // Migrate legacy likes data if present
        if (!snapshot.data()?.reactions && Array.isArray(snapshot.data()?.likes)) {
          snapshot.data().likes.forEach(legacyUserId => {
            if (legacyUserId !== userId && !remoteReactions[legacyUserId]) {
              remoteReactions[legacyUserId] = {
                postId,
                userId: legacyUserId,
                reactionType: 'like',
                createdAt: serverTimestamp(),
              };
            }
          });
        }
        
        // Apply user's reaction
        if (nextType) {
          remoteReactions[userId] = { postId, userId, reactionType: nextType, createdAt: serverTimestamp() };
        } else {
          delete remoteReactions[userId];
        }
        
        transaction.update(postRef, { reactions: remoteReactions });
      });
      
      console.log('[Community] Reaction saved successfully');

    } catch (error) {
      console.error('[Community] Reaction save error:', error);
      // Rollback optimistic update
      post.reactions = oldReactions;
      render();
      status.textContent = error.message?.includes('no longer exists') 
        ? 'Post was deleted. Refreshing...'
        : 'Could not save your reaction. Please try again.';
      setTimeout(() => { status.textContent = ''; }, 3000);
    } finally {
      delete reactionPendingUpdates[updateKey];
    }
    
  } else if (reaction === 'comment') {
    const post = postItems.find(p => p.id === postId);
    if (!post) return;
    showComments(post);
  }
};

const showReactionDetails = (post, reactionDataElement) => {
  if (!profileModal || !profileBody) return;

  const summary = reactionSummary(post);
  
  // Create tabs for each reaction type
  const tabs = reactionOptions.filter(option => summary.countByType?.[option.type] > 0).map((option, idx) => {
    const count = summary.countByType?.[option.type] || 0;
    return `<button type="button" class="reaction-modal-tab ${idx === 0 ? 'active' : ''}" data-reaction-type="${option.type}" title="${option.label}">
      ${option.icon} <span style="margin-left: 4px; font-size: 0.8rem;">${count}</span>
    </button>`;
  }).join('');

  // Create reaction list
  const reactionsByType = {};
  summary.entries.forEach(entry => {
    const type = entry.reactionType || 'like';
    if (!reactionsByType[type]) reactionsByType[type] = [];
    reactionsByType[type].push(entry);
  });

  const firstType = reactionOptions.find(opt => summary.countByType?.[opt.type] > 0)?.type || 'like';
  const reactionsList = (reactionsByType[firstType] || []).map(entry => `
    <div class="reaction-modal-item">
      <div class="reaction-modal-avatar">${initials(entry.userName || 'Member')}</div>
      <div class="reaction-modal-user">
        <span class="reaction-modal-username">${escapeHtml(entry.userName || 'Member')}</span>
        <span class="reaction-modal-presence">${entry.isOnline ? 'Online' : 'Offline'}</span>
      </div>
    </div>
  `).join('');

  profileBody.innerHTML = `
    <div class="comments-panel">
      <button class="modal-close" type="button" data-close-modal><i class="fa-solid fa-xmark"></i></button>
      <h3 style="margin: 0 0 12px; font-size: 1.1rem;">Reactions</h3>
      
      <div class="reaction-modal-tabs">${tabs}</div>
      
      <div class="reaction-modal-content">
        <div class="reaction-modal-list">
          ${reactionsList || '<p class="reaction-modal-empty">No reactions yet</p>'}
        </div>
      </div>
    </div>
  `;

  profileModal.classList.remove('hidden');

  // Handle tab switching
  profileBody.querySelectorAll('.reaction-modal-tab').forEach(tab => {
    tab.addEventListener('click', e => {
      const type = e.currentTarget.dataset.reactionType;
      const list = reactionsByType[type] || [];
      
      profileBody.querySelectorAll('.reaction-modal-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      
      const modalList = profileBody.querySelector('.reaction-modal-list');
      if (!modalList) return;
      
      modalList.innerHTML = list.length > 0 ? list.map(entry => `
        <div class="reaction-modal-item">
          <div class="reaction-modal-avatar">${initials(entry.userName || 'Member')}</div>
          <div class="reaction-modal-user">
            <span class="reaction-modal-username">${escapeHtml(entry.userName || 'Member')}</span>
            <span class="reaction-modal-presence">${entry.isOnline ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      `).join('') : '<p class="reaction-modal-empty">No reactions of this type</p>';
    });
  });
};

// ==================== COMMENTS SYSTEM ====================
const showComments = async (post) => {
  if (!profileModal || !profileBody) return;

  profileBody.innerHTML = `
    <div class="comments-panel">
      <button class="modal-close" type="button" data-close-modal><i class="fa-solid fa-xmark"></i></button>
      <h3>${escapeHtml(post.authorName)}</h3>
      <div class="original-post" style="padding: 12px 0; border-bottom: 1px solid var(--community-line);">
        <p>${escapeHtml(post.text)}</p>
        <small style="color: var(--community-muted);">${relativeTime(post.createdAt)}</small>
      </div>

      <div class="comments-list" id="commentsList" style="margin: 12px 0; max-height: 300px; overflow-y: auto;">
        <p class="comments-empty">Loading comments...</p>
      </div>

      <form id="commentForm" style="margin-top: 12px; display: flex; gap: 8px; border-top: 1px solid var(--community-line); padding-top: 12px;">
        <input id="commentInput" type="text" placeholder="Write a comment..." maxlength="500" style="flex: 1; padding: 8px 12px; border: 1px solid var(--community-line); border-radius: 18px; background: var(--community-panel-2); color: var(--community-text);" required>
        <button type="submit" style="width: 36px; height: 36px; border: 0; border-radius: 50%; background: var(--community-accent); color: #10150b; cursor: pointer;"><i class="fa-solid fa-paper-plane"></i></button>
      </form>
      <p id="commentStatus" style="font-size: 0.75rem; color: var(--community-muted); margin-top: 6px;"></p>
    </div>
  `;

  profileModal.classList.remove('hidden');

  // Load comments after the modal is mounted so the list always has a target.
  await loadComments(post.id);

  // Handle form submission
  const commentForm = profileBody.querySelector('#commentForm');
  const commentInput = profileBody.querySelector('#commentInput');
  const commentStatus = profileBody.querySelector('#commentStatus');

  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const commentText = commentInput.value.trim();
    if (!commentText) return;

    if (!currentUser) {
      commentStatus.textContent = 'Sign in to comment';
      return;
    }

    commentStatus.textContent = 'Posting...';
    commentForm.querySelector('button').disabled = true;

    try {
      const { addDoc, collection, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
      );

      await addDoc(collection(db, 'communityPosts', post.id, 'comments'), {
        text: commentText,
        authorName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member',
        avatarUrl: currentUser.photoURL || '',
        authorUid: currentUser.uid,
        parentId: post.id,
        parentName: post.authorName,
        createdAt: serverTimestamp()
      });

      commentInput.value = '';
      commentStatus.textContent = '';
      loadComments(post.id); // Reload comments

    } catch (error) {
      console.error('[Community] Comment error:', error);
      commentStatus.textContent = 'Failed to post comment';
    } finally {
      commentForm.querySelector('button').disabled = false;
    }
  });
};

const loadComments = async (postId) => {
  try {
    const { collection, query, orderBy, getDocs } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    const commentsQuery = query(
      collection(db, 'communityPosts', postId, 'comments'),
      orderBy('createdAt', 'asc')
    );

    const snapshot = await getDocs(commentsQuery);
    const comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const commentsList = profileBody.querySelector('#commentsList');
    if (!commentsList) return;

    if (comments.length === 0) {
      commentsList.innerHTML = '<p class="comments-empty">No comments yet. Be first!</p>';
      return;
    }

    commentsList.innerHTML = comments.map(comment => `
      <div class="community-comment" data-comment-id="${escapeHtml(comment.id)}" style="display: flex; gap: 8px; padding: 8px; background: var(--community-panel-2); border-radius: 8px; margin-bottom: 6px;">
        <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--community-accent); color: #10150b; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 800; flex-shrink: 0;">
          ${comment.avatarUrl ? `<img src="${escapeHtml(comment.avatarUrl)}" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">` : initials(comment.authorName)}
        </div>
        <div style="flex: 1; min-width: 0;">
          <strong>${escapeHtml(comment.authorName || 'Member')}</strong>
          <time style="color: var(--community-muted); font-size: 0.65rem; margin-left: 4px;">${relativeTime(comment.createdAt)}</time>
          <p style="margin: 4px 0 0; font-size: 0.75rem; word-wrap: break-word;">${escapeHtml(comment.text)}</p>
          <div style="display: flex; gap: 12px; margin-top: 4px;">
            <button class="comment-like-btn" data-comment-id="${escapeHtml(comment.id)}" data-post-id="${escapeHtml(postId)}" style="border: 0; background: transparent; color: var(--community-muted); font-size: 0.7rem; cursor: pointer;">👍 Like</button>
            ${currentUser?.uid === comment.authorUid ? `<button class="comment-edit-btn" data-comment-id="${escapeHtml(comment.id)}" data-post-id="${escapeHtml(postId)}" style="border: 0; background: transparent; color: var(--community-muted); font-size: 0.7rem; cursor: pointer;">✏️ Edit</button><button class="comment-delete" data-comment-id="${escapeHtml(comment.id)}" data-post-id="${escapeHtml(postId)}" style="border: 0; background: transparent; color: var(--community-muted); font-size: 0.7rem; cursor: pointer;">🗑️ Delete</button>` : ''}
          </div>
        </div>
      </div>
    `).join('');

    // Add like handlers
    commentsList.querySelectorAll('.comment-like-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const commentId = e.target.dataset.commentId;
        const pId = e.target.dataset.postId;
        if (!commentId || !pId) return;

        try {
          const { doc, getDoc, updateDoc } = await import(
            'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
          );

          const commentRef = doc(db, 'communityPosts', pId, 'comments', commentId);
          const commentSnap = await getDoc(commentRef);
          const commentData = commentSnap.data();

          if (!commentData) return;

          const likes = commentData.likes || [];
          const userLiked = likes.includes(currentUser.uid);
          const newLikes = userLiked ? likes.filter(uid => uid !== currentUser.uid) : [...likes, currentUser.uid];

          await updateDoc(commentRef, { likes: newLikes });
          
          // Update UI
          btn.textContent = userLiked ? '👍 Like' : '👍 Liked';
          btn.style.color = userLiked ? 'var(--community-muted)' : '#67cdaa';

          showToast(userLiked ? 'Like removed' : 'Like added', 'success');
        } catch (error) {
          console.error('[Community] Like comment error:', error);
          showToast('Failed to like comment', 'error');
        }
      });
    });

    // Add edit handlers
    commentsList.querySelectorAll('.comment-edit-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const commentId = e.target.dataset.commentId;
        const pId = e.target.dataset.postId;
        if (!commentId || !pId) return;

        try {
          const { doc, getDoc, updateDoc, serverTimestamp } = await import(
            'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
          );

          const commentRef = doc(db, 'communityPosts', pId, 'comments', commentId);
          const commentSnap = await getDoc(commentRef);
          const commentData = commentSnap.data();

          if (!commentData) return;

          const newText = prompt('Edit comment:', commentData.text);
          if (!newText?.trim()) return;

          await updateDoc(commentRef, {
            text: newText.trim().slice(0, 500),
            editedAt: serverTimestamp()
          });

          loadComments(pId); // Reload to show update
          showToast('Comment updated', 'success');
        } catch (error) {
          console.error('[Community] Edit comment error:', error);
          showToast('Failed to edit comment', 'error');
        }
      });
    });

    // Add delete handlers
    commentsList.querySelectorAll('.comment-delete').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const commentId = e.target.dataset.commentId;
        const pId = e.target.dataset.postId;
        if (!commentId || !pId) return;

        if (!confirm('Delete this comment?')) return;

        try {
          const { deleteDoc, doc } = await import(
            'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
          );

          await deleteDoc(doc(db, 'communityPosts', pId, 'comments', commentId));
          loadComments(pId); // Reload
          showToast('Comment deleted', 'success');
        } catch (error) {
          console.error('[Community] Delete comment error:', error);
          showToast('Failed to delete comment', 'error');
        }
      });
    });

  } catch (error) {
    console.error('[Community] Load comments error:', error);
    const commentsList = profileBody.querySelector('#commentsList');
    if (commentsList) {
      commentsList.innerHTML = '<p class="comments-empty">Failed to load comments</p>';
    }
  }
};

// ==================== MESSAGING HANDLER ====================
const openMessages = (target) => {
  if (!currentUser) {
    status.textContent = 'Sign in to message';
    return;
  }

  if (currentUser.uid === target.uid) {
    status.textContent = 'You cannot message yourself.';
    return;
  }

  console.log('[Community] Opening message with:', target);
  messageTarget = target;
  
  // Update modal header
  const messageTitle = document.getElementById('messageModalTitle');
  const messageAvatar = document.getElementById('messageAvatar');
  const messagePresence = document.getElementById('messagePresence');
  
  if (messageTitle) messageTitle.textContent = target.name || 'Personal Chat';
  if (messageAvatar) messageAvatar.textContent = initials(target.name);
  if (messagePresence) messagePresence.textContent = 'Offline';
  
  messageModal.classList.remove('hidden');
  messageText?.focus();
  loadMessages(target);
};

// ==================== AUTH ====================
const updateIdentity = (user) => {
  currentUser = user;
  const myProfileLink = document.getElementById('myProfileLink');
  const mobileProfileButton = document.getElementById('mobileProfileButton');
  const mobileBottomProfile = document.getElementById('mobileBottomProfile');
  const desktopProfileLink = document.getElementById('desktopProfileLink');
  const communityUserCard = document.getElementById('communityUserCard');
  const communityUserAvatar = document.getElementById('communityUserAvatar');
  const communityUserCardName = document.getElementById('communityUserCardName');
  const communityUserCardMeta = document.getElementById('communityUserCardMeta');
  if (user) {
    const profileHref = `user-profile.html?uid=${encodeURIComponent(user.uid)}`;
    if (myProfileLink) myProfileLink.href = profileHref;
    if (mobileProfileButton) mobileProfileButton.href = profileHref;
    if (mobileBottomProfile) mobileBottomProfile.href = profileHref;
    if (desktopProfileLink) desktopProfileLink.href = profileHref;
  }
  if (user) {
    avatar.innerHTML = user.photoURL ? `<img src="${escapeHtml(user.photoURL)}" alt="">` : initials(user.displayName || user.email);
    identity.textContent = user.displayName || user.email?.split('@')[0] || 'Member';
    if (communityUserCard) communityUserCard.classList.remove('hidden');
    if (communityUserAvatar) {
      communityUserAvatar.innerHTML = user.photoURL ? `<img src="${escapeHtml(user.photoURL)}" alt="">` : initials(user.displayName || user.email);
    }
    if (communityUserCardName) {
      communityUserCardName.textContent = user.displayName || user.email?.split('@')[0] || 'Member';
    }
    if (communityUserCardMeta) {
      communityUserCardMeta.textContent = `@${(user.displayName || user.email?.split('@')[0] || 'member').toLowerCase().replace(/\s+/g, '')}`;
    }
    text.disabled = false;
    postButton.disabled = false;
    signInButton.style.display = 'none';
  } else {
    if (communityUserCard) communityUserCard.classList.add('hidden');
    avatar.textContent = 'S';
    identity.textContent = 'Sign in to share with the community';
    text.disabled = true;
    postButton.disabled = true;
    signInButton.style.display = 'block';
  }
};

// ==================== EVENT LISTENERS ====================
postButton.addEventListener('click', async () => {
  if (!currentUser) {
    status.textContent = 'Please sign in to post.';
    return;
  }

  const postText = text.value.trim();
  if (!postText && !previewUrl) {
    status.textContent = 'Write something to share.';
    return;
  }

  postButton.disabled = true;
  status.textContent = 'Posting...';

  try {
    const { addDoc, collection, serverTimestamp } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    await addDoc(collection(db, 'communityPosts'), {
      text: postText,
      imageData: previewUrl || '',
      authorUid: currentUser.uid,
      authorName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member',
      avatarUrl: currentUser.photoURL || '',
      authorIsAdmin: currentUser.email === 'mdsiamahmmedloselovestroy@gmail.com',
      createdAt: serverTimestamp(),
      reactions: {},
    });

    text.value = '';
    previewUrl = '';
    imagePreview.classList.add('hidden');
    status.textContent = 'Post shared!';
    setTimeout(() => { status.textContent = ''; }, 2000);

  } catch (error) {
    console.error('[Community] Post error:', error);
    status.textContent = 'Failed to post. Try again.';
  } finally {
    postButton.disabled = false;
  }
});

signInButton.addEventListener('click', () => {
  signInWithGoogle();
});

// Image upload
imageInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (file.size > 5000000) {
    status.textContent = 'Image too large (max 5MB)';
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    previewUrl = reader.result;
    imagePreviewPhoto.src = previewUrl;
    imagePreview.classList.remove('hidden');
  };
  reader.readAsDataURL(file);
});

removePostImage.addEventListener('click', () => {
  previewUrl = '';
  imageInput.value = '';
  imagePreview.classList.add('hidden');
});

// ==================== MESSAGE FORM SUBMISSION ====================
const loadMessages = async (target) => {
  if (!currentUser || !target) return;

  try {
    const { collection, query, orderBy, limit, getDocs, onSnapshot, doc } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    const conversationId = [currentUser.uid, target.uid].sort().join('_');

    // Load message history
    const messagesQuery = query(
      collection(db, 'directMessages', conversationId, 'messages'),
      orderBy('createdAt', 'asc'),
      limit(100)
    );

    const snapshot = await getDocs(messagesQuery);
    const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    renderMessages(messages, target.uid);

    // Set up real-time listener
    if (stopMessages) stopMessages();
    stopMessages = onSnapshot(messagesQuery, (snapshot) => {
      const updatedMessages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      renderMessages(updatedMessages, target.uid);
    });

  } catch (error) {
    console.error('[Community] Load messages error:', error);
    messageList.innerHTML = '<p class="comments-empty">Failed to load messages. Please try again.</p>';
  }
};

const renderMessages = (messages, otherUid) => {
  if (messages.length === 0) {
    messageList.innerHTML = '<p class="comments-empty">No messages yet. Say hello! 👋</p>';
    return;
  }

  messageList.innerHTML = messages.map(msg => {
    const isOwn = msg.senderId === currentUser.uid;
    const time = new Date(msg.createdAt?.toDate?.() || msg.createdAt).toLocaleTimeString('en-BD', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    });
    return `<div class="private-message ${isOwn ? 'mine' : ''}">
      <p>${escapeHtml(msg.text)}</p>
      <time style="font-size: 0.65rem; opacity: 0.7; margin-top: 4px; display: block;">${time}</time>
    </div>`;
  }).join('');

  // Auto-scroll to bottom
  setTimeout(() => {
    messageList.scrollTop = messageList.scrollHeight;
  }, 50);
};

messageForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!currentUser || !messageTarget) return;

  const msgText = messageText.value.trim();
  if (!msgText) return;

  const messageStatus = document.getElementById('messageStatus');
  messageStatus.textContent = 'Sending...';

  try {
    const { collection, addDoc, doc, setDoc, serverTimestamp } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );

    const conversationId = [currentUser.uid, messageTarget.uid].sort().join('_');

    // Create conversation if it doesn't exist
    const conversationRef = doc(db, 'directConversations', conversationId);
    await setDoc(conversationRef, {
      participants: [currentUser.uid, messageTarget.uid],
      participantNames: {
        [currentUser.uid]: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member',
        [messageTarget.uid]: messageTarget.name || 'Member'
      },
      participantAvatars: {
        [currentUser.uid]: currentUser.photoURL || '',
        [messageTarget.uid]: messageTarget.avatar || ''
      },
      lastMessage: msgText,
      updatedAt: serverTimestamp()
    }, { merge: true });

    // Add message
    await addDoc(collection(db, 'directMessages', conversationId, 'messages'), {
      senderId: currentUser.uid,
      receiverId: messageTarget.uid,
      text: msgText,
      createdAt: serverTimestamp(),
      reactions: {}
    });

    messageText.value = '';
    messageStatus.textContent = '';

  } catch (error) {
    console.error('[Community] Message error:', error);
    messageStatus.textContent = 'Failed to send. Try again.';
  }
});

const fallbackStoryAvatar = (author = 'Member') => {
  const initialsText = initials(author);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#667eea"/>
      <text x="50" y="55" font-size="50" text-anchor="middle" fill="#ffffff" font-weight="bold" font-family="Arial, sans-serif">${initialsText}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const renderStoryStrip = (storyList) => {
  if (!storiesStrip) return;
  const createStoryButton = `
    <button type="button" class="story-create-btn" id="storyCreateButton" aria-label="Create a story">
      <i class="fa-solid fa-plus"></i>
      <span>Create</span>
    </button>
  `;

  const storyCards = storyList.map(story => {
    const author = story.authorName || 'Member';
    const avatar = story.avatarUrl || fallbackStoryAvatar(author);
    const isOwner = currentUser?.uid === story.authorUid;
    const storyMediaUrl = story.mediaUrl || story.imageData || '';
    const preview = story.type === 'image' && storyMediaUrl ? `<img src="${escapeHtml(storyMediaUrl)}" alt="" class="story-preview-image">` : `<span class="story-preview-text">${escapeHtml(story.content || 'New update')}</span>`;
    return `
      <article class="story-card" data-story-id="${escapeHtml(story.id)}" aria-label="Open story from ${escapeHtml(author)}">
        <div class="story-image-wrapper">
          ${preview}
          <img src="${escapeHtml(avatar)}" alt="${escapeHtml(author)} story" class="story-avatar story-card-avatar">
        </div>
        <div class="story-info">
          <p class="story-name">${escapeHtml(author)}</p>
          <p class="story-time">${relativeTime(story.createdAt)}</p>
        </div>
        ${isOwner ? `<div class="story-card-menu"><button type="button" class="story-menu-toggle" aria-label="Story options" title="Story options"><i class="fa-solid fa-ellipsis"></i></button><div class="story-menu"><button type="button" data-story-action="edit"><i class="fa-solid fa-pen"></i> Edit</button><button type="button" data-story-action="delete"><i class="fa-regular fa-trash-can"></i> Delete</button></div></div>` : ''}
      </article>
    `;
  }).join('');

  storiesStrip.innerHTML = createStoryButton + storyCards;

  const createButton = document.getElementById('storyCreateButton');
  createButton?.addEventListener('click', () => {
    if (!currentUser) {
      status.textContent = 'Sign in to create a story.';
      return;
    }
    resetStoryComposer();
    storyStatus.textContent = '';
    storyStatus.className = 'form-status';
    storyCreatorModal?.classList.remove('hidden');
  });

  storiesStrip.querySelectorAll('[data-story-id]').forEach(card => {
    card.addEventListener('click', event => {
      if (event.target.closest('.story-card-menu')) return;
      const storyId = card.getAttribute('data-story-id');
      if (!storyId) return;
      const story = storyList.find(item => item.id === storyId);
      if (!story) return;
      openStoryViewer(storyList, storyList.indexOf(story));
    });
    card.querySelector('.story-menu-toggle')?.addEventListener('click', event => {
      event.stopPropagation();
      card.classList.toggle('menu-open');
    });
    card.querySelector('[data-story-action="edit"]')?.addEventListener('click', event => {
      event.stopPropagation();
      const story = storyList.find(item => item.id === card.dataset.storyId);
      if (story) openStoryEditor(story);
    });
    card.querySelector('[data-story-action="delete"]')?.addEventListener('click', async event => {
      event.stopPropagation();
      const story = storyList.find(item => item.id === card.dataset.storyId);
      if (!story || !confirm(`Delete your story? This cannot be undone.`)) return;
      try {
        const { deleteStory } = await import('./story-manager.js?v=20260902-story-ui-1');
        await deleteStory(story.id);
        await loadStoryStrip();
      } catch (error) {
        storyStatus.textContent = error.message || 'Story could not be deleted.';
      }
    });
  });
};

const loadStoryStrip = async () => {
  if (!storiesStrip) return;
  try {
    const { getActiveStories } = await import('./story-manager.js?v=20260902-story-ui-1');
    const stories = await getActiveStories();
    renderStoryStrip(stories || []);
  } catch (error) {
    console.error('[Community] Story strip error:', error);
    storiesStrip.innerHTML = '<button type="button" class="story-create-btn" id="storyCreateButton"><i class="fa-solid fa-plus"></i><span>Create</span></button>';
  }
};

const openStoryViewer = (storyList, selectedIndex) => {
  if (!storyList || !storyList.length) return;
  const story = storyList[selectedIndex];
  const viewer = document.createElement('div');
  viewer.className = 'story-viewer-modal community-modal';
  const authorName = story.authorName || 'Member';
  const avatarUrl = story.avatarUrl || fallbackStoryAvatar(authorName);

  viewer.innerHTML = `
    <div class="story-viewer-wrapper">
      <button class="story-close-btn" type="button" aria-label="Close story"><i class="fa-solid fa-xmark"></i></button>
      <div class="story-viewer-content-area">
        <div class="story-viewer-header">
          <img class="story-viewer-avatar" src="${escapeHtml(avatarUrl)}" alt="${escapeHtml(authorName)} avatar" onerror="this.src='${fallbackStoryAvatar(authorName)}'">
          <div>
            <strong>${escapeHtml(authorName)}</strong>
            <small>${relativeTime(story.createdAt)}</small>
          </div>
        </div>
        <div class="story-viewer-body">
          ${story.type === 'image' && (story.mediaUrl || story.imageData)
            ? `<img src="${escapeHtml(story.mediaUrl || story.imageData)}" alt="Story image" class="story-viewer-image">`
            : `<div class="story-viewer-text"><span>${escapeHtml(story.category || 'learning')}</span><p>${escapeHtml(story.content || 'A new story update')}</p></div>`}
          ${story.music?.videoId ? `<a class="story-music-sticker" href="https://www.youtube.com/watch?v=${encodeURIComponent(story.music.videoId)}&t=${Math.max(0, Number(story.music.start) || 0)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-music"></i> ${escapeHtml(story.music.title || 'Music')}</a>` : ''}
        </div>
      </div>
      <button class="story-nav-btn prev" type="button" aria-label="Previous story"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="story-nav-btn next" type="button" aria-label="Next story"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  `;

  const close = () => viewer.remove();
  viewer.querySelector('.story-close-btn')?.addEventListener('click', close);
  viewer.querySelector('.story-nav-btn.prev')?.addEventListener('click', () => {
    const nextIndex = (selectedIndex - 1 + storyList.length) % storyList.length;
    viewer.remove();
    openStoryViewer(storyList, nextIndex);
  });
  viewer.querySelector('.story-nav-btn.next')?.addEventListener('click', () => {
    const nextIndex = (selectedIndex + 1) % storyList.length;
    viewer.remove();
    openStoryViewer(storyList, nextIndex);
  });
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) close();
  });
  document.body.appendChild(viewer);
};

const storyTabButtons = document.querySelectorAll('.story-tab-btn');
const storyTabPanes = document.querySelectorAll('[data-story-pane]');
if (storyTabButtons.length && storyTabPanes.length) {
  storyTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.storyTab;
      storyTabButtons.forEach(tab => tab.classList.toggle('active', tab === btn));
      storyTabPanes.forEach(pane => pane.classList.toggle('active', pane.dataset.storyPane === target));
    });
  });
}

if (storyTextInput) {
  storyTextInput.addEventListener('input', () => {
    storyTextCount.textContent = `${storyTextInput.value.length}/280`;
  });
}

if (storyImagePicker && storyImageInput) {
  storyImagePicker.addEventListener('click', () => storyImageInput.click());
}

if (storyImageInput) {
  storyImageInput.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    storyDraftImageFile = file;
    storyImageFileName.textContent = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      storyDraftImageUrl = String(reader.result || '');
      storyImagePreviewPhoto.src = storyDraftImageUrl;
      storyImagePreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  });
}

const resetStoryComposer = () => {
  editingStory = null;
  const title = document.getElementById('storyCreatorModalTitle');
  const submit = storyCreateForm?.querySelector('button[type="submit"]');
  if (title) title.textContent = 'Create story';
  if (submit) submit.textContent = 'Post story';
  storyCreateForm?.reset();
  storyDraftImageUrl = '';
  storyDraftImageFile = null;
  storyDraftMusic = null;
  storyImagePreview?.classList.add('hidden');
  storyMusicSummary?.setAttribute('hidden', '');
  storyRemoveMusicButton?.setAttribute('hidden', '');
  storyTabButtons.forEach(tab => tab.classList.toggle('active', tab.dataset.storyTab === 'text'));
  storyTabPanes.forEach(pane => pane.classList.toggle('active', pane.dataset.storyPane === 'text'));
  if (storyTextCount) storyTextCount.textContent = '0/280';
};

const openStoryEditor = story => {
  if (!currentUser || currentUser.uid !== story.authorUid) return;
  editingStory = story;
  const title = document.getElementById('storyCreatorModalTitle');
  const submit = storyCreateForm?.querySelector('button[type="submit"]');
  if (title) title.textContent = 'Edit story';
  if (submit) submit.textContent = 'Save changes';
  storyTextInput.value = story.content || '';
  storyTextCount.textContent = `${storyTextInput.value.length}/280`;
  storyCategorySelect.value = story.category || 'learning';
  storyDraftMusic = story.music || null;
  if (storyDraftMusic) {
    storyMusicSummary.textContent = `🎵 ${storyDraftMusic.title || 'Music'}`;
    storyMusicSummary.hidden = false;
    storyRemoveMusicButton.hidden = false;
  }
  const tab = story.type === 'image' ? 'image' : 'text';
  storyTabButtons.forEach(button => button.classList.toggle('active', button.dataset.storyTab === tab));
  storyTabPanes.forEach(pane => pane.classList.toggle('active', pane.dataset.storyPane === tab));
  const storyMediaUrl = story.mediaUrl || story.imageData || '';
  if (story.type === 'image' && storyMediaUrl) {
    storyDraftImageUrl = storyMediaUrl;
    storyImagePreviewPhoto.src = storyMediaUrl;
    storyImagePreview.classList.remove('hidden');
    storyImageFileName.textContent = 'Current photo';
  }
  storyStatus.textContent = '';
  storyCreatorModal?.classList.remove('hidden');
};

storyAddMusicButton?.addEventListener('click', () => {
  storyMusicStatus.textContent = '';
  storyMusicQuery.value = '';
  storyMusicUrl.value = '';
  storyMusicResults.innerHTML = '<p class="comments-empty">Search for a song or paste a YouTube link.</p>';
  storyMusicModal?.classList.remove('hidden');
  storyMusicQuery.focus();
});

storyMusicSearchForm?.addEventListener('submit', event => {
  event.preventDefault();
  const queryText = storyMusicQuery.value.trim();
  if (queryText) searchMusic(queryText);
});

storyMusicUrlForm?.addEventListener('submit', event => {
  event.preventDefault();
  const videoId = extractYoutubeId(storyMusicUrl.value);
  if (!videoId) {
    storyMusicStatus.textContent = 'Paste a valid YouTube video, Shorts, or youtu.be link.';
    return;
  }
  openMusicEditor({ videoId, url: storyMusicUrl.value.trim(), title: 'YouTube music', channel: '', thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` });
});

storyMusicRecentButton?.addEventListener('click', () => showMusicCollection(getRecentMusic()));
storyMusicTrendingButton?.addEventListener('click', () => searchMusic('popular music'));

storyMusicStart?.addEventListener('input', () => {
  storyMusicStartLabel.textContent = musicTime(Number(storyMusicStart.value));
});

storyMusicPreviewButton?.addEventListener('click', () => {
  if (!storyMusicSelection) return;
  const start = Number(storyMusicStart.value);
  const duration = Math.min(30, Math.max(1, storyMusicSelection.duration - start));
  storyMusicPreview.innerHTML = `<iframe title="Music preview" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(storyMusicSelection.videoId)}?start=${start}&end=${start + Math.floor(duration)}&autoplay=1&playsinline=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  storyMusicPreview.hidden = false;
});

storyMusicConfirmButton?.addEventListener('click', () => {
  if (!storyMusicSelection) return;
  const start = Number(storyMusicStart.value);
  storyDraftMusic = {
    videoId: storyMusicSelection.videoId,
    url: storyMusicSelection.url || `https://www.youtube.com/watch?v=${storyMusicSelection.videoId}`,
    title: storyMusicSelection.title || 'YouTube music',
    channel: storyMusicSelection.channel || '',
    start,
    duration: Math.min(30, Math.max(1, storyMusicSelection.duration - start))
  };
  const recent = [storyDraftMusic, ...getRecentMusic().filter(item => item.videoId !== storyDraftMusic.videoId)].slice(0, 6);
  localStorage.setItem('recentMusic', JSON.stringify(recent));
  storyMusicSummary.textContent = `🎵 ${storyDraftMusic.title}`;
  storyMusicSummary.hidden = false;
  storyRemoveMusicButton.hidden = false;
  storyMusicEditorModal?.classList.add('hidden');
});

storyRemoveMusicButton?.addEventListener('click', () => {
  storyDraftMusic = null;
  storyMusicSummary.hidden = true;
  storyRemoveMusicButton.hidden = true;
});

storyMusicSummary?.addEventListener('pointerdown', event => {
  const startX = event.clientX;
  const startY = event.clientY;
  const startLeft = storyMusicSummary.offsetLeft;
  const startTop = storyMusicSummary.offsetTop;
  const move = moveEvent => {
    storyMusicSummary.style.transform = `translate(${moveEvent.clientX - startX + startLeft}px, ${moveEvent.clientY - startY + startTop}px)`;
  };
  const stop = () => { document.removeEventListener('pointermove', move); document.removeEventListener('pointerup', stop); };
  document.addEventListener('pointermove', move);
  document.addEventListener('pointerup', stop, { once: true });
});

document.querySelector('[data-close-music-modal]')?.addEventListener('click', () => storyMusicModal?.classList.add('hidden'));
document.querySelector('[data-close-music-editor]')?.addEventListener('click', () => storyMusicEditorModal?.classList.add('hidden'));

if (storyCreateForm) {
  storyCreateForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!currentUser) {
      storyStatus.textContent = 'Sign in to create a story.';
      storyStatus.className = 'form-status error';
      return;
    }

    const activeTab = document.querySelector('.story-tab-btn.active')?.dataset.storyTab || 'text';
    const storyText = storyTextInput?.value.trim() || '';
    const categoryValue = storyCategorySelect?.value || 'learning';

    try {
      const { createStory, updateStory, uploadStoryImage } = await import('./story-manager.js?v=20260902-story-ui-1');
      storyStatus.textContent = 'Posting story...';
      storyStatus.className = 'form-status';

      if (editingStory) {
        let mediaUrl = editingStory.mediaUrl || editingStory.imageData || '';
        if (storyDraftImageFile) mediaUrl = await uploadStoryImage(storyDraftImageFile);
        await updateStory(editingStory.id, { type: activeTab === 'image' ? 'image' : 'text', text: storyText || 'New update', content: storyText || 'New update', mediaUrl, imageData: mediaUrl, category: categoryValue, music: storyDraftMusic || editingStory.music });
      } else if (activeTab === 'image') {
        if (!storyDraftImageFile) {
          throw new Error('Please choose a photo for your story.');
        }
        const mediaUrl = await uploadStoryImage(storyDraftImageFile);
        await createStory({ type: 'image', text: storyText || 'New update', content: storyText || 'New update', mediaUrl, imageData: mediaUrl, category: categoryValue, music: storyDraftMusic });
      } else {
        if (!storyText) {
          throw new Error('Write a short story update first.');
        }
        await createStory({ type: 'text', text: storyText, content: storyText, category: categoryValue, music: storyDraftMusic });
      }

      storyStatus.textContent = editingStory ? 'Story updated successfully!' : 'Story posted successfully!';
      storyStatus.className = 'form-status success';
      storyCreateForm.reset();
      storyTextCount.textContent = '0/280';
      storyDraftImageUrl = '';
      storyDraftImageFile = null;
      storyImageFileName.textContent = 'No photo selected';
      storyImagePreview.classList.add('hidden');
      storyImageInput.value = '';
      storyDraftMusic = null;
      storyMusicSummary.hidden = true;
      storyRemoveMusicButton.hidden = true;
      setTimeout(() => {
        storyCreatorModal?.classList.add('hidden');
        resetStoryComposer();
        storyStatus.textContent = '';
        storyStatus.className = 'form-status';
        loadStoryStrip();
      }, 800);
    } catch (error) {
      storyStatus.textContent = error.message || 'Failed to post story.';
      storyStatus.className = 'form-status error';
    }
  });
}

document.addEventListener('click', e => {
  const createButton = e.target.closest('[data-mobile-create]');
  if (createButton) {
    e.preventDefault();
    text?.focus({ preventScroll: true });
    document.querySelector('.composer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const closeButton = e.target.closest('[data-close-modal]');
  if (!closeButton) return;

  profileModal.classList.add('hidden');
  messageModal.classList.add('hidden');
  storyCreatorModal?.classList.add('hidden');
  if (stopMessages) {
    stopMessages();
    stopMessages = null;
  }
});

// ==================== INITIALIZATION ====================
async function init() {
  console.log('[Community] Initializing...');

  if (!db) {
    showError('Community database not configured');
    return;
  }

  // Set up event delegation listeners (one-time setup)
  initializeEventDelegation();

  // Set up auth observer
  observeAuthState(updateIdentity);

  // Load stories and posts
  await loadStoryStrip();
  loadPosts();
}

// Start!
init();
console.log('[Community] Module ready');
