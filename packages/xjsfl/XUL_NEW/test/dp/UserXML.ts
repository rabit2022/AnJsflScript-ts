// import {XMLLoader} from "../loader/XMLLoader";
// import {XMLSelector} from "../loader/XMLSelector";
//
// /**
//  * Parse user-supplied XML so that XULControls are created
//  */
// export function parseUserXML(xml: string): string {
//     xml = `<temp>${xml}</temp>`;
//     const loader = new XMLLoader(xml);
//
//     // loop through control types, and attempt to find and add to controls array
//     const types = [
//         'textbox', 'popupslider',
//         'checkbox', 'colorchip',
//         'choosefile', 'button',
//         'listbox', 'menulist',
//         'radiogroup', 'targetlist',
//         'property'
//     ];
//
//     for (const type of types) {
//         // const controls = xml.get('..' + type);
//         const selector = new XMLSelector(loader.json, `$..${type}`)
//         const controls = selector.select();
//
//         if (controls.length > 0) {
//             for (var control of controls) {
//                 // variables
//                 var id = control["@id"];
//                 var value = control["@value"];
//                 // var controlXML = control.toXMLString();
//
//                 // console.log(id, value);
//
//                 // add control
//                 // this._addControl(type, id, null, control, {value: value}, null, null, true);
//             }
//         }
//     }
//
//     // xml
//     return loader.children();
// }
//
//
// // const loader = new XMLLoader("H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\core\\ui\\dialog.xul");
// // // console.log(loader.root);
// // console.log(parseUserXML(loader.build()))
//
