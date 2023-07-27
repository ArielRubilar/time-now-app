/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        'tn-neutral': {
          '000': 'hsl(0, 0%, 100%)',
          '100': 'hsl(211, 15%, 95%)',
          '500': 'hsl(211, 15%, 41%)',
          '900': 'hsl(0, 0%, 0%)'
        },
        'tn-primary': {
          '100': 'hsl(187, 100%, 90%)',
          '200': 'hsl(187, 70%, 57%)',
          '300': 'hsl(223, 53%, 49%)',
          '400': 'hsl(233, 53%, 30%)',
          '500': 'hsl(242, 58%, 25%)'
        }
      }
    }
  },
}
