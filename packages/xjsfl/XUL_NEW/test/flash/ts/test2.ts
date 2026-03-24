import {SimpleControls} from "../../../src/Controls/SimpleControls";
import {XULBuilder} from "../../../src/io/builder/XULBuilder";

const builder = new XULBuilder("dialog1", "登录");

// 创建控件
const username = new SimpleControls("textbox", "username", "用户名", {
    value: "admin"
});

const password = new SimpleControls("textbox", "password", "密码", {
    maxlength: 20
});

// console.log(JSON.stringify(username.toJSON()))
// 组装
builder
    .add(username.toJSON())
    .add(password.toJSON());

// console.log(JSON.stringify(builder.toJSON()));
console.log(builder.toXML())

let json = {
    "row": {
        "label": {"@value": "用户名"},
        "textbox": {
            "@class": "control",
            "@id": "username",
            "@value": "admin",
            "@maxlength": "",
            "@prompt": "",
            "size": "",
            "@multiline": false,
            "@width": "",
            "@flex": 1
        },
        "@template": "textbox"
    }
}

let json2 = {
    "dialog": {
        "content": {
            "grid": {
                "columns": {"column": [{"@flex": 1}, {"@flex": 2}], "@id": "columns"},
                "rows": [{
                    "row": {
                        "label": {"@value": "用户名"},
                        "textbox": {
                            "@class": "control",
                            "@id": "username",
                            "@value": "admin",
                            "@maxlength": "",
                            "@prompt": "",
                            "@size": "",
                            "@multiline": "fa",
                            "@width": "",
                            "@flex": 1
                        },
                        "@template": "textbox"
                    }
                }, {
                    "row": {
                        "label": {"@value": "密码"},
                        "textbox": {
                            "@class": "control",
                            "@id": "password",
                            "@value": "",
                            "@maxlength": 20,
                            "@prompt": "",
                            "@size": "",
                            "@multiline": false,
                            "@width": "",
                            "@flex": 1
                        },
                        "@template": "textbox"
                    }
                }]
            }, "@id": "controls"
        },
        "script": "if(window.xjsfl){xjsfl.ui.handleEvent({xulid}, 'initialize');}",
        "@id": "dialog1",
        "@title": "登录",
        "@buttons": "aept,cancel"
    }
}
