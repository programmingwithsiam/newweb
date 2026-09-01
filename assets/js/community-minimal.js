console.log('[Community-Minimal] Module loading...');

// Test if we can access the DOM
const feed = document.getElementById('postFeed');
console.log('[Community-Minimal] Feed element:', feed ? 'FOUND' : 'NOT FOUND');

if (feed) {
  feed.innerHTML = `<div class="feed-empty" style="padding: 20px; text-align: center;">
    <p style="color: #4ade80; font-weight: bold;">✓ SUCCESS: Module loaded and feed element updated!</p>
    <p style="color: #888; font-size: 12px;">If you see this message, the JavaScript module system is working.</p>
  </div>`;
  console.log('[Community-Minimal] Successfully updated feed HTML');
} else {
  console.error('[Community-Minimal] FAILED: Feed element not found in DOM');
  console.error('[Community-Minimal] Available element IDs:', Array.from(document.querySelectorAll('[id]')).map(el => el.id).join(', '));
}

console.log('[Community-Minimal] Module execution complete');
