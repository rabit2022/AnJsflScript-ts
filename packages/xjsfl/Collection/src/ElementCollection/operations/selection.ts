/**
 * @file: selection.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { ElementCollection } from "../core/ElementCollection";
import { UI } from "../../base/UI";

export function select(
    this: ElementCollection,
    element?: boolean | number | string | FlashElement
) {
    this.dom.selectNone();

    const self_elements = this.toArray();

    if (element === true || element === undefined) {
        this.dom.selection = self_elements;
    } else {
        const el =
            typeof element === "number"
                ? self_elements[element]
                : self_elements.find((e) => e.name === element);

        if (el) this.dom.selection = [el];
    }

    return this;
}

export function group(this: ElementCollection) {
    const self_elements = this.toArray();
    UI.$selection = self_elements;
    // this.dom.selection = self_elements
    this.dom.group();

    return this;
}

/**
 * Duplicates and updates the current collection
 * @param add Whether duplicated items should be added to the current collection
 * @returns The current ElementCollection instance
 */
export function duplicate(this: ElementCollection, add: boolean = false) {
    const self_elements = this.toArray();

    // deselect existing items
    this._deselect();

    // duplicate
    this.dom.duplicateSelection();
    const elements = this.dom.selection;

    // rename elements
    let name = "";
    let num = 0;
    let pad = 0;

    const parseNames = (element: FlashElement) => {
        if (!element.name) return;

        const matches = element.name.match(/(.+?)_(\d+$)/);

        if (matches) {
            const _name = matches[1];
            const _pad = matches[2].length;
            const _num = parseInt(matches[2]);

            if (_num > num) {
                name = _name;
                num = _num;
                pad = _pad;
            }
        }
    };

    // analyze current element names
    self_elements.forEach(parseNames);

    name = name || "Item";
    num = num === 0 ? 1 : num + 1;

    // rename duplicated elements
    new ElementCollection(elements, this.dom).rename(name, pad, num);

    // add / replace elements
    const new_elements = add ? [...self_elements, ...elements] : elements;

    // 重新添加
    this.clear();
    this.addMany(new_elements);

    // refresh selection
    this.refresh();

    return this;
}

export function deleteElements(this: ElementCollection) {
    const self_elements = this.toArray();
    if (!self_elements.length) return this;

    this.dom.selection = self_elements;
    this.dom.deleteSelection();

    // self_elements = []
    this.clear();

    return this;
}
