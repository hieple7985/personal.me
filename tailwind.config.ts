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
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(228, 228, 231)',
            '--tw-prose-headings': 'rgb(255, 255, 255)',
            '--tw-prose-links': 'rgb(99, 102, 241)',
            '--tw-prose-bold': 'rgb(255, 255, 255)',
            '--tw-prose-code': 'rgb(167, 139, 250)',
            '--tw-prose-pre-bg': 'rgb(24, 24, 27)',
            maxWidth: 'none'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}