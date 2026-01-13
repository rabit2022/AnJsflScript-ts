// /**
//  * @file: 06.环绕飞行.ts
//  * @author: 穹的兔兔
//  * @email: 3101829204@qq.com
//  * @date: 2025/7/25 18:58
//  * @project: AnJsflScript
//  * @description:
//  */
//
// // region import
// // ===============Core Library======================
// // prettier-ignore
// // import { CheckDom, CheckSelection, CheckSelectedFrames, CheckSelectedLayers } from "checkUtil";
// // @ts-expect-error
// import { generateNameUntilUnique, generateNameUseLast } from "SymbolNameGenerator";
// // @ts-expect-error
// import { SelectAll, OnlySelectCurrent } from "ElementSelect";
// // @ts-expect-error
// import { swapLayers } from "LayerOperation";
// // @ts-expect-error
// import JSFLConstants = require("JSFLConstants");
// // @ts-expect-error
// import { convertToKeyframesSafety } from "KeyFrameOperation";
// // @ts-expect-error
// import { playLoop } from "ElementAnim";
// import { CheckSelection } from "CheckSelection";
// import { CheckCondition, CheckMode } from "selectionTypes";
//
// function Main() {
//     // alert("动作已生成！（请进入元件手动微调速度）");
//     const toCheckes :string[] = ["目标图层", "起始图层", "结束图层"];
//     const toChheck:boolean = CheckSelection(toCheckes, CheckMode.SelectElement, CheckCondition.NoLimit,"额外的提示信息")
//     if (!CheckSelection(toCheckes)){
//         console.error("check faied");
//         return;
//     }
//
//     console.log("check success");
// }
//
// Main();
