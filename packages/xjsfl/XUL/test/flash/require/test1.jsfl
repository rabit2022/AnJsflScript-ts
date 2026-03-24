// requirejs modules file test1.js
require(["@xjsfl/XUL"], function (XUL) {

    /**
     * Click handler for button press
     * @param	event	{XULEvent}
     * @private
     */
    function click(event)
    {
        console.log('CLICK: ' + event)
        // Output.inspect(event.xul.controls, 4, true, {'function':false, 'xml':false})
        console.json(event.xul.controls);
        /*
        trace(xul.controls.radio);
        trace(xul.controls.radio.value);
        trace(xul.controls.radio.getXML());
        */
        //trace(xul.controls.radio.values);
        /*
        var values =
        {
            radio:		xul.controls.radio.values,
            listbox:	xul.controls.listbox.values,
            dropdown:	xul.controls.dropdown.values
        }
        Output.inspect(values)
        */
    }

    var xul = XUL.factory()
        .setTitle('Compound control values')

        // .addTextbox("Text00000",null,{prompt:"kb,b,"})
        // .addExpression("Text00000",null,{label:"label0000"})
        // .addRadiogroup('Radio', null, [2,2,3])
        // .addListbox('Listbox', null, [4,5,6])
        .addDropdown('Dropdown', null, [7,8,9])
        // .addButton('See values', 'button', null, {click:click});

    var settings = xul.show();
    console.json(xul.settings, 'Settings');

    console.log(typeof xul.xml);


});