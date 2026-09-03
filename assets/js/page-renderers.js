/* =========================================================
   PAGE RENDERERS MODULE — Course platform, live hub, chat rendering
   =========================================================
   Handles rendering and state management for the course platform,
   live streaming hub, and related features.
   ========================================================= */

// State management
const COURSE_PROGRESS_KEY = 'siam_portfolio_course_progress';
let cachedCourses = [];
let coursePlatformInitialized = false;
let selectedCourseId = null;
let selectedLessonId = null;
let currentCourseProgress = {};
let currentSearchValue = '';
let courseCatalogFilter = 'all';
let courseLanguageFilter = 'all';
let activeCourse = null;
let activeLessonNotes = '';
let collapsedModules = new Set();
let currentSignedInUid = null;
let lessonPlayerVisible = false;

// Export state getters
export function getCurrentSignedInUid() { return currentSignedInUid; }
export function setCurrentSignedInUid(uid) { currentSignedInUid = uid; }
export function getActiveCourse() { return activeCourse; }
export function setActiveCourse(course) { activeCourse = course; }
export function getLessonPlayerVisible() { return lessonPlayerVisible; }
export function setLessonPlayerVisible(visible) { lessonPlayerVisible = visible; }

/* ---------- Progress Management ---------- */
export function getCourseProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(COURSE_PROGRESS_KEY) || '{}');
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function saveCourseProgress(progress) {
  localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(progress));
  currentCourseProgress = progress;

  // Fire-and-forget push to Firestore
  if (currentSignedInUid && activeCourse) {
    const courseId = activeCourse.id;
    const courseProgress = progress[courseId];
    if (courseProgress) {
      import('./courses-db.js')
        .then(({ saveUserCourseProgress }) => saveUserCourseProgress(currentSignedInUid, courseId, courseProgress))
        .catch(err => console.error('Cloud progress sync failed:', err));
    }
  }
}

/* ---------- Utilities ---------- */
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

export function getYoutubeEmbedUrl(url) {
  if (!url) return null;
  const value = String(url).trim();
  let id = /^[\w-]{11}$/.test(value) ? value : null;
  try {
    if (!id) {
      const parsed = new URL(value);
      const candidate = parsed.hostname === 'youtu.be'
        ? parsed.pathname.slice(1)
        : parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean).pop();
      id = candidate && /^[\w-]{11}$/.test(candidate) ? candidate : null;
    }
  } catch {
    return null;
  }
  return id ? `https://www.youtube.com/embed/${id}?controls=1&rel=0&playsinline=1` : null;
}

export function getYoutubeThumbnailUrl(url) {
  const embed = getYoutubeEmbedUrl(url);
  const id = embed?.match(/embed\/([\w-]{11})/)?.[1];
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '';
}

/* ---------- Course Data & Rendering ---------- */
function normalizeCourse(course) {
  const lessons = Array.isArray(course.lessons) ? course.lessons : [];
  const modules = Array.isArray(course.modules) && course.modules.length
    ? course.modules
    : [{
        id: `${course.id}-module-1`,
        title: course.moduleTitle || 'Course Module',
        lessons: lessons.map(lesson => ({ id: lesson.id, title: lesson.title, duration: lesson.duration || '0 min' }))
      }];

  return {
    ...course,
    lessons,
    modules,
    description: course.description || 'A premium course designed to help you build real-world skills.',
    status: course.status || 'published',
    category: course.category || 'Python',
    moduleTitle: course.moduleTitle || 'Course Module',
    createdAt: course.createdAt || Date.now()
  };
}

export async function loadCourses() {
  try {
    const { fetchAllCourses } = await import('./courses-db.js');
    const courses = await fetchAllCourses();
    cachedCourses = courses.map(normalizeCourse);
  } catch (error) {
    console.error('loadCourses() failed:', error);
    cachedCourses = [];
    throw error;
  }
}

export function getCachedCourses() { return cachedCourses; }

