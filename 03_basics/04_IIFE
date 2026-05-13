// Immediately Invoked Function Expressions (IIFE)

//why IIFE   !!!!IMPortant
//✅ Avoid pollution from global scope variables/functions.
//Earlier in JavaScript, variables from global scope could accidentally interfere with other code. IIFE creates its own private scope.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})(); //global scope k pollution se problem hote hai ki baar to us global scope k pollution ko hatane k liyea hmne IIFE ka use kiyea hai


//1st ()-> function defination
//2nd ()-> execution


//use ; to end the function code (to use 2 IIFE together one should end wth ;)
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} ) ('sneha');