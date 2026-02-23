//arrays
//javaScript creates shallow copy means properties share the same reference in memory, so if we change one property, it will affect the other property as well.
const myArr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const myHeros = ["shaktiman", "nagraj", "doga", "superman", "batman"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[5]);

// Array methods

myArr.push(10);
myArr.push(11);
myArr.pop();

myArr.unshift(9); // unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
myArr.shift(); // shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

console.log(myArr.includes(15));
console.log(myArr.indexOf(11));

const newArr = myArr.join(); // join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object).

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice, spice

// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log( myn1);


//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
console.log("B ", myArr);
const myn2 = myArr.splice(1,3);

console.log("C ", myArr);
console.log( myn2);

