/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui:{
    themes: [
    {
      light: {
        primary: "#D4AF37", // Dorado
        secondary: "#B10D3A", // Rojo oscuro
        accent: "#333333", // Gris oscuro
        neutral: "#000000", // Negro
        "base-100": "#FFFFFF", // Blanco
        "base-200": "#F5F5F5", // Gris claro
        "base-300": "#E0E0E0", // Gris más suave
      },
    },
    {
      dark: {
        primary: "#D4AF37", // Dorado
        secondary: "#B10D3A", // Rojo oscuro
        accent: "#F0F0F0", // Gris claro
        neutral: "#1D1D1D", // Gris muy oscuro
        "base-100": "#2C2C2C", // Gris oscuro
        "base-200": "#3A3A3A", // Gris oscuro intermedio
        "base-300": "#4A4A4A", // Gris más suave
      },
    },
  ],




  },
};
