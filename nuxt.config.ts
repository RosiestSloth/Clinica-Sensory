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
  },
  image: {
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    dir: 'public/img',
  }
})
