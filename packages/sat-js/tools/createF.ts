// generate-ts-files.js
const fs = require('fs');
const path = require('path');

function findProjectRoot(startDir) {
    let current = startDir;
    while (current !== path.dirname(current)) {
        if (fs.existsSync(path.join(current, 'package.json'))) {
            return current;
        }
        current = path.dirname(current);
    }
    throw new Error('Could not find package.json in parent directories.');
}

function ensureDirectory(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function createFileIfNotExists(filePath, content = '') {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
        console.log(`✅ Created: ${filePath}`);
    } else {
        console.log(`⚠️  Already exists: ${filePath}`);
    }
}

function main() {
    // const args = process.argv.slice(2);
    // if (args.length === 0) {
    //     console.error('Usage: node generate-ts-files.js <BaseName>');
    //     console.error('Example: node generate-ts-files.js Vector');
    //     process.exit(1);
    // }
    //
    // const baseName = args[0]; // e.g., "Vector"
    const baseName = "Scale"; // e.g., "Vector"
    // const lowerName = baseName.charAt(0).toLowerCase() + baseName.slice(1); // "vector"
    const lowerName = baseName.toLowerCase();

    const checkFileName = `${lowerName}Check.ts`;
    const enumFileName = `${lowerName}Enum.ts`;
    const typesFileName = `${lowerName}Type.ts`;

    const projectRoot = findProjectRoot(process.cwd());
    const srcDir = path.join(projectRoot, 'src');
    const checkDir = path.join(srcDir, 'check');
    const enumDir = path.join(srcDir, 'enum');
    const typesDir = path.join(srcDir, 'types');

    ensureDirectory(checkDir);
    ensureDirectory(enumDir);
    ensureDirectory(checkDir);

    // 可选：写入基础模板内容
    const checkContent = `

`;

    // const enumName = baseName;
    const enumContent = `

`;

    createFileIfNotExists(path.join(checkDir, checkFileName), checkContent);
    createFileIfNotExists(path.join(enumDir, enumFileName), enumContent);
    createFileIfNotExists(path.join(typesDir, typesFileName), "");
}

main();