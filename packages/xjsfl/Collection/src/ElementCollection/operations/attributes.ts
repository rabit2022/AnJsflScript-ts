/**
 * @file: attributes.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { ElementCollection } from "../core/ElementCollection";

type XY = { x: number; y: number };

type ValueFn<T, R> = (el: T, index: number, arr: T[]) => R;

type AttrSetter<T> = T | ValueFn<FlashElement, T>;

type NonFunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NumberKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type AttrValue = number | string | XY | [number, number];

const TwoDMap = {
    pos: ["x", "y"],
    position: ["x", "y"],
    size: ["width", "height"],
    scale: ["scaleX", "scaleY"]
} as const;

type TwoDProp = keyof typeof TwoDMap;

type ColorProp = "tint" | "alpha" | "brightness";

// export function attr<K extends NonFunctionKeys<FlashElement>>(
//     this: ElementCollection,
//     prop: K,
//     value: AttrSetter<FlashElement[K]>
// ): ElementCollection
//
// export function attr(
//     this: ElementCollection,
//     props: Partial<Record<NonFunctionKeys<FlashElement>, AttrValue>>
// ): ElementCollection

export function attr(this: ElementCollection, prop: unknown, value?: unknown) {
    const elements = this.toArray();

    if (typeof prop === "object" && prop !== null) {
        for (const [k, v] of Object.entries(prop)) {
            // @ts-ignore
            this.attr(k as NonFunctionKeys<FlashElement>, v as AttrSetter<any>);
        }

        return this;
    }

    const name = prop as string;

    if (is2DProperty(name)) {
        set2DProperty(elements, name, value);

        this.refresh();

        return this;
    }

    if (isColorProperty(name)) {
        setColorProperty.call(this, name, value);

        return this;
    }

    setNormalProperty(elements, name as NonFunctionKeys<FlashElement>, value as never);

    this.refresh();

    return this;
}

function is2DProperty(prop: string): prop is TwoDProp {
    return prop in TwoDMap;
}

function isColorProperty(prop: string): prop is ColorProp {
    return prop === "tint" || prop === "alpha" || prop === "brightness";
}

function set2DProperty(elements: FlashElement[], prop: TwoDProp, value: unknown) {
    const [xProp, yProp] = TwoDMap[prop] as [
        NumberKeys<FlashElement>,
        NumberKeys<FlashElement>
    ];

    elements.forEach((el, i) => {
        const val =
            typeof value === "function"
                ? (value as ValueFn<FlashElement, AttrValue>)(el, i, elements)
                : value;

        const [x, y] = normalizeXY(val);

        el[xProp] = x;
        el[yProp] = y;
    });
}

function normalizeXY(value: unknown): [number, number] {
    if (typeof value === "number") {
        return [value, value];
    }

    if (Array.isArray(value)) {
        return [value[0], value[1]];
    }

    if (value && typeof value === "object") {
        if ("x" in value && "y" in value) {
            const v = value as XY;

            return [v.x, v.y];
        }
    }

    return [0, 0];
}

function setColorProperty(this: ElementCollection, prop: ColorProp, value: unknown) {
    switch (prop) {
        case "tint":
            let tint = value as string | number;

            if (typeof tint === "string" && tint[0] !== "#") {
                tint = "#" + tint;
            }

            this.dom.setInstanceTint(tint, 100);

            break;

        case "alpha":
            this.dom.setInstanceAlpha(value as number);

            break;

        case "brightness":
            this.dom.setInstanceBrightness(value as number);

            break;
    }
}

function setNormalProperty<K extends NonFunctionKeys<FlashElement>>(
    elements: FlashElement[],
    prop: K,
    value?: AttrSetter<FlashElement[K]>
) {
    const fn: ValueFn<FlashElement, FlashElement[K]> =
        typeof value === "function" ? value : () => value as FlashElement[K];

    elements.forEach((el, i) => {
        el[prop] = fn(el, i, elements);
    });
}
