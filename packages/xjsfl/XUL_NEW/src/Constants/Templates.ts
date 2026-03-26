// export const TEMPLATES = {
//     label: `<row template="label">
//   <label value="Label" align=""/>
// </row>`,
//
//
//     textbox: `<row template="textbox">
//   <label value="Textbox:"/>
//   <textbox class="control" id="textbox" value="" maxlength="" prompt="" size="" multiline="false" width="" flex="1"/>
// </row>`,
//
//
//     colorchip: `<row template="colorchip">
//   <label value="Colorchip:"/>
//   <colorchip class="control" id="colorchip" color="" format="hex" width="100"/>
// </row>`,
//
//
//     popupslider: `<row template="popupslider">
//   <label value="Popupslider:"/>
//   <popupslider class="control" id="popupslider" value="" minvalue="0" maxvalue="100" orientation="horz" tabindex="" width="60" flex=""/>
// </row>`,
//
//
//     checkbox: `<row template="checkbox">
//   <label value="Checkbox:"/>
//   <checkbox class="control" id="checkbox" label="Checkbox" checked="true" tabindex="" acceskey=""/>
// </row>`,
//
//
//     button: `<row template="button">
//   <label value="Button:" align="" control=""/>
//   <button class="control" id="button" label="Button" width="" flex="1" tabindex="" acceskey="" oncommand=""/>
// </row>`,
//
//
//     targetlist: `<row template="targetlist">
//   <label value="Targetlist:"/>
//   <targetlist id="targetlist" class="" width="300" height="" flex="1" pathtype="absolute"/>
//   <property id="targetlist"/>
// </row>`,
//
//
//     choosefile: `<row template="choosefile">
//   <label value="Choose File:" align="" control=""/>
//   <choosefile id="choosefile" literal="false" pathtype="" required="" size="" type="" width="" flex="1" tabindex=""/>
// </row>`,
//
//
//     listbox: `<row template="listbox">
//   <label value="Listbox:"/>
//   <listbox class="control" id="listbox" width="" flex="1" rows="6" tabindex="">
//     <listitem label="Item 1" value="1" selected=""/>
//     <listitem label="Item 2" value="2" selected=""/>
//     <listitem label="Item 3" value="3" selected=""/>
//   </listbox>
// </row>`,
//
//
//     menulist: `<row template="menulist">
//   <label value="Menu List:"/>
//   <menulist class="control" id="menulist" editable="" width="" flex="1" tabindex="" oncreate="" onsetfocus="">
//     <menupop class="control" id="menupop">
//       <menuitem label="Item 1" value="1" selected=""/>
//       <menuitem label="Item 2" value="2" selected=""/>
//       <menuitem label="Item 3" value="3" selected=""/>
//     </menupop>
//   </menulist>
// </row>`,
//
//
//     radiogroup: `<row template="radiogroup">
//   <label value="Radio Group:"/>
//   <radiogroup class="control" id="radiogroup" tabindex="" groupbox="true">
//     <radio label="Radio 1" selected="" value="1" acceskey=""/>
//     <radio label="Radio 2" selected="" value="2" acceskey=""/>
//     <radio label="Radio 3" selected="" value="3" acceskey=""/>
//   </radiogroup>
// </row>`,
//
//
//     checkboxgroup: `<row template="checkboxgroup">
//   <label value="Checkbox Group:"/>
//   <vbox class="control" groupbox="true">
//     <checkbox class="control" id="checkbox[0]" label="Checkbox 1" checked="true" tabindex="" acceskey=""/>
//     <checkbox class="control" id="checkbox[1]" label="Checkbox 2" checked="true" tabindex="" acceskey=""/>
//     <checkbox class="control" id="checkbox[2]" label="Checkbox 3" checked="true" tabindex="" acceskey=""/>
//   </vbox>
// </row>`,
//
//
//     separator: ``,
//
//
//     spacer: `<row template="spacer">
//   <spacer/>
//   <label/>
// </row>`,
//
//
//     property: ``,
//
//
//     flash: `<element template="flash">
//   <flash class="control" id="flash" src="assets/flash.swf" width="250" height="100"/>
// </element>`,
// }


import {XMLLoader} from "../io/loader/XMLLoader";

