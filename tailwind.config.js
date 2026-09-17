/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B5FEF",
        "primary-dark": "#4F46E5",
        accent: "#6D5DF6",
        dark: "#111827",
        "gray-custom": "#6B7280",
        "alt-bg": "#F9FAFB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
