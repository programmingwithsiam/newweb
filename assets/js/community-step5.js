console.log('[Community-Step5] Detailed getDocs testing...');

async function testFirestore() {
  try {
    console.log('[S5-A] Starting test');
    const { db: firebaseDb } = await import('./firebase-init.js');
    console.log('[S5-B] Firebase db:', firebaseDb ? 'OK' : 'NULL');
    
    if (!firebaseDb) {
      console.error('[S5-ERROR] Firebase db is null, cannot proceed');
      showMessage('ERROR: Firebase db not initialized');
      return;
    }
    
    console.log('[S5-C] Importing Firestore functions');
    const { collection, query, orderBy, limit, getDocs } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
    console.log('[S5-D] Firestore functions imported OK');
    
    console.log('[S5-E] Creating collection reference');
    const postsCollection = collection(firebaseDb, 'communityPosts');
    console.log('[S5-F] Collection created');
    
    console.log('[S5-G] Creating query');
    const postsQuery = query(postsCollection, orderBy('createdAt', 'desc'), limit(50));
    console.log('[S5-H] Query created, about to call getDocs');
    
    // Wrap getDocs with explicit timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('getDocs timeout - 5 seconds')), 5000);
    });
    
    console.log('[S5-I] Calling getDocs with 5-second timeout...');
    const snapshot = await Promise.race([getDocs(postsQuery), timeoutPromise]);
    
    console.log(`[S5-SUCCESS] Got ${snapshot.docs.length} documents from Firestore!`);
    showMessage(`✓ SUCCESS: Got ${snapshot.docs.length} posts from Firestore`);
    
  } catch (error) {
    console.error('[S5-CATCH] Error in testFirestore:', error.message);
    console.error('[S5-ERROR] Full error:', error);
    showMessage(`ERROR: ${error.message}`);
  }
}

function showMessage(msg) {
  const feed = document.getElementById('postFeed');
  if (feed) {
    feed.innerHTML = `<div class="feed-empty" style="padding: 20px; text-align: center;">
      <p style="font-weight: bold;">${msg}</p>
      <p style="color: #888; font-size: 12px;">Check browser console for details</p>
    </div>`;
  }
}

// Start the test
testFirestore();

showMessage('⏳ Testing Firestore getDocs (5-second timeout)...');
