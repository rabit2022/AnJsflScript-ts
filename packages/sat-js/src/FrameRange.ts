
// ------------------------------------------------------------------------------------------------------------------------
//  ______   ______     ______     __    __     ______     ______     ______
// /\  ___\ /\  == \   /\  __ \   /\ "-./  \   /\  ___\   /\  == \   /\  __ \
// \ \  __\ \ \  __<   \ \  __ \  \ \ \-./\ \  \ \  __\   \ \  __<   \ \  __ \
//  \ \_\    \ \_\ \_\  \ \_\ \_\  \ \_\ \ \_\  \ \_____\  \ \_\ \_\  \ \_\ \_\
//   \/_/     \/_/ /_/   \/_/\/_/   \/_/  \/_/   \/_____/   \/_/ /_/   \/_/\/_/
//
//  __   __     ______     ______
// /\ "-.\ \   /\  ___\   /\  ___\
// \ \ \-.  \  \ \ \__ \  \ \  __\
//  \ \_\\"\_\  \ \_____\  \ \_____\
//   \/_/ \/_/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// FrameRange
/**
 * 帧范围类
 * 左闭右开区间 [startFrame, endFrame)
 * @param {number} layerIndex 图层索引
 * @param {number} startFrame 开始帧
 * @param {number} [endFrame=startFrame+1] 结束帧
 * @constructor
 */
function FrameRange(layerIndex, startFrame, endFrame) {
    SObject.apply(this, arguments);

    this.layerIndex = layerIndex;
    this.startFrame = startFrame;
    this.endFrame = endFrame || startFrame + 1;
}

SAT["FrameRange"] = FrameRange;
SAT["FR"] = FrameRange;

INHERIT_MACRO(FrameRange, SObject);

/**
 * 帧范围的持续时间
 * @property {number} duration
 * @type {number}
 */
Object.defineProperty(FrameRange.prototype, "duration", {
    get: function() {
        return this.endFrame - this.startFrame;
    }
});


/**
 * 判断两个帧范围是否有重叠
 * @param {FrameRange} other 另一个帧范围
 * @return {boolean} 是否有重叠
 */
FrameRange.prototype.intersects = function(other) {
    return this.startFrame <= other.endFrame && other.startFrame <= this.endFrame;
};

/**
 * 判断 当前 FrameRange 是否包含   fr2 选中范围
 * @param {FrameRange|number} fr2 选中范围数组
 * @return {boolean} 是否包含
 */
FrameRange.prototype.contain = function(fr2) {
    // contain(frameIndex: number) : boolean;
    if (typeof fr2 === "number") {
        return this.startFrame <= fr2 && this.endFrame > fr2;
    } else if (IsFrameRangeLike(fr2)) {
        if (this.layerIndex !== fr2.layerIndex) {
            return false;
        }
        return this.startFrame <= fr2.startFrame && this.endFrame >= fr2.endFrame;
    } else {
        throw new Error("Invalid argument type : " + fr2);
    }
};

/**
 * 转换为数组
 * @return {[number, number, number]} 数组
 */
FrameRange.prototype.toArray = function() {
    return [this.layerIndex, this.startFrame, this.endFrame];
};

/**
 * 获取当前帧范围的第一帧
 * @return {FrameRange} 第一帧范围
 */
FrameRange.prototype.getFirstFrame = function() {
    var fr = this.clone();
    fr.endFrame = fr.startFrame + 1;
    return fr;
};

function IsFrameRangeLike(obj) {
    return (obj && typeof obj === "object" && typeof obj.layerIndex === "number" && typeof obj.startFrame === "number" && typeof obj.endFrame === "number");
}

SAT_CHECk["IsFrameRangeLike"] = IsFrameRangeLike;
