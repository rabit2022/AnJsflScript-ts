/**
 * @file: test.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import { EditSession } from "@anjsfl-ts/EditSession";
import { UI } from "@xjsfl/UI";

function testEdit() {
    using edit = new EditSession(UI.dom);
    console.log("Test edit mode");
}
testEdit();
