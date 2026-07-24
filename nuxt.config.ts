export default defineNuxtConfig({
  compatibilityDate: '2025-08-29',
  devtools: { enabled: false },
  ssr: true,
  nitro: { preset: 'node-server', compressPublicAssets: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@platform-ui/nuxt', '@pinia/nuxt', '@vueuse/nuxt'],
  css: ['@/assets/css/tailwind.css'],
  runtimeConfig: {
    ghlClientId: process.env.GHL_CLIENT_ID,
    ghlClientSecret: process.env.GHL_CLIENT_SECRET,
    ghlSharedSecret: process.env.GHL_SHARED_SECRET,
    ghlApiBase: process.env.GHL_API_BASE || 'https://services.leadconnectorhq.com',
    sessionSecret: process.env.SESSION_SECRET,
    tokenEncryptionKey: process.env.TOKEN_ENCRYPTION_KEY,
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'Golden HighRise Starter',
      appNamespace: process.env.NUXT_PUBLIC_APP_NAMESPACE || 'liveai-highrise',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      allowedParentOrigins: process.env.NUXT_PUBLIC_ALLOWED_PARENT_ORIGINS || 'https://app.gohighlevel.com,https://app.msgsndr.com'
    }
  },
  vite: { ssr: { noExternal: ['@platform-ui/highrise', '@gohighlevel/ghl-icons'] } },
  typescript: { strict: true, typeCheck: true },
  app: { head: { titleTemplate: '%s · HighRise', meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'referrer', content: 'strict-origin-when-cross-origin' }
  ] } },
  routeRules: { '/api/**': { cors: false } }
})
