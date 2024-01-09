/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'cyan':'hsl(176, 50%, 47%)',
        'dark-cyan':'hsl(176, 72%, 28%)',
        'dark-gray':'hsl(0, 0%, 48%)',
        'darkish-black':'#2F2F2F',
        'grayish':"#7A7A7A",
        'other-grayish':"#f5f5f5",
      },
      fontFamily:{
        'Commissioner':['Commissioner', 'sans-serif']
      },
       screens:{
        '2xs':'375px'
       }
    },
  },
  plugins: [],
}

