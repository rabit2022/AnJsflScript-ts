/**
 * @file: Iterators.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import {
    DocumentCallback,
    ElementCallback,
    FrameCallback,
    ItemCallback,
    LayerCallback
} from "./Iterators.type";
import { Context } from "@xjsfl/Context";

export class Iterators {
    static documents(
        documents?: boolean | null | FlashDocument[],
        documentCallback?: DocumentCallback,
        itemCallback?: ItemCallback,
        layerCallback?: LayerCallback,
        frameCallback?: FrameCallback,
        elementCallback?: ElementCallback
    ): boolean {
        let documents1: FlashDocument[] = [];
        if (documents == null || documents === true) {
            documents1 = fl.documents as FlashDocument[];
        }

        for (let i = 0; i < documents1.length; i++) {
            const context = new Context(documents1[i]);
            if (documentCallback) {
                const result = documentCallback(documents1[i], i, documents1, context);
                if (result === true) return true;
                if (result === false) continue;
            }
            if (itemCallback || layerCallback || frameCallback || elementCallback) {
                if (
                    this.items(
                        context,
                        itemCallback,
                        layerCallback,
                        frameCallback,
                        elementCallback
                    )
                ) {
                    return true;
                }
            }
        }
        return false;
    }

    static items(
        context?: Context | LibraryItem[] | boolean | null,
        itemCallback?: ItemCallback,
        layerCallback?: LayerCallback,
        frameCallback?: FrameCallback,
        elementCallback?: ElementCallback
    ): boolean {
        let items: LibraryItem[];
        let ctx: Context;
        if (context == null || context === true) {
            ctx = Context.create(true, false, false, false);
            items = ctx.dom!.library.items;
        } else if (context instanceof Context && context.dom) {
            ctx = context.clone();
            items = ctx.dom!.library.items;
        } else if (Array.isArray(context)) {
            items = context;
            ctx = Context.create(true, false, false, false);
        } else {
            throw new TypeError("Invalid context for Iterators.items");
        }

        items.sort((a, b) => a.name.localeCompare(b.name));

        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            // 不是  SymbolItem
            // if (!(item['timeline'])) continue
            if (!(item as SymbolItem).timeline) continue;
            ctx = ctx.setTimeline(item as SymbolItem);
            if (itemCallback) {
                const result = itemCallback(item, i, items, ctx.clone());
                if (result === true) return true;
                if (result === false) continue;
            }
            if (
                (item as SymbolItem).timeline &&
                (layerCallback || frameCallback || elementCallback)
            ) {
                if (this.layers(ctx, layerCallback, frameCallback, elementCallback)) {
                    return true;
                }
            }
        }
        return false;
    }

    static layers(
        context: Context | Timeline | Layer[] | boolean,
        layerCallback?: LayerCallback|null,
        frameCallback?: FrameCallback,
        elementCallback?: ElementCallback
    ): boolean {
        let ctx: Context;
        if (context instanceof Context && context.timeline) {
            ctx = context.clone();
        } else if (context !== undefined) {
            ctx = new Context(true, context as any, false, false, false);
        } else {
            ctx = new Context(true, true, false, false, false);
        }
        if (!ctx.timeline) {
            throw new ReferenceError("Iterators.layers: no timeline");
        }

        const update = () => {
            ctx.timeline!.getSelectedLayers();
        };
        for (let i = 0; i < ctx.timeline.layers.length; i++) {
            // set context
            ctx.setLayer(i);

            const layer = ctx.timeline.layers[i];
            if (layerCallback) {
                const result = layerCallback(layer, i, ctx.timeline.layers, ctx.clone());
                if (result === true) {
                    update();
                    return true;
                }
                if (result === false) continue;
            }

            if (frameCallback || elementCallback) {
                if (this.frames(ctx, frameCallback, elementCallback)) {
                    update();
                    return true;
                }
            }
        }
        update();
        return false;
    }

    static frames(
        context: Context | Layer | number | string,
        frameCallback?: FrameCallback,
        elementCallback?: ElementCallback
    ): boolean {
        let ctx: Context;
        if (context instanceof Context && context.layer) {
            ctx = context.clone();
        } else {
            ctx = new Context(false, false, context as any, false, false);
        }
        if (!ctx.layer) {
            throw new ReferenceError("Iterators.frames: no layer");
        }

        const frames = ctx.layer.frames;
        for (let i = 0; i < frames.length; i++) {
            const frame = frames[i];

            if (i === frame.startFrame) {
                ctx.setFrame(i);

                if (frameCallback) {
                    const result = frameCallback(frame, i, frames, ctx.clone());
                    if (result === true) return true;
                    if (result === false) continue;
                }

                if (elementCallback) {
                    if (this.elements(ctx, elementCallback)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    static elements(
        context: Context | Frame,
        elementCallback?: ElementCallback
    ): boolean {
        let ctx: Context;
        if (context instanceof Context && context.frame) {
            ctx = context.clone();
        } else {
            ctx = new Context(false, false, false, context as any, false);
        }
        if (!ctx.frame) {
            throw new ReferenceError("Iterators.elements: no frame");
        }

        const elements = ctx.frame.elements;
        for (let i = 0; i < elements.length; i++) {
            ctx.setElement(i);
            if (elementCallback) {
                const result = elementCallback(elements[i], i, elements, ctx);
                if (result === true) return true;
            }
        }
        return false;
    }

    static toString(): string {
        return "[class Iterators]";
    }
}

/*
Iterators.documents(
    true,
    undefined,
    undefined,
    undefined,
    undefined,
    (element, i, elements, context) => {
        if (element.elementType === "instance") {
            fl.trace("Instance found")
        }
    }
)
*/
