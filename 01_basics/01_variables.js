const accountId = 144553
let accountEmail = "abhishek@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2
accountEmail = "hello@gmail.com"
accountPassword = "14623"
accountCity = "Maihar"

// console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountCity,accountPassword,accountState])
