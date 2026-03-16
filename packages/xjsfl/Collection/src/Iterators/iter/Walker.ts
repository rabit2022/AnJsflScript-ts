import {Iterators} from "./Iterators";

export class Walker {

    /**
     * 不是选中的elements
     * 而是每一个文档的----items的内部(item as SymbolItem).timeline----layers----所有element,实用性比较差
     */
    static* walkElements() {
        for (const doc of Iterators.documents()) {
            for (const item of Iterators.items(doc)) {
                for (const layer of Iterators.layers(item)) {
                    for (const frame of Iterators.frames(layer)) {
                        for (const elCtx of Iterators.elements(frame)) {
                            const el = elCtx.element!
                            yield el;
                        }
                    }
                }
            }
        }
    }

    static* walkFrames() {
        for (const doc of Iterators.documents()) {
            for (const item of Iterators.items(doc)) {
                for (const layer of Iterators.layers(item)) {
                    for (const frameCtx of Iterators.frames(layer)) {
                        const frame = frameCtx.frame!
                        yield frame;
                    }
                }
            }
        }
    }

    static* walkLayers() {
        for (const doc of Iterators.documents()) {
            for (const item of Iterators.items(doc)) {
                for (const layerCtx of Iterators.layers(item)) {
                    const layer = layerCtx.layer!;
                    yield layer;
                }
            }
        }
    }

    static* walkItems() {
        for (const doc of Iterators.documents()) {
            for (const itemCtx of Iterators.items(doc)) {
                const item = itemCtx.item!;
                yield item;
            }
        }
    }

    static* walkDocs() {
        for (const docCtx of Iterators.documents()) {
            const doc = docCtx.dom!;
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