const self = module.exports = {
  isEmpty: array => {
    if(array[0]){
      return true
    } else {
      return false
    }
  },
  count: (array, x = 0) => {
    if(array[0]) {
      array.splice(0,1)
      x++
      return self.count(array, x)
    } else {
      return x
    }
  },
  head: array => {
    return array[0]
  },
  tail: array => {
    let i = 0
    let result = []
    array.forEach(function(x){
      if(array[i] !== self.head(array)){
        result.push(x)
      }
      i++
    })
    return result
  },
  flatten: array => {
    return array.reduce((a, b) => a.concat(Array.isArray(b) ? self.flatten(b) : b), [])
  }
}
