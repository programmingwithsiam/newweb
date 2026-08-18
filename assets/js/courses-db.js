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

/* ---------- YouTube helpers ---------- */
export function extractYoutubeId(url) {
  if (!url) return null;
  const m = String(url).match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return m ? m[1] : null;
}

export function getYoutubeEmbedUrl(url) {
  const id = extractYoutubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
}

export function isValidYoutubeUrl(url) {
  return !!extractYoutubeId(url);
}

/* ---------- READ: full course tree (public, no auth required) ---------- */
export async function fetchAllCourses() {
  if (!isFirebaseConfigured || !db) return [];
  const { collection, getDocs, query, orderBy } = await loadFirestore();

  const coursesSnap = await getDocs(query(collection(db, 'courses'), orderBy('order', 'asc')));
  const courses = [];

  for (const courseDoc of coursesSnap.docs) {
    const course = { id: courseDoc.id, ...courseDoc.data() };
    // Do not expose course-level videoUrl to unauthenticated visitors.
    const currentUser = auth?.currentUser || null;
    if (!currentUser) {
      delete course.videoUrl;
    }

    const modulesSnap = await getDocs(
      query(collection(db, 'courses', courseDoc.id, 'modules'), orderBy('order', 'asc'))
    );
    const modules = [];
    let allLessons = [];

      for (const moduleDoc of modulesSnap.docs) {
      const moduleData = { id: moduleDoc.id, ...moduleDoc.data() };
      // Lessons contain protected video URLs. Only fetch lesson documents
      // when a user is signed in. For anonymous visitors, return an empty
      // lessons array so UI shows sign-in gating without exposing URLs.
      let lessons = [];
      if (currentUser) {
        const lessonsSnap = await getDocs(
          query(
            collection(db, 'courses', courseDoc.id, 'modules', moduleDoc.id, 'lessons'),
            orderBy('order', 'asc')
          )
        );
        lessons = lessonsSnap.docs.map((d) => ({ id: d.id, moduleId: moduleDoc.id, ...d.data() }));
        moduleData.lessons = lessons.map((l) => ({ id: l.id, title: l.title, duration: l.duration || '0 min' }));
      } else {
        moduleData.lessons = [];
      }
      modules.push(moduleData);
      allLessons = allLessons.concat(lessons);
    }

    course.modules = modules;
    course.lessons = allLessons; // flattened, ordered by module then lesson order
    courses.push(course);
  }

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
    instructor: courseData.instructor || 'CodeWithSiam',
    status: courseData.status || 'published',
    order: Number(courseData.order) || 0,
    createdAt: serverTimestamp(),
  });
}

export async function updateCourse(courseId, courseData) {
  const { doc, updateDoc } = await loadFirestore();
  return updateDoc(doc(db, 'courses', courseId), courseData);
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
  if (lessonData.videoUrl && !isValidYoutubeUrl(lessonData.videoUrl)) {
    throw new Error('That does not look like a valid YouTube URL.');
  }
  const { collection, addDoc } = await loadFirestore();
  return addDoc(collection(db, 'courses', courseId, 'modules', moduleId, 'lessons'), {
    title: lessonData.title || 'New lesson',
    description: lessonData.description || '',
    duration: lessonData.duration || '0 min',
    videoUrl: lessonData.videoUrl || '',
    resources: Array.isArray(lessonData.resources) ? lessonData.resources : [],
    order: Number(lessonData.order) || 0,
  });
}

export async function updateLesson(courseId, moduleId, lessonId, lessonData) {
  if (lessonData.videoUrl && !isValidYoutubeUrl(lessonData.videoUrl)) {
    throw new Error('That does not look like a valid YouTube URL.');
  }
  const { doc, updateDoc } = await loadFirestore();
  return updateDoc(doc(db, 'courses', courseId, 'modules', moduleId, 'lessons', lessonId), lessonData);
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
