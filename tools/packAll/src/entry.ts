/*

npx browserify ./dist/entry.js --standalone url -o out/url.js
npx babel out/url.js --out-file out/url.jsfl

 */


/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 * npx tsc --project tsconfig.json
 * npx browserify lib/index.js -o out/url.jsfl --standalone url
 */
// import * as url from "url";
const url = require("url");

// fileURLToPath, pathToFileURL
function fileURLToPath(url: string | URL): string {
    // 在 .jsfl 中，url 一定是 string
    // 如果未来在 Node.js 中调用，才可能是 URL
    const urlString =
        typeof url === "object" && url?.href ? (url as URL).href : (url as string);

    // H:\project\js\AnJsflScript-ts\
    const uri= FLfile.uriToPlatformPath(urlString);

    // H:/project/js/AnJsflScript-ts/
    return uri.replace(/\\/g, '/');
}

function pathToFileURL(path: string): URL {
    // file:///H|/project/js/AnJsflScript-ts/
    let fileUri = FLfile.platformPathToURI(path);

    let fileUrl = fileUri.replace("|", ":");

    // return new URL(fileUri);
    // 源码得出parse返回的Uri就是URI对象
    // @ts-ignore
    return url.parse(fileUrl);
}

// // 以下两个函数打包后没有
// // @ts-ignore
// url.fileURLToPath = fileURLToPath;
// // @ts-ignore
// url.pathToFileURL = pathToFileURL;

// URL
class aURL {
    constructor(public urlString: string) {
        // @ts-ignore
        return url.parse(urlString);
    }
}

export const URL = aURL;

// module.exports = url;
export { fileURLToPath, pathToFileURL };
