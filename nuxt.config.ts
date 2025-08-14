import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

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
      path: '/app/components',
      pathPrefix: false,
    },
  ],
  
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-svgo'
  ]
})