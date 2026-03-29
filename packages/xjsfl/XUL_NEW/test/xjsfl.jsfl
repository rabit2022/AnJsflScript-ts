// ------------------------------------------------------------------------------------------------------------------------
//
//  ██  ██ ██
//  ██  ██ ██
//  ██  ██ ██
//  ██  ██ ██
//  ██  ██ ██
//  ██  ██ ██
//  ██████ ██
//
// ------------------------------------------------------------------------------------------------------------------------
// # UI - Global access to XUL UI dialogs

/**
 * Global access to XUL UI dialogs
 * @type {Object}    Description
 * @class
 */
xjsfl.ui =
    {
        dialogs: [],

        /**
         * Show a new XUL dialog, nesting if one is already shown
         * @param    {XUL}        xul            A valid XUL object
         * @returns    {Object}                The settings object from the XMLUI
         */
        show: function (xul) {
            // clear dialogs if there's no current XMLUI
            var xulid = fl.xmlui.get('xulid');
            if (xulid == undefined) {
                this.dialogs = [];
            }

            // grab new id
            xul.id = this.dialogs.length;

            // update XML id placeholders with correct id
            var xml = xul
                .xml.prettyPrint()
                .replace(/{xulid}/g, xul.id)
                .replace(/xjsfl.ui.handleEvent\(0,/g, 'xjsfl.ui.handleEvent(' + xul.id + ',');

            // save XML to dialog.xml
            var uri = xul.uri || xjsfl.uri + 'core/ui/dialog.xul';
            if (FLfile.exists(uri)) {
                FLfile.setAttributes(uri, 'W');
            }
            FLfile.write(uri, xml);

            // register XUL
            this.dialogs.push(xul);

            // debug
            xjsfl.output.log('Showing XUL dialog "' + xul.title + '"');

            // show
            var settings = fl.xmlPanel(uri);

            // unregister
            this.dialogs.pop();

            // debug
            //Output.inspect(settings);

            // return settings
            return settings;
        },

        handleEvent: function (xulid, type, id) {
            var dialog = this.dialogs[xulid];
            if (dialog) {
                dialog.handleEvent(type, id);
            }
        },

        getFlashData: function () {
            var xul = this.dialogs[this.dialogs.length - 1];
            return xul ? xul.flashData : null;
        },

        setFlashData: function (data) {
            var xul = this.dialogs[this.dialogs.length - 1];
            xul ? xul.flashData = data : null;
        },

    }



