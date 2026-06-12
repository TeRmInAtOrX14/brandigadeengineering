import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/** Tailwind CSS configuration for Brandigade Engineering site. */
const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      // ---- COLORS (creates text‑accent, border‑accent, bg‑accent) ----
      colors: {
        primary: '#0B0B0B',
        accent: '#0066FF',
        secondary: '#222222',
        lightGray: '#F5F7FA',
        background: '#FFFFFF',
      },


      // ---- FONTS ----
      fontFamily: {
        heading: ['Inter Tight', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      // ---- TYPOGRAPHY ----
      fontWeight: {
        heading: '600',
        body: '400',
      },

      // ---- TRANSITIONS ----
      transitionProperty: {
        bg: 'background-color',
        border: 'border-color',
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        shadow: 'box-shadow',
        transform: 'transform',
      },

      // ---- BACKDROP BLUR ----
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },

      // ---- SHADOWS ----
      boxShadow: {
        glass: '0 4px 30px rgba(0,0,0,0.1)',
        premium: '0 10px 25px rgba(0,0,0,0.15)',
      },

      // ---- ANIMATIONS ----
      keyframes: {
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,102,255,0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0,102,255,0)' },
        },
      },
      animation: {
        pulseBlue: 'pulseBlue 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
