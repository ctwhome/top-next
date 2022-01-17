const tailwindTypography =require('@tailwindcss/typography')
const daisyui= require('daisyui')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindTypography,
    daisyui
  ],
}
