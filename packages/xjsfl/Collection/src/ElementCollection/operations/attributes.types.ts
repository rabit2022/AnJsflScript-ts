/**
 * @file: attributes.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */


export type XY = { x: number; y: number };

export type ValueFn<T, R> = (el: T, index: number, arr: T[]) => R;

export type AttrSetter<T> = T | ValueFn<FlashElement, T>;

export type NonFunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type NumberKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

export type AttrValue = number | string | XY | [number, number];

export const TwoDMap = {
    pos: ["x", "y"],
    position: ["x", "y"],
    size: ["width", "height"],
    scale: ["scaleX", "scaleY"]
} as const;

export type TwoDProp = keyof typeof TwoDMap;

export type ColorProp = "tint" | "alpha" | "brightness";

