import {TEMPLATES} from "../../Constants/Templates";
import {SpacerControls} from "../Base/SpacerControls";

export class Property extends SpacerControls {

    constructor(id: string) {
        super("property", id);

        var xml = (this.json as typeof TEMPLATES["property"]).row.property;
        xml["@id"] = id;
    }

}

// const property = new Property("property");
// console.log(property.toJSON());