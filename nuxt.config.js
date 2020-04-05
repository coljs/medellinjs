const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/medellinjs/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MedellínJS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MedellínJS' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800%7cRoboto:300,400,500,700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css', integrity: 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ', crossorigin: 'anonymous'}
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', type: 'text/javascript' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', type: 'text/javascript' }
    ]
  },
  /*
  ** css external of the app
  */
  css: [
    { src: 'animate.css', lang: 'css' }
  ],

  modules: [
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-analytics', {
      id: 'UA-118815653-1'
    }],
    '@nuxtjs/pwa',
  ],

  /*
   ** PWA Manifest.json
   */
  manifest: {
    background_color: '#0CA1CB',
    description: 'Somos una comunidad de apasionados cuyo fin es el de fortalecer y articular el ecosistema tecnológico de la ciudad de Medellín, Colombia.',
    display: 'standalone',
    lang: 'es',
    name: 'MedellinJS Website',
    short_name: 'MedellinJS',
  },

  plugins: ['~/plugins/vue-js-modal'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */

    // vendor: ['aframe'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  ...routerBase
}
