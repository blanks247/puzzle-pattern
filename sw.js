const CACHE_NAME = 'puzzle-pattern-v3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './src/css/style.css',
  './src/js/game.js',
  './src/js/levels.js',
  './src/js/main.js',
  './src/assets/app_icon.jpg',
  './src/assets/sounds/flute_bgm.mp3',
  './src/assets/sounds/train_horn.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});