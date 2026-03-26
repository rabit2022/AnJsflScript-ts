import {TEMPLATES} from "../../Constants/Templates";
import {Copy} from "../../utils/copy/deepCopy";
import {XMLBuilderr} from "../../io/loader/XMLBuilderr";
import {AllControls} from "../../Constants/Templates.types";
import {IdGenerator} from "../../utils/id/uniqueID";
import {CLASS_TYPE} from "./BaseControl.types";

export class BaseControl {
    protected readonly json;
    protected id: string;
    protected _type: AllControls;
    get type(): string {
        return this._type;
    }

    protected CLASS_TYPE: CLASS_TYPE = "base";

    get CLASS() {
        return this.CLASS_TYPE;
    }

    constructor(type: AllControls, id: string) {

        this.id = IdGenerator.generate(id);
        this._type = type;
        // let type = "property";
        const template = TEMPLATES[type];
        if (!template) {
            throw new Error(`Template not found: ${type}`);
        }

        // console.info("template",template);

        const copy = Copy.deepCopy(template);
        this.json = copy;
    }


    toJSON() {
        return this.json;
    }

    toXMLString(): string {
        const builder = new XMLBuilderr(this.json);
        return builder.build();
    }
}