/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media",
    theme: {
        extend: {
            fontFamily: {
                helveticaHeading: [
                    "helvetica-neue-heading",
                    "sans",
                ],
                helveticaSubHeading: [
                    "helvetica-neue-sub-heading",
                    "sans",
                ],
            },
            colors: {
                primary: {
                    DEFAULT: "#1877f2",
                    hover: "#365899",
                },
                secondary: {
                    DEFAULT: "#42b72a",
                    hover: "#36a420",
                },
                linkColor: "#1877f2",
                secondaryText: "#606770",
            },
        },
    },
    plugins: [],
};
