//if 
const temperature = 40;

if(temperature === 40){
//code execute, if in case in code true->false code will not execute 
  console.log("less than 50")
}else{
    console.log("temperature is greater than 50")
}

console.log("Executed")

//comparion operator
//<, >, <=, >=, == (check for values), !=, === (check for data type and value), !==(means strict not equal to i.e Value is different OR Data type is different)

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}


const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard){
    console.log("Aloow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged In")
}