export function getCoursePercent(course) {
  const total = course?.lessons?.length || 0;
  const completed = getCompletedLessons(course).size;
  return total ? Math.round((completed / total) * 100) : 0;
}

export function getCourseRoute(courseId, lessonId = '') {
  return lessonId
    ? `/courses/${encodeURIComponent(courseId)}/lesson/${encodeURIComponent(lessonId)}`
    : `/courses/${encodeURIComponent(courseId)}`;
}

export function pushCourseRoute(courseId, lessonId = '') {
  window.history.pushState({}, '', getCourseRoute(courseId, lessonId));
}

export function getCourseStateLabel(course) {
  const percent = getCoursePercent(course);
  if (percent >= 100) return 'Review';
  if (getCourseProgress()?.[course.id]?.lastLessonId) return 'Continue';
  return 'Start';
}

export function getCourseCardMeta(course) {
  const lessons = Array.isArray(course?.lessons) ? course.lessons : [];
  const totalMinutes = lessons.reduce((sum, lesson) => {
    const parsed = Number(String(lesson?.duration || '').match(/\d+/)?.[0] || '0');
    return sum + parsed;
  }, 0);
  const level = String(course?.level || course?.category || 'Beginner').trim() || 'Beginner';
  const durationText = totalMinutes > 0 ? `${totalMinutes} min` : (course?.duration || 'Self-paced');
  const freePreview = lessons.some(lesson => lesson?.freePreview === true);
  const description = String(course?.description || 'Learn by building practical projects with clear guidance and hands-on exercises.').trim();

  return { level, durationText, freePreview, description };
}

export function getCurrentCourse() {
  if (!cachedCourses.length) return null;
  const publishedCourses = cachedCourses.filter(course => course.status === 'published');
  if (!publishedCourses.length) return null;
  const selected = publishedCourses.find(course => course.id === selectedCourseId) || publishedCourses[0];
  selectedCourseId = selected.id;
  return selected;
}

export function getCurrentLesson(course) {
  if (!course || !Array.isArray(course.lessons) || !course.lessons.length) return null;
  const lesson = course.lessons.find(item => item.id === selectedLessonId);
  if (lesson) return lesson;
  const progress = getCourseProgress();
  const savedLessonId = progress?.[course.id]?.lastLessonId;
  if (savedLessonId) {
    const fromProgress = course.lessons.find(item => item.id === savedLessonId);
    if (fromProgress) {
      selectedLessonId = fromProgress.id;
      return fromProgress;
    }
  }
  selectedLessonId = course.lessons[0].id;
  return course.lessons[0];
}

export function getCompletedLessons(course) {
  const progress = getCourseProgress();
  return new Set(progress?.[course.id]?.completedLessons || []);
}

export function updateProgressBar(course) {
  const progress = getCourseProgress();
  const completed = getCompletedLessons(course).size;
  const total = course.lessons.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const bar = document.getElementById('courseOverviewProgressBar');
  const text = document.getElementById('courseOverviewProgressText');
  if (bar) bar.style.width = `${percent}%`;
  if (text) text.textContent = `${percent}% Complete · ${completed} / ${total}`;
  if (progress?.[course.id]) {
    progress[course.id].completion = percent;
    saveCourseProgress(progress);
  }
}

export function updateHeroMetrics() {
  const published = cachedCourses.filter(course => course.status === 'published').length;
  const upcoming = cachedCourses.filter(course => course.status === 'upcoming').length;
  const lessonCount = cachedCourses.reduce((total, course) => total + (Array.isArray(course.lessons) ? course.lessons.length : 0), 0);
  document.getElementById('courseCount').textContent = published;
  document.getElementById('lessonCount').textContent = lessonCount;
  document.getElementById('upcomingCount').textContent = upcoming;
}

