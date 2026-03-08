/**
 * @file: UI.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/8 21:39
 * @project: AnJsflScript-ts
 * @description:
 */

// import { XMLParser } from "fast-xml-parser";
// import * as console from "node:console";
//
// const xmlData = `
//   <employees>
//     <employee id="1">
//       <name>Tove</name>
//       <age>32</age>
//     </employee>
//   </employees>
// `;
//
// const parser = new XMLParser();
// const jsonObj = parser.parse(xmlData);
//
// // 现在你可以像操作普通 JS 对象一样操作 XML 数据了
// console.log(jsonObj.employees.employee.name); // 输出: Tove
//
// // 甚至可以定义接口获得类型提示
// interface Employee {
//     employees: {
//         employee: {
//             id: string;
//             name: string;
//             age: number;
//         }
//     }
// }
// const typedData = jsonObj as Employee;
// console.log(typedData)
//

// import DIALOGUE from '../asset/config.json' with {type: 'json'};
import DIALOGUE from "../asset/config.json";

console.log(DIALOGUE);
