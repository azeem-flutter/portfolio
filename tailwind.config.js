/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0B0F19',
          surface: '#0F1526',
          raised: '#141B2E',
          line: '#232B40',
        },
        ink: {
          primary: '#E7EBF5',
          muted: '#8C96AD',
          faint: '#5A6478',
        },
        accent: {
          indigo: '#6F5CFF',
          purple: '#B453FF',
          signal: '#3DDC97',
          amber: '#FFB454',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'glow-indigo':
          'radial-gradient(600px circle at var(--mx) var(--my), rgba(111,92,255,0.18), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(111,92,255,0.25), 0 8px 40px -8px rgba(111,92,255,0.35)',
        'glow-purple': '0 0 0 1px rgba(180,83,255,0.25), 0 8px 40px -8px rgba(180,83,255,0.35)',
      },
      animation: {
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'dash': 'dash 1.6s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.15)' },
        },
        dash: {
          to: { strokeDashoffset: -40 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
