// Tyrtrek Photo Markup — Service Worker
// Bump CACHE_VERSION whenever index.html or ../shared/finding-kit.js changes.
const CACHE_PREFIX = 'tt-markup-';
const CACHE_VERSION = CACHE_PREFIX + 'v1';
const APP_SHELL = ['./', './index.html', './manifest.json'];
const OPTIONAL = ['../shared/finding-kit.js', '../assets/logo-icon.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL)
        .then(() => Promise.all(OPTIONAL.map((url) => cache.add(url).catch(() => null)))))
      .then(() => self.skipWaiting())
  );
});
// Only clear this tool's own caches; other Tyrtrek tools share the origin.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (response && response.status === 200 && response.type === 'basic') {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => cached))
  );
});
