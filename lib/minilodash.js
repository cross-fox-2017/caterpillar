var _ = {
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
  flatten: function(arr){
    return arr.reduce(function(a, b) {
      if(b[0] != null) {
        return a.concat(_.flatten(b))
      } else {
        return a.concat(b)
      }
    }, [])
  }
}
module.exports = _
