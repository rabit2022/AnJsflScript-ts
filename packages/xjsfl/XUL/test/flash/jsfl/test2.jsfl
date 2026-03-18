// iife file test2.jsfl
(function () {
    /**
     * Get an Array of values from an Object, or an Array of Arrays/Objects from an Array of Objects
     *
     * @param	{Array}		input		An Object or an array of Objects
     * @param	{String}	prop		The name of a property to collect
     * @param	{Function}	prop		A callback function of the format function propertyName(element){ return element.property }
     * @param	{Array}		prop		The names of properties to collect
     * @param	{Boolean}	prop		A Boolean indicates you want to collect ALL properties
     * @param	{Boolean}	option		If passing and returning a single object, pass true to make it unique. If returning a 2D array, pass true to return Objects
     * @returns	{Array}					A new 1D or 2D Array
     */
    getValues=function(input, prop, option)
    {
        // variables
        var output	= [];
        var i		= -1;
        var single	= false;
        prop		= prop || true;

        // convert input to array if just a single object
        if( ! Array.isArray(input))
        {
            input	= [input];
            single	= true;
        }

        // collect all values?
        if(prop === true)
        {
            prop = Object.keys(input[0]);
        }

        // double loop for multiple properties
        if(Array.isArray(prop))
        {
            // variables
            var propName;
            var props			= prop;
            var functionNames	= [];
            var output			= new Array(input.length);

            // check if any of the property names are actually functions, and if so, grab the function name in advance
            for(var f = 0; f < props.length; f++)
            {
                if(typeof props[f] === 'function')
                {
                    functionNames[f] = Utils.parseFunction(props[f]).name;
                }
            }

            // return objects
            if(option)
            {
                while(i++ < input.length - 1)
                {
                    output[i] = {};
                    for(var j = 0; j < props.length; j++)
                    {
                        propName = functionNames[j] || props[j];
                        output[i][propName] = functionNames[j] ? props[j](input[i]) : input[i][propName];
                    }
                }
            }

            // return arrays
            else
            {
                while(i++ < input.length - 1)
                {
                    output[i] = new Array(props.length);
                    for(var j = 0; j < props.length; j++)
                    {
                        output[i][j] = functionNames[j] ? props[j](input[i]) : input[i][props[j]];
                    }
                }
            }
        }

        // single loop for collecting only a single property
        else
        {
            while(i++ < input.length - 1)
            {
                if(input[i] != undefined)
                {
                    if( ! option || (option && output.indexOf(input[i][prop]) === -1) )
                    {
                        output.push(typeof prop === 'function' ? prop(input[i]) : input[i][prop]);
                    }
                }
            }
        }

        // return
        return single ? output[0] : output;
    }

    console.log(getValues({"a":"b","c":"d"}))
})();