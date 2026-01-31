import { stackTracer } from './index';

stackTracer.trace(new Error('boom'));

stackTracer.trace('test', {
  format: 'json'
});

console.log(stackTracer.history());

stackTracer.clear();
