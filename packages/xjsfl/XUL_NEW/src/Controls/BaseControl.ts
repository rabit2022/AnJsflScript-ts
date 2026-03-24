import {TEMPLATES} from "../Constants/Templates";
import {Copy} from "../utils/copy/deepCopy";
import {XMLBuild} from "../io/loader/XMLBuild";
import {compoundControl, simpleControl} from "../Constants/Templates.types";

export class BaseControl {
    protected readonly json;
    protected id: string;
    protected type: simpleControl | compoundControl | "property";

    constructor(type: simpleControl | compoundControl | "property", id: string) {

        this.id = id;
        this.type = type;
        // let type = "property";
        const template = TEMPLATES[type];
        if (!template) {
            throw new Error(`Template not found: ${type}`);
        }

        const copy = Copy.deepCopy(template);
        this.json = copy;
    }


    toJSON() {
        return this.json;
    }

    toXMLString(): string {
        const builder = new XMLBuild(this.json);
        return builder.build();
    }
}