/**
 * @file: MapMatcher.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// src/matcher/MapMatcher.ts
import { SCORE } from '../model/Score'
import { matchArg } from './ArgMatcher'

export function matchMap(rule: Record<string, any>, arg: any) {
  if (typeof arg !== 'object' || arg == null) return SCORE.FAIL

  let score = SCORE.MAP_BASE

  for (const k in rule) {
    if (!(k in arg)) return SCORE.FAIL
    const s = matchArg(rule[k], arg[k])
    if (s < 0) return SCORE.FAIL
    score += s
  }

  return score
}