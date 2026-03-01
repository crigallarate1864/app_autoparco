self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installato');
});

self.addEventListener('fetch', (e) => {
    // Lascia passare i dati normali in tempo reale senza bloccarli
    e.respondWith(fetch(e.request));
});
