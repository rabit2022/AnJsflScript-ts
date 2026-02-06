import * as  fs from "fs";
import * as path from "path";
import { DateTime } from "luxon";
import {TIME_FORMAT} from "../CONSTANTS/time";
import {AUTHOR} from "../DESC/Descriptions";

AUTHOR;

export class TimeData {
  flaFile: string;
  timeStamp: string;
  fileName: string;

  constructor(flaFile: string) {
    const baseName = path.basename(flaFile, ".fla");
    const [timestamp, fileName] = baseName.split("_");

    const dateTime = DateTime.fromFormat(timestamp, TIME_FORMAT);

    this.flaFile = flaFile;
    this.fileName = fileName;
    this.timeStamp = dateTime.isValid ? dateTime.toISO()! : "";
  }
}
