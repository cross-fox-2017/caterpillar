var lodashkecil={
  isEmpty: function(arr){
    if(!arr[0]){
      return true
    }
    else{
      return false
    }
  },

  count:function(arr){
    var a= 0
    arr.forEach(function(x){
      a++
    })
    return a
  },

  head:function(arr){
    return arr[0]
  },

   tail:function(arr){
    var newArr = arr.slice(1)
    return newArr
  },

  flatten: function (arr){
    var newArr = arr.slice()
    var j= newArr.reduce(function(a,b){
        return a.concat(b)
    },[])
    var cek=0
    j.forEach(function(x){
      if(Array.isArray(x)===true){
        cek=1
      }
    })
    if(cek===1){
      return lodashkecil.flatten(j)
    }
    else{
      return j
    }

  }
}
module.exports = lodashkecil
