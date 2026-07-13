const CACHE_VERSION = 'v4';
const CACHE_NAME = `stockdrive-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './manifest.json',
  './sd-icon-v2.png',
  './catalogo/',
  './catalogo/index.html',
];

// Dominios externos — pasan directamente a la red, nunca se cachean
const BYPASS_ORIGINS = [
  'supabase.co',
  'anthropic.com',
  'googleapis.com',
  'gstatic.com',
  'google-analytics.com',
  'maps.googleapis.com',
];

function shouldBypass(url) {
  try {
    const host = new URL(url).hostname;
    return BYPASS_ORIGINS.some(d => host === d || host.endsWith('.' + d));
  } catch (_) {
    return false;
  }
}

// INSTALL — pre-cachea archivos esenciales y activa el SW inmediatamente
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
});

// ACTIVATE — borra cachés de versiones anteriores y toma control de las páginas abiertas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

// FETCH — network-first: siempre intenta la red primero; caché solo como respaldo offline
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (shouldBypass(event.request.url)) return; // deja pasar sin interceptar

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Actualiza la caché con la respuesta fresca (solo respuestas válidas)
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request)) // offline: usa caché como respaldo
  );
});

// MESSAGE — permite que la página fuerce skipWaiting desde el cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
