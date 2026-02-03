/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */

const uriToPath=FLfile.uriToPlatformPath;


// 可选：添加辅助函数（放在 process.ts 末尾或单独模块）
function getFilename(): string {
    return fl.scriptURI ? uriToPath(fl.scriptURI) : "";
}

function getDirname(): string {
    const fp = getFilename();
    if (!fp) {
        return "";
    }

    // 支持 Windows 和 Unix/Linux 路径分隔符
    const winIndex = fp.lastIndexOf("\\");
    const unixIndex = fp.lastIndexOf("/");
    const lastIndex = Math.max(winIndex, unixIndex);

    return lastIndex === -1 ? "" : fp.substring(0, lastIndex);
}

Object.defineProperty(window, "__filename", {
    get() {
        return getFilename();
    },
    configurable: false, // 不能被 delete
    enumerable: false // for...in 遍历时不会出现
});

Object.defineProperty(window, "__dirname", {
    get() {
        return getDirname();
    },
    configurable: false, // 不能被 delete
    enumerable: false // for...in 遍历时不会出现
});
