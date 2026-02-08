/**
 * @file: test.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { overload } from './index'
const o =overload.o

const int = overload.define('int', v =>
  typeof v === 'number' && v % 1 === 0
)

overload.defineTypes({
  str: v => typeof v === 'string',
  bool: v => typeof v === 'boolean',
})


const fn = overload()
  .args(int).use(v => 'int')
  .args(o.str).use(v => 'string')

const f1 = fn(10)     // int
const f2 = fn('abc')  // string
console.log(f1)
console.log(f2)





// const method = overload()
//   .args(String).use(a => console.log(a))
//   .fallback(() => console.log('handled!'))
//
// method('hello') // hello
// method()        // handled!

