/**
 * @file: matchMap_op.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

export function matchMap_op(
  config: Record<string, any>,
  target: any
): boolean {
  if (typeof target !== 'object' || target == null) return false

  for (const k in config) {
    if (!(k in target)) return false
    const rule = config[k]
    const val = target[k]

    if (rule instanceof Object && typeof rule.check === 'function') {
      if (!rule.check(val)) return false
    } else if (val?.constructor !== rule) {
      return false
    }
  }
  return true
}
