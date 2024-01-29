/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#E7E5E3"
      },
      fontFamily: {
        'nuckle': ['Nuckle'],
        'neue': ["Neue Montreal"],
      }
    },
  },
  plugins: [],
}