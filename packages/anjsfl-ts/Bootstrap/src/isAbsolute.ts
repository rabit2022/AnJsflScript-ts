/**
 * @file: isAbsolute.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

const startswith = require("string.prototype.startswith");

/**
 * 断言路径必须是字符串
 * 显式添加类型注解以满足 TS2775 要求
 */
const assertPath: (path: unknown) => asserts path is string = (path) => {
    if (typeof path !== "string") {
        // 使用 template literal 和 JSON.stringify 安全地处理非字符串输入
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(path)}.`);
    }
};

/**
 * 判断是否为绝对路径 (JSFL 中通常以 file:/// 开头)
 */
export const isAbsolute = (path: string): boolean => {
    // 这里调用 assertPath 后，path 在后续代码中会被 TS 自动收窄为 string
    assertPath(path);
    // return path.startsWith('file:///');
    return startswith(path, "file:///");
};
