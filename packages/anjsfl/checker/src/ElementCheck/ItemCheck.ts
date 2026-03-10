import * as _ from "lodash";
import {IsSymbolInstance} from "./SymbolCheck";


const SymbolTypeArr = ["movie clip", "graphic", "button"];

/**
 * 判断是否是 元件
 */
export function IsSymbolItem(
    element: LibraryItem | SymbolItem,
): element is SymbolItem {
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

export function IsGraphicItem(element: FlashElement | Instance | SymbolInstance): element is SymbolInstance {
    var SymbolTypeIsGraphic = (element as SymbolInstance).symbolType === "graphic";
    return IsSymbolInstance(element) && SymbolTypeIsGraphic;
}
