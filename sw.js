const CACHE_NAME = "moovie-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
