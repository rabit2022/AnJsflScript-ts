/**
 * @file: test2.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

// flash TypeScript file test2.ts

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
    // var flags = `g${rx.multiline ? 'm' : ''}${rx.ignoreCase ? 'i' : ''}`;
    var flags = "g"+(rx.multiline ? 'm' : '') +(rx.ignoreCase ? 'i' : '')

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

// match = function () {
// 	const pathMatches = Array.from(path.matchAll(rxPath), m => {
// 		const matchArray = Array.from(m);
// 		const index = m.index ?? -1;
// 		return [...matchArray, index];
// 	});
// 	return pathMatches;
// }


/**
 * Combines keys and values into an object.
 * @param {string[]|string} keys - A single string with comma-separated keys or an array of keys.
 * @param {any[]} values - An array of values.
 * @returns {Object}
 */
function combine(keys, values) {
    // 1. 处理 keys 参数，将其统一转换为数组
    var keyArr;
    if (typeof keys === "string") {
        // 去除首尾空格并按逗号分割（支持逗号周围的空格）
        keyArr = keys.replace(/^\s+|\s+$/g, '').split(/\s*,\s*/);
    } else {
        keyArr = keys;
    }

    // 2. 手动构建对象 (替代 Object.fromEntries)
    var result = {};
    for (var i = 0; i < keyArr.length; i++) {
        // 防止 values 数组越界，如果 values[i] 不存在则设为 undefined
        result[keyArr[i]] = values[i];
    }

    return result;
}

/**
 * Finds the full path
 * @type {RegExp}    operator, node, index, filter, attribute, matchIndex
 * @ignore
 */
var rxPath =
    /(?:(\.{0,2})([\-*\w]+))?(?:\[(\d+)\])?(?:\.\((.+?)\))?(?:\.(@[\-\w]+))?/g;

var path	= "path.to.node.(.red).target.(#gateway).@class";

var pathMatches	= match(path, rxPath, null, true);
console.log(pathMatches);

[
    [
        'path',    '',
        'path',    undefined,
        undefined, undefined,
        0
    ],
    [ '.to', '.', 'to', undefined, undefined, undefined, 4 ],
    [ '.node.(.red)', '.', 'node', undefined, '.red', undefined, 7 ],
    [
        '.target.(#gateway).@class',
        '.',
        'target',
        undefined,
        '#gateway',
        '@class',
        19
    ]
]
