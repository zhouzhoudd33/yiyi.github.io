const CACHE = 'phonics-v1';
const ASSETS = [
  './', './index.html', './data/phonics-flat.json',
  './js/data-loader.worker.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
