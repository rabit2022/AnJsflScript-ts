import {CompoundControls} from "../CompoundControls";
import {Attrs} from "../SimpleControls.types";
import {makeId} from "../../utils/id/ID";
import {TEMPLATES} from "../../Constants/Templates";
import {Copy} from "../../utils/copy/deepCopy";
import {ListitemAttributes, ValuesType} from "./Listbox.types";
import {compoundControl} from "../../Constants/Templates.types";

export class Listbox extends CompoundControls {
    protected readonly json;

    public settings: Record<string, any> = {};

    constructor(id: string | null, label: string, attributes: Attrs = {}, values: Attrs = {}) {
        super("listbox", id, label, attributes, values);

        id = id || makeId(label);

        let type = "listbox";
        const template = TEMPLATES["listbox"];
        if (!template) {
            throw new Error(`Template not found: ${type}`);
        }

        const copy = Copy.deepCopy(template);
        // const row = copy.row;
        //
        // const listbox = row.listbox;

        this.json = copy;


        this.addChildren(id, values)
    }


    /**
     * 获取 content.row 容器
     */
    getChildrenContainer(): any[] {
        const row = this.json.row;
        return row.listbox.listitem;
    }

    addChildren( id: string, values: ValuesType = {}, selected?: string) {
        // const listitemTemplate =  TEMPLATES["listitem"];
        // const copy = Copy.deepCopy(listitemTemplate);


        const container = this.getChildrenContainer();


        Object.entries(values).forEach(([name, value], i) => {
            const item: ListitemAttributes = {
                "@value": "",
                "@label": ""
            };

            let subId: string;

            // ✅ 情况1：{ label, value }
            if (typeof value === "object" && value !== null && "label" in value) {
                item["@value"] = value.value;
                item["@label"] = value.label;
                subId = value.value;
            }

            // ✅ 情况2：数组
            else if (Array.isArray(values)) {
                item["@value"] = value;
                item["@label"] = value;
                subId = value as string;
            }

            // ✅ 情况3：普通对象
            else {
                item["@value"] = value as string;
                item["@label"] = name;
                subId = value as string;
            }

            // ✅ id
            if (id) {
                item["@id"] = `${id}[${subId}]`;
            }

            // ✅ selected
            if ((selected === undefined && i === 0) || value === selected) {
                item["@selected"] = true;
            } else {
                delete item["@selected"];
            }

            // items.push(item);
            container.push(item);
        });

    }

    setAttributes(type: compoundControl,id: string,label: string, attributes: Attrs ) {
        const row = this.json.row;


        // label
        if (row.label) {
            row.label["@value"] = label ? label + ' : ' : ' ';
        }

        // 找控件节点
        const controlKey = Object.keys(row).find(
            k => k !== "label" && !k.startsWith("@")
        );

        if (!controlKey) {
            throw new Error(`Invalid template: ${type}`);
        }

        const control = (row as any)[controlKey];

        // id
        control["@id"] = id;

        // attributes
        Object.keys(attributes).forEach(key => {
            if (/^(value|checked)$/.test(key)) {
                // need to add / set values using JavaScript (rather than in XML) or else the field will always show initial values when being re-shown
                this.settings[id] = attributes[key];
            } else {
                control[`@${key}`] = attributes[key];
            }
        });


        // // width
        // if(attributes && attributes.width > this.columns[1])
        // {
        //     this.columns[1] = attributes.width;
        // }


        // // target list
        // switch(type)
        // {
        //     case 'targetlist':
        //         var property = xml['property'][0];
        //         property.@id = id;
        //         break;
        //
        //     case 'radiogroup':
        //     case 'menulist':
        //     case 'listbox':
        //         var selected		= xml..*.(function(element){return element.@selected && element.@selected == 'true';});
        //         this.settings[id]	= selected.@value;
        //         //trace('>>' + selected.toXMLString())
        //         break;
        // }
    }
}









