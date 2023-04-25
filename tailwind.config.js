/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                card: '0px 0px 10px 0px rgba(0,0,0,0.1)',
            },
            animation: {
                bgFlow: 'bgMove 5s infinite ease-in-out',
            },
            keyframes: {
                bgMove: {
                    '0%': { 'background-position': '0 50%' },
                    '50%': { 'background-position': '100% 50%' },
                    '100%': { 'background-position': '0 50%' },
                },
            },
            backgroundSize: {
                x4: '400%',
            },
        },
    },
    plugins: [],
};
