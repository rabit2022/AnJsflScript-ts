export function normalizeRules(input: any): any {
  if (Array.isArray(input)) return input.map(normalizeRules)
  if (typeof input === 'object' && input !== null) {
    const out: any = {}
    for (const k in input) {
      out[k] = normalizeRules(input[k])
    }
    return out
  }
  return input
}