/* ===== messenger.js ===== */
/* CWM Messenger UI. Namespaced: only window.CWMessenger is exposed.
   CWMessenger.mount(rootEl,{adapter,onViewProfile(name),notify(msg)}) ; also open(), close(), openChat(userName).
   All data comes from the adapter (see adapter.mock.js for the interface). */
(function (g) {
   'use strict';
   var CL = ['#38bdf8', '#facc15', '#34d399', '#f472b6', '#a78bfa', '#fb923c'];
   function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] }) }
   function col(n) { var h = 0; n = String(n); for (var i = 0; i < n.length; i++)h += n.charCodeAt(i); return CL[h % CL.length] }
   function ava(n, grp, sz) { sz = sz || 44; return '<span class="cwm-av' + (grp ? ' g' : '') + '" style="background:' + (grp ? 'linear-gradient(135deg,' + col(n) + ',#6366f1)' : col(n)) + ';width:' + sz + 'px;height:' + sz + 'px;font-size:' + Math.round(sz * .4) + 'px">' + esc(String(n).charAt(0).toUpperCase()) + '</span>' }
   function ico(d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>' }
   var IC = {
      close: ico('<path d="M18 6 6 18M6 6l12 12"/>'),
      back: ico('<path d="m15 18-6-6 6-6"/>'),
      edit: ico('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>'),
      info: ico('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'),
      image: ico('<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>'),
      send: ico('<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'),
      add: ico('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>'),
      leave: ico('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>'),
      user: ico('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
      check: ico('<path d="M20 6 9 17l-5-5"/>'),
      seen: ico('<path d="M2 12l5 5L18 6"/><path d="M13 16.5l.5.5L23 6"/>'),
      chat: ico('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
      reply: ico('<path d="M9 17 4 12l5-5"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/>'),
      trash: ico('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),
      copy: ico('<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2"/>')
   };
   IC.fwd = ico('<path d="m15 14 5-5-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>');
   IC.smile = ico('<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>');
   IC.phone = ico('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>');
   IC.video = ico('<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/>');
   IC.videooff = ico('<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/><path d="M2 2l20 20"/>');
   IC.mic = ico('<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>');
   IC.micoff = ico('<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/><path d="M2 2l20 20"/>');
   IC.vol = ico('<path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>');
   function hm(t) { return new Date(t).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }
   function dk(t) { var d = new Date(t); return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() }
   function dl(t) { var n = Date.now(); if (dk(t) === dk(n)) return 'Today'; if (dk(t) === dk(n - 864e5)) return 'Yesterday'; var d = new Date(t); return d.toLocaleDateString([], { month: 'short', day: 'numeric', year: d.getFullYear() === new Date().getFullYear() ? undefined : 'numeric' }) }
   function ago(t) { var s = Math.max(0, (Date.now() - t) / 1000); if (s < 60) return 'just now'; var m = Math.floor(s / 60); if (m < 60) return m + 'm ago'; var h = Math.floor(m / 60); if (h < 24) return h + 'h ago'; return Math.floor(h / 24) + 'd ago' }
   function presence(u) { if (!u) return ''; if (u.online) return 'Active now'; return u.lastActive ? 'Active ' + ago(u.lastActive) : 'Offline' }
   function stamp(t) { var l = dl(t); return l === 'Today' ? hm(t) : l === 'Yesterday' ? l : new Date(t).toLocaleDateString([], { month: 'short', day: 'numeric' }) }

   var A, root, opts = {}, S = { me: { id: 'me', name: 'You' }, users: {}, convs: [] };
   var ui = { cid: null, tab: 'all', q: '', info: false, arm: false, modal: null, sel: [], gname: '', mq: '', pend: null, cnt: {}, force: false, tsent: 0, reply: null, edit: null, act: null };
   function $(s) { return root.querySelector(s) }
   function note(m) { if (opts.notify) opts.notify(m) }
   function cur() { for (var i = 0; i < S.convs.length; i++)if (S.convs[i].id === ui.cid) return S.convs[i]; return null }
   function uname(id) { return (S.users[id] || { name: 'Unknown' }).name }
   function other(c) { for (var i = 0; i < c.members.length; i++)if (c.members[i] !== S.me.id) return S.users[c.members[i]] || null; return null }
   function title(c) { if (c.type === 'group') return c.name; var o = other(c); return o ? o.name : 'Chat' }
   function convAva(c, sz) { return c.type === 'group' ? ava(c.name, 1, sz) : ava(title(c), 0, sz) }
   function lastTs(c) { var m = c.msgs[c.msgs.length - 1]; return m ? m.ts : (c.created || 0) }
   function lastMsg(c) { for (var i = c.msgs.length - 1; i >= 0; i--)if (c.msgs[i].from !== 'sys' && vis(c.msgs[i])) return c.msgs[i]; return null }
   function st(m, c, full) { var s = !!m.seen, tip = s ? (c && c.type === 'group' && m.seenBy && m.seenBy.length ? 'Seen by ' + m.seenBy.map(function (id) { return uname(id) }).join(', ') : 'Seen') : 'Sent, not seen yet'; return '<span class="cwm-st ' + (s ? 'seen' : 'sent') + '" role="img" aria-label="' + esc(tip) + '" title="' + esc(tip) + '">' + (s ? IC.seen : IC.check) + '</span>' }
   function brk(a, b) { return !a || !b || a.from === 'sys' || b.from === 'sys' || a.from !== b.from || dk(a.ts) !== dk(b.ts) || b.ts - a.ts > 6e5 }

   function msgById(c, id) { for (var i = 0; i < c.msgs.length; i++)if (c.msgs[i].id === id) return c.msgs[i]; return null }
   function vis(m) { return !(m.hiddenFor && m.hiddenFor.indexOf(S.me.id) > -1) }
   function snip(m) { return m.deleted ? 'Message deleted' : (m.t || (m.img ? 'Photo' : '')) }
   function curMsg(id) { var c = cur(); return c ? msgById(c, id) : null }
   function build() {
      root.innerHTML =
         '<div class="cwm-top"><button class="cwm-ibtn" data-ma="close" aria-label="Close messenger">' + IC.close + '</button><h2>Community Messenger</h2><span class="cwm-chip" id="cwmMode"></span></div>'
         + '<div class="cwm-app"><section class="cwm-side" aria-label="Chats"><div class="cwm-sh"><h3>Chats</h3><button class="cwm-ibtn" data-ma="new" aria-label="New message or group">' + IC.edit + '</button></div>'
         + '<div class="cwm-search"><input id="cwmQ" type="search" placeholder="Search chats" aria-label="Search chats"></div>'
         + '<div class="cwm-tabs" id="cwmTabs"></div><div class="cwm-list" id="cwmList"></div></section>'
         + '<section class="cwm-main"><div class="cwm-ph" id="cwmPh"><div>' + IC.chat + '<h3>Your messages</h3><p>Select a chat or start a new one. Demo mode: replies are simulated in this browser. Live messaging between people needs a backend.</p></div></div>'
         + '<div class="cwm-chat" id="cwmChat"><div class="cwm-ch" id="cwmHd"></div><div class="cwm-msgs" id="cwmMsgs"></div><div id="cwmCtx"></div><div id="cwmPend"></div>'
         + '<div id="cwmEmo" class="cwm-emo" hidden></div><div class="cwm-comp"><div class="cwm-field"><button class="cwm-fb" data-ma="emoji" aria-label="Emoji" aria-expanded="false">' + IC.smile + '</button>'
         + '<textarea class="cwm-ta" id="cwmTa" rows="1" placeholder="Message" aria-label="Message"></textarea><button class="cwm-fb" data-ma="pick" aria-label="Attach a photo">' + IC.image + '</button><input type="file" id="cwmFile" accept="image/*" hidden></div><button class="cwm-send" id="cwmSb" data-ma="send" aria-label="Send message">' + IC.send + '</button></div></div>'
         + '<aside class="cwm-info" id="cwmInfo" aria-label="Conversation details"></aside></section></div>'
         + '<div class="cwm-ov" id="cwmOv"></div><div class="cwm-call" id="cwmCall" role="dialog" aria-modal="true" aria-label="Call" hidden></div>';
      $('#cwmMode').textContent = A.mode === 'demo' ? 'Demo mode · no server' : 'Live';
   }

   function paintTabs() { $('#cwmTabs').innerHTML = [['all', 'All'], ['unread', 'Unread'], ['groups', 'Groups']].map(function (t) { return '<button data-mt="' + t[0] + '" class="' + (ui.tab === t[0] ? 'on' : '') + '">' + t[1] + '</button>' }).join('') }

   function row(c) {
      var m = lastMsg(c), o = c.type === 'dm' ? other(c) : null, typ = c.typing && c.typing.length;
      var pv = typ ? 'typing…' : !m ? 'No messages yet' : ((m.from === S.me.id ? 'You: ' : (c.type === 'group' ? uname(m.from) + ': ' : '')) + (m.deleted ? 'Message deleted' : (m.t || 'Sent a photo')));
      return '<button class="cwm-row' + (c.id === ui.cid ? ' on' : '') + (c.unread ? ' un' : '') + '" data-mc="' + esc(c.id) + '"><span class="cwm-avw">' + convAva(c, 44) + (o && o.online ? '<i class="cwm-dot"></i>' : '') + '</span>'
         + '<span class="cwm-rt"><b>' + esc(title(c)) + '</b><small' + (typ ? ' class="ty"' : '') + '>' + esc(pv) + '</small></span>'
         + '<span class="cwm-rm"><span>' + (m ? stamp(m.ts) : '') + (m && m.from === S.me.id ? ' ' + st(m, c) : '') + '</span>' + (c.unread ? '<i class="cwm-bd">' + c.unread + '</i>' : '') + '</span></button>'
   }

   function paintList() {
      var q = ui.q.trim().toLowerCase();
      var L = S.convs.filter(function (c) {
         if (q && title(c).toLowerCase().indexOf(q) < 0) return false;
         if (ui.tab === 'unread') return c.unread > 0;
         if (ui.tab === 'groups') return c.type === 'group';
         return true
      }).sort(function (a, b) { return lastTs(b) - lastTs(a) });
      $('#cwmList').innerHTML = L.length ? L.map(row).join('') : '<div class="cwm-empty">' + (q ? 'No chats match your search.' : ui.tab === 'unread' ? 'No unread messages.' : ui.tab === 'groups' ? 'No group chats yet.' : 'No chats yet. Use the pencil button to start one.') + '</div>'
   }

   function paintBadge() { var b = document.getElementById('cwmBadge'); if (!b) return; var n = 0; S.convs.forEach(function (c) { n += c.unread || 0 }); b.textContent = n > 9 ? '9+' : n; b.hidden = !n }

   function paintThread() {
      var c = cur(), ch = $('#cwmChat'), ph = $('#cwmPh');
      if (!c) { ch.classList.remove('on'); ph.style.display = ''; return }
      ch.classList.add('on'); ph.style.display = 'none';
      var o = c.type === 'dm' ? other(c) : null, typ = c.typing && c.typing.length;
      var stx = typ ? 'typing…' : c.type === 'group' ? c.members.length + ' members' : presence(o);
      $('#cwmHd').innerHTML = '<button class="cwm-ibtn cwm-back" data-ma="back" aria-label="Back to chats">' + IC.back + '</button><span class="cwm-avw">' + convAva(c, 40) + (o && o.online ? '<i class="cwm-dot"></i>' : '') + '</span><div class="t"><b>' + esc(title(c)) + '</b><small' + (typ ? ' class="ty"' : '') + '>' + esc(stx) + '</small></div><button class="cwm-ibtn" data-ma="call:voice" aria-label="Start voice call" title="Voice call">' + IC.phone + '</button><button class="cwm-ibtn" data-ma="call:video" aria-label="Start video call" title="Video call">' + IC.video + '</button><button class="cwm-ibtn" data-ma="info" aria-label="Conversation details">' + IC.info + '</button>';
      var el = $('#cwmMsgs'), near = el.scrollHeight - el.scrollTop - el.clientHeight < 140, h = '', ms = c.msgs.filter(vis), me = S.me.id;
      ms.forEach(function (m, i) {
         var p = ms[i - 1], n = ms[i + 1];
         if (!p || dk(p.ts) !== dk(m.ts)) h += '<div class="cwm-day">' + dl(m.ts) + '</div>';
         if (m.from === 'sys') { h += '<div class="cwm-sys">' + esc(m.t) + '</div>'; return }
         var f = brk(p, m), l = brk(m, n), mine = m.from === me, b = '', q = '', rl = '', id = esc(m.id);
         if (m.deleted) { b = '<div class="cwm-b del">' + (mine ? 'You deleted this message' : esc(uname(m.from)) + ' deleted this message') + '</div>' }
         else {
            if (m.replyTo) {
               var r = msgById(c, m.replyTo);
               rl = '<span class="cwm-rl">' + IC.reply + (mine ? 'You replied to ' + (r && r.from === me ? 'yourself' : esc(r ? uname(r.from) : 'a message')) : esc(uname(m.from)) + ' replied to ' + (r && r.from === me ? 'you' : esc(r ? uname(r.from) : 'a message'))) + '</span>';
               q = '<button class="cwm-q" data-ma="jump:' + esc(m.replyTo) + '" aria-label="Go to original message"><b>' + (r ? (r.from === me ? 'You' : esc(uname(r.from))) : 'Message') + '</b><span>' + esc(r ? snip(r) : 'Original message unavailable') + '</span></button>'
            }
            if (m.img) b += '<div class="cwm-b img"><img src="' + esc(m.img) + '" alt="Photo sent in chat"></div>';
            if (m.t) b += '<div class="cwm-b">' + esc(m.t) + (mine ? '<span class="cwm-tk">' + (m.edited ? 'Edited ' : '') + hm(m.ts) + st(m, c) + '</span>' : '') + '</div>'
         }
         var rxh = '', pk = '';
         if (m.rx && !m.deleted) { var ks = Object.keys(m.rx).filter(function (e) { return m.rx[e] && m.rx[e].length }); if (ks.length) rxh = '<span class="cwm-rxs">' + ks.map(function (e) { var u = m.rx[e], mi = u.indexOf(me) > -1, nm = u.map(function (x) { return uname(x) }).join(', '); return '<button class="cwm-rxc' + (mi ? ' mine' : '') + '" data-ma="react:' + id + '|' + e + '" aria-label="' + e + ' reaction by ' + esc(nm) + '" title="' + esc(nm) + '">' + e + (u.length > 1 ? '<i>' + u.length + '</i>' : '') + '</button>' }).join('') + '</span>' }
         if (ui.rp === m.id && !m.deleted) pk = '<span class="cwm-rpk" role="toolbar" aria-label="Pick a reaction">' + ['👍', '❤️', '😂', '😮', '😢', '🙏'].map(function (e) { var on = m.rx && m.rx[e] && m.rx[e].indexOf(me) > -1; return '<button class="' + (on ? 'on' : '') + '" data-ma="react:' + id + '|' + e + '" aria-label="React ' + e + '">' + e + '</button>' }).join('') + '</span>';
         var acts = m.deleted ? '' : '<span class="cwm-acts" role="toolbar" aria-label="Message actions"><button data-ma="rpick:' + id + '" aria-label="React" title="React">' + IC.smile + '</button><button data-ma="reply:' + id + '" aria-label="Reply" title="Reply">' + IC.reply + '</button>' + (mine && m.t ? '<button data-ma="edit:' + id + '" aria-label="Edit message" title="Edit">' + IC.edit + '</button>' : '') + (m.t ? '<button data-ma="copy:' + id + '" aria-label="Copy text" title="Copy">' + IC.copy + '</button>' : '') + ((m.t || m.img) ? '<button data-ma="fwd:' + id + '" aria-label="Forward message" title="Forward">' + IC.fwd + '</button>' : '') + '<button class="dng" data-ma="del:' + id + '" aria-label="Delete message" title="Delete">' + IC.trash + '</button></span>';
         var meta = l && !(mine && m.t && !m.deleted) ? '<span class="cwm-meta">' + hm(m.ts) + (m.edited && !m.deleted ? ' · Edited' : '') + (mine && !m.deleted ? ' ' + st(m, c) : '') + '</span>' : '';
         h += '<div class="cwm-m ' + (mine ? 'me' : 'th') + (f ? ' first' : '') + (l ? ' last' : '') + (ui.act === m.id ? ' act' : '') + (ui.rp === m.id ? ' rpo' : '') + '" data-mid="' + id + '">' + (mine ? '' : '<span class="cwm-mav">' + (l ? ava(uname(m.from), 0, 28) : '') + '</span>')
            + '<div class="cwm-bw">' + acts + pk + (!mine && f && c.type === 'group' ? '<span class="cwm-sn">' + esc(uname(m.from)) + '</span>' : '') + rl + q + b + rxh + meta + '</div></div>'
      });
      if (typ) h += '<div class="cwm-m th first last"><span class="cwm-mav">' + ava(uname(c.typing[0]), 0, 28) + '</span><div class="cwm-bw"><div class="cwm-b cwm-dots" aria-label="' + esc(uname(c.typing[0])) + ' is typing"><i></i><i></i><i></i></div></div></div>';
      if (!ms.length) h = '<div class="cwm-empty">No messages yet. Say hi 👋</div>';
      el.innerHTML = h;
      var cnt = ms.length + (typ ? 1 : 0);
      if (ui.force || near || ui.cnt[c.id] === undefined) el.scrollTop = el.scrollHeight;
      ui.cnt[c.id] = cnt; ui.force = false
   }

   function paintComposer() {
      var x = $('#cwmCtx'), c = cur(), h = '', m;
      if (c && ui.edit && (m = msgById(c, ui.edit))) h = '<div class="cwm-ctx">' + IC.edit + '<div><b>Editing message</b><span>' + esc(snip(m)) + '</span></div><button class="cwm-ibtn" data-ma="cancelctx" aria-label="Cancel editing">' + IC.close + '</button></div>';
      else if (c && ui.reply && (m = msgById(c, ui.reply))) h = '<div class="cwm-ctx">' + IC.reply + '<div><b>Replying to ' + (m.from === S.me.id ? 'yourself' : esc(uname(m.from))) + '</b><span>' + esc(snip(m)) + '</span></div><button class="cwm-ibtn" data-ma="cancelctx" aria-label="Cancel reply">' + IC.close + '</button></div>';
      x.innerHTML = h;
      var sb = $('#cwmSb'); sb.innerHTML = ui.edit ? IC.check : IC.send; sb.setAttribute('aria-label', ui.edit ? 'Save edit' : 'Send message')
   }

   function paintPend() { $('#cwmPend').innerHTML = ui.pend ? '<div class="cwm-pend"><div class="cwm-th"><img src="' + esc(ui.pend) + '" alt="Photo to send"><button data-ma="unpend" aria-label="Remove photo">×</button></div></div>' : '' }

   function paintInfo() {
      var c = cur(), p = $('#cwmInfo');
      if (!c || !ui.info) { p.classList.remove('on'); return }
      p.classList.add('on');
      var o = c.type === 'dm' ? other(c) : null;
      var h = '<button class="cwm-ibtn cwm-xi" data-ma="info" aria-label="Close details">' + IC.close + '</button><div class="cwm-ic">' + convAva(c, 84) + '<h3>' + esc(title(c)) + '</h3><small>' + (c.type === 'group' ? c.members.length + ' members' : presence(o)) + '</small></div>';
      if (c.type === 'dm') h += '<button class="cwm-act" data-ma="profile">' + IC.user + 'View profile</button>';
      else h += '<h4>Members</h4>' + c.members.map(function (id) { return '<div class="cwm-mem">' + ava(uname(id), 0, 36) + '<span>' + esc(uname(id)) + (id === S.me.id ? ' (You)' : '') + '</span>' + ((c.admins || []).indexOf(id) > -1 ? '<em>Admin</em>' : '') + '</div>' }).join('')
         + '<button class="cwm-act" data-ma="add">' + IC.add + 'Add people</button><button class="cwm-act dng" data-ma="leave">' + IC.leave + (ui.arm ? 'Tap again to leave' : 'Leave group') + '</button>';
      p.innerHTML = h
   }

   function paintML() {
      var l = $('#cwmMl'); if (!l) return;
      var c = ui.modal === 'add' ? cur() : null, q = ui.mq.trim().toLowerCase(), multi = ui.modal !== 'dm';
      var us = Object.keys(S.users).filter(function (id) { return id !== S.me.id && (!c || c.members.indexOf(id) < 0) && S.users[id].name.toLowerCase().indexOf(q) > -1 });
      l.innerHTML = us.length ? us.map(function (id) {
         var u = S.users[id], on = ui.sel.indexOf(id) > -1;
         return '<button class="cwm-u" data-mu="' + esc(id) + '"' + (multi ? ' role="checkbox" aria-checked="' + on + '"' : '') + '><span class="cwm-avw">' + ava(u.name, 0, 40) + (u.online ? '<i class="cwm-dot"></i>' : '') + '</span><span>' + esc(u.name) + '<small class="cwm-sub">' + esc(presence(u)) + '</small></span>' + (multi ? '<span class="cwm-ck' + (on ? ' on' : '') + '">' + (on ? IC.check : '') + '</span>' : '') + '</button>'
      }).join('') : '<div class="cwm-empty">No people found.</div>';
      paintGo()
   }
   function paintGo() { var b = $('#cwmGo'); if (!b) return; var n = ui.sel.length, gr = ui.modal === 'group'; b.textContent = (gr ? 'Create group' : 'Add to group') + (n ? ' (' + n + ')' : ''); b.disabled = gr ? !(ui.gname.trim() && n >= 2) : n < 1 }

   function openModal(m) {
      ui.modal = m; ui.sel = []; ui.mq = ''; ui.gname = '';
      var seg = m === 'add' ? '<h3>Add people</h3>' : '<div class="cwm-seg"><button data-ma="mm:dm" class="' + (m === 'dm' ? 'on' : '') + '">New message</button><button data-ma="mm:group" class="' + (m === 'group' ? 'on' : '') + '">New group</button></div>';
      var o = $('#cwmOv');
      o.innerHTML = '<div class="cwm-md" role="dialog" aria-modal="true" aria-label="' + (m === 'add' ? 'Add people' : m === 'group' ? 'New group' : 'New message') + '"><div class="cwm-mh">' + seg + '<button class="cwm-ibtn" data-ma="mclose" aria-label="Close">' + IC.close + '</button></div>'
         + (m === 'group' ? '<input class="cwm-in" id="cwmGn" maxlength="40" placeholder="Group name" aria-label="Group name"><p class="cwm-hint">Pick at least 2 people.</p>' : '')
         + '<input class="cwm-in" id="cwmMq" placeholder="Search people" aria-label="Search people"><div class="cwm-ml" id="cwmMl"></div>'
         + (m === 'dm' ? '' : '<button class="cwm-primary" id="cwmGo" data-ma="go" disabled></button>') + '</div>';
      o.classList.add('on'); paintML();
      var f = m === 'group' ? $('#cwmGn') : $('#cwmMq'); if (f) f.focus()
   }
   function closeModal() { ui.modal = null; var o = $('#cwmOv'); o.classList.remove('on'); o.innerHTML = '' }

   function paint() {
      if (ui.cid && !cur()) { ui.cid = null; ui.info = false; root.classList.remove('open') }
      paintList(); paintBadge(); paintThread(); paintInfo();
      var c = cur(); if (c && c.unread && root.classList.contains('on')) A.markRead(c.id)
   }

   function open() { root.classList.add('on'); document.body.style.overflow = 'hidden'; paint(); if (!ui.cid && !matchMedia('(pointer:coarse)').matches) { var q = $('#cwmQ'); if (q) q.focus() } }
   function close() { if (ui.call) endCall(); if (ui.modal) closeModal(); root.classList.remove('on'); document.body.style.overflow = '' }
   function openConv(id) { if (ui.cid !== id) { ui.reply = null; ui.edit = null; ui.act = null; var ta0 = $('#cwmTa'); ta0.value = ''; ta0.style.height = '40px' } ui.cid = id; ui.info = false; ui.arm = false; ui.force = true; root.classList.add('open'); ui.pend = null; paintPend(); paintComposer(); paint(); if (!matchMedia('(pointer:coarse)').matches) $('#cwmTa').focus() }
   function back() { ui.cid = null; ui.info = false; root.classList.remove('open'); paint() }
   function openChat(name) {
      var id = null; Object.keys(S.users).forEach(function (k) { if (k !== S.me.id && S.users[k].name.toLowerCase() === String(name).toLowerCase()) id = k });
      if (!id) { note('That person isn’t in the demo contacts.'); return }
      A.openDM(id).then(function (cid) { open(); openConv(cid) })
   }
   function typing() { if (!A.setTyping || !ui.cid) return; var t = Date.now(); if (t - ui.tsent > 2500) { ui.tsent = t; A.setTyping(ui.cid, true) } }
   function resize(ta) { ta.style.height = '40px'; ta.style.height = Math.min(ta.scrollHeight, 120) + 'px' }
   function send() {
      var ta = $('#cwmTa'), t = ta.value.trim();
      if (!ui.cid) return;
      if (ui.edit) {
         var id = ui.edit, om = curMsg(id);
         if (!t) { note('A message can’t be empty. Use delete instead.'); return }
         ui.edit = null; ui.act = null; ta.value = ''; ta.style.height = '40px'; paintComposer();
         if (om && om.t === t) { paintThread(); return }
         A.edit(ui.cid, id, t).catch(function () { note('Could not edit the message.') }); ta.focus(); return
      }
      if (!t && !ui.pend) return;
      var p = { t: t, img: ui.pend, replyTo: ui.reply };
      ta.value = ''; ta.style.height = '40px'; ui.pend = null; ui.reply = null; ui.act = null; paintPend(); paintComposer(); ui.force = true;
      A.send(ui.cid, p).catch(function () { note('Message could not be sent.') }); ta.focus()
   }
   function startReply(id) { var m = curMsg(id); if (!m || m.deleted) return; var ta = $('#cwmTa'); if (ui.edit) { ui.edit = null; ta.value = ''; ta.style.height = '40px' } ui.reply = id; ui.act = null; paintComposer(); paintThread(); ta.focus() }
   function startEdit(id) { var m = curMsg(id), ta = $('#cwmTa'); if (!m || m.from !== S.me.id || m.deleted || !m.t) return; ui.reply = null; ui.edit = id; ui.act = null; ta.value = m.t; resize(ta); paintComposer(); paintThread(); ta.focus() }
   function cancelCtx() { var ta = $('#cwmTa'); if (ui.edit) { ta.value = ''; ta.style.height = '40px' } ui.reply = null; ui.edit = null; paintComposer(); paintThread() }
   function copyMsg(id) {
      var m = curMsg(id); if (!m || !m.t) return;
      function done() { note('Copied to clipboard') }
      function fb() { var t = document.createElement('textarea'); t.value = m.t; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done() } catch (e) { note('Copy failed') } t.remove() }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(m.t).then(done, fb); else fb()
   }
   function confirmDel(id) {
      var m = curMsg(id); if (!m || m.deleted) return;
      var mine = m.from === S.me.id, o = $('#cwmOv'); ui.modal = 'del';
      o.innerHTML = '<div class="cwm-md" role="alertdialog" aria-modal="true" aria-label="Delete message"><h3>Delete message?</h3><p class="cwm-hint">' + (mine ? 'Delete for everyone removes it for all members of this chat. Delete for you removes it only from your view.' : 'This removes the message only from your view. Other people will still see it.') + '</p><div class="cwm-prev">' + esc(snip(m)) + '</div>'
         + (mine ? '<button class="cwm-primary dng" data-ma="delall:' + esc(id) + '">Delete for everyone</button>' : '') + '<button class="cwm-primary alt" data-ma="delme:' + esc(id) + '">Delete for you</button><button class="cwm-primary ghost" data-ma="mclose">Cancel</button></div>';
      o.classList.add('on')
   }
   var callTm = null, callIv = null;
   function fmt(s) { var m = Math.floor(s / 60), x = s % 60; return m + ':' + (x < 10 ? '0' : '') + x }
   function paintCall(f) {
      var k = ui.call, el = $('#cwmCall');
      if (!k) { el.hidden = true; el.innerHTML = ''; return }
      var c = null; S.convs.forEach(function (x) { if (x.id === k.cid) c = x });
      if (!c) { endCall(); return }
      var on = k.state === 'on', vd = k.type === 'video', grp = c.type === 'group';
      var stx = k.state === 'miss' ? 'No answer' : on ? fmt(Math.floor((Date.now() - k.t0) / 1000)) : (grp ? 'Calling group\u2026' : 'Ringing\u2026');
      function cb(a, lbl, i, cls, p) { return '<button class="cwm-cb' + (cls ? ' ' + cls : '') + '" data-ma="' + a + '"' + (p !== undefined ? ' aria-pressed="' + p + '"' : '') + '><span>' + i + '</span>' + lbl + '</button>' }
      el.hidden = false;
      el.innerHTML = '<div class="cwm-ctop"><span class="cwm-chip">Demo call \u00b7 no real audio or video</span></div><div class="cwm-cmid"><div class="cwm-cav' + (on || k.state === 'miss' ? '' : ' ring') + '">' + convAva(c, 120) + '</div><h2 class="cwm-cn">' + esc(title(c)) + '</h2><p class="cwm-cs" id="cwmCs" role="status">' + stx + '</p>' + (vd && on ? '<div class="cwm-self">' + (k.cam ? ava(S.me.name, 0, 48) + '<small>You</small>' : '<small>Camera off</small>') + '</div>' : '') + '</div><div class="cwm-cc">' + cb('cmute', k.mute ? 'Unmute' : 'Mute', k.mute ? IC.micoff : IC.mic, k.mute ? 'on' : '') + (vd ? cb('ccam', k.cam ? 'Camera off' : 'Camera on', k.cam ? IC.video : IC.videooff, k.cam ? '' : 'on') : '') + cb('cspk', 'Speaker', IC.vol, k.spk ? 'on' : '', !!k.spk) + cb('cend', 'End call', IC.phone, 'end') + '</div>';
      if (f) { var b = el.querySelector('[data-ma="' + f + '"]'); if (b) b.focus() }
   }
   function startCall(type) {
      if (ui.call) return; var c = cur(); if (!c) return;
      ui.call = { cid: c.id, type: type, state: 'ringing', t0: 0, mute: false, cam: type === 'video', spk: type === 'video' };
      paintCall('cend');
      var o = c.type === 'dm' ? other(c) : null;
      callTm = setTimeout(function () {
         if (!ui.call) return;
         if (o && !o.online) { ui.call.state = 'miss'; paintCall('cend'); callTm = setTimeout(endCall, 2000); return }
         ui.call.state = 'on'; ui.call.t0 = Date.now(); paintCall('cend')
      }, 3200);
      callIv = setInterval(function () { var k = ui.call, e = document.getElementById('cwmCs'); if (k && k.state === 'on' && e) e.textContent = fmt(Math.floor((Date.now() - k.t0) / 1000)) }, 1000)
   }
   function endCall() {
      clearTimeout(callTm); clearInterval(callIv); var k = ui.call; ui.call = null; paintCall();
      if (k && k.state === 'on') note('Call ended \u00b7 ' + fmt(Math.floor((Date.now() - k.t0) / 1000))); else if (k && k.state === 'ringing') note('Call cancelled')
   }
   function openFwd(id) {
      var m = curMsg(id); if (!m || m.deleted) return;
      var o = $('#cwmOv'); ui.modal = 'fwd';
      var L = S.convs.slice().sort(function (a, b) { return lastTs(b) - lastTs(a) });
      o.innerHTML = '<div class="cwm-md" role="dialog" aria-modal="true" aria-label="Forward message"><div class="cwm-mh"><h3>Forward to</h3><button class="cwm-ibtn" data-ma="mclose" aria-label="Close">' + IC.close + '</button></div><div class="cwm-prev">' + esc(snip(m)) + '</div><div class="cwm-ml">' + L.map(function (c) { return '<button class="cwm-u" data-ma="fwdto:' + esc(c.id) + '|' + esc(id) + '"><span class="cwm-avw">' + convAva(c, 40) + '</span><span>' + esc(title(c)) + '<small class="cwm-sub">' + (c.type === 'group' ? c.members.length + ' members' : 'Send') + '</small></span></button>' }).join('') + '</div></div>';
      o.classList.add('on')
   }
   function doFwd(v) {
      var a = v.split('|'), m = curMsg(a[1]); closeModal(); ui.act = null;
      if (!m || m.deleted) return;
      if (a[0] === ui.cid) ui.force = true;
      A.send(a[0], { t: m.t, img: m.img, replyTo: null }).then(function () { note('Message forwarded') }, function () { note('Could not forward the message.') })
   }
   function doDel(id, scope) {
      closeModal();
      if (ui.reply === id) ui.reply = null;
      if (ui.edit === id) { ui.edit = null; var ta = $('#cwmTa'); ta.value = ''; ta.style.height = '40px' }
      ui.act = null; paintComposer();
      A.remove(ui.cid, id, scope).catch(function () { note('Could not delete the message.') })
   }
   function jump(id) {
      var els = $('#cwmMsgs').querySelectorAll('[data-mid]'), t = null;
      [].forEach.call(els, function (x) { if (x.getAttribute('data-mid') === id) t = x });
      if (!t) { note('The original message is no longer available.'); return }
      t.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' });
      t.classList.add('hl'); setTimeout(function () { t.classList.remove('hl') }, 1600)
   }
   function pick(id) {
      if (ui.modal === 'dm') { A.openDM(id).then(function (cid) { closeModal(); openConv(cid) }); return }
      var i = ui.sel.indexOf(id); if (i < 0) ui.sel.push(id); else ui.sel.splice(i, 1); paintML()
   }
   function go() {
      var ids = ui.sel.slice();
      if (ui.modal === 'group') { var nm = ui.gname.trim(); if (!nm || ids.length < 2) return; A.createGroup(nm, ids).then(function (cid) { closeModal(); openConv(cid) }) }
      else if (ui.modal === 'add' && cur()) { A.addMembers(cur().id, ids).then(closeModal) }
   }
   function leave() {
      if (!ui.arm) { ui.arm = true; paintInfo(); setTimeout(function () { ui.arm = false; paintInfo() }, 3000); return }
      var id = ui.cid; ui.arm = false; A.leave(id)
   }
   function act(a) {
      var ix = a.indexOf(':');
      if (ix > 0) {
         var k = a.slice(0, ix), v = a.slice(ix + 1);
         if (k === 'mm') { openModal(v); return }
         if (k === 'reply') { startReply(v); return }
         if (k === 'edit') { startEdit(v); return }
         if (k === 'copy') { copyMsg(v); return }
         if (k === 'del') { confirmDel(v); return }
         if (k === 'jump') { jump(v); return }
         if (k === 'fwd') { openFwd(v); return }
         if (k === 'fwdto') { doFwd(v); return }
         if (k === 'call') { startCall(v); return }
         if (k === 'rpick') { ui.rp = ui.rp === v ? null : v; ui.act = v; paintThread(); return }
         if (k === 'react') { var q = v.split('|'); ui.rp = null; A.react(q[0] ? ui.cid : ui.cid, q[0], q[1]).catch(function () { note('Could not add the reaction.') }); return }
         if (k === 'delall' || k === 'delme') { doDel(v, k === 'delall' ? 'all' : 'me'); return }
      }
      switch (a) {
         case 'close': close(); break;
         case 'new': openModal('dm'); break;
         case 'pick': $('#cwmFile').click(); break;
         case 'unpend': ui.pend = null; paintPend(); break;
         case 'send': send(); break;
         case 'back': back(); break;
         case 'info': ui.info = !ui.info; ui.arm = false; paintInfo(); break;
         case 'profile': var c = cur(), o = c && other(c); if (o && opts.onViewProfile) { close(); opts.onViewProfile(o.name) } break;
         case 'add': openModal('add'); break;
         case 'leave': leave(); break;
         case 'mclose': closeModal(); break;
         case 'go': go(); break;
         case 'cancelctx': cancelCtx(); break;
         case 'cend': endCall(); break;
         case 'cmute': if (ui.call) { ui.call.mute = !ui.call.mute; paintCall('cmute') } break;
         case 'ccam': if (ui.call) { ui.call.cam = !ui.call.cam; paintCall('ccam') } break;
         case 'cspk': if (ui.call) { ui.call.spk = !ui.call.spk; paintCall('cspk') } break
      }
   }

   function bind() {
      root.addEventListener('click', function (e) {
         var t = e.target, d;
         if (d = t.closest('[data-ma]')) { act(d.getAttribute('data-ma')); return }
         if (d = t.closest('[data-mc]')) { openConv(d.getAttribute('data-mc')); return }
         if (d = t.closest('[data-mt]')) { ui.tab = d.getAttribute('data-mt'); paintTabs(); paintList(); return }
         if (d = t.closest('[data-mu]')) { pick(d.getAttribute('data-mu')); return }
         var mm = t.closest('.cwm-m[data-mid]');
         if (mm && !t.closest('button')) { var mid = mm.getAttribute('data-mid'), was = mm.classList.contains('act');[].forEach.call(root.querySelectorAll('.cwm-m.act'), function (x) { x.classList.remove('act') }); ui.act = was ? null : mid; if (!was) mm.classList.add('act'); if (ui.rp) { ui.rp = null; paintThread() } return }
         if (t.id === 'cwmOv') closeModal()
      });
      root.addEventListener('input', function (e) {
         var t = e.target;
         if (t.id === 'cwmQ') { ui.q = t.value; paintList() }
         else if (t.id === 'cwmTa') { t.style.height = '40px'; t.style.height = Math.min(t.scrollHeight, 120) + 'px'; typing() }
         else if (t.id === 'cwmMq') { ui.mq = t.value; paintML() }
         else if (t.id === 'cwmGn') { ui.gname = t.value; paintGo() }
      });
      root.addEventListener('keydown', function (e) { if (e.target.id === 'cwmTa' && e.key === 'Escape' && (ui.edit || ui.reply)) { e.stopPropagation(); cancelCtx(); return } if (e.target.id === 'cwmTa' && e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); send() } });
      root.addEventListener('change', function (e) {
         if (e.target.id !== 'cwmFile') return;
         var f = e.target.files[0]; e.target.value = '';
         if (!f) return;
         if (!/^image\//.test(f.type)) { note('Please choose an image file.'); return }
         if (f.size > 5e6) { note('Image is too large (max 5 MB).'); return }
         var r = new FileReader(); r.onload = function () { ui.pend = r.result; paintPend() }; r.readAsDataURL(f)
      });
      document.addEventListener('click', function (e) {
         var d;
         if (e.target.closest('#cwmOpen')) open();
         else if (d = e.target.closest('[data-msg]')) openChat(d.getAttribute('data-msg'))
      });
      document.addEventListener('keydown', function (e) {
         if (e.key !== 'Escape' || !root.classList.contains('on')) return;
         if (ui.call) { endCall(); return }
         if (ui.modal) closeModal();
         else if (ui.info) { ui.info = false; paintInfo() }
         else if (ui.cid && matchMedia('(max-width:800px)').matches) back();
         else close()
      })
   }

   g.CWMessenger = {
      mount: function (el, o) { opts = o || {}; A = opts.adapter; root = el; build(); paintTabs(); bind(); A.subscribe(function (s) { S = s; paint() }); setInterval(function () { if (root.classList.contains('on')) { paintList(); paintThread(); paintInfo() } }, 60000) },
      open: function () { open() }, close: function () { close() }, openChat: function (n) { openChat(n) }
   };
})(window);
;
CWMessenger.mount(document.getElementById('cwmRoot'), { adapter: CWMMockAdapter({ name: typeof me !== 'undefined' ? me : 'You' }), notify: toast, onViewProfile: function (n) { pu = n; tab = 'profile'; ptab = 'posts'; render() } });
