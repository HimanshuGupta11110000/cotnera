/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-canvas': '#F0F0F0',
        'brand-card': '#FFFFFF',
        'brand-dark': '#121212',
        'brand-muted': '#6B7280',
        'brand-border': '#E5E5E5',
        'brand-tag-yellow': '#FDE047',
        'brand-accent-red': '#EF4444',
      },
      fontFamily: {
        heading: ['Archivo', 'sans-serif'],
        body: ['Assistant', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        chalk: ['bright-chalk-regular', 'cursive', 'sans-serif'],
      },
      letterSpacing: {
        'widest-editorial': '0.15em',
        'loose-editorial': '0.08em',
      }
    },
  },
  plugins: [],
}
