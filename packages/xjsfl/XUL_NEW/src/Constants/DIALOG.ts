export const DIALOG = {
    "dialog": {
        "content": {
            "grid": {
                "columns": {
                    "column": [{"@flex": 1}, {"@flex": 2}],
                    "@id": "columns"
                },
                "rows": {
                    "row": [],
                    "@id": "controls"
                }
                //"row": {"@id": "controls"}
            },
            "@id": 'controls'
        },
        "script": "if(window.xjsfl){xjsfl.ui.handleEvent({xulid}, 'initialize');}",
        "@id": "dialog",
        "@title": "",
        "@buttons": "accept,cancel",
        "@width": 100,
        "@height": 200,
    }
}


// DIALOG.dialog.content["@id"] = "dialog";
// console.log(DIALOG);