import { BUSINESS_OUT, DIST_BUSINESS } from "../ProjectFileDir";
import { ScanSpec, walk } from "../nodejs/walk";
import * as fs from "fs/promises";
import * as path from "path";
import { add_headers_to_file } from "../headers/addFileHeader";
import * as console from "node:console";

async function processDefined(fullPath: string) {
    const relPath = path.relative(DIST_BUSINESS, fullPath);
    console.log(`Processing ${relPath}`);
    const outPath = path.resolve(BUSINESS_OUT, relPath);
    const targetJsfl = outPath.replace(/\.js$/, ".jsfl");

    // console.log(`🔧 ${fullPath} -> ${targetJsfl}`);
    await fs.mkdir(path.dirname(targetJsfl), { recursive: true });

    const raw = await fs.readFile(fullPath, "utf-8");

    const replaced = raw
        .replace(/^define/, "require")
        .replace(`"exports"`, `"_exports"`)
        .replace(
            `    Object.defineProperty(exports, "__esModule", { value: true });\n`,
            ""
        );

    // 3. 组装新内容
    const srcTsRelPath = relPath.replace(/\.js$/, ".ts");
    const header = `// 这个文件由脚本 ${srcTsRelPath} 自动生成，任何手动修改都将会被覆盖.\n\n`;

    const wrapped = `(function(){\n${raw}\n})();`;

    await fs.writeFile(targetJsfl, header + wrapped, "utf-8");
    console.log(`✅ ${fullPath} -> ${targetJsfl}`);

    await add_headers_to_file(targetJsfl);
    console.log(`add headers to file ${targetJsfl}`);

    // 增量编译
    await fs.unlink(fullPath);
    console.log(`Deleted:  $ {fullPath}`);
}

/* ---------- 示例 ---------- */
if (require.main === module) {
    (async () => {
        // 获取DIST_LIB下的所有.js文件
        const cfg: ScanSpec = {
            roots: [DIST_BUSINESS],
            dirBlack: {
                part: ["node_modules"]
            },
            fileWhite: { part: [".js"] }
        };

        for await (const fullPath of walk(cfg)) {
            await processDefined(fullPath);
        }
    })();
}
