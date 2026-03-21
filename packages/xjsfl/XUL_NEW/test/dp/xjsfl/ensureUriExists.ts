import * as fs from "fs";
import * as path from "path-browserify";
import {fileURLToPath} from "url";

export function ensureUriExists(uri:string) {
    const filePath = fileURLToPath(uri).replace(/\\/g,"/");

    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, ''); // 创建空文件
    }
}


// file:///H|/project/js/AnJsflScript-ts/packages/xjsfl/XUL/core/ui/dialog.xul
// H:\project\js\AnJsflScript-ts\packages\xjsfl\XUL\core\ui\dialog.xul .

// const uri = "file:///H|/project/js/AnJsflScript-ts/packages/xjsfl/XUL/core/ui/dialog.xul";
// ensureUriExists(uri);