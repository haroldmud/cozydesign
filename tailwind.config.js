/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
      },
      fontFamily:{
        'Palanquin': ['Palanquin'],
        'palanquina': ["Palanquina"],
        'palanquini': ["Palanquini"],
        'normal': ["normal"],
        'geomanist':['Geomanist','sans-serif'],
      },

      fontSize: {
        "15r":"15rem",
        "5r": "5rem",
        "5/5r": "5.5rem",
        "4r":"4rem",
        "3r": "3rem",
        "2/5r": "2.5rem",
        "2r":"2rem",
        "1/5r": "1.5rem", 
        "72s": "72px",
        "18s": "18px",
        "15s": "15px",
        "12s": "12px",
        "5s": "5px",
      },
      colors: {
        blue:"#26313e",
        lightblue:"#29303c",
        kaki:"#e4ded5",
        khaki:"#d4ac8e",
        gray: "#b1afaa",
        orange:"#c47d57",
        deeporange:"#b55730",
        lightkaki:"#ceae9a",
      },

      padding: {
        "20r": "20rem",
        "10r": "10rem",
        "30s": "30px",
        "28s": "28px",
        "25s": "25px",
        "23s": "23px",
        "15s": "15px",
        "13s":"13px",
        "10s": "10px",
        "5s": "5px",
      },

      width: {
        fit: "fit-content",
        "50r":"50rem",
        "41r":"41rem",
        "37r":"37rem",
        "35r":"35rem",
        "26/5r":"26.5rem",
        "10d":"100px",
        half: "50%",
      },
      height: {
        fit: "fit-content",
        "all": "100vh",
        "40r": "40rem",
        "30r": "30rem",
        "35r": "35rem",
        "30r": "30rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "7r":"7rem",
        "6r": "6rem",
        "4r": "4rem",
      },
      borderRadius: {
        "1r": "2rem",
        "3s": "3px",
      },
      margin: {
        "3/5r":"3.5rem",
        "6@":"0.6rem",
      },
      spacing: {
        "20r":"20rem",
        "16r":"16rem",
        "10r":"10rem",
        '3px': '3px',
      },
      inset: {
        "140r": "140rem",
        "124r": "124rem",
      },
    },
  },
  plugins: [],
}
