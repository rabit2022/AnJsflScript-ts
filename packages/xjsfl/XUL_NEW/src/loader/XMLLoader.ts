import * as fs from 'fs';
import {isValidPath, toPath} from "../Checker/IsPath";
import {XMLObject} from "../paser/XMLPaser";
import {isFileUri} from "../Checker/IsURL";


export class XMLLoader extends XMLObject {
    constructor(pathOrURIOrXML: string) {
        let finalPath = pathOrURIOrXML;
        if (isFileUri(pathOrURIOrXML)) {
            finalPath = toPath(pathOrURIOrXML);
        }

        let xmlStr = "";
        if (isValidPath(finalPath)) {
            xmlStr = fs.readFileSync(finalPath, 'utf-8');
        } else {
            xmlStr = pathOrURIOrXML;
        }

        super(xmlStr);
    }

    name(): string {
        return Object.keys(this.json)[0];
    }

    children() {
        let key = Object.keys(this.json)[0];
        return this.json[key];
    }
}


// const loader = new XMLLoader("H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\assets\\templates\\xul\\dialog.xul");
// console.log(JSON.stringify(loader.root));