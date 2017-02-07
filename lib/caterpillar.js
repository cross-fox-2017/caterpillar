`use strict`
module.exports = {
  isEmpty: function(array){
    if(array[0]){
      return false
    }else{
      return true
    }
  },

  count: function(array){
    var sum = 0
    for (var i = 0; i < array.length; i++) {
      sum += 1
    }

    return sum
  }

}
