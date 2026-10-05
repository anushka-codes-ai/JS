const accountId = 144553
let accountEmail ="anushka@gmail.com"
var accountPassword ="12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional sc
*/

accountEmail ="h@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

