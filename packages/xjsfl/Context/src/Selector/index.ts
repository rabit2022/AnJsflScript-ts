/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import { ContextPath, shorthandString } from "./types";
import { isPathOrUrl } from "./Util/isPathOrUrl";
import { parseItem } from "./paser/item";
import { parseLayer } from "./paser/layer";
import { parseFrame } from "./paser/frame";
import { parseElement } from "./paser/element";
import { parseDom } from "./paser/dom";

/**
 * DOM > ITEM ~ LAYER @ FRAME : ELEMENT
 * @param input
 */
export function parseContextPath(input: shorthandString): ContextPath {
    const result: ContextPath = {};

    // 删除已经匹配的，封装：识别错误
    let restText = input.trim();

    // 如果没有 DSL 符号
    if (!/[>~@:]/.test(restText)) {
        if (isPathOrUrl(restText)) {
            result.dom = parseDom(restText);
        } else {
            result.element = {
                type: "name",
                value: restText
            };
        }

        return result;
    }

    // DOM
    const domMatch = restText.match(/^[^>~@]+/);

    if (domMatch) {
        // console.log("dom match", domMatch[0],domMatch[1])

        result.dom = parseDom(domMatch[0]);
        restText = restText.replace(domMatch[0], "");
    }

    // ITEM
    const itemMatch = restText.match(/>([^~@:]+)/);

    if (itemMatch) {
        result.item = parseItem(itemMatch[1]);
        restText = restText.replace(itemMatch[1], "");
    }

    // LAYER
    const layerMatch = restText.match(/~([^@:]+)/);

    if (layerMatch) {
        result.layer = parseLayer(layerMatch[1]);
        restText = restText.replace(layerMatch[1], "");
    }

    // FRAME
    const frameMatch = restText.match(/@([^:]+)/);

    if (frameMatch) {
        result.frame = parseFrame(frameMatch[1]);
        restText = restText.replace(frameMatch[1], "");
    }

    // ELEMENT
    const elementMatch = restText.match(/:([^>~@]+)/);

    if (elementMatch) {
        result.element = parseElement(elementMatch[1]);
        restText = restText.replace(elementMatch[1], "");
    }

    return result;
}

// console.log(parseContextPath('file:///c|path/to.fla>path/to/item~layer name@frame number or name:element name'))
// console.log(parseContextPath('~layer name or index'))
// console.log(parseContextPath('~[layer name,layer name,layer name,layer name]'))
// console.log(parseContextPath('@frame number or name'))
// console.log(parseContextPath('element name'))
// console.log(parseContextPath('@10..20'))
//
// console.log(parseContextPath('file:///c|path/to.fla'))
// console.log(parseContextPath('/path/to/item'))
