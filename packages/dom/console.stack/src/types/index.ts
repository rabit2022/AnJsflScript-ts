/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// src/types/index.ts

import * as StackFrame from "stackframe";


export interface Options {
  includeSource?: boolean;
  includeArgs?: boolean;
  depth?: number;
  skipSelf?: boolean;
  skipRequireJs?: boolean;
  format?: 'table' | 'list' | 'json';
  logToFile?: boolean;
  fuck?: boolean;
}

// export interface ConsoleStackFrame {
//   functionName: string;
//   fileName: string;
//   lineNumber: number;
//   timestamp: string;
//   message: string;
//   source?: string;
//   args?: unknown[];
// }
export type ConsoleStackFrame = Partial<StackFrame>;

export interface SaveData {
  id: number;
  timestamp: string;
  message: string;
  frames: ConsoleStackFrame[];
  count: number;
}

export type StackMode = 'live' | 'replay';