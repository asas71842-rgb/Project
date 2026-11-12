import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#123C80',
          blue: '#2389E8',
          yellow: '#FFD447',
          turquoise: '#12B8B0',
          success: '#22A06B',
          orange: '#F59E0B',
          danger: '#E5484D',
          light: '#F4F8FE',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(18,60,128,0.12)',
      },
      backgroundImage: {
        'travel-grid': 'radial-gradient(circle at top left, rgba(35,137,232,0.08), transparent 35%)',
      },
    },
  },
  plugins: [],
};

export default config;
