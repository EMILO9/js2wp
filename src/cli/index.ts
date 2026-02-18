#!/usr/bin/env node
import { Listr } from "listr2";
import { Command } from "commander";
import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";
import parsePackageName from "parse-packagejson-name";
import pkg from "@pkg";
import { GetConfig } from "@cli/core/GetConfig";
import { GenPHP } from "@cli/core/GenPHP";
import { GenJS } from "@cli/core/GenJS";
import { GenPOT } from "@cli/core/GenPot";

const cliName = parsePackageName(pkg.name).fullName;
const tasks = new Listr([]);
const program = new Command();
const explorer = cosmiconfig(cliName, {
  loaders: {
    ".ts": TypeScriptLoader(),
  },
});

program.name(cliName).description(pkg.description).version(pkg.version);

program
  .command("build")
  .description("...")
  .action(async () => {
    const rawConfig = await explorer.search();
    const config = await GetConfig(rawConfig);
    tasks.add([
      { title: "PHP", task: () => GenPHP(config) },
      { title: "JS", task: () => GenJS(config) },
      { title: "POT", task: () => GenPOT(config) },
    ]);
    await tasks.run();
  });

program.parse();
