import fg from "fast-glob";
import fs from "fs-extra";
import precinct from "precinct";
import path from "node:path";

async function WPDepExtraction() {
  const projectDir = path.join(process.cwd(), "src");
  const patterns = ["**/*.{js,cjs,mjs,ts,tsx,vue}"];
  const deps = [{ jquery: { global: "jQuery", handle: "jquery" } }];
  const files = await fg(patterns, { cwd: projectDir });
  for (const file of files) {
    const content = await fs.readFile(path.join(projectDir, file), "utf-8");
    const ext = path.extname(file).toLowerCase();
    const deps = precinct(content);
    for (const dep of deps) {
      switch (dep) {
        case "@wordpress/*": {}
      }
    }
  }
  return files;
}

(async () => WPDepExtraction())().then(console.log);
