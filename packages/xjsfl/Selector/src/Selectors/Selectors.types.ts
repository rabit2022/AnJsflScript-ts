/**
 * @file: Selectors.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */
export type ScopeInName = "Library" | "Document" | "Timeline" | "Layer";
export type ScopeOutName = "Layer" | "Item" | "Element" | "Frame";

export const scopeTypeMap: Record<ScopeInName, ScopeOutName> = {
    Library: "Item",
    Document: "Element",
    Timeline: "Layer",
    Layer: "Frame"
};

export type ScopeFunc = "item" | "element";

export type Scope = Library | FlashDocument | Timeline | Layer | Frame;

export type SelectorType = "combo" | "filter" | "type" | "find" | "pseudo";

// export interface SelectorInstance {
//     pattern: string;
//     type: SelectorType;
//     name: string;
//     method: Function;
//     params: any[];
//
//     test(item: any, scope: Scope): boolean;
//     filter(items: any[], scope: Scope): any[];
// }
