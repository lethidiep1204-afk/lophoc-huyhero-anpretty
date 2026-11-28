/* Bộ nhớ đệm ngoại tuyến cho LophocHuyhero-Anpretty.
   Khi cập nhật hoc-lieu.js hoặc index.html, hãy tăng số phiên bản bên dưới
   để máy học sinh tải bản mới. */
const PHIEN_BAN = 'lophoc-v7';
const TEP = ['./', './index.html', './hoc-lieu.js', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(PHIEN_BAN).then(c => c.addAll(TEP)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== PHIEN_BAN).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Trang và học liệu: ưu tiên mạng để luôn có bản mới; mất mạng thì dùng bản đã lưu.
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(PHIEN_BAN).then(x => x.put(req, c)); } return r; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html'))));
    return;
  }
  // Phông chữ Google: dùng bản đã lưu nếu có, đồng thời làm mới.
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(PHIEN_BAN).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })));
  }
});
