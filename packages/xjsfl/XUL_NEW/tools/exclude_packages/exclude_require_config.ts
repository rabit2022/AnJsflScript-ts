/**
 * @file: exclude_require_config.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

import {REQUIRE_CONFIG_FILE, WEBPACK_CONFIG_FILE, WEBPACK_CONFIG_TEST_FILE} from "../ProjectFileDir";
`
1.读取REQUIRE_CONFIG_FILE

// region REQUIRE MODULES PATHS
{
"store-js": "third/utils/store-js/store-js",
}
// endregion REQUIRE MODULES PATHS
2.获取region中间的字符串，序列化为json
3.获取"store-js"模块名字列表


4.    读取 WEBPACK_CONFIG

// region EXCLUDE_MODULE_NAME
// endregion EXCLUDE_MODULE_NAME
5.获取region中间的位置，把模块名字列表添加到这里
类似这样
// region EXCLUDE_MODULE_NAME
"store-js",""store-js2","store-js3",
// endregion EXCLUDE_MODULE_NAME


`



import * as fs from 'fs';
import * as path from 'path';
import {set_module_name} from "../init/init_module_name";


function extractRegion(content: string, startMarker: string, endMarker: string): { region: string; startIndex: number; endIndex: number } {
    const startRegex = new RegExp(`^.*${startMarker}.*$`, 'm');
    const endRegex = new RegExp(`^.*${endMarker}.*$`, 'm');

    const startMatch = content.match(startRegex);
    const endMatch = content.match(endRegex);

    if (!startMatch || !endMatch) {
        throw new Error(`Region not found: ${startMarker} ... ${endMarker}`);
    }

    const startIndex = startMatch.index! + startMatch[0].length;
    const endIndex = endMatch.index!;

    const region = content.slice(startIndex, endIndex);
    return { region, startIndex, endIndex };
}


function cleanJsonTrailingCommas(str: string): string {
    // 移除对象/数组末尾的逗号
    return str
        .replace(/},/g, '}')
}
function parseRequireModules(configContent: string): string[] {
    const { region } = extractRegion(
        configContent,
        '// region REQUIRE MODULES PATHS',
        '// endregion REQUIRE MODULES PATHS'
    );

    // 清理注释、只保留 JSON
    let jsonStr = region.trim();
    if (!jsonStr) {
        return [];
    }

    jsonStr=cleanJsonTrailingCommas(jsonStr);
    // console.log(jsonStr);


    try {
        const obj = JSON.parse(jsonStr);
        return Object.keys(obj); // 模块名字列表
    } catch (e) {
        throw new Error('Failed to parse JSON in REQUIRE MODULES PATHS region');
    }
}

function updateWebpackExclude(webpackContent: string, moduleNames: string[]): string {
    const { startIndex, endIndex } = extractRegion(
        webpackContent,
        '// region EXCLUDE_MODULE_NAME',
        '// endregion EXCLUDE_MODULE_NAME'
    );

    // 构建新的 exclude 列表字符串：带引号、逗号分隔
    const excludeList = moduleNames.map(name => `"${name}"`).join(',');
    const newRegion = excludeList ? `\n${excludeList},\n` : '\n';

    return (
        webpackContent.substring(0, startIndex) +
        newRegion +
        webpackContent.substring(endIndex)
    );
}


export async function exclude_require_config() {
    try {
        const requireConfig = fs.readFileSync(REQUIRE_CONFIG_FILE, 'utf8');
        const webpackConfig = fs.readFileSync(WEBPACK_CONFIG_FILE, 'utf8');
        const webpackTestConfig = fs.readFileSync(WEBPACK_CONFIG_TEST_FILE, 'utf8');

        const moduleNames = parseRequireModules(requireConfig);
        // console.log('Extracted module names:', moduleNames);

        const updatedWebpack = updateWebpackExclude(webpackConfig, moduleNames);
        fs.writeFileSync(WEBPACK_CONFIG_FILE, updatedWebpack, 'utf8');
        console.log('WEBPACK_CONFIG updated successfully.');

        const updatedTestWebpack = updateWebpackExclude(webpackTestConfig, moduleNames);
        fs.writeFileSync(WEBPACK_CONFIG_TEST_FILE, updatedTestWebpack, 'utf8');
        console.log('WEBPACK_CONFIG_TEST updated successfully.');

    } catch (err) {
        console.error('Error:', err);
    }
}


if (require.main === module) {
    (async () => {
        await exclude_require_config();
    })();
}
// exclude_require_config();