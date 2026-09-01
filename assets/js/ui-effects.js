/* =========================================================
   UI EFFECTS MODULE — Visual effects, animations, and interactions
   =========================================================
   Contains: particle background, header state, scroll reveal,
   typed text, tilt cards, parallax, and mobile menu.
   ========================================================= */

/* ---------- Ambient background dust (quiet, no connecting lines) ---------- */
export function initParticles(){
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

/* ---------- Section activation and smooth nav ---------- */
export function activateSection(sectionId){
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

/* ---------- Header scroll state + smooth nav ---------- */
export function initHeader(){
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

/* ---------- Mobile menu toggle ---------- */
export function initMobileMenu(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  btn?.addEventListener('click', () => nav?.classList.toggle('open'));
}

/* ---------- Typed hero text effect ---------- */
export function initTypedText(){
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

/* ---------- Scroll reveal animation ---------- */
export function initRevealOnScroll(){
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

/* ---------- 3D tilt on cards with mouse move ---------- */
export function initTiltCards(){
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
export function initHero3dParallax(){
  document.addEventListener('mousemove', (e)=>{
    const stage = document.getElementById('hero3d');
    if(!stage) return;
    const x = (e.clientX/window.innerWidth - 0.5) * 14;
    const y = (e.clientY/window.innerHeight - 0.5) * 14;
    stage.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
}

/* ---------- Skill bars (static, no animation needed) ---------- */
export function initSkillBars(){
  // Skill tags are static; no animation needed
  // See .skill-tag in style.css for styling
}
