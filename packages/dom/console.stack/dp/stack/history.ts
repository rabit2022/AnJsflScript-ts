// import fs from 'fs';
// import {
//   CURRENT_ERROR_TXT,
//   ALL_ERRORS_TXT,
//   CURRENT_ERRORS_JSON,
//   ALL_ERRORS_JSON
// } from './FILE';
// import type { SaveData } from './types';
//
// /* =========================
//  * low-level utils
//  * ========================= */
//
// function readJSON<T>(file: string): T | null {
//   if (!fs.existsSync(file)) return null;
//   try {
//     return JSON.parse(fs.readFileSync(file, 'utf8'));
//   } catch {
//     return null;
//   }
// }
//
// function readText(file: string): string | null {
//   if (!fs.existsSync(file)) return null;
//   try {
//     return fs.readFileSync(file, 'utf8');
//   } catch {
//     return null;
//   }
// }
//
// /* =========================
//  * clear
//  * ========================= */
//
// console.clearErrors = function clearErrors() {
//   [
//     CURRENT_ERROR_TXT,
//     ALL_ERRORS_TXT,
//     CURRENT_ERRORS_JSON,
//     ALL_ERRORS_JSON
//   ].forEach(file => {
//     if (fs.existsSync(file)) {
//       fs.unlinkSync(file);
//     }
//   });
// };
//
// /* =========================
//  * history (STRUCTURED DATA ONLY)
//  * ========================= */
//
// console.history = {};
//
// /**
//  * Read structured error records (SaveData / SaveData[])
//  * ⚠️ machine-oriented, NOT for human reading
//  */
// console.history.getErrors = function getHistoryErrors(
//   scope: 'current' | 'all' = 'all'
// ): SaveData | SaveData[] | null {
//   const file =
//     scope === 'current'
//       ? CURRENT_ERRORS_JSON
//       : ALL_ERRORS_JSON;
//
//   return readJSON(file);
// };
//
// /**
//  * Replay history errors through console.stack
//  */
// console.history.printErrors = function replayHistory(
//   scope: 'current' | 'all' = 'all'
// ) {
//   const data = console.history.getErrors(scope);
//   if (!data) return;
//
//   const list = Array.isArray(data) ? data : [data];
//   list.forEach(record => console.stack(record));
// };
//
// /* =========================
//  * public API (HUMAN FRIENDLY)
//  * ========================= */
//
// /**
//  * Human-friendly error query
//  * default keeps backward compatibility
//  */
// console.getErrors = function getErrors(options?: {
//   scope?: 'current' | 'all';
//   format?: 'json' | 'human';
// }) {
//   const scope = options?.scope ?? 'all';
//   const format = options?.format ?? 'json';
//
//   if (format === 'json') {
//     return scope === 'current'
//       ? readJSON(CURRENT_ERRORS_JSON)
//       : readJSON(ALL_ERRORS_JSON);
//   }
//
//   // human-readable text
//   return scope === 'current'
//     ? readText(CURRENT_ERROR_TXT)
//     : readText(ALL_ERRORS_TXT);
// };
