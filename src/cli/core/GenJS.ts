import type { ConfigResult } from "@cli/core/GetConfig";
import path from "node:path";
import { build } from "vite";
import fg from "fast-glob";

export async function GenJS(config: ConfigResult) {
  const { computed: c, build: b } = config;
  const entry = b.entry
    ? b.entry
    : ((await fg(["src/{index,main}.{ts,js}", "{index,main}.{ts,js}"]))[0] ??
      "src/index.ts");
  await build({
    root: process.cwd(),
    logLevel: "silent",
    build: {
      rollupOptions: { external: ["@wordpress/i18n"] },
      outDir: path.join(process.cwd(), ".plugins", c.slug_kebab),
      emptyOutDir: false,
      minify: false,
      lib: {
        entry: entry,
        name: c.slug_constant,
        formats: ["iife"],
        fileName: () => `assets/js/${c.slug_kebab}.js`,
        cssFileName: `assets/css/${c.slug_kebab}`,
      },
      cssCodeSplit: false,
      assetsDir: "assets",
    },
    esbuild: { keepNames: true },
  });
}
