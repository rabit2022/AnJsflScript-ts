// generate_config.ts
import { $ProjectFileDir$, LIB_OUT, PACKAGES, REQUIRE_CONFIG_FILE, THIRD } from "../ProjectFileDir";
import * as path from "path";
import * as fs from "fs/promises";
// import * as fs from 'fs'; // ← 使用普通 fs，不是 fs/promises
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

// region toPackageModulePaths
// 可配置的忽略目录集合（小写，用于匹配）
const IGNORED_DIRS = new Set(['test', 'tests', 'dist', 'build', '__tests__', 'coverage']);

/**
 * 判断路径中是否包含需要忽略的目录（如 test, dist 等）
 */
function shouldIgnoreFile(absoluteFile: string): boolean {
    const parts = absoluteFile.split(path.sep);
    return parts.some(part => IGNORED_DIRS.has(part.toLowerCase()));
}

/**
 * 从 startDir 开始向上查找 package.json，直到根目录
 */
async function findNearestPackageJson(startDir: string): Promise<{ dir: string; pkg: any } | null> {
    let current = startDir;
    while (true) {
        const pkgPath = path.join(current, 'package.json');
        try {
            await fs.access(pkgPath); // 检查是否存在
            const content = await fs.readFile(pkgPath, 'utf-8');
            const pkg = JSON.parse(content);
            return { dir: current, pkg };
        } catch {
            // 无法读取或不存在，继续向上
        }

        const parent = path.dirname(current);
        if (parent === current) {
            // 已到达根目录（如 / 或 C:\）
            break;
        }
        current = parent;
    }
    return null;
}

/**
 * 将绝对文件路径映射为模块路径：{ [moduleName]: relativePosixPathWithoutExt }
 */
export async function toPackageModulePaths(
    absoluteFile: string,
    root: string = $ProjectFileDir$ // 假设 $ProjectFileDir$ 是项目根目录，用 process.cwd() 替代
): Promise<Record<string, string>> {
    // 1. 忽略 test/dist 等目录中的文件
    if (shouldIgnoreFile(absoluteFile)) {
        return {};
    }

    const fileDir = path.dirname(absoluteFile);

    // 2. 查找最近的 package.json
    const found = await findNearestPackageJson(fileDir);

    // 3. 确定模块名
    let moduleName: string;
    if (found?.pkg?.name) {
        moduleName = found.pkg.name;
    } else {
        // 使用文件名（不含扩展名）作为 fallback
        moduleName = path.basename(absoluteFile, path.extname(absoluteFile));
    }

    // 4. 计算相对于 root 的 POSIX 路径（不含扩展名）
    const rel = path.relative(root, absoluteFile);
    const posix = rel.split(path.sep).join('/');
    const posixWithoutExt = posix.replace(/\.[^.]+$/, '');

    return { [moduleName]: posixWithoutExt };
}
// endregion toPackageModulePaths



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
        dirBlack: { part: ["node_modules"] },
        fileWhite: { part: [".jsfl"] }
    };
    const libMoudules: ScanSpec = {
        roots: [LIB_OUT],
        dirBlack: { part: ["node_modules"] },
        fileWhite: { part: [".jsfl"] }
    };
    const packageModules: ScanSpec = {
        roots: [PACKAGES],
        dirBlack: { part: ["node_modules"] },
        fileWhite: { part: [".jsfl"] }
    };

    const map: Record<string, string> = {};
    for await (const p of walk(thirdMoudules))Object.assign(map, toRequireModulePaths(p));
    for await (const p of walk(libMoudules)) Object.assign(map, toRequireModulePaths(p));
    for await (const p of walk(packageModules)) Object.assign(map,await toPackageModulePaths(p));

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



