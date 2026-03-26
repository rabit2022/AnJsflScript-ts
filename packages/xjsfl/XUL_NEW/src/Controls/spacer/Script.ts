import {TEMPLATES} from "../../Constants/Templates";
import {BaseControl} from "../Base/BaseControl";
import {SpacerControls} from "../Base/SpacerControls";

export class Script extends SpacerControls {
    constructor(script: Function) {
        super("script", "script");

        let source = script.toString();

        let json = this.json as typeof TEMPLATES["script"];
        json.row.script = source;

    }

}

// function f() {
//
// }
// const property1 = new Script(f);
// console.log(property1.toJSON());
// console.log(property1.id);