export type TypeCheck = (v: any) => boolean
export interface RegistryAPI {
    define(name: string, check: TypeCheck): any
    defineType(name: string, check: TypeCheck): any
    defineTypes(map: Record<string, TypeCheck>): void
}