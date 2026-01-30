// generate_config.ts
import {$ProjectFileDir$, LIB_OUT, PACKAGES, REQUIRE_CONFIG_FILE, THIRD} from "../ProjectFileDir";
import * as path from "path";
import * as fs from "fs/promises";
// import * as fs from 'fs'; // ← 使用普通 fs，不是 fs/promises
import {ScanSpec, walk} from "../nodejs/walk";
import console from "node:console";
import {toPackageModuleJsons} from "./toXULPaths";
import {toPackageModules} from "./toPackageModules";
import { shouldIgnoreFile } from "../nodejs/shouldIgnoreFile";

/* ---------- 1. 路径与文件常量 ---------- */
const REGION_RE =
    /(\/\/ region REQUIRE MODULES PATHS)[\s\S]*?(\/\/ endregion REQUIRE MODULES PATHS)/;

const BLACK_LIST = new Set(['node_modules', 'Third', 'temp', '.git','test']); // 黑名单目录名


/** 单文件 -> { 模块名: 相对 POSIX 路径(无扩展) } */
function toRequireModulePaths(
    absoluteFile: string,
    root = $ProjectFileDir$
): Record<string, string> {
    const rel = path.relative(root, absoluteFile);
    if (shouldIgnoreFile(absoluteFile,  BLACK_LIST)) {
        // console.log('Excluded:', absoluteFile);
        return {};
    }

    const posix = rel.split(path.sep).join("/");
    const name = path.parse(absoluteFile).name;
    return {[name]: posix.replace(/\.[^.]+$/, "")};
}


/** 把 region 中间替换成新正文 */
async function replaceRequireRegion(body: string): Promise<void> {
    const config = REQUIRE_CONFIG_FILE;
    const raw = await fs.readFile(config, "utf-8");
    await fs.writeFile(config, raw.replace(REGION_RE, `$1\n${body}$2`), "utf-8");
}


/* ---------- 3. 主流程 ---------- */
export async function buildRequireConfig(): Promise<void> {
    // "console": "third/_custom/xjsfl/console",

    const thirdMoudules: ScanSpec = {
        roots: [THIRD],
        dirBlack: {part: ["node_modules"]},
        fileWhite: {part: [".jsfl"]}
    };
    const thirdMouduleJsons: ScanSpec = {
        roots: [THIRD],
        dirBlack: {part: ["node_modules"]},
        fileWhite: {part: ["modules.json"]}
    };


    const libMoudules: ScanSpec = {
        roots: [LIB_OUT],
        dirBlack: {part: ["node_modules"]},
        fileWhite: {part: [".jsfl"]}
    };


    const packageModules: ScanSpec = {
        roots: [PACKAGES],
        dirBlack: {part: ["node_modules"]},
        fileWhite: {part: [".jsfl"]}
    };
    // const XULModules = path.join(PACKAGES, "xjsfl","XUL");
    const packageModulesJsons: ScanSpec = {
        roots: [PACKAGES],
        dirBlack: {part: ["node_modules"]},
        fileWhite: {part: ["modules.json"]}
    };



    const map: Record<string, string> = {};
    for await (const p of walk(thirdMoudules))Object.assign(map,await toPackageModules(p));
    for await (const p of walk(thirdMouduleJsons))Object.assign(map,await toPackageModuleJsons(p));
    for await (const p of walk(libMoudules)) Object.assign(map, toRequireModulePaths(p));
    for await (const p of walk(packageModules)) Object.assign(map,await toPackageModules(p));
    for await (const p of walk(packageModulesJsons)) Object.assign(map,await toPackageModuleJsons(p));

    // console.log(map)
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



