import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Hobiauction', name: 'Hobiauction', content: 'Hobiauction' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Custom
      { rel: "stylesheet", type: 'text/css', href: "/template/css/custom.css" },
      // Bootstrap
      { rel: "stylesheet", type: 'text/css', href: "/template/css/bootstrap/bootstrap.min.css" },
      // Owl Carousel
      { rel: "stylesheet", type: 'text/css', href: "/template/css/owl-coursel/owl.carousel.css" },
      { rel: "stylesheet", type: 'text/css', href: "/template/css/owl-coursel/owl.theme.css" },
      { rel: "stylesheet", type: 'text/css', href: "/template/css/owl-coursel/owl.transitions.css" },
      // Magnific Popup
      { rel: "stylesheet", type: 'text/css', href: "/template/css/magnific-popup/magnific-popup.css" },
      // Font Awesome
      { rel: "stylesheet", type: 'text/css', href: "/template/css/font-awesome.min.css" },
      // FW
      { rel: "stylesheet", type: 'text/css', href: "/template/css/fw.css" },
      // Car Service
      { rel: "stylesheet", type: 'text/css', href: "/template/css/car_service.css" },

    ],

    script: [
      // JQuery
      {
        src: "/template/js/jquery/jquery-2.2.4.min.js",
        type: "text/javascript"
      },
      // Bootstrap
      {
        src:
          "/template/js/bootstrap/bootstrap.min.js",
        type: "text/javascript"
      },
      // Owl Carousel
      {
        src:
          "/template/js/owl-coursel/owl.carousel.js",
        type: "text/javascript"
      },
      // Script
      {
        src:
          "/template/js/script.js",
        type: "text/javascript"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/mixins/validation',
    './plugins/mixins/user',
    './plugins/axios'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login', method: 'post', propertyName: 'token'
          },
          user: {
            url: 'profile', method: 'get', propertyName: 'data'
          },
          logout: {
            url: 'auth/logout', method: 'get'
          }
        }
      }
    },
      redirect: {
          login: '/auth/login',
          home: '/'
      },
      plugins: [
        './plugins/auth'
      ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios Configuration
  axios: {
    baseURL: 'http://127.0.0.1:8000/api/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extractCSS: true,
    extend(config, ctx) {
    }
  }
}
