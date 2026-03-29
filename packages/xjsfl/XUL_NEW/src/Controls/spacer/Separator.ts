import {SpacerControls} from "../Base/SpacerControls";

export class Separator extends SpacerControls {
    private static separator = '</rows></grid><separator /><grid><columns><column flex="1" /><column flex="2" /></columns><rows>';

    constructor() {
        super("separator", "separator");
    }

    static replace(xml: string): string {

        // 1. 定义正则
        // 标志 'g' (全局), 'i' (忽略大小写), 'm' (多行模式)
        // [\s\S]*?  表示非贪婪匹配所有字符（包括换行符、空格、Tab）
        const separatorRowRegex = /<row\s+template="separator"[\s\S]*?<\/row>/gi;


        // 3. 执行替换
        const newXmlString = xml.replace(separatorRowRegex, Separator.separator);
        return newXmlString;
    }
}


// const property5 = new Separator();
// // console.log(property5.toJSON());
// console.log(property5.toXMLString());
//
// const test =`
//             <row template="separator">
//
//
//
// <separator></separator>
//
//
//
//
//
//             </row>
//
//
// `
//
// const replaced=Separator.replace(test)
// console.log(replaced);