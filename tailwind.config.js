/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'caveat': ['Caveat Brush', 'cursive'],
                'coming': ['Coming Soon', 'cursive'],
                'fira': ['Fira Code', 'monospace'],
                'space': ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
} 