/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import * as ItemCheck from "./ItemChecker";

export namespace Item {
    // 将所有模块的内容合并进来
    export const IsBitmapItem = ItemCheck.IsBitmapItem;
    export const IsGraphicItem = ItemCheck.IsGraphicItem;
    export const IsSymbolItem = ItemCheck.IsSymbolItem;
}
