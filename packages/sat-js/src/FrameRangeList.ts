
// ------------------------------------------------------------------------------------------------------------------------
//  ______   ______     ______     __    __     ______     ______     ______
// /\  ___\ /\  == \   /\  __ \   /\ "-./  \   /\  ___\   /\  == \   /\  __ \
// \ \  __\ \ \  __<   \ \  __ \  \ \ \-./\ \  \ \  __\   \ \  __<   \ \  __ \
//  \ \_\    \ \_\ \_\  \ \_\ \_\  \ \_\ \ \_\  \ \_____\  \ \_\ \_\  \ \_\ \_\
//   \/_/     \/_/ /_/   \/_/\/_/   \/_/  \/_/   \/_____/   \/_/ /_/   \/_/\/_/
//
//  __   __     ______     ______     __         __     ______     ______
// /\ "-.\ \   /\  ___\   /\  ___\   /\ \       /\ \   /\  ___\   /\__  _\
// \ \ \-.  \  \ \ \__ \  \ \  __\   \ \ \____  \ \ \  \ \___  \  \/_/\ \/
//  \ \_\\"\_\  \ \_____\  \ \_____\  \ \_____\  \ \_\  \/\_____\    \ \_\
//   \/_/ \/_/   \/_____/   \/_____/   \/_____/   \/_/   \/_____/     \/_/
//
// ------------------------------------------------------------------------------------------------------------------------
// FrameRangeList

/**
 * 帧列表类，继承自 Array
 * @constructor
 */
function FrameRangeList() {
    Array.apply(this, arguments); // 调用 Array 的构造函数
    SObject.apply(this, arguments);
}

SAT["FrameRangeList"] = FrameRangeList;
SAT["FRL"] = FrameRangeList;

INHERIT_MACRO(FrameRangeList, Array);
// INHERIT_MACRO(FrameRangeList, SObject);
Object.assign(FrameRangeList.prototype, SObject.prototype);
Object.assign(FrameRangeList, SObject);


Object.defineProperty(FrameRangeList.prototype, "firstSlFrameIndex", {
    get: function() {
        if (this.length === 0) {
            return null;
        }
        return this[0].startFrame;
    }
});
Object.defineProperty(FrameRangeList.prototype, "firstSlLayerIndex", {
    get: function() {
        if (this.length === 0) {
            return null;
        }
        return this[0].layerIndex;
    }
});
Object.defineProperty(FrameRangeList.prototype, "firstSlLayer", {
    get: function() {
        if (this.length === 0) {
            return null;
        }
        var doc = fl.getDocumentDOM(); //文档对象
        var timeline = doc.getTimeline(); //时间轴
        var layers = timeline.layers; //图层

        var layerIndex = this.firstSlLayerIndex;

        return layers[layerIndex];
    }
});
Object.defineProperty(FrameRangeList.prototype, "firstSlFrame", {
    get: function() {
        if (this.length === 0) {
            return null;
        }
        var doc = fl.getDocumentDOM(); //文档对象
        var timeline = doc.getTimeline(); //时间轴

        var layers = timeline.layers; //图层
        var curLayerIndex = timeline.currentLayer; //当前图层索引
        var curLayer = layers[curLayerIndex]; //当前图层

        var frames = curLayer.frames; //当前图层的帧列表
        var curFrameIndex = timeline.currentFrame; //当前帧索引
        var curFrame = frames[curFrameIndex]; //当前帧

        var frameIndex = this.firstSlFrameIndex;
        // console.log("firstSlFrameIndex=" + frameIndex);

        return frames[frameIndex];
    }
});


/**
 * 从列表中过滤出不重复的 layerIndex
 * @returns {Array<number>} 不重复的 layerIndex 列表
 */
FrameRangeList.prototype.getUniqueLayerIndexes = function() {
    var uniqueLayerIndexes = [];
    for (var i = 0; i < this.length; i++) {
        var currentLayerIndex = this[i].layerIndex;
        if (!uniqueLayerIndexes.includes(currentLayerIndex)) {
            uniqueLayerIndexes.push(currentLayerIndex);
        }
    }
    return uniqueLayerIndexes;
};


function IsElementBoundsLike(obj) {
    return (obj && typeof obj === "object" && typeof obj.left === "number" && typeof obj.top === "number" && typeof obj.width === "number" && typeof obj.height === "number");
}

SAT_CHECk["IsElementBoundsLike"] = IsElementBoundsLike;
