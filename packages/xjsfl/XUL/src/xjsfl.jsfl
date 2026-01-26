define(["path-browserify", "url","@xjsfl/XUL/Utils","json3"], function (path, url,Utils,JSON) {

    const {pathToFileURL,fileURLToPath} = url;

// ------------------------------------------------------------------------------------------------------------------------
//
//           ██ ██████ ██████ ██
//           ██ ██     ██     ██
//  ██ ██    ██ ██     ██     ██
//  ██ ██    ██ ██████ █████  ██
//   ███     ██     ██ ██     ██
//  ██ ██    ██     ██ ██     ██
//  ██ ██ █████ ██████ ██     ██████
//
// ------------------------------------------------------------------------------------------------------------------------
// xJSFL

    /**
     * xJSFL
     *
     * @overview    Rapid development framework for extending Adobe Flash
     * @author        Dave Stewart:	dave@xjsfl.com
     * @see            Main website:	http://www.xjsfl.com
     * @see            Support:        http://www.xjsfl.com/support
     * @see            License:        http://www.xjsfl.com/license
     * @instance    xjsfl
     */

// Fake xjsfl instantation for Komodo autocomplete
// if( ! xjsfl )
// {
//         xjsfl = { };
// }
    xjsfl = {};


// ------------------------------------------------------------------------------------------------------------------------
//
//  ██████ ██ ██
//  ██        ██
//  ██     ██ ██ █████
//  █████  ██ ██ ██ ██
//  ██     ██ ██ █████
//  ██     ██ ██ ██
//  ██     ██ ██ █████
//
// ------------------------------------------------------------------------------------------------------------------------
// # File - Methods to load framework assets, or handle common filesystem functionality


    /**
     * Methods to load framework assets, or handle common filesystem functionality
     * @class
     */
    xjsfl.file =
        {


            /**
             * Attempts to directly load files, or find and run or return files from the cascading file structure.
             * Parameters and return type vary depending on file type!
             *
             * @param    {String}        pathOrName    The relative or absolute path, or uri to the file (glob wildcards allowed)
             * @param    {String}        pathOrName    The name or path fragment to a file, with or without the file extension
             * @param    {String}        type        The folder type in which to look (i.e. settings) for the file(s)
             *
             * @returns    {Boolean}                    A Boolean indicating Whether the file was successfully found and loaded
             * @returns    {XML}                        An XML object of the content of the file, if XML
             * @returns    {String}                    The string content of the file otherwise
             */
            load: function (pathOrName, type) {
                switch (type) {
                    case "template":
                        templatePath = "assets/templates/";
                        break;
                    default:
                        throw new Error("Unsupported type: " + type);
                }


                var xjsfl_path = fileURLToPath(xjsfl.uri);
                var full_template = path.join(xjsfl_path, templatePath, pathOrName);


                var uri = pathToFileURL(full_template).href;
                // console.log("uri",uri);

                var content;

                var ext = path.extname(full_template).slice(1);
                // console.log(ext)
                switch (ext) {
                    case "xul":
                    case "xml":
                        content = FLfile.read(uri);
                        content = content.replace(/<\?.+?>/, ""); // remove any doc type declaration
                        content = new XML(content);
                        break;

                    default:
                        content = FLfile.read(uri);
                }

                return content;
            }


        };



    // xjsfl.debug.error
    xjsfl.debug = {}
    xjsfl.debug.error = function (msg) {
        console.error(msg);
    }


    xjsfl.uri = AnJsflScript.folders["@xjsfl/XUL"];





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
     * @type {Object}	Description
     * @class
     */
    xjsfl.ui =
        {
            dialogs:[],

            /**
             * Show a new XUL dialog, nesting if one is already shown
             * @param	{XUL}		xul			A valid XUL object
             * @returns	{Object}				The settings object from the XMLUI
             */
            show:function(xul)
            {
                // clear dialogs if there's no current XMLUI
                var xulid = fl.xmlui.get('xulid');
                if(xulid == undefined)
                {
                    this.dialogs = [];
                }

                // grab new id
                xul.id			= this.dialogs.length;

                // update XML id placeholders with correct id
                var xml		= xul
                    .xml.prettyPrint()
                    .replace(/{xulid}/g, xul.id)
                    .replace(/xjsfl.ui.handleEvent\(0,/g, 'xjsfl.ui.handleEvent(' +xul.id+ ',');

                // save XML to dialog.xml
                var uri			= xul.uri || xjsfl.uri + 'core/ui/dialog.xul';
                if(FLfile.exists(uri))
                {
                    FLfile.setAttributes(uri, 'W');
                }
                FLfile.write(uri, xml);

                // register XUL
                this.dialogs.push(xul);

                // debug
                // xjsfl.output.log('Showing XUL dialog "' +xul.title+ '"');
                console.log('Showing XUL dialog "' +xul.title+ '"');

                // show
                var settings = fl.xmlPanel(uri);

                // unregister
                this.dialogs.pop();

                // debug
                //Output.inspect(settings);

                // return settings
                return settings;
            },

            handleEvent:function(xulid, type, id)
            {
                var dialog = this.dialogs[xulid];
                if(dialog)
                {
                    dialog.handleEvent(type, id);
                }
            },

            getFlashData:function()
            {
                var xul = this.dialogs[this.dialogs.length - 1];
                return xul ? xul.flashData : null;
            },

            setFlashData:function(data)
            {
                var xul = this.dialogs[this.dialogs.length - 1];
                xul ? xul.flashData = data: null;
            },

        }




    return xjsfl;

});
