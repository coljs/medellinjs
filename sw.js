importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0cb88097c1d180ebd657.js",
    "revision": "fcd0c2f937c243362cd40f906b12a5e2"
  },
  {
    "url": "/_nuxt/1f9347f372c8d0b707c0.js",
    "revision": "cf23c308212b89d41881370967e5a641"
  },
  {
    "url": "/_nuxt/20d45e80e0c01d69bbea.js",
    "revision": "1220065ad2e2038454287d9d9c32c4e1"
  },
  {
    "url": "/_nuxt/23145351055ccbe0b31b.js",
    "revision": "473699e11ae147e756cceaa1617a10ae"
  },
  {
    "url": "/_nuxt/4fbbb3b4025bc4e5753f.js",
    "revision": "1334eb28f6198cb9e345f81de136c73c"
  },
  {
    "url": "/_nuxt/5a694090c99b54ddea58.js",
    "revision": "3f60a456a12aff11a2375a21a2e36194"
  },
  {
    "url": "/_nuxt/79e834782aa9d353f072.js",
    "revision": "84dc3ac35c5a315e3263b07e2ae673cf"
  },
  {
    "url": "/_nuxt/82e3f8d111a6989c6a9c.js",
    "revision": "2a1c8e73453a2e67a8d2343d483aae95"
  },
  {
    "url": "/_nuxt/942b17b2691860997424.js",
    "revision": "c7c4443ae52abca4652c923f7bff50b6"
  },
  {
    "url": "/_nuxt/967ff2ab8b76ff415be8.js",
    "revision": "450ce2dcf7db1893e276046b7d259895"
  },
  {
    "url": "/_nuxt/96c41ae8e5593a63e588.js",
    "revision": "3690ce2d0762fd24a5079160f618068f"
  },
  {
    "url": "/_nuxt/9da93357ffcaefb9c967.js",
    "revision": "ddfaed98e4a00a4d7be66551bc0e395c"
  },
  {
    "url": "/_nuxt/d699f3c30720405865fa.js",
    "revision": "b756df2c6744b88ab0a768c2c33ea31b"
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
