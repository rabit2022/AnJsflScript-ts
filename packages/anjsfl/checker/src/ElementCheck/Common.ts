import {IsBitmapItem, IsGraphicItem, IsSymbolItem} from "./ItemCheck"
import {IsBitmapInstance, IsGraphicSymbol, IsSymbolInstance} from "./SymbolCheck"

export function IsSymbol(element: FlashElement | Instance | SymbolInstance | LibraryItem | SymbolItem,
): element is SymbolInstance | SymbolItem {
    return IsSymbolInstance(element as FlashElement) || IsSymbolItem(element as LibraryItem);
}

export function IsBitmap(element: FlashElement | Instance | BitmapInstance | LibraryItem | BitmapItem,
): element is BitmapInstance | SymbolItem {
    return IsBitmapInstance(element as FlashElement) || IsBitmapItem(element as LibraryItem);
}

export function IsGraphic(element: FlashElement | Instance | SymbolInstance | LibraryItem | SymbolItem,
): element is SymbolInstance | SymbolItem {
    return IsGraphicSymbol(element as FlashElement) || IsGraphicItem(element as FlashElement);
}
