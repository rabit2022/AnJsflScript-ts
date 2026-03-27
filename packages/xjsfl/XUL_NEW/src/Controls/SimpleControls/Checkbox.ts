import {SimpleControls} from "../Base/SimpleControls";
import {TEMPLATES} from "../../Constants/Templates";
import {CheckboxAttributes} from "./types/Checkbox.types";

export class Checkbox extends SimpleControls {
    constructor(id: string, label?: string|null, attributes: CheckboxAttributes = {}) {
        let newLabel = '';
        super("checkbox", id, newLabel, attributes);


        if (label) {
            const JSON = this.json as typeof TEMPLATES["checkbox"];
            const checkbox = JSON.row.checkbox;
            checkbox["@label"] = label;
        }
    }

}