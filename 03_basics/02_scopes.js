let a = 10  //global scope variable
const b = 20
// var c = 30  //var is function scoped and can be re-declared and updated but it is not recommended to use var because it can lead to bugs and confusion


if(true){
    let a = 100  //block scope 
    const b = 200
    console.log("INNER: ", a)
}


console.log(a);
console.log(b);
// console.log(c);


//scopes
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    two()
}

one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
}



//+++++++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++++++

console.log(addone(5))


function addone(num){
    return num + 1
}


//addTwo(5) // not possible to call addTwo before it is defined because it is a function expression and it is not hoisted like function declarations
const addTwo = function(num){
    return num + 2
}

