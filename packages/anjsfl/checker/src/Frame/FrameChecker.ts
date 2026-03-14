/**
 * @file: FrameChecker.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * 检查帧是否为空
 * @see https://github.com/hufang360/FlashTool
 */
export function IsFrameBlank(frame: Frame): boolean {
    // 元件数量为0
    // 动作脚本为空
    return frame.isEmpty() && frame.actionScript !== "";
}

/**
 * 检查是否为无效帧
 * @note 无效帧指的是  帧索引   超过了  最大帧索引
 */
export function IsInvalidFrame(layer: Layer, frameIndex: number): boolean {
    var max_frames = layer.frames.length;
    return frameIndex >= max_frames;
}
