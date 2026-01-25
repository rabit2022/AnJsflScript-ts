/**
 * @file: #06.环绕飞行.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// path-to-uri.mjs (ESM) or .js (CommonJS)
import { fileURLToPath, pathToFileURL } from "url";

const path = "C:\\docs\\file.txt";
// const path ="file:///C|/docs/file.txt";
const uri = pathToFileURL(path);
console.log(uri.href);

const srcPath = fileURLToPath(uri);
console.log(srcPath);
