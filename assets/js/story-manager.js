/* ============================================================
   CODEWITHSIAM STORY MANAGER
   ============================================================
   Handles story creation, viewing, expiration, and view tracking
*/

import { auth, db, storage } from './firebase-init.js';

const storyCategories = {
  'learning': '🚀 Learning Update',
  'project': '💻 Project Update',
  'achievement': '🎯 Achievement',
  'study': '📚 Study Update',
  'idea': '💡 Quick Idea',
  'challenge': '🔥 Challenge'
};

function escapeHtml(value) {
  const node = document.createElement('div');
  node.textContent = String(value ?? '');
  return node.innerHTML;
}

function initials(name) {
  return String(name || 'Member')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

function relativeTime(value) {
  if (!value) return '0m';
  const ms = typeof value.toMillis === 'function' ? value.toMillis() : new Date(value).getTime();
  const diff = Date.now() - ms;
  const minutes = Math.floor(diff / 60000);
  if (!minutes) return 'Just now';
  if (minutes < 60) return `${minutes}m`;
  if (minutes < 1440) return `${Math.floor(minutes / 60)}h`;
  return `${Math.floor(minutes / 1440)}d`;
}

export async function createStory(storyData) {
  const { addDoc, collection, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');

  if (!auth.currentUser) throw new Error('Must be signed in to create a story');

  const createdAt = serverTimestamp();
  const expiresAt = new Date(Date.now() + 86400000); // 24 hours from now

  const story = {
    authorUid: auth.currentUser.uid,
    authorName: auth.currentUser.displayName || auth.currentUser.email?.split('@')[0] || 'Member',
    avatarUrl: auth.currentUser.photoURL || '',
    type: storyData.type, // 'text' or 'image'
    content: storyData.content || storyData.text || '',
    mediaUrl: storyData.mediaUrl || storyData.imageData || '',
    imageData: storyData.imageData || storyData.mediaUrl || '',
    category: storyData.category || 'learning',
    ...(storyData.music ? { music: storyData.music } : {}),
    createdAt,
    expiresAt,
    viewers: []
  };

  try {
    const docRef = await addDoc(collection(db, 'stories'), story);
    return { id: docRef.id, ...story };
  } catch (error) {
    console.error('Error creating story:', error);
    throw error;
  }
}

export async function uploadStoryImage(file) {
  if (!auth.currentUser) throw new Error('Must be signed in');
  if (!file || !file.type.startsWith('image/')) throw new Error('File must be an image');
  if (file.size > 5 * 1024 * 1024) throw new Error('Image must be smaller than 5 MB');

  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Failed to read the selected image.'));
    reader.readAsDataURL(file);
  });
}

export async function getActiveStories() {
  const { collection, query, where, getDocs } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');

  const now = new Date();
  const storiesRef = collection(db, 'stories');
  const q = query(
    storiesRef,
    where('expiresAt', '>', now)
  );

  try {
    const snapshot = await getDocs(q);
    const stories = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      .sort((left, right) => (right.createdAt?.toMillis?.() || new Date(right.createdAt || 0).getTime()) - (left.createdAt?.toMillis?.() || new Date(left.createdAt || 0).getTime()));
    
    // Remove duplicates (latest story per user)
    const storyMap = new Map();
    stories.forEach(story => {
      if (!storyMap.has(story.authorUid)) {
        storyMap.set(story.authorUid, story);
      }
    });
    
    return Array.from(storyMap.values());
  } catch (error) {
    console.error('Error fetching stories:', error);
    return [];
  }
}

export async function addStoryView(storyId) {
  const { doc, updateDoc, arrayUnion } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');

  if (!auth.currentUser) return;

  try {
    const storyRef = doc(db, 'stories', storyId);
    const viewerId = auth.currentUser.uid;
    
    // Only add view if user hasn't already viewed
    await updateDoc(storyRef, {
      viewers: arrayUnion(viewerId)
    }).catch(() => {
      // Story may have expired or been deleted
    });
  } catch (error) {
    console.error('Error adding story view:', error);
  }
}

export async function deleteStory(storyId) {
  const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');

  if (!auth.currentUser) throw new Error('Must be signed in');

  try {
    const storyRef = doc(db, 'stories', storyId);
    await deleteDoc(storyRef);
  } catch (error) {
    console.error('Error deleting story:', error);
    throw error;
  }
}

export async function updateStory(storyId, storyData) {
  const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  if (!auth.currentUser) throw new Error('Must be signed in to edit a story');
  const updates = {
    type: storyData.type,
    content: storyData.content || storyData.text || '',
    mediaUrl: storyData.mediaUrl || storyData.imageData || '',
    imageData: storyData.imageData || storyData.mediaUrl || '',
    category: storyData.category || 'learning',
    ...(storyData.music ? { music: storyData.music } : {})
  };
  await updateDoc(doc(db, 'stories', storyId), updates);
}

export function getStoryCategory(categoryKey) {
  return storyCategories[categoryKey] || '🚀 Learning Update';
}

export function getCategoryFromEmoji(categoryText) {
  for (const [key, value] of Object.entries(storyCategories)) {
    if (value === categoryText) return key;
  }
  return 'learning';
}

export function renderStoryCard(story) {
  return `
    <div class="story-card" data-story-id="${escapeHtml(story.id)}">
      <div class="story-image-wrapper">
        <img 
          src="${story.avatarUrl ? escapeHtml(story.avatarUrl) : `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23667eea' width='100' height='100'/%3E%3Ctext x='50' y='55' font-size='50' text-anchor='middle' fill='%23fff' font-weight='bold'%3E${initials(story.authorName)}%3C/text%3E%3C/svg%3E`}" 
          alt="Story by ${escapeHtml(story.authorName)}"
          class="story-avatar"
        >
      </div>
      <div class="story-info">
        <p class="story-name">${escapeHtml(story.authorName)}</p>
        <p class="story-time">${relativeTime(story.createdAt)}</p>
      </div>
    </div>
  `;
}

export function renderStoryViewer(story) {
  const categoryLabel = getStoryCategory(story.category);
  const music = story.music?.videoId ? `<a class="story-music-sticker" href="https://www.youtube.com/watch?v=${encodeURIComponent(story.music.videoId)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-music"></i> ${escapeHtml(story.music.title || 'Music')}</a>` : '';
  
  if (story.type === 'image') {
    return `
      <div class="story-viewer-content image-story">
        <img src="${escapeHtml(story.mediaUrl)}" alt="Story image" class="story-image-full">
        <div class="story-overlay">
          <p class="story-caption">${escapeHtml(story.content)}</p>
          <span class="story-category">${escapeHtml(categoryLabel)}</span>
          ${music}
        </div>
      </div>
    `;
  } else {
    return `
      <div class="story-viewer-content text-story">
        <div class="text-story-content">
          <span class="story-category">${escapeHtml(categoryLabel)}</span>
          <p class="story-text">${escapeHtml(story.content)}</p>
          ${music}
        </div>
      </div>
    `;
  }
}
