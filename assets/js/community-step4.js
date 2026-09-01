console.log('[Community-Step4] Testing getDocs call...');

async function testFirestore() {
  try {
    console.log('[Community-Step4] Importing firebase-init...');
    const { db: firebaseDb } = await import('./firebase-init.js');
    
    if (!firebaseDb) {
      console.error('[Community-Step4] Firebase db is null');
      return;
    }
    
    console.log('[Community-Step4] Importing Firestore functions...');
    const { collection, query, orderBy, limit, getDocs } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
    console.log('[Community-Step4] Firestore functions imported');
    
    const postsQuery = query(collection(firebaseDb, 'communityPosts'), orderBy('createdAt', 'desc'), limit(50));
    console.log('[Community-Step4] Query created, calling getDocs()...');
    
    const snapshot = await getDocs(postsQuery);
    console.log(`[Community-Step4] SUCCESS! Got ${snapshot.docs.length} documents`);
    
  } catch (error) {
    console.error('[Community-Step4] ERROR:', error.message, error);
  }
}

testFirestore();

// Update feed HTML
const feed = document.getElementById('postFeed');
if (feed) {
  feed.innerHTML = `<div class="feed-empty" style="padding: 20px; text-align: center;">
    <p style="color: #ffeb3b; font-weight: bold;">⏳ Step 4: Testing getDocs...</p>
    <p style="color: #888; font-size: 12px;">Check console for results (waiting up to 10 seconds)</p>
  </div>`;
}

// Timeout to show if getDocs hangs
setTimeout(() => {
  if (feed.querySelector('.fa-spinner')) {
    console.warn('[Community-Step4] getDocs took >10 seconds, likely hung');
  }
}, 10000);
