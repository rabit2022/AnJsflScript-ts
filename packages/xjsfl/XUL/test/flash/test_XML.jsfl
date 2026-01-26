(function () {

    /**
     * Injects a template string with values
     * @param    {string}    template        The template string containing {placeholders}
     * @param    {Object}    obj                Any Object or instance of Class that has named properties
     * @param    {Array}        obj                An Array of values, which replace named {placeholders} in the order they are found
     * @param    {Mixed}        ...rest			Instead of an Array, just a list of arguments, which replace named placeholders in the order they are found
     * @returns {String}
     */
    function inject(template, obj) {
        // Convert all arguments after `template` into an array
        const restArgs = Array.prototype.slice.call(arguments, 1);

        // Determine the actual `obj` to use for substitution
        var substitutionSource;
        if (restArgs.length === 0) {
            // Only `template` was passed — invalid usage, but handle gracefully
            substitutionSource = {};
        } else if (restArgs.length === 1 && typeof restArgs[0] !== 'string' && !Array.isArray(restArgs[0]) && restArgs[0] !== null && typeof restArgs[0] === 'object') {
            // Single object argument (not array, not primitive)
            substitutionSource = restArgs[0];
        } else {
            // Multiple args or first arg is array/primitive → treat as positional array
            substitutionSource = restArgs.length === 1 && Array.isArray(restArgs[0])
                ? restArgs[0]
                : restArgs;
        }

        // Regular expression to match {placeholder}
        const rx = /{([a-z0-9]+)}/gi;
        const values = {};
        var length = 0;

        // Replacement functions
        function arrMatch(match, key) {
            if (typeof values[key] === 'undefined') {
                values[key] = length++;
            }
            return substitutionSource[values[key]];
        }

        function objMatch(match, key) {
            if (typeof values[key] === 'undefined') {
                // Assume Utils.getDeepValue exists; if not, you may need to implement or remove dot-notation support
                values[key] = key.indexOf('.') === -1
                    ? substitutionSource[key]
                    : (typeof Utils !== 'undefined' ? Utils.getDeepValue(substitutionSource, key) : substitutionSource[key]);
            }
            return values[key];
        }

        // Choose matcher based on whether source is array-like or object
        const isPositional = Array.isArray(substitutionSource);
        return template.replace(rx, isPositional ? arrMatch : objMatch);
    }


    const result = inject("Hello {name}, you have {count} messages.", {
        name: "Alice",
        count: 5
    });
// → "Hello Alice, you have 5 messages."
    console.log(result);
})();
