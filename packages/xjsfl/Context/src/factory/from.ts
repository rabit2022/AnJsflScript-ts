/**
 * @file: from.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import {shorthandString} from "../Selector/types";
import {Context} from "../Context";
import {parseContextPath} from "../Selector";


/**
 * Creates a context from a supplied element
 * @param    value
 * @returns
 */
export function from(
    value?: shorthandString | FlashDocument | Timeline | FlashElement | Layer | Frame
): Context {
    const ctx = new Context();

    if (!value) {
        return ctx;
    }

    // string DSL
    if (typeof value === "string") {
        return fromString(value);
    } else if (value instanceof Document) {
        return ctx.setDOM(value as FlashDocument);
    } else if (value instanceof Timeline) {
        return ctx.setTimeline(value);
    } else if (value instanceof Layer) {
        return ctx.setLayer(value);
    } else if (value instanceof Frame) {
        return ctx.setFrame(value);
    } else if (value instanceof Element) {
        return ctx.setElement(value as FlashElement);
    }

    return ctx;
}

/**
 * DOM > ITEM ~ LAYER @ FRAME : ELEMENT
 * @param path
 */
function fromString(value: shorthandString): Context {
    const ctx = new Context();

    const parsed = parseContextPath(value);

    if (parsed.dom) {
        switch (parsed.dom.type) {
            case "url":
                throw new Error("Not implemented " + parsed.dom.type);
            case "name":
                ctx.setDOM(parsed.dom.value);
                break;
            default:
                throw new Error("Unrecognized dom type");
        }
    }

    if (parsed.item) {
        switch (parsed.item.type) {
            case "name":
            case "index":
                throw new Error("Not implemented " + parsed.item.type);
            default:
                throw new Error("Unrecognized item type");
        }
    }

    if (parsed.layer) {
        switch (parsed.layer.type) {
            case "name":
                ctx.setLayer(parsed.layer.value);
                break;
            case "index":
                let index = Number(parsed.layer.value);
                ctx.setLayer(index);
                break;
            case "all":
            case "list":
                throw new Error("Not implemented " + parsed.item);
                break;
            default:
                throw new Error("Unrecognized layer type");
        }
    }

    if (parsed.frame) {
        switch (parsed.frame.type) {
            case "name":
                ctx.setFrame(parsed.frame.value);
                break;
            case "index":
                let index = Number(parsed.frame.value);
                ctx.setFrame(index);
                break;
            case "range":
                throw new Error("Not implemented " + parsed.frame);
                break;
            default:
                throw new Error("Unrecognized frame type");
        }
    }

    if (parsed.element) {
        switch (parsed.element.type) {
            case "name":
                ctx.setElement(parsed.element.value);
                break;
            case "index":
                let index = Number(parsed.element.value);
                ctx.setElement(index);
                break;
            default:
                throw new Error("Unrecognized element type");
        }
    }

    return ctx;

}
