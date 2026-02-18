import type { ConfigResult } from "@cli/core/GetConfig";
import { GetTemplate } from "@cli/core/GetTemplate";
import path from "node:path";
import fse from "fs-extra";
import hbs from "handlebars";

export async function GenPHP(config: ConfigResult) {
  const { computed: c } = config;
  const content = await GetTemplate(config.template);
  const template = hbs.compile(content);
  const output = template(config);
  const outPath = path.join(
    process.cwd(),
    ".plugins",
    c.slug_kebab,
    `${c.slug_kebab}.php`,
  );
  await fse.outputFile(outPath, output);
}
