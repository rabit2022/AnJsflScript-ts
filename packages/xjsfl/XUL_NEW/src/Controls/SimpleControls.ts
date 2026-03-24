import {TEMPLATES} from "../Constants/Templates";
import {Copy} from "../utils/copy/deepCopy";
import {compoundControl, simpleControl} from "../Constants/Templates.types";
import {Attrs} from "./SimpleControls.types";
import {makeId} from "../utils/id/ID";
import {XMLBuild} from "../io/loader/XMLBuild";


export class SimpleControls {
    protected readonly json;

    public settings: Record<string, any> = {};

    constructor(type: simpleControl, id: string | null, label: string, attributes: Attrs = {}) {
        id = id || makeId(label);


        const template = TEMPLATES[type];

        if (!template) {
            throw new Error(`Template not found: ${type}`);
        }

        const copy = Copy.deepCopy(template);
        this.json = copy;

        this.setAttributes(type,id,label,attributes);
    }


    setAttributes(type: simpleControl, id: string, label: string, attributes: Attrs) {
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

    }

    toJSON() {
        return this.json;
    }

    toXMLString(): string {
        const builder = new XMLBuild(this.json);
        return builder.build();
    }
}

// let label = ''
// let a= label ? label + ' : ' : ' ';
// console.log(a);