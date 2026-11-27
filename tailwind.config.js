/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      colors: {
        champagne: {
          DEFAULT: '#E8D5B7',
          50: '#FBF6EE',
          100: '#F5ECDB',
          200: '#ECD9BA',
          300: '#E2C698',
          400: '#D6B07A',
          500: '#C99A5E',
          600: '#B07F47',
          700: '#8C6438',
          800: '#6B4D2C',
          900: '#4A3620',
        },
        espresso: {
          DEFAULT: '#2B1D16',
          50: '#F7F3F0',
          100: '#EAE1DA',
          200: '#C9B7AA',
          300: '#A98E7C',
          400: '#7A5C4A',
          500: '#5A4131',
          600: '#463325',
          700: '#34261C',
          800: '#2B1D16',
          900: '#1C130E',
        },
        rose: {
          DEFAULT: '#C9A9A0',
          50: '#FBF4F2',
          100: '#F5E8E4',
          200: '#ECD3CC',
          300: '#DDB8AE',
          400: '#C9A9A0',
          500: '#B68C81',
          600: '#9C7066',
          700: '#80584F',
          800: '#60433C',
          900: '#442E29',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'blob-drift': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(24px,-18px) scale(1.06)' },
          '66%': { transform: 'translate(-18px,14px) scale(0.96)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(.2,.8,.3,1) both',
        'fade-in': 'fade-in 0.7s ease-out both',
        float: 'float 5.5s ease-in-out infinite',
        'blob-drift': 'blob-drift 16s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};
