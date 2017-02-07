'use strict'

function isEmpty (array) {
  if (array[0] == null) {
    return true
  } else {
    return false
  }
}

console.log(isEmpty([])) // true
console.log(isEmpty([1, 2, 3])) // false

function count (array, a = 0) {
  let new_arr = array.slice('')
  if (new_arr[0] == null) {
    return a
  } else {
    a++
    new_arr.splice(0, 1)
    return count(new_arr, a)
  }
}

console.log(count([])) // 0
console.log(count([1, 2, 3])) // 3

function head (array) {
  return array[0]
}

console.log(head([1, 2, 3]))
console.log(head([4, 5, 7]))

function tail (array) {
  let new_arr = array.slice('')
  new_arr.splice(0, 1)
  return new_arr
}

console.log(tail([1, 2, 3]))
console.log(tail([4, 5, 7]))

function flatten (array) {
  let new_arr = array.slice('')
  return array.reduce(function (previousVal, currentVal) {
    return previousVal.concat(Array.isArray(currentVal) ? flatten(currentVal) : currentVal)
  }, [])
}

console.log(flatten([1, [2, 3], 4, [5, 6, 7], [5, [6, 8, [8, 9, 3]], 7]]))
