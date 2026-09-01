/* =========================================================
   ANIMATIONS MODULE — Counter and progress animations
   =========================================================
   Handles stat counter animations and other timed visual effects.
   ========================================================= */

/* ---------- Animated stat counters ---------- */
export function initStatCounters(){
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

export function animateCount(el){
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
