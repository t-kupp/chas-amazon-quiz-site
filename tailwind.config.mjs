/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        jost: 'Jost',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#D4AF37',
          secondary: '#B10D3A',
          accent: '#333333',
          neutral: '#000000',
          'base-100': '#FFFFFF',
          'base-200': '#F5F5F5',
          'base-300': '#E0E0E0',
        },
      },
      {
        dark: {
          primary: '#D4AF37',
          secondary: '#B10D3A',
          accent: '#F0F0F0',
          neutral: '#1D1D1D',
          'base-100': '#2C2C2C',
          'base-200': '#3A3A3A',
          'base-300': '#4A4A4A',
        },
      },
    ],
  },
};
