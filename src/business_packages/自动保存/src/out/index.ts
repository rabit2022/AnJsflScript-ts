/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { AutoSave } from "../Main";
import { setInterval, setTimeout } from "@dom/setTimeout";
import { SAVE_INTERVAL } from "../CONSTANTS/time";
import { AUTHOR } from "../DESC/Descriptions";

AUTHOR;

if (AUTHOR === AUTHOR) {
  // 马上保存一次
  setTimeout(AutoSave, 0);

  // 每3分钟保存一次
  setInterval(AutoSave, SAVE_INTERVAL);
}
