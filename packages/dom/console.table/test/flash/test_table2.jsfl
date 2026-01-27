require(["table"], function(table) {
    const { table: renderTable } = table;

    var a = [{ name: "Alice", age: 30 }];
    const output = renderTable(a);
    console.log(output);
});


