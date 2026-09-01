import { auth, db, storage } from './firebase-init.js';
import { observeAuthState } from './auth.js?v=20260829-auth-fix-1';

console.log('[Community] Module started');

const feed = document.getElementById('postFeed');
const postBtn = document.getElementById('postBtn');
const postText = document.getElementById('postText');
const postStatus = document.getElementById('postStatus');
const signInBtn = document.getElementById('signInBtn');

let currentUser = null;
let postItems = [];

// Initialize
async function init() {
  console.log('[Community] Initializing...');
  
  if (!db) {
    showError('Database not configured');
    return;
  }
  
  try {
    // Import Firestore functions
    const { collection, query, orderBy, limit, getDocs, onSnapshot } = await import(
      'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
    );
    
    console.log('[Community] Firestore imported');
    
    // Set up auth observer
    observeAuthState(user => {
      currentUser = user;
      console.log('[Community] Auth state changed:', user ? 'logged in' : 'logged out');
      updateUI();
    });
    
    // Create posts query
    const postsQuery = query(
      collection(db, 'communityPosts'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    
    // Load initial posts
    console.log('[Community] Loading initial posts...');
    showLoading();
    
    const snapshot = await getDocs(postsQuery);
    postItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    console.log(`[Community] Loaded ${postItems.length} posts`);
    render();
    
    // Set up real-time listener
    console.log('[Community] Setting up real-time listener...');
    onSnapshot(postsQuery, (snapshot) => {
      postItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log(`[Community] Real-time update: ${postItems.length} posts`);
      render();
    }, (error) => {
      console.error('[Community] Real-time listener error:', error.message);
      // Don't show error if we already have data
      if (postItems.length === 0) {
        showError('Failed to load posts');
      }
    });
    
    // Set up post button
    postBtn.addEventListener('click', handlePost);
    signInBtn.addEventListener('click', handleSignIn);
    
  } catch (error) {
    console.error('[Community] Init error:', error);
    showError(error.message);
  }
}

function updateUI() {
  const composer = document.querySelector('.composer');
  if (currentUser) {
    postText.disabled = false;
    postBtn.disabled = false;
    signInBtn.style.display = 'none';
  } else {
    postText.disabled = true;
    postBtn.disabled = true;
    signInBtn.style.display = 'block';
  }
}

function showLoading() {
  feed.innerHTML = `<div class="feed-empty">
    <i class="fa-solid fa-spinner fa-spin"></i>
    <p>Loading community...</p>
  </div>`;
}

function showError(msg) {
  feed.innerHTML = `<div class="feed-empty">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <p>${msg}</p>
    <button class="retry-btn">Retry</button>
  </div>`;
  feed.querySelector('.retry-btn')?.addEventListener('click', () => {
    init();
  });
}

function render() {
  if (postItems.length === 0) {
    feed.innerHTML = `<div class="feed-empty">
      <i class="fa-regular fa-comments"></i>
      <p>No posts yet. Be the first to share!</p>
    </div>`;
    return;
  }
  
  feed.innerHTML = postItems.map(post => `
    <article class="post-card">
      <div class="post-header">
        <div class="post-author">
          ${post.avatarUrl ? `<img src="${post.avatarUrl}" alt="">` : `<div class="avatar">S</div>`}
          <div>
            <strong>${post.authorName || 'Member'}</strong>
            <time>${new Date(post.createdAt?.toDate?.() || post.createdAt).toLocaleDateString()}</time>
          </div>
        </div>
      </div>
      <div class="post-content">
        <p>${post.text}</p>
        ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post image" class="post-image">` : ''}
      </div>
    </article>
  `).join('');
}

function handlePost() {
  if (!currentUser) {
    alert('Please sign in to post');
    return;
  }
  console.log('[Community] Post button clicked');
  postStatus.textContent = 'Posting...';
  // TODO: Implement post creation
}

function handleSignIn() {
  console.log('[Community] Sign in button clicked');
  // TODO: Implement sign in
}

// Start the application
init();

console.log('[Community] Module ready');
