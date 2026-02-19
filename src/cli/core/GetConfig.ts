import type { CosmiconfigResult } from "cosmiconfig";
import { z } from "zod";
import merge from "just-merge";
import { kebabCase, constantCase } from "change-case";
import { MenuPageSchema } from "@cli/schemas/MenuPageSchema";
import { SubmenuPageSchema } from "@cli/schemas/SubmenuPageSchema";

const ConfigSchema = z.discriminatedUnion("template", [
  MenuPageSchema,
  SubmenuPageSchema,
]);

export async function GetConfig(config: CosmiconfigResult) {
  const parsed = ConfigSchema.parse(config?.config);
  const { headers } = parsed;
  const combined = merge(parsed, {
    computed: {
      slug_kebab: kebabCase(headers.pluginName),
      slug_constant: constantCase(headers.pluginName),
    },
  });
  return combined;
}

export type ConfigResult = Awaited<ReturnType<typeof GetConfig>>;
export type Config = z.input<typeof ConfigSchema>;
