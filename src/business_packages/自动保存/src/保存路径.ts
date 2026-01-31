function getBaseNameWithoutExt(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

function getSavePath(
  originalFilePath: string,
  saveFolder: string
): string {
  const baseName = getBaseNameWithoutExt(originalFilePath);
  const now = DateTime.now().toFormat(TIME_FORMAT);
  const fileName = `${now}_${baseName}.fla`;

  return path.join(saveFolder, fileName);
}