import {simpleControl} from "../Constants/Templates.types";
import {Attrs} from "./SimpleControls.types";
import {makeId} from "../utils/id/ID";
import {BaseSettings} from "./BaseSettings";


export class SimpleControls extends BaseSettings {

    constructor(type: simpleControl, id: string | null, label: string = "", attributes: Attrs = {}) {
        id = id || makeId(label);
        super(type, id);

        this.setAttributes(type, id, label, attributes);
    }
}

// let label = ''
// let a= label ? label + ' : ' : ' ';
// console.log(a);