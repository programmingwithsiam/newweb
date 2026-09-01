import { auth, db } from './firebase-init.js';
import { observeAuthState } from './auth.js?v=20260829-auth-fix-1';

let currentUser = null;
let viewingUserId = null;
let userProfileData = null;

const profileContent = document.getElementById('profileContent');
const profileLoading = document.getElementById('profileLoading');
const editProfileModal = document.getElementById('editProfileModal');
const editProfileBtn = document.getElementById('editProfileBtn');
const editProfileForm = document.getElementById('editProfileForm');

function escapeHtml(value) { const node = document.createElement('div'); node.textContent = String(value ?? ''); return node.innerHTML; }
function initials(name) { return String(name || 'Member').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase(); }
function relativeTime(value) { const date = value?.toDate?.() || new Date(value || 0); const diff = Date.now() - date.getTime(); const days = Math.floor(diff / 86400000); if (days === 0) return 'Today'; if (days === 1) return 'Yesterday'; if (days < 7) return `${days} days ago`; if (days < 30) return `${Math.floor(days / 7)} weeks ago`; return `${Math.floor(days / 30)} months ago`; }

async function getUserProfile(userId) {
  const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? { id: userSnap.id, ...userSnap.data() } : null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

async function getUserPosts(userId) {
  const { collection, query, where, getDocs, orderBy } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  try {
    const q = query(collection(db, 'communityPosts'), where('authorUid', '==', userId), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching user posts:', error);
    return [];
  }
}

async function isUserFollowing(followerUid, followeeUid) {
  if (!followerUid || !followeeUid) return false;
  const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  try {
    const userRef = doc(db, 'users', followerUid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const following = userSnap.data().following || [];
      return following.includes(followeeUid);
    }
    return false;
  } catch (error) {
    console.error('Error checking follow status:', error);
    return false;
  }
}

async function followUser(followerUid, followeeUid) {
  if (!followerUid || !followeeUid) return false;
  const { doc, updateDoc, arrayUnion, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  try {
    // Add to follower's following list
    await updateDoc(doc(db, 'users', followerUid), {
      following: arrayUnion(followeeUid),
      updatedAt: serverTimestamp()
    });
    // Add to followee's followers list
    await updateDoc(doc(db, 'users', followeeUid), {
      followers: arrayUnion(followerUid),
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error following user:', error);
    return false;
  }
}

async function unfollowUser(followerUid, followeeUid) {
  if (!followerUid || !followeeUid) return false;
  const { doc, updateDoc, arrayRemove, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  try {
    // Remove from follower's following list
    await updateDoc(doc(db, 'users', followerUid), {
      following: arrayRemove(followeeUid),
      updatedAt: serverTimestamp()
    });
    // Remove from followee's followers list
    await updateDoc(doc(db, 'users', followeeUid), {
      followers: arrayRemove(followerUid),
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error unfollowing user:', error);
    return false;
  }
}

async function renderUserProfile() {
  if (!userProfileData) return;

  const isOwnProfile = currentUser?.uid === viewingUserId;

  // Update header info
  document.getElementById('profileName').textContent = userProfileData.name || 'Member';
  document.getElementById('profileUsername').textContent = '@' + (userProfileData.username || 'user');
  document.getElementById('profileRole').textContent = userProfileData.learningRole || 'Learning Role';
  document.getElementById('profileBio').textContent = userProfileData.bio || 'No bio yet';
  
  // Update timestamps
  const joinDate = userProfileData.createdAt?.toDate?.() || new Date(userProfileData.createdAt || 0);
  document.getElementById('profileJoinDate').textContent = `Joined ${joinDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`;
  document.getElementById('aboutJoinDate').textContent = joinDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Update profile picture
  if (userProfileData.profilePicture) {
    document.getElementById('profilePicture').src = userProfileData.profilePicture;
    document.getElementById('profilePicture').alt = userProfileData.name || 'Profile picture';
  } else {
    document.getElementById('profilePicture').src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23101722' width='100' height='100'/%3E%3Ctext x='50' y='55' font-size='50' text-anchor='middle' fill='%23c9f35b' font-weight='bold'%3E${initials(userProfileData.name)}%3C/text%3E%3C/svg%3E`;
  }

  // Update cover photo
  if (userProfileData.coverPhoto) {
    document.getElementById('profileCover').src = userProfileData.coverPhoto;
  }

  // Update skills
  const skillsSection = document.getElementById('skillsSection');
  const skillsTags = document.getElementById('skillsTags');
  const aboutSkills = document.getElementById('aboutSkills');
  
  if (userProfileData.skills && userProfileData.skills.length > 0) {
    skillsSection.classList.remove('hidden');
    skillsTags.innerHTML = userProfileData.skills
      .map(skill => `<span class="skill-tag">${escapeHtml(skill)}</span>`)
      .join('');
    aboutSkills.innerHTML = userProfileData.skills
      .map(skill => `<span class="about-skill-tag">${escapeHtml(skill)}</span>`)
      .join('');
  } else {
    skillsSection.classList.add('hidden');
  }

  // Update bio in about tab
  document.getElementById('aboutBio').textContent = userProfileData.bio || 'No bio yet';

  // Update stats
  const userPosts = await getUserPosts(viewingUserId);
  document.getElementById('totalPosts').textContent = userPosts.length;
  document.getElementById('totalProjects').textContent = userProfileData.totalProjects || 0;
  document.getElementById('followerCount').textContent = userProfileData.followers?.length || 0;
  document.getElementById('followingCount').textContent = userProfileData.following?.length || 0;

  // Update action buttons
  if (isOwnProfile) {
    editProfileBtn.classList.remove('hidden');
  } else {
    if (!currentUser) {
      // Show message to sign in
      const messageBtn = document.getElementById('messageProfileBtn');
      messageBtn.textContent = 'Sign in to follow';
      messageBtn.classList.remove('hidden');
      messageBtn.addEventListener('click', () => {
        window.location.href = 'community.html#signin';
      });
    } else {
      const followBtn = document.getElementById('followProfileBtn');
      const messageBtn = document.getElementById('messageProfileBtn');
      messageBtn.classList.remove('hidden');
      messageBtn.addEventListener('click', () => {
        window.location.href = `community.html?message=${escapeHtml(viewingUserId)}`;
      });

      // Check if already following
      const isFollowing = await isUserFollowing(currentUser.uid, viewingUserId);
      followBtn.classList.remove('hidden');
      
      // Update follow button text and handler
      const updateFollowBtn = () => {
        followBtn.textContent = isFollowing 
          ? '✓ Following' 
          : '+ Follow';
        followBtn.className = isFollowing 
          ? 'profile-action-btn follow-btn following' 
          : 'profile-action-btn follow-btn';
      };
      
      updateFollowBtn();
      
      followBtn.addEventListener('click', async () => {
        followBtn.disabled = true;
        try {
          if (isFollowing) {
            await unfollowUser(currentUser.uid, viewingUserId);
          } else {
            await followUser(currentUser.uid, viewingUserId);
          }
          // Update UI
          const newFollowStatus = await isUserFollowing(currentUser.uid, viewingUserId);
          const followers = userProfileData.followers || [];
          if (newFollowStatus && !followers.includes(currentUser.uid)) {
            followers.push(currentUser.uid);
          } else if (!newFollowStatus) {
            const idx = followers.indexOf(currentUser.uid);
            if (idx > -1) followers.splice(idx, 1);
          }
          document.getElementById('followerCount').textContent = followers.length;
          followBtn.disabled = false;
          // Update isFollowing variable and button
          return isUserFollowing(currentUser.uid, viewingUserId).then(status => {
            if (status !== isFollowing) {
              // Refresh the page to update all follow statuses
              location.reload();
            }
          });
        } catch (error) {
          console.error('Error toggling follow:', error);
          followBtn.disabled = false;
        }
      });
    }
  }

  // Render posts
  const userPostsFeed = document.getElementById('userPostsFeed');
  if (userPosts.length > 0) {
    userPostsFeed.innerHTML = userPosts.map(post => `
      <article class="post-card" data-post-id="${escapeHtml(post.id)}">
        <div class="post-head">
          <span class="post-avatar">${post.avatarUrl ? `<img src="${escapeHtml(post.avatarUrl)}" alt="">` : initials(post.authorName)}</span>
          <div>
            <strong>${escapeHtml(post.authorName || 'Member')}</strong>
            <time>${relativeTime(post.createdAt)}</time>
          </div>
        </div>
        <p class="post-text">${escapeHtml(post.text || '')}</p>
        ${post.imageData || post.imageUrl ? `<img class="post-image" src="${escapeHtml(post.imageData || post.imageUrl)}" alt="Post image" loading="lazy">` : ''}
      </article>
    `).join('');
  } else {
    userPostsFeed.innerHTML = '<p class="empty-message">No posts yet</p>';
  }

  profileLoading.classList.add('hidden');
  profileContent.classList.remove('hidden');
}

async function setupEditProfile() {
  if (!currentUser) return;

  // Set current values
  document.getElementById('editDisplayName').value = currentUser.displayName || '';
  document.getElementById('editUsername').value = currentUser.username || '';
  document.getElementById('editBio').value = currentUser.bio || '';
  document.getElementById('editRole').value = currentUser.learningRole || '';
  document.getElementById('editSkills').value = (currentUser.skills || []).join(', ');

  // File input handlers
  document.getElementById('profilePictureBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('editProfilePicture').click();
  });

  document.getElementById('coverPhotoBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('editCoverPhoto').click();
  });

  document.getElementById('editProfilePicture').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      document.getElementById('profilePictureFileName').textContent = file.name;
    }
  });

  document.getElementById('editCoverPhoto').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      document.getElementById('coverPhotoFileName').textContent = file.name;
    }
  });

  // Form submission
  editProfileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveProfileChanges();
  });
}

