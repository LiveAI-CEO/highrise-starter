export default defineEventHandler((event) => {
  const allowedFrames = process.env.NUXT_PUBLIC_ALLOWED_PARENT_ORIGINS || 'https://app.gohighlevel.com https://app.msgsndr.com'
  setResponseHeaders(event, {
    'Content-Security-Policy': `default-src 'self'; frame-ancestors ${allowedFrames.replaceAll(',', ' ')}; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://rsms.me; font-src 'self' https://rsms.me; connect-src 'self' https://services.leadconnectorhq.com`,
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'X-Content-Type-Options': 'nosniff'
  })
})
