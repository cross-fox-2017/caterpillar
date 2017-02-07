module.exports = {
  isEmpty: function(arr) {
    if (arr[0] == null) {
      return true
    } else {
      return false
    }
  },
  count: function(arr) {
    var count = 0
    arr.forEach(function(x) {
      count++
    })
    return count
  },
  head: function(arr) {
    return arr[0]
  },
  tail: function(arr) {
    return arr.slice(1)
  },
  flatten: function(arr) {
    var newArr = []
    var a = arr.join().split(',')
    a.forEach(function(x) {
      newArr.push(parseInt(x))
    })
    return newArr
  }
}
