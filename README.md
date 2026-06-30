# phoenix-glow-react

**PHX-IT • Phoenix UI** — a full React component library by Skyler Jones. Ships two layers in one package:

1. **The Glow kit** — six self-contained neon components (`GlowButton`, `GlowInput`, `GlowCard`, `GlowSwitch`, `GlowBadge`, `GlowAccordion`) styled by a single plain-CSS file. Zero dependencies.
2. **The Phoenix UI layer** — 37 Tailwind + Radix components (buttons, dialogs, selects, sidebar, charts, forms, and more), bundled with their own `cn` helper.

## Install

```bash
npm install phoenix-glow-react
```

`react` and `react-dom` (>=17) are peer dependencies.

## Layer 1 — the Glow kit

Import the stylesheet once, then use the components. No Tailwind needed.

```jsx
import { GlowButton, GlowCard, GlowBadge } from "phoenix-glow-react";
import "phoenix-glow-react/styles/phoenix-glow.css";

<GlowButton variant="orange" glow>Launch</GlowButton>
<GlowCard accent="cyan">Neon card</GlowCard>
<GlowBadge color="pink" text="New" />
```

## Layer 2 — the Phoenix UI layer

These are Tailwind + Radix components, so your app needs Tailwind configured. Extend your Tailwind config with the shipped preset, and add the Phoenix HSL token block to your global CSS.

```js
// tailwind.config.js
import phoenixPreset from "phoenix-glow-react/tailwind-preset";

export default {
  presets: [phoenixPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/phoenix-glow-react/dist/**/*.js",
  ],
};
```

```jsx
import { Button, Dialog, DialogContent, Select, Sidebar } from "phoenix-glow-react";

<Button variant="phoenix">Click me</Button>
```

The token block (the `:root` / `.dark` HSL variables that drive `bg-background`, `text-phoenix-orange`, etc.) ships as a standalone file. Import it once in your app's global stylesheet so the Tailwind colors resolve:

```css
@import "phoenix-glow-react/styles/phoenix-tokens.css";
```

## What's included

Glow kit: GlowButton, GlowInput, GlowCard, GlowSwitch, GlowBadge, GlowAccordion.

Phoenix UI: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, switch, table, tabs, textarea, toast (+ toaster), toggle, toggle-group, tooltip, and a Sonner wrapper (`SonnerToaster` / `sonnerToast`).

Utilities: `cn`, `useIsMobile`, `useToast`, `toast`.

## Local development

```bash
npm install
npm run dev      # React showcase (Vite) at localhost:8080
npm run build    # bundles ESM + CJS + types into /dist via tsup
```

Two demos ship in `/demo`:
- **`landing.html`** — the full decked-out showcase (the one live at [phoenixsecure.dev](https://phoenixsecure.dev)): sticky nav, hero, every component shown live with copy-able code snippets. Open it directly in any browser.
- **`index.html` + `demo-app.jsx`** — the React showcase (run with `npm run dev`).

## Links

- **GitHub:** https://github.com/sj-master/phoenix-glow-react
- **npm:** https://www.npmjs.com/package/phoenix-glow-react _(publishing soon)_
- **Live showcase:** https://phoenixsecure.dev

## License

Apache-2.0 © 2025 Skyler J. Jones (PHX-IT) — https://phoenixsecure.dev
