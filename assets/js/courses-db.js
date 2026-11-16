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
    fs = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js');
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

const VIDEO_URL_FIELD_NAMES = new Set([
  'youtubeurl', 'videourl', 'youtube', 'video', 'url', 'youtubevideo'
]);

function normalizedFieldName(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

export function getLessonVideoSource(lesson) {
  if (!lesson || typeof lesson !== 'object') return null;

  const values = Object.entries(lesson)
    .filter(([, value]) => typeof value === 'string' && value.trim())
    .map(([key, value]) => ({ key: normalizedFieldName(key), value: value.trim() }));
  const idValue = values.find(({ key }) => ['youtubevideoid', 'youtubeid', 'videoid'].includes(key))?.value || '';
  const orderedUrls = [
    ...values.filter(({ key }) => VIDEO_URL_FIELD_NAMES.has(key)).map(({ value }) => value),
    ...values.map(({ value }) => value)
  ];
  const youtubeUrl = orderedUrls.find(value => extractYoutubeId(value));
  if (youtubeUrl || idValue.match(/^[\w-]{11}$/)) {
    const id = extractYoutubeId(youtubeUrl || idValue);
    return { type: 'youtube', id, url: youtubeUrl || `https://www.youtube.com/watch?v=${id}` };
  }

  const mp4Url = orderedUrls.find(value => isMp4VideoUrl(value));
  return mp4Url ? { type: 'mp4', url: mp4Url } : null;
}

function normalizeLessonCatalogEntry(item) {
  if (!item || typeof item !== 'object') return null;

  const id = String(item.id || item.lessonId || '').trim();
  const title = String(item.title || '').trim();
  if (!id && !title) return null;

  return {
    ...item,
    id: id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: title || 'Untitled lesson',
    duration: item.duration || '0 min',
    order: Number(item.order) || 0,
    isFreePreview: item.isFreePreview === true || item.freePreview === true,
    freePreview: item.isFreePreview === true || item.freePreview === true,
  };
}

function buildModuleLessonList(moduleDoc, lessonDocs = [], lessonCatalog = []) {
  const catalogById = new Map(
    lessonCatalog
      .map(normalizeLessonCatalogEntry)
      .filter(Boolean)
      .map(entry => [entry.id, entry])
  );
  const actualById = new Map(
    lessonDocs.map(item => [String(item.id), item])
  );
  const allLessonIds = Array.from(new Set([
    ...lessonDocs.map(item => String(item.id)),
    ...lessonCatalog.map(entry => String(normalizeLessonCatalogEntry(entry)?.id || ''))
  ])).filter(Boolean);

  return sortByOrder(allLessonIds.map((lessonId) => {
    const actual = actualById.get(lessonId) || {};
    const catalogEntry = catalogById.get(lessonId) || {};
    const lesson = {
      ...catalogEntry,
      ...actual,
      id: lessonId,
      title: actual.title || catalogEntry.title || 'Untitled lesson',
      duration: actual.duration || catalogEntry.duration || '0 min',
      order: Number(actual.order ?? catalogEntry.order ?? 0) || 0,
      moduleId: moduleDoc.id,
      moduleTitle: moduleDoc.title,
      isFreePreview: actual.isFreePreview === true || catalogEntry.isFreePreview === true || actual.freePreview === true || catalogEntry.freePreview === true,
      freePreview: actual.freePreview === true || catalogEntry.freePreview === true || actual.isFreePreview === true || catalogEntry.isFreePreview === true,
    };
    return lesson;
  }));
}

function sortByOrder(items) {
  return items.sort((left, right) => {
    const leftOrder = Number.isFinite(Number(left.order)) ? Number(left.order) : 0;
    const rightOrder = Number.isFinite(Number(right.order)) ? Number(right.order) : 0;
    return leftOrder - rightOrder;
  });
}

const CACHE_TTL_MS = 5 * 60 * 1000;
const COURSE_CACHE_KEY = 'siam_course_catalog_cache_v3';
const LIVE_CACHE_KEY = 'siam_live_archive_cache_v2';
const LEGACY_COURSE_CACHE_KEY = 'siam_course_catalog_cache_v2';
const LEGACY_LIVE_CACHE_KEY = 'siam_live_archive_cache_v1';
const REMOVED_COURSE_IDS = new Set(['python-for-beginners-bangla']);
const REMOVED_COURSE_TITLES = new Set(['python for beginners (bangla)']);

function isRemovedCourse(course) {
  return REMOVED_COURSE_IDS.has(String(course?.id || ''))
    || REMOVED_COURSE_TITLES.has(String(course?.title || '').trim().toLowerCase());
}

const PUBLIC_PREVIEW_VIDEO_OVERRIDES = {
  vpMoUwqh9pGrYovnWVcf: {
    Hk9tiQAiALEtTgpuGCw9: 'https://www.youtube.com/watch?v=kqtD5dpn9C8'
  }
};

export function getDefaultCourses() {
  return [];
}

function readSessionCache(key) {
  try {
    const cached = JSON.parse(sessionStorage.getItem(key) || 'null');
    return cached && Date.now() - cached.timestamp < CACHE_TTL_MS ? cached.value : null;
  } catch {
    return null;
  }
}

function readStaleSessionCache(key) {
  try {
    return JSON.parse(sessionStorage.getItem(key) || 'null')?.value ?? null;
  } catch {
    return null;
  }
}

export function getCachedCourseCatalog() {
  const cached = readStaleSessionCache(COURSE_CACHE_KEY);
  return Array.isArray(cached) ? cached.filter(course => !isRemovedCourse(course)) : [];
}

function writeSessionCache(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), value }));
  } catch {
    // Storage is optional; Firestore remains the source of truth.
  }
}

