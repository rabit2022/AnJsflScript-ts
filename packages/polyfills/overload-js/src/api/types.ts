/**
 * @file: types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {RegistryAPI} from "../registry/types";
import {TypeNamespace} from "../operators/types";

export interface OverloadCaller {
    // 🔹 调用签名：让它可以像函数一样被调用
    (...args: any[]): any;


    args(...rules: any[]): OverloadCaller

    len(n: number): OverloadCaller

    map(rule: any): OverloadCaller

    use(fn: Function): OverloadCaller
    fallback(fn: Function): OverloadCaller
    error(fn: Function): OverloadCaller

    expose(): (...args: any[]) => any
}

export interface OverloadFunction extends OverloadCaller, RegistryAPI {

    // callable：overload()
    (): OverloadCaller

    // 类型入口
    o: TypeNamespace
}
