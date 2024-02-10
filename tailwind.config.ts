import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        burtons: "burtons",
      },
      height: {
        '128': '100rem',
      },
      width: {
        '128': '100rem',
      },
      colors: {
        "dark": "#0b0d12",
        "medium": "#13161c"
      }, 
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [],

}
export default config