function clearSessionCache(...keys) {
  try { keys.forEach(key => sessionStorage.removeItem(key)); } catch { }
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
  clearSessionCache(LEGACY_COURSE_CACHE_KEY);
  if (!includeLessons) {
    const cached = readSessionCache(COURSE_CACHE_KEY);
    if (cached) return cached.filter(course => !isRemovedCourse(course));
  }
  const { collection, doc, getDoc, getDocs, limit, query } = await loadFirestore();

  const coursesSnap = await getDocs(query(collection(db, 'courses'), limit(100)));
  if (coursesSnap.empty) {
    if (!includeLessons) writeSessionCache(COURSE_CACHE_KEY, []);
    return [];
  }
  const currentUser = auth?.currentUser || null;
  const isAdminUser = currentUser?.emailVerified === true &&
    currentUser?.email?.toLowerCase() === 'mdsiamahmmedloselovestroy@gmail.com';
  const isVerifiedUser = currentUser?.emailVerified === true;
  let blocked = false;
  if (currentUser && !isAdminUser) {
    try {
      const profileSnap = await getDoc(doc(db, 'users', currentUser.uid));
      blocked = profileSnap.exists() && profileSnap.data().blocked === true;
    } catch (error) {
      blocked = true;
      console.warn('Course access status unavailable:', error.code || error.message);
    }
  }
  let emailAccess = false;
  let courseAccessIds = [];
  let hasCourseIdRestriction = false;
  if (isVerifiedUser && currentUser.email) {
    try {
      const { doc, getDoc } = await loadFirestore();
      const accessSnap = await getDoc(doc(db, 'authorized_users', currentUser.email.toLowerCase()));
      if (accessSnap.exists()) {
        const accessData = accessSnap.data();
        emailAccess = accessData.access === 'granted';
        hasCourseIdRestriction = Object.prototype.hasOwnProperty.call(accessData, 'courseIds');
        courseAccessIds = Array.isArray(accessData.courseIds) ? accessData.courseIds : [];
      }
    } catch (error) {
      console.warn('Email authorization unavailable:', error.code || error.message);
    }
  }
  const courses = await Promise.all(sortByOrder(coursesSnap.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(course => !isRemovedCourse(course))).map(async (course) => {
    const enrollment = currentUser ? await fetchCourseEnrollment(currentUser.uid, course.id).catch(() => null) : null;
    const legacyAccess = isVerifiedUser && emailAccess &&
      (!hasCourseIdRestriction || (Array.isArray(courseAccessIds) && courseAccessIds.includes(course.id)));
    const hasAccess = isAdminUser || (!blocked &&
      (enrollment?.status === 'approved' || (legacyAccess && enrollment?.status !== 'revoked')));
    const accessStatus = isAdminUser || hasAccess ? 'approved' : enrollment?.status || 'not_enrolled';
    const legacyVideoUrl = course.videoUrl || course.youtubeUrl || '';
    delete course.videoUrl;
    delete course.youtubeUrl;
    delete course.youtubeVideoId;
    delete course.videoId;
    if (hasAccess && includeLessons) {
      const privateVideoSnap = await getDoc(doc(db, 'courseVideos', course.id));
      if (privateVideoSnap.exists() && typeof privateVideoSnap.data().videoUrl === 'string') {
        course.videoUrl = privateVideoSnap.data().videoUrl;
      } else if (legacyVideoUrl) {
        course.videoUrl = legacyVideoUrl;
      }
    }
    course.accessStatus = accessStatus;
    course.accessSource = enrollment?.accessSource || (legacyAccess ? 'legacy' : '');
    course.accessDenied = !hasAccess;

    const modulesSnap = await getDocs(query(collection(db, 'courses', course.id, 'modules'), limit(100)));
    const modules = [];
    let allLessons = [];
    let previewLessonIndex = 0;
    let totalLessonCount = 0;

    for (const moduleDoc of sortByOrder(modulesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })))) {
      const moduleData = { ...moduleDoc };
      const catalog = Array.isArray(moduleDoc.lessonCatalog)
        ? sortByOrder(moduleDoc.lessonCatalog.map(normalizeLessonCatalogEntry).filter(Boolean))
        : [];
      const lessonMetadata = catalog.map(lesson => {
        const isFreePreview = previewLessonIndex < 2;
        previewLessonIndex += 1;
        return { ...lesson, isFreePreview, freePreview: isFreePreview, moduleId: moduleDoc.id, moduleTitle: moduleDoc.title };
      });
      totalLessonCount += lessonMetadata.length;
      let lessons = lessonMetadata;
      if (includeLessons && (hasAccess || lessonMetadata.some(lesson => lesson.freePreview) || catalog.length)) {
        try {
          const lessonsSnap = await getDocs(query(collection(db, 'courses', course.id, 'modules', moduleDoc.id, 'lessons'), limit(200)));
          const actualLessons = lessonsSnap.docs.map(snapshot => ({
            id: snapshot.id,
            moduleId: moduleDoc.id,
            moduleTitle: moduleDoc.title,
            ...snapshot.data(),
          }));

          if (actualLessons.length) {
            lessons = buildModuleLessonList(moduleDoc, actualLessons, catalog);
          } else if (hasAccess) {
            lessons = lessonMetadata;
          } else {
            lessons = lessonMetadata.filter(lesson => lesson.freePreview).map(lesson => ({ ...lesson }));
          }
        } catch (error) {
          const previewLessons = lessonMetadata.filter(lesson => lesson.freePreview);
          lessons = await Promise.all(previewLessons.map(async (lesson) => {
            try {
              const previewSnapshot = await getDoc(doc(
                db,
                'courses',
                course.id,
                'modules',
                moduleDoc.id,
                'lessons',
                lesson.id
              ));
              return previewSnapshot.exists()
                ? { ...lesson, ...previewSnapshot.data(), id: lesson.id, moduleId: moduleDoc.id, moduleTitle: moduleDoc.title, isFreePreview: true, freePreview: true }
                : { ...lesson };
            } catch {
              return { ...lesson };
            }
          }));
          console.warn(`Lessons unavailable for course ${course.id}:`, error.code || error.message);
        }
      }
      moduleData.lessons = lessons;
      moduleData.lessonCatalog = lessonMetadata.length ? lessonMetadata : catalog;
      modules.push(moduleData);
      allLessons = allLessons.concat(lessons);
    }

    course.modules = modules;
    course.lessons = allLessons; // flattened, ordered by module then lesson order
    const previewOverrides = PUBLIC_PREVIEW_VIDEO_OVERRIDES[course.id] || {};
    course.lessons = course.lessons.map(lesson => {
      const videoUrl = previewOverrides[lesson.id];
      if (!videoUrl || getLessonVideoSource(lesson)) return lesson;
      return {
        ...lesson,
        videoUrl,
        youtubeUrl: videoUrl,
        youtubeVideoId: extractYoutubeId(videoUrl)
      };
    });
    course.modules = course.modules.map(module => ({
      ...module,
      lessons: (module.lessons || []).map(lesson => {
        const videoUrl = previewOverrides[lesson.id];
        if (!videoUrl || getLessonVideoSource(lesson)) return lesson;
        return { ...lesson, videoUrl, youtubeUrl: videoUrl, youtubeVideoId: extractYoutubeId(videoUrl) };
      })
    }));
    course.totalLessonCount = totalLessonCount;
    return course;
  }));

  if (!includeLessons) writeSessionCache(COURSE_CACHE_KEY, courses);
  return courses;
}

