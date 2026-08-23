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

export function uploadLessonVideo(courseId, moduleId, lessonId, file, onProgress) {
  if (!storage || !auth?.currentUser || !file) return Promise.reject(new Error('Video upload is unavailable.'));
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
      task.on('state_changed', snapshot => {
        onProgress?.(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
      }, reject, () => getDownloadURL(task.snapshot.ref).then(resolve).catch(reject));
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
    // Do not expose course-level videoUrl to unauthenticated visitors.
    if (!currentUser) {
      delete course.videoUrl;
    }
    const isAdminUser = currentUser?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com' && currentUser.emailVerified === true;
    const isPaid = Number(course.price) > 0;
    const hasAccess = !!currentUser && !userProfile?.blocked && (!isPaid || isAdminUser || (userProfile?.courseAccess || []).includes(course.id));
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
          console.warn(`Lessons unavailable for course ${course.id}:`, error.code || error.message);
          moduleData.lessons = [];
          course.accessDenied = true;
        }
      } else {
        moduleData.lessons = [];
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
    price: Number(courseData.price) || 0,
    payment: courseData.payment || { bkash: '', rocket: '', bank: '' },
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
  if (lessonData.videoUrl && !isValidLessonVideoUrl(lessonData.videoUrl)) {
    throw new Error('That does not look like a valid YouTube URL.');
  }
  const { collection, addDoc } = await loadFirestore();
  return addDoc(collection(db, 'courses', courseId, 'modules', moduleId, 'lessons'), {
    title: lessonData.title || 'New lesson',
    description: lessonData.description || '',
    duration: lessonData.duration || '0 min',
    videoUrl: lessonData.videoUrl || '',
    youtubeVideoId: extractYoutubeId(lessonData.videoUrl || ''),
    youtubeUrl: extractYoutubeId(lessonData.videoUrl || '') ? lessonData.videoUrl : '',
    videoType: extractYoutubeId(lessonData.videoUrl || '') ? 'youtube' : lessonData.videoUrl ? 'file' : '',
    resources: Array.isArray(lessonData.resources) ? lessonData.resources : [],
    order: Number(lessonData.order) || 0,
  });
}

export async function updateLesson(courseId, moduleId, lessonId, lessonData) {
  if (lessonData.videoUrl && !isValidLessonVideoUrl(lessonData.videoUrl)) {
    throw new Error('That does not look like a valid YouTube URL.');
  }
  const { doc, updateDoc } = await loadFirestore();
  return updateDoc(doc(db, 'courses', courseId, 'modules', moduleId, 'lessons', lessonId), {
    ...lessonData,
    youtubeVideoId: extractYoutubeId(lessonData.videoUrl || ''),
    youtubeUrl: extractYoutubeId(lessonData.videoUrl || '') ? lessonData.videoUrl : '',
    videoType: extractYoutubeId(lessonData.videoUrl || '') ? 'youtube' : lessonData.videoUrl ? 'file' : ''
  });
}

export async function deleteLesson(courseId, moduleId, lessonId) {
  const { doc, deleteDoc } = await loadFirestore();
  return deleteDoc(doc(db, 'courses', courseId, 'modules', moduleId, 'lessons', lessonId));
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
