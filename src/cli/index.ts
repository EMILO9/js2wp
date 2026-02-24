#!/usr/bin/env node
import { Listr } from "listr2";
import { Command } from "commander";
import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";
import parsePackageName from "parse-packagejson-name";
import pkg from "@pkg";
import { GenPHP } from "@cli/core/GenPHP";
import { GenJS } from "@cli/core/GenJS";
import { execa } from "execa";
import { remove } from "fs-extra";
import path from "node:path";
import { ConfigSchema } from "@cli/schemas/ConfigSchema";

const cliName = parsePackageName(pkg.name).fullName;
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
		const config = ConfigSchema.parse(rawConfig?.config);
		const { derived: d } = config;
		const tasks = new Listr([
			{
				title: " 🧹 Cleaning old build",
				task: () => remove(path.join(".plugins", d.pluginNameKebab)),
			},
			{
				title: " 💻 Building plugin code",
				task: () =>
					new Listr([
						{
							title: " ⚡ Generating PHP files",
							task: () => GenPHP(config),
						},
						{
							title: " ✨ Generating JS files",
							task: () => GenJS(config),
						},
					]),
			},
			{
				title: " 🌐 Generating translation files",
				task: () =>
					execa("npx", [
						"makepot",
						`.plugins/${d.pluginNameKebab}`,
						`.plugins/${d.pluginNameKebab}/languages`,
						"--silent",
					]),
			},
		]);
		await tasks.run();
	});

program.parse();
