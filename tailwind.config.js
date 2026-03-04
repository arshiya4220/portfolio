/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // You can define a custom "deep black" here if #000 is too flat
        primaryBlack: '#F8FAFC', 
      },
    },
    fontFamily: {
      signature: ['Great Vibes'],
    }
  },
  plugins: [],
}