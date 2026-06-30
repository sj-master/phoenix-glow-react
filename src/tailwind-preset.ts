/**
 * PHX-IT • Phoenix UI — Tailwind preset
 * © Skyler Jones — All rights reserved.
 *
 * Usage in the consuming app's tailwind.config:
 *   import phoenixPreset from "phoenix-glow-react/tailwind-preset";
 *   export default { presets: [phoenixPreset], content: [...] };
 *
 * Also add the Phoenix HSL token block to your global CSS (see README),
 * or import "phoenix-glow-react/styles/phoenix-glow.css" for the Glow kit.
 */
import type { Config } from "tailwindcss";

const preset: Partial<Config> = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
          foreground: "hsl(var(--card-foreground))",
        },
        phoenix: {
          orange: "hsl(var(--phoenix-orange))",
          pink: "hsl(var(--phoenix-pink))",
          magenta: "hsl(var(--phoenix-magenta))",
          purple: "hsl(var(--phoenix-purple))",
          blue: "hsl(var(--phoenix-blue))",
          cyan: "hsl(var(--phoenix-cyan))",
          green: "hsl(var(--phoenix-green))",
          gold: "hsl(var(--phoenix-gold))",
          red: "hsl(var(--phoenix-red))",
          dark: "hsl(var(--phoenix-dark))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
};

export default preset;