/* Large rendering function - kept for space but exported */
export function renderPublishedCourseCatalog() {
  const catalog = document.getElementById('publishedCourseCatalog');
  if (!catalog) return;
  const courses = cachedCourses.filter(course => {
      if (course.status !== 'published') return false;
  if (courseLanguageFilter !== 'all' && (course.language || '').toLowerCase() !== courseLanguageFilter) return false;
    if (courseCatalogFilter === 'paid') return Number(course.price) > 0;
    if (courseCatalogFilter === 'free') return Number(course.price) <= 0;
    return true;
  });
    catalog.innerHTML = courses.map(course => {
    const progress = getCoursePercent(course);
    const thumbnail = course.thumbnail || getYoutubeThumbnailUrl(course.videoUrl);
    const fallbackTitle = escapeHtml(String(course.title || 'Course').slice(0, 24));
    const { level, durationText, freePreview, description } = getCourseCardMeta(course);
    const priceBadge = Number(course.price) > 0 ? `৳${Number(course.price).toLocaleString('en-BD')}` : 'Free';
    const freePreviewBadge = freePreview ? '<span class="lms-course-tag soft">Free Preview</span>' : '';
    const descriptionText = escapeHtml(description.length > 115 ? `${description.slice(0, 112)}...` : description);
    const levelText = escapeHtml(level);
    const durationLabel = escapeHtml(durationText);
    return `<a class="lms-course-card" data-course-id="${escapeHtml(course.id)}" href="course.html?course=${encodeURIComponent(course.id)}" aria-label="View ${escapeHtml(course.title)} course details">
          <span class="lms-course-thumbnail ${thumbnail ? 'has-image' : ''}">${thumbnail ? `<img src="${escapeHtml(thumbnail)}" alt="${escapeHtml(course.title)} thumbnail" loading="lazy" decoding="async">` : `<span class="lms-course-fallback"><i class="fa-solid fa-graduation-cap"></i><strong>${fallbackTitle}</strong></span>`}<span class="lms-course-label">${escapeHtml(course.category || 'Course')}</span><span class="lms-course-price-badge">${priceBadge}</span></span>
      <span class="lms-course-body">
        <strong class="lms-course-title">${escapeHtml(course.title)}</strong>
        <span class="lms-course-meta-row">
          <span class="lms-course-tag">${levelText}</span>
          <span class="lms-course-tag muted">${durationLabel}</span>
          ${freePreviewBadge}
        </span>
        <span class="lms-course-summary">${descriptionText}</span>
        <span class="lms-course-progress"><span class="lms-course-progress-track"><span style="width:${progress}%"></span></span><span class="lms-course-percent">${progress}%<small>COMPLETE</small></span></span>
        <span class="lms-course-view">View Course <i class="fa-solid fa-arrow-right"></i></span>
      </span>
    </a>`;
  }).join('');
  catalog.querySelectorAll('.lms-course-thumbnail img').forEach(image => {
    let retryCount = 0;
    const maxRetries = 2;
    image.addEventListener('error', () => {
      const src = image.src;
      // Try fallback YouTube thumbnail qualities if available
      if (src.includes('img.youtube.com') && retryCount < maxRetries) {
        retryCount++;
        if (retryCount === 1 && !src.includes('hqdefault')) {
          // Try hqdefault (480x360) - more widely available
          image.src = src.replace(/\/maxresdefault\.jpg/, '/hqdefault.jpg');
          return;
        }
        if (retryCount === 2 && !src.includes('mqdefault')) {
          // Try mqdefault (320x180) as last resort
          image.src = src.replace(/\/(maxresdefault|hqdefault)\.jpg/, '/mqdefault.jpg');
          return;
        }
      }
      // If all retries exhausted, show fallback
      const thumbnailContainer = image.parentElement;
      image.remove();
      thumbnailContainer?.classList.remove('has-image');
      const title = thumbnailContainer?.closest('.lms-course-card')?.querySelector('.lms-course-title')?.textContent || 'Course';
      thumbnailContainer?.insertAdjacentHTML('afterbegin', `<span class="lms-course-fallback"><i class="fa-solid fa-graduation-cap"></i><strong>${escapeHtml(title.slice(0, 24))}</strong></span>`);
    }, { once: false });
  });
}

