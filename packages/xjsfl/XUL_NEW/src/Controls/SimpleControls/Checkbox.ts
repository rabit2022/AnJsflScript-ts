import {SimpleControls} from "../SimpleControls";
import {TEMPLATES} from "../../Constants/Templates";
import {CheckboxAttributes} from "./types/Checkbox.types";

export class TextBox extends SimpleControls {
    constructor(id: string, label: string, attributes: CheckboxAttributes = {}) {
        let newLabel = '';
        super("checkbox", id, newLabel, attributes);

        const JSON = this.json as typeof TEMPLATES["checkbox"];
        const checkbox = JSON.row.checkbox;
        checkbox["@label"] = label;
    }

}