importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1a1584425e0620fd83c2.js",
    "revision": "7a85419ce406ab23695359a529bb9e29"
  },
  {
    "url": "/_nuxt/4370a1abe3ad977005cd.js",
    "revision": "fe9b54bcf8f7fa5c39b5d3832490155c"
  },
  {
    "url": "/_nuxt/80e06aa25735c0cfe416.js",
    "revision": "c7b1b3e26536b5c7d49b7a1756cca2b1"
  },
  {
    "url": "/_nuxt/a017106b9f5c048a8d9e.js",
    "revision": "e6cdb44433346d774c05bdbc82be28f3"
  },
  {
    "url": "/_nuxt/a1ba5608d0cadf3133ba.js",
    "revision": "1c3f38c497bc84da05b2bd520278cb4c"
  },
  {
    "url": "/_nuxt/bcb0304fbd20e064070e.js",
    "revision": "874351a6fca0c913d0539ae724fa2db1"
  },
  {
    "url": "/_nuxt/ca113158053aef752abf.js",
    "revision": "83c966ece0cd0a1088060624ac63d37e"
  },
  {
    "url": "/_nuxt/d616b7870e7b819053ee.js",
    "revision": "c631199ec92d361303e97b3dec446739"
  },
  {
    "url": "/_nuxt/e611ba6bda3fd87147ca.js",
    "revision": "da4277686e86eec1d25a318bdda576e1"
  },
  {
    "url": "/_nuxt/ea9e32ff2ee36b3a9d29.js",
    "revision": "373a4097944d933509d562586a06ebdd"
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
