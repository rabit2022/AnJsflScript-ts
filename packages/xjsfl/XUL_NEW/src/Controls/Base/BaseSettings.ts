import {BaseControl} from "./BaseControl";
import {AllControls, compoundControl, simpleControl} from "../../Constants/Templates.types";
import {Attrs} from "./SimpleControls.types";
import {ColumnsManager} from "../../Constants/ColumnsManager";

export class BaseSettings extends BaseControl {
    public settings: Record<string, any> = {};

    constructor(type: AllControls, id: string, json: any) {
        super(type, id, json);
    }

    get controlNode() {
        const row = (this.json as any).row;
        // 找控件节点
        const controlKey = Object.keys(row).find(
            k => k !== "label" && !k.startsWith("@")
        );

        if (!controlKey) {
            throw new Error(`Invalid template: ${this.type}`);
        }

        const control = (row as any)[controlKey];
        return control;
    }

    setAttributes(type: simpleControl | compoundControl | "flash", id: string, label: string, attributes: Attrs) {
        const row = (this.json as any).row;


        // label
        if (row.label) {
            row.label["@value"] = label ? label + ' : ' : ' ';
        }

        const control = this.controlNode;

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


        // width
        if (attributes?.width > ColumnsManager.controlWidth) {
            // this.columns[1] = attributes.width;
            ColumnsManager.controlWidth = attributes.width;
        }

    }

    setLabelWidth(labelWidth: number) {
        const row = (this.json as any).row;
        let label = row.label;
        if (label) {
            label["@width"] = labelWidth;
        }
    }

    setControlWidth(controlWidth: number) {
        let control = this.controlNode;
        control["@width"] = controlWidth;
    }

}