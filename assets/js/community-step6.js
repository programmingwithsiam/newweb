console.log('[Community-Step6] Testing onSnapshot...');

async function testFirestore() {
  try {
    console.log('[S6-A] Starting test');
    const { db: firebaseDb } = await import('./firebase-init.js');
    console.log('[S6-B] Firebase db:', firebaseDb ? 'OK' : 'NULL');
    
    const { collection, query, orderBy, limit, getDocs, onSnapshot } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
    
    const postsQuery = query(collection(firebaseDb, 'communityPosts'), orderBy('createdAt', 'desc'), limit(50));
    
    console.log('[S6-C] Calling getDocs()...');
    const snapshot = await getDocs(postsQuery);
    console.log(`[S6-D] getDocs success: ${snapshot.docs.length} posts`);
    
    console.log('[S6-E] Setting up onSnapshot listener...');
    const unsubscribe = onSnapshot(postsQuery, 
      (snapshot) => {
        console.log('[S6-F] onSnapshot success callback:', snapshot.docs.length, 'docs');
      },
      (error) => {
        console.error('[S6-ERROR-onSnapshot]', error.message);
        showMessage(`onSnapshot ERROR: ${error.message}`);
      }
    );
    
    showMessage(`✓ getDocs: ${snapshot.docs.length} posts\n✓ onSnapshot listener started`);
    console.log('[S6-G] onSnapshot listener set up successfully');
    
  } catch (error) {
    console.error('[S6-CATCH]', error.message);
    showMessage(`ERROR: ${error.message}`);
  }
}

function showMessage(msg) {
  const feed = document.getElementById('postFeed');
  if (feed) {
    feed.innerHTML = `<div class="feed-empty" style="padding: 20px; text-align: center; white-space: pre-wrap;">
      <p style="font-weight: bold;">${msg}</p>
    </div>`;
  }
}

showMessage('⏳ Testing getDocs + onSnapshot...');
testFirestore();
