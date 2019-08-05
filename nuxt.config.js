// import tosRoutes from './assets/js/tosRoutes'
// import noticeRoutes from './assets/js/noticeRoutes'

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ko'
    },
    title: 'Volla',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0, viewport-fit=cover'
      },
      // meta, seo
      {
        hid: 'description',
        name: 'description',
        content: 'Volla - 라이브 방송으로 만나는 오프라인 쇼핑'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        property: 'og:description',
        content: 'Volla - 라이브 방송으로 만나는 오프라인 쇼핑'
      },
      {
        property: 'og:image',
        content: '/img/dist/gpstore_feature_graphic.png'
      },
      {
        name: 'twitter:description',
        content: 'Volla - 라이브 방송으로 만나는 오프라인 쇼핑'
      },
      {
        name: 'twitter:image',
        content: '/img/dist/gpstore_feature_graphic.png'
      },
      {
        itemprop: 'description',
        content: 'Volla - 라이브 방송으로 만나는 오프라인 쇼핑'
      },
      {
        itemprop: 'image',
        content: '/img/dist/gpstore_feature_graphic.png'
      },
      {
        itemprop: 'keywords',
        content:
          '볼라,Volla,여성,패션,뷰티,트위치,아프리카,동대문,쇼핑몰,BJ,스트리밍,채팅,홈쇼핑,아이디어스,그립,지그재그,화해,에이블리,인싸,유튜브,인플루언서,라방,하울,브랜디,룩핀,스타일,코디,무신사'
      },
      // site verification
      {
        name: 'google-site-verification',
        content: '7wgJAy0Qce6ltlBzRVr-hFpFYjjcdw7sKpfYil-HdI0'
      },
      {
        name: 'naver-site-verification',
        content: 'dd2bc3a7564532cf684be2d390977b4cd96c5b99'
      },
      {
        name: 'fb:admins',
        content: '2378294292413002'
      },
      // icons & cards
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    script: [
      {
        defer: 'true',
        src: 'https://use.fontawesome.com/releases/v5.8.1/js/all.js',
        integrity:
          'sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ',
        crossorigin: 'anonymous'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '36x36',
        href: '/favicon/android-icon-36x36.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: '/favicon/android-icon-48x48.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '72x72',
        href: '/favicon/android-icon-72x72.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/android-icon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '144x144',
        href: '/favicon/android-icon-144x144.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/favicon/manifest.json' }
    ]
  },

  performance: {
    gzip: false
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://volla.live',
    cacheTime: 1000 * 60 * 60,
    generate: true, // Enable me when using nuxt generate
    routes: []
  },
  router: {
    mode: 'history',
    base: `/${process.env.STAGE || 'dev'}`,
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ff82ab' },

  css: ['~assets/styles/style.scss'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/markdownit',
    // https://vuejsdevelopers.com/2018/12/31/vue-nuxt-spa-markdown/
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader'
  ],

  webfontloader: {
    custom: {
      families: ['Spoqa Han Sans'],
      urls: ['https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css']
    }
  },

  styleResources: {
    scss: [
      '~assets/styles/style.scss',
      '~assets/styles/modules/*.scss',
      '~assets/styles/pages/*.scss',
      '~assets/styles/components/home/*.scss',
      '~assets/styles/components/seller/*.scss'
    ]
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // proxyHeaders: false
  },

  // Plugins to load before mounting the App
  plugins: [
    { src: '~plugins/kakao.js', ssr: false },
    { src: '~plugins/toast.js', ssr: false },
    { src: '~plugins/userAgent.js', ssr: false },
    { src: '~plugins/dateFormatting.js', ssr: false },
    { src: '~plugins/vue-clipboard2.js', ssr: false },
    { src: '~plugins/vue-progressbar.js', ssr: false },
    { src: '~plugins/vue-scrollto.js', ssr: false }
  ],

  // Build configuration
  build: {
    // You can extend webpack config here
    vendor: [
      'axios',
      'vue-clipboard2',
      'vue-progressbar',
      'vue-scrollto',
      'vue2-toast'
    ],
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js')
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.js'
      }
    }
  }
}
