/**
 * @file: KeyFrameChecker.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * 判断指定帧是否为关键帧
 * @param layer 目标层
 * @param frameIndex 帧索引
 * @return {boolean} 关键帧返回true，否则返回false
 */
export function IsKeyFrame(layer: Layer, frameIndex: number): boolean {
    var frame = layer.frames[frameIndex];
    return frame.startFrame === frameIndex;
}
