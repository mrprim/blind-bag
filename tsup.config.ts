import { defineConfig } from "tsup";
import yaml from "esbuild-plugin-yaml";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [yaml.yamlPlugin({})],
});