importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/18b39fe8d31bb9f7d017.js",
    "revision": "ad9727a848f7f3889226107c5725de07"
  },
  {
    "url": "/_nuxt/26ea8d1ade1aa6be82cb.js",
    "revision": "7ed7d0d49919a1ccc6f314fe0edb2ed7"
  },
  {
    "url": "/_nuxt/2a773966012f1b42e995.js",
    "revision": "593c4384e9c8b9c3a96955ac6f7e8278"
  },
  {
    "url": "/_nuxt/4b6891fb0057f611d240.js",
    "revision": "19e7ba2b2dd32ba51ff6e24e80121572"
  },
  {
    "url": "/_nuxt/5913838b7c6550b9ce2c.js",
    "revision": "cff7c2052f024c43886f275891d28b55"
  },
  {
    "url": "/_nuxt/616d878df3238c9904cd.js",
    "revision": "7c53608735725861430e1994881c71b1"
  },
  {
    "url": "/_nuxt/7693bb4d222d13be0fb3.js",
    "revision": "ad9b6aa1426857146a322f638313e6e7"
  },
  {
    "url": "/_nuxt/a1fe7aa43e3bb8be7f39.js",
    "revision": "8d01858176ab3f0591450716df46f6b0"
  },
  {
    "url": "/_nuxt/a8a5be071871e634ec55.js",
    "revision": "3071cbb11a01e7ee3561c7c7e0228697"
  },
  {
    "url": "/_nuxt/b1cf91e2fed73cda5385.js",
    "revision": "99571fa2dc61e8d34d010e363492cf77"
  },
  {
    "url": "/_nuxt/bfbfced709ede5d29782.js",
    "revision": "77dffd1584a507cd991e108104137d0b"
  },
  {
    "url": "/_nuxt/c12fceb69a8b92e879d1.js",
    "revision": "fd2fd49848bbaab3880addcc36599d93"
  },
  {
    "url": "/_nuxt/f2469ec708af80bb6692.js",
    "revision": "8f0dba4550bb1695519ec8752f00a9b3"
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
