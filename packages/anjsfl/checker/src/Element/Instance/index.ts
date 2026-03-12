/**
 * @file: checker.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */

import * as _ from "lodash";
import { IsGroup } from "../Shape";

const SymbolTypeArr = ["movie clip", "graphic", "button"];

/**
 * 判断是否是 元件
 */
export function IsSymbolInstance(
    element: FlashElement | Instance | SymbolInstance
): element is SymbolInstance {
    const IsSymbolInstance =
        // "shape" | "text" | "tlfText" | "instance" | "shapeObj"
        (element as FlashElement)?.elementType === "instance" &&
        // | 'symbol' | 'bitmap' | 'embedded video' | 'linked video' | 'video' | 'compiled clip';
        (element as Instance)?.instanceType === "symbol" &&
        // "movie clip" | "button" | "graphic"
        _.includes(SymbolTypeArr, (element as SymbolInstance)?.symbolType);

    return (
        // 非空元素，非组
        !IsGroup(element as FlashElement) && IsSymbolInstance
    );
}

/**
 * 判断是否是 位图
 */
export function IsBitmapInstance(
    element: FlashElement | Instance | BitmapInstance
): element is BitmapInstance {
    var InstanceIsBitmap =
        (element as FlashElement).elementType === "instance" &&
        (element as Instance).instanceType === "bitmap";

    return !IsGroup(element) && InstanceIsBitmap;
}

export function IsGraphicSymbol(
    element: FlashElement | Instance | SymbolInstance
): element is SymbolInstance {
    var SymbolTypeIsGraphic = (element as SymbolInstance).symbolType === "graphic";
    return IsSymbolInstance(element) && SymbolTypeIsGraphic;
}
