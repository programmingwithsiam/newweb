console.log('[Community-Step2] Module loading with imports...');

// Import auth
try {
  console.log('[Community-Step2] Importing auth...');
  const { observeAuthState, signInWithGoogle } = await import('./auth.js?v=20260829-auth-fix-1');
  console.log('[Community-Step2] Auth imported successfully');
} catch (error) {
  console.error('[Community-Step2] ERROR importing auth:', error.message);
}

// Test if we can access the DOM
const feed = document.getElementById('postFeed');
if (feed) {
  feed.innerHTML = `<div class="feed-empty" style="padding: 20px; text-align: center;">
    <p style="color: #4ade80; font-weight: bold;">✓ Step 2: Module loaded with imports!</p>
    <p style="color: #888; font-size: 12px;">Check console for import errors</p>
  </div>`;
}
