importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.c89c9a0.js",
    "revision": "d9be4619d87fa525db9f53ecb254c409"
  },
  {
    "url": "/_nuxt/commons/heroes.index~index.58870e4.js",
    "revision": "16953f100d62bc1783eef77ddbf84eda"
  },
  {
    "url": "/_nuxt/pages/comparte.9d4cc36.js",
    "revision": "1fd430338eb253185fef20126b724a73"
  },
  {
    "url": "/_nuxt/pages/fundacion.3668680.js",
    "revision": "7d3f4e3e25a75b06d059001238b430fa"
  },
  {
    "url": "/_nuxt/pages/heroes/index.fb5083b.js",
    "revision": "43e901fc95056101b4446e99e06aa83a"
  },
  {
    "url": "/_nuxt/pages/index.6207b50.js",
    "revision": "d81dc558cf635bb09f6afe0b1df7084d"
  },
  {
    "url": "/_nuxt/pages/sorteo/index.1c5f3cf.js",
    "revision": "2f3a43aff6af748ea2889bbe9431da10"
  },
  {
    "url": "/_nuxt/pages/sponsor-en/index.aafa8d1.js",
    "revision": "40ee983f63e5c595f52fe63aa49cd4ed"
  },
  {
    "url": "/_nuxt/pages/sponsor/index.f832e97.js",
    "revision": "718285a6eb07c369d3ef675c38f17637"
  },
  {
    "url": "/_nuxt/runtime.cef4450.js",
    "revision": "ac06c2c03309a6bf8385d5198e742f5e"
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
