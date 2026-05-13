const user = {
    username: "sneha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "prachi"
user.welcomeMessage()

console.log(this) //will give {} result empty object //browser k andar global objects hai window

function chai(){
    let username = "hitesh"
    console.log(this.username) //cannot use this like this in function
}

chai()


const chai1 = function (){
    let username = "hitesh"
    console.log(this.username) //cannot use this like this in function give output: undefined
}

chai1()

const chai2 = () => {
    let username = "hitesh"
    console.log(this) //cannot use this like this in function give output: {} i.e empty object
}

chai2()


// +++++++++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++++++++++++++++++++
//explict return (means return keyword is used)
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))


//Implicit Return
const add_Two = (num1, num2) =>  num1 + num2    // in the same line (hamne maan liyea return nhi likhne ki jrurat hai)
console.log(add_Two(3,4))


//OR

const add__Two = (num1, num2) =>  (num1 + num2)    // {} -> return likhna hoga , () paranthesis return word nhi likhna hoga
//const add__Two = (num1, num2) =>  ({username: "sneha"})
console.log(add__Two(3,4))