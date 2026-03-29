import {SimpleControls} from "../Base/SimpleControls";
import {ChoosefileAttributes} from "./types/Choosefile.types";

export class Choosefile extends SimpleControls {
    constructor(id: string, label: string|null, attributes: ChoosefileAttributes = {}) {
        super("choosefile", id, label, attributes);
    }
}