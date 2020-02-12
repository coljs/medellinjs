importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4524f1d2f9d4cf5a7fb5.js",
    "revision": "c0180f1168d0fe669e6049d88dbd62bc"
  },
  {
    "url": "/_nuxt/56885f93d62b5b371343.js",
    "revision": "9b8896fc1a2b09f6b00648d338c66441"
  },
  {
    "url": "/_nuxt/5884acfba80850a957ea.js",
    "revision": "9c94690fe6cc4e4b4c776f4fe8b8b9d9"
  },
  {
    "url": "/_nuxt/80e06aa25735c0cfe416.js",
    "revision": "c7b1b3e26536b5c7d49b7a1756cca2b1"
  },
  {
    "url": "/_nuxt/836dfdbf0acb384367f9.js",
    "revision": "0ac65c8dde668eec7824f8b9dcb67eea"
  },
  {
    "url": "/_nuxt/8edd18832dea78355c40.js",
    "revision": "5fd8f9ee5855c3e618e410cb54abd83b"
  },
  {
    "url": "/_nuxt/a0b3681c1baca0a4799f.js",
    "revision": "b6b9e720746d9b00504bbf0ef27cce36"
  },
  {
    "url": "/_nuxt/a167ea39583dc41f3dbd.js",
    "revision": "dc1ad252d71fa9621591acd41a6c0db9"
  },
  {
    "url": "/_nuxt/a1ba5608d0cadf3133ba.js",
    "revision": "1c3f38c497bc84da05b2bd520278cb4c"
  },
  {
    "url": "/_nuxt/de1d84dc19f7bc876d73.js",
    "revision": "da61b7a9b4ae2f35158f341c480683f5"
  }
], {
  "cacheId": "mde-js-site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
