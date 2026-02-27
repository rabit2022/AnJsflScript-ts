/**
 * @file: cwd.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

const SLASH = "/";

/**
 * 获取当前脚本所在的目录 URI
 * 使用现代 URL 处理逻辑，比手动 substring 更安全
 */
export const getcwd = (): string => {
    const scriptURI = fl.scriptURI;
    // 这里为了保持绝对兼容 JSFL 的特殊 URI 格式，推荐使用稳健的手动切片：
    const lastSlash = scriptURI.lastIndexOf(SLASH);
    // lastSlash+1 保留 /
    return lastSlash !== -1 ? scriptURI.substring(0, lastSlash+1) : "";
};


