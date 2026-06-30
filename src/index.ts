/**
 * phoenix-glow-react
 * PHX-IT • Phoenix UI — by Skyler Jones.
 *
 * Copyright (c) 2025 Skyler J. Jones
 * Licensed under the Apache License, Version 2.0
 *
 * Two layers ship together:
 *   1. The Glow kit — self-contained neon components styled by phoenix-glow.css.
 *      import "phoenix-glow-react/styles/phoenix-glow.css";
 *   2. The Phoenix UI layer — Tailwind + Radix components. Requires Tailwind in
 *      your app; extend your config with the shipped preset.
 */

// Layer 1 — Glow kit (plain CSS, zero deps)
export * from "./components";

// Layer 2 — Phoenix UI (Tailwind + Radix)
export * from "./components/ui";

// Utilities
export { cn } from "./lib/utils";
export { useIsMobile } from "./hooks/use-mobile";
