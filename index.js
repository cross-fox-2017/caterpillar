var _ = require('./lib/caterpillar');

let arr1 = []
let arr2 = [1,2,3]
let arr3 = [4,5,6]
let arr4 = [2,3]

console.log(_.isEmpty(arr1));
console.log(_.isEmpty(arr2));

console.log(_.count(arr1));
console.log(_.count(arr2));

console.log(_.head(arr2));
console.log(_.head(arr3));

console.log(_.tail(arr2));
console.log(_.tail(arr4));

console.log(_.flatten([1,[2,3],4,[5,[[[6]],7]]]));
