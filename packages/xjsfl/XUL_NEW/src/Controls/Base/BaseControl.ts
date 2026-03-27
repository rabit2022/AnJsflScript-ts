import {XMLBuilderr} from "../../io/loader/XMLBuilderr";
import {AllControls} from "../../Constants/Templates.types";
import {IdGenerator} from "../../utils/id/uniqueID";
import {CLASS_TYPE} from "./BaseControl.types";

export class BaseControl {
    protected readonly json;
    protected id: string;
    protected CLASS_TYPE: CLASS_TYPE = "base";

    constructor(type: AllControls, id: string, json: any) {

        this.id = IdGenerator.generate(id);
        this._type = type;
        this.json = json;
    }

    protected _type: AllControls;

    get type(): string {
        return this._type;
    }

    get CLASS() {
        return this.CLASS_TYPE;
    }

    toJSON() {
        return this.json;
    }

    toXMLString(): string {
        const builder = new XMLBuilderr(this.json);
        return builder.build();
    }
}