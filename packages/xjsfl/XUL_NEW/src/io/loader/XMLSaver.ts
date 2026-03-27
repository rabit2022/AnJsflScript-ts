import * as fs from 'fs';
import {toPath} from "../../utils/Checker/IsPath";
import {isFileUri} from "../../utils/Checker/IsURL";
import * as path from "path";
import {ensureFileExists} from "../../utils/file/ensureFileExists";


export class XMLSaver {
    private savePath: string;

    constructor(pathOrUri: string) {
        if (isFileUri(pathOrUri)) {
            this.savePath = toPath(pathOrUri);
        } else {
            this.savePath = pathOrUri;
        }

        ensureFileExists(this.savePath);
    }

    save(data: any): void {
        fs.writeFileSync(this.savePath, data); // 创建空文件
    }
}



// const loader = new XMLLoader("H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\assets\\templates\\xul\\dialog.xul");
// console.log(JSON.stringify(loader.root));