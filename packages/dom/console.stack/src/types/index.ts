// src/types/index.ts

export interface Options {
  includeSource?: boolean;
  includeArgs?: boolean;
  depth?: number;
  skipSelf?: boolean;
  skipRequireJs?: boolean;
  format?: 'table' | 'list' | 'json';
  logToFile?: boolean;
}

export interface ConsoleStackFrame {
  functionName: string;
  fileName: string;
  lineNumber: number;
  timestamp: string;
  message: string;
  source?: string;
  args?: unknown[];
}

export interface SaveData {
  id: number;
  timestamp: string;
  message: string;
  frames: ConsoleStackFrame[];
  count: number;
}

export type StackMode = 'live' | 'replay';