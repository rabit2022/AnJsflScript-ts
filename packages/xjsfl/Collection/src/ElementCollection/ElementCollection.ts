/**
 * @file: ElementCollection.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

﻿// ------------------------------------------------------------------------------------------------------------------------
//
//  ██████ ██                             ██   ██████       ██ ██              ██   ██
//  ██     ██                             ██   ██           ██ ██              ██
//  ██     ██ █████ ████████ █████ █████ █████ ██     █████ ██ ██ █████ █████ █████ ██ █████ █████
//  █████  ██ ██ ██ ██ ██ ██ ██ ██ ██ ██  ██   ██     ██ ██ ██ ██ ██ ██ ██     ██   ██ ██ ██ ██ ██
//  ██     ██ █████ ██ ██ ██ █████ ██ ██  ██   ██     ██ ██ ██ ██ █████ ██     ██   ██ ██ ██ ██ ██
//  ██     ██ ██    ██ ██ ██ ██    ██ ██  ██   ██     ██ ██ ██ ██ ██    ██     ██   ██ ██ ██ ██ ██
//  ██████ ██ █████ ██ ██ ██ █████ ██ ██  ████ ██████ █████ ██ ██ █████ █████  ████ ██ █████ ██ ██
//
// ------------------------------------------------------------------------------------------------------------------------
// ElementCollection

import {getNextNameInfo} from "./utils/namesUtil";
import {UI} from "../base/UI";
import {find} from "./utils/find";
import {createRenameCallback, RenameCallback} from "./utils/rename";
import {assertNever} from "./utils/assert";
import {Anchor} from "./utils/anchor";

/**
 * ElementCollection
 *
 * @overview        Enacpsulates and modifies Arrays of stage Elements
 * @instance        collection
 */
enum DuplicateMode {
    Replace,
    Append,
}

enum MoveMode {
    Absolute,
    Relative,
}

export class ElementCollection extends Array <FlashElement> {
    /**
     * A reference to the Document the elements reside in
     * @type {Document}
     */
    private dom: FlashDocument;

    constructor(elements: FlashElement[], dom ?: FlashDocument) {
        // super(...(elements instanceof Array ? elements : [elements]));
        // 1. 标准化输入为数组
        const elementsArray = Array.isArray(elements) ? elements : [elements];
        // 2. （可选）在这里过滤、去重、验证等
        const processedElements = elementsArray.filter(el => el != null);
        // 3. 传给父类
        super(...processedElements);


        this.dom = dom || UI.$dom;
        if (!this.dom) {
            throw new Error('ElementCollection requires that a document be open before instantiation');
        }
    }


    /**
     * Returns an ItemCollection of the collection's elements
     */
    get items(): ItemCollection {
        const self_elements = this;

        // 1. 提取所有非 undefined 的 libraryItem
        const items = self_elements
            .map(el => (el as Instance).libraryItem)
            .filter((item): item is LibraryItem => item !== undefined);

        // 2. 按引用去重（如果 Item 是对象，通常按引用去重）
        const uniqueItems = Array.from(new Set(items));

        return new ItemCollection(uniqueItems, this.dom);
    }

    // --------------------------------------------------------------------------------
    // Private methods
    private selection: FlashElement[] = [];

    /**
     * Swap any existing selection for the collection
     */
    _deselect(shouldSelect = true) {
        this.selection = UI.$selection || [];
        if (shouldSelect) {
            const self_elements = this;

            this.dom.selectNone();
            this.dom.selection = self_elements;
        }
    }

    /**
     * Reselect any user selection
     */
    _reselect() {
        this.dom.selectNone();
        this.dom.selection = this.selection;
    }


    // --------------------------------------------------------------------------------
    // # Standard methods

    select(): this;
    select(all: true): this;
    select(index: number): this;
    select(name: string): this;
    select(el: Element): this;
    select(target?: true | number | string | Element): this {
        this.dom.selectNone();

        if (target === undefined || target === true) {
            this.dom.selection = this;
            return this;
        }

        this.dom.selection = this.resolveSelection(target);
        return this;
    }

    private resolveSelection(target: number | string | Element): ElementCollection {
        if (typeof target === 'number') {
            // return this.at(target);
            return [this[target]] as ElementCollection;
        }

        if (typeof target === 'string') {
            return find(this, target) as ElementCollection;
        }

        return new ElementCollection([target]);
    }


    /**
     * Groups the elements in the collection
     * @returns      The original ElementCollection object
     */
    group() {
        UI.$selection = this;
        this.dom.group();
        return this;
    }


    /**
     * Duplicates and updates the current collection
     * @param mode Duplicate mode (Replace | Append)
     */
    duplicate(mode: DuplicateMode = DuplicateMode.Replace): this {
        this._deselect();

        this.dom.duplicateSelection();
        const duplicated: Element[] = this.dom.selection;

        const self_elements = this;

        const {baseName, nextNum, pad} = getNextNameInfo(self_elements);


        new ElementCollection(duplicated).rename(baseName, pad, nextNum);

        switch (mode) {
            case DuplicateMode.Append:
                // this.elements = [...this.elements, ...duplicated];
                // this is array
                this.push(...duplicated)
                break;
            case DuplicateMode.Replace:
                // this.elements = duplicated;
                this.length = 0
                this.push(...duplicated)
                break;
            default:
                throw new Error("Invalid duplicate mode.");
        }

        this.refresh();
        return this;
    }

    /**
     * Forces the a refreshes of the display after a series of operations
     * @returns    {ElementCollection}                The original ElementCollection object
     */
    refresh() {
        this.dom.livePreview = true
        return this;
    }


