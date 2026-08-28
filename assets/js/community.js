import { auth, db } from './firebase-init.js';
import { observeAuthState, signInWithGoogle } from './auth.js';

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
let currentUser = null;
let postItems = [];
const visitorId = `visitor_${localStorage.getItem('community-visitor-id') || crypto.randomUUID?.() || `${Date.now()}_${Math.random().toString(36).slice(2)}`}`;
localStorage.setItem('community-visitor-id', visitorId.replace(/^visitor_/, ''));

function escapeHtml(value) { const node = document.createElement('div'); node.textContent = String(value ?? ''); return node.innerHTML; }
function timestamp(value) { if (!value) return 0; if (typeof value.toMillis === 'function') return value.toMillis(); return new Date(value).getTime() || 0; }
function relativeTime(value) { const minutes = Math.floor(Math.max(0, Date.now() - timestamp(value)) / 60000); if (!minutes) return 'Just now'; if (minutes < 60) return `${minutes}m`; if (minutes < 1440) return `${Math.floor(minutes / 60)}h`; return `${Math.floor(minutes / 1440)}d`; }
function initials(name) { return String(name || 'Member').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase(); }
function compressImage(file) { return new Promise((resolve, reject) => { const image = new Image(); const objectUrl = URL.createObjectURL(file); image.onload = () => { const scale = Math.min(1, 720 / Math.max(image.width, image.height)); const canvas = document.createElement('canvas'); canvas.width = Math.max(1, Math.round(image.width * scale)); canvas.height = Math.max(1, Math.round(image.height * scale)); canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height); URL.revokeObjectURL(objectUrl); resolve(canvas.toDataURL('image/jpeg', .72)); }; image.onerror = () => { URL.revokeObjectURL(objectUrl); reject(new Error('This image could not be read.')); }; image.src = objectUrl; }); }
function render() {
  feed.innerHTML = postItems.length ? postItems.map(post => `<article class="post-card" data-post-id="${escapeHtml(post.id)}"><div class="post-head"><span class="post-avatar">${post.avatarUrl ? `<img src="${escapeHtml(post.avatarUrl)}" alt="" loading="lazy">` : initials(post.authorName)}</span><div><strong>${escapeHtml(post.authorName || 'Member')}</strong>${post.authorIsAdmin ? '<small class="admin-badge">ADMIN</small>' : ''}<time>${relativeTime(post.createdAt)}</time></div></div><p class="post-text">${escapeHtml(post.text)}</p>${post.imageData || post.imageUrl ? `<img class="post-image" src="${escapeHtml(post.imageData || post.imageUrl)}" alt="Image shared by ${escapeHtml(post.authorName || 'member')}" loading="lazy">` : ''}<div class="post-actions"><button type="button" data-post-action="like"><i class="fa-regular fa-heart"></i> ${post.likes?.length || 0} Like</button><button type="button" data-post-action="comment"><i class="fa-regular fa-comment"></i> Comment</button><button type="button" data-post-action="share"><i class="fa-solid fa-share"></i> Share</button></div></article>`).join('') : '<div class="feed-empty"><i class="fa-regular fa-comments"></i><p>No posts yet. Start the community conversation.</p></div>';
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
  postButton.disabled = !googleUser;
  signInButton.classList.toggle('hidden', googleUser);
  signInButton.innerHTML = '<i class="fa-brands fa-google"></i> Continue with Google';
}
async function init() {
  if (!db) { status.textContent = 'Community database is not configured.'; return; }
  const { addDoc, arrayRemove, arrayUnion, collection, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc, doc } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  const postsQuery = query(collection(db, 'communityPosts'), orderBy('createdAt', 'desc'), limit(50));
  onSnapshot(postsQuery, snapshot => { postItems = snapshot.docs.map(item => ({ id: item.id, ...item.data() })); render(); }, error => { status.textContent = error.code === 'permission-denied' ? 'Community read access is blocked by Firestore rules.' : 'Community is temporarily unavailable.'; });
  postButton.addEventListener('click', async () => {
    const value = text.value.trim();
    const googleUser = Boolean(currentUser?.providerData?.some(provider => provider.providerId === 'google.com'));
    if (!googleUser || (!value && !imageInput.files[0])) { status.textContent = 'Add text or a photo to post.'; return; }
    postButton.disabled = true; status.textContent = 'Publishing...';
    try { let imageData = ''; const image = imageInput.files[0]; if (image) { if (!image.type.startsWith('image/') || image.size > 5 * 1024 * 1024) throw new Error('Choose an image smaller than 5 MB.'); status.textContent = 'Preparing image...'; imageData = await compressImage(image); if (imageData.length > 700000) throw new Error('Choose a smaller image.'); } await addDoc(collection(db, 'communityPosts'), { text: value.slice(0, 1000), imageData, authorUid: currentUser.uid, authorName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member', avatarUrl: currentUser.photoURL || '', authorIsAdmin: currentUser.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com' && currentUser.emailVerified === true, likes: [], createdAt: serverTimestamp() }); text.value = ''; imageInput.value = ''; status.textContent = 'Published'; } catch (error) { status.textContent = error.message || (error.code === 'permission-denied' ? 'Sign in is required to post.' : 'Post failed. Try again.'); } finally { postButton.disabled = false; }
  });
  feed.addEventListener('click', async event => {
    const button = event.target.closest('[data-post-action]');
    const card = button?.closest('[data-post-id]');
    const post = postItems.find(item => item.id === card?.dataset.postId);
    if (!button || !post) return;
    if (button.dataset.postAction === 'like') {
      const reactionId = currentUser?.uid || visitorId;
      await updateDoc(doc(db, 'communityPosts', post.id), { likes: post.likes?.includes(reactionId) ? arrayRemove(reactionId) : arrayUnion(reactionId) }).catch(() => { status.textContent = 'Reaction failed.'; });
    }
    if (button.dataset.postAction === 'comment') {
      const value = prompt('Write a comment:');
      if (!value?.trim()) return;
      await addDoc(collection(db, 'communityPosts', post.id, 'comments'), { text: value.trim().slice(0, 500), authorName: currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Visitor', authorUid: currentUser?.uid || visitorId, createdAt: serverTimestamp() }).then(() => { status.textContent = 'Comment added.'; }).catch(() => { status.textContent = 'Comment failed. Try again.'; });
    }
    if (button.dataset.postAction === 'share') {
      const postUrl = `${location.origin}${location.pathname}#${post.id}`;
      if (navigator.share) { await navigator.share({ title: 'CodeWithSiam community post', text: post.text, url: postUrl }).catch(() => {}); return; }
      if (!navigator.clipboard) { status.textContent = 'Copy this page link to share.'; return; }
      await navigator.clipboard.writeText(postUrl).then(() => { status.textContent = 'Post link copied.'; }).catch(() => { status.textContent = 'Post link could not be copied.'; });
    }
  });
}
signInButton.addEventListener('click', () => signInWithGoogle().catch(error => { status.textContent = error.message || 'Sign-in failed.'; }));
themeToggle.addEventListener('click', () => { document.body.classList.toggle('light'); localStorage.setItem('community-theme', document.body.classList.contains('light') ? 'light' : 'dark'); });
if (localStorage.getItem('community-theme') === 'light') document.body.classList.add('light');
observeAuthState(updateIdentity);
init().catch(error => { status.textContent = 'Community is temporarily unavailable.'; console.error(error); });
