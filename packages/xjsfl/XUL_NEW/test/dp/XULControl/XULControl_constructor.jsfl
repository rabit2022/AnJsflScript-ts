define([], function () {

    function parseValue(value, trim) {
        if (trim === void 0) { trim = true; }
        if (value == null)
            return value;
        var str = String(value);
        if (trim)
            str = str.trim();
        if (str === "undefined")
            return undefined;
        if (str === "null" || str === "")
            return null;
        if (/^(true|false)$/i.test(str)) {
            return str.toLowerCase() === "true";
        }
        if (!Number.isNaN(Number(str)) && str !== "") {
            return Number(str);
        }
        if (/^(#|0x)[0-9a-f]{6}$/i.test(str)) {
            return parseInt(str.replace("#", ""), 16);
        }
        if (/^<(\w+)\b[\s\S]*(<\/\1>|\/>)$/.test(value)) {
            var xml = void 0;
            try {
                xml = new XML(value);
            }
            catch (err) {
                try {
                    xml = new XMLList(value);
                }
                catch (err) {
                    xml = value;
                }
            }
            ;
            return xml;
        }
        if (/^[\[{]/.test(str)) {
            try {
                return JSON.parse(str);
            }
            catch (_a) {
            }
        }
        var time = Date.parse(str);
        if (!Number.isNaN(time)) {
            return new Date(time);
        }
        return str;
    }

    /**
     *
     * @param {XML} xml
     * @param {string}type
     * @returns Array
     */
    function processCompoundElements(xml,type) {
        // grab XML child nodes
        var elements;
        switch(type)
        {
            case 'radiogroup':
                elements = xml..radio;
                break;
            case 'checkboxgroup':
                elements = xml..checkbox;
                break;
            case 'menulist':
                elements = xml..menuitem;
                break;
            case 'listbox':
                elements = xml..listitem;
                break;
        }

        // assign elements
        // var this_elements = {};
        var this_elements = [];
        for each(var element in elements)
        {
            var value = parseValue(String(element.@value));
            // this_elements[value] = {id:element.@id, label:element.@label, value:value};
            this_elements .push({id:element.@id, label:element.@label, value:value});
        }

        return this_elements;
    }
    return {processCompoundElements:processCompoundElements};
});