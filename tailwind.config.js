module.exports = {
  content: ["./index.html", "./dist/index.html", "./src/js/**/*.js", "./dist/src/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f5ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
        }
      }
    }
  },
  plugins: [],
}
