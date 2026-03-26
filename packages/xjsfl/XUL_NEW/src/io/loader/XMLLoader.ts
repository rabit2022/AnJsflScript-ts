import * as fs from 'fs';
import {XMLObject} from "./XMLObject";
import {toPath} from "../../utils/Checker/IsPath";

export type PathType = "path" | "url" | "xml";

export class XMLLoader extends XMLObject {
    constructor(pathOrXML: string, type: PathType) {
        let finalPath = "";
        let xmlStr = "";
        switch (type) {
            case "url":
                finalPath = toPath(pathOrXML);
                xmlStr = fs.readFileSync(finalPath, 'utf-8');
                break;
            case "path":
                finalPath = pathOrXML;
                xmlStr = fs.readFileSync(finalPath, 'utf-8');
                break;
            case "xml":
                xmlStr = pathOrXML
                break;

            default:
                throw new Error("Unknown type '" + type + "'");
        }

        super(xmlStr);
    }
}


// const loader = new XMLLoader("H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\assets\\templates\\xul\\dialog.xul");
// console.log(JSON.stringify(loader.root));