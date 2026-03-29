import {SimpleControls} from "../Base/SimpleControls";
import {TextBoxAttributes} from "./types/TextBox.types";

export class Textbox extends SimpleControls {
    constructor(id: string, label: string|null, attributes: TextBoxAttributes = {}) {
        super("textbox", id, label, attributes);
    }

}