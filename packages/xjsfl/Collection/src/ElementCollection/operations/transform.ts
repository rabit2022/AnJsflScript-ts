/**
 * @file: transform.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { ElementCollection } from "../core/ElementCollection";

export function move(this: ElementCollection, x = 0, y = 0, relative = false) {
    const self_elements = this.toArray();

    if (relative) {
        for (let el of self_elements) {
            el.x += x;
            el.y += y;
        }
    } else {
        // get bounds
        var bounds = this.dom.getSelectionRect() as FlashRectangle;
        this._deselect();

        // loop
        for (let element of self_elements) {
            element.x = element.left - bounds.left + (element.x - element.left) + x;
            element.y = element.top - bounds.top + (element.y - element.top) + y;
        }

        // reselect
        this._reselect();
    }

    this.refresh();

    return this;
}

export function rotate(this: ElementCollection, angle: number, corner?: Corner) {
    this.select();
    this.dom.rotateSelection(angle, corner);

    return this;
}

export function scale(this: ElementCollection, x = 1, y = 1, corner?: Corner) {
    this.select();

    this.dom.scaleSelection(x, y, corner);

    return this;
}

export function resetTransform(this: ElementCollection) {
    this._deselect();
    this.dom.resetTransformation();
    this._reselect();
    this.refresh();
    return this;
}

/**
 * Centers the transform points of the elements
 * @param donnotrun Set transform point to center (true) or keep original (false)
 * @returns The current ElementCollection instance
 */
export function centerTransformPoint(this: ElementCollection, donnotrun: boolean = true) {
    if (!donnotrun) return this;

    const center = (e: FlashElement) => {
        const mat = e.matrix;

        // 临时去掉 skew / rotation
        const tempMatrix = {
            a: mat.a,
            b: 0,
            c: 0,
            d: mat.d,
            tx: mat.tx,
            ty: mat.ty
        };

        // 应用临时 matrix
        e.matrix = tempMatrix;

        // 设置中心 transform point
        e.setTransformationPoint({
            x: (e.width / 2) * (1 / e.scaleX),
            y: (e.height / 2) * (1 / e.scaleY)
        });

        // 恢复原 matrix
        e.matrix = mat;
    };

    this.each(center);

    return this;
}
