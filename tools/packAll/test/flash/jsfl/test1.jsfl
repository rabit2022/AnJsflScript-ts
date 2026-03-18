// iife file test1.jsfl
(function () {
    /**
     * Serializes values to XML so they can be passed to Flash and be deserialized to values again
     * @param    {Value}        value                Any value
     * @param    {Boolean}    allowRecursive        An optional flag to allow recursive structures to be serialised
     * @returns    {String}                        An XML String
     */
    function serializeToXMLString(value, allowRecursive) {
        // stack to prevent recursion
        var stack = [];
        allowRecursive = !!allowRecursive;

        // utilities

        function escapeXML(xml) {
            return xml
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/\'/g, "&apos;");
        }

        function objectToXML(obj) {
            stack.push(obj);
            var str = "<object>";
            for (var prop in obj) {
                str += "<property id=\"" + prop + "\">" + valueToXML(obj[prop]) + "</property>";
            }
            stack.pop();
            return str + "</object>";
        }

        function arrayToXML(arr) {
            stack.push(arr);
            var str = "<array>";
            for (var i = 0; i < arr.length; i++) {
                str += "<property id=\"" + i + "\">" + valueToXML(arr[i]) + "</property>";
            }
            stack.pop();
            return str + "</array>";
        }

        function valueToXML(value) {
            var type = typeof value;

            if (value === null) {
                return "<null />";
            } else if (type === "object") {
                // primitive object types
                if (value instanceof Date) {
                    return "<date>" + value.getTime() + "</date>";
                }

                // recursive check
                if (!allowRecursive && stack.indexOf(value) !== -1) {
                    return "<null incompatible=\"1\" recursive=\"1\"><![CDATA[" + String(value) + "]]></null>";
                }

                // complex types
                if (value instanceof Array) {
                    return arrayToXML(value);
                } else if (type == "object") {
                    return objectToXML(value);
                }

                // incompatible
                else {
                    return "<null incompatible=\"1\" />";
                }
            } else {
                if (type == "boolean") {
                    return value ? "<true />" : "<false />";
                } else if (type == "number") {
                    return "<number>" + value + "</number>";
                } else if (type == "string") {
                    return "<string>" + escapeXML(value) + "</string>";
                } else if (type == "xml") {
                    return "<xml>" + escapeXML(value.toXMLString()) + "</xml>";
                } else if (type == "undefined") {
                    return "<undefined />";
                }
            }
        }

        // code
        var xml = valueToXML(value);
        //fl.outputPanel.clear();
        //fl.trace(new XML(xml));
        return xml;

    }

    const obj = {
        user: {
            name: "John",
            age: 30
        }
    };
    const xml = serializeToXMLString(obj, true);
    console.log(xml);

    // <object>
    //     <property id="user">
    //         <object>
    //             <property id="name">
    //                 <string>John</string>
    //             </property>
    //             <property id="age">
    //                 <number>30</number>
    //             </property>
    //         </object>
    //     </property>
    // </object>

})();