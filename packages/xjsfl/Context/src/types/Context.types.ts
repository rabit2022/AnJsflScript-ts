/**
 * @file: Context.types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

// Context.ts

import { Context } from "../Context";

export type DOMInput = Context | boolean | number | string | FlashDocument;

export type TimelineInput =
    | Context
    | boolean
    | number
    | string
    | SymbolItem
    | SymbolInstance
    | Timeline
    | null;

export type LayerInput = Context | boolean | number | string | Layer;

export type FrameInput = Context | boolean | number | string | RegExp | Frame;

export type ElementInput = Context | boolean | number | string | FlashElement;

