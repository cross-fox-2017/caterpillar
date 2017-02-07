function isEmpty(data) {
    if (data) {
        return false
    }
    else {
        return true
    }
}

function count(data){
  var angka = 0
  for(var item in data)
  {
    angka++
  }
  return angka
}

function head(data)
{
return data.shift()
}

function tail(data)
{
  data.shift()
  return data.toString()
}

function flatten(data) {
    var temp = data.reduce(function(a, b) {
        if(typeof b == "object") {
            return a.concat(flatten(b))
        }
        else {
            return a.concat(b);
        }
    }, []);
    return temp
  }

module.exports = {
    isEmpty: isEmpty,
    count: count,
    head: head,
    tail: tail,
    flatten: flatten
}
