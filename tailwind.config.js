/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#075BD1",      // Deep Blue
                secondary: "#878686",    // Soft gray
                accent: "#8B5CF6",       // Light Purple
                textDark: "#1E293B",     // Dark Blue-Gray
                textLight: "#64748B",    // Light Gray-Blue
                background: "#ededed",   // Light Blue Background
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
