// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css'],
  
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
