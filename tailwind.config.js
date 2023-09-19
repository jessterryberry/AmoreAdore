/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "slate-gray-100": "#545454",
        "slate-gray-200": "#474747",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "seasalt": "#F4F7F5",
        "cosmic-latte": "#FFF8E8",
        "salmon-pink": "#F8A0A7",
        "light-coral": "#F6828C",
        "tea-rose": "#FBC6CA",
        "lavender-blush": "#FEECED",
        "plum": "#824670"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background-pink.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'accent': "url('assets/images/accent.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}