// region toPackageModulePaths
// 可配置的忽略目录集合（小写，用于匹配）
import path from "path";
import { $ProjectFileDir$ } from "../ProjectFileDir";
import { findNearestPackageJson } from "../nodejs/findPackage";

const ignoredDirsArray = ["test", "tests", "dist", "build", "__tests__", "coverage", "XUL"];
const IGNORED_DIRS = new Set(ignoredDirsArray.map(dir => dir.toLowerCase()));

/**
 * 判断路径中是否包含需要忽略的目录（如 test, dist 等）
 */
function shouldIgnoreFile(absoluteFile: string): boolean {
    const parts = absoluteFile.split(path.sep);
    return parts.some((part) => IGNORED_DIRS.has(part.toLowerCase()));
}

/**
 * 将绝对文件路径映射为模块路径：{ [moduleName]: relativePosixPathWithoutExt }
 */
export async function toPackageModulePaths(
    absoluteFile: string,
    root: string = $ProjectFileDir$ // 假设 $ProjectFileDir$ 是项目根目录，用 process.cwd() 替代
): Promise<Record<string, string>> {
    // console.log(absoluteFile)
    // 1. 忽略 test/dist 等目录中的文件
    if (shouldIgnoreFile(absoluteFile)) {
        // console.log(absoluteFile)
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
    const posix = rel.split(path.sep).join("/");
    const posixWithoutExt = posix.replace(/\.[^.]+$/, "");

    return { [moduleName]: posixWithoutExt };
}
// endregion toPackageModulePaths
