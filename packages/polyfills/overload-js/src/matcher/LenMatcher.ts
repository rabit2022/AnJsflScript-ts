/**
 * @file: LenMatcher.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// src/matcher/LenMatcher.ts
import { SCORE } from '../model/Score'

export function matchLen(expected: number, args: any[]) {
  return args.length === expected
    ? SCORE.LEN_BASE
    : SCORE.FAIL
}