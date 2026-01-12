// generate_config.ts
import { $ProjectFileDir$, LIB_CORE, THIRD, TS_CONFIG_FILE } from "../ProjectFileDir";
import * as path from "path";
import * as fs from "fs/promises";
import { ScanSpec, walk } from "../nodejs/walk";

/* ---------- 1. 路径与文件常量 ---------- */

const REGION_RE =
    /(\/\/ region REQUIRE MODULES PATHS)[\s\S]*?(\/\/ endregion REQUIRE MODULES PATHS)/;

/* ---------- 2. 拼单行 JSON ---------- */
function toSingleLineJson(m: Record<string, string[]>): string {
    // 2缩进
    const lines = Object.entries(m).map(([k, [v]]) => `  "${k}": ["${v}"]`);
    return "{\n" + lines.join(",\n") + "\n}";
}

/* ---------- 2. 工具 ---------- */

function toJsflPaths(
    absoluteFile: string,
    root = $ProjectFileDir$
): Record<string, string[]> {
    const rel = path.relative(root, absoluteFile);
    const posix = rel.split(path.sep).join("/");
    const name = path.parse(absoluteFile).name;
    const noExt = posix.replace(/\.[^.]+$/, "") + ".jsfl"; // 保持.jsfl后缀

    return { [name]: [noExt] }; // ✅ 数组包字符串
}

function toTsPaths(
    absoluteFile: string,
    root = $ProjectFileDir$
): Record<string, string[]> {
    const rel = path.relative(root, absoluteFile);
    const posix = rel.split(path.sep).join("/");
    const name = path.parse(absoluteFile).name;
    const noExt = posix.replace(/\.[^.]+$/, "");

    return { [name]: [noExt] }; // ✅ 数组包字符串
}

async function replaceTsRegion(body: string): Promise<void> {
    const config = TS_CONFIG_FILE;
    const raw = await fs.readFile(config, "utf-8");
    await fs.writeFile(config, raw.replace(REGION_RE, `$1\n${body}$2`), "utf-8");
}

/* ---------- 3. 主流程 ---------- */

export async function buildTsConfig(): Promise<void> {
    /* ---------- 1. 收集路径 ---------- */
    const thirdModules: ScanSpec = {
        roots: [THIRD],
        dirBlack: { part: ["node_modules"] },
        fileWhite: { part: [".jsfl"] }
    };
    const libModules: ScanSpec = {
        roots: [LIB_CORE],
        dirBlack: { part: ["node_modules"] },
        fileWhite: { part: [".ts"] }
    };

    // 注意：这里用 string[] 做 value
    const map: Record<string, string[]> = {};
    for await (const p of walk(thirdModules)) Object.assign(map, toJsflPaths(p));
    for await (const p of walk(libModules)) Object.assign(map, toTsPaths(p));

    const body = toSingleLineJson(map) + "\n";

    const indented =
        body
            .split("\n")
            .map((line) => "    " + line) // 4 空格缩进
            .join("\n") + "\n"; // 末尾加逗号换行

    /* ---------- 3. 写文件 ---------- */
    await replaceTsRegion(indented); // ✅ 用 body，不是 indented
    console.log("✅ tsconfig.json 已更新");
}

/* ---------- 4. 运行 ---------- */
if (require.main === module) {
    (async () => {
        await buildTsConfig();
    })();
}
