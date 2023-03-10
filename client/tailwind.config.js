/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    daisyui: {
      themes: ["light"],
    },
    
  },
  plugins: [require("daisyui")],
}
