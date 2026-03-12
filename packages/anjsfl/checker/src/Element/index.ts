/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import * as SymbolCheck from "./Instance";
import * as ShapeChecker from "./Shape";

export namespace Element {
    // 将所有模块的内容合并进来
    export const IsBitmapInstance = SymbolCheck.IsBitmapInstance;
    export const IsGraphicSymbol = SymbolCheck.IsGraphicSymbol;
    export const IsSymbolInstance = SymbolCheck.IsSymbolInstance;

    export const IsGroup = ShapeChecker.IsGroup;
    export const IsShape = ShapeChecker.IsShape;
    export const IsDrawingObject = ShapeChecker.IsDrawingObject;
    export const IsOvalObject = ShapeChecker.IsOvalObject;
    export const IsRectangleObject = ShapeChecker.IsRectangleObject;
}
