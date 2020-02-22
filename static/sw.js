importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/090055e2fca01f311ecf.js",
    "revision": "2026543b34d658c02a752818791ede1c"
  },
  {
    "url": "/_nuxt/0a9ff07ea360a231222a.js",
    "revision": "31ebf8bf377adf8cd81b59193e45ef73"
  },
  {
    "url": "/_nuxt/34168dba2c417a21c47f.js",
    "revision": "8a6ae4ed56491726f8f010cd79634491"
  },
  {
    "url": "/_nuxt/40022d070de0de945931.js",
    "revision": "b4b82d8528435adaa4c95578f585794f"
  },
  {
    "url": "/_nuxt/80e06aa25735c0cfe416.js",
    "revision": "c7b1b3e26536b5c7d49b7a1756cca2b1"
  },
  {
    "url": "/_nuxt/85af233a3c33235ec4a8.js",
    "revision": "7d6ad01d2c16f5a314fe3507f3a85503"
  },
  {
    "url": "/_nuxt/a1ba5608d0cadf3133ba.js",
    "revision": "1c3f38c497bc84da05b2bd520278cb4c"
  },
  {
    "url": "/_nuxt/bf9aaa0c1d3a4fe0011a.js",
    "revision": "bb90f61216cc266e06872ab1d8b1c296"
  },
  {
    "url": "/_nuxt/e4abce5601426110a2e8.js",
    "revision": "3dc61003f649025f763e9bca01e838f5"
  },
  {
    "url": "/_nuxt/e9ffc68e8f8a52ee669b.js",
    "revision": "14924b52470c90d72d501b19b5e0e85d"
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
