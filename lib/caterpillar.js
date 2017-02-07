'use strict'

module.exports = {
  isEmpty : function(arr){
    if (arr[0])
      return false
    return true
  },
  count : function(arr){
    let sum = 0
    arr.forEach(function(){
      sum +=1
    })
    return sum
  }
}
