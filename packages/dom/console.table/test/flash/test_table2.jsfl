require(["console.table"], function(table) {
    // const { table: renderTable } = table;

    const users = [
        { name: 'Alice', age: 25, email: 'alice@example.com' },
        { name: 'Bob', age: 30, email: 'bob@example.com' },
        { name: 'Charlie', age: 35 }
    ];

    console.table(users);
    console.table(users, ['name', 'age']);
    console.table(['apple', 'banana']);
    console.table({ foo: 'bar', count: 42, active: true });
});


