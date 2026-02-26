/**
 * @file: types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { Custom } from "../matcher/Custom";

// 内建静态规则（带类型守卫）
interface BuiltInStaticRules {
    number: Custom<(val: any) => val is number>;
    string: Custom<(val: any) => val is string>;
    boolean: Custom<(val: any) => val is boolean>;
    bigint: Custom<(val: any) => val is bigint>;
    symbol: Custom<(val: any) => val is symbol>;
    undefined: Custom<(val: any) => val is undefined>;
    null: Custom<(val: any) => val is null>;
    int: Custom<(val: any) => val is number>;
    finite: Custom<(val: any) => val is number>;
    nan: Custom<(val: any) => val is number>;
    array: Custom<(val: any) => val is unknown[]>;
    object: Custom<(val: any) => val is Record<string, unknown>>;
    func: Custom<(val: any) => val is Function>;
    date: Custom<(val: any) => val is Date>;
    regexp: Custom<(val: any) => val is RegExp>;
    promise: Custom<(val: any) => val is Promise<unknown>>;
    defined: Custom<<T>(val: T) => val is Exclude<T, null | undefined>>;
}

interface OperatorMethods {
    wild: Custom<() => true>;
    truthy: Custom<(val: any) => boolean>;
    falsy: Custom<(val: any) => boolean>;

    any: (...rules: any[]) => Custom<(val: any) => boolean>;
    except: (...rules: any[]) => Custom<(val: any) => boolean>;
    map: (map: Record<string, any>) => Custom<(val: any) => boolean>;
    instanceOf: <T extends new (...args: any) => any>(
        Ctor: T
    ) => Custom<(val: any) => val is InstanceType<T>>;
}

// 最终的命名空间接口
export interface TypeNamespace extends BuiltInStaticRules, OperatorMethods {
    // 允许动态添加：字符串 key → Custom 或 工厂函数
    [key: string]: Custom<any> | ((...args: any[]) => Custom<any>);
}
