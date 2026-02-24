import { z } from "zod";

export const BuildSchema = z.object({
	projectDir: z.string().trim().nonempty().default("src"),
	entry: z.string().trim().nonempty().default("src/index.ts"),
	external: z.array(z.string().trim().nonempty()).default([]),
	outDir: z.string().trim().nonempty().default(".plugins"),
	assetsDir: z.string().trim().nonempty().default("assets"),
	framework: z.enum(["none", "vue", "react", "svelte", "solid", "preact"]).default("none"),
	cssPreprocessor: z.enum(["none", "scss", "less"]).default("none"),
});
