module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#65FEDA',
        'secondary':'#071124',
        'txt':'#CDD6F7',
      }
    },
    fontFamily:{
      bb : ["Baloo Bhai 2","cursive"],
      pop: ["Poppins",'sans-serif']
    }
  },
  plugins: [],
}
