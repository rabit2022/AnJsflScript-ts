import {SimpleControls} from "../Base/SimpleControls";
import {TEMPLATES} from "../../Constants/Templates";
import {ColorAttributes} from "./types/Colorchip.types";

export class Colorchip extends SimpleControls {
    constructor(id: string, label?: string|null, attributes: ColorAttributes = {}) {

        normalizeColorValue(attributes);
        super("colorchip", id, label, attributes);

        const JSON = this.json as typeof TEMPLATES["colorchip"];
        const colorchip = JSON.row.colorchip;


    }

}


/**
 * 标准化颜色值格式
 * @param attributes - 包含 value 和 format 的对象
 */
function normalizeColorValue(attributes: ColorAttributes): void {
    const rawValue = attributes.value;

    // 如果 value 不存在，直接返回
    if (rawValue === null || rawValue === undefined) {
        return;
    }

    // 统一转为字符串进行处理
    const valueStr = String(rawValue);

    if (valueStr.startsWith('0x')) {
        // 情况 1: 0x 开头的十六进制
        attributes.format = 'hex';
        // 如果需要去除 0x 前缀或转换格式，可在此处添加逻辑
        // attributes.value = valueStr;
    } else if (valueStr.startsWith('#')) {
        // 情况 2: # 开头的颜色码
        attributes.format = 'string';
        // 保持原值
    } else {
        // 情况 3: 其他情况（尝试作为十进制数字处理）
        attributes.format = 'string';

        const parsedInt = parseInt(valueStr, 10);

        if (!isNaN(parsedInt)) {
            // 是有效数字：转换为 #RRGGBB 格式
            // toString(16): 转十六进制
            // toUpperCase(): 转大写
            // padStart(6, "0"): 补零到 6 位
            const hexColor = parsedInt.toString(16).toUpperCase().padStart(6, '0');
            attributes.value = `#${hexColor}`;
        } else {
            // 不是数字：直接加 # 前缀 (处理命名颜色或容错)
            attributes.value = `#${valueStr}`;
        }
    }
}

// // --- 使用示例 ---
//
// const attr1: ColorAttributes = { value: 16738099 };
// normalizeColorValue(attr1);
// console.log(attr1.value); // 输出: "#FF5733"
// console.log(attr1.format); // 输出: "string"
//
// const attr2: ColorAttributes = { value: "0xFF5733" };
// normalizeColorValue(attr2);
// console.log(attr2.format); // 输出: "hex"
//
// const attr3: ColorAttributes = { value: "#FF5733" };
// normalizeColorValue(attr3);
// console.log(attr3.format); // 输出: "string"