export function renderLanguageExplorer() {
  const explorer = document.getElementById('languageExplorer');
  if (!explorer) return;
  const published = cachedCourses.filter(course => course.status === 'published');
  const languages = [...new Set(published.map(course => String(course.language || '').trim()).filter(Boolean))]
    .sort((left, right) => left.localeCompare(right));
  explorer.innerHTML = [
    `<button type="button" class="language-chip ${courseLanguageFilter === 'all' ? 'active' : ''}" data-language-filter="all"><strong>All</strong><span>${published.length} courses</span></button>`,
    ...languages.map(language => {
      const count = published.filter(course => String(course.language || '').toLowerCase() === language.toLowerCase()).length;
      const slug = language.toLowerCase();
      return `<button type="button" class="language-chip ${courseLanguageFilter === slug ? 'active' : ''}" data-language-filter="${escapeHtml(slug)}"><strong>${escapeHtml(language)}</strong><span>${count} ${count === 1 ? 'course' : 'courses'}</span></button>`;
    })
  ].join('');
  explorer.querySelectorAll('[data-language-filter]').forEach(button => button.addEventListener('click', () => {
    courseLanguageFilter = button.dataset.languageFilter || 'all';
    renderLanguageExplorer();
    renderPublishedCourseCatalog();
  }));
}

export function bindCourseFilters() {
  document.querySelectorAll('[data-course-filter]').forEach(tab => {
    tab.addEventListener('click', () => {
      courseCatalogFilter = tab.dataset.courseFilter || 'all';
      document.querySelectorAll('[data-course-filter]').forEach(item => item.classList.toggle('active', item === tab));
      renderPublishedCourseCatalog();
      renderLanguageExplorer();
    });
  });
}

