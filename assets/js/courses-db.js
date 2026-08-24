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
       title, description, duration, videoUrl, resources[], order
     progress/{uid}/courses/{courseId}
       completedLessons[], lastLessonId, lastUpdated, completion
   ========================================================= */

import { db, storage, isFirebaseConfigured, auth } from './firebase-init.js';

let fs = null;
let storageModule = null;
async function loadFirestore() {
  if (!fs) {
    fs = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js');
  }
  return fs;
}

async function loadStorage() {
  if (!storageModule) {
    storageModule = await import('https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js');
  }
  return storageModule;
}

export const MAX_VIDEO_BYTES = 100 * 1024 * 1024;

export function isStorageVideoUrl(url) {
  return /^https:\/\/firebasestorage\.googleapis\.com\//i.test(String(url || ''));
}

export function isMp4VideoUrl(url) {
  return isStorageVideoUrl(url) || /\.mp4(?:[?#].*)?$/i.test(String(url || ''));
}

export function isValidLessonVideoUrl(url) {
  return isValidYoutubeUrl(url) || isMp4VideoUrl(url);
}

function friendlyStorageError(error) {
  const code = error?.code || '';
  if (code.includes('storage/unauthorized')) return new Error('Video upload denied. Sign in with the configured admin Google account.');
  if (code.includes('storage/unauthenticated')) return new Error('Please sign in with the admin Google account before uploading.');
  if (code.includes('storage/unknown') || code.includes('storage/retry-limit-exceeded')) return new Error('Video upload failed. Check that Firebase Storage is enabled and try again.');
  if (code.includes('storage/bucket-not-found')) return new Error('Firebase Storage bucket was not found. Enable Storage in the Firebase Console.');
  if (code.includes('storage/quota-exceeded')) return new Error('Firebase Storage quota is full. Delete old videos or upgrade the Firebase plan.');
  return error instanceof Error ? error : new Error('Video upload failed. Check Firebase Storage setup and try again.');
}

export function uploadLessonVideo(courseId, moduleId, lessonId, file, onProgress) {
  if (!storage) return Promise.reject(new Error('Firebase Storage is not enabled or configured. Enable Storage in the Firebase Console.'));
  if (!auth?.currentUser) return Promise.reject(new Error('Please sign in with the admin Google account before uploading.'));
  if (!file) return Promise.reject(new Error('Choose an MP4 video first.'));
  if (!file.name.toLowerCase().endsWith('.mp4') || file.type !== 'video/mp4') {
    return Promise.reject(new Error('Only MP4 video files are supported.'));
  }
  if (file.size > MAX_VIDEO_BYTES) {
    return Promise.reject(new Error(`Video must be smaller than ${MAX_VIDEO_BYTES / (1024 * 1024)} MB.`));
  }
  return loadStorage().then(({ ref, uploadBytesResumable, getDownloadURL }) => {
    const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-');
    const fileRef = ref(storage, `lessons_videos/${courseId}/${lessonId}/${Date.now()}-${safeName}`);
    const task = uploadBytesResumable(fileRef, file, { contentType: 'video/mp4' });
    return new Promise((resolve, reject) => {
      let bytesTransferred = 0;
      const startTimer = setTimeout(() => {
        if (bytesTransferred === 0) {
          task.cancel();
          reject(new Error('Video upload could not start. Check your connection and Firebase Storage setup.'));
        }
      }, 15000);
      task.on('state_changed', snapshot => {
        bytesTransferred = snapshot.bytesTransferred;
        if (snapshot.state === 'paused') task.resume();
        onProgress?.(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
      }, error => {
        clearTimeout(startTimer);
        reject(friendlyStorageError(error));
      }, () => {
        clearTimeout(startTimer);
        getDownloadURL(task.snapshot.ref).then(resolve).catch(error => reject(friendlyStorageError(error)));
      });
    });
  });
}

export function uploadCourseVideo(courseId, file, onProgress) {
  if (!storage) return Promise.reject(new Error('Firebase Storage is not enabled or configured. Enable Storage in the Firebase Console.'));
  if (!auth?.currentUser) return Promise.reject(new Error('Please sign in with the admin Google account before uploading.'));
  if (!file) return Promise.reject(new Error('Choose an MP4 video first.'));
  if (!file.name.toLowerCase().endsWith('.mp4') || file.type !== 'video/mp4') {
    return Promise.reject(new Error('Only MP4 video files are supported.'));
  }
  if (file.size > MAX_VIDEO_BYTES) {
    return Promise.reject(new Error(`Video must be smaller than ${MAX_VIDEO_BYTES / (1024 * 1024)} MB.`));
  }
  return loadStorage().then(({ ref, uploadBytesResumable, getDownloadURL }) => {
    const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-');
    const fileRef = ref(storage, `courses_videos/${courseId}/${Date.now()}-${safeName}`);
    const task = uploadBytesResumable(fileRef, file, { contentType: 'video/mp4' });
    return new Promise((resolve, reject) => {
      let bytesTransferred = 0;
      const startTimer = setTimeout(() => {
        if (bytesTransferred === 0) {
          task.cancel();
          reject(new Error('Video upload could not start. Check your connection and Firebase Storage setup.'));
        }
      }, 15000);
      task.on('state_changed', snapshot => {
        bytesTransferred = snapshot.bytesTransferred;
        if (snapshot.state === 'paused') task.resume();
        onProgress?.(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
      }, error => {
        clearTimeout(startTimer);
        reject(friendlyStorageError(error));
      }, () => {
        clearTimeout(startTimer);
        getDownloadURL(task.snapshot.ref).then(resolve).catch(error => reject(friendlyStorageError(error)));
      });
    });
  });
}

export async function deleteLessonVideo(url) {
  if (!storage || !url || !isStorageVideoUrl(url)) return;
  const encodedPath = String(url).split('/o/')[1]?.split('?')[0];
  if (!encodedPath) return;
  const { ref, deleteObject } = await loadStorage();
  return deleteObject(ref(storage, decodeURIComponent(encodedPath)));
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
  return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
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

/* ---------- READ: full course tree (public, no auth required) ---------- */
export async function fetchAllCourses() {
  if (!isFirebaseConfigured || !db) return [];
  const { collection, getDocs } = await loadFirestore();

  const coursesSnap = await getDocs(collection(db, 'courses'));
  const currentUser = auth?.currentUser || null;
  let userProfile = null;
  if (currentUser) {
    try {
      const { doc, getDoc } = await loadFirestore();
      const profileSnap = await getDoc(doc(db, 'users', currentUser.uid));
      userProfile = profileSnap.exists() ? profileSnap.data() : null;
    } catch (error) {
      console.warn('User profile unavailable while loading courses:', error.code || error.message);
    }
  }

  const courses = await Promise.all(sortByOrder(coursesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))).map(async (course) => {
    course.price = 0;
    course.discountPrice = 0;
    delete course.payment;
    // Do not expose course-level videoUrl to unauthenticated visitors.
    if (!currentUser) {
      delete course.videoUrl;
    }
    const isAdminUser = currentUser?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com' && currentUser.emailVerified === true;
    const isGoogleUser = currentUser?.providerData?.some(provider => provider.providerId === 'google.com');
    let emailAccess = false;
    if (isGoogleUser && currentUser.email) {
      try {
        const { doc, getDoc } = await loadFirestore();
        const accessSnap = await getDoc(doc(db, 'authorized_users', currentUser.email.toLowerCase()));
        emailAccess = accessSnap.exists() && accessSnap.data().access === 'granted';
      } catch (error) {
        console.warn('Email authorization unavailable:', error.code || error.message);
      }
    }
    const hasAccess = !!currentUser && isGoogleUser && (isAdminUser || emailAccess);
    course.accessDenied = !!currentUser && !hasAccess;
    if (!hasAccess) delete course.videoUrl;

    const modulesSnap = await getDocs(collection(db, 'courses', course.id, 'modules'));
    const modules = [];
    let allLessons = [];

    for (const moduleDoc of sortByOrder(modulesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })))) {
      const moduleData = { ...moduleDoc };
      // Lessons contain protected video URLs. Only fetch lesson documents
      // when a user is signed in. For anonymous visitors, return an empty
      // lessons array so UI shows sign-in gating without exposing URLs.
      let lessons = [];
      if (hasAccess) {
        try {
          const lessonsSnap = await getDocs(collection(db, 'courses', course.id, 'modules', moduleDoc.id, 'lessons'));
          lessons = sortByOrder(lessonsSnap.docs.map((d) => ({ id: d.id, moduleId: moduleDoc.id, ...d.data() })));
          moduleData.lessons = lessons.map((l) => ({ id: l.id, title: l.title, duration: l.duration || '0 min' }));
        } catch (error) {
          moduleData.lessons = [];
          course.accessDenied = true;
          if (error?.code === 'permission-denied') break;
          console.warn(`Lessons unavailable for course ${course.id}:`, error.code || error.message);
        }
      } else {
        moduleData.lessons = Array.isArray(moduleDoc.lessonCatalog)
          ? sortByOrder(moduleDoc.lessonCatalog.map(lesson => ({ ...lesson })))
          : [];
        allLessons = allLessons.concat(moduleData.lessons);
      }
      modules.push(moduleData);
      allLessons = allLessons.concat(lessons);
    }

    course.modules = modules;
    course.lessons = allLessons; // flattened, ordered by module then lesson order
    return course;
  }));

  return courses;
}

