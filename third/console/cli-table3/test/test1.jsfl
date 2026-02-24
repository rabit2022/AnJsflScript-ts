// requirejs modules file test1.js
require(["cli-table3"], function (Table) {
//     var Table = require('cli-table3');
//     console.log(typeof Table);

    var table = new Table();
    // console.log(typeof table);

    table.push(
        { 'Some key': 'Some value' }
        , { 'Another key': 'Another value' }
    );

    console.log(table.toString());

});