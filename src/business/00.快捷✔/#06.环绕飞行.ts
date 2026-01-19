// path-to-uri.mjs (ESM) or .js (CommonJS)
import { fileURLToPath, pathToFileURL } from "url";


// 方法 1：使用 pathToFileURL（推荐）
function pathToUri(path) {
    // pathToFileURL 自动处理跨平台、编码、前导斜杠等
    return pathToFileURL(path).href;
}

// 示例
console.log(pathToUri("C:\\docs\\file.txt"));
// 输出: file:///C:/docs/file.txt

console.log(pathToUri("/home/user/file.txt"));
// 输出: file:///home/user/file.txt


// 方法 1：使用 fileURLToPath（推荐）
function uriToPath(uri) {
    if (!uri.startsWith("file://")) {
        throw new Error("Not a file URI");
    }
    return fileURLToPath(uri);
}

// 示例
console.log(uriToPath("file:///C:/docs/file.txt"));
// 输出: C:\docs\file.txt （Windows）
// 输出: /home/user/file.txt （Linux/macOS）

// console.log(uriToPath("file:///home/user/file.txt"));
// 输出: /home/user/file.txt