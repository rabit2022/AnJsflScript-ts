/**
 * @file: Hello.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

import { CheckSelection, CheckMode, CheckCondition } from '@anjsfl/validation';

console.log("Hello World!");

// function alert(message: string): void {
//     console.error(message);
// }
// globalThis.alert = alert;

function Main() {
    // alert("动作已生成！（请进入元件手动微调速度）");
    const toCheckes :string[] = ["目标图层", "起始图层", "结束图层"];
    const toChheck:boolean = CheckSelection(toCheckes, CheckMode.SelectElement, CheckCondition.OnlyOne,"额外的提示信息")
    if (!toChheck){
        console.error("check faied");
        return;
    }

    // toCheckes.includes("")
    // Object.values(toCheckes)

    console.log("check success");
}

Main();