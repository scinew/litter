/**
 * Tailwind Configuration Script
 * Loaded before Tailwind CDN to inject custom configuration
 */

// Define custom Tailwind configuration
const tailwindConfig = {
  theme: {
    extend: {
      // Custom color palette with black/white/gray scale
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        black: '#000000',
        white: '#ffffff',
      },

      // Custom border radius tokens
      borderRadius: {
        pill: '9999px',
        bubble: '24px',
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },

      // Spacing tokens
      spacing: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
      },

      // Custom shadows
      boxShadow: {
        bubble: '0 4px 16px rgba(0, 0, 0, 0.4)',
        'bubble-hover': '0 8px 24px rgba(0, 0, 0, 0.6)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.4)',
        'lg': '0 10px 20px rgba(0, 0, 0, 0.5)',
        'xl': '0 20px 40px rgba(0, 0, 0, 0.6)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
      },

      // Keyframe animations
      keyframes: {
        fadeInSlide: {
          '0%': {
            opacity: '0',
            transform: 'translateY(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
      },

      // Animation utilities
      animation: {
        'fade-in-slide': 'fadeInSlide 0.5s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'slide-in-up': 'slideInUp 0.4s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'shimmer': 'shimmer 2s infinite',
      },

      // Custom timing functions
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // Typography utilities
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },

      // Container queries support
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },

  // Dark mode configuration
  darkMode: 'class',

  // Content paths for PurgeCSS
  content: [
    './**/*.html',
    './assets/js/**/*.js',
  ],
};

// Store config in window object for potential runtime access
window.TAILWIND_CONFIG = tailwindConfig;
