import type { Config } from 'tailwindcss';
import flowbite from 'flowbite-react/tailwind';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      landscape: { raw: '(orientation: landscape)' },
      portrait: { raw: '(orientation: portrait)' },
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1023px' },
      'mobile-landscape': { raw: '(max-width: 767px) and (orientation: landscape)' },
      'mobile-portrait': { raw: '(max-width: 767px) and (orientation: portrait)' },
      'tablet-landscape': {
        raw: '(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)',
      },
      'tablet-portrait': {
        raw: '(min-width: 768px) and (max-width: 1023px) and (orientation: portrait)',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'subtle-pattern':
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239ca3af' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.1rem' }],
        sm: ['0.9375rem', { lineHeight: '1.35rem' }],
        base: ['1.0625rem', { lineHeight: '1.6rem' }],
        lg: ['1.1875rem', { lineHeight: '1.85rem' }],
        xl: ['1.3125rem', { lineHeight: '1.85rem' }],
        '2xl': ['1.5625rem', { lineHeight: '2.1rem' }],
        '3xl': ['1.9375rem', { lineHeight: '2.35rem' }],
        '4xl': ['2.3125rem', { lineHeight: '2.6rem' }],
        '5xl': ['3.0625rem', { lineHeight: '1.1' }],
        '6xl': ['3.8125rem', { lineHeight: '1.1' }],
        '7xl': ['4.5625rem', { lineHeight: '1.1' }],
        '8xl': ['6.0625rem', { lineHeight: '1.1' }],
        '9xl': ['8.0625rem', { lineHeight: '1.1' }],
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
    flowbite.plugin(),
  ],
};
export default config;
