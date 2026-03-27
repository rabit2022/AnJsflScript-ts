import {DIALOG} from "../../Constants/DIALOG";
import {TEMPLATES} from "../../Constants/Templates";
import {XULControl} from "../XULControl";
import {XMLLoader} from "../../io/loader/XMLLoader";


export class XUL {
    static templates = TEMPLATES;
    // public
    public xml = DIALOG;
    public controls: Record<string, XULControl> = {}
    public settings = {};
    public flashData = null;
    // properties
    public title = 'xJSFL';
    // private
    private events = {};
    private rules = {};
    private columns = [100, 180]
    private error = null;
    private id = -1;
    // template
    private content = '';
    private separator = '</rows></grid><separator /><grid><columns><column flex="1" /><column flex="2" /></columns><rows>';
    // flags
    private built = false;
    private open = false;
    private accepted = false;

    constructor(title: string = 'xJSFL') {
        //TODO Allow a file: uri to be passed into the constructor

        //TODO Consider making XUL driver-based, so basic controls are constructed using the core, but can be wrapped with additional markup using driver-based methods
        //TODO Alternatively, have an additional XULBuilder class, so code and presentation are kept separate

        //TODO Add functionality for basic arithmetic to be performed inside textboxes

        //TODO columns flex properly, and ensure appropriate elements flex to fill

        // set title if provided
        this.setTitle(title);

        // return
        return this;
    }

    /**
     * The values of the dialog controls parsed into their correct data types
     */
    get values() {
        // return null if a settings object doesn't exist (the user cancelled)
        if (!this.settings) {
            return null;
        }

        // if not, grab values
        const values: Record<string, any> = {};
        for (const [id, control] of Object.entries(this.controls)) {
            if (control.enumerable) {
                values[id] = control.value;
            }
        }

        // return
        return values;
    }

    static toString(): string {
        return '[class XUL]';
    }

    /**
     * Loads a dialog in from an external file
     */
    load(pathOrURI: string): this {
        const xml = new XMLLoader(pathOrURI, "url");

        let root = xml.JSON;
        // grab nodes
        if (xml.name() === 'dialog') {
            const title = root.dialog["@title"];

            if (title.length()) {
                this.setTitle(title);
            }
        }


        // var nodes = xml.root.*;
        var nodes = xml.build();

        // set nodes
        this.setXML(nodes);
        return this;
    }

    toString() {
        // return '[object XUL id="' +this.id+ '" title="' +(this.xml ? String(this.xml.@title).trim() : '')+ '" controls:' +Object.keys(this.controls).length+ ']';
        return "[object XUL]"
    }
}


