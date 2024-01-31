/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#1E2640'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

