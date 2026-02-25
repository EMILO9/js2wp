import type { ConfigSchemaOutput } from "@cli/schemas/ConfigSchema";
import path from "node:path";
import { build } from "vite";

export async function GenJS(config: ConfigSchemaOutput) {
  const { derived: d, build: b } = config;
  await build({
    root: process.cwd(),
    logLevel: "silent",
    build: {
      target: "es2018",
      rollupOptions: { external: ["@wordpress/i18n"] },
      outDir: path.join(".plugins", d.pluginNameKebab),
      emptyOutDir: false,
      minify: "esbuild",
      lib: {
        entry: b.entry,
        name: d.pluginNameConstant,
        formats: ["iife"],
        fileName: () => `js/${d.pluginNameKebab}.js`,
        cssFileName: `css/${d.pluginNameKebab}`,
      },
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      assetsDir: "assets",
    },
    esbuild: { keepNames: true },
  });
}
