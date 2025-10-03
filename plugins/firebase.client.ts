import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: config.public.FIREBASE_AUTH_DOMAIN,
    projectId: config.public.FIREBASE_PROJECT_ID,
    storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.public.FIREBASE_APP_ID
  }

  const hasAllKeys = Object.values(firebaseConfig).every(v => typeof v === 'string' && v.length > 0)

  if (!hasAllKeys) {
    // Soft-fail in development when env is missing; avoid crashing the SPA
    if (process.dev) console.warn('[firebase] Skipping init: missing runtimeConfig public FIREBASE_*')
    return
  }

  try {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const storage = getStorage(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)

    nuxtApp.vueApp.provide('storage', storage)
    nuxtApp.provide('storage', storage)
  } catch (e) {
    console.error('[firebase] Initialization failed', e)
  }
})
