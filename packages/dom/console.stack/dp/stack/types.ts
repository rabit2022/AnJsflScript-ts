//
// // ====== 类型定义（增强可读性，不影响你的逻辑） ======
// export interface Options {
//     includeSource?: boolean;
//     includeArgs?: boolean;
//     depth?: number;
//     skipSelf?: boolean;
//     format?: 'table' | 'list' | 'json';
//     skipRequireJs?: boolean;
//     logToFile?: boolean;
// }
//
// export interface ConsoleStackFrame {
//     functionName: string ;
//     fileName: string ;
//     lineNumber: number ;
//     timestamp: string;
//     message: string;
//     source?: string;
//     args?: unknown[];
// }
//
// export interface SaveData {
//     id: number,
//     timestamp: string,
//     message:string,
//     frames: ConsoleStackFrame[],
//     count: number
// };
//
// export type StackMode = 'live' | 'replay';
