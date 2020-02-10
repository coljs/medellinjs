importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/245ac6312f4ef106fc75.js",
    "revision": "4dd367bb8944b33aa2f3164d5f61fb9f"
  },
  {
    "url": "/_nuxt/2ad89102cf0884b4924c.js",
    "revision": "0ff024660dd6b38667704fc72716a77f"
  },
  {
    "url": "/_nuxt/4165e4fd47a691490664.js",
    "revision": "2c1d2fa085f0fd673a10cdce3bc3dfa8"
  },
  {
    "url": "/_nuxt/5d0e2a227c475da33768.js",
    "revision": "c597680a7fdca5e38d85a48ac67057f5"
  },
  {
    "url": "/_nuxt/60fa762ac53635b60968.js",
    "revision": "8da0bb084eab8383ee2afc3194d7d6e0"
  },
  {
    "url": "/_nuxt/80e06aa25735c0cfe416.js",
    "revision": "c7b1b3e26536b5c7d49b7a1756cca2b1"
  },
  {
    "url": "/_nuxt/99b027e982603e34d0e7.js",
    "revision": "292a203c22ac543cc6c1b5b93240c3cc"
  },
  {
    "url": "/_nuxt/9ea078c2330014539b62.js",
    "revision": "441b82064bf0d127f7c06c4b8151f24e"
  },
  {
    "url": "/_nuxt/a1ba5608d0cadf3133ba.js",
    "revision": "1c3f38c497bc84da05b2bd520278cb4c"
  },
  {
    "url": "/_nuxt/a883498ed03b04277681.js",
    "revision": "6b884baa6e63c3121bd23cd2917c1df3"
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
