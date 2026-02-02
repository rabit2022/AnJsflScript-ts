// src/model/Mapping.ts
export type MappingType = 'args' | 'len' | 'map'

export interface Mapping {
  type: MappingType
  priority: number

  match(args: any[]): number
  invoke(ctx: any, args: any[]): any
}