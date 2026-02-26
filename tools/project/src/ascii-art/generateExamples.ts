const figlet = require("figlet");
const fs = require("fs").promises;
const { promisify } = require("util");

const figletAsync = promisify(figlet);
const text = "AnJsflScript-Ts";
const outputFile = "all-ascii-fonts.txt";

async function main() {
    const allFonts = figlet.fontsSync();
    console.log(`🔍 共找到 ${allFonts.length} 种字体，开始生成...\n`);

    let outputContent = "";
    let successCount = 0;
    let errorCount = 0;

    for (const font of allFonts) {
        try {
            const ascii = await figletAsync(text, { font });
            outputContent += `\n\n${"=".repeat(60)}\n`;
            outputContent += `Font: ${font}\n`;
            outputContent += `${"=".repeat(60)}\n`;
            outputContent += ascii;
            successCount++;
            console.log(`✅ ${font}`);
        } catch (err) {
            errorCount++;
            console.warn(`⚠️  跳过字体 "${font}": ${err.message}`);
        }
    }

    // 写入文件
    await fs.writeFile(outputFile, outputContent.trim(), "utf8");

    console.log(`\n🎉 完成！`);
    console.log(`   成功: ${successCount}`);
    console.log(`   失败: ${errorCount}`);
    console.log(`📄 已保存至: ${outputFile}`);
}

main().catch(console.error);
