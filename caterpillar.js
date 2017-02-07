'use strict'

function isEmpty(arr) {
  if(arr[0] == null){
    return true
  } else {
    return false
  }
}
function count(arr) {
  let length = 0
  arr.forEach(function(data){
    length++
  })
  return length
}
function head(arr) {
  return arr[0]
}
function tail(arr) {
  let tail = arr.filter(function(curVal, index){
    if (index != 0){
      return curVal
    }
  })
  return tail
}
function flatten(arr) {

}
console.log(tail([2,3]));
console.log(tail([1,2,3]));
