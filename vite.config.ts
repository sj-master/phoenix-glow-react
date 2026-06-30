import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev-only config for the local component showcase in /demo.
// Not part of the published package.
export default defineConfig({
  root: "demo",
  plugins: [react()],
  server: { port: 8080 },
});
