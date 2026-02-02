export function matchAny(rules: any[], val: any): boolean {
  // 遍历所有匹配规则（rules 是一组“候选 matcher”）
  for (const r of rules) {

    // 情况 1：r 是一个对象，并且带有 check 方法
    // 👉 对应 JSFL 里的 Custom / o.any / o.truthy 等
    if (r instanceof Object && typeof r.check === 'function') {

      // 使用自定义的 check 逻辑判断当前值
      // 只要有一个规则返回 true，整体就命中
      if (r.check(val)) return true

    // 情况 2：r 是一个构造函数（如 String / Number）
    // 并且 val 不为 null / undefined
    } else if (val != null && val.constructor === r) {

      // 使用构造函数严格匹配：
      // val.constructor === String / Number / Boolean 等
      return true
    }
  }

  // 所有规则都未命中
  // 👉 matchAny 的语义是“是否有任意一个规则匹配”
  // 👉 全部失败时返回 false
  return false
}
