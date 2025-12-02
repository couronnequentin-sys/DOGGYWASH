/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Palette principale
        primary: {
          50: '#EFF6FB',
          100: '#dceaf5',
          200: '#b9d5eb',
          300: '#8dbdde',
          400: '#5a9fce',
          500: '#3a82ba',
          600: '#2d689d',
          700: '#275580',
          800: '#24486a',
          900: '#0A2540',
          950: '#061729'
        },
        // Ancien navy pour compatibilité
        navy: {
          50: '#EFF6FB',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#0A2540',
          950: '#061729'
        },
        // Accent (remplace coral) - version bleu plus foncé
        accent: {
          50: '#EFF6FB',
          100: '#dceaf5',
          200: '#b9d5eb',
          300: '#8dbdde',
          400: '#5a9fce',
          500: '#0A2540',
          600: '#082035',
          700: '#061a2b',
          800: '#051520',
          900: '#030d14'
        },
        // Garder coral pour éléments CTA qui doivent ressortir
        coral: {
          50: '#EFF6FB',
          100: '#dceaf5',
          200: '#b9d5eb',
          300: '#8dbdde',
          400: '#5a9fce',
          500: '#0A2540',
          600: '#082035',
          700: '#061a2b',
          800: '#051520',
          900: '#030d14'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      }
    }
  },
  plugins: []
}
