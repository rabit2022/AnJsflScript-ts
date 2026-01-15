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


import {SObject} from "../../base/SObject";
import {FrameRangeLike} from "../../types/framerangeType";
import {CHECK} from "../../check/check";
import IsFrameRangeLike = CHECK.IsFrameRangeLike;

/**
 * 帧范围类
 * 左闭右开区间 [startFrame, endFrame)
 * @param {number} layerIndex 图层索引
 * @param {number} startFrame 开始帧
 * @param {number} [endFrame=startFrame+1] 结束帧
 * @constructor
 */
export class FrameRange extends SObject implements FrameRangeLike {
    public layerIndex: number
    public startFrame: number
    public endFrame: number

    constructor(layerIndex: number, startFrame: number, endFrame?: number) {
        super();

        this.layerIndex = layerIndex;
        this.startFrame = startFrame;
        this.endFrame = endFrame || startFrame + 1;
    }

    get duration(): number {
        return this.endFrame - this.startFrame;
    }

    /**
     * 获取当前帧范围的第一帧
     * @return {FrameRange} 第一帧范围
     */
    get firstFrame(): FrameRange {
        const fr = this.clone();
        fr.endFrame = fr.startFrame + 1;
        return fr;
    };

    /**
     * 判断两个帧范围是否有重叠
     * @param {FrameRange} other 另一个帧范围
     * @return {boolean} 是否有重叠
     */
    intersects(other: FrameRange): boolean {
        return this.startFrame <= other.endFrame && other.startFrame <= this.endFrame;
    };

    contain(frameIndex: number): boolean;
    /**
     * 判断 当前 FrameRange 是否包含   fr2 选中范围
     * @param fr2 选中范围数组
     * @return {boolean} 是否包含
     */
    contain(fr2: FrameRange | FrameRangeLike): boolean;

    // 实现
    contain(arg: number | FrameRange | FrameRangeLike): boolean {
        if (typeof arg === "number") {
            return this.startFrame <= arg && arg < this.endFrame;
        }

        if (IsFrameRangeLike(arg)) {
            if (this.layerIndex !== arg.layerIndex) {
                return false;
            }
            return this.startFrame <= arg.startFrame && this.endFrame >= arg.endFrame;
        }

        // 类型系统理论上不会让代码走到这里
        throw new Error(`Invalid argument type: ${typeof arg}`);
    }

    toArray(): [number, number, number] {
        return [this.layerIndex, this.startFrame, this.endFrame];
    };


}




