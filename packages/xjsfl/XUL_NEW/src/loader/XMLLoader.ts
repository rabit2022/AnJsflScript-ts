import * as fs from 'fs';
import {toPath} from "../Checker/IsPath";
import {XML} from "../paser/XMLPaser";


export class XMLLoader {
    public paser: XML;

    get root() {
        return this.paser.json;
    }

    constructor(pathOrURI: string) {
        let path = toPath(pathOrURI);
        const xmlStr = fs.readFileSync(path, 'utf-8');

        this.paser = new XML(xmlStr);
    }

    name(): string {
        return Object.keys(this.root)[0];
    }
}


