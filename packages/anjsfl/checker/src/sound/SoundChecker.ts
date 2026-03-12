import {getKeyFrameRangesOfLayer} from "../KeyFrame/KeyFrameQuery";
import {SAT, SAT_T} from "@anjsfl/sat";

const {FrameRange} = SAT;
type  T_FrameRange = SAT_T.T_FrameRange;

/**
 * 检查图层是否包含声音
 * @param {Array.<Layer>} layers 图层数组
 * @param {Layer} layer 图层
 * @returns {ISoundInfo[]} 是否包含声音
 */
export function hasSound(layers: Layer[], layer: Layer): boolean {
    const keyFrameRanges: T_FrameRange[] = getKeyFrameRangesOfLayer(layers, layer);
    for (let kfr of keyFrameRanges) {
        var keyFrameIndex = kfr.startFrame;
        var keyFrame = layer.frames[keyFrameIndex];
        // undefined 可能是因为 空白帧
        if (keyFrame === undefined) continue;
        if (keyFrame.soundName) {
            return true;
        }
    }
    return false;
}
