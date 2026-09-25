// İnternetsiz çalışma: ilk açılıştan sonra oyun (kod + gömülü sesler) cihazda saklanır.
const CACHE = 'orumcek-feza-v4';
const CORE = ['./', './index.html', './sesler.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
const FRESH = /(\/|index\.html|sesler\.js|manifest\.webmanifest)$/;   // önce ağ (güncel sürüm), yoksa kayıtlı kopya

self.addEventListener('install', e => e.waitUntil((async () => { await (await caches.open(CACHE)).addAll(CORE); self.skipWaiting(); })()));
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
  await self.clients.claim();
})()));
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  const fresh = req.mode === 'navigate' || FRESH.test(url.pathname);
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const key = req.mode === 'navigate' ? './index.html' : url.pathname.endsWith('sesler.js') ? './sesler.js' : req;
    if (fresh) {
      try { const r = await fetch(req, { cache: 'no-cache' }); if (r.ok) c.put(key, r.clone()); return r; }
      catch (err) { return (await c.match(key, { ignoreSearch: true })) || (await c.match('./index.html')) || Response.error(); }
    }
    const hit = await c.match(req, { ignoreSearch: true }); if (hit) return hit;
    const r = await fetch(req); if (r.ok) c.put(req, r.clone()); return r;
  })());
});