/* ---------- ADMIN WRITES (rejected server-side by firestore.rules unless role=='admin') ---------- */

export async function createCourse(courseData) {
  const videoUrl = String(courseData.videoUrl || '').trim();
  if (videoUrl && !isValidLessonVideoUrl(videoUrl)) {
    throw new Error('A valid YouTube URL or MP4 video URL is required.');
  }
  const { collection, doc, serverTimestamp, writeBatch } = await loadFirestore();
  const courseRef = doc(collection(db, 'courses'));
  const batch = writeBatch(db);
  const publicData = {
    title: courseData.title || 'Untitled course',
    description: courseData.description || '',
    category: courseData.category || 'General',
    language: courseData.language || '',
    thumbnail: courseData.thumbnail || '',
    price: Math.max(0, Number(courseData.price) || 0),
    discountPrice: Math.max(0, Number(courseData.discountPrice) || 0),
    instructor: courseData.instructor || 'CodeWithSiam',
    status: courseData.status || 'published',
    showOnIndex: courseData.showOnIndex === true,
    order: Number(courseData.order) || 0,
    createdAt: serverTimestamp(),
  };
  batch.set(courseRef, publicData);
  if (videoUrl) batch.set(doc(db, 'courseVideos', courseRef.id), { videoUrl });
  await batch.commit();
  clearSessionCache(COURSE_CACHE_KEY);
  return courseRef;
}

