importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.0e43c36.js",
    "revision": "d53fe417d509e1fe183f9a303619be4f"
  },
  {
    "url": "/_nuxt/commons/heroes.index~index.d6d0660.js",
    "revision": "501b2f6b8ae9977ac2f4080cfcc970c4"
  },
  {
    "url": "/_nuxt/pages/comparte.5dd8db0.js",
    "revision": "9af1bd61fc2e43e9d256f52310df4842"
  },
  {
    "url": "/_nuxt/pages/fundacion.9ea82d5.js",
    "revision": "754a2f3fce5a2fa2e02d81021f5338db"
  },
  {
    "url": "/_nuxt/pages/heroes/index.b6025e1.js",
    "revision": "43e901fc95056101b4446e99e06aa83a"
  },
  {
    "url": "/_nuxt/pages/index.0409b11.js",
    "revision": "730da3afecae57f22ad39a7901bea655"
  },
  {
    "url": "/_nuxt/pages/sorteo/index.9bc3d1d.js",
    "revision": "666230bca71b133cd100399e3adbac14"
  },
  {
    "url": "/_nuxt/pages/sponsor-en/index.117737b.js",
    "revision": "40ee983f63e5c595f52fe63aa49cd4ed"
  },
  {
    "url": "/_nuxt/pages/sponsor/index.b35884c.js",
    "revision": "718285a6eb07c369d3ef675c38f17637"
  },
  {
    "url": "/_nuxt/runtime.9dc7a1a.js",
    "revision": "046aa51faf55bed779bf1672ec8326e1"
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
