/**
 * @file: KeyFrameQuery.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { FrameRange } from "./SAT";

/**
 * 获取当前时间轴选中的帧范围
 */
export function getSelectedFrameRanges(timeline: Timeline): FrameRange[] {
    const selectedFrames = timeline.getSelectedFrames();
    const ranges: FrameRange[] = [];

    for (let i = 0; i < selectedFrames.length; i += 3) {
        ranges.push(
            new FrameRange(
                selectedFrames[i],
                selectedFrames[i + 1],
                selectedFrames[i + 2]
            )
        );
    }

    return ranges;
}

/**
 * 获取图层中的所有关键帧起始索引
 */
export function extractKeyFrameIndexes(layer: Layer): number[] {
    const frames = layer.frames;
    const keyFrameIndexes: number[] = [];

    for (let i = frames.length - 1; i >= 0; i--) {
        const startFrame = frames[i].startFrame;
        i = startFrame;
        keyFrameIndexes.push(startFrame);
    }

    return keyFrameIndexes.sort((a, b) => a - b);
}

/**
 * 获取当前图层的关键帧范围列表
 */
export function getKeyFrameRangesOfLayer(
    layers: Layer[],
    currentLayer: number
): FrameRange[] | null {
    const layerIndex = currentLayer;
    const layer = typeof currentLayer === "number" ? layers[currentLayer] : currentLayer;

    const keyFrameIndexes = extractKeyFrameIndexes(layer);

    // 补上最后一段区间
    keyFrameIndexes.push(layer.frameCount);

    const ranges: FrameRange[] = [];

    for (let i = 0; i < keyFrameIndexes.length - 1; i++) {
        ranges.push(
            new FrameRange(layerIndex, keyFrameIndexes[i], keyFrameIndexes[i + 1])
        );
    }

    return ranges.length ? ranges : null;
}

/**
 * 根据选中的小范围，找到所属的关键帧范围
 * （只判断选中范围起始帧所在区间）
 */
export function findKeyFrameRangeBySelection(
    selectedRange: FrameRange,
    keyFrameRanges: FrameRange[]
): FrameRange | null {
    for (const range of keyFrameRanges) {
        if (range.contain(selectedRange)) {
            return range;
        }
    }
    return null;
}
