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
            },
            fontFamily: {
                font: ["Poppins", "sans-serif"],
            },
        },
        plugins: [],
    },
};