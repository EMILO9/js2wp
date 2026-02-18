import { exec } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import type { ConfigResult } from "@cli/core/GetConfig";

const execAsync = promisify(exec);

export async function GenPOT(config: ConfigResult) {
  const { computed: c } = config;
  const pluginPath = path.join(process.cwd(), ".plugins", c.slug_kebab);
  const potPath = path.join(pluginPath, "languages", `${c.slug_kebab}.pot`);
  await execAsync(`wp i18n make-pot ${pluginPath} ${potPath}`, {
    cwd: process.cwd(),
  });
}
