/**
 * @file: CheckSelectedLayers.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */


import { LayerCondition } from "../../../types/validation/conditionTypes";
import { CheckSelection } from "../../base/check/selections/CheckSelection";
import { CheckMode } from "../../../types/validation/selectionTypes";

/**
 * 检查选中的图层是否符合指定的条件。
 *
 * @param timeline - 时间轴对象，需包含 `getSelectedLayers()` 方法。
 * @param condition - 检查条件，默认为 `LayerCondition.NotZero`（即至少选中一个图层）。
 * @param exTips - 额外提示信息（用于错误弹窗）。
 *
 * @returns 符合条件时返回选中的图层索引数组；否则返回 `null`。
 *
 * @example
 * ```ts
 * const layers = CheckSelectedLayers(tl, LayerCondition.EQ1);
 * if (layers) {
 *   // 处理单个图层逻辑
 * }
 * ```
 */
export function CheckSelectedLayers(
    timeline: FlashTimeline,
    condition: LayerCondition = LayerCondition.NotZero,
    exTips?: string
): FlashLayer[] | null {
    const selectedLayers = timeline.getSelectedLayers();

    const isValid = CheckSelection(
        selectedLayers,
        CheckMode.SelectLayer,
        condition, // ✅ 直接传入枚举值（其本质是字符串）
        exTips
    );

    return isValid ? selectedLayers : null;
}
