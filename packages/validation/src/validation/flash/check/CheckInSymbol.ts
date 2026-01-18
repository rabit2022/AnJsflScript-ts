/**
 * @file: CheckInSymbol.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * 检查当前是否在元件（Symbol）内部进行编辑。
 *
 * @returns
 *   - 如果在元件内：返回 `{ currentTimeline, mainTimeline }`
 *   - 如果在主舞台：弹出警告并返回 `null`
 *
 * @note 此函数依赖 Adobe Animate/Flash 的 JSFL 环境（`fl` 对象）。
 */
export function CheckInSymbol(): {
    currentTimeline: Timeline;
    mainTimeline: Timeline;
} | null {
    const doc = fl.getDocumentDOM();
    if (!doc) {
        alert("未打开任何文档！");
        return null;
    }

    const currentTimeline = doc.getTimeline(); // 当前正在编辑的时间轴
    const mainTimeline = doc.timelines[0]; // 主时间轴（舞台）始终是 index 0

    // 判断是否在主舞台上（即不在元件内）
    if (currentTimeline === mainTimeline) {
        alert("请进入元件后使用该功能！");
        return null;
    }

    return {
        currentTimeline,
        mainTimeline
    };
}
