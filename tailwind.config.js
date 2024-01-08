/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#4366C9',
      },
    },
  },
  plugins: [require("daisyui")],
}