export async function updateCourse(courseId, courseData) {
  const privateFields = ['videoUrl', 'youtubeUrl', 'youtubeVideoId', 'videoId'];
  const hasVideoUpdate = privateFields.some(field => Object.prototype.hasOwnProperty.call(courseData, field));
  const videoUrl = String(courseData.videoUrl || courseData.youtubeUrl || '').trim()
    || (/^[\w-]{11}$/.test(String(courseData.youtubeVideoId || courseData.videoId || '').trim())
      ? `https://www.youtube.com/watch?v=${String(courseData.youtubeVideoId || courseData.videoId).trim()}`
      : '');
  if (hasVideoUpdate && videoUrl && !isValidLessonVideoUrl(videoUrl)) {
    throw new Error('A valid YouTube URL or MP4 video URL is required.');
  }
  const { deleteField, doc, writeBatch } = await loadFirestore();
  const batch = writeBatch(db);
  const publicData = { ...courseData };
  privateFields.forEach(field => delete publicData[field]);
  if (Object.keys(publicData).length || hasVideoUpdate) {
    batch.update(doc(db, 'courses', courseId), {
      ...publicData,
      ...(hasVideoUpdate ? Object.fromEntries(privateFields.map(field => [field, deleteField()])) : {}),
    });
  }
  if (hasVideoUpdate) {
    const videoRef = doc(db, 'courseVideos', courseId);
    if (videoUrl) batch.set(videoRef, { videoUrl }, { merge: true });
    else batch.delete(videoRef);
  }
  const result = await batch.commit();
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
  if (!uid || typeof data?.blocked !== 'boolean' || Object.keys(data).some(key => key !== 'blocked')) {
    throw new Error('A valid blocked status is required.');
  }
  const { doc, writeBatch } = await loadFirestore();
  const batch = writeBatch(db);
  batch.update(doc(db, 'users', uid), data);
  batch.set(doc(db, 'courseAccess', uid), { blocked: data.blocked }, { merge: true });
  return batch.commit();
}

