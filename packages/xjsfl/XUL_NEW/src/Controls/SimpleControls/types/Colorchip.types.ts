// 1. 定义属性接口，明确结构
import {Width} from "../../Base/SimpleControls.types";

export interface ColorAttributes extends Width {
    value?: string | number; // 输入可能是字符串或数字
    format?: 'hex' | 'string'; // 格式标记
    color?: string;
}


