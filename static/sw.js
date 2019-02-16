importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06bb8c5046e37cbe1a14.js",
    "revision": "03244bcf9223e58220823bede56ba430"
  },
  {
    "url": "/_nuxt/0e97eb843c099151c0ad.js",
    "revision": "1720dad6017efe2e71dc51f6b31b9bde"
  },
  {
    "url": "/_nuxt/1ee5947af01b1356512b.js",
    "revision": "f9ba86664a125771b31b9171eb5ac70d"
  },
  {
    "url": "/_nuxt/27e1af6469550c9113ac.js",
    "revision": "73cf35b67b5b4c574aa3b265153fb50e"
  },
  {
    "url": "/_nuxt/70544740994f4d70d2bc.js",
    "revision": "b49d37d3b703b0698ab5f02e1d922527"
  },
  {
    "url": "/_nuxt/78e0c6bd2c9810884445.js",
    "revision": "83fa6109dccb50839b5c30cb4d689fc1"
  },
  {
    "url": "/_nuxt/80e5f3950ac5bcd7c8ce.js",
    "revision": "b515cba312c186864d22fbccc81acdaf"
  },
  {
    "url": "/_nuxt/8c91105af0a3d3b25334.js",
    "revision": "24f685841a880c3c0d6e84a1d387cecf"
  },
  {
    "url": "/_nuxt/93e450f4c047f5a73d95.js",
    "revision": "c3f7fe2a651476df029400ea3ba3b92a"
  },
  {
    "url": "/_nuxt/d0b38bd91151cb759ae9.js",
    "revision": "e8abbf502801f7befc2f56e5299548e4"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
