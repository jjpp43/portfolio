import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #242424, #121212 65.62%)',
        'conic-gradient': 'conic-gradient(from 0deg, #ffffff, #000, 30deg, #000, 330deg, #fff)',
        'wrapper-gradient-1':`conic-gradient(rgba(250,250,250,0.4) 0deg rgba(220,220,220,0.4) 0deg, transparent 80deg)`
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        bounce: 'bounce 1.5s infinite ease-out',
        rotate: 'rotate 2s linear infinite',
        'border-spin':'border-spin 6s linear infinite',
        'badge-spin':'border-spin 2.5s linear infinite',
        slideDown: 'slideDown 0.5s ease-in-out forwards',
      },
      transitionDelay: {
        'delay-200':'delay-100'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)'},
        },
        bounce: {
          '0%, 100%': { marginTop: '0' },
          '50%': { marginTop: '1px' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg) translateX(24px)' },
          '100%': { transform: 'rotate(360deg) translateX(24px)' },
        },
        'border-spin':{
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
