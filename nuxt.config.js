export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bangalo-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.min.js",
        body:true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
      // Simple usage
      '@nuxtjs/vuetify',

      // With options
      ['@nuxtjs/vuetify', { /* module options */ }]
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  axios:{
    baseUrl:"https://shine-solutions-api-stagging.herokuapp.com/"
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