/* ---------- ADMIN WRITES (rejected server-side by firestore.rules unless role=='admin') ---------- */

export async function createCourse(courseData) {
  const { collection, addDoc, serverTimestamp } = await loadFirestore();
  return addDoc(collection(db, 'courses'), {
    title: courseData.title || 'Untitled course',
    description: courseData.description || '',
    category: courseData.category || 'General',
    thumbnail: courseData.thumbnail || '',
    videoUrl: courseData.videoUrl || '',
    price: 0,
    discountPrice: 0,
    instructor: courseData.instructor || 'CodeWithSiam',
    status: courseData.status || 'published',
    showOnIndex: courseData.showOnIndex === true,
    order: Number(courseData.order) || 0,
    createdAt: serverTimestamp(),
  });
}

export async function updateCourse(courseId, courseData) {
  const { doc, updateDoc } = await loadFirestore();
  return updateDoc(doc(db, 'courses', courseId), courseData);
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

export async function grantEmailAccess(email) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!normalizedEmail) throw new Error('Gmail address is required.');
  const { doc, setDoc, serverTimestamp } = await loadFirestore();
  return setDoc(doc(db, 'authorized_users', normalizedEmail), {
    email: normalizedEmail,
    access: 'granted',
    updatedAt: serverTimestamp(),
  }, { merge: true });
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
  const { collection, addDoc, serverTimestamp } = await loadFirestore();
  return addDoc(collection(db, 'payments'), {
    userId: auth.currentUser.uid,
    studentName: paymentData.studentName || auth.currentUser.displayName || '',
    studentEmail: auth.currentUser.email || '',
    courseId: paymentData.courseId || '',
    courseTitle: paymentData.courseTitle || '',
    amount: Number(paymentData.amount) || 0,
    method: paymentData.method || '',
    transactionId: String(paymentData.transactionId || '').trim(),
    paymentDate: paymentData.paymentDate || '',
    screenshotUrl: paymentData.screenshotUrl || '',
    status: 'pending',
    submittedAt: serverTimestamp(),
  });
}