/* Continue in next part due to length - see rest in original file */
export function renderPublicCoursePreview(course) {
  if (!course) return;
  activeCourse = course;
  const platform = document.getElementById('coursePlatform');
  const gate = document.getElementById('courseSignInGate');
  const player = document.querySelector('.course-lesson-player');
  const thumbnail = course.thumbnail || getYoutubeThumbnailUrl(course.videoUrl);
  const totalDuration = course.lessons.reduce((sum, lesson) => sum + parseInt(String(lesson.duration).match(/\d+/)?.[0] || '0', 10), 0);

  document.getElementById('courseOverviewThumbnail')?.classList.toggle('hidden', !thumbnail);
  const overviewThumbnail = document.getElementById('courseOverviewThumbnail');
  if (overviewThumbnail) {
    overviewThumbnail.src = thumbnail || '';
    overviewThumbnail.alt = `${course.title} thumbnail`;
    overviewThumbnail.onerror = () => {
      overviewThumbnail.removeAttribute('src');
      overviewThumbnail.classList.add('hidden');
    };
  }
  document.getElementById('courseOverviewTitle').textContent = course.title;
  document.getElementById('courseOverviewDescription').textContent = course.description;
  document.getElementById('courseOverviewInstructor').textContent = course.instructor || 'CodeWithSiam';
  document.getElementById('courseOverviewPrice').textContent = Number(course.price) > 0 ? `৳${Number(course.price).toLocaleString('en-BD')}` : 'Free';
  const bkash = course.payment?.bkash || '01644171751';
  const rocket = course.payment?.rocket || '01644171751';
  const bank = course.payment?.bank || 'Contact for bank details';
  document.getElementById('courseOverviewBkash').textContent = bkash;
  document.getElementById('courseOverviewRocket').textContent = rocket;
  document.getElementById('courseOverviewBank').textContent = bank;
  document.getElementById('courseOverviewBkashLink').href = `tel:${bkash.replace(/\D/g, '')}`;
  document.getElementById('courseOverviewRocketLink').href = `tel:${rocket.replace(/\D/g, '')}`;
  document.getElementById('courseOverviewLessons').textContent = 'Sign in to load lessons';
  document.getElementById('courseOverviewDuration').textContent = `${totalDuration} min`;
  document.getElementById('courseOverviewProgressText').textContent = 'Sign in to track progress';
  document.getElementById('courseOverviewProgressBar').style.width = '0%';
  document.getElementById('moduleList').innerHTML = '<p class="course-description">Sign in with Google to access the course playlist.</p>';
  platform?.classList.remove('hidden');
  gate?.classList.remove('hidden');
  player?.classList.add('hidden');
  platform?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Course rendering continues with more functions... */
/* Kept in this file due to complexity; see script.js for full implementation context */

export function renderUpcomingCourses() {
  const section = document.getElementById('upcomingCoursesSection');
  const list = document.getElementById('upcomingCourseList');
  const upcoming = cachedCourses.filter(course => course.status === 'upcoming' && course.showOnIndex === true);
  if (!section || !list) return;
  if (!upcoming.length) {
    section.classList.add('hidden');
    return;
  }
  section.classList.remove('hidden');

  const THEME_BY_CATEGORY = {
    'Data Science': { gradient: 'linear-gradient(135deg,#f5576c,#f093fb)', icon: 'fa-chart-line' },
    'Python':        { gradient: 'linear-gradient(135deg,#4b8bbe,#ffd43b)', icon: 'fa-brands fa-python' },
    'Web Development': { gradient: 'linear-gradient(135deg,#00c6ff,#0072ff)', icon: 'fa-code' },
    'Machine Learning': { gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', icon: 'fa-brain' },
    'default':       { gradient: 'linear-gradient(135deg,#43cea2,#185a9d)', icon: 'fa-graduation-cap' },
  };

  list.innerHTML = upcoming.map(course => {
    const theme = THEME_BY_CATEGORY[course.category] || THEME_BY_CATEGORY.default;
    const lessonCount = Array.isArray(course.lessons) ? course.lessons.length : 0;
    const videoUrl = course.videoUrl || '';
    const thumbnail = course.thumbnail || getYoutubeThumbnailUrl(videoUrl);
    const cardAction = videoUrl ? `data-video-url="${videoUrl}"` : '';
    const hasThumbnail = !!thumbnail;
    const safeThumb = hasThumbnail ? thumbnail.replace(/"/g, '&quot;') : '';

    return `
    <article class="upcoming-card" ${cardAction}>
          <div class="course-thumbnail upcoming-thumb ${hasThumbnail ? 'has-image' : ''}" style="${hasThumbnail ? '' : `background:${theme.gradient}`}">
        <span class="upcoming-soon-badge">${Number(course.price) > 0 ? `৳${Number(course.price).toLocaleString('en-BD')}` : 'Free'}</span>
        ${hasThumbnail ? `<img class="upcoming-thumb-image" src="${safeThumb}" alt="${course.title}" loading="lazy" />` : `<i class="fa-solid ${theme.icon}"></i>`}
      </div>
      <div class="upcoming-card-body">
        <p class="eyebrow">${course.category || 'Coming soon'}</p>
        <h4>${course.title}</h4>
        <p>${course.description}</p>
        <span class="course-badge">${lessonCount} lesson${lessonCount === 1 ? '' : 's'}</span>
      </div>
    </article>
  `;
  }).join('');

  list.querySelectorAll('.upcoming-card[data-video-url]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-video-url');
      if (!target) return;
      window.open(target, '_blank', 'noopener,noreferrer');
    });
  });
}

/* Live Hub Rendering */
export function formatLiveDate(value) {
  if (!value) return 'Date unavailable';
  const date = value.toDate ? value.toDate() : new Date(value);
  return Number.isNaN(date.getTime()) ? 'Date unavailable' : date.toLocaleDateString('en-BD', { dateStyle: 'medium' });
}

