// build_all.ts
import { execSync } from "child_process";
import { readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dir = __dirname;
const files = readdirSync(dir).filter(
    (file) => file.endsWith(".ts") && file !== "build_all.ts"
);

for (const file of files) {
    const fullPath = resolve(dir, file);
    console.log(`Running  ${file}...`);

    try {
        // 关键：使用 `npx tsx` 而不是 `npx ts-node` 或 `node`
        // 并且传入完整路径
        execSync(`npx tsx "${fullPath}"`, {
            stdio: "inherit",
            cwd: dir,
            env: process.env
        });
    } catch (err) {
        console.error(`Failed to run  ${file}`);
    }
}
