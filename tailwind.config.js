/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'lilac-bush': {
          '50': '#f7f6fc',
          '100': '#f0eef9',
          '200': '#e4dff5',
          '300': '#cfc5ed',
          '400': '#b6a3e2',
          '500': '#9d7fd5',
          '600': '#8a61c6',
          '700': '#794eb3',
          '800': '#664196',
          '900': '#55377b',
          '950': '#352253',
      },
      
      
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

