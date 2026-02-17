//let score = "33abc"
//let score = null
let score = undefined

console.log(typeof score) //number

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);


//summary of value
//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN


//let isLoggedIn = 1
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//sneha => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);


// ***********************************Operations in JavaScript***********************************

let value = 3
let negValue = -value
console.log(negValue);


//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/2);
//console.log(2%3);


let str1 = "hello"
let str2 = "sneha"

let str3 = str1 + " " + str2
console.log(str3);


console.log("1" + 2); // "12" as string
console.log(1 + "2"); // "12" as 
console.log("1" + 2 + 2); // "122" preference to string as comes first
console.log(1 + 2 + "2"); // "32" first add and then convert to string



let gameCounter = 100
gameCounter++
console.log(gameCounter);

// a++ (Post-increment)
// First uses the current value
// Then increments the value


// ++a (Pre-increment)
// First increments the value
// Then uses the updated value