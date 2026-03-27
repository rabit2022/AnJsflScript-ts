import {XMLBuilderr} from "../loader/XMLBuilderr";
import {IdGenerator} from "../../utils/id/uniqueID";


export class BaseDialog {
    protected readonly json;
    protected id: string;

    constructor(id: string, json: any) {
        this.json = json;
        this.id = IdGenerator.generate(id);
    }


    toJSON() {
        return this.json;
    }

    toXMLString(): string {
        const builder = new XMLBuilderr(this.json);
        return builder.build();
    }
}