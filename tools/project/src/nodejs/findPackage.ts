import path from "path";
import * as fs_promise from "fs/promises";
import * as fs from "fs";
import * as console from "node:console";

/**
 * 从 startDir 开始向上查找 package.json，直到根目录
 */
export async function findNearestPackageJson(
    startDir: string
): Promise<{ dir: string; pkg: any } | null> {
    let current = startDir;
    while (true) {
        const pkgPath = path.join(current, "package.json");
        try {
            await fs_promise.access(pkgPath); // 检查是否存在
            const content = await fs_promise.readFile(pkgPath, "utf-8");
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
 * 向上查找包含 .git 的仓库根目录
 */
export function findRepoRoot(start: string): string {
    let current = path.resolve(start);
    while (current !== path.dirname(current)) {
        if (fs.existsSync(path.join(current, ".git"))) {
            return current;
        }
        current = path.dirname(current);
    }
    return path.resolve(start); // fallback
}

// if (require.main === module) {
//     // (async () => {
//     //
//     // })();
//     const repo = findRepoRoot(__dirname);
//     console.log(repo);
// }

/**
 * 尝试读取指定目录下的 modules.json 文件并解析为 JSON 对象。
 * 如果文件不存在或无法解析，返回 null。
 */
export async function readModulesJson(dir: string): Promise<Record<string, any> | null> {
    const modulesPath = path.join(dir, "modules.json");
    try {
        const content = await fs_promise.readFile(modulesPath, "utf-8");
        try {
            return JSON.parse(content);
        } catch (parseError) {
            console.warn(
                `Warning: modules.json at ${modulesPath} is invalid JSON.`,
                parseError.message
            );
            return null;
        }
    } catch (error) {
        // 文件不存在或无权限等
        if (error.code === "ENOENT") {
            // 可选：不打印，静默忽略
            // console.debug(`modules.json not found in ${dir}`);
        } else {
            console.warn(`Failed to read modules.json in ${dir}:`, error.message);
        }
        return null;
    }
}
