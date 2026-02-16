const accountId = 144553
let accountEmail = "sneha@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let state;

//accountId = 2 // not allowed as accountId is a constant

accountEmail = "sneha@google.com"
accountPassword = "14566332"
accountCity = "Mumbai"

//console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, state]);

