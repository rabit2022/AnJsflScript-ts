import * as ItemCheck from "./ItemCheck";
import * as SymbolCheck from "./SymbolCheck";
import * as Common from "./Common";
import * as ShapeChecker from "./ShapeChecker";

export namespace Element {
    // 将所有模块的内容合并进来
    export const IsBitmapItem = ItemCheck.IsBitmapItem;
    export const IsGraphicItem = ItemCheck.IsGraphicItem;
    export const IsSymbolItem = ItemCheck.IsSymbolItem;

    export const IsBitmapInstance = SymbolCheck.IsBitmapInstance;
    export const IsGraphicSymbol = SymbolCheck.IsGraphicSymbol;
    export const IsSymbolInstance = SymbolCheck.IsSymbolInstance;

    export const IsSymbol = Common.IsSymbol;
    export const IsBitmap = Common.IsBitmap;
    export const IsGraphic = Common.IsGraphic;

    export const IsGroup = ShapeChecker.IsGroup;
    export const IsShape = ShapeChecker.IsShape;
    export const IsDrawingObject = ShapeChecker.IsDrawingObject;
    export const IsOvalObject = ShapeChecker.IsOvalObject;
    export const IsRectangleObject = ShapeChecker.IsRectangleObject;
}