export function initLiveHub() {
  const current = document.getElementById('liveHubCurrent');
  const archive = document.getElementById('liveArchiveList');
  const count = document.getElementById('liveArchiveCount');
  if (!current || !archive) return;
  import('./courses-db.js').then(async ({ fetchLiveSettings, fetchLiveSessions, extractYoutubeId }) => {
    const [settings, sessions] = await Promise.all([fetchLiveSettings().catch(() => ({})), fetchLiveSessions().catch(() => [])]);
    const liveId = extractYoutubeId(settings.url || '');
    if (settings.enabled === true && liveId) {
      current.innerHTML = `<div class="live-hub-empty"><i class="fa-solid fa-lock"></i><strong>Live room is available</strong><span>Sign in to watch and join the conversation.</span><a class="btn btn-primary" href="live.html">Enter Live room</a></div>`;
    }
    count.textContent = `${sessions.length} session${sessions.length === 1 ? '' : 's'}`;
    archive.innerHTML = sessions.length ? sessions.map(session => `<article class="live-archive-card"><div class="live-archive-thumb"><img src="https://i.ytimg.com/vi/${escapeHtml(session.youtubeVideoId || extractYoutubeId(session.videoUrl || ''))}/hqdefault.jpg" alt="${escapeHtml(session.title || 'Live session')}" loading="lazy"><span><i class="fa-solid fa-lock"></i> Members</span></div><div class="live-archive-copy"><time>${formatLiveDate(session.endedAt)}</time><h4>${escapeHtml(session.title || 'Live session')}</h4><p>${escapeHtml(session.description || 'Sign in to watch this CodeWithSiam live replay.')}</p><a href="live.html">Enter Live room <i class="fa-solid fa-arrow-right"></i></a></div></article>`).join('') : '<p class="live-hub-empty">Your completed live sessions will be saved here.</p>';
  }).catch(() => { archive.innerHTML = '<p class="live-hub-empty">The live archive is unavailable right now.</p>'; });
}

export function initLiveNotification() {
  const button = document.getElementById('liveNotificationBtn');
  const panel = document.getElementById('liveNotificationPanel');
  const frame = document.getElementById('liveNotificationFrame');
  const openLink = document.getElementById('liveNotificationOpen');
  if (!button || !panel || !frame || !openLink) return;
  import('./courses-db.js').then(async ({ fetchLiveSettings, extractYoutubeId }) => {
    const settings = await fetchLiveSettings().catch(() => ({}));
    const videoId = extractYoutubeId(settings.url || '');
    if (settings.enabled !== true || !videoId) return;
    button.classList.remove('hidden');
    frame.src = `https://www.youtube.com/embed/${videoId}?controls=1&rel=0&playsinline=1`;
    if (settings.chatEnabled !== false) initSiteLiveChat();
    else document.querySelector('.site-live-chat')?.classList.add('hidden');
    openLink.href = settings.url;
    button.addEventListener('click', () => {
      const open = panel.classList.toggle('hidden') === false;
      button.setAttribute('aria-expanded', String(open));
    });
    document.getElementById('closeLiveNotification')?.addEventListener('click', () => {
      panel.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
    });
  }).catch(() => {});
}

