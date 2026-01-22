// ------------------------------------------------------------------------------------------------------------------------
//  ______   ______     ______     __    __     ______     ______     ______
// /\  ___\ /\  == \   /\  __ \   /\ "-./  \   /\  ___\   /\  == \   /\  __ \
// \ \  __\ \ \  __<   \ \  __ \  \ \ \-./\ \  \ \  __\   \ \  __<   \ \  __ \
//  \ \_\    \ \_\ \_\  \ \_\ \_\  \ \_\ \ \_\  \ \_____\  \ \_\ \_\  \ \_\ \_\
//   \/_/     \/_/ /_/   \/_/\/_/   \/_/  \/_/   \/_____/   \/_/ /_/   \/_/\/_/
//
//  __   __     ______     ______     __         __     ______     ______
// /\ "-.\ \   /\  ___\   /\  ___\   /\ \       /\ \   /\  ___\   /\__  _\
// \ \ \-.  \  \ \ \__ \  \ \  __\   \ \ \____  \ \ \  \ \___  \  \/_/\ \/
//  \ \_\\"\_\  \ \_____\  \ \_____\  \ \_____\  \ \_\  \/\_____\    \ \_\
//   \/_/ \/_/   \/_____/   \/_____/   \/_____/   \/_/   \/_____/     \/_/
//
// ------------------------------------------------------------------------------------------------------------------------
// FrameRangeList

import { FrameRange } from "./FrameRange";
import { SObject } from "../../base/SObject";
import { FrameRangeLike } from "../../types/framerangeType";

/**
 * FrameRangeList 是一个 FrameRange 的列表容器，
 * 提供便捷的只读属性和工具方法。
 */
export class FrameRangeList extends SObject {
    private _items: FrameRange[] = [];

    // --- 构造函数 ---
    constructor(items: Iterable<FrameRange> = []) {
        super();
        this._items = Array.from(items);
    }

    // --- 数组代理方法（按需添加）---
    get length(): number {
        return this._items.length;
    }

    [Symbol.iterator](): Iterator<FrameRange> {
        return this._items[Symbol.iterator]();
    }

    at(index: number): FrameRange | undefined {
        // return this._items.at(index);
        if (index < 0) {
            index = this._items.length + index;
        }
        return this._items[index];
    }

    forEach(
        callback: (item: FrameRange, index: number, array: FrameRangeList) => void
    ): void {
        this._items.forEach((item, i) => callback(item, i, this));
    }

    map<T>(callback: (item: FrameRange, index: number) => T): T[] {
        return this._items.map(callback);
    }

    // 如果需要修改，可添加 push/pop 等，但建议保持不可变（immutable）

    // --- 只读属性（带缓存）---
    private _cachedFirstSlFrameIndex: number | null = null;
    private _cachedFirstSlLayerIndex: number | null = null;
    private _cachedFirstSlLayer: Layer | null = null;
    private _cachedFirstSlFrame: Frame | null = null;

    get firstSlFrameIndex(): number | null {
        if (this._items.length === 0) return null;
        if (this._cachedFirstSlFrameIndex === null) {
            this._cachedFirstSlFrameIndex = this._items[0].startFrame;
        }
        return this._cachedFirstSlFrameIndex;
    }

    get firstSlLayerIndex(): number | null {
        if (this._items.length === 0) return null;
        if (this._cachedFirstSlLayerIndex === null) {
            this._cachedFirstSlLayerIndex = this._items[0].layerIndex;
        }
        return this._cachedFirstSlLayerIndex;
    }

    get firstSlLayer(): Layer | null {
        if (this._items.length === 0) return null;
        if (this._cachedFirstSlLayer === null) {
            const doc = fl.getDocumentDOM();
            if (!doc) {
                throw new Error("No document is open in Flash.");
            }
            const timeline = doc.getTimeline();

            const layers = timeline.layers;
            const layerIndex = this.firstSlLayerIndex;
            this._cachedFirstSlLayer = layerIndex !== null ? layers[layerIndex] : null;
        }
        return this._cachedFirstSlLayer;
    }

    get firstSlFrame(): Frame | null {
        if (this._items.length === 0) return null;
        if (this._cachedFirstSlFrame === null) {
            const doc = fl.getDocumentDOM();
            if (!doc) {
                throw new Error("No document is open in Flash.");
            }
            const timeline = doc.getTimeline();
            const curLayerIndex = timeline.currentLayer;
            const curLayer = timeline.layers[curLayerIndex];
            const frameIndex = this.firstSlFrameIndex;
            this._cachedFirstSlFrame =
                frameIndex !== null ? curLayer.frames[frameIndex] : null;
        }
        return this._cachedFirstSlFrame;
    }

    // --- 工具方法 ---
    // /**
    //  * @deprecated use {@link Timeline.prototype.getSelectedLayers} instead.
    //  */
    // getUniqueLayerIndexes(): number[] {
    //     const seen = new Set<number>();
    //     const result: number[] = [];
    //     for (const range of this._items) {
    //         if (!seen.has(range.layerIndex)) {
    //             seen.add(range.layerIndex);
    //             result.push(range.layerIndex);
    //         }
    //     }
    //     return result;
    // }

    // --- 静态辅助方法（可选）---
    static fromFrameRanges(ranges: FrameRangeLike[]): FrameRangeList {
        return new FrameRangeList(
            ranges.map((r) =>
                r instanceof FrameRange
                    ? r
                    : new FrameRange(r.layerIndex, r.startFrame, r.endFrame)
            )
        );
    }
}
