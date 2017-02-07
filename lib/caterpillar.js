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
    array.forEach(function(){
      sum += 1
    })

    return sum
  },

  head: function(array){
    return array[0]
  },

  tail: function(array){
    return array.slice(1);
  },

  flatten: function(array){
    return array.join().split(',');

  }





}
