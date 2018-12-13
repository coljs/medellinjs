importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1873d8e5acca8c306fc0.js",
    "revision": "b6fb8dc7c7e39d04491619dc107b3098"
  },
  {
    "url": "/_nuxt/1f9cc4ebe825146db9c8.js",
    "revision": "90bb4732897d6f9146468ce9b53a3f9d"
  },
  {
    "url": "/_nuxt/4dca49c154bed71dc8e0.js",
    "revision": "91e65c0ab84a3b58d32591d3818c5f6f"
  },
  {
    "url": "/_nuxt/8d9bc47cb66e7b66e53e.js",
    "revision": "9027f2cfca9f070a2dc868c9db6c0fa6"
  },
  {
    "url": "/_nuxt/9c8cd79bf8e0a89519d0.js",
    "revision": "b6e489361edd11a30db441f2745452d5"
  },
  {
    "url": "/_nuxt/a7aac4dbac7f756e25a5.js",
    "revision": "d3f08fb59acb0d498c9c15a27aed586b"
  },
  {
    "url": "/_nuxt/b1dcf7b7db319e5cbd82.js",
    "revision": "e79f2489faa404cbcf07163966ec7824"
  },
  {
    "url": "/_nuxt/db30b7cc67620dad9f87.js",
    "revision": "d954f734e4c8be0bdc74bc5674446f96"
  },
  {
    "url": "/_nuxt/dec16ae295c0a0d29c50.js",
    "revision": "5063019909730bef9bccb3ebb0027cf3"
  },
  {
    "url": "/_nuxt/fff3c768434ea9f4cac0.js",
    "revision": "ee8e73bf2225ee7e34da7bc5c8fb7f28"
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
