/**
 * @file: Iterators.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { Context } from "@xjsfl/Context";
import { UI } from "../../base/UI";

export class Iterators {
    static *documents(docs?: FlashDocument[]): Generator<Context> {
        const documents = docs ?? fl.documents;
        // 安全检查：如果没有文档，直接返回
        if (!documents || documents.length === 0) return;

        for (const dom of documents) {
            yield new Context(dom);
        }
    }

    static *items(context?: Context): Generator<Context> {
        const dom = context?.dom ?? UI.$dom;
        if (!dom || !dom.library) return;

        const items = dom.library.items;
        for (const item of items) {
            if (!(item as SymbolItem).timeline) continue;

            yield new Context(dom, (item as SymbolItem).timeline);
        }
    }

    static *layers(context: Context): Generator<Context> {
        if (!context.timeline) return;

        for (const layer of context.timeline.layers) {
            let { dom, timeline } = context;
            yield new Context(dom, timeline, layer);
        }
    }

    static *frames(context: Context): Generator<Context> {
        if (!context.layer) return;
        const frames = context.layer.frames;
        for (let i = 0; i < frames.length; i++) {
            if (i !== frames[i].startFrame) continue;
            let { dom, timeline, layer } = context;

            yield new Context(dom, timeline, layer, frames[i]);
        }
    }

    static *elements(context: Context): Generator<Context> {
        if (!context.frame) return;
        for (const element of context.frame.elements) {
            let { dom, timeline, layer, frame } = context;

            yield new Context(dom, timeline, layer, frame, element);
        }
    }
}
