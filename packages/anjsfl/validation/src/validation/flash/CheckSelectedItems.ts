/**
 * @file: CheckSelectedItems.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */
import { Result, Ok, Err } from "oxide.ts";
import {LibraryCondition} from "../../../types/conditionTypes";
import {CheckSelection} from "../../base/CheckSelection";
import {CheckMode} from "../../../types/selectionTypes";

/**
 * 检查传入的选中项目数组是否符合指定条件。
 *
 * @param selectedItems - 直接传入的选中项目数组
 * @param condition - 检查条件，默认为至少选中一个
 * @param exTips - 额外提示信息
 *
 * @returns Ok(选中项目数组) 如果符合条件；Err(错误信息) 如果不符合
 */
export function CheckSelectedItems(
    selectedItems: LibraryItem[], // ✅ 直接传入数组
    condition: LibraryCondition = LibraryCondition.AtLeastOne,
    exTips?: string
): Result<LibraryItem[], string> { // ✅ 使用 Result 类型
    
    // 直接使用传入的数组进行检查
    const isValid = CheckSelection(
        selectedItems,
        CheckMode.SelectLibItem,
        condition,
        exTips
    );

    // 根据检查结果返回 Ok 或 Err
    if (isValid) {
        return Ok(selectedItems);
    } else {
        return Err("选中项目不符合条件");
    }
}