export async function grantEmailAccess(email, courseId = '') {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!normalizedEmail) throw new Error('Gmail address is required.');
  const { doc, getDoc, writeBatch, serverTimestamp, arrayUnion } = await loadFirestore();
  const accessRef = doc(db, 'authorized_users', normalizedEmail);
  const existing = await getDoc(accessRef);
  const user = await findUserByEmail(normalizedEmail);
  if (user?.blocked === true) throw new Error('The student is blocked; access was not granted.');
  const accessStateRef = user ? doc(db, 'courseAccess', user.id) : null;
  const accessStateSnap = accessStateRef ? await getDoc(accessStateRef) : null;
  if (accessStateSnap?.data()?.blocked === true) {
    throw new Error('The student is blocked; access was not granted.');
  }
  const enrollmentSnap = user && courseId
    ? await getDoc(doc(db, 'enrollments', enrollmentKey(user.id, courseId)))
    : null;
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
  const batch = writeBatch(db);
  batch.set(accessRef, payload, { merge: true });
  if (user) {
    batch.set(accessStateRef, {
      blocked: false,
      allCourses: !Array.isArray(payload.courseIds) &&
        !(existing.exists() && Array.isArray(existing.data().courseIds)),
    }, { merge: true });
    if (courseId) {
      batch.set(doc(db, 'courseAccess', user.id, 'courses', courseId), {
        status: enrollmentSnap?.data()?.status === 'revoked' ? 'revoked' : 'approved',
      }, { merge: true });
    }
  }
  await batch.commit();
  return true;
}

export async function revokeEmailAccess(email) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!normalizedEmail) throw new Error('Gmail address is required.');
  const { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, where, writeBatch } = await loadFirestore();
  const accessRef = doc(db, 'authorized_users', normalizedEmail);
  const accessSnap = await getDoc(accessRef);
  const user = await findUserByEmail(normalizedEmail);
  const batch = writeBatch(db);
  batch.set(accessRef, {
    email: normalizedEmail,
    access: 'revoked',
    updatedAt: serverTimestamp(),
  }, { merge: true });
  if (user) {
    const [accessStateSnap, enrollmentsSnap] = await Promise.all([
      getDoc(doc(db, 'courseAccess', user.id)),
      getDocs(query(collection(db, 'enrollments'), where('userId', '==', user.id))),
    ]);
    const approvedCourseIds = new Set(enrollmentsSnap.docs
      .filter(item => item.data().status === 'approved')
      .map(item => item.data().courseId));
    const courseIds = Array.isArray(accessSnap.data()?.courseIds)
      ? accessSnap.data().courseIds
      : (await getDocs(collection(db, 'courses'))).docs.map(item => item.id);
    batch.set(doc(db, 'courseAccess', user.id), {
      blocked: user.blocked === true || accessStateSnap.data()?.blocked === true,
      allCourses: false,
    }, { merge: true });
    courseIds.forEach(courseId => {
      batch.set(doc(db, 'courseAccess', user.id, 'courses', courseId), {
        status: approvedCourseIds.has(courseId) ? 'approved' : 'revoked',
      }, { merge: true });
    });
  }
  return batch.commit();
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
    paidAmount: Number(paymentData.paidAmount ?? paymentData.amount) || 0,
    paidCurrency: paymentData.paidCurrency || 'BDT',
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

