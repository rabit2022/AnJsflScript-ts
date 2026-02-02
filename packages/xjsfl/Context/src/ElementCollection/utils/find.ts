// type FindValue = string | RegExp | unknown;
//
// const Utils = {
//     rxEscape(value: string): string {
//         return String(value).replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
//     },
//
//     /**
//      * Converts a wildcard (*) string into a non-greedy RegExp
//      */
//     makeWildcard(value: string, exactMatch: boolean = false): RegExp {
//         let str = Utils.rxEscape(value).replace(/\\\*/g, '.*?');
//         if (exactMatch) {
//             str = `^${str}$`;
//         }
//         return new RegExp(str);
//     }
// };
// function findInCollection<
//     T extends Record<string, any>,
//     K extends keyof T = 'name'
// >(
//     elements: T[],
//     value: FindValue,
//     property: K = 'name' as K
// ): T[] {
//     let matcher: RegExp | null = null;
//
//     // wildcard string → RegExp
//     if (typeof value === 'string' && value.includes('*')) {
//         matcher = Utils.makeWildcard(value, true);
//     } else if (value instanceof RegExp) {
//         matcher = value;
//     }
//
//     return elements.filter(el => {
//         const propValue = el[property];
//
//         if (matcher) {
//             return matcher.test(String(propValue));
//         }
//
//         return propValue === value;
//     });
// }



import micromatch from 'micromatch';

type FindValue<T, K extends keyof T> =
    | T[K]        // 精确值
    | RegExp      // 正则
    | string;     // micromatch 模式

// ============== 函数重载 ==============

// 1. 不传 property → 默认 name
export function find<T extends { name: any }>(
    elements: T[],
    value?: FindValue<T, 'name'>
): T[];

// 2. 传 property
export function find<
    T extends Record<string, any>,
    K extends keyof T
>(
    elements: T[],
    value: FindValue<T, K>,
    property: K
): T[];

// ============== 实现 ==============
export function find<
    T extends Record<string, any>,
    K extends keyof T
>(
    elements: T[],
    value: any,
    property: K = 'name' as K
): T[] {

    return elements.filter(el => {
        const propValue = el[property];

        // 1. RegExp
        if (value instanceof RegExp) {
            return value.test(String(propValue));
        }

        // 2. string → micromatch
        if (typeof value === 'string') {
            return micromatch.isMatch(String(propValue), value);
        }

        // 3. 精确相等
        return Object.is(propValue, value);
    });
}


// interface Item {
//     name: string;
//     id: number;
// }
//
// const items: Item[] = [
//     { name: 'apple', id: 1 },
//     { name: 'apricot', id: 2 },
//     { name: 'banana', id: 3 }
// ];
//
// const f1 = find(items, 'ap*');      // apple, apricot
// const f2 = find(items, /^a/);       // apple, apricot
// const f3 = find(items, 3, 'id');    // banana
//
// console.log(f1, f2, f3);
