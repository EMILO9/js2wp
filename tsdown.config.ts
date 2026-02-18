import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: "src/lib/index.ts",
    format: ["esm", "cjs"],
    dts: true,
    outDir: "dist/lib",
  },
  {
    entry: "src/cli/index.ts",
    format: ["esm"],
    dts: false,
    outDir: "dist/cli",
    loader: {
      ".hbs": "text",
    },
    outputOptions: { chunkFileNames: "templates/[hash].js" },
  },
]);
