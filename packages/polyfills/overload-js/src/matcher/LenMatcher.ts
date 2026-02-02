// src/matcher/LenMatcher.ts
import { SCORE } from '../model/Score'

export function matchLen(expected: number, args: any[]) {
  return args.length === expected
    ? SCORE.LEN_BASE
    : SCORE.FAIL
}