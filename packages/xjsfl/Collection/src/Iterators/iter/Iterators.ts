/**
 * @file: Iterators.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { Context } from "@xjsfl/Context";

export class Iterators {
    static *documents(docs?: FlashDocument[]): Generator<Context> {
        const documents = docs ?? fl.documents;
        for (const dom of documents) {
            yield new Context({ dom });
        }
    }

    static *items(context?: Context): Generator<Context> {
        const dom = context?.dom ?? fl.getDocumentDOM()!;
        const items = dom.library.items;
        for (const item of items) {
            if (!(item as SymbolItem).timeline) continue;
            yield new Context({
                ...context,
                dom,
                item,
                timeline: (item as SymbolItem).timeline
            });
        }
    }

    static *layers(context: Context): Generator<Context> {
        if (!context.timeline) return;
        for (const layer of context.timeline.layers) {
            yield new Context({
                ...context,
                layer
            });
        }
    }

    static *frames(context: Context): Generator<Context> {
        if (!context.layer) return;
        const frames = context.layer.frames;
        for (let i = 0; i < frames.length; i++) {
            if (i !== frames[i].startFrame) continue;
            yield new Context({
                ...context,
                frame: frames[i]
            });
        }
    }

    static *elements(context: Context): Generator<Context> {
        if (!context.frame) return;
        for (const element of context.frame.elements) {
            yield new Context({
                ...context,
                element
            });
        }
    }

    static *walkElements() {
        for (const doc of this.documents()) {
            for (const item of this.items(doc)) {
                for (const layer of this.layers(item)) {
                    for (const frame of this.frames(layer)) {
                        for (const el of this.elements(frame)) {
                            // const el = elCtx.element!
                            yield el;
                        }
                    }
                }
            }
        }
    }

    static *walkFrames() {
        for (const doc of this.documents()) {
            for (const item of this.items(doc)) {
                for (const layer of this.layers(item)) {
                    for (const frame of this.frames(layer)) {
                        yield frame;
                    }
                }
            }
        }
    }

    static *walkLayers() {
        for (const doc of this.documents()) {
            for (const item of this.items(doc)) {
                for (const layer of this.layers(item)) {
                    yield layer;
                }
            }
        }
    }

    static *walkItems() {
        for (const doc of this.documents()) {
            for (const item of this.items(doc)) {
                yield item;
            }
        }
    }

    static *walkDocs() {
        for (const doc of this.documents()) {
            yield doc;
        }
    }
}

/*
for (const docCtx of Iterators.documents()) {
    for (const itemCtx of Iterators.items(docCtx)) {
        for (const layerCtx of Iterators.layers(itemCtx)) {
            for (const frameCtx of Iterators.frames(layerCtx)) {
                for (const elCtx of Iterators.elements(frameCtx)) {
                    const el = elCtx.element!
                    el.x += 10
                }
            }
        }
    }
}
*/
