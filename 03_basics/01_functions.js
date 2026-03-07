function sayMyName(){

    console.log("S")
    console.log("N")
    console.log("E")
    console.log("H")
    console.log("A")
}

sayMyName();   // function call or function invocation

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}

const result = addTwoNumbers(3, 4);   // function call or function invocation
console.log(result);



function loginUserMessage(username = "sam"){  //default parameter so if case won't be executed
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`;  //string interpolation
}

// console.log(loginUserMessage("SNEHA"));
console.log(loginUserMessage());


function calculateCartPrice(...num1){  //...num1 is rest parameter which will take all the arguments passed to the function and store them in an array called num1
    return num1
}


// !!important
// function calculateCartPrice(val1, val2, ...num1){  
//     return num1                     //will return only [300, 400] because rest parameter should be the last parameter in the function and it will take all the arguments passed to the function after val1 and val2 and store them in an array called num1
// }

console.log(calculateCartPrice(100, 200, 300, 400));


const user = {
    username: "sneha",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 299
})


const myNewArray = [200, 300, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([1000, 2000, 3000, 4000]))