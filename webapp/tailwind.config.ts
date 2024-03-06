import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-khaki': {
          light: '#F9F9F5',
          primary: '#F4F2E9',
        },
        'my-gray': {
          light: '#F5F7F8',
          primary: '#F1EFEF',
        },
        'my-yellow': {
          light: '#ffcc00',
          primary: '#ffbf00',
          dark: '#ff9900',
        },
      },
      scale: {
        '103': '1.03',
        '120': '1.2',
      },
      borderWidth: {
        '1': '0.7px',
      },
    },
  },
  plugins: [],
};
export default config;
