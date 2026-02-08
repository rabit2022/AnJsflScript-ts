/**
 * @file: Custom.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */


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