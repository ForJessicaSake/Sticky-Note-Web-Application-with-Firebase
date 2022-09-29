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
                grey: "#e9e9e9",
            },
            fontFamily: {
                font: ["Poppins", "sans-serif"],
                fontsp: ["Catamaran", "sans-serif"],
            },

            width: {
                w: "48rem",
                wz: "22rem",
                wt: "40rem",
                wit: "33rem",
                wtt: "100rem",
            },
            height: {
                h: "26rem",
                ht: "46rem",
                htt: "80rem",
            },
            screens: {
                xxs: {
                    min: "250px",
                    max: "480px",
                },
                xms: {
                    min: "481px",
                    max: "767px",
                },
                smm: {
                    min: "768px",
                    max: "900px",
                },
                lgs: {
                    min: "901px",
                    max: "1100px",
                },
                xlgs: {
                    min: "1279px",
                    max: "1282px",
                },
            },
        },
        plugins: [],
    },
};