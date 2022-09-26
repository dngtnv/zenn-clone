/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            color: {
                'text-primary': '#2B2D2F',
                'text-secondary': '#6E7B85',
                'gray-text': '#93A5B1',
                'blue-lighter': '#3EA8FF',
                'blue-darker': '#0F83FD',
                'bg': {
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
        },
    },
    plugins: [],
}
