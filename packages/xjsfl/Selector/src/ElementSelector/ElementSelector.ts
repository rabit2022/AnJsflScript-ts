/**
 * @file: ElementSelector.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

// ------------------------------------------------------------------------------------------------------------------------
//
//                                                                                                      ██   ██   ██
//  ██████ ██                             ██        ██████       ██              ██                    ██  ██████  ██
//  ██     ██                             ██        ██           ██              ██                   ██   ██       ██
//  ██     ██ █████ ████████ █████ █████ █████      ██     █████ ██ █████ █████ █████ █████ ████      ██   ██       ██
//  █████  ██ ██ ██ ██ ██ ██ ██ ██ ██ ██  ██        ██████ ██ ██ ██ ██ ██ ██     ██   ██ ██ ██        ██   ██████   ██
//  ██     ██ █████ ██ ██ ██ █████ ██ ██  ██            ██ █████ ██ █████ ██     ██   ██ ██ ██        ██       ██   ██
//  ██     ██ ██    ██ ██ ██ ██    ██ ██  ██            ██ ██    ██ ██    ██     ██   ██ ██ ██        ██       ██   ██
//  ██████ ██ █████ ██ ██ ██ █████ ██ ██  ████      ██████ █████ ██ █████ █████  ████ █████ ██         ██  ██████  ██
//                                                                                                      ██   ██   ██
//
// ------------------------------------------------------------------------------------------------------------------------
// Element Selector ($)

import { ElementCollection } from "@xjafl/Collection";
import { Selectors } from "../Selectors";
import { Context } from "@xjsfl/Context";
import { UI } from "../base/UI";

function resolveParams(
    expression: string | null,
    elements: FlashElement[] | ElementCollection,
    dom?: FlashDocument,
    context?: Context
) {
    let elements1: FlashElement[] | undefined;
    let context1: Context | undefined;

    if (Array.isArray(elements)) elements1 = elements;
    else if (elements instanceof ElementCollection) {
        elements1 = elements.toArray();
        dom = elements.dom;
    }

    if (context && context.dom) {
        dom = context.dom || UI.$dom;
        context1 = context;
    } else if (dom) {
        const ctx = new Context();
        ctx.setDOM(dom);
        ctx.setTimeline(true);
        context1 = ctx;
        // return ctx;
    } else if (UI.$dom) {
        context1 = Context.create();
        dom = context1.dom!;
    }

    if (!dom) {
        throw new ReferenceError(
            "ReferenceError in $(): Open a document before attempting to select elements"
        );
    }

    return { expression, elements: elements1, dom, context: context1! };
}

function getAllElements(ctx: Context): FlashElement[] {
    const result: FlashElement[] = [];

    for (const layer of ctx.timeline!.layers) {
        if (layer.layerType === "folder") continue;
        if (layer.locked) continue;

        ctx.setLayer(layer).setFrame(true);
        result.push(...ctx.frame!.elements);
    }

    return result;
}

export function $(...args: Parameters<typeof resolveParams>): ElementCollection {
    // -----------------------------
    // params
    const {
        expression,
        elements: srcElements,
        dom: document1,
        context
    } = resolveParams(...args);

    // -----------------------------
    // elements
    let elements = srcElements;

    if (elements && !expression) {
        return new ElementCollection(elements, document1);
    }

    if (!elements) {
        elements = getAllElements(context);
    }

    // -----------------------------
    // select
    const result = Selectors.select(expression!, elements, document1);

    return new ElementCollection(result, document1);
}
