import {parseFunction} from "../../utils/paser/parseFunction";
import {isFileUri} from "../../utils/Checker/IsURL";
import {XUL} from "../XUL/XUL";

export class XULFactory {
    static create(props: Function | string): XUL {
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
}