/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                Pink: "#ff7191",
                purple: "#6c56c2",
                yellow: "#fdbf11",
                primary: "#fefefd",
                secondary: "#303030",
                blue: "#6cb5de",
                pink: "#f0a8ab",
                Yellow: "#ebe283",
                grey: "#e9e9e9"
            },
            fontFamily: {
                font: ["Poppins", "sans-serif"],
                fontsp: ["Catamaran", "sans-serif"],
            },
        },
        plugins: [],
    },
};