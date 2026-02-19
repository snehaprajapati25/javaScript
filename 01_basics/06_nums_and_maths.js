const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // to convert the number to a string with 2 decimal places

const otherBalance = 123.456789
console.log(otherBalance.toPrecision(3)); // to convert the number to a string with 3 significant digits
console.log(otherBalance.toPrecision(4));// to convert the number to a string with 4 significant digits

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // to convert the number to a string with commas as thousand separators
console.log(hundreds.toLocaleString('en-IN')); 


// +++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6));
console.log(Math.floor(4.6)); // to round down the number
console.log(Math.ceil(4.2)); // to round up the number
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));


console.log(Math.random()); // to generate a random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1); 

//NOTE   !Important
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min); // to generate a random number between min and max (inclusive)

