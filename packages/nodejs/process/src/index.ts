/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 *//**
 * 返回当前“工作目录”。
 *
 * 在 JSFL 中，没有标准的 cwd，我们使用：
 * - 如果脚本是从文件运行的 → 返回脚本所在目录
 * - 否则 → 返回用户文档目录（fallback）
 */
export function cwd(): string {
    if (fl.scriptURI) {
        // scriptURI 是 file:// URI，如 "file:///C|/scripts/myscript.jsfl"
        let scriptPath = FLfile.uriToPlatformPath(fl.scriptURI);
        // 提取目录部分（移除文件名）
        const lastSlash = Math.max(
            scriptPath.lastIndexOf("/"),
            scriptPath.lastIndexOf("\\")
        );
        if (lastSlash === -1) return scriptPath;

        // 替换\为/,否则path-browserfy无法识别路径
        scriptPath = scriptPath.replace(/\\/g, "/");

        return scriptPath.substring(0, lastSlash);
    }
    throw new Error("Could not find script uri");
}
