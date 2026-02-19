// #Data Types
//Primitive

//7 types : String, Number, BigInt, Boolean, undefined, Symbol, null
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 1234567890123456789012345678901234567890n

//Non-primitive or Reference types

//Arrays, Objects, Functions
const heros = ["shaktiman", "naagraj", "spiderman"]

let myObj = {
    name: "Sneha",
    age: 23
}

const myFunction = function(){
    console.log("Hello World")
}


console.log(typeof bigNumber)// bigint

console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof myFunction) // function

//JavaScript is a dynamically typed language, which means that variables can hold values of any type without any type enforcement. The type of a variable is determined at runtime based on the value it holds.




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Stack & Heap Memory ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory (Primitive), Heap Memory (Non-primitive)

let myEmail = "Sneha12@gmail.com"

let anotherEmail = myEmail
anotherEmail = "sneha12@google.com"

console.log(myEmail);
console.log(anotherEmail);



let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}


let userTwo = userOne

userTwo.email = "xyz@google.com"

console.log(userOne.email);
console.log(userTwo.email);