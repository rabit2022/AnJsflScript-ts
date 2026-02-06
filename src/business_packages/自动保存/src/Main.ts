import {AUTHOR} from "./DESC/Descriptions";
import {doc} from "./CHECK/CheckDom";
import {ORIGINAL_DOC_URI} from "./CONSTANTS/constants";
import {getSavePath} from "./save/save_path";
import {getSaveFolder} from "./save/savefolder";
import * as fs from "fs";

import {pathToFileURL} from "url";
import {cleanFolder} from "./clean/clean";
import {DateTime} from "luxon";
import {TIME_FORMAT} from "./CONSTANTS/time";

AUTHOR;


// saveAction: (targetPath: string) => void
function saveDom(targetPath: string): void {

    const url = pathToFileURL(targetPath).href;
    fl.saveDocument(doc, url);

    // 跳转到原来的文档
    fl.saveDocument(doc, ORIGINAL_DOC_URI);

}


export function Main() {

// D:/AnJsflScript
    const SAVE_FOLDER = getSaveFolder();
    if (!fs.existsSync(SAVE_FOLDER)) {
        fs.mkdirSync(SAVE_FOLDER, {recursive: true});
    }


//  D:/AnJsflScript/${now}_${baseName}.fla
    const SAVE_PATH = getSavePath(ORIGINAL_DOC_URI, SAVE_FOLDER);

    saveDom(SAVE_PATH);
    cleanFolder(SAVE_FOLDER);


    // 下一次保存时间
    const nextSaveTime = DateTime.now().plus({minutes: 3});
    const formattedTime = nextSaveTime.toFormat(TIME_FORMAT);

    console.log(`保存成功，保存到 ${SAVE_PATH},下一次保存时间 3分钟后 ${formattedTime}`)
}
