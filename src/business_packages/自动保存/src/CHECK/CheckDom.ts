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


import {UI} from "@xjsfl/UI";
import {CheckDocument} from "@anjsfl/validation";

const result = CheckDocument(UI.dom);

if (result.isOk()) {
    const doc = result.unwrap(); // 类型是 Document
    console.log("文档有效:", doc);
} else {
    const errorMsg = result.unwrapErr(); // 类型是 string
    console.error("文档无效:", errorMsg);
}