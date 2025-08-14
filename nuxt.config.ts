import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Clínica Sensory',
      htmlAttrs: {
        lang: 'pt-br',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    }
  },

  css: [
    "~/assets/css/main.css",
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  components: [
    {
      path: './app/components',
      pathPrefix: false,
    },
  ],
  
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-svgo'
  ],

  svgo: {
    defaultImport: 'component',
  }
})
