/**
 * @file: CheckSelectedItems.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

// types.ts 或当前文件顶部



import { LibraryCondition } from "../../../types/validation/conditionTypes";
import { CheckMode } from "../../../types/validation/selectionTypes";
import { CheckSelection } from "../../base/check/selections/CheckSelection";

/**
 * 检查选中的库项目是否符合指定的条件。
 *
 * @param library - Flash 库对象，需包含 `getSelectedItems()` 方法。
 * @param condition - 检查条件，默认为 {@link LibraryCondition.NotZero}（即至少选中一个项目）。
 * @param exTips - 额外提示信息（用于错误弹窗）。
 *
 * @returns 符合条件时返回选中的库项目数组；否则返回 `null`。
 *
 * @example
 * ```ts
 * const items = CheckSelectedItems(lib, LibraryCondition.OnlyOne);
 * if (items) {
 *   console.log("选中了:", items[0].name);
 * }
 * ```
 */
export function CheckSelectedItems(
    library: FlashLibrary,
    condition: LibraryCondition = LibraryCondition.NotZero,
    exTips?: string
): FlashItem[] | null {
    const selectedItems = library.getSelectedItems();

    const isValid = CheckSelection(
        selectedItems,
        CheckMode.SelectLibItem, // ✅ 使用枚举，非字符串
        condition, // 枚举值本质是字符串，与 CheckSelection 兼容
        exTips
    );

    return isValid ? selectedItems : null;
}
