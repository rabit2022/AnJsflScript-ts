// tools/generateDoc.ts
// 读取..\developers-animatesdk-docs-master\Document_object文件夹下的所有md文件
// 生成.d.ts到当前文件夹


// ---
//
// ### ✅ `tools/generateDoc.ts` 完整代码
//
//     ```ts
// tools/generateDoc.ts
import * as fs from 'fs';
import * as path from 'path';

// 定义方法信息结构
interface MethodInfo {
  name: string;
  availability: string;
  description: string;
  params: { name: string; type: string; desc: string }[];
  returns: { type: string; desc: string };
  example: string;
}

// 解析单个 .md 文件

// 替换 tools/generateDoc.ts 中的 parseMarkdownFile 函数
function parseMarkdownFile(content: string, filename: string): MethodInfo {
    // 移除所有换行，变成单行处理
    let text = content.replace(/\r?\n/g, '').trim();

    // 尝试从开头提取方法名，格式如 "document.methodName(...)"
    const methodMatch = text.match(/^document\.([a-zA-Z0-9_]+)  $ /);
    let methodName = methodMatch ? methodMatch[1] : filename.replace(/\.md $ /, '');

    // 按字段关键词分割
    const sections = text
        .replace('document.' + methodName + '(', 'SPLIT_MARKER(') // 避免 Usage 中的同名干扰
        .split(/(Availability|Usage|Parameters|Returns|Description|Example|See also)/)
        .filter(s => s.trim() !== '');

    const data: Record<string, string> = {};
    for (let i = 0; i < sections.length; i += 2) {
        const key = sections[i].trim();
        const value = sections[i + 1]?.trim() || '';
        if (key && value) {
            data[key] = value;
        }
    }

    // 提取 availability
    const availability = data['Availability']?.replace(/\. $ /, '') || 'Unknown';

    // 提取 description
    const description = (data['Description'] || '').replace(/^Method;\s*/, '');

    // 提取 parameters
    const params: { name: string; type: string; desc: string }[] = [];
    const paramText = data['Parameters'] || '';
    if (!/None\.? $ /i.test(paramText)) {
        // 简单按句号或分号分割参数（你的示例中参数描述是连续文本）
        // 示例: "index : It is an integer that speifies the index..."
        // 或: "abortIfErrorsExist Boolean; the default value is false..."
        const paramLines = paramText
            .replace(/\. $ /, '') // 去尾句号
            .split(/;\s*(?=[a-zA-Z])/); // 按 "; " 分割，但后面必须是字母（避免数字中的分号）

        for (const line of paramLines) {
            if (!line.trim()) continue;

            // 匹配 "name Type" 或 "name: ..." 或 "name Type; ..."
            const match = line.match(/^([^:;\s]+)\s+([a-zA-Z]+)/);
            if (match) {
                const name = match[1].trim();
                const type = match[2].trim();
                const desc = line.substring(match[0].length).trim().replace(/^[:;\s]+/, '');
                params.push({
                    name,
                    type: mapType(type),
                    desc: desc || 'No description.',
                });
            } else {
                // 无法解析，跳过或记录警告
                console.warn(`⚠️ Unparsed parameter:  $ {line}`);
            }
        }
    }

    // 提取 returns
    let returns = { type: 'void', desc: 'Nothing.' };
    const returnText = data['Returns'] || '';
    if (!/Nothing\.? $ /i.test(returnText)) {
        // 示例: "Boolean: true if successful."
        const returnMatch = returnText.match(/^([a-zA-Z]+)(:\s*(.+))?/);
        if (returnMatch) {
            returns = {
                type: mapType(returnMatch[1]),
                desc: (returnMatch[3] || 'No description.').replace(/\. $ /, ''),
            };
        }
    }

    // 提取 example
    let example = '';
    const exampleText = data['Example'] || '';
    if (exampleText) {
        // 移除开头描述，保留代码部分（你的示例中代码在最后）
        const codeMatch = exampleText.match(/(?:.*?:\s*)?(var|fl\.|document\.|function\s*\w+\s*  $ )/);
        if (codeMatch) {
            example = exampleText.substring(codeMatch.index! + codeMatch[0].length - codeMatch[1].length).trim();
            // 移除结尾的 See also（如果有）
            example = example.split(/See also/)[0].trim();
        } else {
            example = exampleText;
        }
    }

    return {
        name: methodName,
        availability,
        description,
        params,
        returns,
        example,
    };
}
// 简单类型映射（可根据需要扩展）
function mapType(typeStr: string): string {
    const map: Record<string, string> = {
        'string': 'string',
        'number': 'number',
        'boolean': 'boolean',
        'Boolean': 'boolean',
        'int': 'number',
        'integer': 'number',
        'Array': 'any[]',
        'object': 'any',
        'Object': 'any',
        'void': 'void',
    };
    return map[typeStr] || 'any';
}

// 生成 JSDoc 注释字符串
function generateJSDoc(method: MethodInfo): string {
    let doc = '    /**\n';
    doc += `     * @availability  ${method.availability}\n`;

    method.params.forEach(p => {
        doc += `     * @param  ${p.name}  ${p.desc} ( ${p.type})\n`;
    });

    doc += `     * @returns  ${method.returns.desc}\n`;
    doc += `     * @description  ${method.description}\n`;

    if (method.example) {
        doc += '     * @example\n';
        doc += '     * ```javascript\n';
        doc += method.example
            .split('\n')
            .map(line => `     *  ${line}`)
            .join('\n');
        doc += '\n     * ```';
    }

    doc += '\n     */';
    return doc;
}

// 生成方法签名
function generateMethodSignature(method: MethodInfo): string {
    const paramsStr = method.params.map(p => ` ${p.name}:  ${p.type}`).join(', ');
    return `     ${method.name}( ${paramsStr}):  ${method.returns.type};`;
}

// 主函数
async function main() {
    const inputDir = path.resolve(__dirname, '..', 'developers-animatesdk-docs-master', 'Document_object');
    const outputFilePath = path.resolve(__dirname,  'Document.d.ts');

    if (!fs.existsSync(inputDir)) {
        console.error(`Input directory not found:  ${inputDir}`);
        process.exit(1);
    }

    const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.md'));
    const methods: MethodInfo[] = [];

    for (const file of files) {
        const content = fs.readFileSync(path.join(inputDir, file), 'utf-8');
        try {
            const method = parseMarkdownFile(content, file);
            methods.push(method);
        } catch (e) {
            console.warn(`Failed to parse  ${file}:`, e);
        }
    }

    // 按方法名排序
    methods.sort((a, b) => a.name.localeCompare(b.name));

    // 生成 .d.ts 内容
    let dtsContent = `// Auto-generated by tools/generateDoc.ts\n\n`;
    dtsContent += `declare namespace fl {\n`;
    dtsContent += `  interface Document {\n`;

    for (const method of methods) {
        dtsContent += `\n ${generateJSDoc(method)}\n`;
        dtsContent += ` ${generateMethodSignature(method)}\n`;
    }

    dtsContent += `  }\n`;
    dtsContent += `}\n`;

    // 写入文件
    fs.writeFileSync(outputFilePath, dtsContent, 'utf-8');
    console.log(`✅ Generated  ${outputFilePath} with  ${methods.length} methods.`);
}

// 运行
main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});


