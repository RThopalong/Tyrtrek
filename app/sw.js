// Vulnerability Assessment Report Generator — Service Worker
// Bump CACHE_VERSION any time index.html, ../shared/finding-kit.js, or this file changes,
// so returning users pick up the new version instead of a stale cache.
const CACHE_PREFIX = 'va-report-';
const CACHE_VERSION = CACHE_PREFIX + 'v2';
// Required for the tool to run offline — install fails if any of these can't be fetched.
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  '../shared/finding-kit.js'
];
// Nice to have offline; fetched individually so one failure can't break install.
const OPTIONAL = [
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL)
        .then(() => Promise.all(OPTIONAL.map((url) => cache.add(url).catch(() => null)))))
      .then(() => self.skipWaiting())
  );
});

// Only clear this tool's own old caches — the commercial tool, residential
// tool, and Field Capture share one origin, so they must not delete each other's.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_VERSION).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first: works fully offline in the field once loaded.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
