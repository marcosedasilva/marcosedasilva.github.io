/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a1120',
        'accent-orange': '#f59e0b',
        'card-bg': '#111827',
      },
    },
  },
  plugins: [],
}