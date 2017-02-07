function isEmpty (input) {
  for (var variable in input) {
    return true
  }
  return false
}

function count (input) {
  var hasil = 0
  input.forEach(function (element) {
    hasil += element
  })
  return hasil
}

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
