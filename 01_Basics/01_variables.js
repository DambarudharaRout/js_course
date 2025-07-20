const accountId = 144553 
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Rourkela"
let accountState;

// accountId = 2 //can't be changed 
console.log(accountId);
accountEmail = "vfc@email.com"
accountPassword = "231"
accountCity = "BBSR"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
NOTE: Prefer not to use var
because of issue in block scope and functional scope
*/
