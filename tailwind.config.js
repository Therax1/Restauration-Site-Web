/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        vert: "#DAE952",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Police Inter
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'newsletter': "url('/assets/newsletter-img.png')",
      }
    },
  },
  plugins: [],
}

