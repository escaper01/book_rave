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
        'my-yellow': {
          light: '#F9F9F5',
          primary: '#F4F2E9',
        },
      },
      scale: {
        '103': '1.03',
        '120': '1.2',
      },
    },
  },
  plugins: [],
};
export default config;
