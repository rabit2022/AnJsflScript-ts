const users = [
        { name: 'Alice', age: 25, email: 'alice@example.com' },
        { name: 'Bob', age: 30, email: 'bob@example.com' },
        { name: 'Charlie', age: 35 }
];


const c = console;
c.table(users);
c.table(users, ['name', 'age']);
c.table(['apple', 'banana']);
c.table({ foo: 'bar', count: 42, active: true });


