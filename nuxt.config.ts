import firebaseConfig from "./firebase.config.js";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/firebase"],
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  $development: {
    //
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
  vite: {
    vue: {
      customElement: true,
      // propsDestructure: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
  // firebase: {
  //   config: firebaseConfig,
  //   services: {
  //     auth: true,
  //     firestore: true,
  //     storage: true,
  //   },
  // },
});
