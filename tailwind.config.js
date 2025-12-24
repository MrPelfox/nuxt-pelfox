/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(255, 255, 255, 0.25)",
        background: "#000000",
        foreground: "#ffffff",
        card: {
          DEFAULT: "#101010",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "rgba(255, 255, 255, 0.6)",
        },
      },
      borderRadius: {
        lg: "15px",
        xl: "20px",
        "2xl": "24px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
