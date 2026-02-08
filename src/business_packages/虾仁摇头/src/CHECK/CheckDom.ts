/**
 * @file: CheckDom.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

//
// var doc = fl.getDocumentDOM(); //文档
// if (!checkDom(doc)) return;
//
// var selection = doc.selection; //选择
// var library = doc.library; //库文件
// var timeline = doc.getTimeline(); //时间轴
//
// var layers = timeline.layers; //图层
// var curLayerIndex = timeline.currentLayer; //当前图层索引
// var curLayer = layers[curLayerIndex]; //当前图层
//
// var curFrameIndex = timeline.currentFrame; //当前帧索引
// var curFrame = curLayer.frames[curFrameIndex]; //当前帧
//
// const KEY_FRAMES = [FRAME_1, FRAME_4, FRAME_7];
//
//
// // 检查选择的元件
// if (!checkSelection(selection, "selectElement", "Only one")) return;
import * as process from 'process';

import {UI} from "@xjsfl/UI";
import {CheckDocument} from "@anjsfl/validation";
import * as log from 'loglevel';
import { AUTHOR } from "../DESC/Descriptions";

const result = CheckDocument(UI.dom);

let doc: FlashDocument;
if (result.isOk()) {
    doc = result.unwrap(); // 类型是 Document
    log.log("文档有效:", doc);
} else {
    const errorMsg = result.unwrapErr(); // 类型是 string
    log.error("文档无效:", errorMsg);
    process.exit();
}

export {doc};

AUTHOR