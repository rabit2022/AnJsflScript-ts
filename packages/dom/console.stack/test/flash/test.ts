// import { stackTracer } from 'console.stack';
// stackTracer.trace(new Error('boom'));

import 'console.stack';
console.stack(new Error('boom'),{
    format:'json'
});

// stackTracer.trace('test', {
//   format: 'table'
// });
//
// console.log(stackTracer.history());
//
// stackTracer.clear();
