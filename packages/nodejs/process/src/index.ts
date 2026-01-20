/**
 * 返回当前“工作目录”。
 *
 * 在 JSFL 中，没有标准的 cwd，我们使用：
 * - 如果脚本是从文件运行的 → 返回脚本所在目录
 * - 否则 → 返回用户文档目录（fallback）
 */
export function cwd(): string {
    if (fl.scriptURI) {
        // scriptURI 是 file:// URI，如 "file:///C|/scripts/myscript.jsfl"
        const scriptPath = FLfile.uriToPlatformPath(fl.scriptURI);
        // 提取目录部分（移除文件名）
        const lastSlash = Math.max(
            scriptPath.lastIndexOf("/"),
            scriptPath.lastIndexOf("\\")
        );
        if (lastSlash === -1) return scriptPath;
        return scriptPath.substring(0, lastSlash);
    }
    throw new Error("Could not find script uri");
}


