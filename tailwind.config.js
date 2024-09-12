/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
       'azulCaribe' : '#0077b6',
       'verdeLima' : '#32CD32'
      }
    },
  },
  plugins: [],
}