// sw.js — Service Worker لدافعة ارخميدس
const CACHE_NAME = 'arkhimedes-v1';

// الملفات التي تُخزَّن مؤقتاً عند التثبيت
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap'
];

// ===== التثبيت: تخزين الملفات مسبقاً =====
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    }).then(function() {
      // تفعيل فوري دون انتظار إغلاق التبويبات القديمة
      return self.skipWaiting();
    })
  );
});

// ===== التفعيل: حذف الكاشات القديمة =====
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) { return name !== CACHE_NAME; })
          .map(function(name) { return caches.delete(name); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ===== الاعتراض: Cache First، ثم الشبكة =====
self.addEventListener('fetch', function(event) {
  // تجاهل الطلبات غير GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      if (cachedResponse) {
        // موجود في الكاش: نُرجعه فوراً
        return cachedResponse;
      }
      // غير موجود: نجلبه من الشبكة ونخزّنه
      return fetch(event.request).then(function(networkResponse) {
        // نخزّن فقط الردود الصحيحة
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic'
        ) {
          var responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(function() {
        // لا شبكة ولا كاش: نُرجع الصفحة الرئيسية كـ fallback
        return caches.match('./index.html');
      });
    })
  );
});
