class TimeData {
  flaFile: string;
  timeStamp: string;
  fileName: string;

  constructor(flaFile: string) {
    const baseName = path.basename(flaFile, ".fla");
    const [timestamp, fileName] = baseName.split("_");

    const dateTime = DateTime.fromFormat(timestamp, TIME_FORMAT);

    this.flaFile = flaFile;
    this.fileName = fileName;
    this.timeStamp = dateTime.isValid
      ? dateTime.toISO()!
      : "";
  }
}
