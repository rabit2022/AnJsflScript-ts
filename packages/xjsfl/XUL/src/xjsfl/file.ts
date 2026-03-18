/**
 * @file: file.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

import * as path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { BASEURI } from "./uri";

type FileType = "template";

export class XjsflFile {
    /**
     * Attempts to load a file from the framework
     */
    static load(pathOrName: string, type: FileType): XML | string {
        let templatePath: string;

        switch (type) {
            case "template":
                templatePath = "assets/templates/";
                break;
            default:
                throw new Error("Unsupported type: " + type);
        }

        const xjsflPath = fileURLToPath(BASEURI);
        const fullTemplate = path.join(xjsflPath, templatePath, pathOrName);

        const uri = pathToFileURL(fullTemplate).href;

        let content: string | XML;

        const ext = path.extname(fullTemplate).slice(1);

        switch (ext) {
            case "xul":
            case "xml":
                content = FLfile.read(uri)!;
                content = content.replace(/<\?.+?>/, "");
                content = new XML(content);
                break;

            default:
                content = FLfile.read(uri)!;
        }

        return content;
    }
}
