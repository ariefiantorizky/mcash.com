module.exports = {
    content: [
        "./*.{html, js}",
        "./public/views/**/*.{html,js}",
        "./public/pages/**/*.{html,js}",
        "./src/components/**/*.{html,js}",
    ],
    theme: {
        extend: {
            fontFamily: {
                fira: ["Fira Sans", "sans-serif"],
                quicksand: ["Quicksand", "sans-serif"],
            },
        },
    },
    plugins: [],
};
