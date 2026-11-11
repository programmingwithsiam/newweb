var $ = function (i) { return document.getElementById(i); };
var CT = [["BD", "Bangladesh", "🇧🇩", "+880", 10, "1XXXXXXXXX"], ["IN", "India", "🇮🇳", "+91", 10, "98XXXXXXXX"], ["PK", "Pakistan", "🇵🇰", "+92", 10, "3XXXXXXXXX"], ["NP", "Nepal", "🇳🇵", "+977", 10, "98XXXXXXXX"], ["LK", "Sri Lanka", "🇱🇰", "+94", 9, "7XXXXXXXX"], ["AE", "UAE", "🇦🇪", "+971", 9, "5XXXXXXXX"], ["SA", "Saudi Arabia", "🇸🇦", "+966", 9, "5XXXXXXXX"], ["MY", "Malaysia", "🇲🇾", "+60", 9, "1XXXXXXXX"], ["SG", "Singapore", "🇸🇬", "+65", 8, "9XXXXXXX"], ["GB", "United Kingdom", "🇬🇧", "+44", 10, "7XXXXXXXXX"], ["US", "United States", "🇺🇸", "+1", 10, "2XXXXXXXXX"], ["CA", "Canada", "🇨🇦", "+1", 10, "4XXXXXXXXX"], ["AU", "Australia", "🇦🇺", "+61", 9, "4XXXXXXXX"], ["DE", "Germany", "🇩🇪", "+49", 10, "15XXXXXXXX"], ["QA", "Qatar", "🇶🇦", "+974", 8, "3XXXXXXX"], ["KW", "Kuwait", "🇰🇼", "+965", 8, "5XXXXXXX"], ["OM", "Oman", "🇴🇲", "+968", 8, "9XXXXXXX"]];
var NO = "01644171751";
function lg(bg, i) { return '<svg viewBox="0 0 72 40"><rect width="72" height="40" fill="' + bg + '"/><g transform="translate(7 0)">' + i + '</g></svg>' }
var LG = {
  bKash: lg("#fff", '<path d="M4 10l11 4-4 4.500 9 2-6.500 4 5.500 2.500-12.500 1 2.500-7-5.500-3z" fill="#e2136e"/><text x="23" y="26" font-family="Arial,sans-serif" font-weight="700" font-style="italic" font-size="12" fill="#e2136e">bKash</text>'),
  Rocket: lg("#8c3494", '<text x="29" y="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-style="italic" font-size="13" fill="#fff">Rocket</text><path d="M6 31h46" stroke="#f5a3ff" stroke-width="2"/>'),
  Nagad: lg("#fff", '<rect x="4" y="9" width="8" height="22" rx="3" fill="#f6921e"/><rect x="14" y="9" width="8" height="22" rx="3" fill="#ed1c24"/><text x="26" y="26" font-family="Arial,sans-serif" font-weight="800" font-size="12" fill="#e8501b">nagad</text>'),
  Bank: lg("#1d4ed8", '<path d="M29 8l17 8H12zM15 18h4v12h-4zm8 0h4v12h-4zm8 0h4v12h-4zm8 0h4v12h-4zM11 32h36v3H11z" fill="#fff"/>'),
  Card: lg("#fff", '<text x="29" y="26" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-style="italic" font-size="17" fill="#1a1f71">VISA</text>'),
  PayPal: lg("#fff", '<text x="29" y="26" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-style="italic" font-size="14"><tspan fill="#003087">Pay</tspan><tspan fill="#009cde">Pal</tspan></text>'),
  UPI: lg("#fff", '<text x="22" y="26" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="15" fill="#3d3d3d">UPI</text><path d="M38 10l8 10-8 10zM44 10l8 10-8 10z" fill="#097939"/><path d="M38 10l8 10-8 10z" fill="#ed752e"/>')
};
var usd = "$" + Math.round(4302 / 122);
var M = {
  bKash: { c: "#e2136e", s: "Mobile wallet", n: NO, w: 1, cur: "৳4,302" },
  Rocket: { c: "#8c3494", s: "DBBL wallet", n: NO, w: 1, cur: "৳4,302" },
  Nagad: { c: "#f6921e", s: "Mobile wallet", n: NO, w: 1, cur: "৳4,302" },
  Bank: { c: "#3b82f6", s: "Bank transfer", n: "Ask on WhatsApp", cur: "৳4,302" },
  Card: { c: "#14b8a6", s: "Visa · Mastercard", n: "Link on WhatsApp", cur: usd },
  PayPal: { c: "#0070ba", s: "PayPal", n: "Ask on WhatsApp", cur: usd },
  UPI: { c: "#6b46c1", s: "Instant pay", n: "Ask on WhatsApp", cur: "₹" + Math.round(4302 * .68) }
};
var BY = { BD: ["bKash", "Nagad", "Rocket", "Bank"], IN: ["UPI", "PayPal", "Card"] }, cur = "bKash", step = 1;
CT.forEach(function (c, i) { $('dial').insertAdjacentHTML('beforeend', '<option value="' + i + '">' + c[2] + ' ' + c[3] + ' ' + c[0] + '</option>'); });
function ctry() { return CT[$('dial').value] }
function country() {
  var c = ctry();
  $('tel').placeholder = c[5];
  var l = BY[c[0]] || ["PayPal", "Card"], h = '';
  l.forEach(function (k, j) { h += '<button type="button" class="pc' + (j ? '' : ' on') + '" data-k="' + k + '" style="--c:' + M[k].c + '">' + LG[k] + '<span><b>' + k + '</b><small>' + M[k].s + '</small></span></button>'; });
  $('pay').innerHTML = h; cur = l[0];
}
$('dial').onchange = country;
$('pay').onclick = function (e) {
  var b = e.target.closest('.pc');
  if (!b) return;
  this.querySelectorAll('.pc').forEach(function (x) { x.classList.remove('on'); });
  b.classList.add('on'); cur = b.dataset.k;
};
function go(n) {
  step = n;
  document.querySelectorAll('.pane').forEach(function (p, i) { p.classList.toggle('on', i == n - 1); });
  document.querySelectorAll('.st').forEach(function (s, i) { s.classList.toggle('on', i == n - 1); s.classList.toggle('done', i < n - 1); s.firstChild.textContent = i < n - 1 ? '✓' : i + 1; });
  $('stp').style.display = n == 4 ? 'none' : 'flex';
  window.scrollTo(0, 0);
}
function view(co) {
  $('pg').style.display = co ? 'none' : '';
  $('co').style.display = co ? 'block' : 'none';
  $('exit').style.display = co ? '' : 'none';
  $('back0').style.display = co ? 'none' : '';
  window.scrollTo(0, 0);
}
$('enr2').onclick = function () { view(1); go(1); }; $('exit').onclick = function () { view(0); };
document.querySelectorAll('[data-b]').forEach(function (b) { b.onclick = function () { go(+b.dataset.b); }; });
$('n1').onclick = function () {
  var c = ctry(), d = $('tel').value.replace(/\D/g, ''), ok = 1;
  $('e1').textContent = $('nm').value.trim().length > 1 ? '' : (ok = 0, 'Please enter your full name.');
  $('e2').textContent = /^\S+@\S+\.\S+$/.test($('em').value.trim()) ? '' : (ok = 0, 'Enter a valid email address.');
  $('e3').textContent = d.length == c[4] ? '' : (ok = 0, 'Enter a valid ' + c[4] + '-digit number for ' + c[1] + '.');
  if (ok) go(2);
};
$('n2').onclick = function () {
  var m = M[cur];
  $('pm').textContent = cur; $('amt').textContent = m.cur; $('amt2').textContent = m.cur; $('hlp').href = 'https://wa.me/8801644171751?text=' + encodeURIComponent('Hi Siam! I need help with my payment (' + cur + ').'); $('pm2').textContent = cur; $('plogo').innerHTML = LG[cur]; $('pbox').style.setProperty('--c', m.c); $('pn').textContent = m.n; $('cp').style.display = m.w ? '' : 'none';
  $('how').innerHTML = m.w ? '<li>Open the <b>' + cur + '</b> app and choose <b>Send Money</b></li><li>Enter the number above and the amount</li><li>Confirm with your PIN, then copy the <b>TrxID</b></li>' : '<li>Message us on <b>WhatsApp</b> to get ' + cur + ' details</li><li>Pay, then paste your transaction reference below</li>';
  go(3); chk();
};
$('cp').onclick = function () {
  try { navigator.clipboard.writeText($('pn').textContent); this.textContent = 'Copied ✓'; var t = this; setTimeout(function () { t.textContent = 'Copy number'; }, 1800); } catch (e) { }
};
function chk() {
  var v = $('trx').value.trim(), ok = M[cur].w ? /^[A-Za-z0-9]{8,12}$/.test(v) : v.length > 3;
  $('e4').textContent = (v && !ok) ? 'Transaction ID looks too short or invalid.' : '';
  $('go').disabled = !($('ck').checked && ok);
}
$('fl').onchange = function () {
  var f = this.files[0]; $('fn2').textContent = f ? f.name : 'Tap to choose an image'; $('drop').classList.toggle('has', !!f);
}; $('trx').oninput = chk; $('ck').onchange = chk;
$('go').onclick = function () {
  var r = 'CWS-' + Math.random().toString(36).slice(2, 8).toUpperCase(); $('ref').textContent = r;
  $('wa').href = 'https://wa.me/8801644171751?text=' + encodeURIComponent('Hi Siam! Payment proof. Ref ' + r + ', ' + cur + ' TrxID ' + $('trx').value.trim()); go(4); $('dn').textContent = $('nm').value.trim().split(' ')[0]; confetti();
};
function confetti() {
  var b = $('burst'), c = ['#ec6a3c', '#7fd18b', '#f5efe6', '#f6c453', '#e2136e'], h = '';
  for (var i = 0; i < 26; i++) {
    var a = Math.random() * 6.283, d = 70 + Math.random() * 90;
    h += '<i style="background:' + c[i % 5] + ';--x:' + Math.round(Math.cos(a) * d) + 'px;--y:' + Math.round(Math.sin(a) * d - 20) + 'px;--r:' + Math.round(Math.random() * 540) + 'deg"></i>';
  }
  b.innerHTML = h;
}
$('cpr').onclick = function () {
  try { navigator.clipboard.writeText($('ref').textContent.replace('Ref: ', '')); var t = this; t.textContent = 'Copied ✓'; setTimeout(function () { t.textContent = 'Copy'; }, 1800); } catch (e) { }
};
country();
var st = $('stage');
st.onmousemove = function (e) {
  var r = st.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  st.classList.add('m'); $('tilt').style.transform = 'rotateX(' + (-y * 22) + 'deg) rotateY(' + (x * 30) + 'deg)';
};
st.onmouseleave = function () { st.classList.remove('m'); $('tilt').style.transform = ''; };
