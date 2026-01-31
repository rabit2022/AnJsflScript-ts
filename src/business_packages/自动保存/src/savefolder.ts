import fs from "fs";
import path from "path";

/**
 * 获取安全保存目录
 * 优先使用 D 盘，不存在则使用 C 盘
 */
export function getSaveFolder(): string {
  const drives = getWindowsDrives();

  const rootDrive = drives.includes("D:")
    ? "D:"
    : "C:";

  const saveFolder = path.join(rootDrive, "anJsflScript");

  if (!fs.existsSync(saveFolder)) {
    fs.mkdirSync(saveFolder, { recursive: true });
  }

  return saveFolder;
}
function getWindowsDrives(): string[] {
  const drives: string[] = [];

  for (let i = 65; i <= 90; i++) {
    const drive = String.fromCharCode(i) + ":";

    try {
      if (fs.existsSync(drive + "\\")) {
        drives.push(drive);
      }
    } catch {
      // 某些盘可能无权限，直接跳过
    }
  }

  return drives;
}