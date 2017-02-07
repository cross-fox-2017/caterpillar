var radit_dash = {
  isEmpty : function (input) {
    var status = true
    input.forEach(function(data) {
      status = false
    })
    return status
  },

  count : function (input) {
    var total = 0
    input.forEach(function(data) {
      total += 1
    })
    return total
  }
}

module.exports = radit_dash
