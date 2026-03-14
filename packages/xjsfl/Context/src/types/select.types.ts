/**
 * @file: select.types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */


export enum SelectionMode {
    Add = "add",
    Replace = "replace",
    Clear = "clear"
}


export type ContextType ="dom"|"timeline"| "layer" | "frame"| "keyframe" | "element";
