/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#4263eb",
        secondary:"#63ebe",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'3rem'
        }

      },animation: {
      marquee: "marquee 30s linear infinite"
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-50%)" }
      }
    }
    },
  },
  plugins: [],
}

