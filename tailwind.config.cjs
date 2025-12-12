/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#f2fbfd",
        panel: "#eaf9fb",
        accent: "#8ed1e9",
        deepteal: "#16545a",
        softblue: "#dff6fb",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(6,50,80,0.06)",
      },
      borderRadius: {
        xl2: "28px",
      }
    },
  },
  plugins: [],
};
