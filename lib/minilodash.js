var Minilodash = {
  isEmpty: function(array) {
    var status = true
    array.forEach(function(data) {
      status = false
    })
    return status
  },
  count: function(array) {
    var hasil = 0
    array.forEach(function(data) {
      hasil += 1
    })
    return hasil
  },
  head: function(array) {
    return array[0]
  },
  tail: function(array) {
    array.shift()
    return array
  },
  flatten: function(array) {
    return array[1].length
  }
}




module.exports = Minilodash
