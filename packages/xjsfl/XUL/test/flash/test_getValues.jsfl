(function() {
    /**
     * Returns an array of the the currently executing files, paths, lines, and code (most-recent first)
     *
     * @param    {Error}        error        An optional error object
     * @param    {Boolean}    shorten        An optional Boolean to shorten any core paths with {xjsfl}
     * @returns    {Array}                    An array of the executing files, paths, lines and code
     */
    function getStack(error, shorten) {
        // error
        var strStack = (error instanceof Error ? error : new Error("Stack trace")).stack;
        console.log(strStack);
    //     Error("tell me your name")@:0
    //     ()@H:\project\js\AnJsflScript-ts\packages\xjsfl\XUL\test\flash\test_getValues.jsfl:168
    // @H:\project\js\AnJsflScript-ts\packages\xjsfl\XUL\test\flash\test_getValues.jsfl:1


        // parse stack
        var rxParts = /^(.*)?@(.*?):(\d+)$/mg;
        var matches = strStack.match(rxParts);

        // remove the fake error
        if (!error) {
            matches = matches.slice(2);
        }

        // parse lines
        var stack = [];
        var rxFile = /(.+?)([^\\\/]*)$/;
        var parts, fileParts, path, file;

        for (var i = 0; i < matches.length; i++) {
            // error, file, line number
            rxParts.lastIndex = 0;
            parts = rxParts.exec(matches[i]);

            // file parts
            fileParts = (parts[2] || "").match(rxFile);
            path = fileParts ? fileParts[1] : "";
            file = fileParts ? fileParts[2] : "";

            // stack object
            stack[i] =
                {
                    functionName: "functionName",
                    args: "args",
                    fileName: file,
                    lineNumber: parseInt(parts[3]) || "",
                    columnNumber:-1,
                    source: parts[1] || "",

                    path: path.replace(/\\/g, "/"),
                    uri: FLfile.platformPathToURI(path + file)
                };
        }

        // return
        return stack;
    }

    /**
     * Get an Array of values from an Object, or an Array of Arrays/Objects from an Array of Objects
     *
     * @param    {Array}        input        An Object or an array of Objects
     * @param    {String}    prop        The name of a property to collect
     * @param    {Function}    prop        A callback function of the format function propertyName(element){ return element.property }
     * @param    {Array}        prop        The names of properties to collect
     * @param    {Boolean}    prop        A Boolean indicates you want to collect ALL properties
     * @param    {Boolean}    option        If passing and returning a single object, pass true to make it unique. If returning a 2D array, pass true to return Objects
     * @returns    {Array}                    A new 1D or 2D Array
     */
    function getValues(input, prop, option) {
        // variables
        var output = [];
        var i = -1;
        var single = false;
        prop = prop || true;

        // convert input to array if just a single object
        if (!Utils.isArray(input)) {
            input = [input];
            single = true;
        }

        // collect all values?
        if (prop === true) {
            prop = Utils.getKeys(input[0]);
        }

        // double loop for multiple properties
        if (Utils.isArray(prop)) {
            // variables
            var propName;
            var props = prop;
            var functionNames = [];
            var output = new Array(input.length);

            // check if any of the property names are actually functions, and if so, grab the function name in advance
            for (var f = 0; f < props.length; f++) {
                if (typeof props[f] === "function") {
                    functionNames[f] = Utils.parseFunction(props[f]).name;
                }
            }

            // return objects
            if (option) {
                while (i++ < input.length - 1) {
                    output[i] = {};
                    for (var j = 0; j < props.length; j++) {
                        propName = functionNames[j] || props[j];
                        output[i][propName] = functionNames[j] ? props[j](input[i]) : input[i][propName];
                    }
                }
            }

            // return arrays
            else {
                while (i++ < input.length - 1) {
                    output[i] = new Array(props.length);
                    for (var j = 0; j < props.length; j++) {
                        output[i][j] = functionNames[j] ? props[j](input[i]) : input[i][props[j]];
                    }
                }
            }
        }

        // single loop for collecting only a single property
        else {
            while (i++ < input.length - 1) {
                if (input[i] != undefined) {
                    if (!option || (option && output.indexOf(input[i][prop]) === -1)) {
                        output.push(typeof prop === "function" ? prop(input[i]) : input[i][prop]);
                    }
                }
            }
        }

        // return
        return single ? output[0] : output;
    }


    var error = "tell me your name";

    var stack;
    if (error instanceof Error) {
        stack = Utils.getStack(error, true);
        if (testing) {
            stack.splice(stack.length - 3, 2);
        }
    } else {
        error = new Error(error);
        stack = getStack(error, true);
        console.error(JSON.stringify(stack));
        stack = stack.slice(1);
    }

    // log error as JSON
    var data = Utils.getValues(stack, ["uri", "line", "code"], true);
    // fl.runScript(xjsfl.uri + 'core/jsfl/libraries/objects/JSON.jsfl');
    // FLfile.write(xjsfl.uri + 'core/jsfl/run/temp/error.txt', JSON.stringify({message:error.message, stack:data}));
    console.log(JSON.stringify(data));

})();