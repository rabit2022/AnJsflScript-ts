import {simpleControl} from "../../Constants/Templates.types";
import {Attrs} from "./SimpleControls.types";
import {BaseSettings} from "./BaseSettings";
import {IdGenerator} from "../../utils/id/uniqueID";


export class SimpleControls extends BaseSettings {

    constructor(type: simpleControl, id: string | null, label: string = "", attributes: Attrs = {}) {
        id = id || IdGenerator.generate(label);
        super(type, id);

        this.setAttributes(type, id, label, attributes);
    }
}

// let label = ''
// let a= label ? label + ' : ' : ' ';
// console.log(a);