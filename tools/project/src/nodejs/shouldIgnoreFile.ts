import path from "path";


/**
 * 判断路径中是否包含需要忽略的目录（如 test, dist 等）
 */
export function shouldIgnoreFile(absoluteFile: string,IGNORED_DIRS:Set<string>): boolean {
    const parts = absoluteFile.split(path.sep);
    return parts.some((part) => IGNORED_DIRS.has(part.toLowerCase()));
}