/**
 * @file: CheckSelectedLayers.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { Result, Ok, Err } from "oxide.ts";
import { CheckSelection } from "../base";
import { CheckMode } from "../../types";
import { LayerCondition } from "../../types";

/**
 * 检查传入的选中图层索引数组是否符合指定条件。
 *
 * @param selectedLayers - 直接传入的选中图层索引数组
 * @param condition - 检查条件，默认为 LayerCondition.NotZero（即至少选中一个）
 * @param exTips - 额外提示信息
 *
 * @returns Ok(图层索引数组) 如果符合条件；Err(错误信息) 如果不符合
 */
export function CheckSelectedLayers(
    selectedLayers: number[], // ✅ 直接传入数据，不再依赖 Timeline
    condition: LayerCondition = LayerCondition.AtLeastOne,
    exTips?: string
): Result<number[], string> {
    // ✅ 使用 Result 类型替代 null

    // 直接使用传入的数组进行检查
    const check = CheckSelection(
        selectedLayers,
        CheckMode.SelectLayer,
        condition,
        exTips
    );

    if (check.isOk()) {
        return Ok(selectedLayers);
    }

    const err = check.unwrapErr();
    return Err(err);
}
