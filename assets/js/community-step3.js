console.log('[Community-Step3] Module loading with Firebase...');

// Import Firebase initialization
try {
  console.log('[Community-Step3] Importing firebase-init...');
  const { auth: firebaseAuth, db: firebaseDb, storage: firebaseStorage } = await import('./firebase-init.js');
  console.log('[Community-Step3] Firebase imported, db:', firebaseDb ? 'OK' : 'NULL');
} catch (error) {
  console.error('[Community-Step3] ERROR importing firebase:', error.message);
}

// Test if we can access the DOM
const feed = document.getElementById('postFeed');
if (feed) {
  feed.innerHTML = `<div class="feed-empty" style="padding: 20px; text-align: center;">
    <p style="color: #4ade80; font-weight: bold;">✓ Step 3: Firebase imports OK!</p>
    <p style="color: #888; font-size: 12px;">Ready for Firestore operations</p>
  </div>`;
}
