import { auth, db, storage } from './firebase-init.js';
import { observeAuthState, signInWithGoogle } from './auth.js?v=20260829-auth-fix-1';
import { createStory, uploadStoryImage, getActiveStories, addStoryView, deleteStory, getStoryCategory, renderStoryCard, renderStoryViewer } from './story-manager.js';

const feed = document.getElementById('postFeed');
const text = document.getElementById('postText');
const postButton = document.getElementById('postBtn');
const signInButton = document.getElementById('signInBtn');
const status = document.getElementById('postStatus');
const identity = document.getElementById('composerIdentity');
const avatar = document.getElementById('composerAvatar');
const count = document.getElementById('postCount');
const themeToggle = document.getElementById('themeToggle');
const imageInput = document.getElementById('postImage');
const imagePreview = document.getElementById('imagePreview');
const imagePreviewPhoto = document.getElementById('imagePreviewPhoto');
const removePostImage = document.getElementById('removePostImage');

const defaultProfileImage = 'assets/images/profile-siam-round.png';
let currentUser = null;
let postItems = [];
let previewUrl = '';

/* ============================================================
   IMAGE COMPRESSION UTILITY
   ============================================================ */
async function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Scale down to max 800px width
        if (width > 800) {
          height = (height * 800) / width;
          width = 800;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // Compress with quality 0.7
        const compressed = canvas.toDataURL('image/jpeg', 0.7);
        resolve(compressed);
      };
      img.onerror = () => reject(new Error('Image loading failed'));
    };
    reader.onerror = () => reject(new Error('File reading failed'));
  });
}

/* ============================================================
   CODEWITHSIAM CUSTOM REACTION SYSTEM
   ============================================================ */

function createFloatingEmoji(emoji, clientX, clientY) {
  const floatingEmoji = document.createElement('div');
  floatingEmoji.className = 'reaction-float-emoji';
  floatingEmoji.textContent = emoji;
  floatingEmoji.style.left = clientX + 'px';
  floatingEmoji.style.top = clientY + 'px';
  const randomOffset = (Math.random() - 0.5) * 40;
  floatingEmoji.style.setProperty('--tx', randomOffset + 'px');
  document.body.appendChild(floatingEmoji);
  setTimeout(() => floatingEmoji.remove(), 1200);
}

const customReactions = {
  support: { emoji: '👍', label: 'Support' },
  brilliant: { emoji: '🔥', label: 'Brilliant' },
  insight: { emoji: '💡', label: 'Insight' },
  levelup: { emoji: '🚀', label: 'Level Up' },
  smart: { emoji: '🧠', label: 'Smart' },
  keepgoing: { emoji: '💪', label: 'Keep Going' },
  helpful: { emoji: '🎯', label: 'Helpful' },
  awesome: { emoji: '⭐', label: 'Awesome' },
  mindblown: { emoji: '🤯', label: 'Mind Blown' }
};

const reactionOrder = ['support', 'brilliant', 'insight', 'levelup', 'smart', 'keepgoing', 'helpful', 'awesome', 'mindblown'];

function getReactionEmoji(type) {
  return customReactions[type]?.emoji || '👍';
}

function getReactionLabel(type) {
  return customReactions[type]?.label || 'Support';
}

let markOnline = () => {};
const visitorId = `visitor_${localStorage.getItem('community-visitor-id') || crypto.randomUUID?.() || `${Date.now()}_${Math.random().toString(36).slice(2)}`}`;
localStorage.setItem('community-visitor-id', visitorId.replace(/^visitor_/, ''));

function escapeHtml(value) { const node = document.createElement('div'); node.textContent = String(value ?? ''); return node.innerHTML; }
function timestamp(value) { if (!value) return 0; if (typeof value.toMillis === 'function') return value.toMillis(); return new Date(value).getTime() || 0; }
function relativeTime(value) { const minutes = Math.floor(Math.max(0, Date.now() - timestamp(value)) / 60000); if (!minutes) return 'Just now'; if (minutes < 60) return `${minutes}m`; if (minutes < 1440) return `${Math.floor(minutes / 60)}h`; return `${Math.floor(minutes / 1440)}d`; }
function initials(name) { return String(name || 'Member').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase(); }
function imageOrFallback(url) { return url || defaultProfileImage; }
function compressImage(file) { return new Promise((resolve, reject) => { const image = new Image(); const objectUrl = URL.createObjectURL(file); image.onload = () => { const scale = Math.min(1, 720 / Math.max(image.width, image.height)); const canvas = document.createElement('canvas'); canvas.width = Math.max(1, Math.round(image.width * scale)); canvas.height = Math.max(1, Math.round(image.height * scale)); canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height); URL.revokeObjectURL(objectUrl); resolve(canvas.toDataURL('image/jpeg', .72)); }; image.onerror = () => { URL.revokeObjectURL(objectUrl); reject(new Error('This image could not be read.')); }; image.src = objectUrl; }); }
function syncPostButton() { const googleUser = Boolean(currentUser?.providerData?.some(provider => provider.providerId === 'google.com')); postButton.disabled = !googleUser || (!text.value.trim() && !imageInput.files[0]); }

