import {overload} from "../src";

const o = overload.o;
var method = overload()
    .args().use(function() {
        return 'hi';
    })
    .expose();

// method.args === undefined
// method.use === undefined
// etc...
const res = method()
console.log(res)

function printAllProperties(obj: any, label = 'Object') {
    console.log(`\n=== ${label} ===`);

    let current = obj;
    let depth = 0;

    while (current != null && depth < 5) { // 防止无限循环（如 Object.prototype.__proto__ === null）
        console.log(`\n--- Level ${depth}:`, current.constructor?.name || 'Unknown');

        // 获取自身所有属性（包括不可枚举）
        const props = Object.getOwnPropertyNames(current);
        const symbols = Object.getOwnPropertySymbols(current);

        for (const prop of [...props, ...symbols]) {
            try {
                const descriptor = Object.getOwnPropertyDescriptor(current, prop);
                const value = current[prop];
                const type = typeof value;
                const isFunc = type === 'function';

                console.log(
                    `${String(prop).padEnd(20)} | ${isFunc ? 'FUNC' : 'PROP'} | ${
                        isFunc ? `[Function: ${value.name || 'anonymous'}]` : JSON.stringify(value)
                    }`
                );
            } catch (err) {
                console.log(`${String(prop).padEnd(20)} | ERROR | ${err.message}`);
            }
        }

        current = Object.getPrototypeOf(current);
        depth++;
    }
}

printAllProperties(method, 'OverloadCaller');

// console.log(method.args === undefined)
// console.log(method.use === undefined)
