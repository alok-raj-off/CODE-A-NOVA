/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all your React components
  ],
  theme: {
    extend: {
      colors: {
        // Adding your internship theme color here for easy use
        maintheme: '#4747ed', 
      },
    },
  },
  plugins: [],
}