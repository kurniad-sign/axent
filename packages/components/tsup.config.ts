import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/main.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));