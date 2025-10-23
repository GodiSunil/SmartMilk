/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'milkyway-dark': '#1C3A51',
        'milkyway-darker': '#1D3243',
        'milkyway-blue': '#0EA2EE',
        'milkyway-gray': '#B7B7B7',
        'why-choose-top': '#202730',
        'why-choose-middle': '#20232A',
        'why-choose-middle-2': '#20242A',
        'why-choose-bottom': '#202329',
        'text-blue': '#0EA2EE',
        'text-white': '#FFFFFF',
        'text-white-70': '#FFFFFFB2',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'itim': ['Itim', 'cursive'],
      },
      boxShadow: {
        'phone': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'button': '0 4px 14px 0 rgba(14, 162, 238, 0.3)',
      },
    },
  },
  plugins: [],
}
