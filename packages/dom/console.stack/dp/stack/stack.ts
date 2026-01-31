// import * as fs from 'fs';
// import * as ErrorStackParser from 'error-stack-parser';
// import {tableToString} from 'console.table';
// import {ConsoleStackFrame, Options, SaveData} from "./types"; // 👈 你明确要求使用的工具
//
// import {
//     CURRENT_ERROR_TXT,
//     ALL_ERRORS_TXT,
//     CURRENT_ERRORS_JSON,
//     ALL_ERRORS_JSON
// } from './FILE';
//
// function formatHumanReadable(record: SaveData,humanText:string): string {
//     const header = [
//         `Message   : ${record.message}`,
//         `Time      : ${record.timestamp}`,
//         `Count     : ${record.count}`,
//         '----------------------------------------'
//     ].join('\n');
//
//     return `${header}\n${humanText}\n\n`;
// }
//
//
//
// // ====== 你辛苦写好的 buildCleanedFrames（完全保留！） ======
// function buildCleanedFrames(
//     frames: ErrorStackParser.StackFrame[],
//     message: string,
//     options: Options
// ): ConsoleStackFrame[] {
//     // 过滤
//     if (options.skipSelf) {
//         frames = frames.filter(f => !f.functionName?.includes('console.stack'));
//     }
//     if (options.skipRequireJs) {
//         frames = frames.filter(f => !f.fileName?.includes('requirejs'));
//     }
//     if (options.depth) {
//         frames = frames.slice(0, options.depth);
//     }
//     return frames.map(frame => {
//         const {functionName, fileName, lineNumber, source, args} = frame;
//         return {
//             functionName: functionName,
//             fileName: fileName,
//             lineNumber: lineNumber,
//             timestamp: new Date().toISOString(),
//             message: message,
//             source: (options.includeSource && source) ? source : undefined,
//             args: (options.includeArgs && args) ? args : undefined
//         };
//     });
// }
//
// // ====== 格式化函数（使用你的 cleanedFrames + tableToString） ======
// export function formatOutput(frames: ConsoleStackFrame[], format: 'table' | 'list' | 'json'): string {
//     switch (format) {
//         case 'table':
//             // 使用 console.table 的字符串化版本（你指定的）
//             return tableToString(frames);
//         case 'list':
//             return frames.map((f, i) =>
//                 `${i + 1}. ${f.functionName || '<anonymous>'} (${f.fileName}:${f.lineNumber})`
//             ).join('\n');
//         case 'json':
//             return JSON.stringify(frames, null, 2);
//         default:
//             return tableToString(frames);
//     }
// }
//
//
// function writeToFile(record:SaveData,humanText:string) {
//
//     /* ========= JSON（程序用） ========= */
//
//     // 当前错误（覆盖）
//     fs.writeFileSync(
//         CURRENT_ERRORS_JSON,
//         JSON.stringify(record, null, 2)
//     );
//
//     // 所有错误（追加 / 去重）
//     let allRecords: SaveData[] = [];
//
//     if (fs.existsSync(ALL_ERRORS_JSON)) {
//         try {
//             allRecords = JSON.parse(fs.readFileSync(ALL_ERRORS_JSON, 'utf8'));
//         } catch {
//             allRecords = [];
//         }
//     }
//
//     const existing = allRecords.find(r =>
//         r.message === record.message &&
//         JSON.stringify(r.frames) === JSON.stringify(record.frames)
//     );
//
//     if (existing) {
//         existing.count++;
//         existing.timestamp = record.timestamp;
//     } else {
//         allRecords.push(record);
//         if (allRecords.length > 1000) {
//             allRecords = allRecords.slice(-1000);
//         }
//     }
//
//     fs.writeFileSync(
//         ALL_ERRORS_JSON,
//         JSON.stringify(allRecords, null, 2)
//     );
//
//     /* ========= TXT（人类用） ========= */
//
//     const formatHumanText = formatHumanReadable(humanText);
//
//     // 当前错误（覆盖）
//     fs.writeFileSync(CURRENT_ERROR_TXT, formatHumanText);
//
//     // 所有错误（追加）
//     fs.appendFileSync(ALL_ERRORS_TXT, formatHumanText);
// }
// function isSaveData(input: any): input is SaveData {
//   return (
//     input &&
//     typeof input === 'object' &&
//     typeof input.message === 'string' &&
//     Array.isArray(input.frames) &&
//     typeof input.timestamp === 'string'
//   );
// }
//
//
// function normalizeInput(
//   input: unknown,
//   options: Required<Options>
// ): {
//   record: SaveData;
//   outputStr: string;
//   mode: StackMode;
// } {
//
//   // ===== history 回放 =====
//   if (isSaveData(input)) {
//     return {
//       record: input,
//       outputStr: formatOutput(input.frames, options.format),
//       mode: 'replay'
//     };
//   }
//
//   // ===== 现场调用 =====
//   const message =
//     input instanceof Error
//       ? input.message
//       : String(input ?? 'Stack trace');
//
//   const error = new Error(message);
//   const rawFrames = ErrorStackParser.parse(error);
//   const cleanedFrames = buildCleanedFrames(rawFrames, message, options);
//
//   return {
//     mode: 'live',
//     outputStr: formatOutput(cleanedFrames, options.format),
//     record: {
//       id: Date.now(),
//       timestamp: new Date().toISOString(),
//       message,
//       frames: cleanedFrames,
//       count: 1
//     }
//   };
// }
// (console as any).stack = function stack(
//   input: unknown = 'Stack trace',
//   userOptions: Options = {}
// ) {
//   const defaults: Required<Options> = {
//     includeSource: false,
//     includeArgs: false,
//     depth: 5,
//     skipSelf: true,
//     format: 'table',
//     skipRequireJs: true,
//     logToFile: true
//   };
//
//   const options = { ...defaults, ...userOptions };
//
//   try {
//     const { record, outputStr, mode } = normalizeInput(input, options);
//
//     // ===== console =====
//     console.log(
//       mode === 'replay'
//         ? 'Stack Trace (replay):'
//         : 'Stack Trace:'
//     );
//     console.log(`Stack Trace (${options.format}):`);
//     console.log(outputStr);
//
//     // ===== file =====
//     if (options.logToFile && mode === 'live') {
//       writeToFile(record, outputStr);
//     }
//
//   } catch (err) {
//     console.warn('Failed to capture stack:', err);
//   }
// };
//
//
//
//
