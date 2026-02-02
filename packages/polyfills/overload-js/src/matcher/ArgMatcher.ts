// src/matcher/ArgMatcher.ts
import { Custom } from './Custom'
import { SCORE } from '../model/Score'
import { isNaNValue, isInfinity, getCtor } from './Type'

export function matchArg(rule: any, value: any): number {
  // wild
  if (rule === undefined) {
    return SCORE.WILD
  }

  // Custom
  if (rule instanceof Custom) {
    return rule.check(value) ? SCORE.CUSTOM : SCORE.FAIL
  }

  // NaN / Infinity
  if (rule === Number && isNaNValue(value)) {
    return SCORE.EXACT_TYPE
  }
  if (rule === Number && isInfinity(value)) {
    return SCORE.EXACT_TYPE
  }

  // constructor match
  const ctor = getCtor(value)
  if (ctor === rule) {
    return SCORE.EXACT_TYPE
  }

  return SCORE.FAIL
}