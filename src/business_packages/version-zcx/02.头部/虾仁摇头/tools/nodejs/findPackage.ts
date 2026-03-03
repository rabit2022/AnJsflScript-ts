/**
 * @file: findPackage.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import path from "path";
// import * as fs_promise from "fs/promises";
import * as fs from "fs";
import * as console from "node:console";

/**
 * 从 startDir 开始向上查找 package.json，直到根目录
 */
export function findNearestPackageJson(
    startDir: string
): { dir: string; pkg: any } | null {
    let current = startDir;
    while (true) {
        const pkgPath = path.join(current, "package.json");
        try {
            fs.accessSync(pkgPath); // 检查是否存在
            const content = fs.readFileSync(pkgPath, "utf-8");
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

if (require.main === module) {
    // (async () => {
    //
    // })();
    const repo = findRepoRoot(__dirname);
    console.log(repo);
}
