/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'headings': ['"Shippori Mincho"','serif'],
        'body': ['"Noto Serif Tamil"', 'serif']
      },
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
       },       
    },
  },
  plugins: [],
}

// Shippori Mincho for headings
// Fjord One/Cambria/Noto Serif Tamil for body