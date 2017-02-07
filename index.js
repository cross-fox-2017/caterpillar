const minilodash = require('./lib/minilodash');

var arr = [1,2,3,4,5]
var nestArr = [1,[2,3,[4,5]]]
console.log(minilodash.isEmpty(arr));
console.log(minilodash.count(arr));
console.log(minilodash.head(arr));
console.log(minilodash.tail(arr));
console.log(minilodash.flatten(nestArr));
