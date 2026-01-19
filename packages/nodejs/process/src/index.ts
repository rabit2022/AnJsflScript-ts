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

// // ========== 工具函数（从 console.ts 复用逻辑）==========
// /**
//  * 将 URI 转为本地平台路径（处理 file:///H|/ → H:/）
//  */
// function uriToPath(uri: string): string {
//     if (uri.indexOf("file:///") === 0) {
//         uri = uri.substring(8);
//     }
//     if (uri.length >= 2 && uri.charAt(1) === "|") {
//         uri = uri.charAt(0) + ":" + uri.substring(2);
//     }
//     return uri.replace(/\//g, "\\"); // Windows 风格路径（JSFL 通常运行在 Windows）
// }
//
// // 可选：添加辅助函数（放在 process.ts 末尾或单独模块）
// export function __filename(): string {
//     return fl.scriptURI ? uriToPath(fl.scriptURI) : "";
// }
//
// export function __dirname(): string {
//     const fp = __filename();
//     const i = fp.lastIndexOf("\\");
//     return i === -1 ? "" : fp.substring(0, i);
// }
