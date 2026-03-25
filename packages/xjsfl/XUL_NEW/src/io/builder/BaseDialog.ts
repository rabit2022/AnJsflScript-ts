import {DIALOG} from "../../Constants/DIALOG";
import {Copy} from "../../utils/copy/deepCopy";
import {XMLBuilderr} from "../loader/XMLBuilderr";


export class BaseDialog {
    protected readonly json;
    protected id: string;

    constructor( id: string) {

        this.id = id;

        const template = DIALOG;
        if (!template) {
            throw new Error(`Dialog not found`);
        }

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