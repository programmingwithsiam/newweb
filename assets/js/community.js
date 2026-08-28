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
let currentUser = null;
let postItems = [];

function escapeHtml(value) { const node = document.createElement('div'); node.textContent = String(value ?? ''); return node.innerHTML; }
function timestamp(value) { if (!value) return 0; if (typeof value.toMillis === 'function') return value.toMillis(); return new Date(value).getTime() || 0; }
function relativeTime(value) { const minutes = Math.floor(Math.max(0, Date.now() - timestamp(value)) / 60000); if (!minutes) return 'Just now'; if (minutes < 60) return `${minutes}m`; if (minutes < 1440) return `${Math.floor(minutes / 60)}h`; return `${Math.floor(minutes / 1440)}d`; }
function initials(name) { return String(name || 'Member').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase(); }
function render() {
  feed.innerHTML = postItems.length ? postItems.map(post => `<article class="post-card" data-post-id="${escapeHtml(post.id)}"><div class="post-head"><span class="post-avatar">${post.avatarUrl ? `<img src="${escapeHtml(post.avatarUrl)}" alt="" loading="lazy">` : initials(post.authorName)}</span><div><strong>${escapeHtml(post.authorName || 'Member')}</strong>${post.authorIsAdmin ? '<small class="admin-badge">ADMIN</small>' : ''}<time>${relativeTime(post.createdAt)}</time></div></div><p class="post-text">${escapeHtml(post.text)}</p><div class="post-actions"><button type="button" data-post-action="like"><i class="fa-regular fa-heart"></i> ${post.likes?.length || 0} Like</button><button type="button" data-post-action="comment"><i class="fa-regular fa-comment"></i> Comment</button><button type="button" data-post-action="share"><i class="fa-solid fa-share"></i> Share</button></div></article>`).join('') : '<div class="feed-empty"><i class="fa-regular fa-comments"></i><p>No posts yet. Start the community conversation.</p></div>';
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
    if (!googleUser || !value) { status.textContent = 'Only Google-signed-in users can post.'; return; }
    postButton.disabled = true; status.textContent = 'Publishing...';
    try { await addDoc(collection(db, 'communityPosts'), { text: value.slice(0, 1000), authorUid: currentUser.uid, authorName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Member', avatarUrl: currentUser.photoURL || '', authorIsAdmin: currentUser.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com' && currentUser.emailVerified === true, likes: [], createdAt: serverTimestamp() }); text.value = ''; status.textContent = 'Published'; } catch (error) { status.textContent = error.code === 'permission-denied' ? 'Sign in is required to post.' : 'Post failed. Try again.'; } finally { postButton.disabled = false; }
  });
  feed.addEventListener('click', async event => { const button = event.target.closest('[data-post-action]'); const card = button?.closest('[data-post-id]'); const post = postItems.find(item => item.id === card?.dataset.postId); if (!button || !post || !currentUser) return; if (button.dataset.postAction === 'like') await updateDoc(doc(db, 'communityPosts', post.id), { likes: post.likes?.includes(currentUser.uid) ? arrayRemove(currentUser.uid) : arrayUnion(currentUser.uid) }).catch(() => { status.textContent = 'Reaction failed.'; }); if (button.dataset.postAction === 'share') { if (!navigator.clipboard) { status.textContent = 'Copy this page link to share.'; return; } await navigator.clipboard.writeText(`${location.origin}${location.pathname}#${post.id}`).then(() => { status.textContent = 'Post link copied.'; }).catch(() => { status.textContent = 'Post link could not be copied.'; }); } });
}
signInButton.addEventListener('click', () => signInWithGoogle().catch(error => { status.textContent = error.message || 'Sign-in failed.'; }));
themeToggle.addEventListener('click', () => { document.body.classList.toggle('light'); localStorage.setItem('community-theme', document.body.classList.contains('light') ? 'light' : 'dark'); });
if (localStorage.getItem('community-theme') === 'light') document.body.classList.add('light');
observeAuthState(updateIdentity);
init().catch(error => { status.textContent = 'Community is temporarily unavailable.'; console.error(error); });
