/* isEmpty */
function isEmpty (input) {
  for (var variable in input) {
    return true
  }
  return false
}

/* count */
function count (input) {
  var hasil = 0
  input.forEach(function (element) {
    hasil++
  })
  return hasil
}

/* head */
function head (input) {
  var head = (!input[0]) ? [] : input[0]
  return head
}

/* tail */
function tail (input) {
  return input.splice(1)
}

/* flatten */
// function flatten (input) {
//   flatten()
// }

/* isEmpty */
console.log('isEmpty')
console.log('================')
console.log(isEmpty([]))
console.log(isEmpty([1, 2, 3]))
console.log('================')

/* count */
console.log('')
console.log('count')
console.log('================')
console.log(count([]))
console.log(count([1, 2, 3]))
console.log('================')

/* head */
console.log('')
console.log('head')
console.log('================')
console.log(head([]))
console.log(head([1, 2, 3]))
console.log('================')

/* tail */
console.log('')
console.log('tail')
console.log('================')
console.log(tail([]))
console.log(tail([1, 2, 3]))
console.log('================')

/* flatten */
// console.log('')
// console.log('flatten')
// console.log('================')
// console.log(flatten([]))
// console.log(flatten([1, 2, 3]))
// console.log('================')
