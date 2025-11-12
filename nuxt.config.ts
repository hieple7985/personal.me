import { defineNuxtConfig } from 'nuxt/config'

// Nuxt 3 configuration for SPA + static hosting on Firebase
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],

  content: {
    // Use in-memory connector to avoid native better-sqlite3 during build in CI
    database: { connector: 'memory' }
  },

  // SPA with static hosting; enable ISR for all routes when deployed
  ssr: false,
  routeRules: {
    '/**': { isr: true }
  },

  // GitHub Pages configuration
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/personal.me/' : '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      titleTemplate: '%s · Personal Me',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal Me v2 — blog, guides, books, ML tools.' },
        { name: 'google-site-verification', content: 'HMQMhMxR-ZaHb3Ni2Nz2lMNJAY6Yr7UDvaT5tGOasa8' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      // GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID
    }
  },

  plugins: ['~/plugins/firebase.client.ts']
})
