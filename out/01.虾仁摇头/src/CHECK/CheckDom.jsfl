// 这个文件由脚本 01.虾仁摇头\src\CHECK\CheckDom.ts 自动生成，任何手动修改都将会被覆盖.

"use strict";
var doc = fl.getDocumentDOM();
if (!checkDom(doc))
    return;
var selection = doc.selection;
var library = doc.library;
var timeline = doc.getTimeline();
var layers = timeline.layers;
var curLayerIndex = timeline.currentLayer;
var curLayer = layers[curLayerIndex];
var curFrameIndex = timeline.currentFrame;
var curFrame = curLayer.frames[curFrameIndex];
var KEY_FRAMES = [FRAME_1, FRAME_4, FRAME_7];
if (!checkSelection(selection, "selectElement", "Only one"))
    return;
