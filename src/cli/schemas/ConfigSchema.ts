import { z } from "zod";
import { kebabCase, constantCase } from "change-case";
import { MenuPageSchema } from "@cli/schemas/MenuPageSchema";
import { SubmenuPageSchema } from "@cli/schemas/SubmenuPageSchema";

export const ConfigSchema = z
	.discriminatedUnion("template", [MenuPageSchema, SubmenuPageSchema])
	.transform((data) => ({
		...data,
		derived: {
			pluginNameConstant: constantCase(data.headers.pluginName),
			pluginNameKebab: kebabCase(data.headers.pluginName),
		},
	}));

export type ConfigSchemaInput = z.input<typeof ConfigSchema>;
export type ConfigSchemaOutput = z.output<typeof ConfigSchema>;
