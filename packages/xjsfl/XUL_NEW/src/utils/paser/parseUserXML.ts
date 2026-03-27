import {AllControls, SIMPLE_CONTROL_NAMES} from "../../Constants/Templates.types";
import {XMLSelector} from "../../io/loader/XMLSelector";
import {ControlFactory} from "../../Controls/Factory/ControlFactory";

/**
 * Parse user-supplied XML so that XULControls are created
 */
export function parseUserXML(xml: any): any {
    // add xml under a temp root node, so we can find any top-level control nodes passed in
    // xml = new XML('<temp>' + xml.toXMLString() + '</temp>');
    let tempXml = {
        "temp": xml
    };

    let resXml = xml;


    // loop through control types, and attempt to find and add to controls array
    var types = [
        ...SIMPLE_CONTROL_NAMES,
        'listbox', 'menulist',
        'radiogroup',

        'property'
    ]

    for (let type of types) {
        // var controls = xml.get('..' + type);
        const selector = new XMLSelector(tempXml, `$..${type}`);
        const controls = selector.select();
        // console.log(controls.length);

        if (controls.length > 0) {
            for (const control of controls) {
                // console.log(control)
                // variables
                const id = control["@id"].toString();
                const value = control["@value"].toString();
                // const controlXML = control.toXMLString();

                // // add control
                // this._addControl(type, id, null, control, {value:value}, null, null, true);
                // 第一步：复制并清洗 (Copy & Clean)
                // 遍历 control 对象，去掉键名开头的 '@'，生成一个新的对象
                const cleanedAttr = Object.entries(control).reduce((acc, [key, val]) => {
                    // 如果 key 以 '@' 开头，去掉它；否则保留原样
                    const newKey = key.startsWith('@') ? key.substring(1) : key;
                    (acc as any)[newKey] = val;
                    return acc;
                }, {}); // 初始化为一个空对象

                // 第二步：合并 (Merge)
                // 将清洗后的对象与新的 value 属性合并
                // 注意：如果 cleanedAttr 中已经存在 'value' 键，这里的值会覆盖它
                let attributes = {
                    ...cleanedAttr,
                    value
                };

                const factory = new ControlFactory(type as AllControls, id, "", attributes);
                // console.log(factory.control?.toXMLString());
                resXml = factory.control?.toJSON();
            }
        }
    }

    return resXml;
}


// const xmlStr = `<property template="property"  id = "id1111"  value = "value22222"/>`;
// const loader = new XMLLoader(xmlStr, "xml");
// console.log(loader.JSON)
//
// let userXML = parseUserXML(loader.JSON);
// console.log(userXML);