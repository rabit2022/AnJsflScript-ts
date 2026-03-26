import {TEMPLATES} from "../../Constants/Templates";
import {Property} from "../spacer/Property";
import {BaseControl} from "../Base/BaseControl";
import {Attrs} from "../Base/SimpleControls.types";
import {ColumnsManager} from "../../Constants/ColumnsManager";
import {BaseSettings} from "../Base/BaseSettings";

export class Flash extends BaseSettings {
    constructor(relativeSwf: string, width: number, height: number, properties: string[]) {
        super("flash", "flash");

        // src
        let json = this.json as typeof TEMPLATES["flash"];
        let flash = json.element.flash;
        flash["@src"] = relativeSwf;

        let attributes = {width, height};
        this.setAttributes("flash", this.id, "", attributes)

        let container = json.row as any[];
        for (const property in attributes) {
            let control = new Property(property);
            container.push((control.toJSON() as any).row);

        }

    }

    private flashData: any;

    setFlashData(data: any) {
        this.flashData = data;
        return this;
    }

    setAttributes(type: "flash", id: string, label: string, attributes: Attrs) {
        const row = (this.json as typeof TEMPLATES["flash"]).element;


        // // label
        // if (row.label) {
        //     row.label["@value"] = label ? label + ' : ' : ' ';
        // }

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


        // width
        if(attributes?.width > ColumnsManager.controlWidth)
        {
            // this.columns[1] = attributes.width;
            ColumnsManager.controlWidth = attributes.width;
        }

    }

    setLabelWidth(labelWidth: number) {

    }

    setControlWidth(controlWidth: number) {
        let control = this.controlNode;
        control["@width"] = controlWidth;
    }

    get controlNode(){
        const row = (this.json as typeof TEMPLATES["flash"]).element;

        // 找控件节点
        const controlKey = Object.keys(row).find(
            k => k !== "label" && !k.startsWith("@")
        );

        if (!controlKey) {
            throw new Error(`Invalid template: ${this._type}`);
        }

        const control = (row as any)[controlKey];
        return control;
    }
}


// let f = new Flash("path/to/aa.swf", 100, 200, ["property1", "p2", "p3"])
// console.log(f.toXMLString());
