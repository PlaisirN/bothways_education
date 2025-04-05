// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  compatibilityDate: '2025-04-01',
  css: ['~/assets/css/tailwind.css'],
  app:  {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'BothWays Education',
      htmlAttrs: {
        lang: 'nl'
      },
      link: [
        { rel: 'icon', href: '/logo-color.svg', type: 'image/svg+xml' },
      ]
    }
  },
})