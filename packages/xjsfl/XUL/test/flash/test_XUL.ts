/**
 * @file: test_XUL.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import XUL from "@xjsfl/XUL";

XUL.factory()
    .setTitle("Dialog with initilize event")
    .addTextbox("Text", "text")
    // .addEvent('initialize', onInitialize)
    .show();
