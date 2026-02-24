import type { ConfigSchemaOutput } from "@cli/schemas/ConfigSchema";
import { GetTemplate } from "@cli/core/GetTemplate";
import path from "node:path";
import fse from "fs-extra";
import hbs from "handlebars";

export async function GenPHP(config: ConfigSchemaOutput) {
	const { derived: d } = config;
	const content = await GetTemplate(config.template);
	const template = hbs.compile(content);
	const output = template(config);
	const outPath = path.join(
		process.cwd(),
		".plugins",
		d.pluginNameKebab,
		`${d.pluginNameKebab}.php`,
	);
	await fse.outputFile(outPath, output);
}
