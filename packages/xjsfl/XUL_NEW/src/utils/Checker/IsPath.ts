import {isFileUri} from "./IsURL";
import {fileURLToPath} from 'url';
import * as fs from 'fs';

export function isExistingPath(pathOrUri: string) {
    const target = toPath(pathOrUri);

    return fs.existsSync(target);
}

export function toPath(pathOrUri: string) {
    // 处理 file:// 协议，先转成路径
    let target = pathOrUri;
    if (isFileUri(pathOrUri)) {
        target = fileURLToPath(pathOrUri);
    }
    return target;
}

import isValidPath = require('is-valid-path');

export {isValidPath};

// console.log(isValidPath('foo/bar'));
// // => true
//
// console.log(isValidPath('foo/<bar>'));
// // => false (包含非法字符 < >)
//
// console.log(isValidPath('C:\\Users\\Admin'));
// // => true (Windows)
//
// console.log(isValidPath('file:///c:/'));
// // => false (它认为带协议头的不是纯路径)
//
// console.log(isValidPath('./config.json'));
// // => true