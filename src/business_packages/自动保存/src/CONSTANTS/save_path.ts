/**
 * @file: save_path.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as  fs from "fs";
import * as path from "path";
import { DateTime } from "luxon";
import {TIME_FORMAT} from "../CONSTANTS/time";
import {AUTHOR} from "../DESC/Descriptions";
import {ORIGINAL_DOC_URI} from "./constants";
import {SAVE_FOLDER} from "./savefolder";


AUTHOR;

function getBaseNameWithoutExt(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

export function getSavePath(
  originalFilePath: string,
  saveFolder: string
): string {
  const baseName = getBaseNameWithoutExt(originalFilePath);
  const now = DateTime.now().toFormat(TIME_FORMAT);
  const fileName = `${now}_${baseName}.fla`;

  return path.join(saveFolder, fileName);
}


//  D:/AnJsflScript/${now}_${baseName}.fla
export const SAVE_PATH = getSavePath(ORIGINAL_DOC_URI, SAVE_FOLDER);
