/**
 * @file: dev-xml-loader.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// dev-asset-loader.ts 或直接放在 index.ts 顶部
if (typeof window === "undefined" && require.extensions) {
    const fs = require("fs");
    const extensions = [".xml", ".txt", ".svg", ".html", ".json5", ".md"]; // 👈 按需添加

    for (const ext of extensions) {
        // @ts-ignore
        require.extensions[ext] = (module, filename) => {
            const content = fs.readFileSync(filename, "utf8");
            module.exports = content;
        };
    }
}
