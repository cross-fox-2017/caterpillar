var Minilodash = require('./lib/minilodash.js')


console.log("isEmpty");
console.log(`Minilodash.isEmpty([1,2,3]) // `,Minilodash.isEmpty([1,2,3]));
console.log(`Minilodash.isEmpty([]) // `,Minilodash.isEmpty([])+"\n");

console.log("Count");
console.log(`Minilodash.count([1,2,3]) // `,Minilodash.count([1,2,3]));
console.log(`Minilodash.count([]) // `,Minilodash.count([])+"\n");

console.log("head");
console.log(`Minilodash.head([1,2,3]) // `,Minilodash.head([1,2,3]));
console.log(`Minilodash.head([5,2,3]) // `,Minilodash.head([5,2,3])+"\n");


console.log("tail");
console.log(`Minilodash.head([1,2,3]) // `,Minilodash.tail([1,2,3]));
console.log(`Minilodash.head([5,3,3]) // `,Minilodash.tail([5,3,3]));


console.log("\nflatten");
console.log(`Minilodash.flatten([1,[2,3],4,[5,[6,[7]]]]) // `,Minilodash.flatten([1,[2,3],4,[5,[6,[7]]]]));
