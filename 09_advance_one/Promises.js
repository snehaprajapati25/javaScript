//The promise object represents the eventual completion for failure of an asynchronous operation and its resulting value. 

const promiseOne = new Promise(function(resolve, reject) {
    //do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() //resolve is connected wth then
    }, 1000)
})

//resolving the promise
promiseOne.then(function(){ 
    //firstly resolve the promise then execute this
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("async 2 resolved");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function () {
        resolve({username: "Sneha", email: "sneha@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Sneha", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

//promiseFour.then().catch()
promiseFour
.then((user) =>{
    console.log(user);
    return user.username;
})
.then((username)=> {
    console.log(username);
    
})
.catch(function (error) {
    console.log(error);
    
}).finally(() =>{ //it will always run
    console.log('The promise is either resolved or rejected');
})


const promiseFive = new Promise((resolve, reject)=> {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "javaScript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

//using try catch, then catch both will return same value but the thing is to get it know the syntax how to use it


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
    
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {   // to handle the response which upper then will send
    console.log(data);
})  
.catch((error) => console.log(error))

