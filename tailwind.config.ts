import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  content: [
    './app.vue',
    './layouts/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './content/**/*.{md,yml,json}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}

