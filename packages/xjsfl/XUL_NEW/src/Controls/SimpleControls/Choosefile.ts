import {SimpleControls} from "../SimpleControls";
import {ChoosefileAttributes} from "./types/Choosefile.types";

export class Choosefile extends SimpleControls {
    constructor(id: string, label: string, attributes: ChoosefileAttributes = {}) {
        super("choosefile", id, label, attributes);
    }
}