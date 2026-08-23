import { fetchAllCourses, saveUserCourseProgress, extractYoutubeId, isMp4VideoUrl } from './courses-db.js';
import { observeAuthState, signInWithGoogle } from './auth.js';

const progressKey = 'siam_portfolio_course_progress';
const params = new URLSearchParams(location.search);
const courseId = params.get('course');
let user = null;
let course = null;
let lessons = [];
let selectedLessonId = params.get('lesson');
let progress = {};

const $ = id => document.getElementById(id);
const getLocalProgress = () => { try { return JSON.parse(localStorage.getItem(progressKey) || '{}'); } catch { return {}; } };
const completed = () => new Set(progress[course?.id]?.completedLessons || []);
const percent = () => lessons.length ? Math.round((completed().size / lessons.length) * 100) : 0;
const route = lessonId => `course.html?course=${encodeURIComponent(course.id)}${lessonId ? `&lesson=${encodeURIComponent(lessonId)}` : ''}`;
function go(lessonId = '') { history.pushState({}, '', route(lessonId)); selectedLessonId = lessonId || null; render(); }
function orderedLessons(data) {
  const fullLessons = new Map((data.lessons || []).map(lesson => [lesson.id, lesson]));
  return (data.modules || []).flatMap(module => (module.lessons || []).map(lesson => ({
    ...(fullLessons.get(lesson.id) || {}),
    ...lesson,
    moduleId: module.id,
    moduleTitle: module.title
  })));
}
function currentLesson() { return lessons.find(lesson => lesson.id === selectedLessonId) || lessons[0] || null; }
function youtubeId(lesson) { return lesson?.youtubeVideoId || extractYoutubeId(lesson?.youtubeUrl || lesson?.videoUrl || ''); }
function setupCustomVideoPlayer() {
  const wrap = $('lessonMp4').closest('.lesson-video-wrap');
  const video = $('lessonMp4');
  if (!wrap || !video || wrap.querySelector('.custom-video-controls')) return;
  wrap.classList.add('is-custom-player');
  video.removeAttribute('controls');
  const controls = document.createElement('div');
  controls.className = 'custom-video-controls';
  controls.innerHTML = '<input class="custom-video-progress" type="range" min="0" max="100" value="0" aria-label="Video progress"><div class="custom-video-toolbar"><button type="button" data-video-action="play" aria-label="Play or pause">Play</button><button type="button" data-video-action="mute" aria-label="Mute or unmute">Mute</button><span class="custom-video-time">0:00 / 0:00</span><button type="button" data-video-action="fullscreen" aria-label="Fullscreen">Fullscreen</button></div>';
  wrap.appendChild(controls);
  const progressInput = controls.querySelector('.custom-video-progress');
  const playButton = controls.querySelector('[data-video-action="play"]');
  const muteButton = controls.querySelector('[data-video-action="mute"]');
  const timeLabel = controls.querySelector('.custom-video-time');
  const formatTime = value => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  const updateTime = () => {
    progressInput.value = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    timeLabel.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration || 0)}`;
  };
  playButton.addEventListener('click', () => video.paused ? video.play() : video.pause());
  muteButton.addEventListener('click', () => { video.muted = !video.muted; muteButton.textContent = video.muted ? 'Unmute' : 'Mute'; });
  controls.querySelector('[data-video-action="fullscreen"]').addEventListener('click', () => wrap.requestFullscreen?.());
  progressInput.addEventListener('input', () => { if (video.duration) video.currentTime = (progressInput.value / 100) * video.duration; });
  video.addEventListener('play', () => { playButton.textContent = 'Pause'; });
  video.addEventListener('pause', () => { playButton.textContent = 'Play'; });
  video.addEventListener('timeupdate', updateTime);
  video.addEventListener('loadedmetadata', updateTime);
  video.addEventListener('loadedmetadata', () => {
    video.muted = false;
    if (video.volume === 0) video.volume = 1;
  });
}
function setProgress() {
  const value = percent();
  ['overviewProgressBar', 'sidebarProgressBar'].forEach(id => { if ($(id)) $(id).style.width = `${value}%`; });
  if ($('overviewProgressText')) $('overviewProgressText').textContent = `${value}% COMPLETE`;
  if ($('sidebarProgressText')) $('sidebarProgressText').textContent = `${value}% COMPLETE`;
  if ($('sidebarProgressCount')) $('sidebarProgressCount').textContent = `${completed().size} / ${lessons.length} lessons`;
}
function playlist(target, compact = false) {
  const groups = new Map();
  lessons.forEach(lesson => { if (!groups.has(lesson.moduleId)) groups.set(lesson.moduleId, { title: lesson.moduleTitle, lessons: [] }); groups.get(lesson.moduleId).lessons.push(lesson); });
  target.innerHTML = [...groups.values()].map(group => `<section class="module-block"><div class="module-title">${group.title || 'Course Content'}</div>${group.lessons.map((lesson, index) => { const isComplete = completed().has(lesson.id); const isCurrent = lesson.id === selectedLessonId; return `<button class="lesson-row ${isCurrent ? 'current' : ''} ${isComplete ? 'complete' : ''}" data-lesson-id="${lesson.id}" type="button"><span class="lesson-state">${isComplete ? '✓' : isCurrent ? '▶' : '○'}</span><span class="lesson-row-title">${index + 1}. ${lesson.title}</span><span class="lesson-row-meta"><span>${lesson.duration || '0 min'}</span><span class="lesson-row-action">${isComplete ? 'Review' : 'Start'}</span></span></button>`; }).join('')}</section>`).join('');
  target.querySelectorAll('[data-lesson-id]').forEach(button => button.addEventListener('click', () => go(button.dataset.lessonId)));
}
function renderOverview() {
  const lesson = currentLesson();
  $('courseTitle').textContent = course.title;
  $('courseDescription').textContent = course.description || '';
  $('courseInstructor').textContent = `Instructor: ${course.instructor || 'CodeWithSiam'}`;
  $('courseLessonCount').textContent = `${lessons.length} lessons`;
  $('courseDuration').textContent = `${lessons.reduce((sum, item) => sum + parseInt(String(item.duration).match(/\d+/)?.[0] || '0', 10), 0)} min`;
  $('courseThumbnail').src = course.thumbnail || '';
  $('courseThumbnail').alt = `${course.title} thumbnail`;
  $('overviewLessonTitle').textContent = lesson?.title || 'No lessons published yet';
  $('overviewStartBtn').textContent = lesson && completed().has(lesson.id) ? 'Review Lesson' : 'Start Lesson';
  $('overviewStartBtn').disabled = !lesson;
  $('overviewStartBtn').onclick = () => lesson && go(lesson.id);
  $('playlistCount').textContent = `${lessons.length} lessons`;
  playlist($('overviewPlaylist'));
  setProgress();
}
function renderPlayer() {
  const lesson = currentLesson();
  if (!lesson) { $('lessonPlayer').classList.add('hidden'); return; }
  $('lessonPlayer').classList.remove('hidden');
  $('lessonTitle').textContent = lesson.title;
  $('lessonDescription').textContent = lesson.description || '';
  $('lessonDuration').textContent = lesson.duration || '0 min';
  const youtubeLink = $('lessonYoutubeLink');
  const youtubeUrl = lesson.youtubeUrl || (youtubeId(lesson) ? `https://www.youtube.com/watch?v=${youtubeId(lesson)}` : '');
  youtubeLink.classList.toggle('hidden', lesson.showYoutubeLink !== true || !youtubeUrl);
  youtubeLink.href = youtubeUrl;
  const id = youtubeId(lesson);
  const isMp4 = lesson.videoType === 'file' || isMp4VideoUrl(lesson.videoUrl);
  setupCustomVideoPlayer();
  $('lessonVideo').classList.toggle('hidden', isMp4);
  $('lessonMp4').classList.toggle('hidden', !isMp4);
  $('lessonVideo').src = !isMp4 && id ? `https://www.youtube.com/embed/${id}?rel=0&playsinline=1` : '';
  $('lessonMp4').src = isMp4 ? lesson.videoUrl : '';
  $('previousLesson').disabled = lessons.indexOf(lesson) === 0;
  $('nextLesson').disabled = lessons.indexOf(lesson) === lessons.length - 1;
  $('previousLesson').onclick = () => go(lessons[lessons.indexOf(lesson) - 1]?.id);
  $('nextLesson').onclick = () => go(lessons[lessons.indexOf(lesson) + 1]?.id);
  $('completeLesson').textContent = completed().has(lesson.id) ? 'Completed' : 'Complete and Continue';
  $('completeLesson').onclick = complete;
  $('sidebarCourseTitle').textContent = course.title;
  playlist($('lessonPlaylist'), true);
  setProgress();
}
function render() {
  if (!course) return;
  const hasLessonRoute = Boolean(selectedLessonId);
  $('courseOverview').classList.toggle('hidden', hasLessonRoute);
  $('lessonPlayer').classList.toggle('hidden', !hasLessonRoute);
  if (hasLessonRoute) renderPlayer(); else renderOverview();
  document.title = `${course.title} | CodeWithSiam`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = course.description || `Learn ${course.title} with CodeWithSiam video lessons.`;
}
async function complete() {
  const lesson = currentLesson();
  if (!lesson || completed().has(lesson.id)) return;
  const updated = { ...(progress[course.id] || {}), completedLessons: [...completed(), lesson.id], lastLessonId: lesson.id, completion: Math.round(((completed().size + 1) / lessons.length) * 100) };
  progress[course.id] = updated;
  localStorage.setItem(progressKey, JSON.stringify(progress));
  await saveUserCourseProgress(user.uid, course.id, updated).catch(error => console.error('Progress sync failed:', error));
  const next = lessons[lessons.indexOf(lesson) + 1];
  if (next) go(next.id); else render();
}
async function load() {
  if (!user) {
    course = null;
    lessons = [];
    $('lessonLoading')?.classList.add('hidden');
    $('learningLoading').classList.add('hidden');
    $('lessonPlayer').classList.add('hidden');
    $('courseOverview').classList.add('hidden');
    $('learningLogin').classList.remove('hidden');
    return;
  }
  $('learningLogin').classList.add('hidden');
  const all = await fetchAllCourses();
  course = all.find(item => item.id === courseId);
  if (!course) { $('learningLoading').textContent = 'Course not found.'; return; }
  if (course.accessDenied) {
    $('learningLoading').classList.add('hidden');
    $('learningLogin').querySelector('h1').textContent = 'Course access required';
    $('learningLogin').querySelector('p').textContent = 'This course is paid or your account is blocked. Contact the admin after payment to activate access.';
    $('learningGoogleBtn').classList.add('hidden');
    $('learningLogin').classList.remove('hidden');
    return;
  }
  progress = getLocalProgress();
  const cloud = (await import('./courses-db.js')).fetchUserProgress;
  const cloudProgress = await cloud(user.uid).catch(() => ({}));
  progress = { ...progress, ...cloudProgress };
  localStorage.setItem(progressKey, JSON.stringify(progress));
  lessons = orderedLessons(course);
  if (!selectedLessonId) selectedLessonId = progress[course.id]?.lastLessonId || lessons.find(lesson => !completed().has(lesson.id))?.id || lessons[0]?.id;
  $('learningLoading').classList.add('hidden');
  render();
}
$('learningGoogleBtn').onclick = async () => { $('learningGoogleBtn').disabled = true; $('learningAuthStatus').textContent = 'Signing in...'; try { await signInWithGoogle(); } catch (error) { $('learningAuthStatus').textContent = error.message; $('learningGoogleBtn').disabled = false; } };
window.addEventListener('popstate', () => { const nextParams = new URLSearchParams(location.search); selectedLessonId = nextParams.get('lesson'); render(); });
observeAuthState(nextUser => { user = nextUser; load().catch(error => { $('learningLoading').textContent = 'Unable to load this course.'; console.error(error); }); });
