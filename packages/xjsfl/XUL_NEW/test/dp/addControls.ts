import {makeId} from "../Constants/ID";

/**
 * (private) Main add control method
 * @param    {String}    type        The control type, i.e. button, colorchip, etc
 * @param    {String}    id            The control id
 * @param    {String}    label        The control label
 * @param    {XML}        xml            The original XML of the control, built by the appropriate addControl method
 * @param    {Object}    attributes    Any additional attributes that should be applied to the control XML
 * @param    {Object}    validation    Any validation rules that should be applied to the control
 * @param    {Object}    events        An Object containing event:callback pairs
 * @param    {Boolean}    user        An optional Boolean specifying to use use XML? //TODO check this
 * @returns    {XUL}                    The XUL dialog
 */
export function addControl(type: string, id: string, label: string, xml: string, attributes, validation, events, user) {
    // element
    var element = user ? xml : xml[type][0];

    // label
    id = id || makeId(label);

    if (xml.label && xml.label.length()) {
        xml.label.@value = label ? label + ' : ' : ' ';
    }

    // check id is not already defined
    if (this.controls[id]) {
        throw new Error('XUL.addControl(): Cannot add <' + type + '> control - duplicate id "' + id + '"');
    }

    // id & attributes
    if (element) {
        element.@id = id;
        for (var attr in attributes) {
            if (/^(value|checked)$/.test(attr)) {
                // need to add / set values using JavaScript (rather than in XML) or else the field will always show initial values when being re-shown
                this.settings[id] = attributes[attr];
            } else {
                element['@' + attr] = attributes[attr];
            }
        }
    }

    // width
    if (attributes && attributes.width > this.columns[1]) {
        this.columns[1] = attributes.width;
    }

    // combo / selected

    // special cases

    // target list
    switch (type) {
        case 'targetlist':
            var property = xml['property'][0];
            property.@id = id;
            break;

        case 'radiogroup':
        case 'menulist':
        case 'listbox':
            var selected = xml.. *
        .
            (function (element) {
                return element.@selected && element.@selected == 'true';
            });
            this.settings[id] = selected.@value;
            //trace('>>' + selected.toXMLString())
            break;
    }

    // setup validation
    if (validation) {
        this._addValidation(id, validation);
    }

    // setup events
    if (events) {
        this._addEvents(id, events);
    }

    // console.log(xml)
    // set control
    this.controls[id] = new XULControl(id, type, this, xml);
    if (user !== true) {
        this.addXML(xml, false, true);
    }

    // debug
    //trace(xml)


    // return
    return xml;
}

,
