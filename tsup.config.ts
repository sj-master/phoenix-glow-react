import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/tailwind-preset.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom", "tailwindcss"],
  outExtension({ format }) {
    return { js: format === "esm" ? ".esm.js" : ".js" };
  },
});
