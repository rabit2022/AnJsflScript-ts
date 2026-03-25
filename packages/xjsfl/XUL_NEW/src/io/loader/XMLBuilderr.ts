import {XMLBuilder} from "fast-xml-parser";


export class XMLBuilderr {
    private json: any;

    constructor(json: any) {
        this.json = json
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
            format: true
        };
        const builder = new XMLBuilder(builderOptions);

        const xmlContent = builder.build(this.json);
        return xmlContent;
    }

}


