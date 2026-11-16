/* ===== adapter.mock.js ===== */
/* CWM Mock Adapter: in-memory demo data. NOT real messaging; nothing leaves this browser tab.
   A real adapter (Firebase, etc.) must expose the same methods:
   mode, subscribe(cb), send(cid,{t,img,replyTo}), edit(cid,mid,text), remove(cid,mid,'all'|'me'),
   markRead(cid), setTyping(cid,bool),
   openDM(uid)->cid, createGroup(name,uids)->cid, addMembers(cid,uids), leave(cid)
   Snapshot passed to cb: { me:{id,name}, users:{id:{id,name,online,lastActive:ms}},
   convs:[{id,type:'dm'|'group',name,members:[id],admins:[id],unread,typing:[id],
           msgs:[{id,from,t,img,ts,seen,seenBy?:[id],replyTo?:mid,edited?,deleted?,hiddenFor?:[id]}]}] }  (from:'sys' = system line) */
(function (g) {
  'use strict';
  var REPLIES = ['Sounds good 👍', 'Haha nice!', 'Let me check and get back to you.', 'Can you send a screenshot?', 'Great idea, let’s do it.', 'Thanks for sharing!', 'I’ll join the study session tonight.', 'Which library did you use?'];
  function MockAdapter(o) {
    o = o || {};
    var now = Date.now(), MIN = 6e4, H = 36e5, n = 100, subs = [];
    var users = { me: { id: 'me', name: o.name || 'You', online: true, lastActive: now } };
    [['siam', 'Siam', 1], ['rafi', 'Rafi', 1], ['nusrat', 'Nusrat', 0, 25 * MIN], ['tanvir', 'Tanvir', 1], ['mim', 'Mim', 0, 3 * H], ['sabbir', 'Sabbir', 1], ['ayesha', 'Ayesha', 0, 26 * H], ['hasan', 'Hasan', 0, 75 * H]].forEach(function (a) { users[a[0]] = { id: a[0], name: a[1], online: !!a[2], lastActive: now - (a[3] || 0) } });
    function mid() { return 'm' + (n++) }
    function M(f, t, ago) { return { id: mid(), from: f, t: t, img: null, ts: now - ago, seen: true } }
    var convs = [
      { id: 'c1', type: 'dm', members: ['me', 'siam'], unread: 2, typing: [], msgs: [M('me', 'Salam Siam bhai, the OpenCV tutorial was great!', 26 * H), M('siam', 'Thanks! Glad it helped 🙌', 26 * H - 2 * MIN), M('siam', 'Next one will be on PyTorch.', 22 * MIN), M('siam', 'Want to help test it?', 21 * MIN)] },
      { id: 'c2', type: 'dm', members: ['me', 'rafi'], unread: 0, typing: [], msgs: [M('rafi', 'My CNN hit 92% accuracy!', 5 * H), M('me', 'Congrats! Can you share the notebook?', 5 * H - 3 * MIN), M('rafi', 'Sure, sending it tonight.', 4 * H)] },
      { id: 'g1', type: 'group', name: 'ML Study Group', members: ['me', 'siam', 'rafi', 'nusrat', 'tanvir'], admins: ['siam'], unread: 3, typing: [], msgs: [M('siam', 'Reminder: study session at 9 PM.', 3 * H), M('me', 'Count me in!', 150 * MIN), M('nusrat', 'I’ll bring the Pandas notes.', 2 * H), M('rafi', 'Can we cover CNNs too?', 50 * MIN), M('tanvir', '+1 for CNNs', 40 * MIN)] },
      { id: 'g2', type: 'group', name: 'Python Beginners', members: ['me', 'mim', 'sabbir', 'ayesha'], admins: ['me'], unread: 0, typing: [], msgs: [{ id: mid(), from: 'sys', t: 'You created the group “Python Beginners”', ts: now - 48 * H }, M('mim', 'Hi everyone!', 47 * H), M('sabbir', 'Welcome 👋', 46 * H), M('me', 'Post your questions here anytime.', 46 * H - MIN)] },
      { id: 'c3', type: 'dm', members: ['me', 'nusrat'], unread: 1, typing: [], msgs: [M('nusrat', 'Pandas tip: use .query() for readable filters.', 2 * H)] }
    ];
    (function () { var gm = convs[2].msgs; gm[1].replyTo = gm[0].id; gm[4].replyTo = gm[3].id; gm[2].edited = true; gm[0].rx = { '👍': ['rafi', 'nusrat'], '❤️': ['tanvir'] } })();
    function snap() { return { me: users.me, users: users, convs: convs } }
    function emit() { var s = snap(); subs.slice().forEach(function (f) { f(s) }) }
    function get(id) { for (var i = 0; i < convs.length; i++)if (convs[i].id === id) return convs[i]; return null }
    function findm(c, id) { for (var i = 0; i < c.msgs.length; i++)if (c.msgs[i].id === id) return c.msgs[i]; return null }
    function lastMine(c) { for (var i = c.msgs.length - 1; i >= 0; i--)if (c.msgs[i].from === 'me' && !c.msgs[i].deleted) return c.msgs[i].id; return null }
    function sys(c, t) { c.msgs.push({ id: mid(), from: 'sys', t: t, img: null, ts: Date.now(), seen: true }) }
    function reply(c) {
      if (c._busy) return;
      var others = c.members.filter(function (x) { return x !== 'me' });
      if (!others.length) return;
      var r = others[Math.floor(Math.random() * others.length)];
      c._busy = true;
      setTimeout(function () { c.typing = [r]; emit() }, 900);
      setTimeout(function () {
        c.typing = [];
        users[r].online = true; users[r].lastActive = Date.now(); c.msgs.forEach(function (m) { if (m.from === 'me' && !m.seen) { m.seen = true; m.seenBy = [r] } });
        c.msgs.push({ id: mid(), from: r, t: REPLIES[Math.floor(Math.random() * REPLIES.length)], img: null, replyTo: (Math.random() < .35 ? lastMine(c) : null), ts: Date.now(), seen: true });
        c.unread = (c.unread || 0) + 1; c._busy = false; emit();
      }, 2900);
    }
    return {
      mode: 'demo',
      subscribe: function (f) { subs.push(f); f(snap()); return function () { subs = subs.filter(function (x) { return x !== f }) } },
      send: function (cid, p) { var c = get(cid); if (!c) return Promise.reject(new Error('Chat not found')); c.msgs.push({ id: mid(), from: 'me', t: (p.t || '').slice(0, 2000), img: p.img || null, replyTo: p.replyTo || null, ts: Date.now(), seen: false }); emit(); reply(c); return Promise.resolve() },
      markRead: function (cid) { var c = get(cid); if (c && c.unread) { c.unread = 0; emit() } return Promise.resolve() },
      setTyping: function () { return Promise.resolve() },
      openDM: function (uid) {
        var c = convs.filter(function (x) { return x.type === 'dm' && x.members.indexOf(uid) > -1 })[0];
        if (!c) { c = { id: 'c' + (n++), type: 'dm', members: ['me', uid], unread: 0, typing: [], msgs: [], created: Date.now() }; convs.push(c); emit() }
        return Promise.resolve(c.id);
      },
      createGroup: function (name, ids) {
        var c = { id: 'g' + (n++), type: 'group', name: name, members: ['me'].concat(ids), admins: ['me'], unread: 0, typing: [], msgs: [], created: Date.now() };
        sys(c, 'You created the group “' + name + '”'); convs.push(c); emit(); return Promise.resolve(c.id);
      },
      addMembers: function (cid, ids) {
        var c = get(cid); if (!c) return Promise.resolve();
        var add = ids.filter(function (x) { return c.members.indexOf(x) < 0 });
        c.members = c.members.concat(add);
        if (add.length) sys(c, 'You added ' + add.map(function (x) { return users[x].name }).join(', '));
        emit(); return Promise.resolve();
      },
      edit: function (cid, id, t) { var c = get(cid), m = c && findm(c, id); if (!m || m.from !== 'me' || m.deleted) return Promise.reject(new Error('Cannot edit')); m.t = String(t).slice(0, 2000); m.edited = true; emit(); return Promise.resolve() },
      remove: function (cid, id, scope) { var c = get(cid), m = c && findm(c, id); if (!m) return Promise.reject(new Error('Not found')); if (scope === 'all' && m.from === 'me') { m.deleted = true; m.t = ''; m.img = null } else { m.hiddenFor = (m.hiddenFor || []).concat('me') } emit(); return Promise.resolve() },
      react: function (cid, id, e) { var c = get(cid), m = c && findm(c, id); if (!m || m.deleted) return Promise.reject(new Error('Not found')); m.rx = m.rx || {}; var had = m.rx[e] && m.rx[e].indexOf('me') > -1; Object.keys(m.rx).forEach(function (k) { m.rx[k] = m.rx[k].filter(function (x) { return x !== 'me' }); if (!m.rx[k].length) delete m.rx[k] }); if (!had) m.rx[e] = (m.rx[e] || []).concat('me'); emit(); return Promise.resolve() },
      leave: function (cid) { convs = convs.filter(function (c) { return c.id !== cid }); emit(); return Promise.resolve() }
    };
  }
  g.CWMMockAdapter = MockAdapter;
})(window);
