module.exports = {
  isEmpty: function (array) {
    if (array[0]) {
      return false
    }else {
      return true
    }
  },

  count: function (array) {
    let count = 0
    array.forEach(function (data) {
      count++
    })
    return count
  },
  head: function (array) {
    return array[0]
  },
  tail: function (array) {
    return array[this.count(array) - 1]
  },
  flatten: function (array) {
    // let flat = arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
    //
    // return flat

    let thisFlat = this

    let value = array.reduce(function (defaultValue, CurrentValue) {
      return defaultValue.concat(Array.isArray(CurrentValue) ? thisFlat.flatten(CurrentValue) : CurrentValue)
    }, [])
    return value
  }

}