export async function initSiteLiveChat() {
  const messages = document.getElementById('liveChatMessages');
  const form = document.getElementById('liveChatForm');
  const nameInput = document.getElementById('liveChatName');
  const messageInput = document.getElementById('liveChatInput');
  const status = document.getElementById('liveChatStatus');
  if (!messages || !form || !messageInput || form.dataset.bound === 'true') return;
  form.dataset.bound = 'true';
  const savedName = localStorage.getItem('siam_live_chat_name') || '';
  nameInput.value = savedName;

  import('./firebase-init.js').then(async ({ db, auth, isFirebaseConfigured }) => {
    if (!isFirebaseConfigured || !db) throw new Error('Firebase is not configured');
    const currentUser = auth?.currentUser;
    if (!currentUser) {
      nameInput.value = '';
      nameInput.disabled = true;
      messageInput.disabled = true;
      form.querySelector('button[type="submit"]')?.setAttribute('disabled', 'true');
      status.textContent = 'Sign in to comment';
    } else {
      nameInput.value = currentUser.displayName || currentUser.email?.split('@')[0] || 'Member';
      nameInput.disabled = true;
    }
    const { collection, addDoc, deleteDoc, doc, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
    const chatQuery = query(collection(db, 'liveChatMessages'), orderBy('createdAt', 'desc'), limit(50));
    let replyTo = null;
    const replyState = document.getElementById('liveChatReplyState');
    const renderMessages = (items) => {
      const currentUid = auth?.currentUser?.uid || '';
      messages.innerHTML = items.length ? items.map(item => {
        const canManage = Boolean(currentUid && item.authorUid === currentUid);
        const controls = `<div class="live-chat-message-actions"><button type="button" data-chat-action="reply" data-message-id="${escapeHtml(item.id)}">Reply</button>${canManage ? `<button type="button" data-chat-action="edit" data-message-id="${escapeHtml(item.id)}">Edit</button><button type="button" data-chat-action="delete" data-message-id="${escapeHtml(item.id)}">Delete</button>` : ''}</div>`;
        const replyLabel = item.parentName ? `<small>Replying to ${escapeHtml(item.parentName)}</small>` : '';
        return `<article class="live-chat-message ${item.parentId ? 'is-reply' : ''}" data-message-id="${escapeHtml(item.id)}"><div class="live-chat-message-top"><strong>${escapeHtml(item.name || 'Guest')}</strong>${replyLabel}</div><p>${escapeHtml(item.text || '')}</p>${controls}</article>`;
      }).join('') : '<p class="live-chat-empty">Be the first to say hello.</p>';
      messages.scrollTop = messages.scrollHeight;
      status.textContent = `${items.length} recent messages`;
    };
    onSnapshot(chatQuery, (snapshot) => {
      const items = snapshot.docs.map(item => ({ id: item.id, ...item.data() })).reverse();
      renderMessages(items);
      messages.dataset.items = JSON.stringify(items);
    }, () => { status.textContent = 'Chat unavailable'; });
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!currentUser) return;
      const name = currentUser.displayName?.trim().slice(0, 32) || currentUser.email?.split('@')[0] || 'Member';
      const text = messageInput.value.trim().slice(0, 240);
      if (!text) return;
      const button = form.querySelector('button');
      button.disabled = true;
      try {
        const parentName = replyTo?.name || '';
        const authorIsAdmin = currentUser.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com';
        await addDoc(collection(db, 'liveChatMessages'), { name, avatarUrl: currentUser.photoURL || '', text, parentId: replyTo?.id || '', parentName, authorUid: currentUser.uid, authorIsAdmin, likes: [], pinned: false, createdAt: serverTimestamp() });
        messageInput.value = '';
        replyTo = null;
        if (replyState) { replyState.textContent = ''; replyState.classList.add('hidden'); }
      } catch (error) {
        status.textContent = 'Could not send message';
        console.error('Live chat send failed:', error);
      } finally { button.disabled = false; }
    });
    messages.addEventListener('click', async (event) => {
      const button = event.target.closest('[data-chat-action]');
      if (!button) return;
      const items = JSON.parse(messages.dataset.items || '[]');
      const item = items.find(entry => entry.id === button.dataset.messageId);
      if (!item) return;
      const action = button.dataset.chatAction;
      if (action === 'reply') {
        replyTo = item;
        if (replyState) { replyState.textContent = `Replying to ${item.name || 'Guest'} (tap Escape to cancel)`; replyState.classList.remove('hidden'); }
        messageInput.focus();
      } else if (action === 'edit') {
        const text = prompt('Edit your comment:', item.text || '');
        if (text?.trim()) await updateDoc(doc(db, 'liveChatMessages', item.id), { text: text.trim().slice(0, 240), editedAt: serverTimestamp() });
      } else if (action === 'delete' && confirm('Delete this comment?')) {
        await deleteDoc(doc(db, 'liveChatMessages', item.id));
      }
    });
    messageInput.addEventListener('keydown', event => {
      if (event.key === 'Escape' && replyTo) { replyTo = null; replyState?.classList.add('hidden'); }
    });
  }).catch(() => { status.textContent = 'Chat setup required'; });
}

