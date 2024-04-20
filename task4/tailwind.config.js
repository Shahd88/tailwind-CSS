/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'Soft-orange:': 'hsl(35, 77%, 62%)',
                'Soft-red':'hsl(5, 85%, 63%)',
                'Grayish-blue': 'hsl(233, 8 %, 79 %)',
            },

        },
    },
    plugins: [],
}