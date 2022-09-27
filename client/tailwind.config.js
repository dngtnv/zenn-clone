/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#2B2D2F',
                'secondary': '#6E7B85',
                'gray': '#93A5B1',
                'blue-lighter': '#3EA8FF',
                'blue-darker': '#0F83FD',
                'main': {
                    blue: '#E6F2FF',
                    gray: '#F1F5F9',
                    purple: '#F3F2FF',
                    green: '#EDF2F7',
                }
            },
            constainer: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '3rem',
                    xl: '10rem',
                    '2xl': '18.75rem',
                }
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            fontSize: {
                xs: '0.781rem', // 12.5px
                sm: '0.88rem', // 14.08px
                base: '1rem', // 16px
                lg: '1.02rem', // 16.32px
                xl: '1.05rem', // 16.8px
                '2xl': '2.1rem', // 33.6px
            }
        },
    },
    plugins: [],
}
