/**
 * @file: from.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { Context } from "./Context";

/**
 * Creates a context from a supplied element
 * @param    value
 * @returns
 */
export function from(
    value?: string | FlashDocument | Timeline | FlashElement | Layer | Frame
): Context {
    // //TODO Create context using shorthand string
    // Context.create('file:///c|path/to.fla>path/to/item~layer name@frame number or name:element name');
    //
    // Context.create('file:///c|path/to.fla');
    // Context.create('/path/to/item');
    // Context.create('~layer name or index');
    // Context.create('~[layer name,layer name,layer name,layer name]');
    // Context.create('@frame number or name');
    // Context.create('element name');

    const ctx = new Context();

    if (!value) {
        return ctx;
    }

    // string DSL
    if (typeof value === "string") {
        return fromString(value);
    }

    // Document
    if (value instanceof Document) {
        return ctx.setDOM(value as FlashDocument);
    }

    // Timeline
    if (value instanceof Timeline) {
        return ctx.setTimeline(value);
    }

    // Layer
    if (value instanceof Layer) {
        return ctx.setLayer(value);
    }

    // Frame
    if (value instanceof Frame) {
        return ctx.setFrame(value);
    }

    // Element
    // if ((value as FlashElement).elementType) {
    if (value instanceof Element) {
        return ctx.setElement(value as FlashElement);
    }

    return ctx;
}

/**
 * DOM > ITEM ~ LAYER @ FRAME : ELEMENT
 * @param path
 */
function fromString(value: string): Context {
    const ctx = new Context();

    value = value.trim();

    // DOM
    if (value.startsWith("file:///")) {
        ctx.setDOM(value);
        return ctx;
    }

    // Library Item
    if (value.startsWith("/")) {
        ctx.setTimeline(value);
        return ctx;
    }

    // Layer
    if (value.startsWith("~")) {
        const layer = value.slice(1);

        // multi-layer
        if (layer.startsWith("[") && layer.endsWith("]")) {
            const layers = layer
                .slice(1, -1)
                .split(",")
                .map((v) => v.trim());

            layers.forEach((l) => ctx.setLayer(l));
        } else {
            const index = Number(layer);
            ctx.setLayer(isNaN(index) ? layer : index);
        }

        return ctx;
    }

    // Frame
    if (value.startsWith("@")) {
        const frame = value.slice(1);
        const index = Number(frame);
        ctx.setFrame(isNaN(index) ? frame : index);
        return ctx;
    }

    // Element explicit
    if (value.startsWith(":")) {
        ctx.setElement(value.slice(1));
        return ctx;
    }

    // default: element name
    ctx.setElement(value);

    return ctx;
}

type ContextPath = {
    dom?: string;
    item?: string;
    layer?: string;
    frame?: string;
    element?: string;
};

function parseContextPath(input: string): ContextPath {
    const match = input.match(
        /^\s*(?:([^>~@:]+)\s*>)?\s*(?:([^>~@:]+)\s*~)?\s*(?:([^>~@:]+)\s*@)?\s*(?:([^>~@:]+)\s*:)?\s*([^>~@:]+)?\s*$/
    );

    if (!match) {
        throw new Error("Invalid context path");
    }

    return {
        dom: match[1]?.trim(),
        item: match[2]?.trim(),
        layer: match[3]?.trim(),
        frame: match[4]?.trim(),
        element: match[5]?.trim()
    };
}

// console.log(parseContextPath('file:///c|path/to.fla>path/to/item~layer name@frame number or name:element name'))
//
//
// console.log(parseContextPath('file:///c|path/to.fla'))
// console.log(parseContextPath('/path/to/item'))
// console.log(parseContextPath('~layer name or index'))
// console.log(parseContextPath('~[layer name,layer name,layer name,layer name]'))
// console.log(parseContextPath('@frame number or name'))
// console.log(parseContextPath('element name'))
