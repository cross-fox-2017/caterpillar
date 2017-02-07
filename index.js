const _ = require('./lib/minilodash');

var arr = [1,2,3,4,5]
var nestArr = [[0,2],1,[2,3,[4,5]]]
console.log(_.isEmpty(arr));
console.log(_.count(arr));
console.log(_.head(arr));
console.log(_.tail(arr));
console.log(_.flatten(nestArr));