export const TEMPLATES = {
    // simpleControl
    "textbox": {
        "row": {
            "label": {"@value": "Textbox:"},
            "textbox": {
                "@class": "control",
                "@id": "textbox",
                "@value": "",
                "@maxlength": "",
                "@prompt": "",
                "@size": "",
                "@multiline": false,
                "@width": "",
                "@flex": 1
            },
            "@template": "textbox"
        }
    },
    "colorchip": {
        "row": {
            "label": {"@value": "Colorchip:"},
            "colorchip": {"@class": "control", "@id": "colorchip", "@color": "", "@format": "hex", "@width": 100},
            "@template": "colorchip"
        }
    },
    "popupslider": {
        "row": {
            "label": {"@value": "Popupslider:"},
            "popupslider": {
                "@class": "control",
                "@id": "popupslider",
                "@value": "",
                "@minvalue": 0,
                "@maxvalue": 100,
                "@orientation": "horz",
                "@tabindex": "",
                "@width": 60,
                "@flex": ""
            },
            "@template": "popupslider"
        }
    },
    "checkbox": {
        "row": {
            "label": {"@value": "Checkbox:"},
            "checkbox": {
                "@class": "control",
                "@id": "checkbox",
                "@label": "Checkbox",
                "@checked": true,
                "@tabindex": "",
                "@acceskey": ""
            },
            "@template": "checkbox"
        }
    },
    "button": {
        "row": {
            "label": {"@value": "Button:", "@align": "", "@control": ""},
            "button": {
                "@class": "control",
                "@id": "button",
                "@label": "Button",
                "@width": "",
                "@flex": 1,
                "@tabindex": "",
                "@acceskey": "",
                "@oncommand": ""
            },
            "@template": "button"
        }
    },
    "choosefile": {
        "row": {
            "label": {"@value": "Choose File:", "@align": "", "@control": ""},
            "choosefile": {
                "@id": "choosefile",
                "@literal": false,
                "@pathtype": "",
                "@required": "",
                "@size": "",
                "@type": "",
                "@width": "",
                "@flex": 1,
                "@tabindex": ""
            },
            "@template": "choosefile"
        }
    },

    //  compoundControl
    "targetlist": {
        "row": {
            "label": {"@value": "Targetlist:"},
            "targetlist": {
                "@id": "targetlist",
                "@class": "",
                "@width": 300,
                "@height": "",
                "@flex": 1,
                "@pathtype": "absolute"
            },
            "property": {"@id": "targetlist"},
            "@template": "targetlist"
        }
    },
    "listbox": {
        "row": {
            "label": {"@value": "Listbox:"},
            "listbox": {
                "listitem": [
                    // {"@label": "Item 1", "@value": 1, "@selected": ""},
                    // {"@label": "Item 2", "@value": 2, "@selected": ""},
                    // {"@label": "Item 3", "@value": 3, "@selected": ""}
                ],
                "@class": "control",
                "@id": "listbox",
                "@width": "",
                "@flex": 1,
                "@rows": 6,
                "@tabindex": ""
            },
            "@template": "listbox"
        }
    },
    "menulist": {
        "row": {
            "label": {"@value": "Menu List:"},
            "menulist": {
                "menupop": {
                    "menuitem": [
                        // {"@label": "Item 1", "@value": 1, "@selected": ""},
                        // {"@label": "Item2", "@value": 2, "@selected": ""},
                        // {"@label": "Item 3", "@value": 3, "@selected": ""}
                    ], "@class": "control", "@id": "menupop"
                },
                "@class": "control",
                "@id": "menulist",
                "@editable": "",
                "@width": "",
                "@flex": 1,
                "@tabindex": "",
                "@oncreate": "",
                "@onsetfocus": ""
            },
            "@template": "menulist"
        }
    },
    "radiogroup": {
        "row": {
            "label": {"@value": "Radio Group:"},
            "radiogroup": {
                "radio": [
                    // {"@label": "Radio 1", "@selected": "", "@value": 1, "@acceskey": ""}, {"@label": "Radio 2", "@selected": "", "@value": 2, "@acceskey": ""}, {"@label": "Radio 3", "@selected": "", "@value": 3, "@acceskey": ""}
                ], "@class": "control", "@id": "radiogroup", "@tabindex": "", "@groupbox": true
            },
            "@template": "radiogroup"
        }
    },
    "checkboxgroup": {
        "row": {
            "label": {"@value": "Checkbox Group:"},
            "vbox": {
                "checkbox": [
                    // {"@class": "control", "@id": "checkbox[0]", "@label": "Checkbox 1", "@checked": true, "@tabindex": "", "@acceskey": ""}, {"@class": "control", "@id": "checkbox[1]", "@label": "Checkbox 2", "@checked": true, "@tabindex": "", "@acceskey": ""}, {"@class": "control", "@id": "checkbox[2]", "@label": "Checkbox 3", "@checked": true, "@tabindex": "", "@acceskey": ""}
                ], "@class": "control", "@groupbox": true
            },
            "@template": "checkboxgroup"
        }
    },

    // spacer
    "separator": {row: {separator: '', '@template': 'separator'}},
    // separator:	'</rows></grid><separator /><grid><columns><column flex="1" /><column flex="2" /></columns><rows>',
    "spacer": {"row": {"spacer": "", "label": "", "@template": "spacer"}},
    "property": {"row": {"property": {"@template": "property", "@id": "property"}}},
    "label": {"row": {"label": {"@value": "Label", "@align": "","@width":100}, "@template": "label"}},
    "script":{
        "row": {
            "script": "function EMPTY() {}"
        }
    },


    // flash
    "flash": {
        "element": {
            "flash": {
                "@class": "control",
                "@id": "flash",
                "@src": "assets/flash.swf",
                "@width": 250,
                "@height": 100
            }, "@template": "flash"
        },
        "row": [
            // {"property": {"@template": "property", "@id": "property1", "@oncreate": "if(window.xjsfl)xjsfl.ui.handleEvent('0', 'create', 'property1');"}}
        ]
    },

    // custom
    "custom":{}
}


// let xml = `
//
//
//
// `;
// let loder = new XMLLoader(xml, "xml");
// // const loder = new XMLLoader("H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\assets\\templates\\xul\\controls.xul", "path");
// console.log(loder.JSON)
// console.log(JSON.stringify(loder.JSON,null, 2));