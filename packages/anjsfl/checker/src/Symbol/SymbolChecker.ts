/**
 * @file: SymbolChecker.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { IsBitmapItem, IsGraphicItem, IsSymbolItem } from "../Item/ItemChecker";
import { IsBitmapInstance, IsGraphicSymbol, IsSymbolInstance } from "../Element/Instance";

export function IsSymbol(
    element: FlashElement | Instance | SymbolInstance | LibraryItem | SymbolItem
): element is SymbolInstance | SymbolItem {
    return (
        IsSymbolInstance(element as FlashElement) || IsSymbolItem(element as LibraryItem)
    );
}

export function IsBitmap(
    element: FlashElement | Instance | BitmapInstance | LibraryItem | BitmapItem
): element is BitmapInstance | SymbolItem {
    return (
        IsBitmapInstance(element as FlashElement) || IsBitmapItem(element as LibraryItem)
    );
}

export function IsGraphic(
    element: FlashElement | Instance | SymbolInstance | LibraryItem | SymbolItem
): element is SymbolInstance | SymbolItem {
    return (
        IsGraphicSymbol(element as FlashElement) || IsGraphicItem(element as LibraryItem)
    );
}
