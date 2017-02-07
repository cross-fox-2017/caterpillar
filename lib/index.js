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
  if (array[0] == null) {
    return a
  } else {
    a++
    array.splice(0, 1)
    return count(array, a)
  }
}

console.log(count([])) // 0
console.log(count([1, 2, 3])) // 3
