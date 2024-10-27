import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/main.ts"],
  format: ["esm", 'cjs'],
  dts: true,
  sourcemap: true,
  external: ["react"],
  clean: true,
  ...options,
}));