const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/medellinjs/',
        },
      }
    : {}

export default {
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'MedellínJS',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800%7cRoboto:300,400,500,700',
      },
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        type: 'text/javascript',
      },
      {
        src:
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
        type: 'text/javascript',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Global CSS
   */
  css: [{ src: 'animate.css', lang: 'css' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-js-modal'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faCalendar',
              'faCheck',
              'faChevronUp',
              'faComment',
              'faEnvelope',
              'faHome',
              'faMapMarkerAlt',
              'faPuzzlePiece',
              'faTimes',
              'faSortAlphaDown',
            ],
          },
        ],
        icons: {
          solid: true,
          brands: [
            'faAngellist',
            'faFacebookSquare',
            'faGithub',
            'faGitter',
            'faInstagram',
            'faLinkedin',
            'faMeetup',
            'faNode',
            'faTwitch',
            'faTwitter',
            'faVuejs',
            'faYoutube',
          ],
        },
      },
    ],
  ],

  fontawesome: {
    icons: ['faCog', 'faCalendar', 'faHome', 'faCircle', 'faCheck'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-118815653-1',
      },
    ],
  ],

  /*
   ** PWA Manifest.json
   */
  pwa: {
    meta: {
      title: 'MedellinJS Website',
      author: 'MedellinJS Community',
    },
    manifest: {
      background_color: '#0CA1CB',
      description:
        'Somos una comunidad de apasionados cuyo fin es el de fortalecer y articular el ecosistema tecnológico de la ciudad de Medellín, Colombia.',
      display: 'standalone',
      lang: 'es',
      name: 'MedellinJS Website',
      short_name: 'MedellinJS',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  ...routerBase,
}
