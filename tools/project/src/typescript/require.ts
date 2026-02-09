import {$ProjectFileDir$, BUSINESS_OUT, BUSINESS_PACKAGES, DIST_BUSINESS} from "../ProjectFileDir";
import {ScanSpec, walk} from "../nodejs/walk";
import * as fsp from "fs/promises";
import * as fs from "fs";
import * as path from "path";
import {add_headers_to_file} from "../headers/addFileHeader";
import * as console from "node:console";
import {toPackageModules} from "../nodejs/toPackageModules";
import {toPackageModuleJsons} from "../nodejs/toXULPaths";

async function processDefined(fullPath: string) {
    const relPath = path.relative(DIST_BUSINESS, fullPath);
    console.log(`Processing ${relPath}`);
    const outPath = path.resolve(BUSINESS_OUT, relPath);
    const targetJsfl = outPath.replace(/\.js$/, ".jsfl");

    // console.log(`🔧 ${fullPath} -> ${targetJsfl}`);
    await fsp.mkdir(path.dirname(targetJsfl), {recursive: true});

    const raw = await fsp.readFile(fullPath, "utf-8");

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

    const wrapped = `(function(){\n${replaced}\n})();`;

    await fsp.writeFile(targetJsfl, header + wrapped, "utf-8");
    console.log(`✅ ${fullPath} -> ${targetJsfl}`);

    await add_headers_to_file(targetJsfl);
    console.log(`add headers to file ${targetJsfl}`);

    // 增量编译
    await fsp.unlink(fullPath);
    console.log(`Deleted:  $ {fullPath}`);
}


// 处理函数
function transformPaths(
    map: Record<string, string>,
    projectDir: string
): Record<string, string> {
    const result: Record<string, string> = {};

    for (const [key, value] of Object.entries(map)) {
        // 键：添加 projectDir 前缀（保持原路径分隔符风格，或统一）
        const newKey = path.join(projectDir, "out", key + ".jsfl");

        // 值：添加 projectDir 前缀 + .jsfl 后缀
        const newValue = path.join(projectDir, value + ".jsfl");

        result[newKey] = newValue;
    }

    return result;
}

// 确保目标目录存在
function ensureDir(dir: string) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }
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
            fileWhite: {part: [".js"]}
        };

        // DIST_LIB  生成jsfl文件
        for await (const fullPath of walk(cfg)) await processDefined(fullPath);

        const businessPackage: ScanSpec = {
            roots: [BUSINESS_PACKAGES],
            dirBlack: {part: ["node_modules"]},
            fileWhite: {part: [".jsfl"]}
        };
        const businessPackageModules: ScanSpec = {
            roots: [BUSINESS_PACKAGES],
            dirBlack: {part: ["node_modules"]},
            fileWhite: {part: ["modules.json"]}
        };


        const map: Record<string, string> = {};
        for await (const p of walk(businessPackage)) Object.assign(map, await toPackageModules(p));
        for await (const p of walk(businessPackageModules)) Object.assign(map, await toPackageModuleJsons(p));


        // 执行转换
        const transformed = transformPaths(map, $ProjectFileDir$);


// 执行复制
        for (const [dest, src] of Object.entries(transformed)) {
            if (!fs.existsSync(src)) {
                console.warn(`⚠️ 源文件不存在: ${src}`);
                continue;
            }

            const destDir = path.dirname(dest);
            ensureDir(destDir);

            fs.copyFileSync(src, dest);
            console.log(`✅ 已复制: ${src} → ${dest}`);
        }

    })();
}
