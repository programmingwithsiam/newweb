var CL = ['#38bdf8', '#facc15', '#34d399', '#f472b6', '#a78bfa', '#fb923c'], BG = ['#0ea5e9,#6366f1', '#f97316,#ec4899', '#10b981,#0ea5e9', '#8b5cf6,#ec4899', '#facc15,#f97316'];
var PN = { yt: 'YouTube', fb: 'Facebook', ig: 'Instagram', file: 'Video' };
function $(i) { return document.getElementById(i) }
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }
function col(n) { var h = 0; for (var i = 0; i < n.length; i++)h += n.charCodeAt(i); return CL[h % CL.length] }
function av(n, c) { return '<span class="av ' + (c || '') + '" style="background:' + col(n) + '">' + esc(n[0]) + '</span>' }
function toast(m) { var e = $('toast'); e.textContent = m; e.classList.add('on'); setTimeout(function () { e.classList.remove('on') }, 1800) }
function parse(u) {
    u = (u || '').trim(); if (!/^https?:\/\//i.test(u)) return null; var h; try { h = new URL(u).hostname.replace(/^www\.|^m\./, '') } catch (e) { return null }
    var p = /(^|\.)(youtube\.com|youtu\.be)$/.test(h) ? 'yt' : /(^|\.)(facebook\.com|fb\.watch|fb\.com)$/.test(h) ? 'fb' : /(^|\.)instagram\.com$/.test(h) ? 'ig' : null; return p ? { p: p, url: u } : null
}
function embedUrl(v) {
    var u = v.url, m;
    if (v.p === 'yt') { m = u.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{3,})/); return m ? 'https://www.youtube-nocookie.com/embed/' + m[1] + '?autoplay=1&rel=0' : null }
    if (v.p === 'ig') { m = u.match(/instagram\.com\/(reel|reels|p|tv)\/([\w-]+)/); return m ? 'https://www.instagram.com/' + (m[1] === 'reels' ? 'reel' : m[1]) + '/' + m[2] + '/embed' : null }
    if (v.p === 'fb') return 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(u) + '&show_text=false&autoplay=true'; return null
}
function vid(v) {
    if (v.p === 'file') return '<video class="vf" src="' + v.url + '" controls playsinline preload="metadata"></video>';
    return '<div class="vid ' + v.p + '" data-play="1" data-pp="' + v.p + '" data-url="' + esc(v.url) + '" role="button" tabindex="0" aria-label="Play video"><span class="bd">' + PN[v.p] + '</span><span class="pl">▶</span><a class="op" href="' + esc(v.url) + '" target="_blank" rel="noopener">Open on ' + PN[v.p] + '</a></div>'
}
function art(a, b, t) { return 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><defs><linearGradient id="g"><stop offset="0" stop-color="' + a + '"/><stop offset="1" stop-color="' + b + '"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="400" y="270" font-size="56" font-family="sans-serif" font-weight="700" fill="#fff" text-anchor="middle">' + t + '</text></svg>') }
var me = 'You', pts = { Siam: 480, Rafi: 210, Nusrat: 175, Tanvir: 140 };
var stories = [{ by: 'Siam', bg: BG[0], txt: 'Day 30 of learning ML', seen: 0 }, { by: 'Rafi', bg: BG[1], txt: 'Finished my CNN project', seen: 0 }, { by: 'Nusrat', bg: BG[2], txt: 'Pandas tip of the day', seen: 0 }, { by: 'Tanvir', bg: BG[3], txt: 'New YouTube video is live', vid: { p: 'yt', url: 'https://youtube.com/watch?v=demo' }, seen: 0 }];
var posts = [{ id: 1, by: 'Siam', time: '2 h', txt: 'New tutorial: build a digit recognizer with Python and OpenCV. Watch and tell me what to teach next.', vid: { p: 'yt', url: 'https://youtube.com/watch?v=demo' }, likes: 42, liked: 0, cm: [{ by: 'Rafi', t: 'Great video!' }] },
{ id: 2, by: 'Rafi', time: '5 h', txt: 'My first ML project result. 92% accuracy.', img: art('#0ea5e9', '#6366f1', '92% accuracy'), likes: 18, liked: 0, cm: [] },
{ id: 3, by: 'Nusrat', time: '1 d', txt: 'Posted a reel about list comprehensions.', vid: { p: 'ig', url: 'https://instagram.com/reel/demo' }, likes: 9, liked: 0, cm: [] }];
var reels = [{ by: 'Siam', cap: '3 Python tricks in 30 seconds', vid: { p: 'ig', url: 'https://instagram.com/reel/demo' }, likes: 120, liked: 0 }, { by: 'Tanvir', cap: 'Train a model in 1 minute', vid: { p: 'yt', url: 'https://youtube.com/shorts/demo' }, likes: 76, liked: 0 }];
var tab = 'home', nid = 10, draft = { img: null, vid: null, txt: '', feel: '', bg: -1, aud: 0 }, pu = 'You', ptab = 'posts', fol = {};
var U = { Siam: { bio: 'Python, ML and AI learner from Bangladesh. Building in public.', f: 1240, g: 12 }, Rafi: { bio: 'CNN and computer vision experiments.', f: 210, g: 30 }, Nusrat: { bio: 'Data science student. Sharing Pandas tips.', f: 175, g: 44 }, Tanvir: { bio: 'YouTube tutorials on Python and ML.', f: 140, g: 25 }, You: { bio: 'Tell people about yourself.', f: 0, g: 0 } };
function lb() { $('lb').innerHTML = Object.keys(pts).sort(function (a, b) { return pts[b] - pts[a] }).map(function (n) { return '<div class="lb" data-u="' + esc(n) + '">' + av(n) + '<span>' + esc(n) + '</span><em>' + pts[n] + ' pts</em></div>' }).join('') }
function sCard(s, i) { return '<button class="st" data-s="' + i + '"><div class="bg" style="' + (s.img ? 'background-image:url(' + s.img + ')' : 'background:linear-gradient(160deg,' + s.bg + ')') + '">' + (s.img ? '' : esc(s.txt || (s.vid ? PN[s.vid.p] + ' video' : ''))) + '</div><span class="ring ' + (s.seen ? 'seen' : '') + '">' + av(s.by) + '</span><span class="nm">' + esc(s.by) + '</span></button>' }
var SV = {
    like: '<circle cx="24" cy="24" r="24" fill="url(#gb)"/><path class="star" fill="#fff" d="M24 10.5l4.1 8.6 9.4 1.2-6.9 6.5 1.8 9.3L24 31.4l-8.4 4.7 1.8-9.3-6.9-6.5 9.4-1.2z"/>',
    love: '<circle cx="24" cy="24" r="24" fill="url(#gr)"/><path class="heart" fill="#fff" d="M24 36.5S11.5 29 11.5 20.6c0-4 3-6.6 6.4-6.6 2.8 0 4.9 1.5 6.1 3.8 1.2-2.3 3.3-3.8 6.1-3.8 3.4 0 6.4 2.6 6.4 6.6C36.5 29 24 36.5 24 36.5z"/>',
    care: '<g class="face"><circle cx="24" cy="24" r="24" fill="url(#gy)"/><path d="M11.5 19.5q4.5-5.2 9 0M27.5 19.5q4.5-5.2 9 0" fill="none" stroke="#5b3a00" stroke-width="2.4" stroke-linecap="round"/><path d="M18.5 25.5q5.5 4.5 11 0" fill="none" stroke="#5b3a00" stroke-width="2.4" stroke-linecap="round"/><circle cx="10.5" cy="25" r="3" fill="#ff8a8a" opacity=".6"/><circle cx="37.5" cy="25" r="3" fill="#ff8a8a" opacity=".6"/></g><path class="chrt" fill="url(#gr)" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" d="M24 45S14 39 14 32.6c0-2.9 2.1-4.7 4.5-4.7 2.2 0 4 1.2 5.5 3.4 1.5-2.2 3.3-3.4 5.5-3.4 2.4 0 4.5 1.8 4.5 4.7C34 39 24 45 24 45z"/>',
    haha: '<g class="face"><circle cx="24" cy="24" r="24" fill="url(#gy)"/><path d="M11 19.5q4.5-6 9 0M28 19.5q4.5-6 9 0" fill="none" stroke="#5b3a00" stroke-width="2.6" stroke-linecap="round"/><g class="mouth-h"><path d="M10.5 26.5h27c0 9.5-6 14.5-13.5 14.5S10.5 36 10.5 26.5z" fill="#6a1b0a"/><path d="M11.5 26.5h25c0 1.7-.4 3-1 4h-23c-.6-1-1-2.3-1-4z" fill="#fff"/><ellipse cx="24" cy="37.5" rx="6" ry="3.4" fill="#f0606f"/></g></g>',
    wow: '<g class="face"><circle cx="24" cy="24" r="24" fill="url(#gy)"/><g class="brow"><path d="M10.5 14q5.5-5.5 11-1M26.5 13q5.5-4.5 11 1" fill="none" stroke="#5b3a00" stroke-width="2.4" stroke-linecap="round"/></g><ellipse cx="16.5" cy="22" rx="3" ry="4.2" fill="#4a2c00"/><ellipse cx="31.5" cy="22" rx="3" ry="4.2" fill="#4a2c00"/><ellipse class="mouth-w" cx="24" cy="34" rx="4.8" ry="6" fill="#5d1a0b"/></g>',
    sad: '<g class="face"><circle cx="24" cy="24" r="24" fill="url(#gy)"/><path d="M10.5 19.5l9-3.5M37.5 19.5l-9-3.5" stroke="#5b3a00" stroke-width="2.4" stroke-linecap="round" fill="none"/><ellipse cx="16.5" cy="24" rx="2.4" ry="3" fill="#4a2c00"/><ellipse cx="31.5" cy="24" rx="2.4" ry="3" fill="#4a2c00"/><path d="M16.5 37q7.5-7 15 0" fill="none" stroke="#5b3a00" stroke-width="2.6" stroke-linecap="round"/><path class="tear" d="M37 27q3.5 5 0 7.5q-3.5-2.5 0-7.5z" fill="#6ec6ff"/></g>',
    angry: '<g class="face"><circle cx="24" cy="24" r="24" fill="url(#ga)"/><path d="M9.5 16.5l11 5M38.5 16.5l-11 5" stroke="#4a1200" stroke-width="3.4" stroke-linecap="round"/><ellipse cx="16.5" cy="25.5" rx="2.5" ry="2.9" fill="#3a1000"/><ellipse cx="31.5" cy="25.5" rx="2.5" ry="2.9" fill="#3a1000"/><path d="M16.5 37.5q7.5-6 15 0" fill="none" stroke="#4a1200" stroke-width="2.8" stroke-linecap="round"/></g>'
};
function oi(d) { return '<svg class="oi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>' }
var OI_LIKE = oi('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'), OI_CM = oi('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'), OI_SH = oi('<path d="m15 14 5-5-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>');
var OI_GL = oi('<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'), OI_FR = oi('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'), OI_LK = oi('<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'), OI_BM = oi('<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>'), OI_LN = oi('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'), OI_X = oi('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'), OI_TR = oi('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'), OI_DOTS = oi('<circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/>');
function ic(k) { return '<svg class="rx rx-' + k + '" viewBox="0 0 48 48" aria-hidden="true">' + SV[k] + '</svg>' }
var RL = [{ k: 'like', e: '👍', n: 'Like', c: '#2d88ff' }, { k: 'love', e: '❤️', n: 'Love', c: '#f33e58' }, { k: 'care', e: '🥰', n: 'Care', c: '#f7b125' }, { k: 'haha', e: '😆', n: 'Haha', c: '#f7b125' }, { k: 'wow', e: '😮', n: 'Wow', c: '#f7b125' }, { k: 'sad', e: '😢', n: 'Sad', c: '#f7b125' }, { k: 'angry', e: '😡', n: 'Angry', c: '#e9710f' }], RM = {}; RL.forEach(function (x) { RM[x.k] = x });
var POOL = ['Siam', 'Rafi', 'Nusrat', 'Tanvir', 'Mim', 'Sabbir', 'Ayesha', 'Hasan'], rref = '', rtab = 'all', lp = false, lt, lastR = '';
function rc(o) { return o.r || (o.r = {}) }
function total(o) { var r = rc(o), n = 0; for (var k in r) n += r[k]; return n }
function byId(a, id) { for (var i = 0; i < a.length; i++)if (a[i].id == id) return a[i]; return null }
function find(ref) { var a = ref.split(':'), p = byId(posts, a[1]) || byId(reels, a[1]); if (a[0] === 'p') return p; var c = byId(p.cm, a[2]); return a[0] === 'c' ? c : byId(c.rep, a[3]) }
function setR(ref, k) { var o = find(ref), r = rc(o); if (o.my === k) return; if (o.my) r[o.my]--; o.my = k; r[k] = (r[k] || 0) + 1; lastR = ref; render(); lastR = '' }
function toggleR(ref) { var o = find(ref); if (o.my) { rc(o)[o.my]--; o.my = null; render() } else setR(ref, 'like') }
function rsum(o) { var r = rc(o); return RL.filter(function (x) { return r[x.k] > 0 }).sort(function (a, b) { return r[b.k] - r[a.k] }).slice(0, 3).map(function (x) { return '<i>' + ic(x.k) + '</i>' }).join('') }
function rbtn(ref, o, sm) { var m = o.my ? RM[o.my] : null; return '<div class="rw"><button data-rx="' + ref + '"' + (ref === lastR ? ' class="bump"' : '') + (m ? ' style="color:' + m.c + '"' : '') + ' aria-pressed="' + !!m + '">' + (m ? (sm ? '' : ic(o.my) + ' ') + m.n : (sm ? 'Like' : OI_LIKE + ' Like')) + '</button><div class="rp">' + RL.map(function (x) { return '<button data-rs="' + ref + '|' + x.k + '" aria-label="' + x.n + '">' + ic(x.k) + '</button>' }).join('') + '</div></div>' }
function ccount(p) { var n = 0; p.cm.forEach(function (c) { n += 1 + (c.rep ? c.rep.length : 0) }); return n }
function nc(c) { c.id = nid++; c.time = c.time || '1 h'; c.r = c.r || {}; c.my = null; c.rep = (c.rep || []).map(nc); return c }
function cH(p, c, par) {
    var ref = par ? 'r:' + p.id + ':' + par.id + ':' + c.id : 'c:' + p.id + ':' + c.id, tot = total(c);
    var bub = c.ed ? '<form class="cwr" data-ce="' + ref + '" style="margin:0"><input value="' + esc(c.t) + '" aria-label="Edit comment" required><button class="btn">Save</button><button type="button" class="btn g" data-ec="' + ref + '">Cancel</button></form>' : '<div class="cb"><b data-u="' + esc(c.by) + '">' + esc(c.by) + '</b>' + esc(c.t) + (tot ? '<button class="rc' + (ref === lastR ? ' pop' : '') + '" data-rm="' + ref + '" aria-label="See reactions"><span class="rs">' + rsum(c) + '</span><span class="cnt">' + tot + '</span></button>' : '') + '</div>';
    var h = '<div class="cx">' + av(c.by) + '<div style="min-width:0;flex:1">' + bub + '<div class="ca">' + rbtn(ref, c, 1) + '<button data-rp="' + ref + '">Reply</button><span class="tm">' + esc(c.time) + '</span>' + (c.edited ? '<span class="tm">Edited</span>' : '') + (c.by === me && !c.ed ? '<button data-ed="' + ref + '">Edit</button><button data-dl="' + ref + '">Delete</button>' : '') + '</div>';
    if (!par) {
        var rp = c.rep || [];
        if (rp.length) h += c.open ? '<div>' + rp.map(function (x) { return cH(p, x, c) }).join('') + '</div>' : '<button class="vr" data-vr="' + ref + '">↳ View ' + rp.length + (rp.length > 1 ? ' replies' : ' reply') + '</button>';
        if (c.rf) h += '<form class="cwr" data-rf="' + ref + '">' + av(me) + '<div class="cin"><input value="' + esc(c.rfp || '') + '" placeholder="Reply to ' + esc(c.by) + '" aria-label="Reply" required><button class="snd" aria-label="Send reply">➤</button></div></form>'
    }
    return h + '</div></div>'
}
function cmsH(p) {
    var arr = p.cm.slice(), s = p.sort || 'rel';
    if (s === 'rel') arr.sort(function (a, b) { return total(b) + (b.rep ? b.rep.length : 0) - total(a) - (a.rep ? a.rep.length : 0) }); else if (s === 'new') arr.reverse();
    var lim = p.all ? arr.length : 2, more = arr.length - lim;
    return '<div class="cms"><div class="ch"><span></span><select data-sort="' + p.id + '" aria-label="Sort comments"><option value="rel"' + (s === 'rel' ? ' selected' : '') + '>Most relevant</option><option value="new"' + (s === 'new' ? ' selected' : '') + '>Newest</option><option value="old"' + (s === 'old' ? ' selected' : '') + '>All comments</option></select></div>'
        + (more > 0 ? '<button class="vr" data-vm="' + p.id + '">View ' + more + ' more comment' + (more > 1 ? 's' : '') + '</button>' : '') + arr.slice(0, lim).map(function (c) { return cH(p, c) }).join('')
        + '<form class="cwr" data-nc="' + p.id + '">' + av(me) + '<div class="cin"><input placeholder="Write a comment" aria-label="Write a comment" required><button class="snd" aria-label="Send comment">➤</button></div></form></div>'
}
function audI(a) { return a === '👥' ? OI_FR : a === '🔒' ? OI_LK : OI_GL }
function phH(p) {
    var t = String(p.time).replace(/ (h|d|min)$/, '$1');
    return '<div class="ph"><div class="pav" data-u="' + esc(p.by) + '">' + av(p.by) + '</div><div class="pmeta"><div class="pn1"><b data-u="' + esc(p.by) + '">' + esc(p.by) + '</b>' + (p.by === 'Siam' ? '<span class="adm">Admin</span>' : '') + (p.feel ? ' <span class="fl">is feeling ' + esc(p.feel) + '</span>' : '') + '</div><div class="pn2"><span>' + esc(t) + '</span><span aria-hidden="true">·</span>' + audI(p.aud) + '</div></div>'
        + '<button class="more" data-more="' + p.id + '" aria-label="More options" aria-expanded="' + !!p.menu + '">' + OI_DOTS + '</button>'
        + (p.menu ? '<div class="menu"><button data-mn="save:' + p.id + '">' + OI_BM + (p.saved ? ' Unsave post' : ' Save post') + '</button><button data-mn="copy:' + p.id + '">' + OI_LN + ' Copy link</button>' + (p.by === me ? '<button class="dng" data-mn="del:' + p.id + '">' + OI_TR + ' Delete post</button>' : '<button data-mn="hide:' + p.id + '">' + OI_X + ' Hide post</button>') + '</div>' : '') + '</div>'
}
function postH(p) {
    var m = p.img ? '<img class="m" src="' + p.img + '" alt="Post image">' : p.vid ? vid(p.vid) : '', tot = total(p), cc = ccount(p), who = p.my ? (tot > 1 ? 'You and ' + (tot - 1) + ' others' : 'You') : tot;
    return '<article class="card post">' + phH(p) + (p.txt ? (p.bg ? '<div class="pt big" style="background:linear-gradient(160deg,' + p.bg + ')">' + esc(p.txt) + '</div>' : '<div class="pt">' + esc(p.txt) + '</div>') : '') + m
        + '<div class="stats"><span>' + (tot ? '<button class="rl' + (('p:' + p.id) === lastR ? ' pop' : '') + '" data-rm="p:' + p.id + '"><span class="rs">' + rsum(p) + '</span><span class="cnt">' + who + '</span></button>' : '') + '</span><span>' + (cc ? '<button class="rl" data-tc="' + p.id + '">' + cc + ' comment' + (cc > 1 ? 's' : '') + '</button>' : '') + '</span></div>'
        + '<div class="pa">' + rbtn('p:' + p.id, p) + '<button data-tc="' + p.id + '">' + OI_CM + ' Comment</button><button data-sh="1">' + OI_SH + ' Share</button></div>' + (p.open ? cmsH(p) : '') + '</article>'
}
function render() {
    lb(); $('tHome').setAttribute('aria-selected', tab === 'home'); $('tReels').setAttribute('aria-selected', tab === 'reels'); $('tProf').setAttribute('aria-selected', tab === 'profile');
    if (tab === 'home') {
        $('main').innerHTML = ''
            + '<div class="card comp"><div class="r"><span class="cring">' + av(me) + '</span><button class="pill" data-cp="open"><span>What\u2019s on your mind, ' + esc(me) + '?</span></button></div></div>'
            + '<div class="stories"><button class="st add" data-new="story"><div class="bg">Create story</div><span class="plus">+</span></button>' + stories.map(sCard).join('') + '</div>'
            + posts.map(postH).join(''); draftUI()
    }
    else if (tab === 'reels') { $('main').innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h2>Reels</h2><button class="btn" data-new="reel">Create reel</button></div><div class="reels">' + reels.map(function (r) { var ref = 'p:' + r.id, tot = total(r), cc = ccount(r); return '<div class="reel">' + vid(r.vid) + '<div class="cap"><b data-u="' + esc(r.by) + '" style="pointer-events:auto">' + esc(r.by) + '</b><br>' + esc(r.cap) + '</div><div class="side"><div class="rw"><button data-rx="' + ref + '" class="' + (r.my ? 'on' : '') + '" aria-label="React">' + (r.my ? ic(r.my) : '🤍') + '</button><div class="rp">' + RL.map(function (x) { return '<button data-rs="' + ref + '|' + x.k + '" aria-label="' + x.n + '">' + ic(x.k) + '</button>' }).join('') + '</div></div><small>' + tot + '</small><button data-tc="' + r.id + '" aria-label="Comments">💬</button><small>' + cc + '</small><button data-sh="1" aria-label="Share">➦</button></div></div>' + (r.open ? '<div class="card rcm">' + cmsH(r) + '</div>' : '') }).join('') + '</div>' } else { $('main').innerHTML = profileH(pu) }
}
function draftUI() { var p = $('prev'); if (!p) return; p.className = 'prev' + (draft.img || draft.vid ? ' on' : ''); p.innerHTML = draft.img ? '<img src="' + draft.img + '" alt="Selected photo">' : draft.vid ? vid(draft.vid) : '' }
function modal(type) {
    var m = $('modal'), bgsel = 0, img = null, vf = null;
    m.innerHTML = '<h2>' + (type === 'story' ? 'Create story' : 'Create reel') + '</h2>' + (type === 'story' ? '<div class="f"><textarea id="mtxt" class="in" rows="2" placeholder="Write something (optional)"></textarea></div><div class="f sw" id="sw">' + BG.map(function (b, i) { return '<button data-b="' + i + '" class="' + (i ? '' : 'on') + '" style="background:linear-gradient(135deg,' + b + ')" aria-label="Background ' + (i + 1) + '"></button>' }).join('') + '</div><div class="f"><button class="btn g" id="mph">🖼 Add photo</button> <span id="mfn" style="color:var(--muted);font-size:13px"></span><input type="file" id="mf" accept="image/*" hidden></div>' : '')
        + '<div class="f"><input class="in" id="mlink" placeholder="' + (type === 'reel' ? 'Video link (YouTube, Facebook, Instagram)' : 'Video link (optional)') + '"></div>' + (type === 'reel' ? '<div class="f"><button class="btn g" id="mvu">🎞 Upload video</button> <span id="mvn" style="color:var(--muted);font-size:13px"></span><input type="file" id="mvf" accept="video/*" hidden></div>' : '') + (type === 'reel' ? '<div class="f"><input class="in" id="mcap" placeholder="Caption"></div>' : '')
        + '<p id="merr" style="color:#f87171;font-size:13px;margin:0 0 8px"></p><div style="display:flex;gap:8px;justify-content:flex-end"><button class="btn g" id="mx">Cancel</button><button class="btn" id="mok">Share</button></div>';
    $('ovM').classList.add('on');
    if (type === 'story') {
        $('sw').onclick = function (e) { var b = e.target.closest('button'); if (!b) return; bgsel = +b.dataset.b;[].forEach.call($('sw').children, function (x) { x.classList.toggle('on', x === b) }) };
        $('mph').onclick = function () { $('mf').click() }; $('mf').onchange = function () { var f = this.files[0]; if (!f) return; var r = new FileReader(); r.onload = function () { img = r.result; $('mfn').textContent = f.name }; r.readAsDataURL(f) }
    }
    if (type === 'reel') { $('mvu').onclick = function () { $('mvf').click() }; $('mvf').onchange = function () { var f = this.files[0]; if (!f) return; vf = { p: 'file', url: URL.createObjectURL(f) }; $('mvn').textContent = f.name } }
    $('mx').onclick = function () { $('ovM').classList.remove('on') };
    $('mok').onclick = function () {
        var l = $('mlink').value.trim(), v = vf || parse(l); if (l && !v) { $('merr').textContent = 'Use a valid YouTube, Facebook or Instagram link.'; return }
        if (type === 'reel') { if (!v) { $('merr').textContent = 'A reel needs a video link.'; return } reels.unshift({ id: nid++, by: me, cap: $('mcap').value, vid: v, r: {}, my: null, cm: [] }); tab = 'reels' }
        else { var t = $('mtxt').value.trim(); if (!t && !img && !v) { $('merr').textContent = 'Add text, a photo or a video link.'; return } stories.unshift({ by: me, bg: BG[bgsel], txt: t, img: img, vid: v, seen: 0 }) }
        pts[me] = (pts[me] || 0) + 5; $('ovM').classList.remove('on'); render(); toast(type === 'story' ? 'Story shared. It lasts 24 hours' : 'Reel shared')
    }
}
var sIdx = 0, tm;
function show(i) {
    clearTimeout(tm); $('sv').classList.remove('paused'); if (i < 0) i = 0; if (i >= stories.length) { closeS(); return } sIdx = i; var s = stories[i]; s.seen = 1;
    $('sv').innerHTML = '<div class="pg">' + stories.map(function (_, k) { return '<i class="' + (k < i ? 'd' : k === i ? 'c' : '') + '"><b></b></i>' }).join('') + '</div><div class="who">' + av(s.by) + '<b>' + esc(s.by) + '</b></div><button class="x" id="sx" aria-label="Close">×</button>'
        + '<div class="body" style="' + (s.img ? 'background-image:url(' + s.img + ')' : 'background:linear-gradient(160deg,' + s.bg + ')') + '">' + (s.vid ? vid(s.vid) : '') + (s.img || s.vid ? '' : esc(s.txt)) + '</div>' + ((s.img || s.vid) && s.txt ? '<div class="cap">' + esc(s.txt) + '</div>' : '')
        + (s.by === me ? '<div class="sbar"><div class="mine">Your story. Reactions and replies from others will show here.</div></div>' : '<div class="sbar"><div class="srx">' + RL.map(function (x) { return '<button data-sr="' + x.k + '" class="' + (s.my === x.k ? 'on' : '') + '" aria-label="' + x.n + '">' + ic(x.k) + '</button>' }).join('') + '</div><form data-sf="1"><input placeholder="Reply to ' + esc(s.by) + '" aria-label="Reply to story"><button class="btn">Send</button></form></div>')
        + '<button class="zl" id="sl" aria-label="Previous"></button><button class="zr" id="sr" aria-label="Next"></button>';
    $('ovS').classList.add('on'); $('sl').onclick = function () { show(sIdx - 1) }; $('sr').onclick = function () { show(sIdx + 1) }; $('sx').onclick = closeS; tm = setTimeout(function () { show(sIdx + 1) }, s.vid ? 9000 : 5000)
}
function closeS() { clearTimeout(tm); $('ovS').classList.remove('on'); render() }
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeS(); $('ovM').classList.remove('on') } });
$('tHome').onclick = function () { tab = 'home'; render() }; $('tReels').onclick = function () { tab = 'reels'; render() }; $('tProf').onclick = function () { tab = 'profile'; pu = me; ptab = 'posts'; render() };
$('theme').onclick = function () { var r = document.documentElement, l = r.getAttribute('data-theme') === 'light' || (!r.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: light)').matches); r.setAttribute('data-theme', l ? 'dark' : 'light') };
$('ovS').onclick = function (e) { if (e.target === this) closeS() };
$('main').addEventListener('click', function (e) {
    var t = e.target, d;
    if (d = t.closest('[data-new]')) modal(d.dataset.new);
    else if (d = t.closest('[data-s]')) { show(+d.dataset.s) }
    else if (t.id === 'bPhoto') $('file').click();
    else if (t.id === 'bVid') $('lr').classList.toggle('on');
    else if (t.id === 'lok') { var v = parse($('plink').value); if (!v) { toast('Use a YouTube, Facebook or Instagram link'); return } draft.vid = v; draft.img = null; draftUI() }
    else if (t.id === 'bPost') { var x = $('ptxt').value.trim(); if (!x && !draft.img && !draft.vid) { toast('Write something or add media'); return } posts.unshift({ id: nid++, by: me, time: '1 min', txt: x, img: draft.img, vid: draft.vid, likes: 0, liked: 0, cm: [] }); pts[me] = (pts[me] || 0) + 10; draft = { img: null, vid: null }; render(); toast('Posted. +10 points') }


    else if (d = t.closest('[data-rl]')) { var r = reels[+d.dataset.rl]; r.liked = !r.liked; r.likes += r.liked ? 1 : -1; render() }
    else if (t.closest('[data-sh]')) toast('Link copied (preview)')
});
$('main').addEventListener('change', function (e) { if (e.target.id !== 'file') return; var f = e.target.files[0]; if (!f) return; var r = new FileReader(); r.onload = function () { draft.img = r.result; draft.vid = null; draftUI() }; r.readAsDataURL(f) });
$('main').addEventListener('submit', function (e) { var f = e.target.closest('[data-cf]'); if (!f) return; e.preventDefault(); var p = posts.filter(function (q) { return q.id == f.dataset.cf })[0]; p.cm.push({ by: me, t: f.querySelector('input').value }); render(); $('c' + p.id).hidden = false });
function profileH(n) {
    var u = U[n] || { bio: '', f: 0, g: 0 }, mine = n === me;
    var pp = posts.filter(function (p) { return p.by === n }), rr = reels.filter(function (r) { return r.by === n });
    var emp = function (t) { return '<div class="card" style="padding:24px;text-align:center;color:var(--muted)">' + t + '</div>' };
    var body = ptab === 'posts' ? (pp.length ? pp.map(postH).join('') : emp('No posts yet.')) : (rr.length ? '<div class="rg">' + rr.map(function (r) { return '<div class="reel">' + vid(r.vid) + '<div class="cap"><b>' + esc(r.cap) + '</b></div></div>' }).join('') + '</div>' : emp('No reels yet.'));
    return '<div class="card prof"><div class="cover" style="background:linear-gradient(120deg,' + col(n) + ',#6366f1)"></div><div class="pinfo">' + av(n, 'big') + '<div class="pn"><h2>' + esc(n) + '</h2><small>' + esc(u.bio) + '</small></div>'
        + (mine ? '<button class="btn g" id="editP">Edit profile</button>' : '<button class="btn ' + (fol[n] ? 'g' : '') + '" data-fo="' + esc(n) + '">' + (fol[n] ? 'Following' : 'Follow') + '</button><button class="btn g" data-msg="' + esc(n) + '">Message</button>') + '</div>'
        + '<div class="pst"><span><b>' + pp.length + '</b> posts</span><span><b>' + rr.length + '</b> reels</span><span><b>' + (u.f + (fol[n] ? 1 : 0)) + '</b> followers</span><span><b>' + u.g + '</b> following</span><span><b>' + (pts[n] || 0) + '</b> points</span></div></div>'
        + '<div class="ptabs"><button class="btn ' + (ptab === 'posts' ? '' : 'g') + '" data-pt="posts">Posts</button><button class="btn ' + (ptab === 'reels' ? '' : 'g') + '" data-pt="reels">Reels</button></div>' + body
}
function rename(a, b) {
    U[b] = U[a]; delete U[a]; pts[b] = pts[a] || 0; delete pts[a];
    posts.forEach(function (p) { if (p.by === a) p.by = b; p.cm.forEach(function (c) { if (c.by === a) c.by = b }) }); reels.forEach(function (r) { if (r.by === a) r.by = b }); stories.forEach(function (x) { if (x.by === a) x.by = b }); me = b
}
function editModal() {
    $('modal').innerHTML = '<h2>Edit profile</h2><div class="f"><input class="in" id="en" maxlength="24" value="' + esc(me) + '" aria-label="Name"></div><div class="f"><textarea class="in" id="eb" rows="3" maxlength="140" aria-label="Bio">' + esc(U[me].bio) + '</textarea></div><p id="merr" style="color:#f87171;font-size:13px;margin:0 0 8px"></p><div style="display:flex;gap:8px;justify-content:flex-end"><button class="btn g" id="ex">Cancel</button><button class="btn" id="es">Save</button></div>';
    $('ovM').classList.add('on'); $('ex').onclick = function () { $('ovM').classList.remove('on') };
    $('es').onclick = function () {
        var n = $('en').value.trim(); if (!n) { $('merr').textContent = 'Name cannot be empty.'; return } if (n !== me && U[n]) { $('merr').textContent = 'That name is already taken.'; return }
        if (n !== me) rename(me, n); U[me].bio = $('eb').value.trim(); pu = me; $('ovM').classList.remove('on'); render(); toast('Profile saved')
    }
}
document.addEventListener('click', function (e) {
    var t = e.target, d;
    if (d = t.closest('[data-play]')) {
        if (t.closest('a')) return; var v = { p: d.dataset.pp, url: d.dataset.url }, u = embedUrl(v); if (!u) { window.open(v.url, '_blank', 'noopener'); return }
        clearTimeout(tm); d.removeAttribute('data-play'); d.removeAttribute('role'); d.innerHTML = '<iframe src="' + u + '" title="Video player" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe><a class="op top" href="' + esc(v.url) + '" target="_blank" rel="noopener">Open on ' + PN[v.p] + '</a>'
    }
    else if (d = t.closest('[data-u]')) { pu = d.dataset.u; tab = 'profile'; ptab = 'posts'; clearTimeout(tm); $('ovS').classList.remove('on'); $('ovM').classList.remove('on'); window.scrollTo(0, 0); render() }
    else if (d = t.closest('[data-pt]')) { ptab = d.dataset.pt; render() }
    else if (d = t.closest('[data-fo]')) { var n = d.dataset.fo; fol[n] = !fol[n]; render(); if ($('ovM').classList.contains('on') && $('modal').querySelector('.rtabs')) rmodal(); toast(fol[n] ? 'Following ' + n : 'Unfollowed') }
    else if (t.id === 'editP') editModal();
    else if (t.id === 'bUp') $('vfile').click()
});
document.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.hasAttribute && e.target.hasAttribute('data-play')) e.target.click() });
document.addEventListener('change', function (e) { if (e.target.id !== 'vfile') return; var f = e.target.files[0]; if (!f) return; draft.vid = { p: 'file', url: URL.createObjectURL(f) }; draft.img = null; draftUI() });
posts[0].cm = [{ by: 'Rafi', t: 'Great video! The OpenCV part was really clear.', rep: [{ by: 'Siam', t: 'Thanks Rafi! Glad it helped.' }], r: { like: 3, love: 1 } }, { by: 'Nusrat', t: 'Please make one on PyTorch next.', r: { like: 2 } }, { by: 'Tanvir', t: 'Subscribed!' }]; posts[0].open = true;
posts.forEach(function (p) { var n = p.likes || 0, a = Math.round(n * .6), b = Math.round(n * .25); p.r = { like: a, love: b, haha: Math.max(0, n - a - b) }; p.my = null; p.cm = p.cm.map(nc) });
function rmodal() {
    var o = find(rref), r = rc(o), ty = RL.filter(function (x) { return r[x.k] > 0 }), list = [];
    ty.forEach(function (x, i) { if (rtab !== 'all' && rtab !== x.k) return; var c = r[x.k] - (o.my === x.k ? 1 : 0); if (o.my === x.k) list.push({ n: me, k: x.k }); for (var j = 0; j < Math.min(c, 8); j++)list.push({ n: POOL[(j + i * 2) % POOL.length], k: x.k }) });
    $('modal').innerHTML = '<div class="cphead"><h2>Reactions</h2><button class="x2" id="rclose" aria-label="Close">✕</button></div>'
        + '<div class="rtabs" role="tablist"><button class="rt' + (rtab === 'all' ? ' on' : '') + '" data-rt="all">All</button>' + ty.map(function (x) { return '<button class="rt' + (rtab === x.k ? ' on' : '') + '" data-rt="' + x.k + '" aria-label="' + x.n + '">' + ic(x.k) + '<span>' + r[x.k] + '</span></button>' }).join('') + '</div>'
        + '<div class="rlist">' + (list.length ? list.map(function (x) { return '<div class="rrow"><div class="rav" data-u="' + esc(x.n) + '">' + av(x.n) + '<span class="rbd">' + ic(x.k) + '</span></div><b class="rn" data-u="' + esc(x.n) + '">' + esc(x.n) + '</b>' + (x.n === me ? '' : '<button class="btn g sm" data-fo="' + esc(x.n) + '">' + (fol[x.n] ? 'Following' : 'Follow') + '</button>') + '</div>' }).join('') : '<div class="empty">No reactions yet.</div>') + '</div>'; $('ovM').classList.add('on')
}
document.addEventListener('pointerdown', function (e) { var w = e.target.closest && e.target.closest('.rw>button'); if (!w || e.pointerType === 'mouse') return; lt = setTimeout(function () { w.parentNode.classList.add('show'); lp = true }, 450) });
['pointerup', 'pointercancel'].forEach(function (ev) { document.addEventListener(ev, function () { clearTimeout(lt) }) });
document.addEventListener('click', function (e) {
    var t = e.target, d, was = lp; lp = false;
    [].forEach.call(document.querySelectorAll('.rw.show'), function (x) { if (!x.contains(t) || t.closest('[data-rs]')) x.classList.remove('show') });
    if (d = t.closest('[data-rx]')) { if (was) return; toggleR(d.dataset.rx) }
    else if (d = t.closest('[data-rs]')) { var a = d.dataset.rs.split('|'); setR(a[0], a[1]) }
    else if (d = t.closest('[data-rm]')) { rref = d.dataset.rm; rtab = 'all'; rmodal() }
    else if (d = t.closest('[data-rt]')) { rtab = d.dataset.rt; rmodal() }
    else if (t.id === 'rclose') $('ovM').classList.remove('on');
    else if (d = t.closest('[data-tc]')) { var p = find('p:' + d.dataset.tc); p.open = !p.open; render() }
    else if (d = t.closest('[data-vm]')) { find('p:' + d.dataset.vm).all = true; render() }
    else if (d = t.closest('[data-vr]')) { var c = find(d.dataset.vr); c.open = !c.open; render() }
    else if (d = t.closest('[data-rp]')) { var r2 = d.dataset.rp.split(':'), pr = 'c:' + r2[1] + ':' + r2[2], c2 = find(pr); c2.rf = true; c2.open = true; c2.rfp = r2[0] === 'r' ? '@' + find(d.dataset.rp).by + ' ' : ''; render(); var inp = document.querySelector('[data-rf="' + pr + '"] input'); if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length) } }
    else if (d = t.closest('[data-ed]')) { find(d.dataset.ed).ed = true; render() }
    else if (d = t.closest('[data-ec]')) { find(d.dataset.ec).ed = false; render() }
    else if (d = t.closest('[data-dl]')) { var q = d.dataset.dl.split(':'), pp = find('p:' + q[1]); if (q[0] === 'c') pp.cm = pp.cm.filter(function (x) { return x.id != q[2] }); else { var cc = find('c:' + q[1] + ':' + q[2]); cc.rep = cc.rep.filter(function (x) { return x.id != q[3] }) } render(); toast('Comment deleted') }
});
document.addEventListener('submit', function (e) {
    var f = e.target, v, o, tx; if (!f.getAttribute) return; var inp = f.querySelector('input'); tx = inp ? inp.value.trim() : '';
    if (v = f.getAttribute('data-nc')) { e.preventDefault(); if (!tx) return; var p = find('p:' + v); p.cm.push(nc({ by: me, t: tx, time: 'Just now' })); p.all = true; render() }
    else if (v = f.getAttribute('data-rf')) { e.preventDefault(); if (!tx) return; o = find(v); o.rep = o.rep || []; o.rep.push(nc({ by: me, t: tx, time: 'Just now' })); o.open = true; o.rf = false; o.rfp = ''; render() }
    else if (v = f.getAttribute('data-ce')) { e.preventDefault(); if (!tx) return; o = find(v); o.t = tx; o.edited = true; o.ed = false; render() }
});
document.addEventListener('change', function (e) { var v = e.target.getAttribute && e.target.getAttribute('data-sort'); if (!v) return; var p = find('p:' + v); p.sort = e.target.value; render() });
reels.forEach(function (r, i) { r.id = 1001 + i; var n = r.likes || 0; r.r = n ? { like: Math.round(n * .7), love: n - Math.round(n * .7) } : {}; r.my = null; r.cm = [] });
reels[0].cm = [nc({ by: 'Rafi', t: 'Very useful tricks!', rep: [{ by: 'Siam', t: 'Thanks Rafi!' }], r: { like: 2 } })];
var AUD = [{ i: '🌍', n: 'Public' }, { i: '👥', n: 'Friends' }, { i: '🔒', n: 'Only me' }], FEEL = ['😊 happy', '😍 loved', '🤓 learning', '💻 coding', '🎉 excited', '🥳 celebrating', '😴 tired'];
function cpModal() {
    var d = draft, nobg = !d.img && !d.vid, big = nobg && d.bg >= 0, has = d.txt.trim() || d.img || d.vid;
    $('modal').innerHTML = '<div class="cphead"><h2>Create post</h2><button class="x2" data-cpx aria-label="Close">✕</button></div>'
        + '<div class="cpuser">' + av(me) + '<div><b>' + esc(me) + '</b>' + (d.feel ? ' <span class="fl">is feeling ' + esc(d.feel) + '</span>' : '') + '<br><button class="aud" data-cpa="aud" aria-label="Audience">' + AUD[d.aud].i + ' ' + AUD[d.aud].n + ' ▾</button></div></div>'
        + '<textarea class="cpt' + (big ? ' big' : '') + '" id="cptxt" maxlength="800" placeholder="What\u2019s on your mind, ' + esc(me) + '?"' + (big ? ' style="background:linear-gradient(160deg,' + BG[d.bg] + ')"' : '') + '>' + esc(d.txt) + '</textarea>'
        + (nobg ? '<div class="sw bgs"><button data-cpb="-1" class="' + (d.bg < 0 ? 'on' : '') + '" style="background:var(--s2)" aria-label="No background">Aa</button>' + BG.map(function (b, i) { return '<button data-cpb="' + i + '" class="' + (d.bg === i ? 'on' : '') + '" style="background:linear-gradient(135deg,' + b + ')" aria-label="Background ' + (i + 1) + '"></button>' }).join('') + '</div>' : '')
        + (d.showFeel ? '<div class="chips">' + FEEL.map(function (f) { return '<button class="chip" data-cpf="' + f + '" aria-pressed="' + (d.feel === f) + '">' + f + '</button>' }).join('') + '</div>' : '')
        + (d.showLink ? '<div class="linkrow on"><input class="in" id="cplink" placeholder="Paste a YouTube, Facebook or Instagram link"><button class="btn g" data-cpa="linkok">Add</button></div>' : '')
        + (d.img || d.vid ? '<div class="cpmedia">' + (d.img ? '<img src="' + d.img + '" alt="Selected photo">' : vid(d.vid)) + '<button class="rmv" data-cpa="rm" aria-label="Remove media">✕</button></div>' : '')
        + '<div class="addbar"><span>Add to your post</span><div><button data-cpa="photo" title="Photo" aria-label="Add photo">🖼</button><button data-cpa="link" title="Video link" aria-label="Add video link">🎬</button><button data-cpa="up" title="Upload video" aria-label="Upload video">🎞</button><button data-cpa="feel" title="Feeling" aria-label="Feeling">😊</button></div></div>'
        + '<button class="btn" id="cpPost" style="width:100%;padding:11px;margin-top:12px"' + (has ? '' : ' disabled') + '>Post</button><input type="file" id="cpimg" accept="image/*" hidden><input type="file" id="cpvid" accept="video/*" hidden>';
    $('ovM').classList.add('on')
}
function cp() { cpModal(); var t = $('cptxt'); if (t) { t.focus(); t.setSelectionRange(t.value.length, t.value.length) } }
$('ovM').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('on') });
document.addEventListener('input', function (e) { if (e.target.id !== 'cptxt') return; draft.txt = e.target.value; $('cpPost').disabled = !(draft.txt.trim() || draft.img || draft.vid) });
document.addEventListener('change', function (e) {
    var id = e.target.id; if (id !== 'cpimg' && id !== 'cpvid') return; var f = e.target.files[0]; if (!f) return;
    if (id === 'cpimg') { var r = new FileReader(); r.onload = function () { draft.img = r.result; draft.vid = null; cp() }; r.readAsDataURL(f) } else { draft.vid = { p: 'file', url: URL.createObjectURL(f) }; draft.img = null; cp() }
});
document.addEventListener('click', function (e) {
    var t = e.target, d;
    if (d = t.closest('[data-cp]')) { var k = d.dataset.cp; draft.showFeel = k === 'feel'; draft.showLink = k === 'vid'; cp(); if (k === 'photo') $('cpimg').click() }
    else if (t.closest('[data-cpx]')) $('ovM').classList.remove('on');
    else if (d = t.closest('[data-cpa]')) {
        var a = d.dataset.cpa;
        if (a === 'photo') $('cpimg').click(); else if (a === 'up') $('cpvid').click();
        else if (a === 'link') { draft.showLink = !draft.showLink; cp() } else if (a === 'feel') { draft.showFeel = !draft.showFeel; cp() }
        else if (a === 'aud') { draft.aud = (draft.aud + 1) % 3; cp() } else if (a === 'rm') { draft.img = null; draft.vid = null; cp() }
        else if (a === 'linkok') { var v = parse($('cplink').value); if (!v) { toast('Use a YouTube, Facebook or Instagram link'); return } draft.vid = v; draft.img = null; draft.showLink = false; cp() }
    }
    else if (d = t.closest('[data-cpb]')) { draft.bg = +d.dataset.cpb; cp() }
    else if (d = t.closest('[data-cpf]')) { draft.feel = draft.feel === d.dataset.cpf ? '' : d.dataset.cpf; cp() }
    else if (t.id === 'cpPost') {
        var g = draft, tx = g.txt.trim(); if (!(tx || g.img || g.vid)) return;
        posts.unshift({ id: nid++, by: me, time: '1 min', txt: tx, img: g.img, vid: g.vid, feel: g.feel, aud: AUD[g.aud].i, bg: (!g.img && !g.vid && g.bg >= 0) ? BG[g.bg] : null, r: {}, my: null, cm: [] });
        pts[me] = (pts[me] || 0) + 10; draft = { img: null, vid: null, txt: '', feel: '', bg: -1, aud: 0 }; $('ovM').classList.remove('on'); tab = 'home'; render(); toast('Posted. +10 points')
    }
});
document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-sr]'); if (!b) return; var st = stories[sIdx], k = b.dataset.sr;
    st.my = k; st.r = st.r || {}; st.r[k] = (st.r[k] || 0) + 1;
    [].forEach.call($('sv').querySelectorAll('[data-sr]'), function (x) { x.classList.toggle('on', x === b) });
    var f = document.createElement('span'); f.className = 'fly'; f.innerHTML = ic(k); f.style.left = (15 + Math.random() * 65) + '%'; $('sv').appendChild(f); setTimeout(function () { f.remove() }, 1000);
    toast('You reacted ' + RM[k].n + ' to ' + st.by + '\u2019s story')
});
document.addEventListener('focusin', function (e) { if (e.target.closest && e.target.closest('#sv .sbar input')) { clearTimeout(tm); $('sv').classList.add('paused') } });
document.addEventListener('focusout', function (e) { if (e.target.closest && e.target.closest('#sv .sbar input') && $('ovS').classList.contains('on')) { $('sv').classList.remove('paused'); clearTimeout(tm); tm = setTimeout(function () { show(sIdx + 1) }, 3000) } });
document.addEventListener('submit', function (e) {
    var f = e.target; if (!f.hasAttribute || !f.hasAttribute('data-sf')) return; e.preventDefault(); var i = f.querySelector('input'), tx = i.value.trim(); if (!tx) return;
    i.value = ''; i.blur(); toast('Reply sent to ' + stories[sIdx].by)
});
document.addEventListener('click', function (e) {
    var t = e.target, d;
    if (d = t.closest('[data-more]')) { var p = find('p:' + d.dataset.more), was = p.menu; posts.forEach(function (x) { x.menu = false }); p.menu = !was; render(); return }
    if (d = t.closest('[data-mn]')) {
        var a = d.dataset.mn.split(':'), id = a[1]; posts.forEach(function (x) { x.menu = false });
        if (a[0] === 'save') { var sp = find('p:' + id); sp.saved = !sp.saved; toast(sp.saved ? 'Post saved' : 'Removed from saved') } else if (a[0] === 'copy') toast('Link copied (preview)');
        else { posts = posts.filter(function (x) { return x.id != id }); toast(a[0] === 'del' ? 'Post deleted' : 'Post hidden') } render(); return
    }
    if (posts.some(function (x) { return x.menu })) { posts.forEach(function (x) { x.menu = false }); render() }
});
render();
