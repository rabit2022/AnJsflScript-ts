import {BaseControl} from "../Base/BaseControl";
import {parseExpression} from "../../utils/paser/parseExpression";
import {ControlFactory} from "./ControlFactory";
import {Button, Checkbox, Choosefile, Colorchip, PopupSlider, Targetlist, Textbox} from "../SimpleControls";
import {Flash, XML} from "../custom";
import {Checkboxgroup, Listbox, Menulist, Radiogroup} from "../CompoundControls";
import {Label, Property, Separator, Spacer} from "../spacer";
import {HasValue} from "../Base/SimpleControls.types";


export class ControlsFactory {
    public control: BaseControl | undefined;

    /**
     * Add control using shorthand notation
     */
    constructor(expression: string) {
        const paesedControls = parseControls(expression);
        for (const {type,label,value} of paesedControls) {
            // let control = new ControlFactory(type,null,label);
            // control.setAttributes()

            let control: BaseControl | undefined;
            // add control
            switch(type)
            {
                // single controls

                case 'button':
                    control = new Button(label);
                    break;

                case 'checkbox':
                    control = new Checkbox(label, null, {checked:Boolean(value)});
                    break;

                case 'color':
                case 'colorchip':
                case 'colorpicker':
                    control = new Colorchip(label, null, {value:value as string});
                    break;

                // case 'expression':
                //     this.addExpression(label, null, {value:value});
                //     break;

                case 'choosefile':
                case 'openfile':
                case 'file':
                    control = new Choosefile(label, null);
                    break;

                case 'savefile':
                case 'save':
                    control = new Choosefile(label, null, {value:'', type:'save'});
                    break;

                case 'flash':
                    // this.setFlash(label, control, value);
                    control = new Flash(label,[value as string]);
                    break;

                case 'value':
                case 'number':
                case 'numeric':
                case 'slider':
                case 'popupslider':
                    control = new PopupSlider(label, null, value[0] as HasValue);
                    break;

                case 'targetlist':
                    control = new Targetlist(label, null, {value:value});
                    break;

                case 'text':
                case 'textbox':
                case 'textfield':
                    control = new Textbox(label, null, {value:value as string});
                    break;

                case 'textarea':
                    control = new Textbox(label, null, {value:value as string, multiline:true});
                    break;

                // compound controls

                case 'checkboxgroup':
                case 'checkboxes':
                    control = new Checkboxgroup(label, null, value[0] as HasValue);
                    break;

                case 'radiogroup':
                case 'radios':
                case 'radio':
                    control = new Radiogroup(label, null, value[0] as HasValue);
                    break;

                case 'list':
                case 'listbox':
                    control = new Listbox(label, null, value[0] as HasValue);
                    break;

                case 'menulist':
                case 'dropdown':
                    control = new Menulist(label, null,value[0] as HasValue);
                    break;

                // other

                case 'xml':
                    control = new XML(value as string);
                    break;

                case 'label':
                    control = new Label(label, null);
                    break;

                case 'property':
                    control = new Property(value as string);
                    break;

                case 'spacer':
                case '-':
                    control = new Spacer();
                    break;

                case 'separator':
                case '|':
                    control = new Separator();
                    break;

                // properties

                // case 'title':
                //     this.setTitle(value);
                //     break;
                //
                // case 'width':
                //     this.setWidth(parseInt(value));
                //     break;
                //
                // case 'columns':
                //     this.setColumns(parseValue(value));
                //     break;

                default:
                    console.error('XUL.add(): Undefined control type "' +control+ '"');
            }
        }
    }
}


// 假设 parseExpression 已经定义并返回字符串数组
// declare function parseExpression(str: string): string[];

// 1. 预编译正则表达式 (提高性能，避免循环内重复创建)
const RX_CONTROL = /(\||\w*:)?([^=]*)=?(.*)/;
const RX_OBJ = /([^:,]+):([^,]+)/;
const RX_PROPERTY = /^(title|columns|width|xml)$/;
const RX_COMPOUND_START = /^[\[{]/;
const RX_SIMPLE_CONTROL = /^(popupslider|slider|numeric)$/;

// 定义解析结果的结构类型
interface ParsedControl {
    type: string;
    label: string;
    value: string | Array<{ label: string; value: string }>;
}

// 2. 主解析逻辑
const parseControls = (str: string): ParsedControl[] => {
    // variables
    const controls = parseExpression(str);
    const result: ParsedControl[] = [];

    // parse
    for (const controlStr of controls) {
        // 匹配正则
        const matches = controlStr.match(RX_CONTROL);
        if (!matches) continue; // 安全防御

        // 提取并清洗数据
        // 原逻辑：matches[1] 是前缀(如 'w:'), matches[2] 是 label, matches[3] 是 value
        let type = matches[1] ? matches[1].trim().replace(':', '') : '';
        let label = matches[2].trim();
        let value = matches[3].trim();

        let finalValue :any = value;

        // 默认类型处理
        if (type === '') {
            type = 'textbox';
        }

        // 处理特殊属性 (title, columns 等)
        // 逻辑：如果是属性，value 变成 label 的内容，label 清空
        if (RX_PROPERTY.test(type)) {
            value = label;
            label = '';
        }
        // 处理复合值 (数组或对象字符串，如 "[a,b]" 或 "{a:1,b:2}")
        else if (RX_COMPOUND_START.test(value)) {
            const isObject = value.startsWith('{');
            // 去除首尾括号并分割
            const rawValues = value.substring(1, value.length - 1).split(',');

            // 使用 map 转换数组元素
            const parsedValues = rawValues.map((item) => {
                const val = item.trim();
                if (isObject) {
                    const objMatches = val.match(RX_OBJ);
                    if (objMatches) {
                        return {
                            label: objMatches[1].trim(),
                            value: objMatches[2].trim()
                        };
                    }
                    return {label: val, value: val}; // 兜底
                } else {
                    // 简单数组：如果是特定控件，存为字符串，否则存为对象
                    return RX_SIMPLE_CONTROL.test(type) ? val : {label: val, value: val};
                }
            });

            // 逻辑：如果是 textbox 且传入了数组，自动升级为 dropdown
            if (type === 'textbox') {
                type = 'dropdown';
            }

            finalValue = parsedValues;
        }

        // 推入结果集
        result.push({
            type,
            label,
            value: finalValue
        });
    }

    return result;
};

// const factory = new Factory("property", "id", "label")
// console.log(factory.control?.toXMLString());