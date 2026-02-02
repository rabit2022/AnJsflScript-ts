
// src/matcher/Custom.ts
export class Custom<T = any> {
  constructor(
    public check: (v: any) => boolean,
    public name?: string
  ) {}

  toString() {
    return this.name
      ? `[Type ${this.name}]`
      : '[CustomType]'
  }
}