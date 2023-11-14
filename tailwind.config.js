/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    screens: {
      "2xl": "1400px",
      'm-md': '900px',
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        'tablet': '850px',
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "watchitem-top-background": "hsl(var(--watchitem-top-background))",
        "watchitem-background": "hsl(var(--watchitem-background))",
        "discord-icon-background": "hsl(var(--discord-icon-background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        "label-gray": {
          DEFAULT: "hsl(var(--label-gray))",
          foreground: "hsl(var(--label-gray-foreground))"
        },

        "button-blue": {
          DEFAULT: "hsl(var(--button-blue))",
          foreground: "hsl(var(--button-blue-foreground))",
          border: "hsl(var(--button-blue-border))"
        },

        "button-red": {
          DEFAULT: "hsl(var(--button-red))",
          foreground: "hsl(var(--button-red-foreground))",
          border: "hsl(var(--button-red-border))"
        },

        "button-gray": {
          DEFAULT: "hsl(var(--button-gray))",
          foreground: "hsl(var(--button-gray-foreground))",
          border: "hsl(var(--button-gray-border))"
        },

        "button-metamask": {
          DEFAULT: "hsl(var(--button-orange))",
          foreground: "hsl(var(--button-orange-foreground))",
          border: "hsl(var(--button-orange-border))"
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}