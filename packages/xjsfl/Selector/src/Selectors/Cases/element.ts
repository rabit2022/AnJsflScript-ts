/**
 * @file: element.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

// ------------------------------------------------------------------------------------------------------------------------
//
//  ██████ ██                             ██        ██████              ██
//  ██     ██                             ██          ██                ██
//  ██     ██ █████ ████████ █████ █████ █████        ██   █████ █████ █████ █████
//  █████  ██ ██ ██ ██ ██ ██ ██ ██ ██ ██  ██          ██   ██ ██ ██     ██   ██
//  ██     ██ █████ ██ ██ ██ █████ ██ ██  ██          ██   █████ █████  ██   █████
//  ██     ██ ██    ██ ██ ██ ██    ██ ██  ██          ██   ██       ██  ██      ██
//  ██████ ██ █████ ██ ██ ██ █████ ██ ██  ████        ██   █████ █████  ████ █████
//
// ------------------------------------------------------------------------------------------------------------------------
// # Element Tests

import { Selectors } from "../Selectors";
import { ITEM } from "./item";
import {
    ELEMENT_filter_type,
    ELEMENT_InstanceType,
    ELEMENT_ShapeType,
    ELEMENT_SymbolType,
    ELEMENT_TextType
} from "./element.types";
import { UI } from "../../base/UI";
import { TIMELINE } from "./timeline";

export namespace ELEMENT {
    // =========================
    // REGISTER
    // =========================
    export function register(pattern: string, callback: Function) {
        return Selectors.register(pattern, callback, "element");
    }

    // =========================
    // FILTER
    // =========================
    export namespace filter {
        export function name(item: FlashElement, rx: RegExp, range?: any): boolean {
            return ITEM.filter.path(item, rx, range);
        }

        export function path(item: SymbolInstance, rx: RegExp, range?: any): boolean {
            if (item.libraryItem) {
                return ITEM.filter.path(item.libraryItem, rx, range);
            }
            return false;
        }

        export function type(item: FlashElement, type: ELEMENT_filter_type): boolean {
            // ElementType:"shape" | "text" | "tlfText" | "instance" | "shapeObj";
            switch (item.elementType) {
                // TODO Add video
                case "instance":
                    if ((item as SymbolInstance).symbolType) {
                        if (type === "symbol") return true;

                        return (
                            type === "instance" ||
                            // SymbolType： "movie clip" | "button" | "graphic"
                            (item as SymbolInstance).symbolType.replace(/ /g, "") === type
                        );
                    }

                    return (
                        type === "instance" ||
                        // FlashInstanceType: 'symbol' | 'bitmap' | 'embedded video' | 'linked video' | 'video' |'compiled clip'
                        // 'embeddedvideo'|'linkedvideo'|'compiledclip'
                        // (item as Instance).instanceType.replace(/ /g, '') === type
                        (item as Instance).instanceType.replace(/ /g, "") === type
                    );

                case "text":
                    if (type === "text") return true;

                    // TextType:"static" | "dynamic" | "input"
                    return (item as Text).textType.replace(/ /g, "") === type;

                case "shape":
                    if (
                        (item as Shape).isRectangleObject ||
                        (item as Shape).isOvalObject
                    ) {
                        return type === "primitive";
                    }

                    if ((item as Shape).isGroup) {
                        return type === "group";
                    }

                    return type === "shape";
            }

            return false;
        }

        export function Package(item: SymbolInstance, rx: RegExp): boolean {
            return item.libraryItem && ITEM.filter.Package(item.libraryItem, rx);
        }

        export function Class(item: SymbolInstance, rx: RegExp): boolean {
            return item.libraryItem && ITEM.filter.Class(item.libraryItem, rx);
        }
    }

    // =========================
    // FIND
    // =========================
    export namespace find {
        export function selected(items: FlashElement[]) {
            const selection = UI.$dom.selection;
            return items.filter((el) => selection.indexOf(el) !== -1);
        }
    }

    // =========================
    // PSEUDO
    // =========================
    export namespace pseudo {
        export function empty(element: SymbolInstance): boolean {
            if (element.symbolType) {
                return TIMELINE.pseudo.empty(element.libraryItem.timeline);
            }
            return false;
        }

        export function animated(element: SymbolInstance): boolean {
            if (element.symbolType) {
                return TIMELINE.pseudo.animated(element.libraryItem.timeline);
            }
            return false;
        }

        export function keyframed(element: SymbolInstance): boolean {
            if (element.symbolType) {
                return TIMELINE.pseudo.keyframed(element.libraryItem.timeline);
            }
            return false;
        }

        export function scripted(element: SymbolInstance): boolean {
            if (element.symbolType) {
                return TIMELINE.pseudo.scripted(element.libraryItem.timeline);
            }
            return false;
        }

        export function scriptable(element: FlashElement): boolean {
            // SymbolType："movie clip" | "button" |      // "graphic"
            // FlashInstanceType:'symbol' |'embedded video' | 'linked video' | 'video' | 'compiled clip'     // 'bitmap'
            // not:"graphic",'bitmap'
            const NotGraphicAndNotBitmap = !(
                (element as SymbolInstance).symbolType === "graphic" ||
                (element as Instance).instanceType === "bitmap"
            );
            const InstanceFiltered =
                element.elementType === "instance" && NotGraphicAndNotBitmap;

            // TextType= "dynamic" | "input";     // "static"
            const TextFiltered =
                element.elementType === "text" &&
                /(dynamic|input)/.test((element as Text).textType);

            // ElementType= "shape" | "text" | "tlfText" | "instance" | "shapeObj";
            const IstlfText = element.elementType === "tlfText";
            return InstanceFiltered || TextFiltered || IstlfText;
        }

        export function audible(element: SymbolInstance): boolean {
            if (element.symbolType) {
                return TIMELINE.pseudo.audible(element.libraryItem.timeline);
            }
            return false;
        }

        export function exported(element: SymbolInstance): boolean {
            if (element.libraryItem) {
                return ITEM.pseudo.exported(element.libraryItem);
            }
            return false;
        }

        export function filtered(element: SymbolInstance): boolean {
            return !!(element.filters && element.filters.length > 0);
        }

        export function tinted(element: SymbolInstance): boolean {
            return element.colorMode === "tint";
        }

        export function transparent(element: SymbolInstance): boolean {
            return element.colorMode === "alpha";
        }

        export function component(element: Instance): boolean {
            return element.instanceType === "compiled clip";
        }
    }

    // =========================
    // CUSTOM
    // =========================
    export namespace custom {
        // 以后扩展
        export function Empty() {}
    }
}