export function initChatToggle(){
  const toggle = document.getElementById('chatToggleBtn');
  const chat = document.getElementById('chatbot') || document.querySelector('.chatbox');
  if(!toggle || !chat) return;
  if (toggle.dataset.chatBound === 'true') return;
  toggle.dataset.chatBound = 'true';

  function setOpen(open){
    chat.classList.toggle('active', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    chat.setAttribute('aria-hidden', String(!open));
    if(open){
      setTimeout(()=> document.getElementById('input')?.focus(), 180);
    } else {
      toggle.focus();
    }
  }

  toggle.onclick = ()=>{
    const isOpen = chat.classList.contains('active');
    setOpen(!isOpen);
  };

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && chat.classList.contains('active')){
      setOpen(false);
    }
  });
}

export async function initCourseDeck(){
  bindCourseFilters();
  await initCoursePlatform();
}

export async function initCoursePlatform() {
  const platform = document.getElementById('coursePlatform');
  const loading = document.getElementById('courseLoadingState');
  const empty = document.getElementById('courseEmptyState');
  const gate = document.getElementById('courseSignInGate');
  if (!platform) return;

  loading?.classList.remove('hidden');
  platform.classList.add('hidden');
  empty?.classList.add('hidden');
  gate?.classList.add('hidden');

  try {
    await loadCourses();
  } catch (error) {
    loading?.classList.add('hidden');
    if (empty) {
      empty.classList.remove('hidden');
      empty.innerHTML = '<h3>Courses unavailable right now</h3><p>We could not reach the course database. Please refresh, or check back shortly.</p>';
    }
    return;
  }

  updateHeroMetrics();
  renderPublishedCourseCatalog();
  renderUpcomingCourses();

  if (window.location.pathname.split('/').filter(Boolean)[0] === 'courses') {
    syncCourseRoute();
  }

  const course = getCurrentCourse();
  if (!course) {
    loading?.classList.add('hidden');
    if (empty) {
      empty.innerHTML = '<h3>No published courses yet</h3><p>Upload your first course from the admin page to launch a premium learning experience.</p>';
      empty.classList.remove('hidden');
    }
    return;
  }

  if (!currentSignedInUid) {
    loading?.classList.add('hidden');
    platform?.classList.add('hidden');
    return;
  }

  if (!coursePlatformInitialized) {
    attachCourseEvents(course);
    coursePlatformInitialized = true;
  }

  if (!activeCourse) {
    loading?.classList.add('hidden');
    platform.classList.add('hidden');
    return;
  }

  const progress = getCourseProgress();
  if (progress?.[course.id]?.lastLessonId) {
    selectedLessonId = progress[course.id].lastLessonId;
  }

  renderCourseDetail(course);
  updateProgressBar(course);
  loading?.classList.add('hidden');
  platform.classList.remove('hidden');

  const continueBtn = document.getElementById('continueLearningCourseBtn');
  const continueBtn2 = document.getElementById('continueLearningBtn');
  if (continueBtn) {
    continueBtn.textContent = progress?.[course.id]?.lastLessonId ? 'Continue Learning' : 'Start Learning';
  }
  if (continueBtn2) {
    continueBtn2.textContent = progress?.[course.id]?.lastLessonId ? 'Continue Learning' : 'Start Learning';
  }
}

export function syncCourseRoute() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (parts[0] !== 'courses' || !cachedCourses.length) return;
  selectedCourseId = decodeURIComponent(parts[1] || '');
  selectedLessonId = parts[2] === 'lesson' ? decodeURIComponent(parts[3] || '') : null;
  const course = getCurrentCourse();
  if (!course) return;
  if (currentSignedInUid) {
    lessonPlayerVisible = Boolean(selectedLessonId);
    document.getElementById('coursePlatform')?.classList.remove('hidden');
    renderCourseDetail(course);
  } else {
    renderPublicCoursePreview(course);
  }
}

/* NOTE: This module contains course platform core logic. 
   Other course functions (renderCourseDetail, attachCourseEvents, etc.) 
   remain in main script.js for now due to size constraints. 
   They export as-needed for organization. */
