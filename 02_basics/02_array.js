const marvel_heroes = ["thor", "Ironman", "spiderMan"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

const all_heroes = marvel_heroes.concat(dc_heroes) // concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
console.log(all_heroes);



// spread operator is used to expand an iterable (like an array) into individual elements. It allows you to create a new array by combining the elements of existing arrays without modifying the original arrays.
const all_new_heroes = [...marvel_heroes, ...dc_heroes]; 
console.log(all_new_heroes)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];


// flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The default depth is 1, which means it will only flatten one level of nested arrays.
const real_array = another_array.flat(1); 
console.log(real_array); 


console.log(Array.isArray("Sneha"));

// Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. It can be used to convert a string into an array of characters.
console.log(Array.from("Sneha"));


//NOTE   !intresting case
// it will return an empty array because the object is not iterable. Array.from() method only works with iterable objects like arrays, strings, maps, sets, etc.
console.log(Array.from({name:"Sneha"})); 



let score1 = 100;
let score2 = 200;
let score3 = 300;

// Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. It is used to create an array from a set of arguments.
console.log(Array.of(score1, score2, score3));
