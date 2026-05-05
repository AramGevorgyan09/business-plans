// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  nitro: {
    preset: 'github-pages'
  },
  app: {
    baseURL: '/business-plans/',
    head: {
      title: 'Business Plans',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/new-logo.png' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
