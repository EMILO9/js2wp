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
    build: {
      outDir: path.join(process.cwd(), ".plugins", c.slug_kebab),
      lib: {
        entry: entry,
        name: c.slug_constant,
        formats: ["iife"],
        fileName: () => `${c.js_path}.js`,
        cssFileName: c.css_path,
      },
      cssCodeSplit: false,
    },
  });
}
