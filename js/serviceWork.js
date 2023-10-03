//Nombre y version de la cache
const CACHE_NAME = 'v1_cache_Marfa';

//Ficheros a cachear en la aplicación
var urlsToCache = [
    './',
    '../css/styles.css',
    '../img/oracle.png',
    '../img/1.png',
    '../img/2.png',
    '../img/3.png',
    '../img/twitter.png',
    '../img/facebook.png',
    '../img/instagram.png'
];

//Evento Install
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
                        .then(() => {
                            self.skipWaiting();
                        });
        })
        .catch(err => console.log('No se ha cargado el cache', err))        
    );
});

//Evento Activate
self.addEventListener('activate', e => {
    const cacheWhitelist =[CACHE_NAME];

    e.waitUntil(
        caches.keys()
              .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if(cacheWhitelist.indexOf(cacheName) === -1){
                            return caches.delete(cacheName);
                        }
                    })
                )
              })
              .then(() => {
                self.clients.claim();
              })
    );
});

//Evento Fetch
self.addEventListener('fecth', e => {

    e.respondWith(
        caches.match(e.request)
              .then(res => {
                if(res){
                    return res;
                }
                return fetch(e.request);
              })
    );
});
