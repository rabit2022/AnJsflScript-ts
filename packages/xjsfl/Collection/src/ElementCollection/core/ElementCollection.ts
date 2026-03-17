/**
 * @file: ElementCollection.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import * as selection from "../operations/selection";
import * as transform from "../operations/transform";
import * as attributes from "../operations/attributes";
import * as rename from "../operations/rename";
import * as randomize from "../operations/randomize";
import * as order from "../operations/order";
import * as arrangement from "../operations/arrangement";
import { Collection } from "../../base/Collection";
import { UI } from "../../base/UI";

import { ItemCollection } from "../../ItemCollection";

export class ElementCollection extends Collection<FlashElement> {
    dom: FlashDocument;
    private _selection: FlashElement[] = [];

    constructor(elements: FlashElement | FlashElement[], dom?: FlashDocument) {
        const elementsArray = Array.isArray(elements) ? elements : [elements];
        // 2. （可选）在这里过滤、去重、验证等
        const processedElements = elementsArray.filter((el) => el != null);
        // 3. 传给父类
        super(...processedElements);

        this.dom = dom || UI.$dom;
        if (!this.dom) {
            throw new Error(
                "ElementCollection requires that a document be open before instantiation"
            );
        }
    }

    get items(): ItemCollection {
        // const self_elements = this.toArray();

        // 1. 提取所有非 undefined 的 libraryItem
        const items = this.toArray()
            .map((el) => (el as Instance).libraryItem)
            .filter((item) => item !== undefined);

        // 2. 按引用去重（如果 Item 是对象，通常按引用去重）
        const uniqueItems = Array.from(new Set(items));

        return new ItemCollection(uniqueItems, this.dom);
    }

    refresh() {
        this.dom.livePreview = true;
        return this;
    }

    /**
     * Swap any existing selection for the collection
     */
    _deselect(shouldSelect = true) {
        this._selection = UI.$selection || [];
        if (shouldSelect) {
            const self_elements = this.toArray();

            this.dom.selectNone();
            this.dom.selection = self_elements;
        }
    }

    /**
     * Reselect any user selection
     */
    _reselect() {
        this.dom.selectNone();
        this.dom.selection = this._selection;
    }

    // --- selection
    select = selection.select.bind(this);
    group = selection.group.bind(this);
    duplicate = selection.duplicate.bind(this);
    deleteElements = selection.deleteElements.bind(this);

    // --- transform
    move = transform.move.bind(this);
    rotate = transform.rotate.bind(this);
    scale = transform.scale.bind(this);
    resetTransform = transform.resetTransform.bind(this);
    centerTransformPoint = transform.centerTransformPoint.bind(this);

    // --- attributes
    // @ts-ignore
    attr = attributes.attr.bind(this);
    rename = rename.rename.bind(this);

    // --- arrangement
    align = arrangement.align.bind(this);
    distribute = arrangement.distribute.bind(this);
    space = arrangement.space.bind(this);
    match = arrangement.match.bind(this);
    layout = arrangement.layout.bind(this);
    toGrid = arrangement.toGrid.bind(this);

    // --- randomize
    randomize = randomize.randomize.bind(this);

    // --- orderby
    orderBy = order.orderBy.bind(this);
}
