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
declare const preset: {
    darkMode: string[];
    theme: {
        extend: {
            colors: {
                border: string;
                input: string;
                ring: string;
                background: string;
                foreground: string;
                primary: {
                    DEFAULT: string;
                    foreground: string;
                };
                secondary: {
                    DEFAULT: string;
                    foreground: string;
                };
                destructive: {
                    DEFAULT: string;
                    foreground: string;
                };
                muted: {
                    DEFAULT: string;
                    foreground: string;
                };
                accent: {
                    DEFAULT: string;
                    foreground: string;
                };
                popover: {
                    DEFAULT: string;
                    foreground: string;
                };
                card: {
                    DEFAULT: string;
                    foreground: string;
                };
                phoenix: {
                    orange: string;
                    pink: string;
                    magenta: string;
                    purple: string;
                    blue: string;
                    cyan: string;
                    green: string;
                    gold: string;
                    red: string;
                    dark: string;
                };
                sidebar: {
                    DEFAULT: string;
                    foreground: string;
                    primary: string;
                    "primary-foreground": string;
                    accent: string;
                    "accent-foreground": string;
                    border: string;
                    ring: string;
                };
            };
            borderRadius: {
                lg: string;
                md: string;
                sm: string;
            };
            keyframes: {
                "accordion-down": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "accordion-up": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
            };
            animation: {
                "accordion-down": string;
                "accordion-up": string;
            };
        };
    };
};

export { preset as default };
