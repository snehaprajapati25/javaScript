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
    console.log(this.user)
}