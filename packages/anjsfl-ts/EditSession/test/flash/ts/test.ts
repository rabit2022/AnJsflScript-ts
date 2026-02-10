import {EditSession} from "@anjsfl-ts/EditSession";
import {UI} from "@xjsfl/UI";

function testEdit() {
    using edit = new EditSession(UI.dom);
    console.log("Test edit mode");
}
testEdit();