export async function createFreeCourseEnrollment(uid, courseId) {
  if (!auth?.currentUser || auth.currentUser.uid !== uid) {
    throw new Error('You must be signed in to enroll.');
  }
  const { doc, getDoc, setDoc, serverTimestamp } = await loadFirestore();
  const enrollmentRef = doc(db, 'enrollments', enrollmentKey(uid, courseId));
  const existing = await getDoc(enrollmentRef);
  if (!existing.exists()) {
    await setDoc(enrollmentRef, {
      userId: uid,
      courseId,
      status: 'approved',
      paymentMethod: 'free',
      transactionId: '',
      requestedAt: serverTimestamp(),
      approvedAt: serverTimestamp(),
      approvedBy: 'free-course',
      accessSource: 'free'
    });
  }
  const enrollment = existing.exists() ? existing.data() : { userId: uid, courseId, status: 'approved', accessSource: 'free' };
  if (enrollment.status === 'approved') await ensureCourseStorageEntitlement(uid, courseId);
  return { id: enrollmentRef.id, ...enrollment };
}

async function ensureCourseStorageEntitlement(uid, courseId) {
  const currentUser = auth?.currentUser;
  if (!currentUser || currentUser.uid !== uid || currentUser.emailVerified !== true) {
    throw new Error('A verified signed-in account is required for course access.');
  }
  const { doc, getDoc, setDoc } = await loadFirestore();
  const profileRef = doc(db, 'users', uid);
  const enrollmentRef = doc(db, 'enrollments', enrollmentKey(uid, courseId));
  const accessRef = doc(db, 'courseAccess', uid);
  const courseAccessRef = doc(db, 'courseAccess', uid, 'courses', courseId);
  const [profileSnap, enrollmentSnap, accessSnap, courseAccessSnap] = await Promise.all([
    getDoc(profileRef),
    getDoc(enrollmentRef),
    getDoc(accessRef),
    getDoc(courseAccessRef),
  ]);
  if (profileSnap.data()?.blocked === true) throw new Error('This account is blocked from course access.');
  if (!enrollmentSnap.exists() || enrollmentSnap.data().status !== 'approved') {
    throw new Error('An approved enrollment is required for course access.');
  }
  if (accessSnap.data()?.blocked === true) throw new Error('This account is blocked from course access.');
  if (!accessSnap.exists()) await setDoc(accessRef, { blocked: false });
  if (!courseAccessSnap.exists()) await setDoc(courseAccessRef, { status: 'approved' });
  else if (courseAccessSnap.data().status !== 'approved') {
    throw new Error('Course access needs admin approval.');
  }
}

