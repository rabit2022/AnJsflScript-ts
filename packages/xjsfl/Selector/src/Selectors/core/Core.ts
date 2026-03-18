/**
 * @file: Core.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

// ------------------------------------------------------------------------------------------------------------------------
//
//  ██████                       ██████              ██
//  ██                             ██                ██
//  ██     █████ ████ █████        ██   █████ █████ █████ █████
//  ██     ██ ██ ██   ██ ██        ██   ██ ██ ██     ██   ██
//  ██     ██ ██ ██   █████        ██   █████ █████  ██   █████
//  ██     ██ ██ ██   ██           ██   ██       ██  ██      ██
//  ██████ █████ ██   █████        ██   █████ █████  ████ █████
//
// ------------------------------------------------------------------------------------------------------------------------
// # Core Tests

import { Range } from "./Core.types";
import { attribute as _attribute } from "./core/attribures";
import { nth as _nth } from "./core/nth";
import { Selectors } from "../Selectors";
import { ScopeOutName } from "../Selectors.types";

export namespace Core {
    export namespace filter {
        export const attribute = _attribute;
    }

    // =========================
    // MATH
    // =========================
    export namespace math {
        export function range(str: string, range: Range): boolean {
            const value = parseFloat(str);
            return value >= range.min && value <= range.max;
        }
    }

    // =========================
    // FIND
    // =========================
    export namespace find {
        export function first<T>(items: T[]): T[] {
            return items.length ? [items.shift() as T] : [];
        }

        export function last<T>(items: T[]): T[] {
            return items.length ? [items.pop() as T] : [];
        }

        export function even<T>(items: T[]): T[] {
            return Core.combo.nth(items, "even");
        }

        export function odd<T>(items: T[]): T[] {
            return Core.combo.nth(items, "odd");
        }

        export function random<T>(items: T[], amount = 0.5): T[] {
            return items.filter(() => Math.random() < amount);
        }
    }

    export namespace pseudo {
        export function Empty() {}
    }

    // =========================
    // COMBO
    // =========================
    export namespace combo {
        export function not<T>(items: T[], expression: string, type: ScopeOutName): T[] {
            const selectors = Selectors.parse(expression, type);

            selectors.forEach((s) => {
                s.keep = false;
            });

            return Selectors.test(selectors, items);
        }

        export function contains(): never {
            throw new ReferenceError(":contains() not implemented");
        }

        export function has(): never {
            throw new ReferenceError(":has() not implemented");
        }

        export function random<T>(items: T[], expression: string): T[] {
            const amount = parseFloat(expression);
            return Core.find.random(items, amount);
        }

        export const nth = _nth;
    }
}
