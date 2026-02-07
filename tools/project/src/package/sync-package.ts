import * as fs from 'fs';
import JSON5 from 'json5';
import {PACKAGE_JSON5_FILE, PACKAGE_JSON_FILE} from "../ProjectFileDir";

/**
 * 同步 package.json5 到 package.json
 * 1. 读取 package.json5（带注释）
 * 2. 转换为标准 JSON
 * 3. 写入 package.json
 */
function syncPackageJson(): boolean {
  try {
    // 1. 定义路径
    const json5Path: string = PACKAGE_JSON5_FILE;
    
    // 2. 检查文件是否存在
    if (!fs.existsSync(json5Path)) {
      console.error('❌ package.json5 文件不存在');
      process.exit(1);
    }

    // 3. 读取内容
    const json5Content: string = fs.readFileSync(json5Path, 'utf8');
    
    // 4. 解析 JSON5 (any 是因为 package.json 结构复杂且灵活)
    const packageData: any = JSON5.parse(json5Content);
    
    // 5. 写入标准 JSON
    const jsonPath: string = PACKAGE_JSON_FILE;
    const jsonContent: string = JSON.stringify(packageData, null, 2);
    
    fs.writeFileSync(jsonPath, jsonContent);
    
    console.log('✅ package.json 已从 package.json5 同步更新');
    
    return true;
  } catch (error) {
    console.error('❌ 同步失败:', (error as Error).message);
    console.error((error as Error).stack);
    process.exit(1);
  }
}

// 执行同步
syncPackageJson();
