/**
 * @file: dom.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import { DomSelector } from "../types";
import { isUrl } from "../Util/isPathOrUrl";
import * as path from "path";
import { pathToFileURL } from "url";

export function parseDom(v: string): DomSelector {
    v = v.trim();

    if (v) {
        if (!isUrl(v)) {
            // path

            let url = v;

            // 判断是否是绝对路径
            if (!path.isAbsolute(v)) {
                // 转为绝对路径（相对于当前工作目录）
                url = path.resolve(v);
                // 或者相对于当前文件所在目录：
                // v = path.resolve(__dirname, v);
            }

            // 转为 file:// URL 字符串
            url = pathToFileURL(v).href;
            // 现在 url 是类似 "file:///C:/project/file.txt" 或 "file:///Users/name/file.txt"

            return {
                type: "url",
                value: url
            };
        }
    }

    return {
        type: "name",
        value: v
    };
}

// console.log(parseDom('file:///c|path/to.fla'))
// console.log(parseDom('/path/to/item'))
