define([], function () {


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
            // var value = parseValue(String(element.@value));
            // this_elements[value] = {id:element.@id, label:element.@label, value:value};
            this_elements .push({id:element.@id, label:element.@label, value:value});
        }

        return this_elements;
    }
    return {processCompoundElements:processCompoundElements};
});