/* flatten */
function flatten (input) {
  var tmp = input.reduce(function (a, b) {
    if (typeof (b) == 'object') { return a.concat(flatten(b)) }else { return a.concat(b) }
  }, [])
  return tmp
}

console.log('hallo')
/* flatten */
// flatten([1, [2 , 3], 4, [5 , 6]])
console.log(flatten([1, [2 , 3], 4, [5 , 6]]))
