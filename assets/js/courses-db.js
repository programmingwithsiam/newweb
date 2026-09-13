/* =========================================================
   COURSES DATA SERVICE (Firestore)
   =========================================================
   Replaces the old localStorage-only "database". Every visitor,
   on every device/browser, reads the same course data from
   Firestore. Only admins (enforced by firestore.rules) can write.

   Firestore layout:
     courses/{courseId}
       title, description, category, thumbnail, instructor,
       status ('published'|'upcoming'), order, createdAt
     courses/{courseId}/modules/{moduleId}
       title, order
     courses/{courseId}/modules/{moduleId}/lessons/{lessonId}
      title, description, duration, videoUrl, resources[], order, isFreePreview
     enrollments/{uid}_{courseId}
       userId, courseId, status, paymentMethod, transactionId,
       requestedAt, approvedAt, approvedBy, accessSource
     progress/{uid}/courses/{courseId}
       completedLessons[], lastLessonId, lastUpdated, completion
   ========================================================= */

import { db, isFirebaseConfigured, auth, storage } from './firebase-init.js';

let fs = null;
async function loadFirestore() {
  if (!fs) {
    fs = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  }
  return fs;
}

export function isValidLessonVideoUrl(url) {
  return isValidYoutubeUrl(url) || isMp4VideoUrl(url);
}

const enrollmentKey = (uid, courseId) => `${uid}_${courseId}`;

/* ---------- MP4 helpers ---------- */
export function isMp4VideoUrl(url) {
  if (!url) return false;
  const urlStr = String(url).trim().toLowerCase();
  return urlStr.endsWith('.mp4') || /\.mp4([?#]|$)/.test(urlStr);
}

/* ---------- YouTube helpers ---------- */
export function extractYoutubeId(url) {
  if (!url) return null;
  const value = String(url).trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  try {
    const parsed = new URL(value);
    if (parsed.hostname === 'youtu.be') return parsed.pathname.slice(1).match(/^[\w-]{11}$/)?.[0] || null;
    if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(parsed.hostname)) {
      const candidate = parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean).pop();
      return candidate && /^[\w-]{11}$/.test(candidate) ? candidate : null;
    }
  } catch {
    return null;
  }
  return null;
}

