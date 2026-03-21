import {DIALOG} from "../Constants/DIALOG";
import {Paser} from "../paser/XMLPaser";
import {TEMPLATES} from "../Constants/Templates";
import * as console from "node:console";
import {parseFunction} from "../paser/Function";
// import {XMLPaser} from "../paser/XMLPaser";

export class XUL {
    // public
    public xml = new Paser(DIALOG);
    public controls = {};
    public settings = {};
    public flashData = null;


    // private
    private events = {};
    private rules = {};
    private columns = [100, 180]
    private error = null;
    private id = -1;

    // template
    private content=	'';
    private separator=	'</rows></grid><separator /><grid><columns><column flex="1" /><column flex="2" /></columns><rows>';

    // properties
    public title = 'xJSFL';
    // private error=		null;

    // flags
    private built=		false;
    private open=		false;
    private accepted=	false;

    static templates = TEMPLATES;
    constructor(title: string='xJSFL') {
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

    setTitle(title:string='xJSFL') {
        if (this.xml) {
            const dialogNode = this.xml.json.dialog;

            dialogNode["@title"] = ' ' + title;
            this.title = title;
        }
        return this;
    }

    static factory(props:Function)
    {
        /*
            Arguments:
            String, accept, fail	- get controls, labels and values from string @see XUL.add()
            accept, fail			- build controls from function params
            Object, accept, fail	- build controls from object (not yet implemented)
            //TODO implement building from Object
        */

        var xul = new XUL();

        if(xul.xml && props)
        {
            // if props is a function, set the dialog title to the function name, and create textfields per function argument
            if(typeof props == 'function')
            {
                let FUNCTION = props;

                // parse and assign controls
                let functionInfo = parseFunction(FUNCTION);
                for (const param of functionInfo.params){
                    xul.addTextbox(param);
                }

                // title
                xul.setTitle('Dialog for "' + FUNCTION.name + '"');
            }

            // // props is XML, use set XML
            // else if(typeof props == 'xml')
            // {
            //     xul.setXML(props);
            // }
            // props is URI, load XML
            else if(props instanceof URI)
            {
                xul.load(props);
            }

            // props is a string, load XML if is a URI, or use shorthand notation to create controls
            else if(typeof props == 'string')
            {
                if(URI.isURI(props))
                {
                    xul.load(props);
                }
                else
                {
                    xul.add(props);
                }
            }

            // return
            return xul;
        }

        // return
        return xul;
    }


    /**
     * Loads a dialog in from an external file
     * @param	{String}	pathOrURI	A valid path or URI
     * @param	{URI}		pathOrURI	A URI instance
     * @returns	{XUL}					The XUL dialog
     */
    load(pathOrURI)
{
    // get URI
    var xml = XjsflFile.load(pathOrURI);

    // grab nodes
    if(xml.name() == 'dialog')
        {
            var title = xml.@title;
            if(title.length())
        {
            this.setTitle(title);
        }
    }
    var nodes = xml.*;

    // set nodes
    this.setXML(nodes);
    return this;
},
    /**
     * @type {Object} The values of the dialog controls parsed into their correct data types
     */
    get values()
    {
        // return null if a settings object doesn't exist (the user cancelled)
        if( ! this.settings )
        {
            return null;
        }

        // if not, grab values
        var values = {};
        for(var id in this.controls)
        {
            var control = this.controls[id];
            if(control.enumerable)
            {
                values[id] = control.value;
            }
        }

        // return
        return values;
    }


    toString(): string {
        return '[class XUL]';
    }

}


