import { CompoundControls } from "../CompoundControls";
import { Attrs } from "../SimpleControls.types";

export class Listbox extends CompoundControls {
  constructor(
    id: string | null,
    label: string,
    attributes: Attrs = {},
    values: Attrs = {},
  ) {
    super("listbox", id, label, attributes, values);
  }
}


// const listbox = new Listbox("id0","label0",{flex:100},[1,2,5,8])
// // console.log(listbox.toJSON())
// // console.log(JSON.stringify(listbox.toJSON()));
// console.log(listbox.settings);

// const data={
//     "row": {
//         "label": {"@value": "Radio Group:"},
//         "radiogroup": {
//             "radio": [{
//                 "@label": "Radio 1",
//                 "@selected": "",
//                 "@value": 1,
//                 "@acceskey": ""
//             }, {"@label": "Radio 2", "@selected": "", "@value": 2, "@acceskey": ""}, {
//                 "@label": "Radio 3",
//                 "@selected": true,
//                 "@value": 3,
//                 "@acceskey": ""
//             }], "@class": "control", "@id": "radiogroup", "@tabindex": "", "@groupbox": true
//         },
//         "@template": "radiogroup"
//     }
// }
// const radios = data.row.radiogroup.radio;
//
//
// // const selectedItems = radios.filter(item => item["@selected"] === true);
//
// const selectedItem = radios.find(item => item["@selected"] === true);
//
// // console.log(selectedItem);
//
//
// const selected = JSONPath({
//     path: "$..*[?(@['@selected'] == true || @['@selected'] == 'true')]",
//     json: data,
//     resultType: 'value'
// });
//
// console.log(selected[0]);
