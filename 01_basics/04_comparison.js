// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined < 0)

// Note
// the reason is that an equality check == and comparisons >, <, >=, <= work differently.
// Comparisons convert null to a Number, treating it as 0.

console.log("2" === 2)  //checks value and type to be same
