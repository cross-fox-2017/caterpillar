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
function first() {

}
function head() {

}
function tail() {

}
function flatten() {

}
console.log(count([]));
console.log(count([1,2,3]));
