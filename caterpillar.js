'use strict'

function isEmpty(arr) {
  if(arr[0] == null){
    return true
  } else {
    return false
  }
}
function count(arr) {
  let panjang = 0
  arr.forEach(function(data){
    panjang++
  })
  return panjang
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
  let flat = arr.reduce(function(prev, curr){
    return prev.concat(flatmore(curr))
  }, [])
  return flat
}
function flatmore(curr){
  if (Array.isArray(curr)){
    return flatten(curr)
  } else {
    return curr
  }
}
console.log(flatten([1, [[[[2]]], 3], 4, [5, [6, 7]]]));
