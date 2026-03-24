import {CompoundControls} from "../CompoundControls";
import {MenulistAttributes} from "./types/Menulist.types";
import {ValuesType} from "./types/Listbox.types";

export class Menulist extends CompoundControls {
    constructor(
        id: string | null,
        label: string,
        attributes: MenulistAttributes = {},
        values: ValuesType = {},
    ) {
        super("menulist", id, label, attributes, values);
        this.setSettings();

    }
}


// const listbox = new Menulist("id0","label0",{flex:100},[1,2,5,8])
// console.log(listbox.toJSON())
// console.log(JSON.stringify(listbox.toJSON()));
// console.log(listbox.settings);