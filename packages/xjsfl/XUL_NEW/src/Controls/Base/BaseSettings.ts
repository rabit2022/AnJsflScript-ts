import {BaseControl} from "./BaseControl";
import {AllControls, compoundControl, simpleControl} from "../../Constants/Templates.types";
import {Attrs} from "./SimpleControls.types";

export class BaseSettings extends BaseControl{
    public settings: Record<string, any> = {};

    constructor(type: AllControls, id: string) {
        super(type,id);
    }

    setAttributes(type:  simpleControl | compoundControl , id: string, label: string, attributes: Attrs) {
        const row = (this.json as any).row;


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

}