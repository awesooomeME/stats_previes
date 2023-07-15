/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      very_dark_blue : 'hsl(233, 47%, 7%)',
      dark_desaturated_blue : 'hsl(244, 38%, 16%)',
      soft_violet : 'hsl(277, 64%, 61%)',
      white : 'hsl(0, 0%, 100%)',
      slightly_transparent_white_p : 'hsla(0, 0%, 100%, 0.75)',
      slightly_transparent_white_h : 'hsla(0, 0%, 100%, 0.6)'
    }
  },
  plugins: [],
}
