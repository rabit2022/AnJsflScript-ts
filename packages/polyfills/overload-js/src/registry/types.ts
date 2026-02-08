/**
 * @file: types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

export type TypeCheck = (v: any) => boolean
export interface RegistryAPI {
    define(name: string, check: TypeCheck): any
    defineType(name: string, check: TypeCheck): any
    defineTypes(map: Record<string, TypeCheck>): void
}