/**
 * @file: Iterators.type.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { Context } from "@xjsfl/Context";

export type DocumentCallback = (
    doc: FlashDocument,
    index: number,
    documents: FlashDocument[],
    context: Context
) => boolean | void;

export type ItemCallback = (
    item: LibraryItem,
    index: number,
    items: LibraryItem[],
    context: Context
) => boolean | void;

export type LayerCallback = (
    layer: Layer,
    index: number,
    layers: Layer[],
    context: Context
) => boolean | void;

export type FrameCallback = (
    frame: Frame,
    index: number,
    frames: Frame[],
    context: Context
) => boolean | void;

export type ElementCallback = (
    element: FlashElement,
    index: number,
    elements: FlashElement[],
    context: Context
) => boolean | void;
