import {CompoundControls} from "../Base/CompoundControls";
import {ValuesType} from "./types/Listbox.types";
import {CheckboxgroupAttributes} from "./types/Checkboxgroup.types";

export class Checkboxgroup extends CompoundControls {
    constructor(
        id: string | null,
        label: string,
        attributes: CheckboxgroupAttributes = {},
        values: ValuesType = {},
    ) {
        super("checkboxgroup", id, label, attributes, values);
    }
}