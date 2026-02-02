import {Custom} from "../matcher/Custom";
import {normalizeRules} from "./normalize";
import {matchAny} from "./matchAny";
import {matchMap_op} from "./matchMap_op";
import {TypeNamespace} from "./types";


export const operator = {
    wild: new Custom(() => true),

    truthy: new Custom((val: any) => !!val === true),

    falsy: new Custom((val: any) => !!val === false),

    any: (...args: any[]) => {
        const rules = normalizeRules(args)
        return new Custom((val: any) => matchAny(rules, val))
    },

    except: (...args: any[]) => {
        const rules = normalizeRules(args)
        return new Custom((val: any) => !matchAny(rules, val))
    },

    map: (map: Record<string, any>) => {
        const config = normalizeRules(map)
        return new Custom((val: any) => matchMap_op(config, val))
    },
    instanceOf: <T extends new (...args: any) => any>(Ctor: T) =>
        new Custom((val: any): val is InstanceType<T> => val instanceof Ctor),

}

const common = {
    number: new Custom(
        (val: any): val is number =>
            typeof val === 'number' && !Number.isNaN(val)
    ),

    string: new Custom(
        (val: any): val is string =>
            typeof val === 'string'
    ),

    boolean: new Custom(
        (val: any): val is boolean =>
            typeof val === 'boolean'
    ),

    bigint: new Custom(
        (val: any): val is bigint =>
            typeof val === 'bigint'
    ),

    symbol: new Custom(
        (val: any): val is symbol =>
            typeof val === 'symbol'
    ),

    undefined: new Custom(
        (val: any): val is undefined =>
            val === undefined
    ),

    null: new Custom(
        (val: any): val is null =>
            val === null
    ),

    int: new Custom(
        (val: any): val is number =>
            typeof val === 'number' && Number.isInteger(val)
    ),

    finite: new Custom(
        (val: any): val is number =>
            typeof val === 'number' && Number.isFinite(val)
    ),

    nan: new Custom(
        (val: any): val is number =>
            Number.isNaN(val)
    ),
    array: new Custom(
        (val: any): val is any[] =>
            Array.isArray(val)
    ),

    object: new Custom(
        (val: any): val is Record<string, any> =>
            val !== null && typeof val === 'object' && !Array.isArray(val)
    ),

    func: new Custom(
        (val: any): val is Function =>
            typeof val === 'function'
    ),
    date: new Custom(
        (val: any): val is Date =>
            val instanceof Date && !Number.isNaN(val.getTime())
    ),

    regexp: new Custom(
        (val: any): val is RegExp =>
            val instanceof RegExp
    ),

    promise: new Custom(
        (val: any): val is Promise<any> =>
            val instanceof Promise
    ),
    defined: new Custom(
        <T>(val: T): val is Exclude<T, null | undefined> =>
            val !== null && val !== undefined
    ),

}


export const o = {
    ...operator,
    ...common,
} as TypeNamespace

