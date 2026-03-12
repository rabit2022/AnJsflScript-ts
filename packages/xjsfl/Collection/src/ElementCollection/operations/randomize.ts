/**
 * @file: randomize.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { ElementCollection } from "../core/ElementCollection";
import { randomizeValue, randomValue } from "../utils/mathUtils";

type Modifier = number | string | [number, number] | any[];

type SingleProperty =
    | "x"
    | "y"
    | "width"
    | "height"
    | "rotation"
    | "scaleX"
    | "scaleY"
    | "transformX"
    | "transformY"
    | "skewX"
    | "skewY";
type CompoundProperty = "pos" | "position" | "scale" | "size";

type Property = SingleProperty | CompoundProperty;

let self_elements: FlashElement[] = [];
let self_ref: ElementCollection;

export function randomize(
    this: ElementCollection,
    prop: Record<string, Modifier>
): ElementCollection;
export function randomize(
    this: ElementCollection,
    prop: Property,
    modifier?: Modifier
): ElementCollection;

export function randomize(
    this: ElementCollection,
    prop: Property | Record<string, Modifier>,
    modifier?: Modifier
) {
    self_ref = this;
    self_elements = this.toArray();

    if (typeof prop === "object") {
        randomizeObject(prop);
        return this;
    }

    if (isSingleProperty(prop)) {
        randomizeSingleProperty(prop, modifier);
    } else if (isCompoundProperty(prop)) {
        randomizeCompoundProperty(prop, modifier);
    }

    this.refresh();
    return this;
}

function randomizeObject(props: Record<string, Modifier>) {
    for (const key in props) {
        randomize.call(self_ref, key as Property, props[key]);
    }
    // return this
}

function isSingleProperty(prop: string): prop is SingleProperty {
    const set = new Set([
        "x",
        "y",
        "width",
        "height",
        "rotation",
        "scaleX",
        "scaleY",
        "transformX",
        "transformY",
        "skewX",
        "skewY"
    ]);
    return set.has(prop);
}

function isCompoundProperty(prop: string): prop is CompoundProperty {
    const set = new Set(["pos", "position", "scale", "size"]);
    return set.has(prop);
}

function randomizeSingleProperty(prop: SingleProperty, modifier?: Modifier) {
    const isArray = Array.isArray(modifier);

    for (const element of self_elements) {
        const value = element[prop as keyof FlashElement] as number;

        element[prop as keyof FlashElement] = isArray
            ? randomValue(modifier as [number, number])
            : randomizeValue(value, modifier);
    }
}

function randomizeCompoundProperty(prop: CompoundProperty, modifier?: Modifier) {
    if (prop === "pos") prop = "position";

    switch (prop) {
        case "position":
            randomizePosition(modifier);
            break;

        case "scale":
        case "size":
            randomizeScaleOrSize(prop, modifier);
            break;
    }
}

function randomizePosition(modifier?: Modifier) {
    const values = Array.isArray(modifier) ? modifier : [modifier, modifier];

    randomize.call(self_ref, {
        x: values[0],
        y: values[1]
    } as any);
}

function randomizeScaleOrSize(prop: string, modifier?: Modifier) {
    const attrs: Record<string, [string, string]> = {
        scale: ["scaleX", "scaleY"],
        size: ["width", "height"]
    };

    const [px, py] = attrs[prop];

    for (const element of self_elements) {
        let values: number[] = [];

        if (Array.isArray(modifier)) {
            values[0] = randomizeValue(element[px], modifier[0]);
            values[1] = randomizeValue(element[py], modifier[1]);
        } else if (typeof modifier === "string") {
            const value = randomizeValue(element[px], modifier);
            values = [value, value];
        } else {
            const max = Math.max(element[px], element[py]);
            const value = randomizeValue(max, modifier);
            values = [value, value];
        }

        element[px] = values[0];
        element[py] = values[1];
    }
}

// }
