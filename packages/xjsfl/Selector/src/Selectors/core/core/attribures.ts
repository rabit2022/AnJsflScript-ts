import {CustomCallbacks, Operand, Range} from "../Core.types";

import * as _ from "lodash";

export function attribute<T extends Record<string, any>>(
    item: T,
    name: string,
    operand: Operand,
    value?: string | number | RegExp,
    range?: Range,
    custom: CustomCallbacks<T> = {}
): boolean {
    const {prop, callbackUsed} = resolveProp(item, name, custom);

    // 无操作符
    if (!operand) {
        return callbackUsed ? Boolean(prop) : name in item;
    }

    // 数值比较
    if (typeof value === 'number') {
        // 范围判断
        if (range) {
            return inRange(prop, range);
        }
        return compareNumber(prop, operand, value);
    }

    const str = String(prop);

    // 正则 value
    if (value instanceof RegExp) {
        return compareRegex(str, operand, value);
    }

    // 模糊匹配 ^= $= *=
    if (isPatternMatchOperator(operand)) {
        return comparePattern(str, operand, String(value));
    }

    // 字符串比较
    return compareString(str, operand, String(value));
}


function resolveProp<T extends Record<string, any>>(
    item: T,
    name: string,
    custom: CustomCallbacks<T>
): { prop: any; callbackUsed: boolean } {
    // 深层属性
    if (name.includes('.')) {
        return {
            prop: _.get(item, name),
            callbackUsed: false,
        };
    }

    // 普通属性
    if (name in item) {
        return {
            prop: (item as any)[name],
            callbackUsed: false,
        };
    }

    // 自定义属性
    const callback = custom[name];
    if (!callback) {
        throw new ReferenceError(
            `Callback for custom attribute "${name}" not registered`
        );
    }

    return {
        prop: callback(item),
        callbackUsed: true,
    };
}

function compareNumber(
    prop: number,
    operand: Operand,
    value: number
): boolean {
    switch (operand) {
        case '=':
            return prop == value;
        case '!=':
            return prop != value;
        case '<':
            return prop < value;
        case '<=':
            return prop <= value;
        case '>':
            return prop > value;
        case '>=':
            return prop >= value;
        default:
            return false;
    }
}

function inRange(prop: number, range: Range): boolean {
    return prop >= range.min && prop <= range.max;
}

function compareRegex(
    prop: string,
    operand: Operand,
    regex: RegExp
): boolean {
    switch (operand) {
        case '=':
            return regex.test(prop);
        case '!=':
            return !regex.test(prop);
        default:
            return false;
    }
}

function isPatternMatchOperator(op: Operand) {
    return op === '^=' || op === '$=' || op === '*=';
}

function comparePattern(
    prop: string,
    operand: Operand,
    value: string
): boolean {
    let pattern = "";
    switch (operand) {
        case '^=':
            pattern = `^${value}`;
            break;
        case '$=':
            pattern = `${value}$`;
            break;
        case '*=':
            pattern = value;
            break;
        default:
            throw new ReferenceError("Unsupported operand");
    }

    return new RegExp(pattern).test(prop);
}

function compareString(
    prop: string,
    operand: Operand,
    value: string
): boolean {
    switch (operand) {
        case '=':
            return prop === value;
        case '!=':
            return prop !== value;
        default:
            return false;
    }
}
