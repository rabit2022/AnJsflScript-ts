/**
 * @file: element_space.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */
import {ElementCollection} from "../../core/ElementCollection";
import {OrderableProp} from "../order";

type SpaceDirection = 'horizontal' | 'vertical';

interface SpaceOptions {
    direction?: SpaceDirection;

    /**
     * 固定间距（px）
     * 设置后将使用自定义 spacing，而不是 JSFL space()
     */
    gap?: number;

    /**
     * 是否使用舞台边界（仅对根元素有效）
     * 等价于 JSFL space(direction, true)
     */
    useDocumentBounds?: boolean;
}

let self_elements: FlashElement[] = [];

export function space(
    this: ElementCollection,
    options: SpaceDirection | number | SpaceOptions,
    secondary?: number | boolean
) {
    self_elements = this.toArray();

    if (!self_elements.length) {
        return this;
    }

    // ----------------------------
    // 参数归一化
    // ----------------------------
    let direction: SpaceDirection = 'horizontal';
    let gap: number | undefined;
    let useDocumentBounds = false;

    if (typeof options === 'string') {
        direction = options;
        if (typeof secondary === 'number') gap = secondary;
        if (typeof secondary === 'boolean') useDocumentBounds = secondary;
    } else if (typeof options === 'number') {
        gap = options;
    } else {
        ({
            direction = 'horizontal',
            gap,
            useDocumentBounds = false,
        } = options);
    }

    // ----------------------------
    // 自定义 spacing（固定间距）
    // ----------------------------
    if (typeof gap === 'number') {

        // 先排序
        this.orderBy(direction === 'horizontal' ? 'left' : 'top' as OrderableProp);

        spaceWithGap(direction, gap);
        return this;
    }


    // ----------------------------
    // JSFL 原生 spacing
    // ----------------------------
    this._deselect(false);
    this.dom.selectNone();
    this.dom.selection = self_elements;

    this.dom.space(direction, useDocumentBounds);

    this._reselect();
    return this;
}


function spaceWithGap(
    direction: SpaceDirection,
    gap: number
): void {


    let cursor = 0;

    for (let i = 0; i < self_elements.length; i++) {
        const el = self_elements[i];

        if (direction === 'horizontal') {
            const offset = el.x - el.left;

            if (i === 0) {
                cursor = el.x - offset;
            } else {
                el.x = cursor + offset;
            }

            cursor += el.width + gap;
        } else {
            const offset = el.y - el.top;

            if (i === 0) {
                cursor = el.y - offset;
            } else {
                el.y = cursor + offset;
            }

            cursor += el.height + gap;
        }
    }
}













