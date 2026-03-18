/**
 * @file: element.types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

export type ELEMENT_SymbolType =
    | "symbol"
    | "instance"
    | "button"
    | "graphic"
    | "movieclip";
// "movie clip"

export type ELEMENT_InstanceType =
    | "symbol"
    | "bitmap"
    | "video"
    | "embeddedvideo"
    | "linkedvideo"
    | "compiledclip";
// "embedded video" | "linked video" |  | "compiled clip"

export type ELEMENT_TextType = "text" | TextType;
export type ELEMENT_ShapeType = "primitive" | "group" | "shape";

export type ELEMENT_filter_type =
    | ELEMENT_SymbolType
    | ELEMENT_InstanceType
    | ELEMENT_TextType
    | ELEMENT_ShapeType;
