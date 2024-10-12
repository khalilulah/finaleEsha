/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
      },
       colors: {
        'customYellow': '#FCC050',
        'customBlue':'#525FFD',
        'customBlack': '#2E2E2E',
        'customDeepBlack': '#1D1D1D',
        'customLightBlue': '#525FFD',
        'customLightBlack': '#454545',
      },
      fontFamily:{
      lato:["Lato",'sans-serif'],
    },
      width:{
        'whole': '100%',
        'shopBtnWidth': '120px',
        'logoWidth':'70px',
      },
      height:{
        'whole': '100%',
        'shopBtnheight': '30px',
        'logoHeight':'20px'
      },
      screens:{
        'xsm':'0',
        'sm':'640px',
        'bp':'423px',
        'md':'768px',
        'smd':'919px',
        'lg':'1024px',
        'xl':'1200px',
      } 
    },
  },
  plugins: [],
}

