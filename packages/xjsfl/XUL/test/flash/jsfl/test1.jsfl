// iife file test1.jsfl
(function () {

    /**
     * Performs a global RegExp match but returns a 2D Array of local match Arrays, or Objects if matchNames are supplied
     *
     * This saves you running 2 separate RegExp loops to extract both global and local matchs, and also
     * packages assigning match values to named properties
     *
     * @param	{String}	str				The string to be matched
     * @param	{RegExp}	rx				A RegExp object or literal
     * @param	{String}	params			An optional comma-delimited string of local match names
     * @param	{Array}		params			An optional Array of local match names
     * @param	{Boolean}	captureIndex	An optional Boolean to store the index of the global matches
     * @returns	{Array}						An Array of local match Arrays or Objects
     */
    match=function(str, rx, matchNames, captureIndex)
    {
        // variables
        var matchesGlobal, matchesLocal, matchNames;

        // global regexp
        // var flags			= 'g{m}{i}'.inject(rx.multiline ? 'm' : '', rx.ignoreCase ? 'i' : '');
        var flags = `g${rx.multiline ? 'm' : ''}${rx.ignoreCase ? 'i' : ''}`;

        var rxGlobal		= new RegExp(rx.source, flags);

        // local regexp
        var rxLocal			= new RegExp(rx.source);
        rxLocal.multiline	= rxGlobal.multiline;
        rxLocal.ignoreCase	= rxGlobal.ignoreCase;

        // ensure input RegExp is global
        //rxGlobal			= new RegExp(rxGlobal.source, rxGlobal.global, ;

        // exec
        var n = 0;
        if(captureIndex)
        {
            // variables
            matchesGlobal		= [];
            matchNames			= matchNames ? 'matchIndex,match,' + matchNames : null;

            // exec
            if(matchesGlobal)
            {
                var exec;
                while(exec = rxGlobal.exec(str))
                {
                    // stop processing if no matches (otherwise, exec() will loop forever)
                    if(exec[0] == '')break;

                    // set up local matches array, with the match index if an object is being returned
                    matchesLocal	= matchNames ? [exec.index] : [];

                    // add matches
                    for (var i = 0; i < exec.length; i++)
                    {
                        matchesLocal.push(exec[i]);
                    }

                    // finalise matches
                    if(matchNames)
                    {
                        // create an object
                        matchesLocal = combine(matchNames, matchesLocal)
                    }
                    else
                    {
                        // add match index to array
                        matchesLocal.push(exec.index);
                    }
                    matchesGlobal.push(matchesLocal);

                }

                // reset lastIndex (this is important so subsequent matches don't fail!)
                rxGlobal.lastIndex	= 0;
            }
        }

        // match
        else
        {
            // main match
            matchesGlobal 	= str.match(rxGlobal);
            matchNames		= matchNames ? 'match,' + matchNames : null;

            // sub matches
            if(matchesGlobal)
            {
                for (var i = 0; i < matchesGlobal.length; i++)
                {
                    // variables
                    matchesLocal		= matchesGlobal[i].match(rxLocal);

                    // stop processing if matches were empty
                    if(matchesLocal[0] == '')
                    {
                        matchesGlobal.pop();
                        break;
                    }

                    // finalise matches
                    matchesGlobal[i]	= matchNames ? combine(matchNames, matchesLocal) : matchesLocal;
                }
            }
        }

        // return
        return matchesGlobal || null;
    }


    /**
     * Combines keys and values to make a new populated Object
     * @param	{Array}		keys		An array of key names
     * @param	{String}	keys		A string of key names which will be split on commas
     * @param	{Array}		values		An array of values
     * @returns	{Object}				An Object containing the values assigned to keys
     */
    combine=function(keys, values)
    {
        if(typeof keys === 'string')
        {
            keys = toArray(keys.trim(), /\s*,\s*/g);
        }
        if(keys)
        {
            var obj = {};
            for (var i = 0; i < keys.length; i++)
            {
                if(keys[i] !== '')
                {
                    obj[keys[i]] = values[i];
                }
            }
            return obj;
        }
    }


    /**
     * Turns a single string of tokens into an array of trimmed tokens, by splitting at non-word characters, or a supplied delimiter
     *
     * It either returns an existing array, splits a string at delimiters, or wraps the single value in an array
     *
     * @param	{String}	value		A string
     * @param	{RegExp}	delim		An optional RegExp with which to split the input string, defaults to any non-word character
     * @param	{String}	delim		An optional character with which to split the string
     * @returns	{Array}					A new Array
     */
    toArray=function(value, delim)
    {
        // if delimiter is not supplied, default to any non-word character
        delim = delim || /\W+/;

        // if the value is already an array, return
        if(Array.isArray(value))
        {
            return value;
        }

        // if the value is a string, start splitting
        else if(typeof value === 'string')
        {
            // trim
            value = value.trim();

            // variables

            // if RegExp, split
            if(delim instanceof RegExp)
            {
                delim.global = true;
                return value.split(delim);
            }

            // else if String split
            else
            {
                delim		= delim.replace(/([\\\|\*\+])/g, '\\$1')
                var rxTrim	= new RegExp('^[\\s' +delim+ ']+|[\\s' +delim+ ']+$', 'g');
                var rxSplit	= new RegExp('\\s*' +delim+ '+\\s*', 'g');
                return value.replace(rxTrim, '').split(rxSplit);
            }

        }
        else
        {
            throw new TypeError('Utils.toArray() expects a string');
        }
        return [value];
    }


    // const str = "apple banana orange";
    // const rx = /\w+/g;
    //
    // const result = match(str, rx);
    //
    // console.log(result);


    // const str = "John:25, Mike:30";
    // const rx = /(\w+):(\d+)/g;
    //
    // const result = match(str, rx);
    //
    // console.log(result);

    // const str = "John:25, Mike:30";
    // const rx = /(\w+):(\d+)/g;
    //
    // const result = match(str, rx, ["name", "age"]);
    //
    // console.log(result);



    // const str = "cat bat rat";
    // const rx = /(\w+)at/g;
    //
    // const result = match(str, rx, ["word"], true);
    //
    // console.log(result);


    // const url = "https://test.com?id=123&name=tom&age=20";
    // const rx = /[?&](\w+)=([^&]+)/g;
    //
    // const result = match(url, rx, ["key", "value"]);
    //
    // console.log(result);


//     const logs = `
// [INFO] 2025-01-01 Start
// [ERROR] 2025-01-02 Failed
// `;
//
//     const rx = /\[(\w+)\]\s+([\d-]+)\s+(.*)/g;
//
//     const result = match(logs, rx, ["level", "date", "message"]);
//
//     console.log(result);



    // const str = "John:25, Mike:30";
    // const rx = /(\w+):(\d+)/g;
    //
    // const result = [...str.matchAll(rx)];
    //
    // console.log(result);



    // const str = "John:25, Mike:30";
    // for (const m of str.matchAll(/(\w+):(\d+)/g)) {
    //     console.log(m.index, m[0], m[1], m[2]);
    // }


    // const _ = require("lodash")
    // const str = "John:25, Mike:30";
    //
    // const rx = /(?<name>\w+):(?<age>\d+)/g;
    //
    // const result = [...str.matchAll(rx)];
    //
    // console.log(result.map(m => m.groups));




    // type User = { name: string; age: string };

    // const str = "John:25, Mike:30";
    //
    // const users= [...str.matchAll(/(?<name>\w+):(?<age>\d+)/g)]
    //     .map(m => m.groups);
    //
    // console.log(users);



    // match --> matchAll
    // var pathMatches	= Utils.match(path, rxPath, null, true);
    // const pathMatches = Array.from(path.matchAll(rxPath), m => {
    //     const matchArray = Array.from(m);
    //     const index = m.index ?? -1;
    //     return [...matchArray, index];
    // });
})();