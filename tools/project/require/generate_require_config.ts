// generate_config.ts
import { $ProjectFileDir$, LIB_OUT, REQUIRE_CONFIG_FILE, THIRD } from "../ProjectFileDir";
import * as path from "path";
import * as fs from "fs/promises";
import { ScanSpec, walk } from "../nodejs/walk";

/* ---------- 1. 路径与文件常量 ---------- */

const REGION_RE =
    /(\/\/ region REQUIRE MODULES PATHS)[\s\S]*?(\/\/ endregion REQUIRE MODULES PATHS)/;

/* ---------- 2. 工具 ---------- */
/** 单文件 -> { 模块名: 相对 POSIX 路径(无扩展) } */
function toRequireModulePaths(
    absoluteFile: string,
    root = $ProjectFileDir$
): Record<string, string> {
    const rel = path.relative(root, absoluteFile);
    const posix = rel.split(path.sep).join("/");
    const name = path.parse(absoluteFile).name;
    return { [name]: posix.replace(/\.[^.]+$/, "") };
}

/** 把 region 中间替换成新正文 */
async function replaceRequireRegion(body: string): Promise<void> {
    const config = REQUIRE_CONFIG_FILE;
    const raw = await fs.readFile(config, "utf-8");
    await fs.writeFile(config, raw.replace(REGION_RE, `$1\n${body}$2`), "utf-8");
}

/* ---------- 3. 主流程 ---------- */
export async function buildRequireConfig(): Promise<void> {
    const thirdMoudules: ScanSpec = {
        roots: [THIRD],
        dirBlack: { part: ["node_modules"] },
        fileWhite: { part: [".jsfl"] }
    };
    const libMoudules: ScanSpec = {
        roots: [LIB_OUT],
        dirBlack: { part: ["node_modules"] },
        fileWhite: { part: [".jsfl"] }
    };

    const map: Record<string, string> = {};
    for await (const p of walk(thirdMoudules))Object.assign(map, toRequireModulePaths(p));
    for await (const p of walk(libMoudules)) Object.assign(map, toRequireModulePaths(p));

    const indented =
        JSON.stringify(map, null, 4)
            .split("\n")
            .map((line) => "    " + line) // 4 空格缩进
            .join("\n") + ",\n"; // 末尾加逗号换行

    await replaceRequireRegion(indented);
    console.log("✅ require.config.jsfl 已更新");
}

/* ---------- 4. 运行 ---------- */
if (require.main === module) {
    (async () => {
        await buildRequireConfig();
    })();
}
