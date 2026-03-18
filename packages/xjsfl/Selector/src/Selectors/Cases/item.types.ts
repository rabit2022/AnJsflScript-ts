/**
 * @file: item.types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

export type ITEM_ItemType =
    | "undefined"
    | "component"
    | "graphic"
    | "button"
    | "folder"
    | "font"
    | "sound"
    | "bitmap"
    | "screen"
    | "video"
    | "compiledclip"
    | "movieclip";
// "compiled clip" ，"movie clip"

export type ITEM_VideoType = "video" | "linkedvideo" | "embeddedvideo";

export type ITEM_filter_type = ITEM_ItemType | "symbol" | ITEM_VideoType;
