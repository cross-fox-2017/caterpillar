const myLodash = require('./lib/index');

console.log(myLodash.isEmpty([1,2,3]));
console.log(myLodash.isEmpty([]));

console.log(myLodash.count([]));
console.log(myLodash.count([1,2,3]));

console.log(myLodash.head([1,2,3]))
console.log(myLodash.head([4,5,7]))

console.log(myLodash.tail([1,2,3]))
console.log(myLodash.tail([2,3]))

console.log(myLodash.flatten([1,[2,3],4,[5,[6,7]]]));