async function saveProfileChanges() {
  const { doc, updateDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  const { getStorage, ref, uploadBytes, getDownloadURL } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js');
  
  const status = document.getElementById('editStatus');
  status.textContent = 'Saving...';
  status.className = 'form-status';

  try {
    const storage = getStorage();
    const updates = {
      name: document.getElementById('editDisplayName').value.trim(),
      username: document.getElementById('editUsername').value.trim().toLowerCase(),
      bio: document.getElementById('editBio').value.trim(),
      learningRole: document.getElementById('editRole').value,
      skills: document.getElementById('editSkills').value
        .split(',')
        .map(s => s.trim())
        .filter(s => s),
      updatedAt: serverTimestamp()
    };

    // Handle profile picture upload
    const profilePictureFile = document.getElementById('editProfilePicture').files[0];
    if (profilePictureFile) {
      if (profilePictureFile.size > 5 * 1024 * 1024) {
        throw new Error('Profile picture must be smaller than 5 MB');
      }
      if (!profilePictureFile.type.startsWith('image/')) {
        throw new Error('Profile picture must be an image file');
      }
      
      const profilePicRef = ref(storage, `profile-pictures/${currentUser.uid}/picture`);
      status.textContent = 'Uploading profile picture...';
      await uploadBytes(profilePicRef, profilePictureFile);
      updates.profilePicture = await getDownloadURL(profilePicRef);
    }

    // Handle cover photo upload
    const coverPhotoFile = document.getElementById('editCoverPhoto').files[0];
    if (coverPhotoFile) {
      if (coverPhotoFile.size > 5 * 1024 * 1024) {
        throw new Error('Cover photo must be smaller than 5 MB');
      }
      if (!coverPhotoFile.type.startsWith('image/')) {
        throw new Error('Cover photo must be an image file');
      }
      
      const coverPhotoRef = ref(storage, `profile-pictures/${currentUser.uid}/cover`);
      status.textContent = 'Uploading cover photo...';
      await uploadBytes(coverPhotoRef, coverPhotoFile);
      updates.coverPhoto = await getDownloadURL(coverPhotoRef);
    }

    // Update user profile in Firestore
    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, updates);

    status.textContent = 'Profile updated successfully!';
    status.className = 'form-status success';

    // Close modal and refresh profile
    setTimeout(() => {
      document.querySelector('[data-close-modal]').click();
      location.reload();
    }, 1500);
  } catch (error) {
    console.error('Error saving profile:', error);
    status.textContent = error.message || 'Failed to save profile. Try again.';
    status.className = 'form-status error';
  }
}

