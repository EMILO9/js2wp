// Load the test module
import test from "node:test";
import assert from "node:assert/strict";
import { execa } from "execa";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("js2wp build command transforms files correctly and creates pot with translations", async (t) => {
  const fixtureDir = path.join(__dirname, "fixtures", "test-a");
  const pluginsDir = path.join(fixtureDir, ".plugins");

  // Clean up any previous build
  try {
    await execa("rm", ["-rf", pluginsDir], { cwd: fixtureDir });
  } catch (error) {
    // Ignore if directory doesn't exist
  }

  // Run js2wp build command
  const result = await execa("npx", ["js2wp", "build"], {
    cwd: fixtureDir,
    reject: false,
    timeout: 15000
  });

  // Check that build succeeded
  assert.equal(result.exitCode, 0, `Build should complete with exit code 0, got ${result.exitCode}`);

  // Test if the files are transformed correctly
  const phpFile = path.join(pluginsDir, "test-a", "test-a.php");
  const jsFile = path.join(pluginsDir, "test-a", "assets", "js", "test-a.js");

  assert.ok(existsSync(phpFile), "PHP file should be generated at ./.plugins/test-a/test-a.php");
  assert.ok(existsSync(jsFile), "JS file should be generated at ./.plugins/test-a/assets/js/test-a.js");

  // Test if the pot file is created
  const potFile = path.join(pluginsDir, "test-a", "languages", "test-a.pot");
  assert.ok(existsSync(potFile), "POT file should be created at ./.plugins/test-a/languages/test-a.pot");

  // Test if the pot file contains the correct translation references
  const potContent = readFileSync(potFile, "utf8");

  // Check for references to both PHP and JS files
  assert.ok(potContent.includes("#: assets/js/test-a.js"), "POT file should contain reference to assets/js/test-a.js");
  assert.ok(potContent.includes("#: test-a.php"), "POT file should contain reference to test-a.php");

  console.log("✅ Build test passed - Files transformed correctly and POT file contains proper translation references");
}, {
  timeout: 20000 // 20 second test timeout
});
