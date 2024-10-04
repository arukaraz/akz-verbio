import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(215, 15%, 85%)",
        input: "hsl(215, 20%, 95%)",
        ring: "hsl(215, 85%, 70%)",
        background: "hsl(215, 50%, 98%)",
        foreground: "hsl(215, 35%, 20%)",
        primary: {
          DEFAULT: "hsl(215, 80%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(215, 60%, 60%)",
          foreground: "hsl(215, 35%, 20%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 70%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(215, 15%, 85%)",
          foreground: "hsl(215, 35%, 40%)",
        },
        accent: {
          DEFAULT: "hsl(215, 85%, 70%)",
          foreground: "hsl(215, 35%, 20%)",
        },
        popover: {
          DEFAULT: "hsl(215, 40%, 95%)",
          foreground: "hsl(215, 35%, 20%)",
        },
        card: {
          DEFAULT: "hsl(215, 50%, 98%)",
          foreground: "hsl(215, 35%, 20%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
} satisfies Config;

export default config;
