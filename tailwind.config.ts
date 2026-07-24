import { HLTailwindConfig } from '@platform-ui/highrise'
import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

export default {
  ...HLTailwindConfig,
  content: [
    './app.vue', './components/**/*.{vue,js,ts}', './layouts/**/*.vue',
    './pages/**/*.vue', './modules/**/*.{vue,js,ts}',
    './node_modules/@platform-ui/highrise/**/*.{js,mjs,ts,vue}'
  ],
  theme: {
    ...HLTailwindConfig.theme,
    extend: {
      ...HLTailwindConfig.theme?.extend,
      fontFamily: { sans: ['Inter var', ...defaultTheme.fontFamily.sans] }
    }
  },
  plugins: [...(HLTailwindConfig.plugins || [])]
} satisfies Config
