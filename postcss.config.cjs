const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const prefixWrapper = require('@ghl-plugins/tailwind-prefix-wrapper')
const namespace = process.env.NUXT_PUBLIC_APP_NAMESPACE || 'liveai-highrise'
module.exports = { plugins: [tailwindcss(), autoprefixer(), prefixWrapper({ prefix: `.${namespace} ` })] }
