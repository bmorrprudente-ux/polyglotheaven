/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        duo: {
          green: "#58cc02",
          "green-dark": "#46a302",
          blue: "#1cb0f6",
          "blue-dark": "#1899d6",
          yellow: "#ffc800",
          "yellow-dark": "#e5b400",
          purple: "#ce82ff",
          "purple-dark": "#a855f7",
          red: "#ff4b4b",
          "red-dark": "#ea2b2b",
          gray: "#e5e5e5",
          "gray-dark": "#afafaf",
          card: "#ffffff",
          "card-border": "#e5e7eb"
        }
      },
      fontFamily: {
        sans: ["Nunito", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "duo": "0 4px 0 0 rgba(0,0,0,0.15)",
        "duo-lg": "0 6px 0 0 rgba(0,0,0,0.15)",
        "duo-card": "0 3px 0 0 #e5e7eb",
        "duo-green": "0 4px 0 0 #46a302",
        "duo-blue": "0 4px 0 0 #1899d6",
        "duo-purple": "0 4px 0 0 #9333ea",
      }
    },
  },
  plugins: [],
}
