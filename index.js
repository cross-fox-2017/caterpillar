const sanScript = require('./lib/sanScript')

var array_number1 = []
var array_number2 = ['irsan', 'ganteng', 'kece', 'abis', 'parah']
var array_number3 = ['irsan', ['ganteng', 'kece'], 'banget', ['tapi', ['boong', 'gitu']]]

// isEmpty
console.log(sanScript.isEmpty(array_number2))
// count
console.log(sanScript.count(array_number2))

// tail
console.log(sanScript.tail(array_number2))
// head

// flatten
console.log(sanScript.flatten(array_number3))
