/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeinup: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '70%': { transform: 'translateY(0)' },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeinup: 'fadeinup 0.3s ease-in',
      },
      colors: {
        primary: '#000000d1',
        secondary: '#6E7B85',
        gray: {
          primary: '#93A5B1',
          lighter: '#ACBBC7',
          'bd-lighter': '#5c93bb2b',
        },
        blue: {
          lightest: '#E6F2FF',
          lighter: '#3EA8FF',
          darker: '#0F83FD',
        },
        main: {
          blue: '#E6F2FF',
          gray: '#F1F5F9',
          purple: '#F3F2FF',
          green: '#EDF2F7',
        },
      },
      container: {
        center: true,
        /* padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '3rem',
                    xl: '10rem',
                    '2xl': '18.75rem',
                } */
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xs: '0.781rem', // 12.5px
        sm: '0.88rem', // 14.08px
        base: '1rem', // 16px
        lg: '1.02rem', // 16.32px
        xl: '1.05rem', // 16.8px
        '2xl': '2.1rem', // 33.6px
      },
      screens: {
        mobile: '400px',
        tablet: '576px',
        laptop: '768px',
        desktop: '992px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
