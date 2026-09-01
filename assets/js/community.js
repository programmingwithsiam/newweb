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
  { type: 'wow', icon: '😮', label: 'Wow' },
  { type: 'celebrate', icon: '🎉', label: 'Celebrate' },
  { type: 'fire', icon: '🔥', label: 'Fire' },
  { type: 'helpful', icon: '💡', label: 'Helpful' },
];

const reactionByType = type => reactionOptions.find(option => option.type === type);

const reactionEntries = post => Object.values(post.reactions || {}).filter(reaction => reaction?.reactionType);

const reactionSummary = post => {
  const entries = reactionEntries(post);
  if (post.reactions && typeof post.reactions === 'object') {
    return { entries, count: entries.length };
  }
  const representedUsers = new Set(entries.map(reaction => reaction.userId));
  const legacyEntries = (post.likes || [])
    .filter(userId => !representedUsers.has(userId))
    .map(userId => ({ userId, reactionType: 'like' }));
  if (legacyEntries.length) {
    return { entries: [...entries, ...legacyEntries], count: entries.length + legacyEntries.length };
  }
  return { entries, count: entries.length };
};

const normalizePost = snapshot => {
  const data = snapshot.data();
  return { id: snapshot.id, ...data, authorId: data.authorId || data.authorUid, imageUrl: data.imageUrl || data.imageData };
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
    const reactionIcons = usedTypes.map(type => reactionByType(type)?.icon).filter(Boolean).join(' ');
    const picker = reactionOptions.map(option => `
      <button type="button" class="reaction-choice ${currentReaction === option.type ? 'is-selected' : ''}" data-reaction="${option.type}" title="${option.label}" aria-label="${option.label}">${option.icon}<span>${option.label}</span></button>
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
      <div class="post-reactions ${summary.count ? '' : 'hidden'}">
        <span class="reaction-icons" aria-hidden="true">${escapeHtml(reactionIcons)}</span>
        <button type="button" class="reaction-count" data-show-reactions aria-label="Show reaction details">${summary.count} ${summary.count === 1 ? 'reaction' : 'reactions'}</button>
      </div>
      <div class="post-actions">
        <div class="reaction-wrap">
          <button type="button" class="reaction-btn ${currentReaction ? 'is-reacted' : ''}" data-reaction="like" title="Like"><span class="reaction-main-icon">${currentReaction ? reactionByType(currentReaction)?.icon : '👍'}</span> <span class="reaction-main-label">${currentReaction ? reactionByType(currentReaction)?.label : 'Like'}</span></button>
          <div class="reaction-picker" role="menu" aria-label="Choose a reaction">${picker}</div>
        </div>
        <button type="button" class="reaction-btn" data-reaction="comment" title="Comment"><i class="fa-regular fa-comment"></i> Comment</button>
        ${currentUser ? `<button type="button" class="message-btn" data-post-author-id="${escapeHtml(post.authorId)}" data-post-author-name="${escapeHtml(post.authorName)}"><i class="fa-regular fa-envelope"></i> Message</button>` : ''}
      </div>
    </article>`;
  }).join('');

  count.textContent = `${postItems.length} posts · realtime`;

  // Attach event listeners
  feed.querySelectorAll('[data-profile-uid]').forEach(btn => {
    btn.addEventListener('click', e => {
      const uid = e.currentTarget.dataset.profileUid;
      if (uid) window.location.href = `user-profile.html?uid=${escapeHtml(uid)}`;
    });
  });

  feed.querySelectorAll('[data-reaction]').forEach(btn => {
    btn.addEventListener('click', e => {
      const wrapper = e.currentTarget.closest('.reaction-wrap');
      if (wrapper?.dataset.longPress === 'true') {
        delete wrapper.dataset.longPress;
        return;
      }
      handleReaction(e.currentTarget, e.target.closest('[data-post-id]').dataset.postId);
    });
  });

  feed.querySelectorAll('.reaction-wrap').forEach(wrapper => {
    let closeTimer;
    const picker = wrapper.querySelector('.reaction-picker');
    const open = () => { clearTimeout(closeTimer); picker.classList.add('is-open'); };
    const close = () => { closeTimer = setTimeout(() => picker.classList.remove('is-open'), 160); };
    wrapper.addEventListener('mouseenter', open);
    wrapper.addEventListener('mouseleave', close);
    let pressTimer;
    wrapper.querySelector('.reaction-btn').addEventListener('touchstart', () => {
      pressTimer = setTimeout(() => {
        wrapper.dataset.longPress = 'true';
        open();
      }, 450);
    }, { passive: true });
    wrapper.addEventListener('touchend', () => clearTimeout(pressTimer), { passive: true });
  });

  feed.querySelectorAll('[data-post-action]').forEach(btn => {
    btn.addEventListener('click', e => handlePostAction(e.currentTarget, e.target.closest('[data-post-id]').dataset.postId));
  });

  feed.querySelectorAll('.message-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const authorId = e.currentTarget.dataset.postAuthorId;
      const authorName = e.currentTarget.dataset.postAuthorName;
      if (authorId) openMessages({ uid: authorId, name: authorName });
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
    postItems = snapshot.docs.map(normalizePost);
    console.log(`[Community] Loaded ${postItems.length} posts`);
    render();

    // Set up real-time listener
    onSnapshot(postsQuery, (snapshot) => {
      postItems = snapshot.docs.map(normalizePost);
      console.log(`[Community] Real-time update: ${postItems.length} posts`);
      render();
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
const handleReaction = async (btn, postId) => {
  const reaction = btn.dataset.reaction;

  if (reactionOptions.some(option => option.type === reaction)) {
    if (!currentUser) {
      status.textContent = 'Sign in to react to this post.';
      return;
    }

    const post = postItems.find(p => p.id === postId);
    if (!post) return;

    const userId = currentUser.uid;
    const oldReactions = { ...(post.reactions || {}) };
    const oldReaction = oldReactions[userId] || (post.likes?.includes(userId) ? { reactionType: 'like' } : null);
    const nextType = reaction === 'like' && oldReaction?.reactionType === 'like' ? '' : reaction;
    const nextReactions = { ...oldReactions };
    if (nextType) {
      nextReactions[userId] = { postId, userId, reactionType: nextType, createdAt: new Date() };
    } else {
      delete nextReactions[userId];
    }

    post.reactions = nextReactions;
    render();

    try {
      const { doc, runTransaction, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
      );

      const postRef = doc(db, 'communityPosts', postId);
      await runTransaction(db, async transaction => {
        const snapshot = await transaction.get(postRef);
        const remoteReactions = { ...(snapshot.data()?.reactions || {}) };
        if (!snapshot.data()?.reactions && Array.isArray(snapshot.data()?.likes)) {
          snapshot.data().likes.forEach(legacyUserId => {
            if (legacyUserId !== userId) {
              remoteReactions[legacyUserId] = {
                postId,
                userId: legacyUserId,
                reactionType: 'like',
                createdAt: serverTimestamp(),
              };
            }
          });
        }
        if (nextType) {
          remoteReactions[userId] = { postId, userId, reactionType: nextType, createdAt: serverTimestamp() };
        } else {
          delete remoteReactions[userId];
        }
        transaction.update(postRef, { reactions: remoteReactions });
      });

    } catch (error) {
      console.error('[Community] Reaction error:', error);
      post.reactions = oldReactions;
      render();
      status.textContent = 'Could not save your reaction. Please try again.';
    }
  } else if (reaction === 'comment') {
    const post = postItems.find(p => p.id === postId);
    if (!post) return;
    showComments(post);
  }
};

const handlePostAction = (btn, postId) => {
  console.log('[Community] Post action:', postId);
  const action = btn.dataset.postAction;

  if (action === 'menu') {
    // Show menu options (delete, edit)
    console.log('Post menu for:', postId);
  }
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
          ${currentUser?.uid === comment.authorUid ? `<button class="comment-delete" data-comment-id="${escapeHtml(comment.id)}" style="border: 0; background: transparent; color: var(--community-muted); font-size: 0.65rem; cursor: pointer; margin-top: 4px;">Delete</button>` : ''}
        </div>
      </div>
    `).join('');

    // Add delete handlers
    commentsList.querySelectorAll('.comment-delete').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const commentId = e.target.dataset.commentId;
        if (!confirm('Delete this comment?')) return;

        try {
          const { deleteDoc, doc } = await import(
            'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
          );

          await deleteDoc(doc(db, 'communityPosts', postId, 'comments', commentId));
          loadComments(postId); // Reload
        } catch (error) {
          console.error('[Community] Delete comment error:', error);
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
  messageModal.classList.remove('hidden');
  loadMessages(target);
};

// ==================== AUTH ====================
const updateIdentity = (user) => {
  currentUser = user;
  const myProfileLink = document.getElementById('myProfileLink');
  const mobileProfileButton = document.getElementById('mobileProfileButton');
  const mobileBottomProfile = document.getElementById('mobileBottomProfile');
  if (user) {
    const profileHref = `user-profile.html?uid=${encodeURIComponent(user.uid)}`;
    if (myProfileLink) myProfileLink.href = profileHref;
    if (mobileProfileButton) mobileProfileButton.href = profileHref;
    if (mobileBottomProfile) mobileBottomProfile.href = profileHref;
  }
  if (user) {
    avatar.innerHTML = user.photoURL ? `<img src="${escapeHtml(user.photoURL)}" alt="">` : initials(user.displayName || user.email);
    identity.textContent = user.displayName || user.email?.split('@')[0] || 'Member';
    text.disabled = false;
    postButton.disabled = false;
    signInButton.style.display = 'none';
  } else {
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
    messageList.innerHTML = '<p class="comments-empty">Failed to load messages</p>';
  }
};

const renderMessages = (messages, otherUid) => {
  if (messages.length === 0) {
    messageList.innerHTML = '<p class="comments-empty">No messages yet. Say hello!</p>';
    return;
  }

  messageList.innerHTML = messages.map(msg => `
    <div class="message ${msg.senderId === currentUser.uid ? 'sent' : 'received'}">
      <p>${escapeHtml(msg.text)}</p>
      <time>${new Date(msg.createdAt?.toDate?.() || msg.createdAt).toLocaleTimeString('en-BD', { hour: '2-digit', minute: '2-digit' })}</time>
    </div>
  `).join('');

  // Auto-scroll to bottom
  messageList.scrollTop = messageList.scrollHeight;
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

  // Set up auth observer
  observeAuthState(updateIdentity);

  // Load posts
  loadPosts();
}

// Start!
init();
console.log('[Community] Module ready');
