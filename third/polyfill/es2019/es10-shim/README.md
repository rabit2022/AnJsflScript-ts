# es10-shim 

ECMAScript 10 compatibility shims for legacy JavaScript engines.

`es10-shim.js` exports an object that contains shims that can be used to monkeypatch a JavaScript context to contain all ECMAScript 10 methods that can be faithfully emulated with a legacy JavaScript engine.
`es10-shim.browser.js` calls the “shim” method on the export of `es10-shim.js` which actually modifies the global object, including replacing native methods when engine-specific bugs exist.
Published on npm are `dist/es10-shim.js` and `dist/es10-shim.min.js` which are pre-prepared browserified versions of `es10-shim.browser.js`.

## Source for shims

Every shim in this module is a separate, independent `npm` module.
To be included, all shims must have a ".shim()" method that installs the shim into the global object whenever it is necessary. It should also handle any engine-specific specific to the method it is shimming.

## Tests

Simply clone the repo, `npm install`, and run `npm test`

## Shims

`Array.prototype`:

- `flat` [standalone][npm-flat-url]
- `flatmap` [standalone][npm-flatmap-url]

`Object`:

- `fromentries` [standalone][object-fromentries-url]

`String.prototype`:

- `trimstart` [standalone][string-trimstart-url]
- `trimend` [standalone][string-trimend-url]

`Symbol.prototype`:

- `description` [standalone][symbol-description-url]



## Shams

- :warning: None yet!


[npm-flat-url]: https://www.npmjs.com/package/array.prototype.flat
[npm-flatmap-url]: https://www.npmjs.com/package/array.prototype.flatmap
[object-fromentries-url]: https://www.npmjs.com/package/object.fromentries
[string-trimstart-url]: https://www.npmjs.com/package/string.prototype.trimstart
[string-trimend-url]: https://www.npmjs.com/package/string.prototype.trimend
[symbol-description-url]: https://www.npmjs.com/package/symbol.prototype.description
