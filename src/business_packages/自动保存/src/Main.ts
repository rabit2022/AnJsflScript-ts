export function safeSave(
  originalFilePath: string,
  saveFolder: string,
  saveAction: (targetPath: string) => void
) {
  if (!fs.existsSync(saveFolder)) {
    fs.mkdirSync(saveFolder, { recursive: true });
  }

  // 1. 保存副本
  const savePath = getSavePath(originalFilePath, saveFolder);
  saveAction(savePath);

  // 2. 扫描目录
  const flaFiles = fs.readdirSync(saveFolder);
  const timeDataList = flaFiles.map(f => new TimeData(f));

  // 3. 按时间排序
  timeDataList.sort((a, b) =>
    a.timeStamp.localeCompare(b.timeStamp)
  );

  // 4. 清理
  deleteInvalidFlaFiles(timeDataList, saveFolder);
  deleteOverflowFiles(timeDataList, saveFolder);
}
