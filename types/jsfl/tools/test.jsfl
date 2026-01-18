// 这个文件由脚本 00.快捷✔\#06.环绕飞行.ts 自动生成，任何手动修改都将会被覆盖.

"use strict";

// fl.trace(fl instanceof Flash)

var doc = fl.getDocumentDOM(); //文档
// fl.trace(doc instanceof  Document);

var selection = doc.selection; //选择
var library = doc.library; //库文件
// fl.trace(library instanceof Library);

var items = library.items;
var item =items[0]
// fl.trace("item");
// fl.trace(item);
// fl.trace(item instanceof LibraryItem);
// fl.trace(item instanceof Element);


var timeline = doc.getTimeline(); //时间轴
// fl.trace(timeline instanceof Timeline);

var layers = timeline.layers; //图层
var curLayerIndex = timeline.currentLayer; //当前图层索引
var curLayer = layers[curLayerIndex]; //当前图层
// fl.trace(curLayer instanceof Layer);

var curFrameIndex = timeline.currentFrame; //当前帧索引
var curFrame = curLayer.frames[curFrameIndex]; //当前帧
// fl.trace(curFrame instanceof Frame);



var matrix =  doc.viewMatrix;
fl.trace(matrix);
fl.trace(matrix instanceof FeatureMatrix);


var ma = new FeatureMatrix()
fl.trace(ma.a);
fl.trace(ma.b);
fl.trace(ma.c);
fl.trace(ma.d);
fl.trace(ma.tx);