export function getYoutubeEmbedUrl(url) {
  const id = extractYoutubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?controls=1&rel=0&playsinline=1` : null;
}

export function isValidYoutubeUrl(url) {
  return !!extractYoutubeId(url);
}

function sortByOrder(items) {
  return items.sort((left, right) => {
    const leftOrder = Number.isFinite(Number(left.order)) ? Number(left.order) : 0;
    const rightOrder = Number.isFinite(Number(right.order)) ? Number(right.order) : 0;
    return leftOrder - rightOrder;
  });
}

const CACHE_TTL_MS = 5 * 60 * 1000;
const COURSE_CACHE_KEY = 'siam_course_catalog_cache_v1';
const LIVE_CACHE_KEY = 'siam_live_archive_cache_v1';
const DEFAULT_COURSE = {
  id: 'python-for-beginners-bangla',
  title: 'Python for Beginners (Bangla)',
  description: 'A beginner-friendly Python course in Bangla, built for students who want to start programming from zero and move toward AI and machine learning.',
  category: 'Python',
  language: 'Bangla',
  instructor: 'CodeWithSiam',
  status: 'published',
  price: 0,
  discountPrice: 0,
  order: 1,
  modules: [{
    id: 'python-foundations',
    title: 'Python Foundations',
    lessonCatalog: [
      'Introduction to Python & Environment Setup',
      'Variables, Data Types, and Operators',
      'Conditionals and Loops',
      'Functions and Modules',
      'Lists, Tuples, Dictionaries, Sets',
      'File Handling Basics',
      'Mini Project: Simple Calculator / To-Do App',
      'Next Steps: Intro to NumPy & Pandas (bridge to Data Science)'
    ].map((title, index) => ({ id: `python-foundations-${index + 1}`, title, duration: 'Lesson', order: index + 1 }))
  }]
};

function readSessionCache(key) {
  try {
    const cached = JSON.parse(sessionStorage.getItem(key) || 'null');
    return cached && Date.now() - cached.timestamp < CACHE_TTL_MS ? cached.value : null;
  } catch {
    return null;
  }
}

function writeSessionCache(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), value }));
  } catch {
    // Storage is optional; Firestore remains the source of truth.
  }
}

function clearSessionCache(...keys) {
  try { keys.forEach(key => sessionStorage.removeItem(key)); } catch {}
}

export async function fetchCourseEnrollment(uid, courseId) {
  if (!isFirebaseConfigured || !db || !uid || !courseId) return null;
  const { doc, getDoc } = await loadFirestore();
  const snapshot = await getDoc(doc(db, 'enrollments', enrollmentKey(uid, courseId)));
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

/* ---------- READ: public course metadata plus authorized lesson videos ---------- */
export async function fetchAllCourses({ includeLessons = true } = {}) {
  if (!isFirebaseConfigured || !db) return [];
  if (!includeLessons) {
    const cached = readSessionCache(COURSE_CACHE_KEY);
    if (cached) return cached;
  }
  const { collection, doc, getDoc, getDocs, limit, query } = await loadFirestore();

  const coursesSnap = await getDocs(query(collection(db, 'courses'), limit(100)));
  if (coursesSnap.empty) {
    const fallbackModules = DEFAULT_COURSE.modules.map(module => ({ ...module, lessons: module.lessonCatalog }));
    const fallback = [{ ...DEFAULT_COURSE, modules: fallbackModules, lessons: fallbackModules.flatMap(module => module.lessons) }];
    if (!includeLessons) writeSessionCache(COURSE_CACHE_KEY, fallback);
    return fallback;
  }
  const currentUser = auth?.currentUser || null;
  const isAdminUser = currentUser?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com';
  const isGoogleUser = currentUser?.providerData?.some(provider => provider.providerId === 'google.com');
  let emailAccess = false;
  let courseAccessIds = [];
  if (isGoogleUser && currentUser.email) {
    try {
      const { doc, getDoc } = await loadFirestore();
      const accessSnap = await getDoc(doc(db, 'authorized_users', currentUser.email.toLowerCase()));
      if (accessSnap.exists()) {
        const accessData = accessSnap.data();
        emailAccess = accessData.access === 'granted';
        courseAccessIds = Array.isArray(accessData.courseIds) ? accessData.courseIds : [];
      }
    } catch (error) {
      console.warn('Email authorization unavailable:', error.code || error.message);
    }
  }
  const courses = await Promise.all(sortByOrder(coursesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))).map(async (course) => {
    const enrollment = currentUser ? await fetchCourseEnrollment(currentUser.uid, course.id).catch(() => null) : null;
    const legacyAccess = isGoogleUser && emailAccess && (!courseAccessIds.length || courseAccessIds.includes(course.id));
    const hasAccess = isAdminUser || enrollment?.status === 'approved' || (legacyAccess && enrollment?.status !== 'revoked');
    const accessStatus = isAdminUser || hasAccess ? 'approved' : enrollment?.status || 'not_enrolled';
    // Course-level video URLs are legacy fields and must never be sent to learners without access.
    if (!hasAccess) delete course.videoUrl;
    course.accessStatus = accessStatus;
    course.accessSource = enrollment?.accessSource || (legacyAccess ? 'legacy' : '');
    course.accessDenied = !hasAccess;

    const modulesSnap = await getDocs(query(collection(db, 'courses', course.id, 'modules'), limit(100)));
    const modules = [];
    let allLessons = [];
    let previewLessonIndex = 0;

    for (const moduleDoc of sortByOrder(modulesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })))) {
      const moduleData = { ...moduleDoc };
      const catalog = Array.isArray(moduleDoc.lessonCatalog)
        ? sortByOrder(moduleDoc.lessonCatalog.map(lesson => ({ ...lesson })))
        : [];
      const lessonMetadata = catalog.map(lesson => {
        const isFreePreview = previewLessonIndex < 2;
        previewLessonIndex += 1;
        return { ...lesson, isFreePreview, freePreview: isFreePreview, moduleId: moduleDoc.id, moduleTitle: moduleDoc.title };
      });
      let lessons = lessonMetadata;
      if (includeLessons && (hasAccess || lessonMetadata.some(lesson => lesson.freePreview))) {
        try {
          if (hasAccess) {
            const lessonsSnap = await getDocs(query(collection(db, 'courses', course.id, 'modules', moduleDoc.id, 'lessons'), limit(200)));
            const metadataById = new Map(lessonMetadata.map(lesson => [lesson.id, lesson]));
            lessons = sortByOrder(lessonsSnap.docs.map(snapshot => ({
              ...(metadataById.get(snapshot.id) || {}),
              id: snapshot.id,
              moduleId: moduleDoc.id,
              moduleTitle: moduleDoc.title,
              ...snapshot.data(),
              isFreePreview: snapshot.data().isFreePreview === true || snapshot.data().freePreview === true || metadataById.get(snapshot.id)?.isFreePreview === true,
              freePreview: snapshot.data().isFreePreview === true || snapshot.data().freePreview === true || metadataById.get(snapshot.id)?.isFreePreview === true
            })));
          } else {
            const previewLessons = await Promise.all(lessonMetadata.filter(lesson => lesson.freePreview).map(async lesson => {
              const snapshot = await getDoc(doc(db, 'courses', course.id, 'modules', moduleDoc.id, 'lessons', lesson.id));
              return snapshot.exists() ? { ...lesson, ...snapshot.data(), id: snapshot.id, moduleId: moduleDoc.id, moduleTitle: moduleDoc.title, isFreePreview: true, freePreview: true } : null;
            }));
            lessons = previewLessons.filter(Boolean);
          }
        } catch (error) {
          lessons = lessonMetadata.filter(lesson => lesson.freePreview).map(lesson => ({ ...lesson }));
          console.warn(`Lessons unavailable for course ${course.id}:`, error.code || error.message);
        }
      }
      moduleData.lessons = lessons;
      modules.push(moduleData);
      allLessons = allLessons.concat(lessons);
    }

    course.modules = modules;
    course.lessons = allLessons; // flattened, ordered by module then lesson order
    return course;
  }));

  if (!includeLessons) writeSessionCache(COURSE_CACHE_KEY, courses);
  return courses;
}

/* ---------- ADMIN WRITES (rejected server-side by firestore.rules unless role=='admin') ---------- */

export async function createCourse(courseData) {
  const { collection, addDoc, serverTimestamp } = await loadFirestore();
  const result = await addDoc(collection(db, 'courses'), {
    title: courseData.title || 'Untitled course',
    description: courseData.description || '',
    category: courseData.category || 'General',
    language: courseData.language || '',
    thumbnail: courseData.thumbnail || '',
    videoUrl: courseData.videoUrl || '',
    price: Math.max(0, Number(courseData.price) || 0),
    discountPrice: Math.max(0, Number(courseData.discountPrice) || 0),
    instructor: courseData.instructor || 'CodeWithSiam',
    status: courseData.status || 'published',
    showOnIndex: courseData.showOnIndex === true,
    order: Number(courseData.order) || 0,
    createdAt: serverTimestamp(),
  });
  clearSessionCache(COURSE_CACHE_KEY);
  return result;
}

export async function updateCourse(courseId, courseData) {
  const { doc, updateDoc } = await loadFirestore();
  const result = await updateDoc(doc(db, 'courses', courseId), courseData);
  clearSessionCache(COURSE_CACHE_KEY);
  return result;
}

export async function findUserByEmail(email) {
  const { collection, getDocs } = await loadFirestore();
  const snap = await getDocs(collection(db, 'users'));
  const normalizedEmail = String(email).trim().toLowerCase();
  const userDoc = snap.docs.find(item => String(item.data().email || '').toLowerCase() === normalizedEmail);
  return userDoc ? { id: userDoc.id, ...userDoc.data() } : null;
}

export async function updateUserAccess(uid, data) {
  const { doc, updateDoc } = await loadFirestore();
  return updateDoc(doc(db, 'users', uid), data);
}

export async function grantEmailAccess(email, courseId = '') {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!normalizedEmail) throw new Error('Gmail address is required.');
  const { doc, getDoc, setDoc, serverTimestamp, arrayUnion } = await loadFirestore();
  const accessRef = doc(db, 'authorized_users', normalizedEmail);
  const existing = await getDoc(accessRef);
  const payload = {
    email: normalizedEmail,
    access: 'granted',
    updatedAt: serverTimestamp(),
  };
  if (courseId && (!existing.exists() || existing.data().access !== 'granted' || Array.isArray(existing.data().courseIds))) {
    payload.courseIds = existing.exists() && Array.isArray(existing.data().courseIds)
      ? arrayUnion(courseId)
      : [courseId];
  }
  return setDoc(accessRef, payload, { merge: true });
}

export async function revokeEmailAccess(email) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!normalizedEmail) throw new Error('Gmail address is required.');
  const { doc, setDoc, serverTimestamp } = await loadFirestore();
  return setDoc(doc(db, 'authorized_users', normalizedEmail), {
    email: normalizedEmail,
    access: 'revoked',
    updatedAt: serverTimestamp(),
  }, { merge: true });
}

export async function createPaymentSubmission(paymentData) {
  if (!auth?.currentUser || auth.currentUser.uid !== paymentData.userId) {
    throw new Error('You must be signed in to submit a payment.');
  }
  const { collection, addDoc, doc, setDoc, serverTimestamp } = await loadFirestore();
  const payment = await addDoc(collection(db, 'payments'), {
    userId: auth.currentUser.uid,
    studentName: paymentData.studentName || auth.currentUser.displayName || '',
    studentEmail: auth.currentUser.email || '',
    courseId: paymentData.courseId || '',
    courseTitle: paymentData.courseTitle || '',
    amount: Number(paymentData.amount) || 0,
    method: paymentData.method || '',
    transactionId: String(paymentData.transactionId || '').trim(),
    phone: String(paymentData.phone || '').trim(),
    paymentDate: paymentData.paymentDate || '',
    screenshotUrl: paymentData.screenshotUrl || '',
    status: 'pending',
    submittedAt: serverTimestamp(),
  });
  await setDoc(doc(db, 'enrollments', enrollmentKey(auth.currentUser.uid, paymentData.courseId)), {
    userId: auth.currentUser.uid,
    courseId: paymentData.courseId || '',
    status: 'pending',
    paymentMethod: paymentData.method || '',
    transactionId: String(paymentData.transactionId || '').trim(),
    paymentId: payment.id,
    requestedAt: serverTimestamp(),
    accessSource: 'payment',
  });
  return payment;
}

export async function setCourseEnrollmentAccess({ uid, courseId, status, accessSource = 'manual', paymentMethod = '', transactionId = '' }) {
  if (!uid || !courseId || !['approved', 'revoked'].includes(status)) throw new Error('A student, course, and valid access state are required.');
  const { doc, setDoc, serverTimestamp } = await loadFirestore();
  return setDoc(doc(db, 'enrollments', enrollmentKey(uid, courseId)), {
    userId: uid,
    courseId,
    status,
    paymentMethod,
    transactionId,
    accessSource,
    approvedAt: status === 'approved' ? serverTimestamp() : null,
    approvedBy: status === 'approved' ? auth?.currentUser?.uid || '' : '',
    updatedAt: serverTimestamp(),
  }, { merge: true });
}

export async function uploadPaymentScreenshot(file, userId, paymentId, onProgress) {
  if (!storage || !file || !userId || !paymentId) throw new Error('Payment screenshot upload is unavailable.');
  if (!file.type.startsWith('image/')) throw new Error('Please choose an image screenshot.');
  const storageModule = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js');
  const { ref, uploadBytesResumable, getDownloadURL } = storageModule;
  const fileRef = ref(storage, `payment-proofs/${userId}/${paymentId}`);
  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(fileRef, file, { contentType: file.type, customMetadata: { paymentId, userId } });
    task.on('state_changed', snapshot => onProgress?.((snapshot.bytesTransferred / snapshot.totalBytes) * 100), reject, async () => {
      try { resolve(await getDownloadURL(fileRef)); } catch (error) { reject(error); }
    });
  });
}

export async function updatePaymentScreenshot(paymentId, screenshotUrl) {
  const { doc, updateDoc } = await loadFirestore();
  return updateDoc(doc(db, 'payments', paymentId), { screenshotUrl });
}

export async function fetchUserPayments(uid) {
  if (!uid) return [];
  const { collection, getDocs, query, where } = await loadFirestore();
  const snap = await getDocs(query(collection(db, 'payments'), where('userId', '==', uid)));
  return snap.docs.map(item => ({ id: item.id, ...item.data() })).sort((left, right) => {
    const leftTime = left.submittedAt?.toMillis?.() || new Date(left.submittedAt || 0).getTime();
    const rightTime = right.submittedAt?.toMillis?.() || new Date(right.submittedAt || 0).getTime();
    return rightTime - leftTime;
  });
}

export async function fetchAllPayments() {
  const { collection, getDocs, query, orderBy } = await loadFirestore();
  const snap = await getDocs(query(collection(db, 'payments'), orderBy('submittedAt', 'desc')));
  return snap.docs.map(item => ({ id: item.id, ...item.data() }));
}

export async function fetchAllEnrollments() {
  const { collection, getDocs } = await loadFirestore();
  const snap = await getDocs(collection(db, 'enrollments'));
  return snap.docs.map(item => ({ id: item.id, ...item.data() }));
}

export async function fetchAdminDashboardStats() {
  const { collection, getDocs } = await loadFirestore();
  const [usersSnap, paymentsSnap, postsSnap] = await Promise.all([
    getDocs(collection(db, 'users')),
    getDocs(collection(db, 'payments')),
    getDocs(collection(db, 'communityPosts')),
  ]);
  return {
    students: usersSnap.size,
    pendingPayments: paymentsSnap.docs.filter(item => item.data().status === 'pending').length,
    communityPosts: postsSnap.size,
  };
}

export async function fetchAdminActivityLog(limitCount = 25) {
  if (!isFirebaseConfigured || !db) return [];
  const { collection, getDocs, orderBy, query, limit } = await loadFirestore();
  const snapshot = await getDocs(query(collection(db, 'adminActivity'), orderBy('createdAt', 'desc'), limit(limitCount)));
  return snapshot.docs.map(item => ({ id: item.id, ...item.data() }));
}

export async function logAdminActivity(action, details = {}) {
  if (!isFirebaseConfigured || !db) return null;
  const { addDoc, collection, serverTimestamp } = await loadFirestore();
  const adminName = auth?.currentUser?.displayName || auth?.currentUser?.email || 'Admin';
  const adminEmail = auth?.currentUser?.email || 'admin@codewithsiam.com';
  const entry = {
    action: String(action || 'Admin action').trim(),
    description: String(details.description || '').trim(),
    page: String(details.page || 'admin').trim(),
    entityType: String(details.entityType || '').trim(),
    entityId: String(details.entityId || '').trim(),
    adminName,
    adminEmail,
    metadata: details.metadata || {},
    createdAt: serverTimestamp(),
  };
  return addDoc(collection(db, 'adminActivity'), entry);
}

export async function updatePayment(paymentId, data) {
  const { doc, updateDoc, serverTimestamp } = await loadFirestore();
  return updateDoc(doc(db, 'payments', paymentId), { ...data, reviewedAt: serverTimestamp() });
}

export async function deletePayment(paymentId) {
  const { doc, deleteDoc } = await loadFirestore();
  return deleteDoc(doc(db, 'payments', paymentId));
}

export async function fetchLiveSettings() {
  const cached = readSessionCache(`${LIVE_CACHE_KEY}_settings`);
  if (cached) return cached;
  const { doc, getDoc } = await loadFirestore();
  const snap = await getDoc(doc(db, 'settings', 'liveStream'));
  const settings = snap.exists() ? snap.data() : {};
  writeSessionCache(`${LIVE_CACHE_KEY}_settings`, settings);
  return settings;
}

export async function updateLiveSettings(data) {
  const { doc, setDoc, serverTimestamp } = await loadFirestore();
  const result = await setDoc(doc(db, 'settings', 'liveStream'), { ...data, updatedAt: serverTimestamp() }, { merge: true });
  clearSessionCache(`${LIVE_CACHE_KEY}_settings`);
  return result;
}

export async function fetchLiveSessions() {
  if (!isFirebaseConfigured || !db) return [];
  const cached = readSessionCache(LIVE_CACHE_KEY);
  if (cached) return cached;
  const { collection, getDocs, limit, orderBy, query } = await loadFirestore();
  const snapshot = await getDocs(query(collection(db, 'liveSessions'), orderBy('endedAt', 'desc'), limit(50)));
  const sessions = snapshot.docs.map(item => ({ id: item.id, ...item.data() }));
  writeSessionCache(LIVE_CACHE_KEY, sessions);
  return sessions;
}

export async function createLiveSession(sessionData) {
  const { addDoc, collection, serverTimestamp } = await loadFirestore();
  const videoId = extractYoutubeId(sessionData.videoUrl || '');
  if (!videoId) throw new Error('A valid YouTube replay URL is required.');
  if (!String(sessionData.title || '').trim()) throw new Error('Live topic is required.');
  const result = await addDoc(collection(db, 'liveSessions'), {
    title: String(sessionData.title).trim(),
    category: String(sessionData.category || 'Live learning').trim(),
    thumbnail: String(sessionData.thumbnail || '').trim(),
    description: String(sessionData.description || '').trim(),
    videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
    youtubeVideoId: videoId,
    endedAt: serverTimestamp(),
  });
  clearSessionCache(LIVE_CACHE_KEY);
  return result;
}

export async function deleteLiveSession(sessionId) {
  const { doc, deleteDoc } = await loadFirestore();
  if (!sessionId) throw new Error('Replay id is required.');
  const result = await deleteDoc(doc(db, 'liveSessions', sessionId));
  clearSessionCache(LIVE_CACHE_KEY);
  return result;
}

export async function deleteCourse(courseId) {
  const { doc, deleteDoc, collection, getDocs } = await loadFirestore();
  // Clean up nested modules/lessons first (client-side cascade; fine at this scale).
  const modulesSnap = await getDocs(collection(db, 'courses', courseId, 'modules'));
  for (const moduleDoc of modulesSnap.docs) {
    const lessonsSnap = await getDocs(
      collection(db, 'courses', courseId, 'modules', moduleDoc.id, 'lessons')
    );
    for (const lessonDoc of lessonsSnap.docs) {
      await deleteDoc(doc(db, 'courses', courseId, 'modules', moduleDoc.id, 'lessons', lessonDoc.id));
    }
    await deleteDoc(doc(db, 'courses', courseId, 'modules', moduleDoc.id));
  }
  return deleteDoc(doc(db, 'courses', courseId));
}

export async function createModule(courseId, moduleData) {
  const { collection, addDoc } = await loadFirestore();
  return addDoc(collection(db, 'courses', courseId, 'modules'), {
    title: moduleData.title || 'New module',
    order: Number(moduleData.order) || 0,
  });
}

export async function updateModule(courseId, moduleId, moduleData) {
  const { doc, updateDoc } = await loadFirestore();
  return updateDoc(doc(db, 'courses', courseId, 'modules', moduleId), moduleData);
}

export async function deleteModule(courseId, moduleId) {
  const { doc, deleteDoc, collection, getDocs } = await loadFirestore();
  const lessonsSnap = await getDocs(collection(db, 'courses', courseId, 'modules', moduleId, 'lessons'));
  for (const lessonDoc of lessonsSnap.docs) {
    await deleteDoc(doc(db, 'courses', courseId, 'modules', moduleId, 'lessons', lessonDoc.id));
  }
  return deleteDoc(doc(db, 'courses', courseId, 'modules', moduleId));
}

export async function createLesson(courseId, moduleId, lessonData) {
  const videoUrl = lessonData.videoUrl || '';
  if (!videoUrl || (!isValidYoutubeUrl(videoUrl) && !isMp4VideoUrl(videoUrl))) {
    throw new Error('A valid YouTube URL or MP4 video URL is required.');
  }
  const { collection, addDoc } = await loadFirestore();
  const isYoutube = isValidYoutubeUrl(videoUrl);
  const lesson = {
    title: lessonData.title || 'New lesson',
    description: lessonData.description || '',
    duration: lessonData.duration || '0 min',
    videoUrl: videoUrl,
    youtubeVideoId: isYoutube ? extractYoutubeId(videoUrl) : '',
    youtubeUrl: isYoutube ? videoUrl : '',
    videoType: isYoutube ? 'youtube' : 'mp4',
    subtitleLanguage: lessonData.subtitleLanguage || '',
    isFreePreview: lessonData.isFreePreview === true || lessonData.freePreview === true,
    freePreview: lessonData.isFreePreview === true || lessonData.freePreview === true,
    published: lessonData.published !== false,
    showYoutubeLink: lessonData.showYoutubeLink === true,
    resources: Array.isArray(lessonData.resources) ? lessonData.resources : [],
    order: Number(lessonData.order) || 0,
  };
  const created = await addDoc(collection(db, 'courses', courseId, 'modules', moduleId, 'lessons'), lesson);
  await syncLessonCatalog(courseId, moduleId);
  return created;
}

export async function updateLesson(courseId, moduleId, lessonId, lessonData) {
  if ('videoUrl' in lessonData) {
    const videoUrl = lessonData.videoUrl || '';
    if (videoUrl && !isValidYoutubeUrl(videoUrl) && !isMp4VideoUrl(videoUrl)) {
      throw new Error('A valid YouTube URL or MP4 video URL is required.');
    }
  }
  const { doc, updateDoc } = await loadFirestore();

  const isYoutube = lessonData.videoUrl && isValidYoutubeUrl(lessonData.videoUrl);
  const isMp4 = lessonData.videoUrl && isMp4VideoUrl(lessonData.videoUrl);
  const updatePayload = {
    ...lessonData,
    ...(lessonData.videoUrl ? {
      youtubeVideoId: isYoutube ? extractYoutubeId(lessonData.videoUrl) : '',
      youtubeUrl: isYoutube ? lessonData.videoUrl : '',
      videoType: isYoutube ? 'youtube' : isMp4 ? 'mp4' : 'youtube'
    } : {})
  };

  const result = await updateDoc(doc(db, 'courses', courseId, 'modules', moduleId, 'lessons', lessonId), updatePayload);
  await syncLessonCatalog(courseId, moduleId);
  return result;
}

export async function syncLessonCatalog(courseId, moduleId) {
  const { collection, doc, getDocs, getDoc, setDoc } = await loadFirestore();
  const lessonsSnap = await getDocs(collection(db, 'courses', courseId, 'modules', moduleId, 'lessons'));
  const sortedLessons = sortByOrder(lessonsSnap.docs.map(item => {
    const lesson = item.data();
    const hasExplicitPreview = Object.prototype.hasOwnProperty.call(lesson, 'isFreePreview') || Object.prototype.hasOwnProperty.call(lesson, 'freePreview');
    return { id: item.id, title: lesson.title || 'Video', duration: lesson.duration || '0 min', order: Number(lesson.order) || 0, hasExplicitPreview, isFreePreview: lesson.isFreePreview === true || lesson.freePreview === true, freePreview: lesson.isFreePreview === true || lesson.freePreview === true };
  }));
  const catalog = sortedLessons.map((lesson, index) => {
    const isFreePreview = lesson.hasExplicitPreview ? lesson.isFreePreview : index < 2;
    return { id: lesson.id, title: lesson.title, duration: lesson.duration, order: lesson.order, isFreePreview, freePreview: isFreePreview };
  });
  const moduleRef = doc(db, 'courses', courseId, 'modules', moduleId);
  const moduleSnap = await getDoc(moduleRef);
  if (moduleSnap.exists()) await setDoc(moduleRef, { lessonCatalog: catalog }, { merge: true });
}

export async function deleteLesson(courseId, moduleId, lessonId) {
  const { doc, deleteDoc } = await loadFirestore();
  const result = await deleteDoc(doc(db, 'courses', courseId, 'modules', moduleId, 'lessons', lessonId));
  await syncLessonCatalog(courseId, moduleId);
  return result;
}

/* ---------- VIDEO UPLOAD (for MP4 files to Firebase Storage) ---------- */
export async function uploadLessonVideo(file, courseId, moduleId, onProgress) {
  if (!isFirebaseConfigured) throw new Error('Firebase is not configured');
  if (!file) throw new Error('No file selected');
  if (!file.type.startsWith('video/')) throw new Error('Only video files are supported');
  
  const { storage } = await import('./firebase-init.js');
  if (!storage) throw new Error('Firebase Storage is not available');
  
  const storageModule = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js');
  const { ref, uploadBytesResumable, getDownloadURL } = storageModule;
  
  const storagePath = `lessons/${courseId}/${moduleId}/${Date.now()}-${file.name}`;
  const fileRef = ref(storage, storagePath);
  
  return new Promise((resolve, reject) => {
    const uploadTask = uploadBytesResumable(fileRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) onProgress(progress);
      },
      (error) => {
        reject(new Error('Video upload failed: ' + (error.message || 'Unknown error')));
      },
      async () => {
        try {
          const downloadUrl = await getDownloadURL(fileRef);
          resolve(downloadUrl);
        } catch (error) {
          reject(new Error('Could not get download URL: ' + (error.message || 'Unknown error')));
        }
      }
    );
  });
}

/* ---------- PROGRESS (per authenticated user, cross-device) ---------- */

export async function fetchUserProgress(uid) {
  if (!isFirebaseConfigured || !db || !uid) return {};
  const cacheKey = `siam_progress_cache_${uid}`;
  const cached = readSessionCache(cacheKey);
  if (cached) return cached;
  const { collection, getDocs, limit, query } = await loadFirestore();
  const snap = await getDocs(query(collection(db, 'progress', uid, 'courses'), limit(100)));
  const progress = {};
  snap.forEach((d) => {
    progress[d.id] = d.data();
  });
  writeSessionCache(cacheKey, progress);
  return progress;
}

export async function saveUserCourseProgress(uid, courseId, data) {
  if (!isFirebaseConfigured || !db || !uid) return;
  const { doc, setDoc, serverTimestamp } = await loadFirestore();
  try { sessionStorage.removeItem(`siam_progress_cache_${uid}`); } catch {}
  return setDoc(
    doc(db, 'progress', uid, 'courses', courseId),
    { ...data, lastUpdated: serverTimestamp() },
    { merge: true }
  );
}

