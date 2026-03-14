/**
 * @file: types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

export interface ContextPath {
    dom?: DomSelector;
    item?: ItemSelector;
    layer?: LayerSelector;
    frame?: FrameSelector;
    element?: ElementSelector;
}

export type DomSelector =
    | {
          type: "url";
          value: string;
      }
    | {
          type: "name";
          value: string;
      };

export type NameSelector = {
    type: "name";
    value: string;
};

export type IndexSelector = {
    type: "index";
    value: number;
};

export type ItemSelector = NameSelector | IndexSelector;

export type LayerSelector =
    | NameSelector
    | IndexSelector
    | {
          type: "list";
          value: string[];
      }
    | {
          type: "all";
      };

export type FrameSelector =
    | IndexSelector
    | NameSelector
    | {
          type: "range";
          start: number;
          end: number;
      };

export type ElementSelector = NameSelector | IndexSelector;

/**
 * DOM > ITEM ~ LAYER @ FRAME : ELEMENT
 */
export type shorthandString = string;
