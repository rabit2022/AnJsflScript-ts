import * as ItemCheck from "./ItemChecker";

export namespace Item {
    // 将所有模块的内容合并进来
    export const IsBitmapItem = ItemCheck.IsBitmapItem;
    export const IsGraphicItem = ItemCheck.IsGraphicItem;
    export const IsSymbolItem = ItemCheck.IsSymbolItem;

}