// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        '--baseBG': '#121214',
        '--baseTitle': '#e1e1e6',
        '--baseSubtitle': '#a8a8b3',
        '--baseBox': '#202024',
        '--hoverBaseBox' : '#323238'

      },
    },

      fontSize: {
        'xxs': '0.625rem', // 10 pixels
        'xs': '0.75rem', // 12 pixels
        'sm': '0.875rem', // 14 pixels
        'md': '1rem', // 16 pixels
        'lg': '1.125rem', // 18 pixels
        'xl': '1.25rem', // 20 pixels
        '2xl': '1.5rem', // 24 pixels
        '4xl': '2rem', // 32 pixels
        '5xl': '2.25rem', // 36 pixels
        '6xl': '3rem', // 48 pixels
        '7xl': '4rem', // 64 pixels
        '8xl': '4.5rem', // 72 pixels
        '9xl': '6rem', // 92 pixels
      },
      lineHeight: {
        'shorter': '125%',
        'short': '140%',
        'base': '160%',
        'tall': '180%',
      },
  },
  variants: {},
  plugins: [],
}