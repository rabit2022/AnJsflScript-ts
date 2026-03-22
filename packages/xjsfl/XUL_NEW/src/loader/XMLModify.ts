import * as _ from 'lodash';
import {JSONPath} from 'jsonpath-plus';
import {XMLLoader} from "./XMLLoader";
import * as console from "node:console";


export class XMLModify {
    private pathsToDelete: string[];
    private json: any;

    constructor(json: any, path: string) {
        this.json = json;
        this.pathsToDelete = JSONPath({
            path: path, // 匹配 dialog -> content 下的所有键
            json: json,
            resultType: 'path' // 返回路径字符串数组，如 ["$['dialog']['content']['grid']"]
        });
    }

    set(newValue: any) {

        this.pathsToDelete.forEach((pathStr: string) => {
            // 【核心修复】
            // 1. 使用正则 /'([^']*)'/g 匹配所有单引号包裹的内容
            //    例如从 "$['dialog']['content']['grid']" 中提取出 ["'dialog'", "'content'", "'grid'"]
            const matches = pathStr.match(/'([^']*)'/g);

            if (!matches || matches.length === 0) {
                return; // 没找到有效路径，跳过
            }

            // 2. 去掉每个匹配项的单引号，并用单个 '.' 连接
            //    "'dialog'" -> "dialog"
            //    结果: "dialog.content.grid"
            const lodashPath = matches.map(m => m.slice(1, -1)).join('.');

            console.log(lodashPath);

            _.set(this.json, lodashPath, newValue);
        });
    }
}


// const loader = new XMLLoader("H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\assets\\templates\\xul\\dialog.xul");
// console.log(loader.root);
//
//
//
// const deleter = new XMLModify(loader.root,'$..content[@id]');
// deleter.set('controls')
//
// console.log(loader.root);
