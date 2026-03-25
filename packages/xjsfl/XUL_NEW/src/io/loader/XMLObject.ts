import {XMLBuilder, XMLParser} from "fast-xml-parser";


export class XMLObject {
    private json: any;

    constructor(xml: string) {

        // 修改这里：传入配置选项
        const options = {
            ignoreAttributes: false,       // 关键：不要忽略属性
            attributeNamePrefix: "@",      // 可选：设置属性前缀为 "@" (默认通常是 "@_")
            parseAttributeValue: true,     // 可选：尝试将属性值转换为数字/布尔值，如果不需要可设为 false
        };

        const parser = new XMLParser(options);
        let jObj = parser.parse(xml);
        // console.log(jObj);
        // return jObj;
        this.json = jObj;
    }

    get JSON(): any {
        return this.json;
    }

    set JSON(value: any) {
        this.json = value;
    }

    build() {
// 如果你要还原回 XML，Builder 也需要知道属性前缀的配置，否则它可能无法识别 @ 开头的键作为属性
        const builderOptions = {
            ignoreAttributes: false,
            attributeNamePrefix: "@",
        };
        const builder = new XMLBuilder(builderOptions);

        const xmlContent = builder.build(this.json);
        // console.log(xmlContent);
        return xmlContent;
    }

}


