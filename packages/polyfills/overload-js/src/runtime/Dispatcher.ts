/**
 * @file: Dispatcher.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// src/runtime/Dispatcher.ts
import { Mapping } from '../model/Mapping'

export class Dispatcher {
  constructor(
    private self: { mappings: Mapping[]; errorFn?: Function },
    private parent?: Dispatcher
  ) {}

  dispatch(ctx: any, args: any[]): any {
    const all = this.collect()

    let bestScore = -1
    let best: Mapping | null = null

    for (const m of all) {
      const s = m.match(args)
      if (s > bestScore) {
        bestScore = s
        best = m
      }
    }

    if (best) {
      return best.invoke(ctx, args)
    }

    if (this.self.errorFn) {
      return this.self.errorFn.apply(ctx, args)
    }

    if (this.parent) {
      return this.parent.dispatch(ctx, args)
    }

    throw new Error('No overload matched')
  }

  private collect(): Mapping[] {
    const own = this.self.mappings
    const parent = this.parent ? this.parent.collect() : []
    // 子级优先（override）
    return [...own, ...parent]
  }
}
