import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Direction Artistique - LeRefugeGourmand
      colors: {
        'slate-night': '#282F38',
        'champagne-gold': '#D4B473',
        'cream-light': '#F5F5F0',
        slate: {
          night: '#282F38',
        },
        champagne: {
          gold: '#D4B473',
          light: '#F5E6C8',
          dark: '#C4A463',
        },
        cream: {
          light: '#F5F5F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
