import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#030712',
          secondary: '#0d1117',
          card: '#0d1117',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#8b5cf6',
          purple: '#a78bfa',
          emerald: '#10b981',
          rose: '#f43f5e',
          amber: '#f59e0b',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#94a3b8',
          muted: '#475569',
          accent: '#22d3ee',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #22d3ee, #8b5cf6)',
        'hero-gradient': 'linear-gradient(135deg, #0ea5e9, #6d28d9, #ec4899)',
        'card-gradient': 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(139,92,246,0.08))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.6s var(--ease-spring) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'scan-line': 'scanLine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(34,211,238,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(34,211,238,0.7), 0 0 80px rgba(139,92,246,0.3)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      boxShadow: {
        'cyan': '0 0 30px rgba(34,211,238,0.3)',
        'violet': '0 0 30px rgba(139,92,246,0.3)',
        'card': '0 8px 32px rgba(0,0,0,0.5)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6)',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
