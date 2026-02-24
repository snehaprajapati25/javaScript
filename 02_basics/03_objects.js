// singleton object: constructor se bhi bana sakte hain, lekin yeh ek hi instance create karega
//Object.create


// object literals

const mySym = Symbol("key1");


const JsUser = {
    name: "Sneha",  //name , age etc are treated as string "name" internally
    "full name": "Sneha Prajapati",
    [mySym]: "mykey1", //used as symbol syntax
    age: 18,
    location: "India",
    email: "sneha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "sneha@chatgpt.com";
// Object.freeze(JsUser); //freeze the object, no changes allowed
JsUser.email = "sneha@microsoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this keyword refers to the current object, i.e. JsUser or jb v same obj ko reference krna ho
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

