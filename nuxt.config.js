// const path = require('path')
// const resolve = require('resolve')
// const webpack = require('webpack')
// const envPath = path.resolve(__dirname, 'config', '.env')
// require('dotenv').config({ path: envPath })

const requireToken = (to, from, next) => {
  (store.state.tokenState) && next()
  next('/sellerform')
}

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Volla',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0, viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Volla'
      }
    ],
    script: [
      {
        defer: 'true',
        src: 'https://use.fontawesome.com/releases/v5.8.1/js/all.js',
        integrity:
          'sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://developers.kakao.com/sdk/js/kakao.min.js'
      }
    ],
    script: [
      {
        defer: 'true',
        src: 'https://use.fontawesome.com/releases/v5.8.1/js/all.js',
        integrity:
          'sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://developers.kakao.com/sdk/js/kakao.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
        rel: 'stylesheet',
        type: 'text/css'
      }
    ]
  },
  performance: {
    gzip: false
  },
  router: {
    base: '/',
    routes: [
      {
        path: '*',
        redirect: '/'
      },
      {
        path: '/submit',
        alias: '/submit-app',
        beforeEnter: requireToken,
      }
    ],
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  css: ['~/assets/styles/style.scss'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  styleResources: {
    scss: [
      '~/assets/styles/style.scss',
      '~/assets/styles/modules/*.scss',
      '~/assets/styles/pages/*.scss',
      '~/assets/styles/components/home/*.scss',
      '~/assets/styles/components/seller/*.scss'
    ]
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  // Plugins to load before mounting the App
  plugins: [
    { src: '~/plugins/toast.js', ssr: false },
    { src: '~/plugins/userAgent.js', ssr: false },
    { src: '~/plugins/dateFormatting.js', ssr: false },
    { src: '~/plugins/vue-clipboard2.js', ssr: false },
    { src: '~/plugins/vue-progressbar.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false }
  ],

  // Build configuration
  build: {
    // You can extend webpack config here
    vendor: [
      'vue-clipboard2',
      'vue-progressbar',
      'vue-scrollto',
      'vue-toasted'
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
    }
  }
}
