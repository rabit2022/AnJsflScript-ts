import * as fs from 'fs';
import * as path from "path";

export function ensureFileExists(savePath: string) {

    // // 假设这是你的保存路径（可能是文件路径，也可能是文件夹路径）
    //     const savePath = this.savePath;

    // 1. 获取目录路径 (如果是文件路径，需要提取出文件夹部分)
    // 如果你的 savePath 本身就是文件夹，直接用 savePath 即可
    const dirPath = path.dirname(savePath);

    // 2. 检查并创建文件夹
    // recursive: true 表示如果父目录不存在，也会一并创建
    // 如果目录已存在，不会报错
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, {recursive: true});
        console.log(`✅ 创建目录: ${dirPath}`);
    } else {
        console.log(`ℹ️  目录已存在: ${dirPath}`);
    }

    // 3. (可选) 如果你需要创建的是一个空文件
    // 注意：fs.writeFileSync 如果文件不存在会自动创建，所以这一步通常不是必须的
    // 除非你需要显式地初始化一个空文件
    const filePath = savePath; // 假设 savePath 是完整文件路径
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, ''); // 创建空文件
        console.log(`✅ 创建空文件: ${filePath}`);
    }
}