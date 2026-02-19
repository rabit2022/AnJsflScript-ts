/**
 * @file: Main.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {AUTHOR} from "./DESC/Descriptions";
import {doc} from "./CHECK/CheckDom";
import {ORIGINAL_DOC_URI} from "./CONSTANTS/constants";

import * as fs from "fs";

import {pathToFileURL} from "url";
import {cleanFolder} from "./clean/clean";
import {DateTime} from "luxon";
import {TIME_FORMAT} from "./CONSTANTS/time";
import {SAVE_FOLDER} from "./CONSTANTS/savefolder";
import {SAVE_PATH} from "./CONSTANTS/save_path";

AUTHOR;


// saveAction: (targetPath: string) => void
function saveDom(targetPath: string): void {

    const url = pathToFileURL(targetPath).href;
    fl.saveDocument(doc, url);

    // 跳转到原来的文档
    fl.saveDocument(doc, ORIGINAL_DOC_URI);

}


export function AutoSave() {
    if (!fs.existsSync(SAVE_FOLDER)) {
        fs.mkdirSync(SAVE_FOLDER, {recursive: true});
    }


    saveDom(SAVE_PATH);
    cleanFolder(SAVE_FOLDER);


    // 下一次保存时间
    const nextSaveTime = DateTime.now().plus({minutes: 3});
    const formattedTime = nextSaveTime.toFormat(TIME_FORMAT);

    console.log(`保存成功，保存到 ${SAVE_PATH},下一次保存时间 3分钟后 ${formattedTime}`)
}

export function OnlySave() {
    if (!fs.existsSync(SAVE_FOLDER)) {
        fs.mkdirSync(SAVE_FOLDER, {recursive: true});
    }


    saveDom(SAVE_PATH);
    cleanFolder(SAVE_FOLDER);

    console.log(`保存成功，保存到 ${SAVE_PATH}`)

}

