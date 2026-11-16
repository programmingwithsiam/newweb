var communityWatermark = document.createElement('div');
communityWatermark.className = 'community-watermark';
communityWatermark.setAttribute('aria-hidden', 'true');
document.body.append(communityWatermark);

/* ===== Left sidebar ===== */
(function () {
  function ic(d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>' }
  var I = {
    home: ic('<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/>'),
    reels: ic('<rect width="18" height="18" x="3" y="3" rx="3"/><path d="m10 8 6 4-6 4z"/>'),
    msg: ic('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>')
  };
  function item(k, icon, label, on, extra) { return '<button data-ls="' + k + '"' + (on ? ' class="on" aria-current="page"' : '') + '><span class="li">' + icon + '</span><span class="lt">' + label + '</span>' + (extra || '') + '</button>' }
  function paintL() {
    var el = document.getElementById('lside'); if (!el) return;
    var b = document.getElementById('cwmBadge'), n = b && !b.hidden ? b.textContent : '';
    el.innerHTML =
      '<button data-ls="profile"' + (tab === 'profile' && pu === me ? ' class="on"' : '') + '><span class="li">' + av(me) + '</span><span class="lt">' + esc(me) + '</span></button>'
      + item('home', I.home, 'Home', tab === 'home')
      + item('reels', I.reels, 'Reels', tab === 'reels')
      + item('msg', I.msg, 'Messages', false, n ? '<span class="lbd">' + esc(n) + '</span>' : '');
  }
  var _r = render;
  render = function () { _r(); paintL() };
  document.addEventListener('click', function (e) {
    var d = e.target.closest('[data-ls]'); if (!d) return;
    var k = d.getAttribute('data-ls');
    if (k === 'msg') { document.getElementById('cwmOpen').click(); return }
    tab = k; if (k === 'profile') { pu = me; ptab = 'posts' }
    window.scrollTo(0, 0); render()
  });
  var bd = document.getElementById('cwmBadge');
  if (bd && window.MutationObserver) new MutationObserver(paintL).observe(bd, { attributes: true, childList: true, characterData: true, subtree: true });
  paintL();
})();
;
/* ===== Search ===== */
(function () {
  var q = document.getElementById('sq'), box = document.getElementById('sres');
  function hi(t, s) { t = String(t); var i = t.toLowerCase().indexOf(s); if (i < 0 || !s) return esc(t); return esc(t.slice(0, i)) + '<mark>' + esc(t.slice(i, i + s.length)) + '</mark>' + esc(t.slice(i + s.length)) }
  function cut(t, s) { t = String(t); var i = t.toLowerCase().indexOf(s), a = Math.max(0, i - 24); return (a ? '…' : '') + t.slice(a, a + 70) + (t.length > a + 70 ? '…' : '') }
  function run() {
    var s = q.value.trim().toLowerCase();
    if (!s) { box.classList.remove('on'); box.innerHTML = ''; return }
    var ppl = Object.keys(U).filter(function (n) { return n.toLowerCase().indexOf(s) > -1 || String(U[n].bio || '').toLowerCase().indexOf(s) > -1 }).slice(0, 5);
    var ps = posts.filter(function (p) { return String(p.txt || '').toLowerCase().indexOf(s) > -1 }).slice(0, 5);
    var rs = reels.filter(function (r) { return String(r.cap || '').toLowerCase().indexOf(s) > -1 }).slice(0, 3);
    var h = '';
    if (ppl.length) h += '<h4>People</h4>' + ppl.map(function (n) { return '<button data-u="' + esc(n) + '">' + av(n) + '<span class="sx"><b>' + hi(n, s) + (n === me ? ' (You)' : '') + '</b><span>' + esc(U[n].bio || '') + '</span></span></button>' }).join('');
    if (ps.length) h += '<h4>Posts</h4>' + ps.map(function (p) { return '<button data-sp="' + p.id + '">' + av(p.by) + '<span class="sx"><b>' + esc(p.by) + '</b><span>' + hi(cut(p.txt, s), s) + '</span></span></button>' }).join('');
    if (rs.length) h += '<h4>Reels</h4>' + rs.map(function (r) { return '<button data-sr2="' + r.id + '">' + av(r.by) + '<span class="sx"><b>' + esc(r.by) + '</b><span>' + hi(r.cap, s) + '</span></span></button>' }).join('');
    if (!h) h = '<div class="se">No results for “' + esc(q.value.trim()) + '”</div>';
    box.innerHTML = h; box.classList.add('on')
  }
  function shut() { box.classList.remove('on') }
  q.addEventListener('input', run);
  q.addEventListener('focus', run);
  q.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { shut(); q.blur() }
    else if (e.key === 'Enter') { var f = box.querySelector('button'); if (f) f.click() }
    else if (e.key === 'ArrowDown') { var b = box.querySelector('button'); if (b) { e.preventDefault(); b.focus() } }
  });
  box.addEventListener('keydown', function (e) {
    var bs = [].slice.call(box.querySelectorAll('button')), i = bs.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && i < bs.length - 1) { e.preventDefault(); bs[i + 1].focus() }
    else if (e.key === 'ArrowUp') { e.preventDefault(); (i > 0 ? bs[i - 1] : q).focus() }
    else if (e.key === 'Escape') { shut(); q.focus() }
  });
  document.addEventListener('click', function (e) {
    var d;
    if (e.target.closest('.sbox') && !e.target.closest('[data-sp],[data-sr2],[data-u]')) return;
    if (d = e.target.closest('[data-sp]')) {
      var id = d.getAttribute('data-sp'), i = -1; shut(); q.value = '';
      posts.forEach(function (p, k) { if (p.id == id) i = k });
      tab = 'home'; window.scrollTo(0, 0); render();
      var el = document.querySelectorAll('#main .post')[i];
      if (el) { el.scrollIntoView({ block: 'center' }); el.classList.add('shl'); setTimeout(function () { el.classList.remove('shl') }, 1800) }
      return
    }
    if (d = e.target.closest('[data-sr2]')) { shut(); q.value = ''; tab = 'reels'; window.scrollTo(0, 0); render(); return }
    if (e.target.closest('[data-u]') && e.target.closest('.sbox')) { shut(); q.value = ''; return }
    shut()
  });
})();
;
(function () { var q = document.getElementById('sq'), m = matchMedia('(max-width:800px)'); function f() { q.placeholder = m.matches ? 'Search' : 'Search CodeWithSiam' } f(); (m.addEventListener ? m.addEventListener('change', f) : m.addListener(f)) })();
;
(function () {
  var r = document.getElementById('cwmRoot'), v = window.visualViewport; if (!v) return;
  function fit() {
    if (!r.classList.contains('on') || !matchMedia('(max-width:800px)').matches) { r.style.height = ''; r.style.top = ''; r.style.bottom = ''; return }
    r.style.bottom = 'auto'; r.style.top = v.offsetTop + 'px'; r.style.height = v.height + 'px'; var m = document.getElementById('cwmMsgs'); if (m && document.activeElement && document.activeElement.id === 'cwmTa') m.scrollTop = m.scrollHeight
  }
  v.addEventListener('resize', fit); v.addEventListener('scroll', fit);
  new MutationObserver(fit).observe(r, { attributes: true, attributeFilter: ['class'] });
})();
;
(function () {
  var root = document.getElementById('cwmRoot'), E = ['😀', '😁', '😂', '🤣', '😊', '😍', '🥰', '😘', '😎', '🤓', '🤔', '😅', '😭', '😢', '😡', '😮', '😴', '🥳', '🙌', '👏', '👍', '👎', '🙏', '💪', '👋', '🤝', '❤️', '🧡', '💛', '💚', '💙', '💜', '🔥', '✨', '🎉', '💯', '✅', '❌', '⭐', '🚀', '💻', '🐍', '📚', '☕', '🍕', '🎯', '📷', '😉'];
  function emo() { return document.getElementById('cwmEmo') }
  function ta() { return document.getElementById('cwmTa') }
  function fill() { var e = emo(); if (e && !e.firstChild) e.innerHTML = E.map(function (x) { return '<button type="button" data-e="' + x + '" aria-label="Insert ' + x + '">' + x + '</button>' }).join('') }
  function setOpen(o) { var e = emo(), b = root.querySelector('[data-ma="emoji"]'); if (!e) return; fill(); e.hidden = !o; if (b) b.setAttribute('aria-expanded', o) }
  function sync() { var t = ta(), b = document.getElementById('cwmSb'), p = document.getElementById('cwmPend'); if (!t || !b) return; b.classList.toggle('idle', !t.value.trim() && !(p && p.innerHTML.trim())) }
  root.addEventListener('click', function (e) {
    var d;
    if (d = e.target.closest('[data-ma="emoji"]')) { var e2 = emo(); setOpen(e2.hidden) }
    else if (d = e.target.closest('[data-e]')) { var t = ta(), i = t.selectionStart == null ? t.value.length : t.selectionStart, j = t.selectionEnd == null ? i : t.selectionEnd; t.value = t.value.slice(0, i) + d.getAttribute('data-e') + t.value.slice(j); var c = i + d.getAttribute('data-e').length; t.setSelectionRange(c, c); t.style.height = '40px'; t.style.height = Math.min(t.scrollHeight, 120) + 'px' }
    else if (e.target.closest('[data-ma="send"],[data-mc]')) setOpen(false);
    setTimeout(sync, 0)
  }, true);
  root.addEventListener('input', function () { setTimeout(sync, 0) });
  root.addEventListener('keydown', function (e) { if (e.key === 'Escape' && emo() && !emo().hidden) { setOpen(false) } setTimeout(sync, 0) });
  sync();
})();
;
/* ===== Extra features: Trending, People to follow, Contacts, Saved posts ===== */
(function () {
  var st = document.createElement('style'); st.textContent = '.xr{display:flex;align-items:center;gap:10px;width:100%;background:none;border:0;border-radius:8px;padding:6px;text-align:left;font-weight:600;font-size:14px;color:var(--text)}.xr:hover{background:var(--s2)}.xr .av{width:32px;height:32px;font-size:13px}.xr .xs{flex:1;min-width:0}.xr small{display:block;font-weight:400;color:var(--muted);font-size:12px}.xd{width:10px;height:10px;border-radius:50%;background:#31a24c;flex:none}.xr .btn{padding:5px 12px;font-size:13px}aside .card h3{margin-bottom:6px}'; document.head.appendChild(st);
  var x = document.createElement('div'); x.id = 'xtra'; document.querySelector('aside').appendChild(x);
  ['Mim', 'Sabbir', 'Ayesha', 'Hasan'].forEach(function (n, i) { if (!U[n]) U[n] = { bio: ['Learning Python from scratch.', 'Web and backend developer.', 'UI/UX designer who codes.', 'Competitive programmer.'][i], f: 20 + i * 15, g: 30 } });
  function cnt(k) { k = k.toLowerCase(); return posts.concat(reels).filter(function (p) { return String(p.txt || p.cap || '').toLowerCase().indexOf(k) > -1 }).length }
  function paintX() {
    var tg = ['Python', 'OpenCV', 'Pandas', 'CNN', 'ML'], on = ['Siam', 'Rafi', 'Tanvir', 'Sabbir'].filter(function (n) { return n !== me }), fl = ['Mim', 'Sabbir', 'Ayesha', 'Hasan'].filter(function (n) { return n !== me });
    x.innerHTML = '<div class="card"><h3>Trending</h3>' + tg.map(function (t) { var c = cnt(t); return '<button class="xr" data-tag="' + t + '"><span class="xs">#' + t + '<small>' + c + ' post' + (c === 1 ? '' : 's') + '</small></span></button>' }).join('') + '</div>'
      + '<div class="card"><h3>People to follow</h3>' + fl.map(function (n) { return '<div class="xr" data-u="' + esc(n) + '">' + av(n) + '<span class="xs">' + esc(n) + '<small>' + esc(U[n].bio) + '</small></span><button class="btn ' + (fol[n] ? 'g' : '') + '" data-fo="' + esc(n) + '">' + (fol[n] ? 'Following' : 'Follow') + '</button></div>' }).join('') + '</div>'
      + '<div class="card"><h3>Contacts</h3>' + on.map(function (n) { return '<button class="xr" data-msg="' + esc(n) + '">' + av(n) + '<span class="xs">' + esc(n) + '<small>Active now</small></span><i class="xd"></i></button>' }).join('') + '</div>'
  }
  document.addEventListener('click', function (e) { var d = e.target.closest('[data-tag]'); if (!d) return; var q = document.getElementById('sq'); q.value = d.getAttribute('data-tag'); q.focus(); q.dispatchEvent(new Event('input')) });
  var _r = render;
  render = function () {
    _r();
    if (tab === 'saved') { var s = posts.filter(function (p) { return p.saved }); $('main').innerHTML = '<h2 style="margin-bottom:12px">Saved posts</h2>' + (s.length ? s.map(postH).join('') : '<div class="card" style="padding:24px;text-align:center;color:var(--muted)">Nothing saved yet. Tap the ⋯ menu on a post and choose Save post.</div>') }
    var ls = document.getElementById('lside'); if (ls) ls.insertAdjacentHTML('beforeend', '<button data-ls="saved"' + (tab === 'saved' ? ' class="on"' : '') + '><span class="li"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg></span><span class="lt">Saved</span></button><button data-set="1"><span class="li" aria-hidden="true" style="font-size:18px">⚙</span><span class="lt">Settings</span></button>');
    paintX()
  };
  render();
})();
;
/* ===== Settings panel (theme moved here) ===== */
(function () {
  var st = document.createElement('style'); st.textContent = '@media(max-width:800px){#theme .stx{display:none}}.setr{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:12px 0;border-top:1px solid var(--line)}.setr small{display:block;color:var(--muted);font-size:13px}.setr .seg{display:flex;gap:6px}'; document.head.appendChild(st);
  function cur() { var t = document.documentElement.getAttribute('data-theme'); return t === 'light' || t === 'dark' ? t : 'system' }
  function open() { var c = cur(); $('modal').innerHTML = '<div class="cphead"><h2>Settings</h2><button class="x2" data-cpx aria-label="Close">✕</button></div><div class="setr" style="border-top:0"><div><b>Theme</b><small>Choose how the app looks</small></div><div class="seg" role="group" aria-label="Theme">' + [['system', 'System'], ['light', 'Light'], ['dark', 'Dark']].map(function (o) { return '<button class="btn ' + (c === o[0] ? '' : 'g') + '" data-th="' + o[0] + '" aria-pressed="' + (c === o[0]) + '">' + o[1] + '</button>' }).join('') + '</div></div>'; $('ovM').classList.add('on') }
  $('theme').onclick = open;
  document.addEventListener('click', function (e) { var d = e.target.closest('[data-th]'); if (!d) return; var v = d.getAttribute('data-th'), r = document.documentElement; if (v === 'system') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', v); open() });
})();
;
/* ===== Independent scrolling: only the middle feed scrolls on desktop ===== */
(function () {
  var s = document.createElement('style'); s.textContent = '@media(min-width:801px){html,body{height:100%;overflow:hidden}body{display:flex;flex-direction:column}nav.bar{flex:none}.layout{flex:1;min-height:0;width:100%;grid-template-rows:minmax(0,1fr);padding-top:0;padding-bottom:0}.layout>main,.layout>aside,.layout>.lside{height:100%;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;padding-top:16px;padding-bottom:16px}.layout>.lside{position:static;align-self:stretch;justify-content:flex-start}.layout>main{padding-left:2px;padding-right:2px}}'; document.head.appendChild(s);
  document.addEventListener('click', function (e) { if (e.target.closest('.tabs button,[data-ls],[data-u],[data-sr2]')) { var m = document.getElementById('main'); if (m) m.scrollTop = 0 } });
})();
;
/* ===== Settings moved to left sidebar (nav button kept only where sidebar is hidden) ===== */
(function () {
  var s = document.createElement('style'); s.textContent = '@media(min-width:1061px){#theme{display:none}}'; document.head.appendChild(s);
  document.addEventListener('click', function (e) { if (e.target.closest('[data-set]')) { var b = document.getElementById('theme'); if (b && b.onclick) b.onclick() } });
})();
;
/* ===== Nav: Home, Reels, Profile and Messages grouped in the middle ===== */
(function () {
  var s = document.createElement('style'); s.textContent = '@media(min-width:801px){nav.bar .tabs{margin:0 0 0 auto}nav.bar #cwmOpen{margin:0 auto 0 4px}}'; document.head.appendChild(s);
})();
;
/* ===== Nav: Home, Reels, Profile and Messages grouped inside one centered box ===== */
(function () {
  var nav = document.querySelector('nav.bar'), t = nav.querySelector('.tabs'), m = document.getElementById('cwmOpen');
  if (!nav || !t || !m) return;
  var w = document.createElement('div'); w.id = 'navmid'; nav.insertBefore(w, t); w.appendChild(t); w.appendChild(m);
  var s = document.createElement('style'); s.textContent = '#navmid{display:contents}@media(min-width:1200px){nav.bar #navmid{display:flex;align-items:center;gap:4px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}nav.bar #navmid .tabs{margin:0}nav.bar #navmid #cwmOpen{margin:0 0 0 4px}}'; document.head.appendChild(s);
})();
;
/* ===== Search: only the magnifier icon is visible; the field opens on click ===== */
(function () {
  var s = document.createElement('style'); s.textContent = '.sbox input{width:40px;height:40px;padding:0;cursor:pointer;transition:width .2s}.sbox input::placeholder{color:transparent}.sbox:focus-within input{width:230px;padding:9px 14px 9px 36px;cursor:text}.sbox:focus-within input::placeholder{color:var(--muted)}.sbox>svg{width:18px;height:18px;left:11px}@media(max-width:800px){.sbox{flex:none}.sbox:focus-within input{width:min(210px,52vw)}}@media(prefers-reduced-motion:reduce){.sbox input{transition:none}}'; document.head.appendChild(s);
})();
;
/* ===== Nav buttons: icons, order Home > Reels > Messages > Profile, animations ===== */
(function () {
  function ic(d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>' }
  var I = { tHome: ic('<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/>'), tReels: ic('<rect width="18" height="18" x="3" y="3" rx="3"/><path d="m10 8 6 4-6 4z"/>'), tProf: ic('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>') };
  ['tHome', 'tReels', 'tProf'].forEach(function (id) { var b = document.getElementById(id); if (!b) return; var t = b.textContent.trim(); b.innerHTML = I[id] + '<span class="nl">' + t + '</span>'; b.classList.add('navb'); b.title = t });
  var m = document.getElementById('cwmOpen'); if (m) { m.classList.add('navb'); m.title = 'Messages'; var sv = m.querySelector('svg'); if (sv) sv.insertAdjacentHTML('afterend', '<span class="nl">Messages</span>') }
  var s = document.createElement('style'); s.textContent = '.navb svg{width:20px;height:20px;flex:none;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.navb .nl{white-space:nowrap}.navb:hover svg{transform:translateY(-2px) scale(1.14)}.navb:active svg{transform:scale(.85)}.tabs .navb[aria-selected="true"] svg{animation:navpop .5s cubic-bezier(.34,1.56,.64,1)}@keyframes navpop{0%{transform:scale(.6) rotate(-12deg)}60%{transform:scale(1.28) rotate(6deg)}100%{transform:none}}'
    + '@media(min-width:801px){nav.bar .tabs{display:contents}nav.bar .navb{position:relative;display:flex;align-items:center;gap:8px;padding:9px 16px;border-radius:10px;box-shadow:none!important;background:none;color:var(--muted);font-weight:600;transition:background .15s,color .15s}nav.bar .navb:hover{background:var(--s2);color:var(--text)}nav.bar .tabs .navb[aria-selected="true"]{color:var(--accent);background:none}nav.bar .tabs .navb::after{content:"";position:absolute;left:50%;bottom:-8px;height:3px;width:0;background:var(--accent);border-radius:3px 3px 0 0;transform:translateX(-50%);transition:width .25s}nav.bar .tabs .navb[aria-selected="true"]::after{width:70%}nav.bar #theme{order:5}nav.bar #tHome{order:1;margin-left:auto}nav.bar #tReels{order:2}nav.bar #cwmOpen{order:3;margin:0}nav.bar #tProf{order:4;margin-right:auto}}'
    + '@media(min-width:1200px){nav.bar #navmid #tHome{margin-left:0}nav.bar #navmid #tProf{margin-right:0}nav.bar #navmid #cwmOpen{margin:0}}'
    + '@media(min-width:801px) and (max-width:1099px){.navb .nl{display:none}nav.bar .navb{padding:9px 14px}}'
    + '@media(max-width:800px){.tabs button.navb{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:8px 4px;font-size:11px}.tabs .navb svg{width:22px;height:22px}#cwmOpen .nl{display:none}}'
    + '@media(prefers-reduced-motion:reduce){.navb svg,nav.bar .navb,nav.bar .tabs .navb::after{transition:none}.tabs .navb[aria-selected="true"] svg{animation:none}}'; document.head.appendChild(s);
})();
;
/* ===== Messenger: remove the "Chats" heading, keep the new-message button ===== */
(function () {
  var s = document.createElement('style'); s.textContent = '.cwm-sh h3{display:none}.cwm-sh{justify-content:flex-end;padding-bottom:0}'; document.head.appendChild(s);
})();
;
/* ===== Messenger composer: [emoji] [+] [pill input] [mic / send] ===== */
(function () {
  var root = document.getElementById('cwmRoot');
  function ic(d, c) { return '<svg' + (c ? ' class="' + c + '"' : '') + ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>' }
  var MIC = ic('<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>', 'micic'), SEND = ic('<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>');
  var ta = document.getElementById('cwmTa'), pk = root.querySelector('[data-ma="pick"]'), sb = document.getElementById('cwmSb'), pd = document.getElementById('cwmPend');
  ta.placeholder = 'Type a message';
  pk.innerHTML = ic('<path d="M12 5v14M5 12h14"/>'); pk.title = 'Add a photo';
  var s = document.createElement('style'); s.textContent = '.cwm-comp .cwm-field{display:contents}.cwm-comp{align-items:flex-end;gap:6px;padding:8px 10px calc(8px + env(safe-area-inset-bottom,0px))}.cwm-comp .cwm-fb{width:40px;height:40px;color:var(--text);flex:none}.cwm-comp .cwm-fb svg{width:24px;height:24px}.cwm-comp [data-ma="emoji"]{order:1}.cwm-comp [data-ma="pick"]{order:2}.cwm-comp .cwm-field .cwm-ta{order:3;flex:1;min-width:0;background:var(--s2);border-radius:22px;padding:10px 16px;box-shadow:none;font-size:15px}.cwm-comp .cwm-field .cwm-ta:focus{box-shadow:inset 0 0 0 1px var(--accent)}.cwm-comp .cwm-send{order:4}.cwm-comp .cwm-send.idle{background:none;color:var(--text)}.cwm-comp .cwm-send.idle:hover{background:var(--s2)}.cwm-comp .cwm-send svg{width:22px;height:22px}'; document.head.appendChild(s);
  function apply() {
    var idle = !ta.value.trim() && !(pd && pd.innerHTML.trim()), has = !!sb.querySelector('.micic');
    if (idle && !has) { sb.innerHTML = MIC; sb.setAttribute('aria-label', 'Voice message') } else if (!idle && has) { sb.innerHTML = SEND; sb.setAttribute('aria-label', 'Send message') }
    sb.classList.toggle('idle', idle)
  }
  new MutationObserver(apply).observe(sb, { childList: true }); if (pd) new MutationObserver(apply).observe(pd, { childList: true });
  root.addEventListener('input', apply);
  root.addEventListener('click', function (e) { var b = e.target.closest('#cwmSb'); if (b && b.querySelector('.micic')) { e.stopPropagation(); toast('Voice messages are not available in this demo') } }, true);
  apply();
})();
