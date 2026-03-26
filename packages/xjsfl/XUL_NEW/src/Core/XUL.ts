import {DIALOG} from "../Constants/DIALOG";
import {TEMPLATES} from "../Constants/Templates";
import {isFileUri} from "../utils/Checker/IsURL";
import {XULControl} from "./XULControl";
import {parseFunction} from "../utils/paser/parseFunction";
import {XMLLoader} from "../io/loader/XMLLoader";
import {parseUserXML} from "../utils/paser/parseUserXML";


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

    static factory(props: Function | string): XUL {
        /*
            Arguments:
            String, accept, fail	- get controls, labels and values from string @see XUL.add()
            accept, fail			- build controls from function params
            Object, accept, fail	- build controls from object (not yet implemented)
            //TODO implement building from Object
        */

        var xul = new XUL();

        if (xul.xml && props) {
            if (typeof props == 'function') {
                let FUNCTION = props;

                // parse and assign controls
                let functionInfo = parseFunction(FUNCTION);
                for (const param of functionInfo.params) {
                    xul.addTextbox(param);
                }

                // title
                xul.setTitle('Dialog for "' + FUNCTION.name + '"');
            }
            // props is a string, load XML if is a URI, or use shorthand notation to create controls
            else if (typeof props == 'string') {
                if (isFileUri(props)) {
                    xul.load(props);
                } else {
                    xul.add(props);
                }
            } else {
                throw new Error("Unable to parse XUL format." + typeof props);
            }
        }

        return xul;
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

    /**
     * Replace the standard XML dialog template
     */
    setXML(xml: string): this {
        // variables
        this.controls = {};
        this.events = {};
        this.settings = {};


        // xml
        var nodes = xml;
        this.content = parseUserXML(nodes);

        // add new controls
        return this;
    }

    toString() {
        // return '[object XUL id="' +this.id+ '" title="' +(this.xml ? String(this.xml.@title).trim() : '')+ '" controls:' +Object.keys(this.controls).length+ ']';
        return "[object XUL]"
    }

    static toString(): string {
        return '[class XUL]';
    }
}


