const CACHE_NAME = 'dloan-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/credit-score.html',
  '/credit-report.html',
  '/manifest.json'
];

// Service Worker Install aur Static Assets Cache karna
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Cache-First Strategy for performance
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
