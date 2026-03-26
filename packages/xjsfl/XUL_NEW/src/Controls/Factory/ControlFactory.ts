import {
    AllControls,
    COMPOUND_CONTROL_NAMES, compoundControl,
    PROPERTY_CONTROL_NAME,
    SIMPLE_CONTROL_NAMES, simpleControl, SPACER_CONTROL_NAMES, spacerControl
} from "../../Constants/Templates.types";
import {Attrs} from "../Base/SimpleControls.types";
import {ValuesType} from "../CompoundControls/types/Listbox.types";
import {SimpleControls} from "../Base/SimpleControls";
import {BaseControl} from "../Base/BaseControl";
import {CompoundControls} from "../Base/CompoundControls";
import {Property} from "../spacer/Property";

export class ControlFactory {
    public control: BaseControl | undefined;
    constructor(type: AllControls, id: string | null, label: string = "", attributes: Attrs = {}, values: ValuesType = {}) {
        // console.log(type)
        if (SIMPLE_CONTROL_NAMES.includes(type)) {
            // console.log("simple control types for " + type);
            this.control = new SimpleControls(type as simpleControl,id,label,attributes);
        } else if (COMPOUND_CONTROL_NAMES.includes(type)) {
            // console.log("compound control " + type);
            this.control = new CompoundControls(type as compoundControl,id,label,attributes,values);
        } else if (SPACER_CONTROL_NAMES.includes(type)) {
            // console.log("compound control " + type);
            this.control = new BaseControl(type as spacerControl,id!)
        }
    }
}


// const factory = new Factory("property", "id", "label")
// console.log(factory.control?.toXMLString());