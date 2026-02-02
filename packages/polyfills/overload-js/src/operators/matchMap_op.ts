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
