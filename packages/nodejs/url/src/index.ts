/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import * as url from "url";
import { parse } from "url";

// fileURLToPath, pathToFileURL
function fileURLToPath(url: string | URL): string {
    // 在 .jsfl 中，url 一定是 string
    // 如果未来在 Node.js 中调用，才可能是 URL
    const urlString =
        typeof url === "object" && url?.href ? (url as URL).href : (url as string);

    return FLfile.uriToPlatformPath(urlString);
}

function pathToFileURL(path: string): URL {
    let fileUri = FLfile.platformPathToURI(path);

    // file:///C|/docs/file.txt
    fileUri = fileUri.replace("|", ":");

    // return new URL(fileUri);
    // @ts-ignore 源码得出parse返回的Uri就是URI对象
    return parse(fileUri);
}

// 以下两个函数打包后没有
// @ts-ignore
url.fileURLToPath = fileURLToPath;
// @ts-ignore
url.pathToFileURL = pathToFileURL;

module.exports = url;
