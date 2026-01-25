define(["process", "path-browserify", "url"], function(process, path, url) {

    const { pathToFileURL } = url;

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
            load: function(pathOrName, type) {
                switch (type) {
                    case "template":
                        templatePath = "assets/templates/";
                        break;
                    default:
                        throw new Error("Unsupported type: " + type);
                }
                // console.log("Loaded file: " + pathOrName);

                // var cwd = process.cwd();
                // var parentDir = path.dirname(cwd);

                
                var full_template = path.join(parentDir, templatePath, pathOrName);


                var uri = pathToFileURL(full_template).href;
                // console.log("uri",uri);

                var content;

                var ext = path.extname(full_template);
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

                console.log(uri,content);
                return content;
            }


        };

    // xml = xjsfl.file.load("xul/dialog.xul", "template", true);
    // console.log(xml);


    // xjsfl.debug.error
    xjsfl.debug={}
    xjsfl.debug.error = function(msg) {
        console.error(msg);
    }

    // var cwd = process.cwd();
    // console.log(cwd)
    // console.log(__dirname)
    // var parentDir = path.dirname(cwd);
    // console.log(parentDir);
    // xjsfl.uri = pathToFileURL(parentDir).href;
    xjsfl.uri =

    return xjsfl;

});
