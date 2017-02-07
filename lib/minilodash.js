var Minilodash = {
    isEmpty: function(array) {
        var status = true
        array.forEach(function(data) {
            status = false
        })
        return status
    },
    count: function(array) {
        var hasil = 0
        array.forEach(function(data) {
            hasil += 1
        })
        return hasil
    },
    head: function(array) {
        return array[0]
    },
    tail: function(array) {
        array.shift()
        return array
    },
    flatten: function(array) {
        var hasil = array.reduce(function(a, b) {
            return a.concat(b)
        }, [])
        var status = true
        hasil.forEach(function(dataArray) {
            if (Array.isArray(dataArray) === true) {
                status = false
            }
        })
        // status.includes(true)
        if (status) {
            return hasil;
        } else {
            return Minilodash.flatten(hasil)
        }
    }
}




module.exports = Minilodash
