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

import { db, isFirebaseConfigured, auth } from './firebase-init.js';

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
    // Do not expose course-level videoUrl to unauthenticated visitors.
    if (!currentUser) delete course.videoUrl;
    const isAdminUser = currentUser?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com';
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
    const hasAccess = !!currentUser && (isAdminUser || (isGoogleUser && emailAccess));
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
          // Keep the complete lesson payload for authorized users. Admin and
          // course-player views need the original video fields intact.
          moduleData.lessons = lessons;
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
    phone: String(paymentData.phone || '').trim(),
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
  const { doc, getDoc } = await loadFirestore();
  const snap = await getDoc(doc(db, 'settings', 'liveStream'));
  return snap.exists() ? snap.data() : {};
}

export async function updateLiveSettings(data) {
  const { doc, setDoc, serverTimestamp } = await loadFirestore();
  return setDoc(doc(db, 'settings', 'liveStream'), { ...data, updatedAt: serverTimestamp() }, { merge: true });
}

export async function fetchLiveSessions() {
  if (!isFirebaseConfigured || !db) return [];
  const { collection, getDocs, orderBy, query } = await loadFirestore();
  const snapshot = await getDocs(query(collection(db, 'liveSessions'), orderBy('endedAt', 'desc')));
  return snapshot.docs.map(item => ({ id: item.id, ...item.data() }));
}

export async function createLiveSession(sessionData) {
  const { addDoc, collection, serverTimestamp } = await loadFirestore();
  const videoId = extractYoutubeId(sessionData.videoUrl || '');
  if (!videoId) throw new Error('A valid YouTube replay URL is required.');
  if (!String(sessionData.title || '').trim()) throw new Error('Live topic is required.');
  return addDoc(collection(db, 'liveSessions'), {
    title: String(sessionData.title).trim(),
    category: String(sessionData.category || 'Live learning').trim(),
    thumbnail: String(sessionData.thumbnail || '').trim(),
    description: String(sessionData.description || '').trim(),
    videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
    youtubeVideoId: videoId,
    endedAt: serverTimestamp(),
  });
}

export async function deleteLiveSession(sessionId) {
  const { doc, deleteDoc } = await loadFirestore();
  if (!sessionId) throw new Error('Replay id is required.');
  return deleteDoc(doc(db, 'liveSessions', sessionId));
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
    freePreview: lessonData.freePreview === true,
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

