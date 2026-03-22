

export const DIALOG = {
    "dialog": {
        "content": {
            // "grid": {
            //     "columns": {
            //         "column": [{"@flex": 1}, {"@flex": 2}],
            //         "@id": "columns"
            //     }, "rows": {"@id": "controls"}
            // }
            "@id": 'controls'
        },
        "script": "if(window.xjsfl){xjsfl.ui.handleEvent({xulid}, 'initialize');}",
        "@id": "dialog",
        "@title": "",
        "@buttons": "accept,cancel"
    }
}



// DIALOG.dialog.content["@id"] = "dialog";
// console.log(DIALOG);