export async function fetchAllPayments() {
  const { collection, getDocs, query, orderBy } = await loadFirestore();
  const snap = await getDocs(query(collection(db, 'payments'), orderBy('submittedAt', 'desc')));
  return snap.docs.map(item => ({ id: item.id, ...item.data() }));
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
  const { doc, getDoc } = await loadFirestore();
  const snap = await getDoc(doc(db, 'settings', 'liveStream'));
  return snap.exists() ? snap.data() : {};
}

export async function updateLiveSettings(data) {
  const { doc, setDoc, serverTimestamp } = await loadFirestore();
  return setDoc(doc(db, 'settings', 'liveStream'), { ...data, updatedAt: serverTimestamp() }, { merge: true });
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
  if (!lessonData.videoUrl || !isValidYoutubeUrl(lessonData.videoUrl)) {
    throw new Error('That does not look like a valid YouTube URL.');
  }
  const { collection, addDoc } = await loadFirestore();
  const lesson = {
    title: lessonData.title || 'New lesson',
    description: lessonData.description || '',
    duration: lessonData.duration || '0 min',
    videoUrl: lessonData.videoUrl || '',
    youtubeVideoId: extractYoutubeId(lessonData.videoUrl || ''),
    youtubeUrl: extractYoutubeId(lessonData.videoUrl || '') ? lessonData.videoUrl : '',
    videoType: extractYoutubeId(lessonData.videoUrl || '') ? 'youtube' : lessonData.videoUrl ? 'file' : '',
    subtitleLanguage: lessonData.subtitleLanguage || '',
    freePreview: lessonData.freePreview === true,
    published: lessonData.published !== false,
    resources: Array.isArray(lessonData.resources) ? lessonData.resources : [],
    order: Number(lessonData.order) || 0,
  };
  const created = await addDoc(collection(db, 'courses', courseId, 'modules', moduleId, 'lessons'), lesson);
  await syncLessonCatalog(courseId, moduleId);
  return created;
}

