/**
 * @file: ItemChecker.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import * as _ from "lodash";

const SymbolTypeArr = ["movie clip", "graphic", "button"];

/**
 * 判断是否是 元件
 */
export function IsSymbolItem(element: LibraryItem | SymbolItem): element is SymbolItem {
    return (
        // | "undefined" | "component" | "movie clip" | "graphic" | "button" | "folder" | "font" | "sound" | "bitmap" |
        // "compiled clip" | "screen" | "video";
        _.includes(SymbolTypeArr, element?.itemType) &&
        // "movie clip" | "button" | "graphic"
        _.includes(SymbolTypeArr, (element as SymbolItem)?.symbolType)
    );
}

export function IsBitmapItem(element: LibraryItem | BitmapItem): element is BitmapItem {
    var ItemIsBitmap = element.itemType === "bitmap";
    return ItemIsBitmap;
}

export function IsGraphicItem(element: LibraryItem | SymbolItem): element is SymbolItem {
    var SymbolTypeIsGraphic = (element as SymbolItem).symbolType === "graphic";
    return IsSymbolItem(element) && SymbolTypeIsGraphic;
}
