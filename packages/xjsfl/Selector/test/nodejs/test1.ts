/**
 * @file: test1.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */
import * as console from "node:console";

// nodejs TypeScript file test1.ts
const chunker =
    /(:([\-\w]+)\((.+)\))|([A-Za-z0-9_*][^:\[]*)|\/([\-\w\s\/_*{|}]+)|\.([*A-Z][\w*]+)|\.([a-z][\w.*]+)|:([a-z]\w+)|\[(([\w\.]+)([\^$*!=<>]{1,2})?(.+?)?)\]/g;

const tests = [
    ":not(.hidden)", // 1,2,3
    "div", // 4
    "/user/profile", // 5
    ".Button", // 6
    ".com.example.Test", // 7
    ":hover", // 8
    "[type=text]" // 9,10,11,12
];

tests.forEach((str) => {
    console.log(`\n=== Testing: ${str} ===`);
    let exec;
    while ((exec = chunker.exec(str)) !== null) {
        // console.log({
        //     full: match[0],   // 完整匹配
        //     1: match[1],      // combo
        //     2: match[2],      // type
        //     3: match[3],      // selector
        //     4: match[4],      // name
        //     5: match[5],      // path
        //     6: match[6],      // Class
        //     7: match[7],      // package
        //     8: match[8],      // pseudo
        //     9: match[9],      // attribute
        //     10: match[10],    // attr name
        //     11: match[11],    // operator
        //     12: match[12],    // value
        // });
        const result = {
            full: exec[0], // 完整匹配
            combo: exec[1], // :not(...)
            combo_type: exec[2], // not
            combo_selector: exec[3], // .hidden
            name: exec[4], // div
            path: exec[5], // /user/xx
            Class: exec[6], // .Button
            package: exec[7], // .com.xxx
            pseudo: exec[8], // :hover
            attribute: exec[9], // [type=text]
            attribute_attrName: exec[10], // type
            attribute_operator: exec[11], // =
            attribute_value: exec[12] // text
        };
        console.log(result);
    }
});
