const XRegExp = require('xregexp');


// Using named capture and flag x for free-spacing and line comments
const date = XRegExp(
    `(?<year>  [0-9]{4} ) -?  # year
     (?<month> [0-9]{2} ) -?  # month
     (?<day>   [0-9]{2} )     # day`, 'x');

// XRegExp.exec provides named backreferences on the result's groups property
let match = XRegExp.exec('2021-02-22', date);
const year = match.groups.year; // -> '2021'
console.log(year);