importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0688111e96b70619a92d.js",
    "revision": "8df870a36b8341bf93e19ebe9a88768e"
  },
  {
    "url": "/_nuxt/0f591b9f77a7f0ecb67c.js",
    "revision": "5262733192c7340357f01598a96edcc3"
  },
  {
    "url": "/_nuxt/20474bb28d3a45d17f11.js",
    "revision": "32ea6644710d0acc5e97f3200b29d112"
  },
  {
    "url": "/_nuxt/39af26610522ae0e669d.js",
    "revision": "5d05967f80f7e2c0b3c83006cbb4a480"
  },
  {
    "url": "/_nuxt/58b92bf863c55033f993.js",
    "revision": "b775fa0ad4bfebfaaa8d7f077e8eed41"
  },
  {
    "url": "/_nuxt/5a694090c99b54ddea58.js",
    "revision": "3f60a456a12aff11a2375a21a2e36194"
  },
  {
    "url": "/_nuxt/6292d9c0d6f80d78dca4.js",
    "revision": "22207037bf0e786df28506ae115bb9be"
  },
  {
    "url": "/_nuxt/701d70e998a49862ddb2.js",
    "revision": "eeab88333dc8364da0ccc4d628de7935"
  },
  {
    "url": "/_nuxt/7f7b6758e3df347b58bc.js",
    "revision": "2cd943380b5acbb9614936abd5dafa2d"
  },
  {
    "url": "/_nuxt/ad28b15811b57830f4e9.js",
    "revision": "8dcc945704b5c0d514e70e05311268a6"
  },
  {
    "url": "/_nuxt/b607d70d1f1e63cf488d.js",
    "revision": "a6250b0cd27da6f99ee6f1deb3680a66"
  },
  {
    "url": "/_nuxt/cb9174c2e12d3cbd832e.js",
    "revision": "4324b5eceb0aff67d9104735cc616a2a"
  },
  {
    "url": "/_nuxt/fe0314225093d5aa216c.js",
    "revision": "60f384810b8b89d1765bdad8ec61ce05"
  }
], {
  "cacheId": "medellinjs",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
