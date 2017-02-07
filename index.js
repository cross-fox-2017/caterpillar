`use strict`
var _ = require("./lib/caterpillar")

let array = [1,2,3,4]
let array1 = []
let array2 = [1,2,3,[2,3],4,[5,[6,7]]]

console.log(_.isEmpty(array1));

console.log(_.count(array));

console.log(_.head(array));

console.log(_.tail(array));

console.log(_.flatten(array2));
