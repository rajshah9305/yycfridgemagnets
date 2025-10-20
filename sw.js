// Service Worker for Calgary Magnets PWA
const CACHE_NAME = 'calgary-magnets-v1.0.0';
const STATIC_CACHE = 'calgary-magnets-static-v1.0.0';
const DYNAMIC_CACHE = 'calgary-magnets-dynamic-v1.0.0';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  // Add all magnet images
  'calaway_park_cleaned.png',
  'calgary_magnet_01_main_cleaned.png',
  'calgary_magnet_02_stampede_cleaned.png',
  'calgary_magnet_03_olympic_cleaned.png',
  'fish_creek_park_cleaned.png',
  'fort_calgary_cleaned.png',
  'glenbow_museum_cleaned.png',
  'national_music_centre_cleaned.png',
  'peace_bridge_cleaned.png',
  'princes_island_park_cleaned.png',
  'stampede_cleaned.png',
  'stampede_tower_cleaned.png',
  'stephen_ave_walk_cleaned.png',
  'university_of_calgary_cleaned.png',
  'chinook_arc_cleaned.png',
  'cowboys_casino_cleaned.png',
  'calgary_magnet_04_tower_cleaned.png',
  'calgary_magnet_05_zoo_cleaned.png',
  'calgary_magnet_06_heritage_fixed_cleaned.png',
  'calgary_magnet_07_saddledome_cleaned.png',
  'IMG_1576_cleaned.png'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests (except for fonts and images)
  if (url.origin !== location.origin && 
      !request.url.includes('fonts.googleapis.com') && 
      !request.url.includes('fonts.gstatic.com') &&
      !request.url.includes('cdnjs.cloudflare.com')) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then(response => {
        // Return cached version if available
        if (response) {
          console.log('Service Worker: Serving from cache:', request.url);
          return response;
        }
        
        // Otherwise fetch from network
        return fetch(request)
          .then(fetchResponse => {
            // Don't cache non-successful responses
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }
            
            // Clone the response
            const responseToCache = fetchResponse.clone();
            
            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(request, responseToCache);
              });
            
            return fetchResponse;
          })
          .catch(error => {
            console.log('Service Worker: Network request failed:', error);
            
            // Return offline fallback for HTML requests
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
            
            // Return offline fallback for images
            if (request.headers.get('accept').includes('image/')) {
              return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="100" y="100" text-anchor="middle" fill="#666">Image Offline</text></svg>',
                {
                  headers: {
                    'Content-Type': 'image/svg+xml'
                  }
                }
              );
            }
            
            throw error;
          });
      })
  );
});

// Background sync for cart data
self.addEventListener('sync', event => {
  if (event.tag === 'cart-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(syncCartData());
  }
});

// Push notification handling
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New Calgary magnets available!',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore Collection',
        icon: '/action-explore.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/action-close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Calgary Magnets', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/#collection')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function to sync cart data
async function syncCartData() {
  try {
    const cartData = await getCartDataFromStorage();
    if (cartData && cartData.length > 0) {
      // In a real app, this would sync with your backend
      console.log('Service Worker: Syncing cart data:', cartData);
      // await syncWithBackend(cartData);
    }
  } catch (error) {
    console.error('Service Worker: Failed to sync cart data:', error);
  }
}

// Helper function to get cart data from IndexedDB
async function getCartDataFromStorage() {
  return new Promise((resolve) => {
    // This would interact with IndexedDB in a real implementation
    const cartData = localStorage.getItem('calgaryMagnetsCart');
    resolve(cartData ? JSON.parse(cartData) : []);
  });
}

// Message handling from main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Periodic background sync for updates
self.addEventListener('periodicsync', event => {
  if (event.tag === 'content-sync') {
    console.log('Service Worker: Periodic sync triggered');
    event.waitUntil(checkForUpdates());
  }
});

// Helper function to check for updates
async function checkForUpdates() {
  try {
    // Check if there are new magnet designs or updates
    const response = await fetch('/api/check-updates');
    if (response.ok) {
      const updates = await response.json();
      if (updates.hasNewContent) {
        // Notify user of new content
        self.registration.showNotification('New Magnets Available!', {
          body: 'Check out the latest Calgary magnet designs',
          icon: '/icon-192x192.png',
          badge: '/badge-72x72.png',
          tag: 'new-content'
        });
      }
    }
  } catch (error) {
    console.error('Service Worker: Failed to check for updates:', error);
  }
}
