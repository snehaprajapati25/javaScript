const name = "Sneha"
const repoCount = 50

// console.log(name + " has " + repoCount + " repositories") // wrong practice


console.log(`Hello my name is ${name} and my repo count is ${repoCount}` );

const gameName = new String("sneha--yin")

console.log(gameName.length);
console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("s")); // to get the index of a particular character

const newString = gameName.substring(0,3) // 3 is not included, it will give us the string from index 0 to index 2
console.log(newString);

const anotherString = gameName.slice(-4,3) // same as substring
console.log(anotherString);

const newStringOne = "      sneha    "
console.log(newStringOne.trim()); //remove spaces from both sides of the string

const url = "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCDQ%20"
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar4'));

console.log(gameName.split('-')); // to split the string into an array based on the separator provided




