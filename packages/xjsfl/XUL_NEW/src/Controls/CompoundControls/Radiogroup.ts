import {CompoundControls} from "../Base/CompoundControls";
import {ValuesType} from "./types/Listbox.types";
import {RadiogroupAttributes} from "./types/Radiogroup.types";

export class Radiogroup extends CompoundControls {
    constructor(
        id: string | null,
        label: string,
        attributes: RadiogroupAttributes = {},
        values: ValuesType = {},
    ) {
        super("radiogroup", id, label, attributes, values);
        this.setSettings();

    }
}