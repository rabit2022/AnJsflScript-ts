// ========== 工具函数（从 console.ts 复用逻辑）==========
/**
 * 将 URI 转为本地平台路径（处理 file:///H|/ → H:/）
 */
function uriToPath(uri: string): string {
    if (uri.indexOf("file:///") === 0) {
        uri = uri.substring(8);
    }
    if (uri.length >= 2 && uri.charAt(1) === "|") {
        uri = uri.charAt(0) + ":" + uri.substring(2);
    }
    return uri.replace(/\//g, "\\"); // Windows 风格路径（JSFL 通常运行在 Windows）
}

// 可选：添加辅助函数（放在 process.ts 末尾或单独模块）
function getFilename(): string {
    return fl.scriptURI ? uriToPath(fl.scriptURI) : "";
}

function getDirname(): string {
    const fp = getFilename();
    const i = fp.lastIndexOf("\\");
    return i === -1 ? "" : fp.substring(0, i);
}

Object.defineProperty(window, "__filename", {
    get() {
        return getFilename();
    },
    configurable: false, // 不能被 delete
    enumerable: false    // for...in 遍历时不会出现
});

Object.defineProperty(window, "__dirname", {
    get() {
        return getDirname();
    },
    configurable: false, // 不能被 delete
    enumerable: false    // for...in 遍历时不会出现
});