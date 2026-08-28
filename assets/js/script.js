/* =========================================================
   SIAM.DEV — PREMIUM AI PORTFOLIO — SCRIPT
   =========================================================
   NOTE: Real authentication now lives in auth.js / auth-app.js
   (Firebase Authentication). This file no longer implements any
   login, registration, OTP, or session logic of its own — the
   portfolio is public by default, and auth-app.js gates the
   course dashboard / progress features and drives the header
   sign-in UI.
   ========================================================= */


/* =========================================================
   MAIN SITE EFFECTS (init after unlock)
   ========================================================= */
let siteEffectsInitialized = false;
function initSiteEffects(){
  if(siteEffectsInitialized) return;
  siteEffectsInitialized = true;

  initParticles();
  initHeader();
  initTypedText();
  initRevealOnScroll();
  initStatCounters();
  initSkillBars();
  initTiltCards();
  initMobileMenu();
  initCourseDeck();
  initLiveNotification();
  initLiveHub();
  initChatToggle();
}

function initLiveHub() {
  const current = document.getElementById('liveHubCurrent');
  const archive = document.getElementById('liveArchiveList');
  const count = document.getElementById('liveArchiveCount');
  if (!current || !archive) return;
  import('./courses-db.js').then(async ({ fetchLiveSettings, fetchLiveSessions, extractYoutubeId }) => {
    const [settings, sessions] = await Promise.all([fetchLiveSettings().catch(() => ({})), fetchLiveSessions().catch(() => [])]);
    const liveId = extractYoutubeId(settings.url || '');
    if (settings.enabled === true && liveId) {
      current.innerHTML = `<div class="live-hub-player"><div class="live-hub-player-copy"><span class="live-status"><span class="live-dot"></span> Live now</span><h3>${escapeHtml(settings.title || 'CodeWithSiam is live')}</h3><p>${escapeHtml(settings.description || 'Join the live session and learn by building along.')}</p><a class="btn btn-primary" href="${escapeHtml(settings.url)}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i> Open on YouTube</a></div><iframe src="https://www.youtube.com/embed/${liveId}?rel=0&playsinline=1" title="${escapeHtml(settings.title || 'CodeWithSiam live stream')}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
    }
    count.textContent = `${sessions.length} session${sessions.length === 1 ? '' : 's'}`;
    archive.innerHTML = sessions.length ? sessions.map(session => `<article class="live-archive-card"><div class="live-archive-thumb"><img src="https://i.ytimg.com/vi/${escapeHtml(session.youtubeVideoId || extractYoutubeId(session.videoUrl || ''))}/hqdefault.jpg" alt="${escapeHtml(session.title || 'Live session')}" loading="lazy"><span><i class="fa-solid fa-play"></i> Replay</span></div><div class="live-archive-copy"><time>${formatLiveDate(session.endedAt)}</time><h4>${escapeHtml(session.title || 'Live session')}</h4><p>${escapeHtml(session.description || 'Watch this CodeWithSiam live session again.')}</p><a href="${escapeHtml(session.videoUrl || '#')}" target="_blank" rel="noopener noreferrer">Watch replay <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div></article>`).join('') : '<p class="live-hub-empty">Your completed live sessions will be saved here.</p>';
  }).catch(() => { archive.innerHTML = '<p class="live-hub-empty">The live archive is unavailable right now.</p>'; });
}

function formatLiveDate(value) {
  if (!value) return 'Date unavailable';
  const date = value.toDate ? value.toDate() : new Date(value);
  return Number.isNaN(date.getTime()) ? 'Date unavailable' : date.toLocaleDateString('en-BD', { dateStyle: 'medium' });
}

function initLiveNotification() {
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
    frame.src = `https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1`;
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

function initSiteLiveChat() {
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
      const name = nameInput.value.trim().slice(0, 32) || 'Guest';
      const text = messageInput.value.trim().slice(0, 240);
      if (!text) return;
      const button = form.querySelector('button');
      button.disabled = true;
      try {
        const parentName = replyTo?.name || '';
        await addDoc(collection(db, 'liveChatMessages'), { name, text, parentId: replyTo?.id || '', parentName, authorUid: auth?.currentUser?.uid || '', createdAt: serverTimestamp() });
        localStorage.setItem('siam_live_chat_name', name);
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

const COURSE_PROGRESS_KEY = 'siam_portfolio_course_progress'; // local cache only; source of truth is Firestore progress/{uid}
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
let currentSignedInUid = null; // set by auth-app.js via window.handleAuthStateChange()
let lessonPlayerVisible = false;

function getCourseProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(COURSE_PROGRESS_KEY) || '{}');
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function getYoutubeEmbedUrl(url) {
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
  return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
}

function getYoutubeThumbnailUrl(url) {
  const embed = getYoutubeEmbedUrl(url);
  const id = embed?.match(/embed\/([\w-]{11})/)?.[1];
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '';
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

function getCoursePercent(course) {
  const total = course?.lessons?.length || 0;
  const completed = getCompletedLessons(course).size;
  return total ? Math.round((completed / total) * 100) : 0;
}

function getCourseRoute(courseId, lessonId = '') {
  return lessonId
    ? `/courses/${encodeURIComponent(courseId)}/lesson/${encodeURIComponent(lessonId)}`
    : `/courses/${encodeURIComponent(courseId)}`;
}

function pushCourseRoute(courseId, lessonId = '') {
  window.history.pushState({}, '', getCourseRoute(courseId, lessonId));
}

function getCourseStateLabel(course) {
  const percent = getCoursePercent(course);
  if (percent >= 100) return 'Review';
  if (getCourseProgress()?.[course.id]?.lastLessonId) return 'Continue';
  return 'Start';
}

function getCourseCardMeta(course) {
  const lessons = Array.isArray(course?.lessons) ? course.lessons : [];
  const totalMinutes = lessons.reduce((sum, lesson) => {
    const parsed = Number(String(lesson?.duration || '').match(/\d+/)?.[0] || '0');
    return sum + parsed;
  }, 0);
  const level = String(course?.level || course?.category || 'Beginner').trim() || 'Beginner';
  const durationText = totalMinutes > 0 ? `${totalMinutes} min` : (course?.duration || 'Self-paced');
  const freePreview = lessons.some(lesson => lesson?.freePreview === true);
  const description = String(course?.description || 'Learn by building practical projects with clear guidance and hands-on exercises.').trim();

  return {
    level,
    durationText,
    freePreview,
    description
  };
}

function renderPublishedCourseCatalog() {
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
    image.addEventListener('error', () => {
      const thumbnailContainer = image.parentElement;
      image.remove();
      thumbnailContainer?.classList.remove('has-image');
        const title = thumbnailContainer?.closest('.lms-course-card')?.querySelector('.lms-course-title')?.textContent || 'Course';
      thumbnailContainer?.insertAdjacentHTML('afterbegin', `<span class="lms-course-fallback"><i class="fa-solid fa-graduation-cap"></i><strong>${escapeHtml(title.slice(0, 24))}</strong></span>`);
    }, { once: true });
  });
}

function renderLanguageExplorer() {
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

document.querySelectorAll('[data-course-filter]').forEach(tab => {
  tab.addEventListener('click', () => {
    courseCatalogFilter = tab.dataset.courseFilter || 'all';
    document.querySelectorAll('[data-course-filter]').forEach(item => item.classList.toggle('active', item === tab));
    renderPublishedCourseCatalog();
    renderLanguageExplorer();
  });
});

function renderPublicCoursePreview(course) {
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

function saveCourseProgress(progress) {
  localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(progress));
  currentCourseProgress = progress;

  // Fire-and-forget push to Firestore so progress follows the signed-in
  // user across devices/browsers. No-op if nobody is signed in.
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

/**
 * Loads courses from Firestore (the real, cross-device database).
 * cachedCourses keeps the exact same shape the rendering code already
 * expects (id, title, status, modules[], lessons[] flattened), so
 * renderCoursePlatform / renderModuleList / renderCourseDetail etc.
 * did not need to change at all.
 */
async function loadCourses() {
  try {
    const { fetchAllCourses } = await import('./courses-db.js');
    const courses = await fetchAllCourses();
    cachedCourses = courses.map(normalizeCourse);
  } catch (error) {
    console.error('loadCourses() failed to load from Firestore:', error);
    cachedCourses = [];
    throw error;
  }
}

function getCurrentCourse() {
  if (!cachedCourses.length) return null;
  const publishedCourses = cachedCourses.filter(course => course.status === 'published');
  if (!publishedCourses.length) return null;
  const selected = publishedCourses.find(course => course.id === selectedCourseId) || publishedCourses[0];
  selectedCourseId = selected.id;
  return selected;
}

function getCurrentLesson(course) {
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

function getCompletedLessons(course) {
  const progress = getCourseProgress();
  return new Set(progress?.[course.id]?.completedLessons || []);
}

function updateProgressBar(course) {
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

function updateHeroMetrics() {
  const published = cachedCourses.filter(course => course.status === 'published').length;
  const upcoming = cachedCourses.filter(course => course.status === 'upcoming').length;
  const lessonCount = cachedCourses.reduce((total, course) => total + (Array.isArray(course.lessons) ? course.lessons.length : 0), 0);
  document.getElementById('courseCount').textContent = published;
  document.getElementById('lessonCount').textContent = lessonCount;
  document.getElementById('upcomingCount').textContent = upcoming;
}

function renderUpcomingCourses() {
  const section = document.getElementById('upcomingCoursesSection');
  const list = document.getElementById('upcomingCourseList');
  const upcoming = cachedCourses.filter(course => course.status === 'upcoming' && course.showOnIndex === true);
  if (!section || !list) return;
  if (!upcoming.length) {
    section.classList.add('hidden');
    return;
  }
  section.classList.remove('hidden');

  // Category → { gradient, icon } so every course card gets a distinct, colorful thumbnail
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

function renderModuleList(course) {
  const container = document.getElementById('moduleList');
  if (!container) return;
  const completed = getCompletedLessons(course);
  const query = currentSearchValue.trim().toLowerCase();
  const content = course.modules.map(module => {
    const visibleLessons = (module.lessons || []).filter(lesson => {
      const text = `${lesson.title} ${lesson.duration || ''}`.toLowerCase();
      return !query || text.includes(query);
    });
    if (!visibleLessons.length) return '';
    const collapsed = collapsedModules.has(module.id);
    return `
      <div class="module-group ${collapsed ? 'is-collapsed' : ''}">
        <button type="button" class="module-toggle" data-module-id="${module.id}" aria-expanded="${collapsed ? 'false' : 'true'}">
          <strong>${module.title}</strong>
          <span class="course-badge">${visibleLessons.length}</span>
        </button>
        <div class="module-lessons">
          ${visibleLessons.map(lesson => `
            <button type="button" class="lesson-button ${lesson.id === selectedLessonId ? 'active' : ''} ${completed.has(lesson.id) ? 'complete' : ''}" data-lesson-id="${lesson.id}">
              <span class="lesson-info">
                ${completed.has(lesson.id) ? '<span class="lesson-check">✓</span>' : '<span class="lesson-check"></span>'}
                <span class="lesson-title">${lesson.title}</span>
              </span>
              <span class="lesson-action"><span>${lesson.duration || '0 min'}</span> ${completed.has(lesson.id) ? 'Review' : 'Play'} <i class="fa-solid fa-arrow-right"></i></span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
  container.innerHTML = content || '<p class="course-description">No lessons match your search.</p>';
}

function getLessonNotesKey(courseId, lessonId) {
  return `siam_course_notes_${courseId}_${lessonId}`;
}

function getLessonPlaybackKey(courseId, lessonId) {
  return `siam_course_playback_${courseId}_${lessonId}`;
}

function saveLessonNotes(course, lesson, notes) {
  if (!course || !lesson) return;
  activeLessonNotes = notes;
  localStorage.setItem(getLessonNotesKey(course.id, lesson.id), notes);
}

function loadLessonNotes(course, lesson) {
  if (!course || !lesson) return '';
  const notes = localStorage.getItem(getLessonNotesKey(course.id, lesson.id)) || '';
  activeLessonNotes = notes;
  return notes;
}

function renderCourseDetail(course) {
  activeCourse = course;
  const lesson = getCurrentLesson(course);
if (!lesson) {
  const courseProgressText = document.getElementById('courseOverviewProgressText');
  document.querySelector('.course-lesson-player')?.classList.add('hidden');

  if (courseProgressText) {
    courseProgressText.textContent = 'No lessons';
  }

  return;
}

  const video = document.getElementById('courseVideo');
  const placeholder = document.getElementById('videoPlaceholder');
  const skeleton = document.getElementById('videoSkeleton');
  const currentLessonTitle = document.getElementById('currentLessonTitle');
  const currentLessonMeta = document.getElementById('currentLessonMeta');
  const currentLessonDuration = document.getElementById('currentLessonDuration');
  const currentLessonStatus = document.getElementById('currentLessonStatus');
  const currentLessonDescription = document.getElementById('currentLessonDescription');
  const lessonNotesInput = document.getElementById('lessonNotesInput');
  const lessonResources = document.getElementById('lessonResources');
  const totalLessonsBadge = document.getElementById('totalLessonsBadge');
  const totalDurationBadge = document.getElementById('totalDurationBadge');
  const sidebarCourseTitle = document.getElementById('sidebarCourseTitle');
  const overviewThumbnail = document.getElementById('courseOverviewThumbnail');
  const overviewTitle = document.getElementById('courseOverviewTitle');
  const overviewDescription = document.getElementById('courseOverviewDescription');
  const overviewInstructor = document.getElementById('courseOverviewInstructor');
  const overviewLessons = document.getElementById('courseOverviewLessons');
  const overviewDuration = document.getElementById('courseOverviewDuration');
  const overviewNextLesson = document.getElementById('courseOverviewNextLesson');
  const overviewStartBtn = document.getElementById('courseOverviewStartBtn');
  const lessonPlayer = document.querySelector('.course-lesson-player');
  if (lessonPlayer) lessonPlayer.classList.toggle('hidden', !lessonPlayerVisible);

  const courseThumbnail = course.thumbnail || getYoutubeThumbnailUrl(course.videoUrl);
  if (overviewThumbnail) {
    overviewThumbnail.src = courseThumbnail || '';
    overviewThumbnail.alt = `${course.title} thumbnail`;
    overviewThumbnail.classList.toggle('hidden', !courseThumbnail);
  }
  if (overviewTitle) overviewTitle.textContent = course.title;
  if (overviewDescription) overviewDescription.textContent = course.description;
  if (overviewInstructor) overviewInstructor.textContent = course.instructor || 'CodeWithSiam';
  if (overviewLessons) overviewLessons.textContent = `${course.lessons.length} Lessons`;
  if (overviewDuration) overviewDuration.textContent = `${course.lessons.reduce((sum, item) => sum + parseInt(String(item.duration).match(/\d+/)?.[0] || '0', 10), 0)} min`;
  if (overviewNextLesson) overviewNextLesson.textContent = lesson.title;
  if (overviewStartBtn) overviewStartBtn.innerHTML = `<i class="fa-solid fa-play"></i> ${getCompletedLessons(course).has(lesson.id) ? 'Review Lesson' : 'Start Lesson'}`;

  const currentIndex = course.lessons.findIndex(item => item.id === lesson.id);
  const prevBtn = document.getElementById('prevLessonBtn');
  const nextBtn = document.getElementById('nextLessonBtn');
  if (prevBtn) prevBtn.disabled = currentIndex <= 0;
  if (nextBtn) nextBtn.disabled = currentIndex < 0 || currentIndex >= course.lessons.length - 1;

  if (sidebarCourseTitle) sidebarCourseTitle.textContent = course.title;
  if (totalLessonsBadge) totalLessonsBadge.textContent = `${course.lessons.length} lessons`;
  const totalDuration = course.lessons.reduce((sum, item) => sum + (parseInt(String(item.duration).match(/\d+/)?.[0] || '0', 10)), 0);
  if (totalDurationBadge) totalDurationBadge.textContent = `${totalDuration} min`;

  if (currentLessonTitle) currentLessonTitle.textContent = lesson.title;
  if (currentLessonMeta) currentLessonMeta.textContent = course.title;
  if (currentLessonDuration) currentLessonDuration.textContent = lesson.duration || '0 min';
  if (currentLessonStatus) currentLessonStatus.textContent = getCompletedLessons(course).has(lesson.id) ? 'Completed' : 'Queued';
  if (currentLessonDescription) currentLessonDescription.textContent = lesson.notes || course.description;
  const lessonPlayerTitle = document.getElementById('lessonPlayerTitle');
  if (lessonPlayerTitle) lessonPlayerTitle.textContent = lesson.title;
  if (lessonNotesInput) {
    lessonNotesInput.value = loadLessonNotes(course, lesson);
    lessonNotesInput.placeholder = lesson.notes ? `Notes for ${lesson.title}` : 'Capture key ideas, reminders, and setup steps...';
  }
  if (lessonResources) {
    const resources = Array.isArray(lesson.resources) && lesson.resources.length ? lesson.resources : ['Practice prompt', 'Supplementary guide'];
    // Build resource list with download links where possible
    lessonResources.innerHTML = '';
    resources.forEach(res => {
      const li = document.createElement('li');
      if (typeof res === 'string' && /^(https?:\/\/)/i.test(res)) {
        const a = document.createElement('a');
        a.href = res;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = res.split('/').pop() || res;
        a.setAttribute('aria-label', `Open resource ${a.textContent}`);
        li.appendChild(a);
      } else if (typeof res === 'string' && /\.(pdf|zip|py|js|txt)$/i.test(res)) {
        // treat as filename placeholder: create downloadable blob with placeholder content
        const blob = new Blob([`Resource: ${res}\n\nThis is a placeholder file generated by CodeWithSiam.`], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = res;
        a.textContent = res;
        a.setAttribute('aria-label', `Download ${res}`);
        li.appendChild(a);
      } else {
        const span = document.createElement('span');
        span.textContent = res;
        li.appendChild(span);
      }
      lessonResources.appendChild(li);
    });
  }

  // Watch on YouTube link (opens the lesson video in YouTube)
    const watchLink = document.getElementById('watchOnYoutube');
    if (watchLink) {
      // Do not expose external video URL to unauthenticated visitors.
      const externalUrl = currentSignedInUid && !course.accessDenied ? (lesson.videoUrl || course.videoUrl || '') : '';
      if (externalUrl) {
        watchLink.href = externalUrl;
        watchLink.classList.remove('hidden');
      } else {
        watchLink.href = '#';
        watchLink.classList.add('hidden');
      }
    }

  if (video) {
    const hasApprovedAccess = Boolean(currentSignedInUid && !course.accessDenied);
    const src = lesson.videoUrl || course.videoUrl || '';
    const ytFrame = document.getElementById('courseYoutubeFrame');
    const videoControls = document.getElementById('videoControls');
    const ytEmbed = hasApprovedAccess ? getYoutubeEmbedUrl(src) : null;

    if (!hasApprovedAccess) {
      ytFrame?.setAttribute('src', '');
      video.removeAttribute('src');
      video.load();
      video.classList.add('hidden');
      videoControls?.classList.add('hidden');
      skeleton?.classList.add('hidden');
      placeholder?.classList.remove('hidden');
      if (placeholder) placeholder.textContent = currentSignedInUid
        ? 'Your account is signed in, but you do not have access to this course yet.'
        : 'Please sign in with Google to watch this lesson.';
    }

    if (hasApprovedAccess && ytEmbed) {
      video.removeAttribute('src');
      video.load();
      video.classList.add('hidden');
      videoControls?.classList.add('hidden');

      if (ytFrame) {
        const separator = ytEmbed.includes('?') ? '&' : '?';
        ytFrame.src =
          `${ytEmbed}${separator}rel=0&modestbranding=1&playsinline=1&controls=1`;
        ytFrame.classList.remove('hidden');
      }

      skeleton?.classList.add('hidden');
      placeholder?.classList.add('hidden');

    } else if (hasApprovedAccess && src) {
      video.classList.remove('hidden');
      videoControls?.classList.remove('hidden');

      if (ytFrame) {
        ytFrame.classList.add('hidden');
        ytFrame.src = '';
      }

      video.src = src;
      video.muted = false;
      video.volume = 1;
      video.load();

      skeleton?.classList.remove('hidden');
      placeholder?.classList.add('hidden');

    } else if (hasApprovedAccess) {
      video.classList.remove('hidden');
      videoControls?.classList.remove('hidden');

      if (ytFrame) {
        ytFrame.classList.add('hidden');
        ytFrame.src = '';
      }

      video.removeAttribute('src');
      video.load();

      skeleton?.classList.add('hidden');
      placeholder?.classList.remove('hidden');
    }
  }

  // Restore saved playback rate for this lesson (persist per-lesson)
  try {
    const savedRate = parseFloat(localStorage.getItem(getLessonPlaybackKey(course.id, lesson.id)) || '1');
    if (video && Number.isFinite(savedRate) && savedRate > 0) {
      video.playbackRate = savedRate;
      const speedSelect = document.getElementById('speedSelect');
      if (speedSelect) speedSelect.value = String(savedRate);
    }
  } catch (e) {
    // ignore
  }

  const progress = getCourseProgress();
  if (progress?.[course.id]?.lessonProgress?.[lesson.id]) {
    if (video && !Number.isNaN(progress[course.id].lessonProgress[lesson.id])) {
      video.currentTime = progress[course.id].lessonProgress[lesson.id];
    }
  }

  saveCourseProgress({
    ...progress,
    [course.id]: {
      ...(progress[course.id] || {}),
      lastLessonId: lesson.id,
      lastUpdated: Date.now()
    }
  });

  updateProgressBar(course);
  renderModuleList(course);
}

function saveLessonProgress(course, lesson, time = 0) {
  const progress = getCourseProgress();
  const courseProgress = progress[course.id] || {};
  progress[course.id] = {
    ...courseProgress,
    lastLessonId: lesson.id,
    lastUpdated: Date.now(),
    lessonProgress: {
      ...(courseProgress.lessonProgress || {}),
      [lesson.id]: time
    }
  };
  saveCourseProgress(progress);
}

function toggleLessonComplete(course, lesson) {
  if (!currentSignedInUid) {
    window.openAuthModal?.('Sign in to save your progress.');
    return;
  }
  const progress = getCourseProgress();
  const courseProgress = progress[course.id] || {};
  const completed = new Set(courseProgress.completedLessons || []);
  completed.add(lesson.id);
  progress[course.id] = {
    ...courseProgress,
    completedLessons: Array.from(completed),
    lastLessonId: lesson.id,
    lastUpdated: Date.now()
  };
  saveCourseProgress(progress);
  updateProgressBar(course);
  renderModuleList(course);
  document.getElementById('currentLessonStatus').textContent = 'Completed';
  const currentIndex = course.lessons.findIndex(item => item.id === lesson.id);
  if (currentIndex < course.lessons.length - 1) {
    selectedLessonId = course.lessons[currentIndex + 1].id;
    pushCourseRoute(course.id, selectedLessonId);
    renderCourseDetail(course);
  } else {
    document.getElementById('currentLessonStatus').textContent = 'Course Completed';
  }
}

function switchLesson(course, direction) {
  const lessons = Array.isArray(course.lessons) ? course.lessons : [];
  if (!lessons.length) return;
  const currentIndex = lessons.findIndex(lesson => lesson.id === selectedLessonId);
  const nextIndex = direction === 'next' ? Math.min(lessons.length - 1, currentIndex + 1) : Math.max(0, currentIndex - 1);
  selectedLessonId = lessons[nextIndex].id;
  pushCourseRoute(course.id, selectedLessonId);
  renderCourseDetail(course);
}

function handleVideoEnded(course) {
  const lessons = Array.isArray(course.lessons) ? course.lessons : [];
  if (!lessons.length) return;
  const currentIndex = lessons.findIndex(lesson => lesson.id === selectedLessonId);
  if (currentIndex < lessons.length - 1) {
    selectedLessonId = lessons[currentIndex + 1].id;
    pushCourseRoute(course.id, selectedLessonId);
    renderCourseDetail(course);
    const video = document.getElementById('courseVideo');
    if (video) video.play().catch(() => {});
  }
}

function attachCourseEvents(course) {
  const getActiveCourse = () => activeCourse || course;
  const searchInput = document.getElementById('lessonSearch');
  const prevBtn = document.getElementById('prevLessonBtn');
  const nextBtn = document.getElementById('nextLessonBtn');
  const completeBtn = document.getElementById('markCompleteBtn');
  const restartBtn = document.getElementById('restartLessonBtn');
  const speedSelect = document.getElementById('speedSelect');
  const pipBtn = document.getElementById('pipBtn');
  const video = document.getElementById('courseVideo');
  const playPauseBtn = document.getElementById('videoPlayPauseBtn');
  const timeLabel = document.getElementById('videoTimeLabel');
  const muteBtn = document.getElementById('videoMuteBtn');
  const fullscreenBtn = document.getElementById('videoFullscreenBtn');
  const notesInput = document.getElementById('lessonNotesInput');
  const overviewStartBtn = document.getElementById('courseOverviewStartBtn');

  searchInput?.addEventListener('input', event => {
    currentSearchValue = event.target.value;
    renderModuleList(getActiveCourse());
  });

  prevBtn?.addEventListener('click', () => switchLesson(getActiveCourse(), 'prev'));
  nextBtn?.addEventListener('click', () => switchLesson(getActiveCourse(), 'next'));
  completeBtn?.addEventListener('click', () => toggleLessonComplete(getActiveCourse(), getCurrentLesson(getActiveCourse())));
  overviewStartBtn?.addEventListener('click', () => {
    if (!currentSignedInUid) {
      window.openAuthModal?.('Sign in with Google to watch this lesson.');
      return;
    }
    if (getActiveCourse()?.accessDenied) {
      document.getElementById('videoPlaceholder')?.classList.remove('hidden');
      document.getElementById('videoPlaceholder')?.replaceChildren(document.createTextNode('Your account is signed in, but you do not have access to this course yet.'));
      return;
    }
    lessonPlayerVisible = true;
    pushCourseRoute(getActiveCourse().id, getCurrentLesson(getActiveCourse()).id);
    renderCourseDetail(getActiveCourse());
    document.querySelector('.course-lesson-player')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  restartBtn?.addEventListener('click', () => {
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  });
  speedSelect?.addEventListener('change', event => {
    if (video) {
      const r = Number(event.target.value);
      video.playbackRate = r;
      try { localStorage.setItem(getLessonPlaybackKey(course.id, getCurrentLesson(course).id), String(r)); } catch(e){}
    }
  });
  pipBtn?.addEventListener('click', async () => {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture().catch(() => {});
    } else if (video && typeof video.requestPictureInPicture === 'function') {
      await video.requestPictureInPicture().catch(() => {});
    }
  });
  notesInput?.addEventListener('input', event => {
    const lesson = getCurrentLesson(getActiveCourse());
    saveLessonNotes(course, lesson, event.target.value);
  });

  function updateVideoUI() {
    if (!video) return;
    const ratio = video.duration ? video.currentTime / video.duration : 0;
    if (timeLabel) timeLabel.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    if (playPauseBtn) {
      const icon = playPauseBtn.querySelector('i');
      if (icon) {
        icon.className = video.paused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
      }
    }
  }

  function formatTime(value) {
    if (!Number.isFinite(value) || value < 0) return '0:00';
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  video?.addEventListener('loadedmetadata', updateVideoUI);
  video?.addEventListener('timeupdate', () => {
    updateVideoUI();
    const lesson = getCurrentLesson(getActiveCourse());
    if (lesson && video.currentTime > 1) {
      // throttle saves to reduce DOM/storage churn
      const progressKey = `__lastSave_${course.id}_${lesson.id}`;
      const last = Number(sessionStorage.getItem(progressKey) || '0');
      const now = Date.now();
      if (!last || (now - last) > 2000) {
        saveLessonProgress(getActiveCourse(), lesson, video.currentTime);
        sessionStorage.setItem(progressKey, String(now));
      }
    }
  });
  video?.addEventListener('play', updateVideoUI);
  video?.addEventListener('pause', updateVideoUI);
  video?.addEventListener('ended', () => handleVideoEnded(course));
  video?.addEventListener('volumechange', () => {
    if (muteBtn) {
      const icon = muteBtn.querySelector('i');
      if (icon) icon.className = video.muted || video.volume === 0 ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
    }
  });

  playPauseBtn?.addEventListener('click', () => {
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
  video?.addEventListener('dblclick', async () => {
    if (!video) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => {});
    } else {
      await video.requestFullscreen().catch(() => {});
    }
  });
  muteBtn?.addEventListener('click', () => {
    if (!video) return;
    if (video.muted || video.volume === 0) {
      video.muted = false;
      video.volume = 1;
    } else {
      video.muted = true;
    }
  });
  fullscreenBtn?.addEventListener('click', async () => {
    if (!video) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => {});
    } else {
      await video.requestFullscreen().catch(() => {});
    }
  });

  document.addEventListener('keydown', event => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
    const key = event.key;
    // Global player shortcuts when video is present
    if (!video) return;
    switch (key) {
      case ' ':
      case 'Spacebar': // legacy
        event.preventDefault();
        video.paused ? video.play().catch(() => {}) : video.pause();
        break;
      case 'k':
      case 'K':
        event.preventDefault();
        video.paused ? video.play().catch(() => {}) : video.pause();
        break;
      case 'ArrowRight':
        event.preventDefault();
        video.currentTime = Math.min(video.duration || 0, video.currentTime + 5);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        video.currentTime = Math.max(0, video.currentTime - 5);
        break;
      case '.': // increase speed
        event.preventDefault();
        video.playbackRate = Math.min(2, +(video.playbackRate + 0.25).toFixed(2));
        speedSelect && (speedSelect.value = String(video.playbackRate));
        try { localStorage.setItem(getLessonPlaybackKey(course.id, getCurrentLesson(course).id), String(video.playbackRate)); } catch(e){}
        break;
      case ',': // decrease speed
        event.preventDefault();
        video.playbackRate = Math.max(0.5, +(video.playbackRate - 0.25).toFixed(2));
        speedSelect && (speedSelect.value = String(video.playbackRate));
        try { localStorage.setItem(getLessonPlaybackKey(course.id, getCurrentLesson(course).id), String(video.playbackRate)); } catch(e){}
        break;
      case 'f':
      case 'F':
        event.preventDefault();
        if (document.fullscreenElement) { document.exitFullscreen().catch(()=>{}); } else { video.requestFullscreen().catch(()=>{}); }
        break;
      case 'p':
      case 'P':
        event.preventDefault();
        if (document.pictureInPictureElement) { document.exitPictureInPicture().catch(()=>{}); }
        else if (video && typeof video.requestPictureInPicture === 'function') { video.requestPictureInPicture().catch(()=>{}); }
        break;
      case 'n':
      case 'N':
        event.preventDefault();
        switchLesson(getActiveCourse(), 'next');
        break;
      case 'b':
      case 'B':
        event.preventDefault();
        switchLesson(getActiveCourse(), 'prev');
        break;
      default:
        break;
    }
  });

  document.getElementById('moduleList')?.addEventListener('click', event => {
    const moduleToggle = event.target.closest('.module-toggle');
    if (moduleToggle) {
      const moduleId = moduleToggle.dataset.moduleId;
      if (collapsedModules.has(moduleId)) {
        collapsedModules.delete(moduleId);
      } else {
        collapsedModules.add(moduleId);
      }
      renderModuleList(getActiveCourse());
      return;
    }

    const button = event.target.closest('.lesson-button');
    if (!button) return;
    selectedLessonId = button.dataset.lessonId;
    lessonPlayerVisible = true;
    pushCourseRoute(getActiveCourse().id, selectedLessonId);
    renderCourseDetail(getActiveCourse());
    document.querySelector('.course-lesson-player')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function syncCourseRoute() {
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

window.addEventListener('popstate', syncCourseRoute);

async function initCoursePlatform() {
  const platform = document.getElementById('coursePlatform');
  const loading = document.getElementById('courseLoadingState');
  const empty = document.getElementById('courseEmptyState');
  const gate = document.getElementById('courseSignInGate');
  const continueBtn = document.getElementById('continueLearningCourseBtn');
  const continueBtn2 = document.getElementById('continueLearningBtn');
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

  if (continueBtn) {
    continueBtn.textContent = progress?.[course.id]?.lastLessonId ? 'Continue Learning' : 'Start Learning';
  }
  if (continueBtn2) {
    continueBtn2.textContent = progress?.[course.id]?.lastLessonId ? 'Continue Learning' : 'Start Learning';
  }
}

async function initCourseDeck(){
  await initCoursePlatform();
}

/**
 * Called by auth-app.js whenever Firebase's auth state changes
 * (sign-in, sign-out, or on initial page load). Keeps script.js's
 * course/progress state in sync with the signed-in user without
 * script.js needing to import Firebase itself.
 */
window.handleAuthStateChange = async function handleAuthStateChange(user) {
  currentSignedInUid = user ? user.uid : null;

  const gate = document.getElementById('courseSignInGate');
  gate?.classList.toggle('hidden', !!currentSignedInUid);

  if (currentSignedInUid) {
    try {
      await loadCourses();
      const { fetchUserProgress } = await import('./courses-db.js');
      const cloudProgress = await fetchUserProgress(currentSignedInUid);
      // Cloud is the source of truth once signed in; merge over local cache.
      const merged = { ...getCourseProgress(), ...cloudProgress };
      localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(merged));
      currentCourseProgress = merged;
      renderPublishedCourseCatalog();
      syncCourseRoute();
      const course = getCurrentCourse();
          if (course && activeCourse) {
            document.getElementById('coursePlatform')?.classList.remove('hidden');
            document.getElementById('courseSignInGate')?.classList.add('hidden');
            renderCourseDetail(course);
          }
    } catch (error) {
      console.error('Failed to sync progress from cloud:', error);
    }
  }

  if (!currentSignedInUid) {
    document.getElementById('coursePlatform')?.classList.add('hidden');
    document.getElementById('courseSignInGate')?.classList.toggle('hidden', !activeCourse);
    document.getElementById('courseYoutubeFrame')?.setAttribute('src', '');
    document.getElementById('courseVideo')?.removeAttribute('src');
  }

  // Re-render whatever is currently visible so progress bars / lesson
  // checkmarks reflect the freshly synced (or now-anonymous) state.
  if (activeCourse) {
    renderCourseDetail(activeCourse);
    updateProgressBar(activeCourse);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Portfolio is public — always initialize the site immediately.
  // Course data loads from Firestore inside initCourseDeck(); auth state
  // (and therefore progress syncing / the admin link) is driven separately
  // by auth-app.js via window.handleAuthStateChange().
  initSiteEffects();
  activateSection('home');
  initChatToggle();
});

/* ---------- Ambient background dust (quiet, no connecting lines) ---------- */
function initParticles(){
  const canvas = document.getElementById('particles');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dots;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = document.documentElement.scrollHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(36, Math.floor(window.innerWidth/40));
  dots = Array.from({length: count}, () => ({
    x: Math.random()*w, y: Math.random()*h,
    vy: -(Math.random()*0.12 + 0.03),
    r: Math.random()*1.3+0.5
  }));

  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = 'rgba(255,212,59,0.28)';
    dots.forEach(p=>{
      p.y += p.vy;
      if(p.y < -10) p.y = h + 10;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ---------- Header scroll state + smooth nav ---------- */
function activateSection(sectionId){
  const allowed = new Set(['home','about','skills','ml','projects','course','contact']);
  const target = allowed.has(sectionId) ? sectionId : 'home';
  const focusTargets = document.querySelectorAll('.hero, .section');

  focusTargets.forEach((node) => {
    const nodeId = node.id || '';
    const matches = nodeId === target || (target === 'home' && nodeId === 'contact');
    node.classList.toggle('is-visible', matches);
    node.classList.toggle('is-hidden', !matches);

  });

  document.querySelectorAll('#nav a[href^="#"]').forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('is-current', href === `#${target}`);
  });

  const finalPath = target === 'home' ? '/' : `#${target}`;
  if (window.location.pathname !== '/' || window.location.hash !== finalPath.replace('/', '')) {
    window.history.pushState({}, '', finalPath);
  }

  const targetNode = document.getElementById(target);
  if (targetNode) {
    requestAnimationFrame(() => {
      targetNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

function bindSingleSectionNavigation(){
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const sectionId = link.getAttribute('href')?.replace('#', '');
    if (!sectionId || !document.getElementById(sectionId)) return;

    link.addEventListener('click', (event) => {
      const target = link.getAttribute('href')?.replace('#', '');
      if (!target) return;
      event.preventDefault();
      activateSection(target);
      document.getElementById('nav')?.classList.remove('open');
    });
  });
}

function initHeader(){
  const header = document.getElementById('header');
  if(!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  });

  document.querySelectorAll('#nav a').forEach(a=>{
    a.addEventListener('click', () => {
      document.getElementById('nav')?.classList.remove('open');
    });
  });
  bindSingleSectionNavigation();
}

function initMobileMenu(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  btn?.addEventListener('click', () => nav?.classList.toggle('open'));
}

/* ---------- Typed hero text ---------- */
function initTypedText(){
  const el = document.getElementById('typed-text');
  if(!el) return;
  const phrases = [
    'AI Engineer', 'Data Scientist', 'Python Developer',
    'ML Researcher', 'Computer Vision Enthusiast'
  ];
  let pIdx = 0, charIdx = 0, deleting = false;

  function tick(){
    const phrase = phrases[pIdx];
    if(!deleting){
      el.textContent = phrase.slice(0, ++charIdx);
      if(charIdx === phrase.length){
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, --charIdx);
      if(charIdx === 0){
        deleting = false;
        pIdx = (pIdx+1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }
  tick();
}

/* ---------- Scroll reveal ---------- */
function initRevealOnScroll(){
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold:0.15 });
  items.forEach(i=>obs.observe(i));
}

/* ---------- Animated stat counters ---------- */
function initStatCounters(){
  const nums = document.querySelectorAll('.stat-num');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        animateCount(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold:0.5 });
  nums.forEach(n=>obs.observe(n));
}
function animateCount(el){
  const target = parseInt(el.dataset.target, 10) || 0;
  const dur = 1400;
  const start = performance.now();
  function step(now){
    const p = Math.min((now-start)/dur, 1);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(eased*target);
    if(p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* Skill tags are static (no fake precision percentages), so no fill
   animation is needed here anymore — see .skill-tag in style.css. */
function initSkillBars(){}

/* ---------- 3D tilt on cards ---------- */
function initTiltCards(){
  const cards = document.querySelectorAll('.tilt-card');
  const maxTilt = 7;

  cards.forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width/2, cy = rect.height/2;
      const rotX = ((y-cy)/cy) * -maxTilt;
      const rotY = ((x-cx)/cx) * maxTilt;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', ()=>{
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

/* ---------- Hero 3D parallax (mouse-follow) ---------- */
document.addEventListener('mousemove', (e)=>{
  const stage = document.getElementById('hero3d');
  if(!stage) return;
  const x = (e.clientX/window.innerWidth - 0.5) * 14;
  const y = (e.clientY/window.innerHeight - 0.5) * 14;
  stage.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

/* =========================================================
   AI CHATBOT — real Claude API + voice in/out
   ========================================================= */

// Where the secure backend lives. Works automatically once deployed
// on Vercel (see api/chat.js — Vercel auto-detects files in /api).
// On localhost without `vercel dev` running, calls fail gracefully
// and the chatbot falls back to built-in replies below.
const CHAT_API_ENDPOINT = '/api/chat';

let chatHistory = [];      // [{role:'user'|'assistant', content:'...'}]
let voiceOutputOn = true;  // bot speaks replies by default
let recognizing = false;
let speechRecognizer = null;
let chatBotInitialized = false;
let chatToggleInitialized = false;
let chatRequestInFlight = false;

function initChatbot(){
  if (chatBotInitialized) return;
  chatBotInitialized = true;
  const input = document.getElementById('input');
  input?.addEventListener('keydown', e=>{ if(e.key==='Enter') sendMessage(); });
  document.getElementById('sendBtn')?.addEventListener('click', sendMessage);
  document.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => quickAsk(button.dataset.question || '')));

  initVoiceToggle();
  initMic();
}

/* ---------- Chat toggle (floating button) ---------- */
function initChatToggle(){
  if (chatToggleInitialized) return;
  const toggle = document.getElementById('chatToggleBtn');
  const chat = document.getElementById('chatbot') || document.querySelector('.chatbox');
  if(!toggle || !chat) return;
  if (toggle.dataset.chatBound === 'true') {
    chatToggleInitialized = true;
    return;
  }
  toggle.dataset.chatBound = 'true';

  function setOpen(open){
    chat.classList.toggle('active', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    chat.setAttribute('aria-hidden', String(!open));
    if(open){
      // ensure chatbot subsystems are ready
      try { initChatbot(); } catch(e){}
      setTimeout(()=> document.getElementById('input')?.focus(), 180);
    } else {
      toggle.focus();
    }
  }

  toggle.onclick = ()=>{
    const isOpen = chat.classList.contains('active');
    setOpen(!isOpen);
  };

  // Close chat with Escape
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && chat.classList.contains('active')){
      setOpen(false);
    }
  });

  chatToggleInitialized = true;
}

/* ---------- local fallback replies (used only if the API call fails) ---------- */
const fallbackReplies = [
  { keys: ['project','built','made'], reply: "I've built 10 Python/AI projects — an Image Classifier (92% CNN), Sentiment Analyzer (BERT), Data Dashboard, House Price Predictor, Text Generator (LSTM), Digit Recognizer (99.1%), AI Chatbot, Fake News Detector, Stock Price Predictor, and a Face Recognition Attendance system! Check the Projects section above 👆" },
  { keys: ['python skill','best skill','skill'], reply: "Python is my strongest language, and I work regularly with NumPy/Pandas, scikit-learn, and TensorFlow/Keras. Check the Skills section for the full breakdown 📊" },
  { keys: ['python','learn python','programming'], reply: "Python is my main language. I use it for automation, data analysis, machine learning, APIs, and practical projects with NumPy, Pandas, scikit-learn, and TensorFlow." },
  { keys: ['cnn','convolutional'], reply: "My CNN model is an image classifier trained on CIFAR-10, hitting 92% accuracy, with real-time webcam inference via OpenCV 🖼️" },
  { keys: ['course','free python','tutorial','learn'], reply: "Yes! CodeWithSiam has a free Python course from beginner to advanced topics, with practical video lessons and projects. Open the Free Course section to start learning." },
  { keys: ['data science','pandas','numpy','machine learning','ai','artificial intelligence'], reply: "Siam works with Python, NumPy, Pandas, scikit-learn, TensorFlow/Keras, and practical machine-learning workflows such as data preparation, training, evaluation, and deployment." },
  { keys: ['contact','email','reach','hire'], reply: "You can reach me via WhatsApp (fastest!), email, or any of my social links in the Contact section below 👇" },
  { keys: ['github','youtube','facebook','social'], reply: "You can find CodeWithSiam on GitHub, YouTube, Facebook, Instagram, and WhatsApp through the Contact section of this website." },
  { keys: ['college','school','study','education'], reply: "I'm currently a Class 11 Science student at Narsingdi Government College, Bangladesh — studying alongside my AI/ML work! 🎓" },
  { keys: ['where','bangladesh','location','from'], reply: "Siam is from Bangladesh and studies at Narsingdi Government College while building Python, data science, and AI projects." },
  { keys: ['who are you','your name','about you'], reply: "I am the CodeWithSiam AI assistant. I can answer questions about Siam, his projects, Python, AI/ML, data science, and his courses." },
  { keys: ['hi','hello','hey'], reply: "Hey there! 👋 Ask me about my Python projects, ML skills, or the free Python course!" },
];
function fallbackResponse(msg){
  const lower = msg.toLowerCase();
  for(const r of fallbackReplies){
    if(r.keys.some(k=>lower.includes(k))) return r.reply;
  }
  return "I couldn't reach the AI backend just now, so here's a quick answer: for specifics, the fastest way is to message Siam directly on WhatsApp 🙂";
}

/* ---------- message bubble rendering ---------- */
function appendMessage(text, isUser){
  const chat = document.getElementById('chat');
  if(!chat) return null;
  const wrap = document.createElement('div');
  wrap.className = 'msg ' + (isUser ? 'user-msg' : 'bot-msg');
  wrap.innerHTML = `<span class="avatar">${isUser ? '🧑' : '🤖'}</span><div class="bubble"></div>`;
  wrap.querySelector('.bubble').textContent = text;
  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
  return wrap;
}

function appendTypingIndicator(){
  const chat = document.getElementById('chat');
  if(!chat) return null;
  const wrap = document.createElement('div');
  wrap.className = 'msg bot-msg';
  wrap.innerHTML = `<span class="avatar">🤖</span><div class="bubble typing"><span></span><span></span><span></span></div>`;
  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
  return wrap;
}

/* ---------- core send flow: call backend, fall back locally on failure ---------- */
async function getBotReply(userMsg){
  chatHistory.push({ role: 'user', content: userMsg });

  try{
    const res = await fetch(CHAT_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatHistory }),
    });
    if(!res.ok) throw new Error('backend not available');
    const data = await res.json();
    if(!data.reply) throw new Error('empty reply');
    chatHistory.push({ role: 'assistant', content: data.reply });
    return data.reply;
  } catch(err){
    // Backend not deployed yet, or call failed — use local fallback so the
    // chatbox still feels alive during development / before Netlify setup.
    const fallback = fallbackResponse(userMsg);
    chatHistory.push({ role: 'assistant', content: fallback });
    return fallback;
  }
}

async function sendMessage(){
  const input = document.getElementById('input');
  const sendBtn = document.getElementById('sendBtn');
  const msg = input?.value.trim();
  if(!msg || chatRequestInFlight) return;
  chatRequestInFlight = true;
  if (sendBtn) sendBtn.disabled = true;
  appendMessage(msg, true);
  input.value = '';

  try {
    const typingEl = appendTypingIndicator();
    const reply = await getBotReply(msg);
    typingEl?.remove();
    appendMessage(reply, false);
    speak(reply);
  } finally {
    chatRequestInFlight = false;
    if (sendBtn) sendBtn.disabled = false;
  }
}

async function quickAsk(text){
  if (chatRequestInFlight) return;
  chatRequestInFlight = true;
  appendMessage(text, true);
  const typingEl = appendTypingIndicator();
  try {
    const reply = await getBotReply(text);
    typingEl?.remove();
    appendMessage(reply, false);
    speak(reply);
  } finally {
    chatRequestInFlight = false;
  }
}

/* =========================================================
   VOICE OUTPUT (text-to-speech) — browser built-in, free
   ========================================================= */
function initVoiceToggle(){
  const btn = document.getElementById('voiceToggle');
  if(!btn) return;
  btn.addEventListener('click', () => {
    voiceOutputOn = !voiceOutputOn;
    btn.textContent = voiceOutputOn ? '🔊' : '🔇';
    btn.classList.toggle('muted', !voiceOutputOn);
    btn.setAttribute('aria-pressed', String(voiceOutputOn));
    if(!voiceOutputOn) window.speechSynthesis?.cancel();
  });
}

function speak(text){
  if(!voiceOutputOn) return;
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel(); // stop any prior utterance
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1.0;
  utter.pitch = 1.0;
  utter.lang = 'en-US';
  window.speechSynthesis.speak(utter);
}

/* =========================================================
   VOICE INPUT (speech-to-text) — browser built-in, free
   ========================================================= */
function initMic(){
  const micBtn = document.getElementById('micBtn');
  const status = document.getElementById('micStatus');
  if(!micBtn) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition){
    micBtn.classList.add('unsupported');
    micBtn.title = 'Voice input is not supported in this browser';
    return;
  }

  speechRecognizer = new SpeechRecognition();
  speechRecognizer.lang = 'en-US';
  speechRecognizer.interimResults = false;
  speechRecognizer.maxAlternatives = 1;

  speechRecognizer.addEventListener('start', () => {
    recognizing = true;
    micBtn.classList.add('listening');
    status.textContent = '🎙️ Listening...';
    status.classList.add('show');
  });

  speechRecognizer.addEventListener('end', () => {
    recognizing = false;
    micBtn.classList.remove('listening');
    status.classList.remove('show');
  });

  speechRecognizer.addEventListener('error', () => {
    recognizing = false;
    micBtn.classList.remove('listening');
    status.textContent = "Didn't catch that — try again.";
    setTimeout(()=> status.classList.remove('show'), 1800);
  });

  speechRecognizer.addEventListener('result', (e) => {
    const transcript = e.results[0][0].transcript;
    const input = document.getElementById('input');
    input.value = transcript;
    sendMessage();
  });

  micBtn.addEventListener('click', () => {
    if(recognizing){
      speechRecognizer.stop();
    } else {
      window.speechSynthesis?.cancel();
      try{ speechRecognizer.start(); } catch(e){ /* already started */ }
    }
  });
}