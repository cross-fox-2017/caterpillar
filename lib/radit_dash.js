var radit_dash = {

  isEmpty : function (input) {
    if(input[0] == undefined) return true
    else return false
  },

  count : function (input) {
    var total = 0
    input.forEach(function(x) {
      total += 1
    })
    return total
  },

  head : function (input) {
    return input[0]
  },

  tail : function (input) {
    input.shift()
    return input
  },

  flatten : function (input) {
    var result = input.reduce(function(x,y) {
      return x.concat(y)
    }, [])

    var status = true
    result.forEach(function(i) {
    if(Array.isArray(i) == true) status = false
    })

    if (status) return result
    else return radit_dash.flatten(result)

    }
}


module.exports = radit_dash