function showReactionModal(postId, post) {
  const modal = document.createElement('div');
  modal.className = 'reaction-modal-overlay';
  modal.innerHTML = `<div class="reaction-modal">
    <div class="reaction-modal-header">
      <h3>Reactions</h3>
      <button class="reaction-modal-close" type="button" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="reaction-modal-tabs"></div>
    <div class="reaction-modal-content">
      <div class="reaction-modal-list"></div>
    </div>
  </div>`;
  
  document.body.appendChild(modal);
  const tabs = modal.querySelector('.reaction-modal-tabs');
  const list = modal.querySelector('.reaction-modal-list');
  const header = modal.querySelector('.reaction-modal-header h3');
  
  const reactionsMap = post.reactions || {};
  const reactionCounts = {};
  reactionOrder.forEach(type => { reactionCounts[type] = 0; });
  Object.entries(reactionsMap).forEach(([_, type]) => {
    if (reactionCounts.hasOwnProperty(type)) reactionCounts[type]++;
  });
  
  const totalCount = Object.values(reactionCounts).reduce((a, b) => a + b, 0);
  const tabOrder = ['all', ...reactionOrder.filter(type => reactionCounts[type] > 0)];
  
  let activeTab = 'all';
  
  const renderTab = (tab) => {
    header.textContent = tab === 'all' ? `Reactions (${totalCount})` : `${getReactionLabel(tab)} (${reactionCounts[tab]})`;
    list.innerHTML = '';
    
    const toShow = tab === 'all' 
      ? Object.entries(reactionsMap)
      : Object.entries(reactionsMap).filter(([_, type]) => type === tab);
    
    if (!toShow.length) {
      list.innerHTML = '<div class="reaction-modal-empty">No reactions yet</div>';
      return;
    }
    
    toShow.forEach(async ([uid, type]) => {
      const { getDocs, query, collection, where } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
      const userDoc = await getDocs(query(collection(db, 'users'), where('__name__', '==', uid))).catch(() => null);
      const userData = userDoc?.docs?.[0]?.data();
      const name = userData?.name || (uid === currentUser?.uid ? currentUser.displayName : 'Member');
      const avatar = userData?.photoURL || (uid === currentUser?.uid ? currentUser.photoURL : '');
      
      const item = document.createElement('div');
      item.className = 'reaction-modal-item';
      item.innerHTML = `
        <span class="reaction-modal-avatar">${avatar ? `<img src="${escapeHtml(avatar)}" alt="">` : initials(name)}</span>
        <span class="reaction-modal-user">
          <span class="reaction-modal-username">${escapeHtml(name)}</span>
          <span class="reaction-modal-presence">Reacted with ${getReactionLabel(type)}</span>
        </span>
        <span style="font-size: 1.5rem">${getReactionEmoji(type)}</span>
      `;
      list.appendChild(item);
    });
  };
  
  tabs.innerHTML = tabOrder.map((tab, idx) => `
    <button class="reaction-modal-tab ${tab === 'all' ? 'active' : ''}" type="button" data-tab="${tab}">
      ${tab === 'all' ? 'All' : `${getReactionEmoji(tab)} ${reactionCounts[tab]}`}
    </button>
  `).join('');
  
  tabs.addEventListener('click', event => {
    const button = event.target.closest('[data-tab]');
    if (!button) return;
    tabs.querySelectorAll('.reaction-modal-tab').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    activeTab = button.dataset.tab;
    renderTab(activeTab);
  });
  
  renderTab('all');
  
  modal.querySelector('.reaction-modal-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

function render() {
  feed.innerHTML = postItems.length ? postItems.map(post => { 
    const own = currentUser?.uid === post.authorUid; 
    const admin = currentUser?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com' && currentUser.emailVerified === true; 
    const myAvatar = currentUser?.photoURL ? `<img src="${escapeHtml(currentUser.photoURL)}" alt="">` : initials(currentUser?.displayName || 'Member');
    
    // Build reactions summary
    const reactionsMap = post.reactions || {};
    const reactionCounts = {};
    reactionOrder.forEach(type => { reactionCounts[type] = 0; });
    Object.entries(reactionsMap).forEach(([_, type]) => {
      if (reactionCounts.hasOwnProperty(type)) reactionCounts[type]++;
    });
    const totalReactions = Object.values(reactionCounts).reduce((a, b) => a + b, 0);
    const topReactions = reactionOrder
      .filter(type => reactionCounts[type] > 0)
      .sort((a, b) => reactionCounts[b] - reactionCounts[a])
      .slice(0, 3);
    const reactionPillsHtml = totalReactions ? `<span class="reaction-pills" data-post-reactions="${escapeHtml(JSON.stringify(reactionCounts))}" style="cursor:pointer">${topReactions.map(type => `<span class="reaction-pill-item">${getReactionEmoji(type)}</span>`).join('')} <span class="reaction-pill-count">${totalReactions}</span></span>` : '';
    
    // User's current reaction
    const reactionId = currentUser?.uid || visitorId;
    const userReactionType = Object.entries(reactionsMap).find(([uid]) => uid === reactionId)?.[1];
    
    return `<article class="post-card" data-post-id="${escapeHtml(post.id)}"><div class="post-head"><span class="post-avatar">${post.avatarUrl ? `<img src="${escapeHtml(post.avatarUrl)}" alt="" loading="lazy">` : initials(post.authorName)}</span><div><button class="profile-link" type="button" data-profile-uid="${escapeHtml(post.authorUid || '')}" data-profile-name="${escapeHtml(post.authorName || 'Member')}" data-profile-avatar="${escapeHtml(post.avatarUrl || '')}"><strong>${escapeHtml(post.authorName || 'Member')}</strong></button>${post.authorIsAdmin ? '<small class="admin-badge">ADMIN</small>' : ''}<time>${relativeTime(post.createdAt)}</time></div>${own || admin ? '<span class="post-manage"><button type="button" data-post-action="edit" aria-label="Edit post"><i class="fa-solid fa-pen"></i></button><button type="button" data-post-action="delete" aria-label="Delete post"><i class="fa-regular fa-trash-can"></i></button></span>' : ''}</div><p class="post-text">${escapeHtml(post.text)}</p>${post.imageData || post.imageUrl ? `<img class="post-image" src="${escapeHtml(post.imageData || post.imageUrl)}" alt="Image shared by ${escapeHtml(post.authorName || 'member')}" loading="lazy">` : ''}<div class="post-summary">${reactionPillsHtml}<span>Comments <b class="comment-count" data-comment-count="${escapeHtml(post.id)}"></b></span></div><div class="post-actions"><button type="button" data-post-action="reaction" class="${userReactionType ? 'reaction-button-active' : ''}"><span>${getReactionEmoji(userReactionType || 'support')}</span> ${getReactionLabel(userReactionType || 'Support')}</button><button type="button" data-post-action="comment"><i class="fa-regular fa-comment"></i> Comment</button><button type="button" data-post-action="share"><i class="fa-solid fa-share"></i> Share</button></div><div class="post-comments hidden"><div class="comments-list"><p class="comments-empty">Open comments to join the conversation.</p></div><form class="comment-form"><span class="comment-compose-avatar">${myAvatar}</span><div class="comment-compose-main"><div class="comment-input-wrap"><input name="comment" maxlength="500" placeholder="Write a comment..." aria-label="Write a comment"><button type="submit" aria-label="Send comment"><i class="fa-solid fa-paper-plane"></i></button></div><div class="comment-tools"><button type="button" aria-label="Add emoji"><i class="fa-regular fa-face-smile"></i></button><button type="button" aria-label="Add image"><i class="fa-regular fa-image"></i></button><button type="button" aria-label="Add GIF">GIF</button></div></div></form></div></article>`; 
  }).join('') : '<div class="feed-empty"><i class="fa-regular fa-comments"></i><p>No posts yet. Start the community conversation.</p></div>';
    count.textContent = `${postItems.length} posts · realtime`;
}
function updateIdentity(user) {
  currentUser = user;
  const name = user?.displayName || user?.email?.split('@')[0] || 'Member';
  const googleUser = Boolean(user?.providerData?.some(provider => provider.providerId === 'google.com'));
  identity.textContent = googleUser ? `Posting as ${name}` : user ? 'Use Google sign-in to post' : 'Sign in with Google to share with the community';
  avatar.textContent = initials(name);
  if (user?.photoURL) { avatar.innerHTML = `<img src="${escapeHtml(user.photoURL)}" alt="" loading="lazy">`; }
  text.disabled = !googleUser;
  syncPostButton();
  signInButton.classList.toggle('hidden', googleUser);
  signInButton.innerHTML = '<i class="fa-brands fa-google"></i> Continue with Google';
  markOnline();
  if (postItems.length) render();
}
imageInput.addEventListener('change', () => { const image = imageInput.files[0]; if (previewUrl) URL.revokeObjectURL(previewUrl); previewUrl = ''; if (!image) { imagePreview.classList.add('hidden'); syncPostButton(); return; } if (!image.type.startsWith('image/') || image.size > 5 * 1024 * 1024) { status.textContent = 'Choose an image smaller than 5 MB.'; imageInput.value = ''; imagePreview.classList.add('hidden'); syncPostButton(); return; } previewUrl = URL.createObjectURL(image); imagePreviewPhoto.src = previewUrl; imagePreview.classList.remove('hidden'); status.textContent = ''; syncPostButton(); });
removePostImage.addEventListener('click', () => { imageInput.value = ''; if (previewUrl) URL.revokeObjectURL(previewUrl); previewUrl = ''; imagePreviewPhoto.removeAttribute('src'); imagePreview.classList.add('hidden'); status.textContent = ''; syncPostButton(); });
text.addEventListener('input', syncPostButton);

async function init() {
  if (!db) { status.textContent = 'Community database is not configured.'; return; }
  const { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, where, doc } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  markOnline = () => { if (auth?.currentUser) setDoc(doc(db, 'presence', auth.currentUser.uid), { online: true, lastSeen: serverTimestamp() }, { merge: true }).catch(() => {}); };
  markOnline();
  setInterval(markOnline, 60000);
  window.addEventListener('pagehide', () => { if (auth?.currentUser) setDoc(doc(db, 'presence', auth.currentUser.uid), { online: false, lastSeen: serverTimestamp() }, { merge: true }).catch(() => {}); });
  const profileModal = document.getElementById('profileModal'); const profileBody = document.getElementById('profileModalBody'); const messageModal = document.getElementById('messageModal'); const messageAvatar = document.getElementById('messageAvatar'); const messagePresence = document.getElementById('messagePresence'); const messageList = document.getElementById('messageList'); const messageForm = document.getElementById('messageForm'); const messageText = document.getElementById('messageText'); const messageStatus = document.getElementById('messageStatus'); let messageTarget = null; let stopMessages = null; let stopPresence = null;
  async function openMessages(target) { if (!currentUser) { status.textContent = 'Sign in to send a private message.'; return; } if (target.uid === currentUser.uid) { status.textContent = 'You cannot message yourself.'; return; } messageTarget = target; const conversationId = [currentUser.uid, target.uid].sort().join('_'); await setDoc(doc(db, 'directConversations', conversationId), { participants: [currentUser.uid, target.uid], participantNames: { [currentUser.uid]: currentUser.displayName || 'Member', [target.uid]: target.name }, participantAvatars: { [currentUser.uid]: currentUser.photoURL || '', [target.uid]: target.avatar || '' }, lastMessage: 'Conversation started', updatedAt: serverTimestamp() }, { merge: true }).catch(() => {}); messageModal.classList.remove('hidden'); document.getElementById('messageModalTitle').textContent = target.name; messageAvatar.innerHTML = target.avatar ? `<img src="${escapeHtml(target.avatar)}" alt="">` : initials(target.name); messagePresence.textContent = 'Checking status...'; messagePresence.className = ''; if (stopPresence) stopPresence(); stopPresence = onSnapshot(doc(db, 'presence', target.uid), snapshot => { const presence = snapshot.data(); const lastSeen = presence?.lastSeen?.toDate?.(); const active = presence?.online === true && lastSeen && Date.now() - lastSeen.getTime() < 120000; messagePresence.textContent = active ? 'Online' : lastSeen ? `Last seen ${lastSeen.toLocaleTimeString('en-BD', { hour: 'numeric', minute: '2-digit' })}` : 'Offline'; messagePresence.className = active ? 'online' : 'offline'; }); if (stopMessages) stopMessages(); stopMessages = onSnapshot(query(collection(db, 'directMessages', conversationId, 'messages'), orderBy('createdAt', 'asc'), limit(100)), snapshot => { const unread = snapshot.docs.filter(item => item.data().receiverId === currentUser.uid && !item.data().readAt); unread.forEach(item => updateDoc(item.ref, { readAt: serverTimestamp() }).catch(() => {})); messageList.innerHTML = snapshot.docs.length ? snapshot.docs.map(item => { const message = item.data(); const mine = message.senderId === currentUser.uid; return `<div class="private-message ${mine ? 'mine' : ''}">${escapeHtml(message.text)}${mine ? `<small class="message-ticks ${message.readAt ? 'seen' : ''}" aria-label="${message.readAt ? 'Seen' : 'Sent'}">${message.readAt ? '&#10003;&#10003;' : '&#10003;'}</small>` : ''}</div>`; }).join('') : '<p class="comments-empty">No messages yet.</p>'; messageList.scrollTop = messageList.scrollHeight; }, () => { messageStatus.textContent = 'Messages could not be loaded.'; }); }
  const inboxModal = document.getElementById('inboxModal'); const inboxList = document.getElementById('inboxList'); let stopInbox = null;
  document.getElementById('openInbox')?.addEventListener('click', () => { if (!currentUser) { status.textContent = 'Sign in to view your messages.'; return; } inboxModal.classList.remove('hidden'); if (stopInbox) stopInbox(); stopInbox = onSnapshot(query(collection(db, 'directConversations'), where('participants', 'array-contains', currentUser.uid)), snapshot => { const items = snapshot.docs.map(item => item.data()).sort((a, b) => (b.updatedAt?.toMillis?.() || 0) - (a.updatedAt?.toMillis?.() || 0)); inboxList.innerHTML = items.length ? items.map(item => { const other = item.participants.find(uid => uid !== currentUser.uid); return `<button class="inbox-item" type="button" data-inbox-uid="${escapeHtml(other)}" data-inbox-name="${escapeHtml(item.participantNames?.[other] || 'Member')}" data-inbox-avatar="${escapeHtml(item.participantAvatars?.[other] || '')}"><span class="inbox-item-avatar">${item.participantAvatars?.[other] ? `<img src="${escapeHtml(item.participantAvatars[other])}" alt="">` : initials(item.participantNames?.[other])}</span><span class="inbox-item-copy"><strong>${escapeHtml(item.participantNames?.[other] || 'Member')}</strong><span>${escapeHtml(item.lastMessage || 'Open conversation')}</span></span></button>`; }).join('') : '<p class="comments-empty">No conversations yet.</p>'; }); });
  inboxList.addEventListener('click', event => { const item = event.target.closest('[data-inbox-uid]'); if (!item) return; inboxModal.classList.add('hidden'); openMessages({ uid: item.dataset.inboxUid, name: item.dataset.inboxName, avatar: item.dataset.inboxAvatar }); });
  function renderComments(panel, commentDocs) { panel.querySelector('.comments-list').innerHTML = commentDocs.length ? commentDocs.map(item => { const comment = { id: item.id, ...item.data() }; const canManage = currentUser?.uid === comment.authorUid; const reactionId = currentUser?.uid || visitorId; const liked = comment.likes?.includes(reactionId); const likes = comment.likes?.length || 0; return `<div class="community-comment" data-comment-id="${escapeHtml(comment.id)}"><span class="comment-avatar">${comment.avatarUrl ? `<img src="${escapeHtml(comment.avatarUrl)}" alt="">` : initials(comment.authorName)}</span><div class="comment-content"><strong>${escapeHtml(comment.authorName || 'Visitor')}</strong><time>${relativeTime(comment.createdAt)}</time><p>${escapeHtml(comment.text)}</p><div class="comment-actions"><button type="button" data-comment-action="like" class="${liked ? 'is-liked' : ''}"><i class="fa-${liked ? 'solid' : 'regular'} fa-thumbs-up"></i>${likes ? ` ${likes}` : ' Like'}</button><button type="button" data-comment-action="reply">Reply</button>${canManage ? `<button type="button" data-comment-action="edit">Edit</button><button type="button" data-comment-action="delete">Delete</button>` : ''}</div></div></div>`; }).join('') : '<p class="comments-empty">No comments yet.</p>'; panel.querySelectorAll('.comment-avatar img').forEach(image => image.addEventListener('error', () => { image.parentElement.textContent = initials(image.closest('.community-comment')?.querySelector('strong')?.textContent); })); }
  feed.addEventListener('click', event => { 
    const profile = event.target.closest('[data-profile-uid]'); 
    if (!profile) return; 
    // Navigate to full user profile page
    window.location.href = `user-profile.html?uid=${escapeHtml(profile.dataset.profileUid)}`; 
  });
  messageForm.addEventListener('submit', async event => { event.preventDefault(); const value = messageText.value.trim(); if (!value || !messageTarget || !currentUser) return; const conversationId = [currentUser.uid, messageTarget.uid].sort().join('_'); messageStatus.textContent = 'Sending...'; await setDoc(doc(db, 'directConversations', conversationId), { participants: [currentUser.uid, messageTarget.uid], participantNames: { [currentUser.uid]: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member', [messageTarget.uid]: messageTarget.name }, participantAvatars: { [currentUser.uid]: currentUser.photoURL || '', [messageTarget.uid]: messageTarget.avatar || '' }, lastMessage: value.slice(0, 1000), updatedAt: serverTimestamp() }, { merge: true }).then(() => addDoc(collection(db, 'directMessages', conversationId, 'messages'), { senderId: currentUser.uid, receiverId: messageTarget.uid, text: value.slice(0, 1000), createdAt: serverTimestamp() })).then(() => { messageText.value = ''; messageStatus.textContent = ''; }).catch(() => { messageStatus.textContent = 'Message failed. Try again.'; }); });
  document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => { profileModal.classList.add('hidden'); messageModal.classList.add('hidden'); inboxModal.classList.add('hidden'); if (stopMessages) { stopMessages(); stopMessages = null; } if (stopPresence) { stopPresence(); stopPresence = null; } }));
  
  // Load posts - using aggressive fallback
  const postsQuery = query(collection(db, 'communityPosts'), orderBy('createdAt', 'desc'), limit(50));
  let feedLoaded = false;
  
  // Try immediate load first
  const loadPostsImmediately = async () => {
    try {
      console.log('[Community] Starting post load...');
      const snapshot = await getDocs(postsQuery);
      console.log(`[Community] Firestore returned ${snapshot.docs.length} documents`);
      
      postItems = snapshot.docs.map(doc => {
        const data = doc.data();
        console.log(`[Community] Post ${doc.id}:`, { text: data.text?.slice?.(0, 50), createdAt: data.createdAt });
        return { id: doc.id, ...data };
      });
      
      // Sort by createdAt if available
      if (postItems.length > 0 && postItems[0].createdAt) {
        postItems.sort((a, b) => {
          const aTime = timestamp(a.createdAt);
          const bTime = timestamp(b.createdAt);
          return bTime - aTime;
        });
      }
      
      feedLoaded = true;
      console.log(`[Community] Loaded and sorted ${postItems.length} posts`);
      
      if (postItems.length === 0) {
        feed.innerHTML = `<div class="feed-empty"><i class="fa-regular fa-comments"></i><p>No posts yet. Be the first to share!</p></div>`;
        count.textContent = '0 posts · realtime';
      } else {
        render();
        console.log('[Community] ✓ Posts rendered successfully');
      }
    } catch (error) {
      console.error('[Community] Load error:', error);
      feedLoaded = true;
      const errorMsg = error.code === 'permission-denied' 
        ? 'You do not have permission to view posts.' 
        : error.message || 'Unable to load posts';
      feed.innerHTML = `<div class="feed-empty"><i class="fa-solid fa-triangle-exclamation"></i><p>${errorMsg}</p><small>${error.code || ''}</small></div>`;
      status.textContent = `Error: ${errorMsg}`;
    }
  };
  
  // Execute immediately
  loadPostsImmediately();
  
  // Also set up real-time listener for future updates
  onSnapshot(postsQuery, snapshot => { 
    if (!feedLoaded) {
      // First real-time update - use it
      postItems = snapshot.docs.map(item => ({ id: item.id, ...item.data() })); 
      render();
      feedLoaded = true;
      console.log('[Community] Real-time listener synced');
    }
  }, error => { 
    if (!feedLoaded) {
      console.error('[Community] Real-time listener error:', error);
    }
  });
  
  postButton.addEventListener('click', async () => {
    // Validate authentication
    if (!currentUser) {
      status.textContent = 'Please sign in to post.';
      return;
    }

    const value = text.value.trim();
    const hasImage = imageInput.files && imageInput.files[0];

    // Validate content
    if (!value && !hasImage) {
      status.textContent = 'Please add text or a photo to post.';
      return;
    }

    postButton.disabled = true;
    status.textContent = 'Publishing...';

    try {
      let imageData = '';

      if (hasImage) {
        const image = imageInput.files[0];
        
        // Validate image type and size
        if (!image.type.startsWith('image/')) {
          throw new Error('Please select a valid image file (JPEG, PNG, WebP, GIF).');
        }
        
        if (image.size > 5 * 1024 * 1024) {
          throw new Error('Image is too large. Maximum size is 5 MB.');
        }

        status.textContent = 'Compressing image...';
        imageData = await compressImage(image);

        if (imageData.length > 700000) {
          throw new Error('Compressed image is still too large. Try a smaller or simpler image.');
        }
      }

      // Post to Firebase
      await addDoc(collection(db, 'communityPosts'), {
        text: value.slice(0, 1000),
        imageData,
        authorUid: currentUser.uid,
        authorName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member',
        avatarUrl: currentUser.photoURL || '',
        authorIsAdmin: currentUser.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com' && currentUser.emailVerified === true,
        reactions: {},
        createdAt: serverTimestamp()
      });

      // Clear form
      text.value = '';
      imageInput.value = '';
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = '';
      imagePreview.classList.add('hidden');
      syncPostButton();

      status.textContent = 'Post published successfully!';
      setTimeout(() => { status.textContent = ''; }, 3000);
    } catch (error) {
      console.error('Post creation error:', error);
      status.textContent = error.message || (error.code === 'permission-denied' ? 'You do not have permission to post.' : 'Failed to publish post. Please try again.');
    } finally {
      postButton.disabled = false;
    }
  });
  feed.addEventListener('click', async event => {
    // Handle profile link clicks
    const profileLink = event.target.closest('.profile-link');
    if (profileLink) {
      const uid = profileLink.dataset.profileUid;
      if (uid) {
        window.location.href = `user-profile.html?uid=${encodeURIComponent(uid)}`;
      }
      return;
    }

    const button = event.target.closest('[data-post-action], [data-comment-action], [data-reaction]');
    const card = button?.closest('[data-post-id]');
    const post = postItems.find(item => item.id === card?.dataset.postId);
    if (!button || !post) return;
    
    if (button.dataset.reaction) { 
      const reactionId = currentUser?.uid || visitorId; 
      const reactionType = button.dataset.reaction;
      
      // Add click animation to button
      button.classList.add('reaction-button-clicked');
      setTimeout(() => button.classList.remove('reaction-button-clicked'), 600);
      
      // Create floating emoji
      createFloatingEmoji(getReactionEmoji(reactionType), event.clientX, event.clientY);
      
      await updateDoc(doc(db, 'communityPosts', post.id), { 
        reactions: post.reactions?.[(reactionId)] === reactionType 
          ? arrayRemove(reactionId) 
          : { ...Object.fromEntries(Object.entries(post.reactions || {}).filter(([uid]) => uid !== reactionId)), [reactionId]: reactionType }
      }).catch(() => { status.textContent = 'Reaction failed.'; }); 
      card.querySelector('.reaction-picker')?.remove(); 
      return; 
    }
    
    if (button.dataset.commentAction) { 
      const commentRow = button.closest('[data-comment-id]'); 
      const commentId = commentRow?.dataset.commentId; 
      const commentRef = doc(db, 'communityPosts', post.id, 'comments', commentId); 
      if (button.dataset.commentAction === 'like') { 
        if (!currentUser) { status.textContent = 'Sign in to react to comments.'; return; } 
        const snapshot = await getDocs(query(collection(db, 'communityPosts', post.id, 'comments'), where('__name__', '==', commentId))); 
        const comment = snapshot.docs[0]?.data(); 
        if (comment) { 
          const reactionId = currentUser.uid; 
          await updateDoc(commentRef, { likes: comment.likes?.includes(reactionId) ? arrayRemove(reactionId) : arrayUnion(reactionId) }).catch(() => { status.textContent = 'Reaction failed.'; }); 
        } 
        return; 
      } 
      if (button.dataset.commentAction === 'reply') { 
        const commentInput = card.querySelector('input[name="comment"]'); 
        commentInput.placeholder = `Reply to ${commentRow.querySelector('strong')?.textContent || 'this comment'}...`; 
        commentInput.focus(); 
        return; 
      } 
      if (button.dataset.commentAction === 'delete' && confirm('Delete this comment?')) 
        await deleteDoc(commentRef).then(() => { commentRow.remove(); status.textContent = 'Comment deleted.'; }).catch(() => { status.textContent = 'Comment delete failed.'; }); 
      if (button.dataset.commentAction === 'edit') { 
        const current = commentRow.querySelector('.comment-content p').textContent; 
        const value = prompt('Edit comment:', current); 
        if (value?.trim()) 
          await updateDoc(commentRef, { text: value.trim().slice(0, 500) }).then(() => { commentRow.querySelector('.comment-content p').textContent = value.trim().slice(0, 500); status.textContent = 'Comment updated.'; }).catch(() => { status.textContent = 'Comment update failed.'; }); 
      } 
      return; 
    }
    
    if (button.dataset.postAction === 'reaction') {
      card.querySelector('.reaction-picker')?.remove(); 
      const picker = document.createElement('div'); 
      picker.className = 'reaction-picker'; 
      picker.innerHTML = reactionOrder.map(type => `<button type="button" data-reaction="${escapeHtml(type)}" title="${getReactionLabel(type)}" aria-label="${getReactionLabel(type)}"><span>${getReactionEmoji(type)}</span><span>${getReactionLabel(type)}</span></button>`).join('');
      
      // Position picker
      const rect = button.getBoundingClientRect();
      if (rect.top < 200) {
        picker.setAttribute('data-position', 'bottom');
      }
      
      button.parentElement.style.position = 'relative'; 
      button.parentElement.append(picker);
    }
    
    if (button.dataset.postAction === 'edit') { 
      const value = prompt('Edit post:', post.text || ''); 
      if (value?.trim()) 
        await updateDoc(doc(db, 'communityPosts', post.id), { text: value.trim().slice(0, 1000) }).then(() => { status.textContent = 'Post updated.'; }).catch(() => { status.textContent = 'Post update failed.'; }); 
    }
    
    if (button.dataset.postAction === 'delete' && confirm('Delete this post?')) 
      await deleteDoc(doc(db, 'communityPosts', post.id)).then(() => { status.textContent = 'Post deleted.'; }).catch(() => { status.textContent = 'Post delete failed.'; });
    
    if (button.dataset.postAction === 'comment') {
      const panel = card.querySelector('.post-comments');
      panel.classList.toggle('hidden');
      if (!panel.classList.contains('hidden')) { 
        try { 
          const comments = await getDocs(query(collection(db, 'communityPosts', post.id, 'comments'), orderBy('createdAt', 'asc'), limit(50))); 
          renderComments(panel, comments.docs); 
          const commentCount = card.querySelector(`[data-comment-count="${post.id}"]`); 
          if (commentCount) commentCount.textContent = comments.size ? `(${comments.size})` : ''; 
        } catch { 
          panel.querySelector('.comments-list').innerHTML = '<p class="comments-empty">Comments could not be loaded.</p>'; 
        } 
      } 
    }
    
    if (button.dataset.postAction === 'share') {
      const postUrl = `${location.origin}${location.pathname}#${post.id}`;
      if (navigator.share) { 
        await navigator.share({ title: 'CodeWithSiam community post', text: post.text, url: postUrl }).catch(() => {}); 
        return; 
      }
      if (!navigator.clipboard) { status.textContent = 'Copy this page link to share.'; return; }
      await navigator.clipboard.writeText(postUrl).then(() => { status.textContent = 'Post link copied.'; }).catch(() => { status.textContent = 'Post link could not be copied.'; });
    }
    
    if (button.dataset.commentAction) return;
    
    // Handle reaction pills click to show modal
    const reactionPills = event.target.closest('.reaction-pills');
    if (reactionPills && card) {
      showReactionModal(card.dataset.postId, post);
    }
  });
  feed.addEventListener('submit', async event => { const form = event.target.closest('.comment-form'); if (!form) return; event.preventDefault(); const card = form.closest('[data-post-id]'); const value = form.comment.value.trim(); if (!value) return; await addDoc(collection(db, 'communityPosts', card.dataset.postId, 'comments'), { text: value.slice(0, 500), authorName: currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Visitor', avatarUrl: currentUser?.photoURL || '', authorUid: currentUser?.uid || visitorId, createdAt: serverTimestamp() }).then(() => { form.reset(); status.textContent = 'Comment added.'; card.querySelector('[data-post-action="comment"]').click(); card.querySelector('[data-post-action="comment"]').click(); }).catch(() => { status.textContent = 'Comment failed. Try again.'; }); });
  document.addEventListener('click', event => {
    if (!event.target.closest('.post-actions [data-post-action="like"], .reaction-picker')) {
      document.querySelectorAll('.reaction-picker').forEach(picker => picker.remove());
    }
  });
}
signInButton.addEventListener('click', () => signInWithGoogle().catch(error => { status.textContent = error.message || 'Sign-in failed.'; }));
themeToggle.addEventListener('click', () => { document.body.classList.toggle('light'); localStorage.setItem('community-theme', document.body.classList.contains('light') ? 'light' : 'dark'); });
if (localStorage.getItem('community-theme') === 'light') document.body.classList.add('light');
observeAuthState(updateIdentity);

// Check if Firebase is configured
if (!db) {
  status.textContent = 'Community database is not configured. Please configure Firebase.';
  feed.innerHTML = `<div class="feed-empty"><i class="fa-solid fa-triangle-exclamation"></i><p>${escapeHtml(status.textContent)}</p></div>`;
} else {
  // Initialize community with timeout
  const initTimeout = setTimeout(() => {
    if (feed.innerHTML.includes('Loading')) {
      status.textContent = 'Firebase connection timeout. Check your internet connection.';
      feed.innerHTML = `<div class="feed-empty"><i class="fa-solid fa-triangle-exclamation"></i><p>${escapeHtml(status.textContent)}</p></div>`;
      console.warn('Init timeout - Firebase may not be responding');
    }
  }, 12000);

  init().catch(error => { 
    clearTimeout(initTimeout);
    console.error('Community init failed:', error);
    status.textContent = error.message || 'Community is temporarily unavailable.'; 
    feed.innerHTML = `<div class="feed-empty"><i class="fa-solid fa-triangle-exclamation"></i><p>${escapeHtml(status.textContent)}</p></div>`; 
  }).finally(() => {
    clearTimeout(initTimeout);
  });
}
