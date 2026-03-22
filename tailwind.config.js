/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#030712', // Near black navy
        'royal': '#3b82f6', // Brighter royal for contrast
        'cta': '#2563EB',
        'cta-hover': '#1D4ED8',
        'bg-main': '#030712', // Midnight
        'bg-alt': '#0f172a',  // Slightly lighter navy
        'bg-card': '#1e293b', // Slate 800 for cards
        'text-primary': '#f8fafc', // Light slate
        'text-secondary': '#94a3b8', // Medium slate
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      }
    },
  },
  plugins: [],
}
