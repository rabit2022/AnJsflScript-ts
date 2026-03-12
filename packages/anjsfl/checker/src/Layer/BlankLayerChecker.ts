import {Frame} from "../Frame";
import IsFrameBlank = Frame.IsFrameBlank;
import {getKeyFrameRangesOfLayer} from "../KeyFrame/KeyFrameQuery";
import {hasSound} from "../sound/SoundChecker";
import {SAT, SAT_T} from "@anjsfl/sat";

const {FrameRange} = SAT;
type  T_FrameRange = SAT_T.T_FrameRange;

/**
 * 检查图层是否为空
 * @see https://github.com/hufang360/FlashTool
 */
export function IsLayerBlank(layers: Layer[], layer: Layer): boolean {
    // hasSound
    if (hasSound(layers, layer)) {
        return false;
    }

    const keyFrameRanges: T_FrameRange[] = getKeyFrameRangesOfLayer(layers, layer);
    for (let kfr of keyFrameRanges) {
        let keyFrameIndex = kfr.startFrame;
        let keyFrame = layer.frames[keyFrameIndex];
        // undefined 可能是因为 空白帧
        if (keyFrame === undefined) continue;

        if (!IsFrameBlank(keyFrame)) {
            return false;
        }
    }

    return true;
}