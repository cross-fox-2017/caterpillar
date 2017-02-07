const radit_dash = require('./lib/radit_dash.js');


// // isEmpty
// console.log(radit_dash.isEmpty([]));        // true
// console.log(radit_dash.isEmpty([1,2,3]));   // false
// console.log('\n');
// // count
// console.log(radit_dash.count([]));        // 0
// console.log(radit_dash.count([1,2,3]));   // 3
// console.log('\n');
//
// // head
// console.log(radit_dash.head([5,6,7]));     // 5
// console.log(radit_dash.head([8,9,0]));     // 8
// console.log('\n');
//
// // tail
// console.log(radit_dash.tail([5,6,7]));     // [6,7]
// console.log(radit_dash.tail([8,9,0]));     // [9,0]
// console.log('\n');

// flatten
console.log(radit_dash.flatten([1,[2,3],[4],[5,[6,7,[8,[[9, [[[[[[[[[[[[10]]]]],11]]]]]]]]]]]]])); // [1,2,3,4,5,6,7,8,9,10,11]
