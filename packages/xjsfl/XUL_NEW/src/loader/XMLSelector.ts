import * as _ from 'lodash';
import {JSONPath} from 'jsonpath-plus';
import {XMLLoader} from "./XMLLoader";
import * as console from "node:console";


export class XMLSelector {
    private pathsToDelete: any[];
    private json: any;

    constructor(json: any, path: string) {
        this.json = json;
        this.pathsToDelete = JSONPath({
            path: path, // 匹配 dialog -> content 下的所有键
            json: json,
            resultType: 'value' // 返回路径字符串数组，如 ["$['dialog']['content']['grid']"]
        });
    }

    select() {
        return this.pathsToDelete;
    }
}


//
// const loader = new XMLLoader("H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\core\\ui\\dialog.xul");
// // console.log(loader.root);
//
// const selector = new XMLSelector(loader.json,"$..radiogroup")
// console.log(selector.select().length);