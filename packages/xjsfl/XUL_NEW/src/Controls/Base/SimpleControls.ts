import {simpleControl} from "../../Constants/Templates.types";
import {Attrs} from "./SimpleControls.types";
import {BaseSettings} from "./BaseSettings";
import {IdGenerator} from "../../utils/id/uniqueID";
import {CLASS_TYPE} from "./BaseControl.types";
import {getJsonFromTemplate} from "../../utils/paser/getJson";


export class SimpleControls extends BaseSettings {
    protected CLASS_TYPE: CLASS_TYPE = "simple";

    constructor(type: simpleControl, id: string | null, label: string|null = "", attributes: Attrs = {}) {
        id = id || IdGenerator.generate(label!);

        let json = getJsonFromTemplate(type);


        super(type, id, json);

        this.setAttributes(type, id, label!, attributes);
    }
}

// let label = ''
// let a= label ? label + ' : ' : ' ';
// console.log(a);