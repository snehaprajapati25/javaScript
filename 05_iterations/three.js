// for of (High Order Array Loops)

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}


const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)   
}


//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

//only for mps this style
for (const key of map) {
    console.log(key) // gives array [ 'IN', 'India' ]
}

for (const [key, value] of map) {
    console.log(key, ':-', value) // IN :- India
}


// NOTE
const myObject = {
    game1: 'NFS',
    game2: 'SpiderMan'
}

//will give error: myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value) 
// }