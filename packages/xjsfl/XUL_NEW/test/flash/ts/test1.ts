import console from "node:console";
import {XMLLoader} from "../../../src/io/loader/XMLLoader";

const loader = new XMLLoader("./dialog.xul");
console.log(JSON.stringify(loader.JSON))


let json = {
    "dialog": {
        "content": {
            "grid": {
                "columns": {"column": [{"@flex": 1}, {"@flex": 2}], "@id": "columns"},
                "rows": {
                    "row": [{
                        "label": {"@value": "Text00000 :", "@width": 100},
                        "textbox": {
                            "@class": "control",
                            "@id": "text00000",
                            "@value": "",
                            "@maxlength": "",
                            "@prompt": "kb,b,",
                            "@size": "",
                            "@multiline": false,
                            "@width": 180,
                            "@flex": 1,
                            "@oncreate": "if(window.xjsfl)xjsfl.ui.handleEvent('0', 'create', 'text00000');",
                            "@onchange": "if(window.xjsfl)xjsfl.ui.handleEvent('0', 'change', 'text00000');"
                        },
                        "@template": "textbox"
                    },
                        {
                        "label": {"@value": "Text00001 :", "@width": 100},
                        "textbox": {
                            "@class": "control",
                            "@id": "text00001",
                            "@value": "",
                            "@maxlength": "",
                            "@prompt": "kb,b,",
                            "@size": "",
                            "@multiline": false,
                            "@width": 180,
                            "@flex": 1,
                            "@oncreate": "if(window.xjsfl)xjsfl.ui.handleEvent('0', 'create', 'text00001');",
                            "@onchange": "if(window.xjsfl)xjsfl.ui.handleEvent('0', 'change', 'text00001');"
                        },
                        "@template": "textbox"
                    }],
                    "@id": "controls"
                }
            }
        },
        "script": "if(window.xjsfl)\n\t\t{\n\t\txjsfl.ui.handleEvent(0, 'initialize');\n\t\t}",
        "property": {"@id": "xulid", "@value": 0},
        "@id": "dialog",
        "@title": "Compound control values",
        "@buttons": "accept,cancel"
    }
}