export async function updateLesson(courseId, moduleId, lessonId, lessonData) {
  if ('videoUrl' in lessonData && (!lessonData.videoUrl || !isValidYoutubeUrl(lessonData.videoUrl))) {
    throw new Error('That does not look like a valid YouTube URL.');
  }
  const { doc, updateDoc } = await loadFirestore();
  const result = await updateDoc(doc(db, 'courses', courseId, 'modules', moduleId, 'lessons', lessonId), {
    ...lessonData,
    ...(lessonData.videoUrl ? {
      youtubeVideoId: extractYoutubeId(lessonData.videoUrl),
      youtubeUrl: lessonData.videoUrl,
      videoType: 'youtube'
    } : {})
  });
  await syncLessonCatalog(courseId, moduleId);
  return result;
}

export async function syncLessonCatalog(courseId, moduleId) {
  const { collection, doc, getDocs, getDoc, setDoc } = await loadFirestore();
  const lessonsSnap = await getDocs(collection(db, 'courses', courseId, 'modules', moduleId, 'lessons'));
  const catalog = sortByOrder(lessonsSnap.docs.map(item => {
    const lesson = item.data();
    return { id: item.id, title: lesson.title || 'Video', duration: lesson.duration || '0 min', order: Number(lesson.order) || 0 };
  }));
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

/* ---------- PROGRESS (per authenticated user, cross-device) ---------- */

export async function fetchUserProgress(uid) {
  if (!isFirebaseConfigured || !db || !uid) return {};
  const { collection, getDocs } = await loadFirestore();
  const snap = await getDocs(collection(db, 'progress', uid, 'courses'));
  const progress = {};
  snap.forEach((d) => {
    progress[d.id] = d.data();
  });
  return progress;
}

export async function saveUserCourseProgress(uid, courseId, data) {
  if (!isFirebaseConfigured || !db || !uid) return;
  const { doc, setDoc, serverTimestamp } = await loadFirestore();
  return setDoc(
    doc(db, 'progress', uid, 'courses', courseId),
    { ...data, lastUpdated: serverTimestamp() },
    { merge: true }
  );
}
