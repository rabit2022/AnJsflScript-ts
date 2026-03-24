import {SimpleControls} from "../SimpleControls";
import {ButtonAttributes} from "./types/Button.types";
import {TEMPLATES} from "../../Constants/Templates";

export class Button extends SimpleControls {
    constructor(id: string, label: string, attributes: ButtonAttributes = {}) {
        let newLabel = '';
        super("button", id, newLabel, attributes);

        const JSON = this.json as typeof TEMPLATES["button"];
        const checkbox = JSON.row.button;
        checkbox["@label"] = label;
    }
}