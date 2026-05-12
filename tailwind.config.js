/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'oklch(10% 0.02 260)',
          900: 'oklch(14% 0.025 260)',
          800: 'oklch(20% 0.03 260)',
          700: 'oklch(30% 0.035 260)',
          400: 'oklch(70% 0.02 260)',
          200: 'oklch(92% 0.01 260)',
          100: 'oklch(96% 0.005 260)',
        },
        accent: {
          blue: 'oklch(72% 0.18 250)',
          violet: 'oklch(70% 0.22 295)',
          ember: 'oklch(78% 0.16 35)',
          mint: 'oklch(82% 0.14 165)',
        },
      },
      fontFamily: {
        display: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
