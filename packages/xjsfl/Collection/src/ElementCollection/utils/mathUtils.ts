/**
 * @file: mathUtils.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

export function randomValue(a: [number, number], round?: boolean): number;
export function randomValue(a: number, b: number, round?: boolean): number;

export function randomValue(
    a: number | [number, number],
    b?: number | boolean,
    round?: boolean
): number {
    if (Array.isArray(a)) {
        const min = a[0];
        const max = a[1];
        const shouldRound = b as boolean | undefined;

        const value = min + (max - min) * Math.random();
        return shouldRound ? Math.round(value) : value;
    }

    const min = a;
    const max = b as number;

    const value = min + (max - min) * Math.random();
    return round ? Math.round(value) : value;
}

export function randomizeValue(value: number, modifier?: number | string): number {
    if (typeof value !== "number") return value;

    if (modifier === undefined) {
        return value * Math.random();
    }

    if (typeof modifier === "number") {
        return value + modifier * Math.random();
    }

    if (typeof modifier === "string") {
        const matches = modifier.match(/([+\-*/])?(\d+(\.\d+)?)(%)?/);
        if (!matches) return value;

        const sign = matches[1];
        let offset = parseFloat(matches[2]);
        const percent = matches[4];

        if (percent) {
            if (sign === "+" || sign === "-") {
                offset = value * (offset / 100);
            } else if (sign === "*" || sign === "/") {
                offset = offset / 100;
            }
        }

        switch (sign) {
            case "+":
                return value + offset * Math.random();

            case "-":
                return value - offset * Math.random();

            case "*":
                return value * offset * Math.random();

            case "/":
                return (value / offset) * Math.random();

            default:
                return value + offset * Math.random() - offset / 2;
        }
    }

    return value;
}
