import { ElementCollection } from "../../core/ElementCollection";

/**
 * @file: element_grid.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */
type GridPrecision = number | [number, number] | { x: number; y: number };
// type RoundingMode = -1 | 0 | 1;

export enum Rounding {
    Down = -1,
    Nearest = 0,
    Up = 1
}

export function toGrid(
    this: ElementCollection,
    precision?: GridPrecision,
    rounding: Rounding = Rounding.Nearest
) {
    const p = normalizePrecision(precision);
    const offset = getGridOffset(p, rounding);

    const self_elements = this.toArray();

    // main logic
    for (const element of self_elements) {
        let x = element.x + offset.x;
        let y = element.y + offset.y;

        x -= x % p.x;
        y -= y % p.y;

        element.x = x;
        element.y = y;
    }

    this.refresh();
    return this;
}

function normalizePrecision(precision?: GridPrecision): FlashPoint {
    // normalize precision
    let p: { x: number; y: number };

    if (typeof precision === "number") {
        p = { x: precision, y: precision };
    } else if (Array.isArray(precision)) {
        p = { x: precision[0], y: precision[1] };
    } else if (precision) {
        p = { x: precision.x, y: precision.y };
    } else {
        p = { x: 1, y: 1 };
    }

    return p;
}

function getGridOffset(
    precision: FlashPoint,
    rounding: Rounding = Rounding.Nearest
): FlashPoint {
    // compute offset via enum + switch
    let offset: { x: number; y: number };

    switch (rounding) {
        case Rounding.Down:
            offset = { x: 0.001, y: 0.001 };
            break;

        case Rounding.Up:
            offset = { x: precision.x - 0.001, y: precision.y - 0.001 };
            break;

        case Rounding.Nearest:
        default:
            offset = { x: precision.x * 0.5, y: precision.y * 0.5 };
            break;
    }
    return offset;
}
