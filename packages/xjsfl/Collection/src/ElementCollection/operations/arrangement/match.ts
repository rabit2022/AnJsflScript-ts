/**
 * @file: match.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { getExtremeValues } from "../../utils/elementUtils";
import { ElementCollection } from "../../core/ElementCollection";

export type MatchProp = "width" | "height" | "size";

export type ElementSelector = boolean | string | number | FlashElement | undefined;

/** -------------------------
 * overload definitions
 * ------------------------- */

export function match(this: ElementCollection, prop: MatchProp): ElementCollection;
export function match(
    this: ElementCollection,
    prop: MatchProp,
    element: boolean
): ElementCollection;
export function match(
    this: ElementCollection,
    prop: MatchProp,
    element: string
): ElementCollection;
export function match(
    this: ElementCollection,
    prop: MatchProp,
    element: number
): ElementCollection;
export function match(
    this: ElementCollection,
    prop: MatchProp,
    element: FlashElement
): ElementCollection;

/** implementation */
/**
 * 按照传入的element 例子，指定prop 属性，设置当前所有的element的对应属性
 * @param prop
 * @param element
 */
export function match(
    this: ElementCollection,
    prop: MatchProp,
    element: ElementSelector = true
) {
    const self_elements = this.toArray();

    if (self_elements.length === 0) {
        return this;
    }

    let target: FlashElement | undefined;

    /** boolean → biggest / smallest */
    if (typeof element === "boolean") {
        const [minWidthEl, maxWidthEl] = getExtremeValues(
            self_elements,
            "width",
            true
        ) as [FlashElement, FlashElement];

        const [minHeightEl, maxHeightEl] = getExtremeValues(
            self_elements,
            "height",
            true
        ) as [FlashElement, FlashElement];

        target = {
            width: element ? maxWidthEl.width : minWidthEl.width,
            height: element ? maxHeightEl.height : minHeightEl.height
        } as FlashElement;
    } else if (typeof element === "string" || typeof element === "number") {
        /** selector */
        // element = this.find(element);
        const new_elements = this.find(element);
        target = new_elements[0]!;
    } else {
        /** element object */
        target = element;
    }

    if (target && target instanceof Element) {
        switch (prop) {
            case "width":
                this.attr.call("width", target.width);
                break;
            case "height":
                this.attr("height", target.height);
                break;
            case "size":
                this.attr.call("width", target.width);
                this.attr("height", target.height);

                break;
            default:
                throw new Error(`Unknown target element "${prop}"`);
        }
    }

    this.refresh();
    return this;
}