export async function setCourseEnrollmentAccess({ uid, courseId, status, accessSource = 'manual', paymentMethod = '', transactionId = '' }) {
  if (!uid || !courseId || !['approved', 'revoked'].includes(status)) throw new Error('A student, course, and valid access state are required.');
  const { doc, getDoc, serverTimestamp, writeBatch } = await loadFirestore();
  const profileSnap = await getDoc(doc(db, 'users', uid));
  const batch = writeBatch(db);
  batch.set(doc(db, 'enrollments', enrollmentKey(uid, courseId)), {
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
  batch.set(doc(db, 'courseAccess', uid), { blocked: profileSnap.data()?.blocked === true }, { merge: true });
  batch.set(doc(db, 'courseAccess', uid, 'courses', courseId), { status }, { merge: true });
  return batch.commit();
}

export async function uploadPaymentScreenshot(file, userId, paymentId, onProgress) {
  if (!storage || !file || !userId || !paymentId) throw new Error('Payment screenshot upload is unavailable.');
  if (!file.type.startsWith('image/')) throw new Error('Please choose an image screenshot.');
  const storageModule = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js');
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
  const [usersSnap, paymentsSnap] = await Promise.all([
    getDocs(collection(db, 'users')),
    getDocs(collection(db, 'payments')),
  ]);
  return {
    students: usersSnap.size,
    pendingPayments: paymentsSnap.docs.filter(item => item.data().status === 'pending').length,
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

export async function fetchLiveSettings({ includePrivate = false } = {}) {
  clearSessionCache(LEGACY_LIVE_CACHE_KEY, `${LEGACY_LIVE_CACHE_KEY}_settings`);
  let settings = readSessionCache(`${LIVE_CACHE_KEY}_settings`);
  if (!settings) {
    const { doc, getDoc } = await loadFirestore();
    const snap = await getDoc(doc(db, 'settings', 'liveStream'));
    settings = snap.exists() ? snap.data() : {};
  }
  settings = { ...settings };
  ['url', 'videoUrl', 'youtubeUrl', 'youtubeVideoId', 'videoId'].forEach(field => delete settings[field]);
  writeSessionCache(`${LIVE_CACHE_KEY}_settings`, settings);
  if (!includePrivate) return settings;
  const { doc, getDoc } = await loadFirestore();
  const secretSnap = await getDoc(doc(db, 'liveStreamSecrets', 'current'));
  return { ...settings, url: secretSnap.exists() ? secretSnap.data().url || '' : '' };
}

export async function updateLiveSettings(data) {
  const hasUrl = Object.prototype.hasOwnProperty.call(data, 'url');
  const url = String(data.url || '').trim();
  const videoId = url ? extractYoutubeId(url) : null;
  if (hasUrl && url && !videoId) throw new Error('A valid YouTube Live URL is required.');
  const { deleteField, doc, serverTimestamp, writeBatch } = await loadFirestore();
  const publicData = { ...data };
  ['url', 'videoUrl', 'youtubeUrl', 'youtubeVideoId', 'videoId'].forEach(field => delete publicData[field]);
  const batch = writeBatch(db);
  batch.set(doc(db, 'settings', 'liveStream'), {
    ...publicData,
    url: deleteField(),
    videoUrl: deleteField(),
    youtubeUrl: deleteField(),
    youtubeVideoId: deleteField(),
    videoId: deleteField(),
    updatedAt: serverTimestamp(),
  }, { merge: true });
  if (hasUrl) {
    const secretRef = doc(db, 'liveStreamSecrets', 'current');
    if (videoId) batch.set(secretRef, { url: `https://www.youtube.com/watch?v=${videoId}` }, { merge: true });
    else batch.delete(secretRef);
  }
  const result = await batch.commit();
  clearSessionCache(`${LIVE_CACHE_KEY}_settings`);
  return result;
}

export async function fetchLiveSessions({ includeReplayUrls = false } = {}) {
  if (!isFirebaseConfigured || !db) return [];
  clearSessionCache(LEGACY_LIVE_CACHE_KEY);
  let sessions = readSessionCache(LIVE_CACHE_KEY);
  if (!sessions) {
    const { collection, getDocs, limit, orderBy, query } = await loadFirestore();
    const snapshot = await getDocs(query(collection(db, 'liveSessions'), orderBy('endedAt', 'desc'), limit(50)));
    sessions = snapshot.docs.map(item => {
      const data = item.data();
      delete data.videoUrl;
      delete data.youtubeUrl;
      delete data.youtubeVideoId;
      delete data.videoId;
      return { id: item.id, ...data };
    });
    writeSessionCache(LIVE_CACHE_KEY, sessions);
  }
  sessions = sessions.map(session => {
    const publicSession = { ...session };
    ['url', 'videoUrl', 'youtubeUrl', 'youtubeVideoId', 'videoId'].forEach(field => delete publicSession[field]);
    return publicSession;
  });
  writeSessionCache(LIVE_CACHE_KEY, sessions);
  if (!includeReplayUrls) return sessions;
  const { doc, getDoc } = await loadFirestore();
  return Promise.all(sessions.map(async session => {
    const secretSnap = await getDoc(doc(db, 'liveSessionVideos', session.id));
    return secretSnap.exists() ? { ...session, ...secretSnap.data() } : session;
  }));
}

export async function createLiveSession(sessionData) {
  const { collection, doc, serverTimestamp, writeBatch } = await loadFirestore();
  const videoId = extractYoutubeId(sessionData.videoUrl || '');
  if (!videoId) throw new Error('A valid YouTube replay URL is required.');
  if (!String(sessionData.title || '').trim()) throw new Error('Live topic is required.');
  const sessionRef = doc(collection(db, 'liveSessions'));
  const batch = writeBatch(db);
  batch.set(sessionRef, {
    title: String(sessionData.title).trim(),
    category: String(sessionData.category || 'Live learning').trim(),
    thumbnail: String(sessionData.thumbnail || '').trim(),
    description: String(sessionData.description || '').trim(),
    endedAt: serverTimestamp(),
  });
  batch.set(doc(db, 'liveSessionVideos', sessionRef.id), {
    url: `https://www.youtube.com/watch?v=${videoId}`,
    youtubeVideoId: videoId,
  });
  await batch.commit();
  clearSessionCache(LIVE_CACHE_KEY);
  clearSessionCache(`${LIVE_CACHE_KEY}_settings`);
  return sessionRef;
}

export async function deleteLiveSession(sessionId) {
  const { doc, writeBatch } = await loadFirestore();
  if (!sessionId) throw new Error('Replay id is required.');
  const batch = writeBatch(db);
  batch.delete(doc(db, 'liveSessions', sessionId));
  batch.delete(doc(db, 'liveSessionVideos', sessionId));
  const result = await batch.commit();
  clearSessionCache(LIVE_CACHE_KEY);
  return result;
}

export async function deleteCourse(courseId) {
  const { doc, deleteDoc, collection, getDocs, writeBatch } = await loadFirestore();
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
  const batch = writeBatch(db);
  batch.delete(doc(db, 'courses', courseId));
  batch.delete(doc(db, 'courseVideos', courseId));
  const result = await batch.commit();
  clearSessionCache(COURSE_CACHE_KEY);
  return result;
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
  const moduleRef = doc(db, 'courses', courseId, 'modules', moduleId);
  const moduleSnap = await getDoc(moduleRef);
  const existingCatalog = Array.isArray(moduleSnap.data()?.lessonCatalog)
    ? moduleSnap.data().lessonCatalog.map(normalizeLessonCatalogEntry).filter(Boolean)
    : [];
  const lessonsSnap = await getDocs(collection(db, 'courses', courseId, 'modules', moduleId, 'lessons'));
  const sortedLessons = sortByOrder(lessonsSnap.docs.map(item => {
    const lesson = item.data();
    const hasExplicitPreview = Object.prototype.hasOwnProperty.call(lesson, 'isFreePreview') || Object.prototype.hasOwnProperty.call(lesson, 'freePreview');
    return { id: item.id, title: lesson.title || 'Video', duration: lesson.duration || '0 min', order: Number(lesson.order) || 0, hasExplicitPreview, isFreePreview: lesson.isFreePreview === true || lesson.freePreview === true, freePreview: lesson.isFreePreview === true || lesson.freePreview === true };
  }));
  const catalog = sortedLessons.length
    ? sortedLessons.map((lesson, index) => {
      const isFreePreview = lesson.hasExplicitPreview ? lesson.isFreePreview : index < 2;
      return { id: lesson.id, title: lesson.title, duration: lesson.duration, order: lesson.order, isFreePreview, freePreview: isFreePreview };
    })
    : existingCatalog;

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

  const storageModule = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js');
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
  try { sessionStorage.removeItem(`siam_progress_cache_${uid}`); } catch { }
  return setDoc(
    doc(db, 'progress', uid, 'courses', courseId),
    { ...data, lastUpdated: serverTimestamp() },
    { merge: true }
  );
}
