import {JSONPath} from 'jsonpath-plus';


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


// const loader = new XMLLoader("H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\core\\ui\\dialog.xul");
// // console.log(loader.JSON);
//
// const selector = new XMLSelector(loader.JSON,"$..row")
// console.log(selector.select());