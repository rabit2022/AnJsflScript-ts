

// 删除「非本规则生成」的文件
function deleteInvalidFlaFiles(
  list: TimeData[],
  saveFolder: string
) {
  list
    .filter(item =>
      !item.flaFile.endsWith(".fla") ||
      !/^\d{4}年/.test(item.flaFile)
    )
    .forEach(item => {
      const fullPath = path.join(saveFolder, item.flaFile);
      fs.existsSync(fullPath) && fs.unlinkSync(fullPath);
    });
}

// 删除超出最大数量的旧文件
function deleteOverflowFiles(
  list: TimeData[],
  saveFolder: string
) {
  if (list.length <= MAX_SAVE_COUNT) return;

  const deleteList = list.slice(0, list.length - MAX_SAVE_COUNT);

  deleteList.forEach(item => {
    const fullPath = path.join(saveFolder, item.flaFile);
    fs.existsSync(fullPath) && fs.unlinkSync(fullPath);
  });
}