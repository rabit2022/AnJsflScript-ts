import * as _ from "lodash";

export function center(str: string, totalLength: number, padChar: string = " ") {
    const length = str.length;
    if (length >= totalLength) return str;

    const totalPadding = totalLength - length;
    const leftPadding = Math.floor(totalPadding / 2);
    const rightPadding = Math.ceil(totalPadding / 2); // 如果除不尽，右边多一个

    // 使用 Lodash 的 padStart 和 padEnd
    // 注意：_.padStart 的第一个参数是字符串
    return _.padEnd(_.padStart(str, length + leftPadding, padChar), totalLength, padChar);

    // return str.padStart(length + leftPadding, padChar).padEnd(totalLength, padChar);
}

// // 使用示例
// const logType = "info";
// const levelname = centerPad(logType.toUpperCase(), 8);
// console.log(levelname);
