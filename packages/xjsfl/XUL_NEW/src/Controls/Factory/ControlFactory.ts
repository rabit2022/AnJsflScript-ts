import {
    AllControls,
    COMPOUND_CONTROL_NAMES,
    compoundControl,
    SIMPLE_CONTROL_NAMES,
    simpleControl,
    SPACER_CONTROL_NAMES,
    spacerControl
} from "../../Constants/Templates.types";
import {Attrs} from "../Base/SimpleControls.types";
import {ValuesType} from "../CompoundControls/types/Listbox.types";
import {SimpleControls} from "../Base/SimpleControls";
import {BaseControl} from "../Base/BaseControl";
import {CompoundControls} from "../Base/CompoundControls";
import {SpacerControls} from "../Base/SpacerControls";
import {ColumnsManager} from "../../Constants/ColumnsManager";
import {IdGenerator} from "../../utils/id/uniqueID";

export class ControlFactory extends BaseControl {
    public control: BaseControl | undefined;

    constructor(type: AllControls, id: string | null, label: string = "", attributes: Attrs = {}, values: ValuesType = {}) {
        // console.log(type)
        let control: BaseControl | undefined;
        if (SIMPLE_CONTROL_NAMES.includes(type)) {
            // console.log("simple control types for " + type);
            control = new SimpleControls(type as simpleControl, id, label, attributes);
        } else if (COMPOUND_CONTROL_NAMES.includes(type)) {
            // console.log("compound control " + type);
            control = new CompoundControls(type as compoundControl, id, label, attributes, values);
        } else if (SPACER_CONTROL_NAMES.includes(type)) {
            // console.log("compound control " + type);
            control = new SpacerControls(type as spacerControl, id!)
        }

        id = id || IdGenerator.generate(label)
        super(type, id, control?.toJSON());


        this.control = control;

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

    setAttributes(attributes: Attrs) {
        // const row = (this.json as any).row;


        // // label
        // if (row.label) {
        //     row.label["@value"] = label ? label + ' : ' : ' ';
        // }

        const control = this.controlNode;
        if (!control) {
            return;
        }

        // // id
        // control["@id"] = id;

        // attributes
        Object.keys(attributes).forEach(key => {
            if (/^(value|checked)$/.test(key)) {
                // need to add / set values using JavaScript (rather than in XML) or else the field will always show initial values when being re-shown
                // this.settings[id] = attributes[key];
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
}


// const factory = new Factory("property", "id", "label")
// console.log(factory.control?.toXMLString());