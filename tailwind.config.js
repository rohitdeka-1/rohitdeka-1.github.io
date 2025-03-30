
/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        geist: ["Geist", "sans-serif"],
      },
      boxShadow: {
        'div': '10px 10px 0px rgba(0, 0, 0, 1)',
        'btn': '5px 5px 0px #ef5ff1c1',
        'btn2': '0px 5px 0px #ffffff',
      },
    },
  },
  plugins: [daisyui],
  base: "/rohitdeka-1.github.io"
};
