/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1', // Indigo-500
                secondary: '#a855f7', // Purple-500
                dark: '#030712', // Gray-950
                card: '#111827', // Gray-900
                light: '#f9fafb', // Gray-50
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
