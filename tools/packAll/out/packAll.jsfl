(function(){
 "use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["packAll"] = factory();else root["packAll"] = factory();
})(void 0, function () {
  return /******/function () {
    // webpackBootstrap
    /******/
    var __webpack_modules__ = {
      /***/351: (/***/function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
        "use strict";

        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, {
          XMLBuilder: function XMLBuilder() {
            return /* reexport */Builder;
          },
          XMLParser: function XMLParser() {
            return /* reexport */_XMLParser;
          },
          XMLValidator: function XMLValidator() {
            return /* binding */_XMLValidator;
          }
        });
        ; // ./node_modules/fast-xml-parser/src/util.js

        var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*';
        var regexName = new RegExp('^' + nameRegexp + '$');
        function getAllMatches(string, regex) {
          var matches = [];
          var match = regex.exec(string);
          while (match) {
            var allmatches = [];
            allmatches.startIndex = regex.lastIndex - match[0].length;
            var len = match.length;
            for (var index = 0; index < len; index++) {
              allmatches.push(match[index]);
            }
            matches.push(allmatches);
            match = regex.exec(string);
          }
          return matches;
        }
        var isName = function isName(string) {
          var match = regexName.exec(string);
          return !(match === null || typeof match === 'undefined');
        };
        function isExist(v) {
          return typeof v !== 'undefined';
        }
        function isEmptyObject(obj) {
          return Object.keys(obj).length === 0;
        }
        function getValue(v) {
          if (exports.isExist(v)) {
            return v;
          } else {
            return '';
          }
        }
        ; // ./node_modules/fast-xml-parser/src/validator.js

        var defaultOptions = {
          allowBooleanAttributes: false,
          //A tag can have attributes without any value
          unpairedTags: []
        };

        //const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
        function validate(xmlData, options) {
          options = Object.assign({}, defaultOptions, options);

          //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
          //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
          //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
          var tags = [];
          var tagFound = false;

          //indicates that the root tag has been closed (aka. depth 0 has been reached)
          var reachedRoot = false;
          if (xmlData[0] === "\uFEFF") {
            // check for byte order mark (BOM)
            xmlData = xmlData.substr(1);
          }
          for (var i = 0; i < xmlData.length; i++) {
            if (xmlData[i] === '<' && xmlData[i + 1] === '?') {
              i += 2;
              i = readPI(xmlData, i);
              if (i.err) return i;
            } else if (xmlData[i] === '<') {
              //starting of tag
              //read until you reach to '>' avoiding any '>' in attribute value
              var tagStartPos = i;
              i++;
              if (xmlData[i] === '!') {
                i = readCommentAndCDATA(xmlData, i);
                continue;
              } else {
                var closingTag = false;
                if (xmlData[i] === '/') {
                  //closing tag
                  closingTag = true;
                  i++;
                }
                //read tagname
                var tagName = '';
                for (; i < xmlData.length && xmlData[i] !== '>' && xmlData[i] !== ' ' && xmlData[i] !== '\t' && xmlData[i] !== '\n' && xmlData[i] !== '\r'; i++) {
                  tagName += xmlData[i];
                }
                tagName = tagName.trim();
                //console.log(tagName);

                if (tagName[tagName.length - 1] === '/') {
                  //self closing tag without attributes
                  tagName = tagName.substring(0, tagName.length - 1);
                  //continue;
                  i--;
                }
                if (!validateTagName(tagName)) {
                  var msg = void 0;
                  if (tagName.trim().length === 0) {
                    msg = "Invalid space after '<'.";
                  } else {
                    msg = "Tag '" + tagName + "' is an invalid name.";
                  }
                  return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
                }
                var result = readAttributeStr(xmlData, i);
                if (result === false) {
                  return getErrorObject('InvalidAttr', "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
                }
                var attrStr = result.value;
                i = result.index;
                if (attrStr[attrStr.length - 1] === '/') {
                  //self closing tag
                  var attrStrStart = i - attrStr.length;
                  attrStr = attrStr.substring(0, attrStr.length - 1);
                  var isValid = validateAttributeString(attrStr, options);
                  if (isValid === true) {
                    tagFound = true;
                    //continue; //text may presents after self closing tag
                  } else {
                    //the result from the nested function returns the position of the error within the attribute
                    //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                    //this gives us the absolute index in the entire xml, which we can use to find the line at last
                    return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                  }
                } else if (closingTag) {
                  if (!result.tagClosed) {
                    return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
                  } else if (attrStr.trim().length > 0) {
                    return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
                  } else if (tags.length === 0) {
                    return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
                  } else {
                    var otg = tags.pop();
                    if (tagName !== otg.tagName) {
                      var openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                      return getErrorObject('InvalidTag', "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
                    }

                    //when there are no more tags, we reached the root level.
                    if (tags.length == 0) {
                      reachedRoot = true;
                    }
                  }
                } else {
                  var _isValid = validateAttributeString(attrStr, options);
                  if (_isValid !== true) {
                    //the result from the nested function returns the position of the error within the attribute
                    //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                    //this gives us the absolute index in the entire xml, which we can use to find the line at last
                    return getErrorObject(_isValid.err.code, _isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + _isValid.err.line));
                  }

                  //if the root level has been reached before ...
                  if (reachedRoot === true) {
                    return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
                  } else if (options.unpairedTags.indexOf(tagName) !== -1) {
                    //don't push into stack
                  } else {
                    tags.push({
                      tagName: tagName,
                      tagStartPos: tagStartPos
                    });
                  }
                  tagFound = true;
                }

                //skip tag text value
                //It may include comments and CDATA value
                for (i++; i < xmlData.length; i++) {
                  if (xmlData[i] === '<') {
                    if (xmlData[i + 1] === '!') {
                      //comment or CADATA
                      i++;
                      i = readCommentAndCDATA(xmlData, i);
                      continue;
                    } else if (xmlData[i + 1] === '?') {
                      i = readPI(xmlData, ++i);
                      if (i.err) return i;
                    } else {
                      break;
                    }
                  } else if (xmlData[i] === '&') {
                    var afterAmp = validateAmpersand(xmlData, i);
                    if (afterAmp == -1) return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                    i = afterAmp;
                  } else {
                    if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                      return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
                    }
                  }
                } //end of reading tag text value
                if (xmlData[i] === '<') {
                  i--;
                }
              }
            } else {
              if (isWhiteSpace(xmlData[i])) {
                continue;
              }
              return getErrorObject('InvalidChar', "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
            }
          }
          if (!tagFound) {
            return getErrorObject('InvalidXml', 'Start tag expected.', 1);
          } else if (tags.length == 1) {
            return getErrorObject('InvalidTag', "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
          } else if (tags.length > 0) {
            return getErrorObject('InvalidXml', "Invalid '" + JSON.stringify(tags.map(function (t) {
              return t.tagName;
            }), null, 4).replace(/\r?\n/g, '') + "' found.", {
              line: 1,
              col: 1
            });
          }
          return true;
        }
        ;
        function isWhiteSpace(char) {
          return char === ' ' || char === '\t' || char === '\n' || char === '\r';
        }
        /**
         * Read Processing insstructions and skip
         * @param {*} xmlData
         * @param {*} i
         */
        function readPI(xmlData, i) {
          var start = i;
          for (; i < xmlData.length; i++) {
            if (xmlData[i] == '?' || xmlData[i] == ' ') {
              //tagname
              var tagname = xmlData.substr(start, i - start);
              if (i > 5 && tagname === 'xml') {
                return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
              } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
                //check if valid attribut string
                i++;
                break;
              } else {
                continue;
              }
            }
          }
          return i;
        }
        function readCommentAndCDATA(xmlData, i) {
          if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
            //comment
            for (i += 3; i < xmlData.length; i++) {
              if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
                i += 2;
                break;
              }
            }
          } else if (xmlData.length > i + 8 && xmlData[i + 1] === 'D' && xmlData[i + 2] === 'O' && xmlData[i + 3] === 'C' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'Y' && xmlData[i + 6] === 'P' && xmlData[i + 7] === 'E') {
            var angleBracketsCount = 1;
            for (i += 8; i < xmlData.length; i++) {
              if (xmlData[i] === '<') {
                angleBracketsCount++;
              } else if (xmlData[i] === '>') {
                angleBracketsCount--;
                if (angleBracketsCount === 0) {
                  break;
                }
              }
            }
          } else if (xmlData.length > i + 9 && xmlData[i + 1] === '[' && xmlData[i + 2] === 'C' && xmlData[i + 3] === 'D' && xmlData[i + 4] === 'A' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'A' && xmlData[i + 7] === '[') {
            for (i += 8; i < xmlData.length; i++) {
              if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
                i += 2;
                break;
              }
            }
          }
          return i;
        }
        var doubleQuote = '"';
        var singleQuote = "'";

        /**
         * Keep reading xmlData until '<' is found outside the attribute value.
         * @param {string} xmlData
         * @param {number} i
         */
        function readAttributeStr(xmlData, i) {
          var attrStr = '';
          var startChar = '';
          var tagClosed = false;
          for (; i < xmlData.length; i++) {
            if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
              if (startChar === '') {
                startChar = xmlData[i];
              } else if (startChar !== xmlData[i]) {
                //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
              } else {
                startChar = '';
              }
            } else if (xmlData[i] === '>') {
              if (startChar === '') {
                tagClosed = true;
                break;
              }
            }
            attrStr += xmlData[i];
          }
          if (startChar !== '') {
            return false;
          }
          return {
            value: attrStr,
            index: i,
            tagClosed: tagClosed
          };
        }

        /**
         * Select all the attributes whether valid or invalid.
         */
        var validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

        //attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

        function validateAttributeString(attrStr, options) {
          //console.log("start:"+attrStr+":end");

          //if(attrStr.trim().length === 0) return true; //empty string

          var matches = getAllMatches(attrStr, validAttrStrRegxp);
          var attrNames = {};
          for (var i = 0; i < matches.length; i++) {
            if (matches[i][1].length === 0) {
              //nospace before attribute name: a="sd"b="saf"
              return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
            } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
              return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
            } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
              //independent attribute: ab
              return getErrorObject('InvalidAttr', "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
            }
            /* else if(matches[i][6] === undefined){//attribute without value: ab=
                            return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                        } */
            var attrName = matches[i][2];
            if (!validateAttrName(attrName)) {
              return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
            }
            if (!attrNames.hasOwnProperty(attrName)) {
              //check for duplicate attribute.
              attrNames[attrName] = 1;
            } else {
              return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
            }
          }
          return true;
        }
        function validateNumberAmpersand(xmlData, i) {
          var re = /\d/;
          if (xmlData[i] === 'x') {
            i++;
            re = /[\da-fA-F]/;
          }
          for (; i < xmlData.length; i++) {
            if (xmlData[i] === ';') return i;
            if (!xmlData[i].match(re)) break;
          }
          return -1;
        }
        function validateAmpersand(xmlData, i) {
          // https://www.w3.org/TR/xml/#dt-charref
          i++;
          if (xmlData[i] === ';') return -1;
          if (xmlData[i] === '#') {
            i++;
            return validateNumberAmpersand(xmlData, i);
          }
          var count = 0;
          for (; i < xmlData.length; i++, count++) {
            if (xmlData[i].match(/\w/) && count < 20) continue;
            if (xmlData[i] === ';') break;
            return -1;
          }
          return i;
        }
        function getErrorObject(code, message, lineNumber) {
          return {
            err: {
              code: code,
              msg: message,
              line: lineNumber.line || lineNumber,
              col: lineNumber.col
            }
          };
        }
        function validateAttrName(attrName) {
          return isName(attrName);
        }

        // const startsWithXML = /^xml/i;

        function validateTagName(tagname) {
          return isName(tagname) /* && !tagname.match(startsWithXML) */;
        }

        //this function returns the line number for the character at the given index
        function getLineNumberForPosition(xmlData, index) {
          var lines = xmlData.substring(0, index).split(/\r?\n/);
          return {
            line: lines.length,
            // column number is last line's length + 1, because column numbering starts at 1:
            col: lines[lines.length - 1].length + 1
          };
        }

        //this function returns the position of the first character of match within attrStr
        function getPositionFromMatch(match) {
          return match.startIndex + match[1].length;
        }
        ; // ./node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
        var OptionsBuilder_defaultOptions = {
          preserveOrder: false,
          attributeNamePrefix: '@_',
          attributesGroupName: false,
          textNodeName: '#text',
          ignoreAttributes: true,
          removeNSPrefix: false,
          // remove NS from tag name or attribute name if true
          allowBooleanAttributes: false,
          //a tag can have attributes without any value
          //ignoreRootElement : false,
          parseTagValue: true,
          parseAttributeValue: false,
          trimValues: true,
          //Trim string values of tag and attributes
          cdataPropName: false,
          numberParseOptions: {
            hex: true,
            leadingZeros: true,
            eNotation: true
          },
          tagValueProcessor: function tagValueProcessor(tagName, val) {
            return val;
          },
          attributeValueProcessor: function attributeValueProcessor(attrName, val) {
            return val;
          },
          stopNodes: [],
          //nested tags will not be parsed even for errors
          alwaysCreateTextNode: false,
          isArray: function isArray() {
            return false;
          },
          commentPropName: false,
          unpairedTags: [],
          processEntities: true,
          htmlEntities: false,
          ignoreDeclaration: false,
          ignorePiTags: false,
          transformTagName: false,
          transformAttributeName: false,
          updateTag: function updateTag(tagName, jPath, attrs) {
            return tagName;
          },
          // skipEmptyListItem: false
          captureMetaData: false
        };

        /**
         * Normalizes processEntities option for backward compatibility
         * @param {boolean|object} value 
         * @returns {object} Always returns normalized object
         */
        function normalizeProcessEntities(value) {
          // Boolean backward compatibility
          if (typeof value === 'boolean') {
            return {
              enabled: value,
              // true or false
              maxEntitySize: 10000,
              maxExpansionDepth: 10,
              maxTotalExpansions: 1000,
              maxExpandedLength: 100000,
              allowedTags: null,
              tagFilter: null
            };
          }

          // Object config - merge with defaults
          if (_typeof(value) === 'object' && value !== null) {
            var _value$maxEntitySize, _value$maxExpansionDe, _value$maxTotalExpans, _value$maxExpandedLen, _value$allowedTags, _value$tagFilter;
            return {
              enabled: value.enabled !== false,
              // default true if not specified
              maxEntitySize: (_value$maxEntitySize = value.maxEntitySize) !== null && _value$maxEntitySize !== void 0 ? _value$maxEntitySize : 10000,
              maxExpansionDepth: (_value$maxExpansionDe = value.maxExpansionDepth) !== null && _value$maxExpansionDe !== void 0 ? _value$maxExpansionDe : 10,
              maxTotalExpansions: (_value$maxTotalExpans = value.maxTotalExpansions) !== null && _value$maxTotalExpans !== void 0 ? _value$maxTotalExpans : 1000,
              maxExpandedLength: (_value$maxExpandedLen = value.maxExpandedLength) !== null && _value$maxExpandedLen !== void 0 ? _value$maxExpandedLen : 100000,
              allowedTags: (_value$allowedTags = value.allowedTags) !== null && _value$allowedTags !== void 0 ? _value$allowedTags : null,
              tagFilter: (_value$tagFilter = value.tagFilter) !== null && _value$tagFilter !== void 0 ? _value$tagFilter : null
            };
          }

          // Default to enabled with limits
          return normalizeProcessEntities(true);
        }
        var buildOptions = function buildOptions(options) {
          var built = Object.assign({}, OptionsBuilder_defaultOptions, options);

          // Always normalize processEntities for backward compatibility and validation
          built.processEntities = normalizeProcessEntities(built.processEntities);
          //console.debug(built.processEntities)
          return built;
        };
        ; // ./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js

        var METADATA_SYMBOL;
        if (typeof Symbol !== "function") {
          METADATA_SYMBOL = "@@xmlMetadata";
        } else {
          METADATA_SYMBOL = Symbol("XML Node Metadata");
        }
        var XmlNode = /*#__PURE__*/function () {
          function XmlNode(tagname) {
            _classCallCheck(this, XmlNode);
            this.tagname = tagname;
            this.child = []; //nested tags, text, cdata, comments in order
            this[":@"] = {}; //attributes map
          }
          return _createClass(XmlNode, [{
            key: "add",
            value: function add(key, val) {
              // this.child.push( {name : key, val: val, isCdata: isCdata });
              if (key === "__proto__") key = "#__proto__";
              this.child.push(_defineProperty({}, key, val));
            }
          }, {
            key: "addChild",
            value: function addChild(node, startIndex) {
              if (node.tagname === "__proto__") node.tagname = "#__proto__";
              if (node[":@"] && Object.keys(node[":@"]).length > 0) {
                this.child.push(_defineProperty(_defineProperty({}, node.tagname, node.child), ":@", node[":@"]));
              } else {
                this.child.push(_defineProperty({}, node.tagname, node.child));
              }
              // if requested, add the startIndex
              if (startIndex !== undefined) {
                // Note: for now we just overwrite the metadata. If we had more complex metadata,
                // we might need to do an object append here:  metadata = { ...metadata, startIndex }
                this.child[this.child.length - 1][METADATA_SYMBOL] = {
                  startIndex: startIndex
                };
              }
            }
            /** symbol used for metadata */
          }], [{
            key: "getMetaDataSymbol",
            value: function getMetaDataSymbol() {
              return METADATA_SYMBOL;
            }
          }]);
        }();
        ; // ./node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
        var DocTypeReader = /*#__PURE__*/function () {
          function DocTypeReader(options) {
            _classCallCheck(this, DocTypeReader);
            this.suppressValidationErr = !options;
            this.options = options;
          }
          return _createClass(DocTypeReader, [{
            key: "readDocType",
            value: function readDocType(xmlData, i) {
              var entities = {};
              if (xmlData[i + 3] === 'O' && xmlData[i + 4] === 'C' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'Y' && xmlData[i + 7] === 'P' && xmlData[i + 8] === 'E') {
                i = i + 9;
                var angleBracketsCount = 1;
                var hasBody = false,
                  comment = false;
                var exp = "";
                for (; i < xmlData.length; i++) {
                  if (xmlData[i] === '<' && !comment) {
                    //Determine the tag type
                    if (hasBody && hasSeq(xmlData, "!ENTITY", i)) {
                      i += 7;
                      var entityName = void 0,
                        val = void 0;
                      var _this$readEntityExp = this.readEntityExp(xmlData, i + 1, this.suppressValidationErr);
                      var _this$readEntityExp2 = _slicedToArray(_this$readEntityExp, 3);
                      entityName = _this$readEntityExp2[0];
                      val = _this$readEntityExp2[1];
                      i = _this$readEntityExp2[2];
                      if (val.indexOf("&") === -1) {
                        //Parameter entities are not supported
                        var escaped = entityName.replace(/[.\-+*:]/g, '\\.');
                        entities[entityName] = {
                          regx: RegExp("&".concat(escaped, ";"), "g"),
                          val: val
                        };
                      }
                    } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i)) {
                      i += 8; //Not supported
                      var _this$readElementExp = this.readElementExp(xmlData, i + 1),
                        index = _this$readElementExp.index;
                      i = index;
                    } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i)) {
                      i += 8; //Not supported
                      // const {index} = this.readAttlistExp(xmlData,i+1);
                      // i = index;
                    } else if (hasBody && hasSeq(xmlData, "!NOTATION", i)) {
                      i += 9; //Not supported
                      var _this$readNotationExp = this.readNotationExp(xmlData, i + 1, this.suppressValidationErr),
                        _index = _this$readNotationExp.index;
                      i = _index;
                    } else if (hasSeq(xmlData, "!--", i)) comment = true;else throw new Error("Invalid DOCTYPE");
                    angleBracketsCount++;
                    exp = "";
                  } else if (xmlData[i] === '>') {
                    //Read tag content
                    if (comment) {
                      if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                        comment = false;
                        angleBracketsCount--;
                      }
                    } else {
                      angleBracketsCount--;
                    }
                    if (angleBracketsCount === 0) {
                      break;
                    }
                  } else if (xmlData[i] === '[') {
                    hasBody = true;
                  } else {
                    exp += xmlData[i];
                  }
                }
                if (angleBracketsCount !== 0) {
                  throw new Error("Unclosed DOCTYPE");
                }
              } else {
                throw new Error("Invalid Tag instead of DOCTYPE");
              }
              return {
                entities: entities,
                i: i
              };
            }
          }, {
            key: "readEntityExp",
            value: function readEntityExp(xmlData, i) {
              //External entities are not supported
              //    <!ENTITY ext SYSTEM "http://normal-website.com" >

              //Parameter entities are not supported
              //    <!ENTITY entityname "&anotherElement;">

              //Internal entities are supported
              //    <!ENTITY entityname "replacement text">

              // Skip leading whitespace after <!ENTITY
              i = skipWhitespace(xmlData, i);

              // Read entity name
              var entityName = "";
              while (i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'") {
                entityName += xmlData[i];
                i++;
              }
              validateEntityName(entityName);

              // Skip whitespace after entity name
              i = skipWhitespace(xmlData, i);

              // Check for unsupported constructs (external entities or parameter entities)
              if (!this.suppressValidationErr) {
                if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
                  throw new Error("External entities are not supported");
                } else if (xmlData[i] === "%") {
                  throw new Error("Parameter entities are not supported");
                }
              }

              // Read entity value (internal entity)
              var entityValue = "";
              // Validate entity size
              var _this$readIdentifierV = this.readIdentifierVal(xmlData, i, "entity");
              var _this$readIdentifierV2 = _slicedToArray(_this$readIdentifierV, 2);
              i = _this$readIdentifierV2[0];
              entityValue = _this$readIdentifierV2[1];
              if (this.options.enabled !== false && this.options.maxEntitySize && entityValue.length > this.options.maxEntitySize) {
                throw new Error("Entity \"".concat(entityName, "\" size (").concat(entityValue.length, ") exceeds maximum allowed size (").concat(this.options.maxEntitySize, ")"));
              }
              i--;
              return [entityName, entityValue, i];
            }
          }, {
            key: "readNotationExp",
            value: function readNotationExp(xmlData, i) {
              // Skip leading whitespace after <!NOTATION
              i = skipWhitespace(xmlData, i);

              // Read notation name
              var notationName = "";
              while (i < xmlData.length && !/\s/.test(xmlData[i])) {
                notationName += xmlData[i];
                i++;
              }
              !this.suppressValidationErr && validateEntityName(notationName);

              // Skip whitespace after notation name
              i = skipWhitespace(xmlData, i);

              // Check identifier type (SYSTEM or PUBLIC)
              var identifierType = xmlData.substring(i, i + 6).toUpperCase();
              if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
                throw new Error("Expected SYSTEM or PUBLIC, found \"".concat(identifierType, "\""));
              }
              i += identifierType.length;

              // Skip whitespace after identifier type
              i = skipWhitespace(xmlData, i);

              // Read public identifier (if PUBLIC)
              var publicIdentifier = null;
              var systemIdentifier = null;
              if (identifierType === "PUBLIC") {
                // Skip whitespace after public identifier
                var _this$readIdentifierV3 = this.readIdentifierVal(xmlData, i, "publicIdentifier");
                var _this$readIdentifierV4 = _slicedToArray(_this$readIdentifierV3, 2);
                i = _this$readIdentifierV4[0];
                publicIdentifier = _this$readIdentifierV4[1];
                i = skipWhitespace(xmlData, i);

                // Optionally read system identifier
                if (xmlData[i] === '"' || xmlData[i] === "'") {
                  var _this$readIdentifierV5 = this.readIdentifierVal(xmlData, i, "systemIdentifier");
                  var _this$readIdentifierV6 = _slicedToArray(_this$readIdentifierV5, 2);
                  i = _this$readIdentifierV6[0];
                  systemIdentifier = _this$readIdentifierV6[1];
                }
              } else if (identifierType === "SYSTEM") {
                // Read system identifier (mandatory for SYSTEM)
                var _this$readIdentifierV7 = this.readIdentifierVal(xmlData, i, "systemIdentifier");
                var _this$readIdentifierV8 = _slicedToArray(_this$readIdentifierV7, 2);
                i = _this$readIdentifierV8[0];
                systemIdentifier = _this$readIdentifierV8[1];
                if (!this.suppressValidationErr && !systemIdentifier) {
                  throw new Error("Missing mandatory system identifier for SYSTEM notation");
                }
              }
              return {
                notationName: notationName,
                publicIdentifier: publicIdentifier,
                systemIdentifier: systemIdentifier,
                index: --i
              };
            }
          }, {
            key: "readIdentifierVal",
            value: function readIdentifierVal(xmlData, i, type) {
              var identifierVal = "";
              var startChar = xmlData[i];
              if (startChar !== '"' && startChar !== "'") {
                throw new Error("Expected quoted string, found \"".concat(startChar, "\""));
              }
              i++;
              while (i < xmlData.length && xmlData[i] !== startChar) {
                identifierVal += xmlData[i];
                i++;
              }
              if (xmlData[i] !== startChar) {
                throw new Error("Unterminated ".concat(type, " value"));
              }
              i++;
              return [i, identifierVal];
            }
          }, {
            key: "readElementExp",
            value: function readElementExp(xmlData, i) {
              // <!ELEMENT br EMPTY>
              // <!ELEMENT div ANY>
              // <!ELEMENT title (#PCDATA)>
              // <!ELEMENT book (title, author+)>
              // <!ELEMENT name (content-model)>

              // Skip leading whitespace after <!ELEMENT
              i = skipWhitespace(xmlData, i);

              // Read element name
              var elementName = "";
              while (i < xmlData.length && !/\s/.test(xmlData[i])) {
                elementName += xmlData[i];
                i++;
              }

              // Validate element name
              if (!this.suppressValidationErr && !isName(elementName)) {
                throw new Error("Invalid element name: \"".concat(elementName, "\""));
              }

              // Skip whitespace after element name
              i = skipWhitespace(xmlData, i);
              var contentModel = "";
              // Expect '(' to start content model
              if (xmlData[i] === "E" && hasSeq(xmlData, "MPTY", i)) i += 4;else if (xmlData[i] === "A" && hasSeq(xmlData, "NY", i)) i += 2;else if (xmlData[i] === "(") {
                i++; // Move past '('

                // Read content model
                while (i < xmlData.length && xmlData[i] !== ")") {
                  contentModel += xmlData[i];
                  i++;
                }
                if (xmlData[i] !== ")") {
                  throw new Error("Unterminated content model");
                }
              } else if (!this.suppressValidationErr) {
                throw new Error("Invalid Element Expression, found \"".concat(xmlData[i], "\""));
              }
              return {
                elementName: elementName,
                contentModel: contentModel.trim(),
                index: i
              };
            }
          }, {
            key: "readAttlistExp",
            value: function readAttlistExp(xmlData, i) {
              // Skip leading whitespace after <!ATTLIST
              i = skipWhitespace(xmlData, i);

              // Read element name
              var elementName = "";
              while (i < xmlData.length && !/\s/.test(xmlData[i])) {
                elementName += xmlData[i];
                i++;
              }

              // Validate element name
              validateEntityName(elementName);

              // Skip whitespace after element name
              i = skipWhitespace(xmlData, i);

              // Read attribute name
              var attributeName = "";
              while (i < xmlData.length && !/\s/.test(xmlData[i])) {
                attributeName += xmlData[i];
                i++;
              }

              // Validate attribute name
              if (!validateEntityName(attributeName)) {
                throw new Error("Invalid attribute name: \"".concat(attributeName, "\""));
              }

              // Skip whitespace after attribute name
              i = skipWhitespace(xmlData, i);

              // Read attribute type
              var attributeType = "";
              if (xmlData.substring(i, i + 8).toUpperCase() === "NOTATION") {
                attributeType = "NOTATION";
                i += 8; // Move past "NOTATION"

                // Skip whitespace after "NOTATION"
                i = skipWhitespace(xmlData, i);

                // Expect '(' to start the list of notations
                if (xmlData[i] !== "(") {
                  throw new Error("Expected '(', found \"".concat(xmlData[i], "\""));
                }
                i++; // Move past '('

                // Read the list of allowed notations
                var allowedNotations = [];
                while (i < xmlData.length && xmlData[i] !== ")") {
                  var notation = "";
                  while (i < xmlData.length && xmlData[i] !== "|" && xmlData[i] !== ")") {
                    notation += xmlData[i];
                    i++;
                  }

                  // Validate notation name
                  notation = notation.trim();
                  if (!validateEntityName(notation)) {
                    throw new Error("Invalid notation name: \"".concat(notation, "\""));
                  }
                  allowedNotations.push(notation);

                  // Skip '|' separator or exit loop
                  if (xmlData[i] === "|") {
                    i++; // Move past '|'
                    i = skipWhitespace(xmlData, i); // Skip optional whitespace after '|'
                  }
                }
                if (xmlData[i] !== ")") {
                  throw new Error("Unterminated list of notations");
                }
                i++; // Move past ')'

                // Store the allowed notations as part of the attribute type
                attributeType += " (" + allowedNotations.join("|") + ")";
              } else {
                // Handle simple types (e.g., CDATA, ID, IDREF, etc.)
                while (i < xmlData.length && !/\s/.test(xmlData[i])) {
                  attributeType += xmlData[i];
                  i++;
                }

                // Validate simple attribute type
                var validTypes = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
                if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
                  throw new Error("Invalid attribute type: \"".concat(attributeType, "\""));
                }
              }

              // Skip whitespace after attribute type
              i = skipWhitespace(xmlData, i);

              // Read default value
              var defaultValue = "";
              if (xmlData.substring(i, i + 8).toUpperCase() === "#REQUIRED") {
                defaultValue = "#REQUIRED";
                i += 8;
              } else if (xmlData.substring(i, i + 7).toUpperCase() === "#IMPLIED") {
                defaultValue = "#IMPLIED";
                i += 7;
              } else {
                var _this$readIdentifierV9 = this.readIdentifierVal(xmlData, i, "ATTLIST");
                var _this$readIdentifierV0 = _slicedToArray(_this$readIdentifierV9, 2);
                i = _this$readIdentifierV0[0];
                defaultValue = _this$readIdentifierV0[1];
              }
              return {
                elementName: elementName,
                attributeName: attributeName,
                attributeType: attributeType,
                defaultValue: defaultValue,
                index: i
              };
            }
          }]);
        }();
        var skipWhitespace = function skipWhitespace(data, index) {
          while (index < data.length && /\s/.test(data[index])) {
            index++;
          }
          return index;
        };
        function hasSeq(data, seq, i) {
          for (var j = 0; j < seq.length; j++) {
            if (seq[j] !== data[i + j + 1]) return false;
          }
          return true;
        }
        function validateEntityName(name) {
          if (isName(name)) return name;else throw new Error("Invalid entity name ".concat(name));
        }
        ; // ./node_modules/strnum/strnum.js
        var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
        var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
        // const octRegex = /^0x[a-z0-9]+/;
        // const binRegex = /0x[a-z0-9]+/;

        var consider = {
          hex: true,
          // oct: false,
          leadingZeros: true,
          decimalPoint: "\.",
          eNotation: true
          //skipLike: /regex/
        };
        function toNumber(str) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          options = Object.assign({}, consider, options);
          if (!str || typeof str !== "string") return str;
          var trimmedStr = str.trim();
          if (options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;else if (str === "0") return 0;else if (options.hex && hexRegex.test(trimmedStr)) {
            return parse_int(trimmedStr, 16);
            // }else if (options.oct && octRegex.test(str)) {
            //     return Number.parseInt(val, 8);
          } else if (trimmedStr.includes('e') || trimmedStr.includes('E')) {
            //eNotation
            return resolveEnotation(str, trimmedStr, options);
            // }else if (options.parseBin && binRegex.test(str)) {
            //     return Number.parseInt(val, 2);
          } else {
            //separate negative sign, leading zeros, and rest number
            var match = numRegex.exec(trimmedStr);
            // +00.123 => [ , '+', '00', '.123', ..
            if (match) {
              var sign = match[1] || "";
              var leadingZeros = match[2];
              var numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
              var decimalAdjacentToLeadingZeros = sign ?
              // 0., -00., 000.
              str[leadingZeros.length + 1] === "." : str[leadingZeros.length] === ".";

              //trim ending zeros for floating number
              if (!options.leadingZeros //leading zeros are not allowed
              && (leadingZeros.length > 1 || leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros)) {
                // 00, 00.3, +03.24, 03, 03.24
                return str;
              } else {
                //no leading zeros or leading zeros are allowed
                var num = Number(trimmedStr);
                var parsedStr = String(num);
                if (num === 0) return num;
                if (parsedStr.search(/[eE]/) !== -1) {
                  //given number is long and parsed to eNotation
                  if (options.eNotation) return num;else return str;
                } else if (trimmedStr.indexOf(".") !== -1) {
                  //floating number
                  if (parsedStr === "0") return num; //0.0
                  else if (parsedStr === numTrimmedByZeros) return num; //0.456. 0.79000
                  else if (parsedStr === "".concat(sign).concat(numTrimmedByZeros)) return num;else return str;
                }
                var n = leadingZeros ? numTrimmedByZeros : trimmedStr;
                if (leadingZeros) {
                  // -009 => -9
                  return n === parsedStr || sign + n === parsedStr ? num : str;
                } else {
                  // +9
                  return n === parsedStr || n === sign + parsedStr ? num : str;
                }
              }
            } else {
              //non-numeric string
              return str;
            }
          }
        }
        var eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
        function resolveEnotation(str, trimmedStr, options) {
          if (!options.eNotation) return str;
          var notation = trimmedStr.match(eNotationRegx);
          if (notation) {
            var sign = notation[1] || "";
            var eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
            var leadingZeros = notation[2];
            var eAdjacentToLeadingZeros = sign ?
            // 0E.
            str[leadingZeros.length + 1] === eChar : str[leadingZeros.length] === eChar;
            if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;else if (leadingZeros.length === 1 && (notation[3].startsWith(".".concat(eChar)) || notation[3][0] === eChar)) {
              return Number(trimmedStr);
            } else if (options.leadingZeros && !eAdjacentToLeadingZeros) {
              //accept with leading zeros
              //remove leading 0s
              trimmedStr = (notation[1] || "") + notation[3];
              return Number(trimmedStr);
            } else return str;
          } else {
            return str;
          }
        }

        /**
         * 
         * @param {string} numStr without leading zeros
         * @returns 
         */
        function trimZeros(numStr) {
          if (numStr && numStr.indexOf(".") !== -1) {
            //float
            numStr = numStr.replace(/0+$/, ""); //remove ending zeros
            if (numStr === ".") numStr = "0";else if (numStr[0] === ".") numStr = "0" + numStr;else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
            return numStr;
          }
          return numStr;
        }
        function parse_int(numStr, base) {
          //polyfill
          if (parseInt) return parseInt(numStr, base);else if (Number.parseInt) return Number.parseInt(numStr, base);else if (window && window.parseInt) return window.parseInt(numStr, base);else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
        }
        ; // ./node_modules/fast-xml-parser/src/ignoreAttributes.js
        function getIgnoreAttributesFn(ignoreAttributes) {
          if (typeof ignoreAttributes === 'function') {
            return ignoreAttributes;
          }
          if (Array.isArray(ignoreAttributes)) {
            return function (attrName) {
              var _iterator = _createForOfIteratorHelper(ignoreAttributes),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var pattern = _step.value;
                  if (typeof pattern === 'string' && attrName === pattern) {
                    return true;
                  }
                  if (pattern instanceof RegExp && pattern.test(attrName)) {
                    return true;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            };
          }
          return function () {
            return false;
          };
        }
        ; // ./node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js

        ///@ts-check

        // const regx =
        //   '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
        //   .replace(/NAME/g, util.nameRegexp);

        //const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
        //const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");
        var OrderedObjParser = /*#__PURE__*/_createClass(function OrderedObjParser(options) {
          _classCallCheck(this, OrderedObjParser);
          this.options = options;
          this.currentNode = null;
          this.tagsNodeStack = [];
          this.docTypeEntities = {};
          this.lastEntities = {
            "apos": {
              regex: /&(apos|#39|#x27);/g,
              val: "'"
            },
            "gt": {
              regex: /&(gt|#62|#x3E);/g,
              val: ">"
            },
            "lt": {
              regex: /&(lt|#60|#x3C);/g,
              val: "<"
            },
            "quot": {
              regex: /&(quot|#34|#x22);/g,
              val: "\""
            }
          };
          this.ampEntity = {
            regex: /&(amp|#38|#x26);/g,
            val: "&"
          };
          this.htmlEntities = {
            "space": {
              regex: /&(nbsp|#160);/g,
              val: " "
            },
            // "lt" : { regex: /&(lt|#60);/g, val: "<" },
            // "gt" : { regex: /&(gt|#62);/g, val: ">" },
            // "amp" : { regex: /&(amp|#38);/g, val: "&" },
            // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
            // "apos" : { regex: /&(apos|#39);/g, val: "'" },
            "cent": {
              regex: /&(cent|#162);/g,
              val: "¢"
            },
            "pound": {
              regex: /&(pound|#163);/g,
              val: "£"
            },
            "yen": {
              regex: /&(yen|#165);/g,
              val: "¥"
            },
            "euro": {
              regex: /&(euro|#8364);/g,
              val: "€"
            },
            "copyright": {
              regex: /&(copy|#169);/g,
              val: "©"
            },
            "reg": {
              regex: /&(reg|#174);/g,
              val: "®"
            },
            "inr": {
              regex: /&(inr|#8377);/g,
              val: "₹"
            },
            "num_dec": {
              regex: /&#([0-9]{1,7});/g,
              val: function val(_, str) {
                return fromCodePoint(str, 10, "&#");
              }
            },
            "num_hex": {
              regex: /&#x([0-9a-fA-F]{1,6});/g,
              val: function val(_, str) {
                return fromCodePoint(str, 16, "&#x");
              }
            }
          };
          this.addExternalEntities = addExternalEntities;
          this.parseXml = parseXml;
          this.parseTextData = parseTextData;
          this.resolveNameSpace = resolveNameSpace;
          this.buildAttributesMap = buildAttributesMap;
          this.isItStopNode = isItStopNode;
          this.replaceEntitiesValue = replaceEntitiesValue;
          this.readStopNodeData = readStopNodeData;
          this.saveTextToParentTag = saveTextToParentTag;
          this.addChild = addChild;
          this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
          this.entityExpansionCount = 0;
          this.currentExpandedLength = 0;
          if (this.options.stopNodes && this.options.stopNodes.length > 0) {
            this.stopNodesExact = new Set();
            this.stopNodesWildcard = new Set();
            for (var i = 0; i < this.options.stopNodes.length; i++) {
              var stopNodeExp = this.options.stopNodes[i];
              if (typeof stopNodeExp !== 'string') continue;
              if (stopNodeExp.startsWith("*.")) {
                this.stopNodesWildcard.add(stopNodeExp.substring(2));
              } else {
                this.stopNodesExact.add(stopNodeExp);
              }
            }
          }
        });
        function addExternalEntities(externalEntities) {
          var entKeys = Object.keys(externalEntities);
          for (var i = 0; i < entKeys.length; i++) {
            var ent = entKeys[i];
            var escaped = ent.replace(/[.\-+*:]/g, '\\.');
            this.lastEntities[ent] = {
              regex: new RegExp("&" + escaped + ";", "g"),
              val: externalEntities[ent]
            };
          }
        }

        /**
         * @param {string} val
         * @param {string} tagName
         * @param {string} jPath
         * @param {boolean} dontTrim
         * @param {boolean} hasAttributes
         * @param {boolean} isLeafNode
         * @param {boolean} escapeEntities
         */
        function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
          if (val !== undefined) {
            if (this.options.trimValues && !dontTrim) {
              val = val.trim();
            }
            if (val.length > 0) {
              if (!escapeEntities) val = this.replaceEntitiesValue(val, tagName, jPath);
              var newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
              if (newval === null || newval === undefined) {
                //don't parse
                return val;
              } else if (_typeof(newval) !== _typeof(val) || newval !== val) {
                //overwrite
                return newval;
              } else if (this.options.trimValues) {
                return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
              } else {
                var trimmedVal = val.trim();
                if (trimmedVal === val) {
                  return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
                } else {
                  return val;
                }
              }
            }
          }
        }
        function resolveNameSpace(tagname) {
          if (this.options.removeNSPrefix) {
            var tags = tagname.split(':');
            var prefix = tagname.charAt(0) === '/' ? '/' : '';
            if (tags[0] === 'xmlns') {
              return '';
            }
            if (tags.length === 2) {
              tagname = prefix + tags[1];
            }
          }
          return tagname;
        }

        //TODO: change regex to capture NS
        //const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
        var attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');
        function buildAttributesMap(attrStr, jPath, tagName) {
          if (this.options.ignoreAttributes !== true && typeof attrStr === 'string') {
            // attrStr = attrStr.replace(/\r?\n/g, ' ');
            //attrStr = attrStr || attrStr.trim();

            var matches = getAllMatches(attrStr, attrsRegx);
            var len = matches.length; //don't make it inline
            var attrs = {};
            for (var i = 0; i < len; i++) {
              var attrName = this.resolveNameSpace(matches[i][1]);
              if (this.ignoreAttributesFn(attrName, jPath)) {
                continue;
              }
              var oldVal = matches[i][4];
              var aName = this.options.attributeNamePrefix + attrName;
              if (attrName.length) {
                if (this.options.transformAttributeName) {
                  aName = this.options.transformAttributeName(aName);
                }
                if (aName === "__proto__") aName = "#__proto__";
                if (oldVal !== undefined) {
                  if (this.options.trimValues) {
                    oldVal = oldVal.trim();
                  }
                  oldVal = this.replaceEntitiesValue(oldVal, tagName, jPath);
                  var newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
                  if (newVal === null || newVal === undefined) {
                    //don't parse
                    attrs[aName] = oldVal;
                  } else if (_typeof(newVal) !== _typeof(oldVal) || newVal !== oldVal) {
                    //overwrite
                    attrs[aName] = newVal;
                  } else {
                    //parse
                    attrs[aName] = parseValue(oldVal, this.options.parseAttributeValue, this.options.numberParseOptions);
                  }
                } else if (this.options.allowBooleanAttributes) {
                  attrs[aName] = true;
                }
              }
            }
            if (!Object.keys(attrs).length) {
              return;
            }
            if (this.options.attributesGroupName) {
              var attrCollection = {};
              attrCollection[this.options.attributesGroupName] = attrs;
              return attrCollection;
            }
            return attrs;
          }
        }
        var parseXml = function parseXml(xmlData) {
          xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
          var xmlObj = new XmlNode('!xml');
          var currentNode = xmlObj;
          var textData = "";
          var jPath = "";

          // Reset entity expansion counters for this document
          this.entityExpansionCount = 0;
          this.currentExpandedLength = 0;
          var docTypeReader = new DocTypeReader(this.options.processEntities);
          for (var i = 0; i < xmlData.length; i++) {
            //for each char in XML data
            var ch = xmlData[i];
            if (ch === '<') {
              // const nextIndex = i+1;
              // const _2ndChar = xmlData[nextIndex];
              if (xmlData[i + 1] === '/') {
                //Closing Tag
                var closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
                var tagName = xmlData.substring(i + 2, closeIndex).trim();
                if (this.options.removeNSPrefix) {
                  var colonIndex = tagName.indexOf(":");
                  if (colonIndex !== -1) {
                    tagName = tagName.substr(colonIndex + 1);
                  }
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                if (currentNode) {
                  textData = this.saveTextToParentTag(textData, currentNode, jPath);
                }

                //check if last tag of nested tag was unpaired tag
                var lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
                if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
                  throw new Error("Unpaired tag can not be used as closing tag: </".concat(tagName, ">"));
                }
                var propIndex = 0;
                if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
                  propIndex = jPath.lastIndexOf('.', jPath.lastIndexOf('.') - 1);
                  this.tagsNodeStack.pop();
                } else {
                  propIndex = jPath.lastIndexOf(".");
                }
                jPath = jPath.substring(0, propIndex);
                currentNode = this.tagsNodeStack.pop(); //avoid recursion, set the parent tag scope
                textData = "";
                i = closeIndex;
              } else if (xmlData[i + 1] === '?') {
                var tagData = readTagExp(xmlData, i, false, "?>");
                if (!tagData) throw new Error("Pi Tag is not closed.");
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
                if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
                  //do nothing
                } else {
                  var childNode = new XmlNode(tagData.tagName);
                  childNode.add(this.options.textNodeName, "");
                  if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                    childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
                  }
                  this.addChild(currentNode, childNode, jPath, i);
                }
                i = tagData.closeIndex + 1;
              } else if (xmlData.substr(i + 1, 3) === '!--') {
                var endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
                if (this.options.commentPropName) {
                  var comment = xmlData.substring(i + 4, endIndex - 2);
                  textData = this.saveTextToParentTag(textData, currentNode, jPath);
                  currentNode.add(this.options.commentPropName, [_defineProperty({}, this.options.textNodeName, comment)]);
                }
                i = endIndex;
              } else if (xmlData.substr(i + 1, 2) === '!D') {
                var result = docTypeReader.readDocType(xmlData, i);
                this.docTypeEntities = result.entities;
                i = result.i;
              } else if (xmlData.substr(i + 1, 2) === '![') {
                var _closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
                var tagExp = xmlData.substring(i + 9, _closeIndex);
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
                var val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
                if (val == undefined) val = "";

                //cdata should be set even if it is 0 length string
                if (this.options.cdataPropName) {
                  currentNode.add(this.options.cdataPropName, [_defineProperty({}, this.options.textNodeName, tagExp)]);
                } else {
                  currentNode.add(this.options.textNodeName, val);
                }
                i = _closeIndex + 2;
              } else {
                //Opening tag
                var _result = readTagExp(xmlData, i, this.options.removeNSPrefix);
                var _tagName = _result.tagName;
                var rawTagName = _result.rawTagName;
                var _tagExp = _result.tagExp;
                var attrExpPresent = _result.attrExpPresent;
                var _closeIndex2 = _result.closeIndex;
                if (this.options.transformTagName) {
                  //console.log(tagExp, tagName)
                  var newTagName = this.options.transformTagName(_tagName);
                  if (_tagExp === _tagName) {
                    _tagExp = newTagName;
                  }
                  _tagName = newTagName;
                }

                //save text as child node
                if (currentNode && textData) {
                  if (currentNode.tagname !== '!xml') {
                    //when nested tag is found
                    textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
                  }
                }

                //check if last tag was unpaired tag
                var lastTag = currentNode;
                if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
                  currentNode = this.tagsNodeStack.pop();
                  jPath = jPath.substring(0, jPath.lastIndexOf("."));
                }
                if (_tagName !== xmlObj.tagname) {
                  jPath += jPath ? "." + _tagName : _tagName;
                }
                var startIndex = i;
                if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, jPath, _tagName)) {
                  var tagContent = "";
                  //self-closing tag
                  if (_tagExp.length > 0 && _tagExp.lastIndexOf("/") === _tagExp.length - 1) {
                    if (_tagName[_tagName.length - 1] === "/") {
                      //remove trailing '/'
                      _tagName = _tagName.substr(0, _tagName.length - 1);
                      jPath = jPath.substr(0, jPath.length - 1);
                      _tagExp = _tagName;
                    } else {
                      _tagExp = _tagExp.substr(0, _tagExp.length - 1);
                    }
                    i = _result.closeIndex;
                  }
                  //unpaired tag
                  else if (this.options.unpairedTags.indexOf(_tagName) !== -1) {
                    i = _result.closeIndex;
                  }
                  //normal tag
                  else {
                    //read until closing tag is found
                    var _result2 = this.readStopNodeData(xmlData, rawTagName, _closeIndex2 + 1);
                    if (!_result2) throw new Error("Unexpected end of ".concat(rawTagName));
                    i = _result2.i;
                    tagContent = _result2.tagContent;
                  }
                  var _childNode = new XmlNode(_tagName);
                  if (_tagName !== _tagExp && attrExpPresent) {
                    _childNode[":@"] = this.buildAttributesMap(_tagExp, jPath, _tagName);
                  }
                  if (tagContent) {
                    tagContent = this.parseTextData(tagContent, _tagName, jPath, true, attrExpPresent, true, true);
                  }
                  jPath = jPath.substr(0, jPath.lastIndexOf("."));
                  _childNode.add(this.options.textNodeName, tagContent);
                  this.addChild(currentNode, _childNode, jPath, startIndex);
                } else {
                  //selfClosing tag
                  if (_tagExp.length > 0 && _tagExp.lastIndexOf("/") === _tagExp.length - 1) {
                    if (_tagName[_tagName.length - 1] === "/") {
                      //remove trailing '/'
                      _tagName = _tagName.substr(0, _tagName.length - 1);
                      jPath = jPath.substr(0, jPath.length - 1);
                      _tagExp = _tagName;
                    } else {
                      _tagExp = _tagExp.substr(0, _tagExp.length - 1);
                    }
                    if (this.options.transformTagName) {
                      var _newTagName = this.options.transformTagName(_tagName);
                      if (_tagExp === _tagName) {
                        _tagExp = _newTagName;
                      }
                      _tagName = _newTagName;
                    }
                    var _childNode2 = new XmlNode(_tagName);
                    if (_tagName !== _tagExp && attrExpPresent) {
                      _childNode2[":@"] = this.buildAttributesMap(_tagExp, jPath, _tagName);
                    }
                    this.addChild(currentNode, _childNode2, jPath, startIndex);
                    jPath = jPath.substr(0, jPath.lastIndexOf("."));
                  }
                  //opening tag
                  else {
                    var _childNode3 = new XmlNode(_tagName);
                    this.tagsNodeStack.push(currentNode);
                    if (_tagName !== _tagExp && attrExpPresent) {
                      _childNode3[":@"] = this.buildAttributesMap(_tagExp, jPath, _tagName);
                    }
                    this.addChild(currentNode, _childNode3, jPath, startIndex);
                    currentNode = _childNode3;
                  }
                  textData = "";
                  i = _closeIndex2;
                }
              }
            } else {
              textData += xmlData[i];
            }
          }
          return xmlObj.child;
        };
        function addChild(currentNode, childNode, jPath, startIndex) {
          // unset startIndex if not requested
          if (!this.options.captureMetaData) startIndex = undefined;
          var result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
          if (result === false) {
            //do nothing
          } else if (typeof result === "string") {
            childNode.tagname = result;
            currentNode.addChild(childNode, startIndex);
          } else {
            currentNode.addChild(childNode, startIndex);
          }
        }
        var replaceEntitiesValue = function replaceEntitiesValue(val, tagName, jPath) {
          // Performance optimization: Early return if no entities to replace
          if (val.indexOf('&') === -1) {
            return val;
          }
          var entityConfig = this.options.processEntities;
          if (!entityConfig.enabled) {
            return val;
          }

          // Check tag-specific filtering
          if (entityConfig.allowedTags) {
            if (!entityConfig.allowedTags.includes(tagName)) {
              return val; // Skip entity replacement for current tag as not set
            }
          }
          if (entityConfig.tagFilter) {
            if (!entityConfig.tagFilter(tagName, jPath)) {
              return val; // Skip based on custom filter
            }
          }

          // Replace DOCTYPE entities
          for (var entityName in this.docTypeEntities) {
            var entity = this.docTypeEntities[entityName];
            var matches = val.match(entity.regx);
            if (matches) {
              // Track expansions
              this.entityExpansionCount += matches.length;

              // Check expansion limit
              if (entityConfig.maxTotalExpansions && this.entityExpansionCount > entityConfig.maxTotalExpansions) {
                throw new Error("Entity expansion limit exceeded: ".concat(this.entityExpansionCount, " > ").concat(entityConfig.maxTotalExpansions));
              }

              // Store length before replacement
              var lengthBefore = val.length;
              val = val.replace(entity.regx, entity.val);

              // Check expanded length immediately after replacement
              if (entityConfig.maxExpandedLength) {
                this.currentExpandedLength += val.length - lengthBefore;
                if (this.currentExpandedLength > entityConfig.maxExpandedLength) {
                  throw new Error("Total expanded content size exceeded: ".concat(this.currentExpandedLength, " > ").concat(entityConfig.maxExpandedLength));
                }
              }
            }
          }
          if (val.indexOf('&') === -1) return val; // Early exit

          // Replace standard entities
          for (var _entityName in this.lastEntities) {
            var _entity = this.lastEntities[_entityName];
            val = val.replace(_entity.regex, _entity.val);
          }
          if (val.indexOf('&') === -1) return val; // Early exit

          // Replace HTML entities if enabled
          if (this.options.htmlEntities) {
            for (var _entityName2 in this.htmlEntities) {
              var _entity2 = this.htmlEntities[_entityName2];
              val = val.replace(_entity2.regex, _entity2.val);
            }
          }

          // Replace ampersand entity last
          val = val.replace(this.ampEntity.regex, this.ampEntity.val);
          return val;
        };
        function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
          if (textData) {
            //store previously collected data as textNode
            if (isLeafNode === undefined) isLeafNode = currentNode.child.length === 0;
            textData = this.parseTextData(textData, currentNode.tagname, jPath, false, currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false, isLeafNode);
            if (textData !== undefined && textData !== "") currentNode.add(this.options.textNodeName, textData);
            textData = "";
          }
          return textData;
        }

        //TODO: use jPath to simplify the logic
        /**
         * @param {Set} stopNodesExact
         * @param {Set} stopNodesWildcard
         * @param {string} jPath
         * @param {string} currentTagName
         */
        function isItStopNode(stopNodesExact, stopNodesWildcard, jPath, currentTagName) {
          if (stopNodesWildcard && stopNodesWildcard.has(currentTagName)) return true;
          if (stopNodesExact && stopNodesExact.has(jPath)) return true;
          return false;
        }

        /**
         * Returns the tag Expression and where it is ending handling single-double quotes situation
         * @param {string} xmlData 
         * @param {number} i starting index
         * @returns 
         */
        function tagExpWithClosingIndex(xmlData, i) {
          var closingChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ">";
          var attrBoundary;
          var tagExp = "";
          for (var index = i; index < xmlData.length; index++) {
            var ch = xmlData[index];
            if (attrBoundary) {
              if (ch === attrBoundary) attrBoundary = ""; //reset
            } else if (ch === '"' || ch === "'") {
              attrBoundary = ch;
            } else if (ch === closingChar[0]) {
              if (closingChar[1]) {
                if (xmlData[index + 1] === closingChar[1]) {
                  return {
                    data: tagExp,
                    index: index
                  };
                }
              } else {
                return {
                  data: tagExp,
                  index: index
                };
              }
            } else if (ch === '\t') {
              ch = " ";
            }
            tagExp += ch;
          }
        }
        function findClosingIndex(xmlData, str, i, errMsg) {
          var closingIndex = xmlData.indexOf(str, i);
          if (closingIndex === -1) {
            throw new Error(errMsg);
          } else {
            return closingIndex + str.length - 1;
          }
        }
        function readTagExp(xmlData, i, removeNSPrefix) {
          var closingChar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ">";
          var result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
          if (!result) return;
          var tagExp = result.data;
          var closeIndex = result.index;
          var separatorIndex = tagExp.search(/\s/);
          var tagName = tagExp;
          var attrExpPresent = true;
          if (separatorIndex !== -1) {
            //separate tag name and attributes expression
            tagName = tagExp.substring(0, separatorIndex);
            tagExp = tagExp.substring(separatorIndex + 1).trimStart();
          }
          var rawTagName = tagName;
          if (removeNSPrefix) {
            var colonIndex = tagName.indexOf(":");
            if (colonIndex !== -1) {
              tagName = tagName.substr(colonIndex + 1);
              attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
            }
          }
          return {
            tagName: tagName,
            tagExp: tagExp,
            closeIndex: closeIndex,
            attrExpPresent: attrExpPresent,
            rawTagName: rawTagName
          };
        }
        /**
         * find paired tag for a stop node
         * @param {string} xmlData 
         * @param {string} tagName 
         * @param {number} i 
         */
        function readStopNodeData(xmlData, tagName, i) {
          var startIndex = i;
          // Starting at 1 since we already have an open tag
          var openTagCount = 1;
          for (; i < xmlData.length; i++) {
            if (xmlData[i] === "<") {
              if (xmlData[i + 1] === "/") {
                //close tag
                var closeIndex = findClosingIndex(xmlData, ">", i, "".concat(tagName, " is not closed"));
                var closeTagName = xmlData.substring(i + 2, closeIndex).trim();
                if (closeTagName === tagName) {
                  openTagCount--;
                  if (openTagCount === 0) {
                    return {
                      tagContent: xmlData.substring(startIndex, i),
                      i: closeIndex
                    };
                  }
                }
                i = closeIndex;
              } else if (xmlData[i + 1] === '?') {
                var _closeIndex3 = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
                i = _closeIndex3;
              } else if (xmlData.substr(i + 1, 3) === '!--') {
                var _closeIndex4 = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
                i = _closeIndex4;
              } else if (xmlData.substr(i + 1, 2) === '![') {
                var _closeIndex5 = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
                i = _closeIndex5;
              } else {
                var tagData = readTagExp(xmlData, i, '>');
                if (tagData) {
                  var openTagName = tagData && tagData.tagName;
                  if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                    openTagCount++;
                  }
                  i = tagData.closeIndex;
                }
              }
            }
          } //end for loop
        }
        function parseValue(val, shouldParse, options) {
          if (shouldParse && typeof val === 'string') {
            //console.log(options)
            var newval = val.trim();
            if (newval === 'true') return true;else if (newval === 'false') return false;else return toNumber(val, options);
          } else {
            if (isExist(val)) {
              return val;
            } else {
              return '';
            }
          }
        }
        function fromCodePoint(str, base, prefix) {
          var codePoint = Number.parseInt(str, base);
          if (codePoint >= 0 && codePoint <= 0x10FFFF) {
            return String.fromCodePoint(codePoint);
          } else {
            return prefix + str + ";";
          }
        }
        ; // ./node_modules/fast-xml-parser/src/xmlparser/node2json.js

        var node2json_METADATA_SYMBOL = XmlNode.getMetaDataSymbol();

        /**
         * 
         * @param {array} node 
         * @param {any} options 
         * @returns 
         */
        function prettify(node, options) {
          return compress(node, options);
        }

        /**
         * 
         * @param {array} arr 
         * @param {object} options 
         * @param {string} jPath 
         * @returns object
         */
        function compress(arr, options, jPath) {
          var text;
          var compressedObj = {};
          for (var i = 0; i < arr.length; i++) {
            var tagObj = arr[i];
            var property = propName(tagObj);
            var newJpath = "";
            if (jPath === undefined) newJpath = property;else newJpath = jPath + "." + property;
            if (property === options.textNodeName) {
              if (text === undefined) text = tagObj[property];else text += "" + tagObj[property];
            } else if (property === undefined) {
              continue;
            } else if (tagObj[property]) {
              var val = compress(tagObj[property], options, newJpath);
              var isLeaf = isLeafTag(val, options);
              if (tagObj[node2json_METADATA_SYMBOL] !== undefined) {
                val[node2json_METADATA_SYMBOL] = tagObj[node2json_METADATA_SYMBOL]; // copy over metadata
              }
              if (tagObj[":@"]) {
                assignAttributes(val, tagObj[":@"], newJpath, options);
              } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode) {
                val = val[options.textNodeName];
              } else if (Object.keys(val).length === 0) {
                if (options.alwaysCreateTextNode) val[options.textNodeName] = "";else val = "";
              }
              if (compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
                if (!Array.isArray(compressedObj[property])) {
                  compressedObj[property] = [compressedObj[property]];
                }
                compressedObj[property].push(val);
              } else {
                //TODO: if a node is not an array, then check if it should be an array
                //also determine if it is a leaf node
                if (options.isArray(property, newJpath, isLeaf)) {
                  compressedObj[property] = [val];
                } else {
                  compressedObj[property] = val;
                }
              }
            }
          }
          // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
          if (typeof text === "string") {
            if (text.length > 0) compressedObj[options.textNodeName] = text;
          } else if (text !== undefined) compressedObj[options.textNodeName] = text;
          return compressedObj;
        }
        function propName(obj) {
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== ":@") return key;
          }
        }
        function assignAttributes(obj, attrMap, jpath, options) {
          if (attrMap) {
            var keys = Object.keys(attrMap);
            var len = keys.length; //don't make it inline
            for (var i = 0; i < len; i++) {
              var atrrName = keys[i];
              if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
                obj[atrrName] = [attrMap[atrrName]];
              } else {
                obj[atrrName] = attrMap[atrrName];
              }
            }
          }
        }
        function isLeafTag(obj, options) {
          var textNodeName = options.textNodeName;
          var propCount = Object.keys(obj).length;
          if (propCount === 0) {
            return true;
          }
          if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
            return true;
          }
          return false;
        }
        ; // ./node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
        var _XMLParser = /*#__PURE__*/function () {
          function _XMLParser(options) {
            _classCallCheck(this, _XMLParser);
            this.externalEntities = {};
            this.options = buildOptions(options);
          }
          /**
           * Parse XML dats to JS object 
           * @param {string|Uint8Array} xmlData 
           * @param {boolean|Object} validationOption 
           */
          return _createClass(_XMLParser, [{
            key: "parse",
            value: function parse(xmlData, validationOption) {
              if (typeof xmlData !== "string" && xmlData.toString) {
                xmlData = xmlData.toString();
              } else if (typeof xmlData !== "string") {
                throw new Error("XML data is accepted in String or Bytes[] form.");
              }
              if (validationOption) {
                if (validationOption === true) validationOption = {}; //validate with default options

                var result = validate(xmlData, validationOption);
                if (result !== true) {
                  throw Error("".concat(result.err.msg, ":").concat(result.err.line, ":").concat(result.err.col));
                }
              }
              var orderedObjParser = new OrderedObjParser(this.options);
              orderedObjParser.addExternalEntities(this.externalEntities);
              var orderedResult = orderedObjParser.parseXml(xmlData);
              if (this.options.preserveOrder || orderedResult === undefined) return orderedResult;else return prettify(orderedResult, this.options);
            }

            /**
             * Add Entity which is not by default supported by this library
             * @param {string} key 
             * @param {string} value 
             */
          }, {
            key: "addEntity",
            value: function addEntity(key, value) {
              if (value.indexOf("&") !== -1) {
                throw new Error("Entity value can't have '&'");
              } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
                throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
              } else if (value === "&") {
                throw new Error("An entity with value '&' is not permitted");
              } else {
                this.externalEntities[key] = value;
              }
            }

            /**
             * Returns a Symbol that can be used to access the metadata
             * property on a node.
             * 
             * If Symbol is not available in the environment, an ordinary property is used
             * and the name of the property is here returned.
             * 
             * The XMLMetaData property is only present when `captureMetaData`
             * is true in the options.
             */
          }], [{
            key: "getMetaDataSymbol",
            value: function getMetaDataSymbol() {
              return XmlNode.getMetaDataSymbol();
            }
          }]);
        }();
        ; // ./node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
        var EOL = "\n";

        /**
         * 
         * @param {array} jArray 
         * @param {any} options 
         * @returns 
         */
        function toXml(jArray, options) {
          var indentation = "";
          if (options.format && options.indentBy.length > 0) {
            indentation = EOL;
          }
          return arrToStr(jArray, options, "", indentation);
        }
        function arrToStr(arr, options, jPath, indentation) {
          var xmlStr = "";
          var isPreviousElementTag = false;
          for (var i = 0; i < arr.length; i++) {
            var tagObj = arr[i];
            var tagName = orderedJs2Xml_propName(tagObj);
            if (tagName === undefined) continue;
            var newJPath = "";
            if (jPath.length === 0) newJPath = tagName;else newJPath = "".concat(jPath, ".").concat(tagName);
            if (tagName === options.textNodeName) {
              var tagText = tagObj[tagName];
              if (!isStopNode(newJPath, options)) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = orderedJs2Xml_replaceEntitiesValue(tagText, options);
              }
              if (isPreviousElementTag) {
                xmlStr += indentation;
              }
              xmlStr += tagText;
              isPreviousElementTag = false;
              continue;
            } else if (tagName === options.cdataPropName) {
              if (isPreviousElementTag) {
                xmlStr += indentation;
              }
              xmlStr += "<![CDATA[".concat(tagObj[tagName][0][options.textNodeName], "]]>");
              isPreviousElementTag = false;
              continue;
            } else if (tagName === options.commentPropName) {
              xmlStr += indentation + "<!--".concat(tagObj[tagName][0][options.textNodeName], "-->");
              isPreviousElementTag = true;
              continue;
            } else if (tagName[0] === "?") {
              var _attStr = attr_to_str(tagObj[":@"], options);
              var tempInd = tagName === "?xml" ? "" : indentation;
              var piTextNodeName = tagObj[tagName][0][options.textNodeName];
              piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
              xmlStr += tempInd + "<".concat(tagName).concat(piTextNodeName).concat(_attStr, "?>");
              isPreviousElementTag = true;
              continue;
            }
            var newIdentation = indentation;
            if (newIdentation !== "") {
              newIdentation += options.indentBy;
            }
            var attStr = attr_to_str(tagObj[":@"], options);
            var tagStart = indentation + "<".concat(tagName).concat(attStr);
            var tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
            if (options.unpairedTags.indexOf(tagName) !== -1) {
              if (options.suppressUnpairedNode) xmlStr += tagStart + ">";else xmlStr += tagStart + "/>";
            } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
              xmlStr += tagStart + "/>";
            } else if (tagValue && tagValue.endsWith(">")) {
              xmlStr += tagStart + ">".concat(tagValue).concat(indentation, "</").concat(tagName, ">");
            } else {
              xmlStr += tagStart + ">";
              if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
              } else {
                xmlStr += tagValue;
              }
              xmlStr += "</".concat(tagName, ">");
            }
            isPreviousElementTag = true;
          }
          return xmlStr;
        }
        function orderedJs2Xml_propName(obj) {
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!obj.hasOwnProperty(key)) continue;
            if (key !== ":@") return key;
          }
        }
        function attr_to_str(attrMap, options) {
          var attrStr = "";
          if (attrMap && !options.ignoreAttributes) {
            for (var attr in attrMap) {
              if (!attrMap.hasOwnProperty(attr)) continue;
              var attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
              attrVal = orderedJs2Xml_replaceEntitiesValue(attrVal, options);
              if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += " ".concat(attr.substr(options.attributeNamePrefix.length));
              } else {
                attrStr += " ".concat(attr.substr(options.attributeNamePrefix.length), "=\"").concat(attrVal, "\"");
              }
            }
          }
          return attrStr;
        }
        function isStopNode(jPath, options) {
          jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
          var tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
          for (var index in options.stopNodes) {
            if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
          }
          return false;
        }
        function orderedJs2Xml_replaceEntitiesValue(textValue, options) {
          if (textValue && textValue.length > 0 && options.processEntities) {
            for (var i = 0; i < options.entities.length; i++) {
              var entity = options.entities[i];
              textValue = textValue.replace(entity.regex, entity.val);
            }
          }
          return textValue;
        }
        ; // ./node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js

        //parse Empty Node as self closing node

        var json2xml_defaultOptions = {
          attributeNamePrefix: '@_',
          attributesGroupName: false,
          textNodeName: '#text',
          ignoreAttributes: true,
          cdataPropName: false,
          format: false,
          indentBy: '  ',
          suppressEmptyNode: false,
          suppressUnpairedNode: true,
          suppressBooleanAttributes: true,
          tagValueProcessor: function tagValueProcessor(key, a) {
            return a;
          },
          attributeValueProcessor: function attributeValueProcessor(attrName, a) {
            return a;
          },
          preserveOrder: false,
          commentPropName: false,
          unpairedTags: [],
          entities: [{
            regex: new RegExp("&", "g"),
            val: "&amp;"
          },
          //it must be on top
          {
            regex: new RegExp(">", "g"),
            val: "&gt;"
          }, {
            regex: new RegExp("<", "g"),
            val: "&lt;"
          }, {
            regex: new RegExp("\'", "g"),
            val: "&apos;"
          }, {
            regex: new RegExp("\"", "g"),
            val: "&quot;"
          }],
          processEntities: true,
          stopNodes: [],
          // transformTagName: false,
          // transformAttributeName: false,
          oneListGroup: false
        };
        function Builder(options) {
          this.options = Object.assign({}, json2xml_defaultOptions, options);
          if (this.options.ignoreAttributes === true || this.options.attributesGroupName) {
            this.isAttribute = function /*a*/
            () {
              return false;
            };
          } else {
            this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
            this.attrPrefixLen = this.options.attributeNamePrefix.length;
            this.isAttribute = isAttribute;
          }
          this.processTextOrObjNode = processTextOrObjNode;
          if (this.options.format) {
            this.indentate = indentate;
            this.tagEndChar = '>\n';
            this.newLine = '\n';
          } else {
            this.indentate = function () {
              return '';
            };
            this.tagEndChar = '>';
            this.newLine = '';
          }
        }
        Builder.prototype.build = function (jObj) {
          if (this.options.preserveOrder) {
            return toXml(jObj, this.options);
          } else {
            if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
              jObj = _defineProperty({}, this.options.arrayNodeName, jObj);
            }
            return this.j2x(jObj, 0, []).val;
          }
        };
        Builder.prototype.j2x = function (jObj, level, ajPath) {
          var attrStr = '';
          var val = '';
          var jPath = ajPath.join('.');
          for (var key in jObj) {
            if (!Object.prototype.hasOwnProperty.call(jObj, key)) continue;
            if (typeof jObj[key] === 'undefined') {
              // supress undefined node only if it is not an attribute
              if (this.isAttribute(key)) {
                val += '';
              }
            } else if (jObj[key] === null) {
              // null attribute should be ignored by the attribute list, but should not cause the tag closing
              if (this.isAttribute(key)) {
                val += '';
              } else if (key === this.options.cdataPropName) {
                val += '';
              } else if (key[0] === '?') {
                val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
              } else {
                val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
              }
              // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
            } else if (jObj[key] instanceof Date) {
              val += this.buildTextValNode(jObj[key], key, '', level);
            } else if (_typeof(jObj[key]) !== 'object') {
              //premitive type
              var attr = this.isAttribute(key);
              if (attr && !this.ignoreAttributesFn(attr, jPath)) {
                attrStr += this.buildAttrPairStr(attr, '' + jObj[key]);
              } else if (!attr) {
                //tag value
                if (key === this.options.textNodeName) {
                  var newval = this.options.tagValueProcessor(key, '' + jObj[key]);
                  val += this.replaceEntitiesValue(newval);
                } else {
                  val += this.buildTextValNode(jObj[key], key, '', level);
                }
              }
            } else if (Array.isArray(jObj[key])) {
              //repeated nodes
              var arrLen = jObj[key].length;
              var listTagVal = "";
              var listTagAttr = "";
              for (var j = 0; j < arrLen; j++) {
                var item = jObj[key][j];
                if (typeof item === 'undefined') {
                  // supress undefined node
                } else if (item === null) {
                  if (key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
                  // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
                } else if (_typeof(item) === 'object') {
                  if (this.options.oneListGroup) {
                    var result = this.j2x(item, level + 1, ajPath.concat(key));
                    listTagVal += result.val;
                    if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
                      listTagAttr += result.attrStr;
                    }
                  } else {
                    listTagVal += this.processTextOrObjNode(item, key, level, ajPath);
                  }
                } else {
                  if (this.options.oneListGroup) {
                    var textValue = this.options.tagValueProcessor(key, item);
                    textValue = this.replaceEntitiesValue(textValue);
                    listTagVal += textValue;
                  } else {
                    listTagVal += this.buildTextValNode(item, key, '', level);
                  }
                }
              }
              if (this.options.oneListGroup) {
                listTagVal = this.buildObjectNode(listTagVal, key, listTagAttr, level);
              }
              val += listTagVal;
            } else {
              //nested node
              if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
                var Ks = Object.keys(jObj[key]);
                var L = Ks.length;
                for (var _j = 0; _j < L; _j++) {
                  attrStr += this.buildAttrPairStr(Ks[_j], '' + jObj[key][Ks[_j]]);
                }
              } else {
                val += this.processTextOrObjNode(jObj[key], key, level, ajPath);
              }
            }
          }
          return {
            attrStr: attrStr,
            val: val
          };
        };
        Builder.prototype.buildAttrPairStr = function (attrName, val) {
          val = this.options.attributeValueProcessor(attrName, '' + val);
          val = this.replaceEntitiesValue(val);
          if (this.options.suppressBooleanAttributes && val === "true") {
            return ' ' + attrName;
          } else return ' ' + attrName + '="' + val + '"';
        };
        function processTextOrObjNode(object, key, level, ajPath) {
          var result = this.j2x(object, level + 1, ajPath.concat(key));
          if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
            return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
          } else {
            return this.buildObjectNode(result.val, key, result.attrStr, level);
          }
        }
        Builder.prototype.buildObjectNode = function (val, key, attrStr, level) {
          if (val === "") {
            if (key[0] === "?") return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;else {
              return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
            }
          } else {
            var tagEndExp = '</' + key + this.tagEndChar;
            var piClosingChar = "";
            if (key[0] === "?") {
              piClosingChar = "?";
              tagEndExp = "";
            }

            // attrStr is an empty string in case the attribute came as undefined or null
            if ((attrStr || attrStr === '') && val.indexOf('<') === -1) {
              return this.indentate(level) + '<' + key + attrStr + piClosingChar + '>' + val + tagEndExp;
            } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
              return this.indentate(level) + "<!--".concat(val, "-->") + this.newLine;
            } else {
              return this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar + val + this.indentate(level) + tagEndExp;
            }
          }
        };
        Builder.prototype.closeTag = function (key) {
          var closeTag = "";
          if (this.options.unpairedTags.indexOf(key) !== -1) {
            //unpaired
            if (!this.options.suppressUnpairedNode) closeTag = "/";
          } else if (this.options.suppressEmptyNode) {
            //empty
            closeTag = "/";
          } else {
            closeTag = "></".concat(key);
          }
          return closeTag;
        };
        function buildEmptyObjNode(val, key, attrStr, level) {
          if (val !== '') {
            return this.buildObjectNode(val, key, attrStr, level);
          } else {
            if (key[0] === "?") return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;else {
              return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
              // return this.buildTagStr(level,key, attrStr);
            }
          }
        }
        Builder.prototype.buildTextValNode = function (val, key, attrStr, level) {
          if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
            return this.indentate(level) + "<![CDATA[".concat(val, "]]>") + this.newLine;
          } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
            return this.indentate(level) + "<!--".concat(val, "-->") + this.newLine;
          } else if (key[0] === "?") {
            //PI tag
            return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
          } else {
            var textValue = this.options.tagValueProcessor(key, val);
            textValue = this.replaceEntitiesValue(textValue);
            if (textValue === '') {
              return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
            } else {
              return this.indentate(level) + '<' + key + attrStr + '>' + textValue + '</' + key + this.tagEndChar;
            }
          }
        };
        Builder.prototype.replaceEntitiesValue = function (textValue) {
          if (textValue && textValue.length > 0 && this.options.processEntities) {
            for (var i = 0; i < this.options.entities.length; i++) {
              var entity = this.options.entities[i];
              textValue = textValue.replace(entity.regex, entity.val);
            }
          }
          return textValue;
        };
        function indentate(level) {
          return this.options.indentBy.repeat(level);
        }
        function isAttribute(name /*, options*/) {
          if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
            return name.substr(this.attrPrefixLen);
          } else {
            return false;
          }
        }
        ; // ./node_modules/fast-xml-parser/src/fxp.js

        var _XMLValidator = {
          validate: validate
        };

        /***/
      }),
      /***/956: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        /*
        
        npx browserify ./src/entry.js -o out/packAll.js
        npx babel out/packAll.js --out-file out/packAll.jsfl
        
        // webpack
        // npx babel out/packAll.js --out-file out/packAll.jsfl
        // node ./tools/iife/wrap-iife.js
        
        
         */

        module.exports = __webpack_require__(351);

        /***/
      })

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/var cachedModule = __webpack_module_cache__[moduleId];
      /******/
      if (cachedModule !== undefined) {
        /******/return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = __webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/
    !function () {
      /******/ // define getter functions for harmony exports
      /******/__webpack_require__.d = function (exports, definition) {
        /******/for (var key in definition) {
          /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            /******/Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key]
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    }();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    !function () {
      /******/__webpack_require__.o = function (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
      /******/
    }();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    !function () {
      /******/ // define __esModule on exports
      /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
    }();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module used 'module' so it can't be inlined
    /******/
    var __webpack_exports__ = __webpack_require__(956);
    /******/
    /******/
    return __webpack_exports__;
    /******/
  }();
});

})();