/**
 * @file: Tips.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/4/11 20:42
 * @project: AnJsflScript
 * @description:
 */

const author = `作者：@穹的兔兔
QQ：3101829204`;

const alertMessageConfig = {

    // 特殊模块的提示信息
    "default!": `是否加载模块？
    
${author}
模块名：`,

    "failed!": `加载模块失败，请联系作者！！！
    
${author}
模块名：`,

    // FirstRun提示信息
    "loading success!":
        `【温馨提示】导入成功！！！
如果有bug,或者建议，请@我。

【注意】这个文件只是导入所需的模块，并没有安装功能。
${author}`,

    // 防盗链提示信息
    "loading might be not allowed!":
        `【温馨提示】你可能使用的是盗版软件，这个是开源的项目，如果花费了金钱购买，请退款。

${author}
地址：https://github.com/rabit2022/AnJsflScript`
};

export function alertMessage(mode: keyof typeof alertMessageConfig | string) {
    const msg = alertMessageConfig[mode];
    if (msg) {
        alert(msg);
    }
}