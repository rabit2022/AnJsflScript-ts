/**
 * @file: Mapping.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// src/model/Mapping.ts
export type MappingType = 'args' | 'len' | 'map'

export interface Mapping {
  type: MappingType
  priority: number

  match(args: any[]): number
  invoke(ctx: any, args: any[]): any
}