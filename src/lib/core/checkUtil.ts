/**
 * @file: checkUtil.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/1/30 14:24
 * @project: AnJsflScript
 * @description:
 */

// /**
//  * 检查选中的帧是否符合指定的条件
//  * @param {Timeline} timeline - 时间轴对象。
//  * @param {string} [exTips] - 额外提示信息。
//  * @param {"No limit"|"Not Zero"|"Zero"|"Only one"|"Only two"|"More"|
//  * ">0"|"=0"|"=1"|"=2"|">1"} [condition="Not Zero"] - 检查条件
//  * @param {{min: number, max: number,onlyFirst: boolean}} [range] - 帧范围
//  * @returns {FrameRange[]}
//  */
// export function CheckSelectedFrames(timeline, exTips, condition, range) {
//     if (condition === undefined) condition = "Not Zero";
//
//     var frs = FrameRangeList.from(getSelectedFrs(timeline));
//
//     if (!CheckSelection(frs, "selectFrame", "Not Zero")) return null;
//
//     if (range) {
//         const { min, max, onlyFirst } = range;
//         var totalDuration = 0;
//         if (onlyFirst) {
//             totalDuration = frs[0].duration;
//         } else {
//             totalDuration = frs.reduce(function(acc, fr) {
//                 return acc + fr.duration;
//             }, 0);
//         }
//
//         var mode = onlyFirst ? "selectedFrameFirstDuration" : "selectedFrameDuration";
//         var exTips = exTips ? exTips : "";
//         exTips += " 所选帧总时长 [" + totalDuration + "] 帧, ";
//         if (min !== undefined && totalDuration < min) {
//             exTips += " 要求不能小于 [" + min + "] 帧, 请重新选择";
//         }
//         if (max !== undefined && totalDuration > max) {
//             exTips += " 要求不能大于 [" + max + "] 帧, 请重新选择";
//         }
//         if (!CheckSelection(frs, mode, condition, exTips)) return null;
//     } else {
//         // console.log(frs, frs.length);
//         if (!CheckSelection(frs, "selectFrame", condition, exTips)) return null;
//     }
//
//     return frs;
// }
