// // XUL 类型来自项目环境
// import {parseValue} from "./utils";
// import {processCompoundElements} from "./XUL/XULControl_constructor";
//
//
// interface XULElementItem {
//     label: string;
//     value: any;
//     id: string;
// }
//
// // Main Class --------------------------------------------------
// export class XULControl {
//
//     public id: string;/*The node id attribute of the control*/
//     public type: string;/*The XML node type of the control*/
//
//     public enumerable: boolean;/*enumerated for a value from XUL.values*/
//     public compound: boolean;/*复合控件*/
//     public elements: XULElementItem[] = {} as XULElementItem[];
//
//     private _xml: string;
//     private _xul: XUL;
//
//     constructor(id: string, type: string, xul: XUL, xml: XML) {
//         this.id = id;
//         this.type = type;
//         this._xul = xul;
//         this._xml = xml;
//
//         this.enumerable = !/^button|flash$/.test(type);
//         this.compound = /^radiogroup|checkboxgroup|menulist|listbox$/.test(type);
//
//         // 处理复合控件 items
//         if (this.compound) {
//             this.elements = processCompoundElements(xml, type) as XULElementItem[];
//         }
//     }
//
//     // --------------------------
//     // Getters / Setters
//     // --------------------------
//
//     getXUL() {
//         return this._xul;
//     }
//
//     getXML() {
//         return this._xml;
//     }
//
//     get rawValue(): string{
//         const settings = this._xul.settings;
//         const open = settings && settings.dismiss === undefined;
//         const value = open ? fl.xmlui.get(this.id) : settings[this.id];
//
//         return value;
//     }
//
//     get value(): any {
//         const settings = this._xul.settings;
//         const open = settings && settings.dismiss === undefined;
//
//         let value:any = this.rawValue;
//
//         switch (this.type) {
//             case "checkboxgroup":
//                 const arr: any[] = [];
//                 if (this.elements) {
//                     Object.values(this.elements).forEach((element) => {
//                         const state = open ? fl.xmlui.get(element.id) : settings[element.id];
//                         if (state === "true") {
//                             arr.push(element.value);
//                         }
//                     });
//                 }
//                 value = arr;
//                 break;
//
//             case "colorchip":
//                 value = value.toString().startsWith("0x")
//                     ? parseInt(value, 16)
//                     : value.substring(1);
//                 break;
//
//             case "popupslider":
//                 value = parseInt(value);
//                 value = isNaN(value) ? null : value;
//                 break;
//
//             case "textbox":
//             case "checkbox":
//             case "targetlist":
//                 value = parseValue(value);
//                 if (this.type === "textbox" && typeof value === "string") {
//                     value = value.replace(/\r\n/g, "\n");
//                 }
//                 break;
//
//             case "choosefile":
//                 value = value.replace(/unknown:/, "");
//                 break;
//
//             default:
//                 value = parseValue(value);
//         }
//
//         return typeof value === "string" && value === "" ? null : value;
//     }
//
//     set value(value: any) {
//
//         switch (this.type) {
//             case "checkboxgroup":
//                 if (this.elements) {
//                     Object.values(this.elements).forEach(element => {
//                         const state = value.some(
//                             (v: any) => String(v) === String(element.value)
//                         );
//                         fl.xmlui.set(element.id, state);
//                     });
//                 }
//                 break;
//
//             case "choosefile":
//                 break;
//
//             default:
//                 fl.xmlui.set(this.id, value);
//         }
//     }
//
//     // visible
//     set visible(state: boolean) {
//         fl.xmlui.setVisible(this.id, state);
//     }
//
//     get visible(): boolean {
//         return fl.xmlui.getVisible(this.id);
//     }
//
//     // enabled
//     set enabled(state: boolean) {
//         fl.xmlui.setEnabled(this.id, state);
//     }
//
//     get enabled(): boolean {
//         return fl.xmlui.getEnabled(this.id);
//     }
//
//     // compound related --------------------------------------------------
//
//     get values(): any[] {
//         if (!this.elements) return [];
//         return Object.values(this.elements).map(e => e.value);
//     }
//
//     set values(values: Object[] | string[]) {
//         if (!/^menulist|listbox$/.test(this.type)) return;
//
//         const elements: XULElementItem[] = [];
//
//         Object.values(values).forEach((v) => {
//             if (typeof v === "object") {
//                 for (const label in v) {
//                     elements.push({label, value: v[label], id: ""});
//                 }
//             } else {
//                 elements.push({label: v, value: v, id: ""});
//             }
//         });
//
//
//         fl.xmlui.setControlItemElements(this.id, elements);
//
//         this.elements = elements;
//         this.selectedIndex = 0;
//     }
//
//     set selectedIndex(index: number) {
//         if (this.compound) {
//             this.value = this.values[index];
//         }
//     }
//
//     get selectedIndex(): number {
//         if (!this.compound) return -1;
//         return this.values.indexOf(this.value);
//     }
//
//     // validation ---------------------------------------------------------
//
//     update(settings: Record<string, any>) {
//         const value = settings[this.id];
//
//         switch (this.type) {
//             case "checkboxgroup":
//                 if (this.elements) {
//                     Object.values(this.elements).forEach((element) => {
//                         var id = element.id;
//                         var state = settings[id];
//                         fl.xmlui.set(id, state);
//                     });
//                 }
//                 break;
//
//             case "checkbox":
//                 fl.xmlui.set(this.id, value || false);
//                 break;
//             case 'choosefile':
//             case 'colorchip':
//             case 'popupslider':
//             case 'textbox':
//             case 'targetlist':
//             default:
//                 fl.xmlui.set(this.id, value || "");
//         }
//     }
//
//     validate(): string | null {
//         let valid = true;
//
//         switch (this.type) {
//             case "popupslider":
//                 valid = this.value !== null;
//                 break;
//
//             case "textbox":
//             case "expression":
//             case "colorchip":
//                 if (String(this.rawValue).trim() === "") valid = false;
//                 break;
//         }
//
//         return valid ? null : `Field "${this.id}" is required`;
//     }
//
//     toString() {
//         return `[object XULControl id="${this.id}" type="${this.type}" value="${this.value}"]`;
//     }
// }
//
