—// Residential Vulnerability Assessment Report Generator — Service Worker
// Bump CACHE_VERSION any time index.html (or this file) changes,
// so returning users pick up the new version instead of a stale cache.
const CACHE_VERSION = 'residential-va-report-v1';
const APP_SHELL = [
'./',
'./index.html',
'./manifest.json',
'../app/icon-192.png',
'../app/icon-512.png',
'../app/icon-maskable-512.png',
'../app/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_VERSION)
.then((cache) => cache.addAll(APP_SHELL))
.then(() => self.skipWaiting())
);
});

self.addEventListener('activate', (event) => {
event.waitUntil(
caches.keys().then((keys) =>
Promise.all(
keys
.filter((key) => key !== CACHE_VERSION)
.map((key) => caches.delete(key))
)
).then(() => self.clients.claim())
);
});

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
