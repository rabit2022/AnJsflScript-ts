

// ------------------------------------------------------------------------------------------------------------------------
//
//  ██  ██                       ██████              ██
//  ██  ██                         ██                ██
//  ██ █████ █████ ████████        ██   █████ █████ █████ █████
//  ██  ██   ██ ██ ██ ██ ██        ██   ██ ██ ██     ██   ██
//  ██  ██   █████ ██ ██ ██        ██   █████ █████  ██   █████
//  ██  ██   ██    ██ ██ ██        ██   ██       ██  ██      ██
//  ██  ████ █████ ██ ██ ██        ██   █████ █████  ████ █████
//
// ------------------------------------------------------------------------------------------------------------------------
// # Item Tests


import {Selectors} from "../Selectors";
import {Core} from "../core/Core";
import {UI} from "../../base/UI";
import {ITEM_filter_type, ITEM_ItemType, ITEM_VideoType} from "./item.types";
import * as _ from 'lodash';
import {TIMELINE} from "./timeline";

export namespace ITEM {

    // =========================
    // REGISTER
    // =========================
    export function register(pattern: string, callback: Function) {
        return Selectors.register(pattern, callback, 'item');
    }

    // =========================
    // FILTER
    // =========================
    export namespace filter {

        export function name(item: LibraryItem, rx: RegExp, range?: any): boolean {
            const itemName = UI.getItemName(item);
            const matches = itemName.match(rx);

            if (matches) {
                if (range) {
                    return Core.math.range(matches[1], range);
                }
                return true;
            }
            return false;
        }

        export function path(item: LibraryItem|FlashElement, rx: RegExp, range?: any): boolean {
            const matches = item.name.match(rx);

            if (matches) {
                if (range) {
                    return Core.math.range(matches[1], range);
                }
                return true;
            }
            return false;
        }

        export function Package(item: LibraryItem, rx: RegExp): boolean {
            return !!item.linkageClassName && rx.test(item.linkageClassName);
        }

        export function Class(item: LibraryItem, rxClass: RegExp): boolean {
            if (item.linkageClassName) {
                const cls = item.linkageClassName.split('.').pop()!;
                return rxClass.test(cls);
            }
            return false;
        }

        export function type(item: LibraryItem, type: ITEM_filter_type): boolean {
            const itemType = item.itemType.replace(/ /g, '');

            if (type === 'symbol') {
                return /movieclip|graphic|button/.test(itemType);
            }

            if (
                itemType === 'video' &&
                /video|linkedvideo|embeddedvideo/.test(type)
            ) {
                return type === 'video' ? true :
                    // "embedded video" | "video"
                    (item as VideoItem).videoType.replace(/ /g, '') === type;
            }

            return itemType === type;
        }

    }

    // =========================
    // FIND（⚠️ 重点：去 this）
    // =========================
    export namespace find {

        export function parent(items: LibraryItem[]): LibraryItem[] {
            const paths: string[] = [];

            for (const item of items) {
                if (item.name.includes('/')) {
                    const parent = item.name.replace(/\/[^/]+$/, '');
                    paths.push(parent);
                }
            }

            // const unique = Utils.toUniqueArray(paths);
            const unique =Array.from(new Set(paths));

            const result: LibraryItem[] = [];

            for (const path of unique) {
                // const index = this.findItemIndex(path);
                const index = UI.$library.findItemIndex(path);
                if (index !== -1) {
                    result.push(UI.$library.items[index]);
                }
            }

            return result;
        }

        export function children(parents: LibraryItem[]): LibraryItem[] {
            const result: LibraryItem[] = [];

            for (const parent of parents) {
                if (parent.itemType !== 'folder') continue;

                for (const item of UI.$library.items) {
                    if (item !== parent && item.name.startsWith(parent.name)) {
                        const path = item.name.slice(parent.name.length + 1);
                        if (!path.includes('/')) {
                            result.push(item);
                        }
                    }
                }
            }

            return result;
        }

        export function descendants(parents: LibraryItem[]): LibraryItem[] {
            const result: LibraryItem[] = [];

            for (const parent of parents) {
                if (parent.itemType !== 'folder') continue;

                for (const item of UI.$library.items) {
                    if (item !== parent && item.name.startsWith(parent.name)) {
                        result.push(item);
                    }
                }
            }

            return result;
        }

        export function selected(items: LibraryItem[] ): LibraryItem[] {
            const selected = UI.$library.getSelectedItems() || [];
            // return Utils.diff(items, selected, 0);

            // 交集
            return _.intersection(items, selected);
        }

    }

    // =========================
    // PSEUDO
    // =========================
    export namespace pseudo {

        export function exported(item: LibraryItem): boolean {
            return item.linkageExportForAS === true;
        }

        export function timeline(item: LibraryItem): boolean {
            return /^(movie clip|graphic|button)/.test(item.itemType);
        }

        export function empty(item: LibraryItem): boolean {
            if (item.itemType === 'folder') {
                const children = ITEM.find.children([item]);
                return children.length === 0;
            }

            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.empty((item as SymbolItem).timeline);
            }

            return false;
        }

        export function animated(item: LibraryItem): boolean {
            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.animated((item as SymbolItem).timeline);
            }
            return false;
        }

        export function keyframed(item: LibraryItem): boolean {
            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.keyframed((item as SymbolItem).timeline);
            }
            return false;
        }

        export function scripted(item: LibraryItem): boolean {
            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.scripted((item as SymbolItem).timeline);
            }
            return false;
        }

        export function audible(item: LibraryItem): boolean {
            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.audible((item as SymbolItem).timeline);
            }
            return false;
        }

    }

    // =========================
    // CUSTOM
    // =========================
    export namespace custom {
        // extension point
        export function Empty(){

        }
    }

}

