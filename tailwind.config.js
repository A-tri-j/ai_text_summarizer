module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2563EB", // blue-600
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#64748B", // slate-500
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
        },
        // Accent Colors
        accent: {
          DEFAULT: "#0EA5E9", // sky-500
          100: "#E0F2FE", // sky-100
          500: "#0EA5E9", // sky-500
          600: "#0284C7", // sky-600
        },
        // Background & Surface
        background: "#FAFAFA", // neutral-50
        surface: "#FFFFFF", // white
        // Text Colors
        "text-primary": "#1E293B", // slate-800
        "text-secondary": "#64748B", // slate-500
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#D97706", // amber-600
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#DC2626", // red-600
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 1.5vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 2vw, 0.875rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 2.75vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 3.5vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.75rem, 4vw, 2.25rem)',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'elevated': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'floating': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'subtle': '6px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'micro': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '500ms',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.transition-micro': {
          'transition': 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.transition-smooth': {
          'transition': 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.hover-scale': {
          'transition': 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            'transform': 'scale(1.02)',
          },
        },
        '.border-subtle': {
          'border': '1px solid rgba(0, 0, 0, 0.1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}