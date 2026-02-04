import * as process from 'process';

import {UI} from "@xjsfl/UI";
import {CheckDocument} from "@anjsfl/validation";

const result = CheckDocument(UI.dom);

if (result.isOk()) {
    const doc = result.unwrap(); // 类型是 Document
    console.log("文档有效:", doc);
} else {
    const errorMsg = result.unwrapErr(); // 类型是 string
    console.error("文档无效:", errorMsg);
    process.exit();
}