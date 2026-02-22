// iife file test1.jsfl
(function () {
const set = new Set();
set.add(0);
set.add(1);

const arr = Array.from(set);

// console.log(JSON.stringify(set, null, 4));
console.log(JSON.stringify(arr, null, 4));
})();