    /**
     * Removes all elements from the collection and the stage
     * @returns    {ElementCollection}                The original ElementCollection object
     */
    deleteElements() {

        const self_elements = this;
        if (self_elements.length) {
            this.dom.selectNone();
            this.dom.selection = self_elements;
            this.dom.deleteSelection();
            // self_elements = [];
            this.length = 0
        }
        return this;
    }


    rename(callback: RenameCallback): this;
    rename(base: string, padding?: number, startIndex?: number, separator?: string): this;


    rename(base: string | RenameCallback, padding?: number, startIndex?: number, separator?: string): this {
        const callback =
            typeof base === 'function' ?
                base :
                createRenameCallback(base, padding, startIndex, separator);

        this.forEach((el, index, elements) => {
            el.name = callback(el, index, elements);
        });

        return this;
    }


// --------------------------------------------------------------------------------
// # Translation methods


    /**
     * Move the collection on stage to, or by, x and y values
     */
    move(x: number = 0, y: number = 0, mode: MoveMode = MoveMode.Absolute): this {
        switch (mode) {
            case MoveMode.Relative:
                this.moveRelative(x, y);
                break;

            case MoveMode.Absolute:
                this.moveAbsolute(x, y);
                break;

            default:
                assertNever(mode);
        }

        this.refresh();
        return this;
    }

    private moveRelative(x: number, y: number): void {
        for (let i = 0; i < this.length; i++
        ) {
            const element = this[i];
            element.x += x;
            element.y += y;
        }
    }

    private moveAbsolute(x: number, y: number): void {
        const bounds: FlashRectangle = this.dom.getSelectionRect() as FlashRectangle;
        this._deselect();

        for (let i = 0; i < this.length; i++) {
            const element = this[i];

            element.x =
                (element.left - bounds.left) +
                (element.x - element.left) +
                x;

            element.y =
                (element.top - bounds.top) +
                (element.y - element.top) +
                y;
        }

        this._reselect();
    }


    /**
     * Rotates the collection by a specified number of degrees
     * @param    {Number}            angle        A floating-point value that specifies the angle of the rotation
     * @param    {String}            whichCorner    An optional String that specifies which side of the bounding box to rotate. Acceptable values are "top right", "top left", "bottom right", "bottom left", "top center", "right center", "bottom center", and "left center"
     * @returns    {ElementCollection}                The original ElementCollection
     */
    rotate(angle, whichCorner: Anchor) {
        this.select();
        this.dom.rotateSelection(angle, whichCorner)
        return this;
    }


    /**
     * Scales the collection by a specified amount
     */
    scale(xScale: number = 1, yScale: number = 1, anchor ?: Anchor): this {
        this.select();
        this.dom.scaleSelection(xScale, yScale, anchor);
        return this;
    }


}


export enum TransformPointMode {
    Center,
    // Restore, // 未来可以加
}

/**
 * Centers or restores the transform points of the elements
 */
centerTransformPoint(mode:TransformPointMode = TransformPointMode.Center):ElementCollection{
    switch (mode) {
        case TransformPointMode.Center:
            // this.each(this.centerTransformPointInternal);
            // this.elements.forEach(this.centerTransformPointInternal);
            for (const el of this.elements) {
                this.centerTransformPointInternal(el);
            }
            break;

        default:
            this.assertNever(mode);
    }

    return this;
}
private centerTransformPointInternal = (element: Element): void => {
    const originalMatrix = element.matrix;

    // 构造一个去掉 skew / rotation 的临时矩阵
    const neutralMatrix = {
        a: originalMatrix.a,
        b: 0,
        c: 0,
        d: originalMatrix.d,
        tx: originalMatrix.tx,
        ty: originalMatrix.ty,
    };

    // 临时应用 neutral matrix
    element.matrix = neutralMatrix;

    // 设置 transform point 到几何中心（考虑缩放）
    element.setTransformationPoint({
        x: (element.width / 2) * (1 / element.scaleX),
        y: (element.height / 2) * (1 / element.scaleY),
    });

    // 还原原始矩阵
    element.matrix = originalMatrix;
};

/**
 * Resets the transform of the elements
 * @returns    {ElementCollection}                The original ElementCollection object
 */
resetTransform: function () {
    this._deselect();
    this.dom.resetTransformation();
    this._reselect();
    this.refresh();
    return this;
}
,

// --------------------------------------------------------------------------------
// # Attribute methods


}


// --------------------------------------------------------------------------------
// # Editing methods

/**
 * Enters edit mode for each symbol item in the collection, executing a user-supplied function within each one
 * @param    {Function}            callback    A function with a signature matching function(element, index, ...params), with "this" referring to the original ItemCollection
 * @param    {Array}                params        An array of optional parameters to pass to the callback
 * @param    {Object}            scope        An optional scope to call the method in
 * @returns    {ItemCollection}                The original ItemCollection
 */
exec: function (callback, params, scope) {
    // variables
    var context = Context.create();

    // execute function once on each of the symbol items
    this.items.exec(callback, params, scope);

    // navigate to the original document context
    context.goto();

    // return
    return this;
}
,

/**
 * Utility function to list the contents of the collection
 * @param    {String}            label        An optional label to add to the inspect() output
 * @returns    {ElementCollection}                The original ElementCollection object
 */
list: function (label) {
    function getName(element) {
        return element.name ? 'name: ' + element.name : (element.libraryItem ? 'item: ' + element.libraryItem.name : 'type: ' + element.elementType);
    }

    Output.list(this.elements, getName, label || this.toString());
    return this;
}

}

ElementCollection = Collection.extend(ElementCollection);
ElementCollection.toString = function () {
    return '[class ElementCollection]';
}

// xjsfl.classes.register('ElementCollection', ElementCollection);