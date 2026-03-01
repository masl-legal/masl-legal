/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f224f',
        dark: '#0b0b0b',
        'off-white': '#f7f7f5',
        'body-gray': '#717171',
        'light-border': '#e2e2e0',
        'footer-black': '#060606',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-libre)', 'Libre Franklin', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(48px, 5.8vw, 82px)',
        'h1': 'clamp(38px, 4.5vw, 64px)',
        'h2': 'clamp(32px, 3.8vw, 46px)',
        'h3': 'clamp(26px, 2.8vw, 34px)',
        'h4': 'clamp(22px, 2.2vw, 28px)',
        'body-lg': 'clamp(16px, 1.15vw, 18px)',
        'body': 'clamp(15px, 1.05vw, 16.5px)',
        'body-sm': 'clamp(13.5px, 0.95vw, 15px)',
        'label': 'clamp(12.5px, 0.85vw, 14px)',
        'label-sm': '12px',
        'label-xs': '11.5px',
        'accordion': 'clamp(22px, 2.4vw, 28px)',
      },
      letterSpacing: {
        'nav': '0.1em',
        'label': '0.14em',
        'wide-label': '0.16em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.25s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
