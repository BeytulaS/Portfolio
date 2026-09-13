// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  content: {
    experimental: {
      // Uses Node's built-in SQLite, so no native build step is required.
      sqliteConnector: 'native'
    }
  },

  compatibilityDate: '2026-06-30',

  // Pages render on the server at request time (SSR).
  // Prerendering is intentionally off: Nitro's prerenderer exits early on Node 26
  // with the native SQLite connector used by Nuxt Content.
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: []
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    mode: 'css',
    clientBundle: {
      scan: true,
      icons: [
        'lucide:home',
        'lucide:folder',
        'lucide:mail',
        'lucide:arrow-right',
        'lucide:arrow-up-right',
        'lucide:external-link',
        'lucide:sun',
        'lucide:moon',
        'lucide:radio-tower',
        'lucide:utensils',
        'lucide:globe',
        'lucide:code',
        'lucide:layout-dashboard',
        'lucide:server',
        'lucide:database',
        'lucide:cloud',
        'lucide:sparkles',
        'simple-icons:github',
        'simple-icons:linkedin'
      ]
    }
  }
})
