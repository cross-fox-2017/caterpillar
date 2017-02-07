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

  }
}




module.exports = Minilodash
