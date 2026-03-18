/**
 * @file: rename.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { ItemCollection } from "../core/ItemCollection";
import * as _ from "lodash";

type RenameCallback = (
    item: LibraryItem,
    index: number,
    all: LibraryItem[]
    // originalName: string
) => string;

export function rename(this: ItemCollection, base: RenameCallback): ItemCollection;
export function rename(
    this: ItemCollection,
    base: string | RenameCallback,
    padding: number | boolean,
    startIndex: number,
    separator: string
): ItemCollection;

export function rename(
    this: ItemCollection,
    base: string | RenameCallback,
    padding: number | boolean = true,
    startIndex: number = 1,
    separator: string = "_"
) {
    const callback: RenameCallback =
        typeof base === "function"
            ? base
            : createRenameCallback(base, padding, startIndex, separator);

    this.each((el, index, all) => {
        // const originalName = el.name.split('/').pop() !;
        el.name = callback(el, index, all);
    });

    return this;
}

function createRenameCallback(
    baseName: string,
    padding: number | boolean = true,
    startIndex = 1,
    separator = "_"
): RenameCallback {
    return (_item, index, all) => {
        const num = index + startIndex;

        const padLength = padding
            ? String(all.length).length
            : typeof padding === "number"
              ? padding
              : 0;

        const suffix =
            padLength > 0 ? _.padStart(String(num), padLength, "0") : String(num);

        return `${baseName}${separator}${suffix}`;
    };
}
