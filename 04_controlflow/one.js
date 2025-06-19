  // if

const isUserloggedin = true
//   if(isUserloggedin){

//   }

const temperature = 41
if(temperature == 50){
    console.log("Temp is less than 50");
}
else console.log("temp is greater than 41");




if(2 == "2 "){
    console.log("isExecuted");
     
}
if(2 === "2 "){
    console.log("false");
     
}

  // <, >, >= , <= , == , != , === 

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power is: ${power}`);
    
// } 
// console.log(power);

// const balance = 1000
// if (balance >500) console.log("testesterone");  

// if(balance < 500){
//     console.log("balance is less than");
    
// }
// else if(balance ==1000){
//     console.log("suff balance");
    
// }

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
  
if(userLoggedin && debitCard){
    console.log("Allowed to shop");
    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("welcome sir");
    
}