function setupTabs() {
  const tabButtons = document.querySelectorAll('.profile-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;
      
      // Remove active class from all
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Add active class to clicked
      btn.classList.add('active');
      document.getElementById(tabName + 'Tab').classList.add('active');
    });
  });
}

function setupModals() {
  const editProfileModal = document.getElementById('editProfileModal');
  const followersModal = document.getElementById('followersModal');
  const followingModal = document.getElementById('followingModal');

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      editProfileModal?.classList.add('hidden');
      followersModal?.classList.add('hidden');
      followingModal?.classList.add('hidden');
    });
  });

  // Edit profile button
  editProfileBtn.addEventListener('click', () => {
    setupEditProfile();
    editProfileModal.classList.remove('hidden');
  });

  // Modal close on background click
  editProfileModal.addEventListener('click', (e) => {
    if (e.target === editProfileModal) {
      editProfileModal.classList.add('hidden');
    }
  });
  followersModal?.addEventListener('click', (e) => {
    if (e.target === followersModal) {
      followersModal.classList.add('hidden');
    }
  });
  followingModal?.addEventListener('click', (e) => {
    if (e.target === followingModal) {
      followingModal.classList.add('hidden');
    }
  });

  // Followers/Following stats click handlers
  document.getElementById('followerCount')?.addEventListener('click', async () => {
    const followers = userProfileData.followers || [];
    const followersList = document.getElementById('followersList');
    
    if (followers.length === 0) {
      followersList.innerHTML = '<p class="empty-message">No followers yet</p>';
    } else {
      followersList.innerHTML = '<div class="loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading...</div>';
      try {
        const userProfiles = [];
        for (const uid of followers) {
          const profile = await getUserProfile(uid);
          if (profile) userProfiles.push(profile);
        }
        followersList.innerHTML = userProfiles.map(user => `
          <div class="follower-item">
            <img src="${user.profilePicture || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23101722' width='100' height='100'/%3E%3Ctext x='50' y='55' font-size='50' text-anchor='middle' fill='%23c9f35b' font-weight='bold'%3E${initials(user.name)}%3C/text%3E%3C/svg%3E`}" alt="${user.name}" class="follower-avatar">
            <div class="follower-info">
              <a href="user-profile.html?uid=${user.id}" class="follower-name">${escapeHtml(user.name || 'Member')}</a>
              <p class="follower-username">@${escapeHtml(user.username || 'user')}</p>
            </div>
          </div>
        `).join('');
      } catch (error) {
        console.error('Error loading followers:', error);
        followersList.innerHTML = '<p class="error-message">Failed to load followers</p>';
      }
    }
    followersModal.classList.remove('hidden');
  });

  document.getElementById('followingCount')?.addEventListener('click', async () => {
    const following = userProfileData.following || [];
    const followingList = document.getElementById('followingList');
    
    if (following.length === 0) {
      followingList.innerHTML = '<p class="empty-message">Not following anyone yet</p>';
    } else {
      followingList.innerHTML = '<div class="loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading...</div>';
      try {
        const userProfiles = [];
        for (const uid of following) {
          const profile = await getUserProfile(uid);
          if (profile) userProfiles.push(profile);
        }
        followingList.innerHTML = userProfiles.map(user => `
          <div class="follower-item">
            <img src="${user.profilePicture || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23101722' width='100' height='100'/%3E%3Ctext x='50' y='55' font-size='50' text-anchor='middle' fill='%23c9f35b' font-weight='bold'%3E${initials(user.name)}%3C/text%3E%3C/svg%3E`}" alt="${user.name}" class="follower-avatar">
            <div class="follower-info">
              <a href="user-profile.html?uid=${user.id}" class="follower-name">${escapeHtml(user.name || 'Member')}</a>
              <p class="follower-username">@${escapeHtml(user.username || 'user')}</p>
            </div>
          </div>
        `).join('');
      } catch (error) {
        console.error('Error loading following:', error);
        followingList.innerHTML = '<p class="error-message">Failed to load following</p>';
      }
    }
    followingModal.classList.remove('hidden');
  });
}

async function init() {
  // Get userId from URL
  const params = new URLSearchParams(window.location.search);
  viewingUserId = params.get('uid');

  if (!viewingUserId) {
    profileLoading.innerHTML = '<p>User not found</p>';
    return;
  }

  userProfileData = await getUserProfile(viewingUserId);

  if (!userProfileData) {
    profileLoading.innerHTML = '<p>User profile not found</p>';
    return;
  }

  await renderUserProfile();
  setupTabs();
  setupModals();
}

observeAuthState(user => {
  currentUser = user;
  if (userProfileData && currentUser) {
    setupEditProfile();
  }
});

init().catch(error => {
  console.error('Error loading profile:', error);
  profileLoading.innerHTML = '<p>Error loading profile. Try again.</p>';
});
