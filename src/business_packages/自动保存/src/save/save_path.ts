import * as  fs from "fs";
import * as path from "path-browserify";
import { DateTime } from "luxon";
import {TIME_FORMAT} from "../CONSTANTS/constants";



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