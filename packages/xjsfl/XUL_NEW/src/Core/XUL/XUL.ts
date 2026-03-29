import {DIALOG} from "../../Constants/DIALOG";
import {TEMPLATES} from "../../Constants/Templates";
import {XULControl} from "../XULControl";
import {XULEventBus} from "../../events/XULEventBus";


export class XUL {
    static templates = TEMPLATES;
    // public
    public xml = DIALOG;
    public controls: Record<string, XULControl> = {}
    public settings = {};

    // private
    // private events = {};
    private events = new XULEventBus();
    private rules = {};


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

    toString() {
        // return '[object XUL id="' +this.id+ '" title="' +(this.xml ? String(this.xml.@title).trim() : '')+ '" controls:' +Object.keys(this.controls).length+ ']';
        return "[object XUL]"
    }
}


