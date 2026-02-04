/**
 * @file: BoundsConverter.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// BoundsConverter.ts

import { XYWHRect } from "./XYWHRect";
import { CornerRect } from "./CornerRect";
import { Box } from "./Box";
import { Vector } from "../Vector";
import { Bounds } from "./Bounds";

export namespace BoundsConverter {
    // === 从 Bounds (LTRB) 转换 ===

    export function toXYWH(bounds: Bounds): XYWHRect {
        const rect = new XYWHRect();
        rect.x = bounds.left;
        rect.y = bounds.top;
        rect.width = bounds.right - bounds.left;
        rect.height = bounds.bottom - bounds.top;
        return rect;
    }

    export function toCorner(bounds: Bounds): CornerRect {
        const rect = new CornerRect();
        rect.topLeft = new Vector(bounds.left, bounds.top);
        rect.bottomRight = new Vector(bounds.right, bounds.bottom);
        return rect;
    }

    export function toBox(bounds: Bounds): Box {
        const box = new Box();
        // 注意：Box 的 pos 是 bottom-left
        box.pos = new Vector(bounds.left, bounds.bottom); // bottom-left
        box.width = bounds.right - bounds.left;
        box.height = bounds.bottom - bounds.top;
        return box;
    }

    // === 反向转换（可选但推荐）===

    export function fromXYWH(rect: XYWHRect): Bounds {
        const bounds = new Bounds();
        bounds.left = rect.x;
        bounds.top = rect.y;
        bounds.right = rect.x + rect.width;
        bounds.bottom = rect.y + rect.height;
        return bounds;
    }

    export function fromCorner(rect: CornerRect): Bounds {
        const bounds = new Bounds();
        bounds.left = rect.topLeft.x;
        bounds.top = rect.topLeft.y;
        bounds.right = rect.bottomRight.x;
        bounds.bottom = rect.bottomRight.y;
        return bounds;
    }

    export function fromBox(box: Box): Bounds {
        const bounds = new Bounds();
        // Box.pos 是 bottom-left
        bounds.left = box.pos.x;
        bounds.bottom = box.pos.y;
        bounds.right = box.pos.x + box.width;
        bounds.top = box.pos.y - box.height; // 因为高度向上增长
        return bounds;
    }
}
