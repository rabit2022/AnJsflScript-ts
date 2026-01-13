// treeProj.ts
import * as fs from "fs";
import * as path from "path";
import { minimatch } from "minimatch";
import { $ProjectFileDir$ } from "../ProjectFileDir";


const ignorePath = path.join(__dirname, ".treeignore");

/**
 * 读取 .treeignore 文件并解析为忽略规则数组
 */
function loadIgnorePatterns(repoRoot: string): string[] {
    if (!fs.existsSync(ignorePath)) {
        // 如果没有 .treeignore，使用默认规则
        throw new Error("Ignore pattern not found.");
    }

    const content = fs.readFileSync(ignorePath, "utf-8");
    return content
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line && !line.startsWith("#"))
        .filter(line => !line.startsWith("!")); // 暂不支持白名单（negation）
}

/**
 * 判断路径是否应被忽略
 * @param relativePath 相对于 repo root 的路径（如 "src/index.ts" 或 ".git/config"）
 * @param patterns 忽略规则列表（来自 .treeignore）
 */
function shouldIgnore(relativePath: string, patterns: string[]): boolean {
    // 规范化路径分隔符为 /
    const normalized = relativePath.replace(/\\/g, "/");

    return patterns.some(pattern => {
        // minimatch 默认不匹配以 . 开头的文件，除非显式开启 dot: true
        return minimatch(normalized, pattern, { dot: true, matchBase: true });
    });
}

/**
 * 递归生成目录树
 */
function tree(
    currentDir: string,
    repoRoot: string,
    ignorePatterns: string[],
    prefix = "",
    output: string[] = []
): void {
    if (!fs.existsSync(currentDir)) {
        throw new Error(`Directory does not exist: ${currentDir}`);
    }

    const items = fs.readdirSync(currentDir)
        .map(name => {
            const fullPath = path.join(currentDir, name);
            const isFile = fs.statSync(fullPath).isFile();
            return { name, fullPath, isFile };
        })
        .sort((a, b) =>
            a.isFile === b.isFile
                ? a.name.localeCompare(b.name)
                : a.isFile ? 1 : -1
        );

    const pointers = items.map((_, i) =>
        i === items.length - 1 ? "└── " : "├── "
    );

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const pointer = pointers[i];

        // 计算相对于 repo root 的路径（用于匹配 ignore 规则）
        const relPath = path.relative(repoRoot, item.fullPath).replace(/\\/g, "/");

        // 检查是否应忽略
        if (shouldIgnore(relPath, ignorePatterns)) {
            continue;
        }

        const line = prefix + pointer + item.name + (item.isFile ? "" : "/");
        output.push(line);

        if (!item.isFile) {
            const extension = pointer === "└── " ? "    " : "│   ";
            tree(item.fullPath, repoRoot, ignorePatterns, prefix + extension, output);
        }
    }
}

/**
 * 向上查找包含 .git 的仓库根目录
 */
function findRepoRoot(start: string): string {
    let current = path.resolve(start);
    while (current !== path.dirname(current)) {
        if (fs.existsSync(path.join(current, ".git"))) {
            return current;
        }
        current = path.dirname(current);
    }
    return path.resolve(start); // fallback
}

/**
 * 主函数
 */
function main(): void {
    // 获取当前脚本所在目录（兼容 Windows）
    const __filename = new URL(import.meta.url).pathname;
    const scriptPath = process.platform === "win32" && __filename.startsWith("/")
        ? __filename.slice(1)
        : __filename;
    const __dirname = path.dirname(scriptPath);

    const startDir = $ProjectFileDir$;
    console.log("Searching repo root from:", startDir);

    const repoRoot = findRepoRoot(startDir);
    console.log("Repository root found at:", repoRoot);

    // 加载忽略规则
    const ignorePatterns = loadIgnorePatterns(repoRoot);
    console.log(`Loaded ${ignorePatterns.length} ignore patterns.`);

    const rootName = path.basename(repoRoot);
    const output: string[] = [];
    output.push(`${rootName}/`);

    // 从 repo root 开始遍历
    tree(repoRoot, repoRoot, ignorePatterns, "", output);

    const outputPath = path.join(__dirname, "tree.md");
    fs.writeFileSync(outputPath, output.join("\n"), "utf-8");
    console.log(`✅ Tree written to: ${outputPath}`);
}

main();