/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all your React components
  ],
  theme: {
    extend: {
      keyframes: {
      wiggle: {
          '0%, 100%': { transform: 'rotate(-60deg)' },
          '50%': { transform: 'rotate(30deg)' },
        }
      },
      colors: {
        // Adding your internship theme color here for easy use
       'main': '#000000',
       'nav' : '#121212',
       'surface': '#111111', 
       'cards':'#1a1a1a',
       'maintxt': '#FFFFFF',
        'muted': '#B3B3B3',
        'primary': '#9747FF',
        'liteBorder' : '#6a6a6a'
      },
      animation: {
        wiggle: 'wiggle 1.8s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}