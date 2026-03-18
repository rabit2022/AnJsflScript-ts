// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
//
//
// const obj = new Point(10,20);
//
//
//
// const js2xmlparser = require("js2xmlparser");
// const xml = js2xmlparser.parse("root", obj);
// const xml = js2xmlparser.parse("root",["hello"]);
// const xml = js2xmlparser.parse("root", obj);
// const xml = js2xmlparser.parse("root", obj);
// <root>
//     <user>
//         <name>John</name>
//          <age>30</age>
// </user>
// </root>


// const o2x = require('object-to-xml');
// const xml = o2x(obj);
// <user>
// <name>John</name>
// <age>30</age>
// </user>



const js2xmlparser = require("js2xmlparser");


// const value = [true,"jjjj",{name:"foo"},new Date()];
const value = undefined



const xml = js2xmlparser.parse("root", value);
console.log(xml);